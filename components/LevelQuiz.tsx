"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function LevelQuiz() {
  const { t } = useLanguage();
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
      setError(true);
      return;
    }

    setError(false);
    let points = 0;
    if (q1 === "goes") points = points + 1;
    if (q2 === "had") points = points + 1;
    if (q3 === "better") points = points + 1;
    if (q4 === "since") points = points + 1;
    if (q5 === "necessary") points = points + 1;
    setScore(points);
  }

  function handleRestart() {
    setQ1("");
    setQ2("");
    setQ3("");
    setQ4("");
    setQ5("");
    setScore(null);
  }

  if (score !== null) {
    let level = "";
    let advice = "";

    if (score <= 2) {
      level = t("Foundation level", "مستوى تأسيس");
      advice = t(
        "We recommend Private Online Lessons to build a strong base before the exam.",
        "بنرشح الحصص الخاصة أونلاين عشان نبني أساس قوي قبل الامتحان.",
      );
    } else if (score <= 4) {
      level = t("Intermediate level", "مستوى متوسط");
      advice = t(
        "You are ready for IELTS Academic or General Training preparation.",
        "أنتِ جاهزة لتحضير IELTS أكاديمي أو جنرال.",
      );
    } else {
      level = t("Upper-intermediate level", "مستوى فوق المتوسط");
      advice = t(
        "Focus on Speaking Practice and Writing Skills to push your band score higher.",
        "ركّزي على تدريب Speaking ومهارات Writing عشان ترفعي درجتك.",
      );
    }

    return (
      <div className="bg-white border-s-4 border-gold p-6 shadow-sm">
        <p className="text-sm">{t("Your score", "نتيجتك")}</p>
        <p className="font-serif text-5xl text-gold">{score} / 5</p>
        <p className="font-serif text-2xl mt-3">{level}</p>
        <p className="mt-2">{advice}</p>
        <p className="mt-3 text-xs opacity-70">
          {t(
            "This is a quick demo test, not an official IELTS result.",
            "ده اختبار تجريبي سريع، مش نتيجة IELTS رسمية.",
          )}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="bg-navy text-cream px-6 py-3 rounded"
          >
            {t("Book a consultation", "احجز استشارة")}
          </Link>
          <button
            onClick={handleRestart}
            className="border border-gold px-6 py-3 rounded"
          >
            {t("Try again", "حاول تاني")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="bg-white p-6 shadow-sm" dir="ltr">
        <p className="font-semibold">1. She ___ to university every day.</p>
        <label className="block mt-2">
          <input
            type="radio"
            name="q1"
            checked={q1 === "go"}
            onChange={() => setQ1("go")}
          />{" "}
          go
        </label>
        <label className="block">
          <input
            type="radio"
            name="q1"
            checked={q1 === "goes"}
            onChange={() => setQ1("goes")}
          />{" "}
          goes
        </label>
        <label className="block">
          <input
            type="radio"
            name="q1"
            checked={q1 === "going"}
            onChange={() => setQ1("going")}
          />{" "}
          going
        </label>
      </div>

      <div className="bg-white p-6 shadow-sm" dir="ltr">
        <p className="font-semibold">
          2. If I ___ more time, I would study abroad.
        </p>
        <label className="block mt-2">
          <input
            type="radio"
            name="q2"
            checked={q2 === "have"}
            onChange={() => setQ2("have")}
          />{" "}
          have
        </label>
        <label className="block">
          <input
            type="radio"
            name="q2"
            checked={q2 === "had"}
            onChange={() => setQ2("had")}
          />{" "}
          had
        </label>
        <label className="block">
          <input
            type="radio"
            name="q2"
            checked={q2 === "will have"}
            onChange={() => setQ2("will have")}
          />{" "}
          will have
        </label>
      </div>

      <div className="bg-white p-6 shadow-sm" dir="ltr">
        <p className="font-semibold">
          3. The results were ___ than I expected.
        </p>
        <label className="block mt-2">
          <input
            type="radio"
            name="q3"
            checked={q3 === "good"}
            onChange={() => setQ3("good")}
          />{" "}
          good
        </label>
        <label className="block">
          <input
            type="radio"
            name="q3"
            checked={q3 === "better"}
            onChange={() => setQ3("better")}
          />{" "}
          better
        </label>
        <label className="block">
          <input
            type="radio"
            name="q3"
            checked={q3 === "best"}
            onChange={() => setQ3("best")}
          />{" "}
          best
        </label>
      </div>

      <div className="bg-white p-6 shadow-sm" dir="ltr">
        <p className="font-semibold">4. He has lived in Cairo ___ 2015.</p>
        <label className="block mt-2">
          <input
            type="radio"
            name="q4"
            checked={q4 === "for"}
            onChange={() => setQ4("for")}
          />{" "}
          for
        </label>
        <label className="block">
          <input
            type="radio"
            name="q4"
            checked={q4 === "since"}
            onChange={() => setQ4("since")}
          />{" "}
          since
        </label>
        <label className="block">
          <input
            type="radio"
            name="q4"
            checked={q4 === "during"}
            onChange={() => setQ4("during")}
          />{" "}
          during
        </label>
      </div>

      <div className="bg-white p-6 shadow-sm" dir="ltr">
        <p className="font-semibold">
          5. Which word means the same as &quot;essential&quot;?
        </p>
        <label className="block mt-2">
          <input
            type="radio"
            name="q5"
            checked={q5 === "optional"}
            onChange={() => setQ5("optional")}
          />{" "}
          optional
        </label>
        <label className="block">
          <input
            type="radio"
            name="q5"
            checked={q5 === "necessary"}
            onChange={() => setQ5("necessary")}
          />{" "}
          necessary
        </label>
        <label className="block">
          <input
            type="radio"
            name="q5"
            checked={q5 === "rare"}
            onChange={() => setQ5("rare")}
          />{" "}
          rare
        </label>
      </div>

      {error && (
        <p className="text-red-700 text-sm">
          {t("Please answer all 5 questions.", "جاوبي على الـ 5 أسئلة كلهم.")}
        </p>
      )}

      <button
        type="submit"
        className="bg-navy text-cream py-3 rounded hover:bg-gold hover:text-navy"
      >
        {t("See my level", "شوفي مستواك")}
      </button>
    </form>
  );
}
