"use client";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("IELTS Academic Preparation");
  const [method, setMethod] = useState("WhatsApp");
  const [errors, setErrors] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found: string[] = [];

    if (name.trim().length < 2)
      found.push(t("Enter your name.", "اكتبي اسمك."));
    if (!/^\S+@\S+\.\S+$/.test(email))
      found.push(t("Enter a valid email address.", "اكتبي إيميل صحيح."));
    if (!/^[+\d\s-]{8,15}$/.test(phone))
      found.push(t("Enter a valid phone number.", "اكتبي رقم تليفون صحيح."));

    setErrors(found);
    if (found.length > 0) return;

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mgaoyyor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, phone, course, method }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        setErrors([
          t(
            "Something went wrong. Please try again or use WhatsApp.",
            "حصلت مشكلة. جرّبي تاني أو استخدمي واتساب.",
          ),
        ]);
      }
    } catch (error) {
      setErrors([
        t(
          "Network error. Please try again or use WhatsApp.",
          "مشكلة في الاتصال. جرّبي تاني أو استخدمي واتساب.",
        ),
      ]);
    }

    setLoading(false);
  }

  if (sent) {
    return (
      <div className="bg-white border-s-4 border-gold p-6">
        <p className="font-serif text-2xl">
          {t("Thank you, ", "شكرًا ")}
          {name}.
        </p>
        <p className="mt-2">
          {t(
            "Your request was received. I will reply by " + method + " soon.",
            "وصل طلبك. هرد عليكي قريب عن طريق " + method + ".",
          )}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 flex flex-col gap-4"
      noValidate
    >
      {errors.length > 0 && (
        <ul className="text-red-700 text-sm list-disc ps-5">
          {errors.map(function (err) {
            return <li key={err}>{err}</li>;
          })}
        </ul>
      )}

      <label className="flex flex-col text-sm gap-1">
        {t("Name", "الاسم")}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
      </label>
      <label className="flex flex-col text-sm gap-1">
        {t("Email", "الإيميل")}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
      </label>
      <label className="flex flex-col text-sm gap-1">
        {t("Phone", "التليفون")}
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2"
        />
      </label>
      <label className="flex flex-col text-sm gap-1">
        {t("Course", "الكورس")}
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="border p-2"
        >
          <option value="IELTS Academic Preparation">
            {t("IELTS Academic Preparation", "تحضير IELTS أكاديمي")}
          </option>
          <option value="IELTS General Training">
            {t("IELTS General Training", "IELTS جنرال")}
          </option>
          <option value="Speaking Practice">
            {t("Speaking Practice", "تدريب Speaking")}
          </option>
          <option value="Writing Skills">
            {t("Writing Skills", "مهارات Writing")}
          </option>
          <option value="Private Online Lessons">
            {t("Private Online Lessons", "حصص خاصة أونلاين")}
          </option>
        </select>
      </label>
      <label className="flex flex-col text-sm gap-1">
        {t("Preferred contact method", "طريقة التواصل المفضلة")}
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="border p-2"
        >
          <option value="WhatsApp">{t("WhatsApp", "واتساب")}</option>
          <option value="Email">{t("Email", "إيميل")}</option>
          <option value="Phone call">{t("Phone call", "مكالمة تليفون")}</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-navy text-cream py-3 disabled:opacity-60"
      >
        {loading
          ? t("Sending...", "جاري الإرسال...")
          : t("Send request", "ابعت الطلب")}
      </button>
    </form>
  );
}
