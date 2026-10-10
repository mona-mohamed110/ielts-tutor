"use client";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function BlogList() {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const title1 = t(
    "How to answer Speaking Part 2",
    "إزاي تجاوبي Speaking Part 2",
  );
  const title2 = t(
    "A simple structure for Writing Task 2",
    "هيكل بسيط لـ Writing Task 2",
  );
  const title3 = t(
    "5 common IELTS mistakes to avoid",
    "5 أخطاء شائعة في IELTS تجنّبيها",
  );
  const title4 = t(
    "How to plan your IELTS study weeks",
    "إزاي تخططي أسابيع مذاكرة IELTS",
  );

  function show(title: string, cat: string) {
    const categoryOk = category === "All" || category === cat;
    const searchOk = title.toLowerCase().includes(search.toLowerCase());
    return categoryOk && searchOk;
  }

  function buttonClass(name: string) {
    if (category === name) {
      return "bg-navy text-cream px-4 py-2 rounded text-sm";
    }
    return "bg-white border border-gold px-4 py-2 rounded text-sm";
  }

  let count = 0;
  if (show(title1, "Speaking")) count = count + 1;
  if (show(title2, "Writing")) count = count + 1;
  if (show(title3, "Tips")) count = count + 1;
  if (show(title4, "Tips")) count = count + 1;

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t("Search articles...", "ابحثي في المقالات...")}
        className="border p-3 w-full bg-white"
      />

      <div className="flex flex-wrap gap-2 mt-4">
        <button
          onClick={() => setCategory("All")}
          className={buttonClass("All")}
        >
          {t("All", "الكل")}
        </button>
        <button
          onClick={() => setCategory("Speaking")}
          className={buttonClass("Speaking")}
        >
          Speaking
        </button>
        <button
          onClick={() => setCategory("Writing")}
          className={buttonClass("Writing")}
        >
          Writing
        </button>
        <button
          onClick={() => setCategory("Tips")}
          className={buttonClass("Tips")}
        >
          {t("Tips", "نصايح")}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {show(title1, "Speaking") && (
          <div className="bg-white p-6 border-t-4 border-gold shadow-sm hover:shadow-md">
            <p className="text-sm text-gold">Speaking</p>
            <h2 className="font-serif text-xl mt-1">
              <Link href="/blog/speaking-part-2">{title1}</Link>
            </h2>
            <p className="mt-2 text-sm">
              {t(
                "Learn how to use the one-minute preparation time and keep talking for two minutes.",
                "اتعلمي تستفيدي من دقيقة التحضير وتكمّلي كلام لمدة دقيقتين.",
              )}
            </p>
            <Link
              href="/blog/speaking-part-2"
              className="inline-block mt-4 underline text-sm"
            >
              {t("Read article", "اقرأ المقال")}
            </Link>
          </div>
        )}

        {show(title2, "Writing") && (
          <div className="bg-white p-6 border-t-4 border-gold shadow-sm hover:shadow-md">
            <p className="text-sm text-gold">Writing</p>
            <h2 className="font-serif text-xl mt-1">
              <Link href="/blog/writing-task-2">{title2}</Link>
            </h2>
            <p className="mt-2 text-sm">
              {t(
                "A four-paragraph plan you can use for almost any essay question.",
                "خطة من أربع فقرات تنفع تقريبًا لأي سؤال مقال.",
              )}
            </p>
            <Link
              href="/blog/writing-task-2"
              className="inline-block mt-4 underline text-sm"
            >
              {t("Read article", "اقرأ المقال")}
            </Link>
          </div>
        )}

        {show(title3, "Tips") && (
          <div className="bg-white p-6 border-t-4 border-gold shadow-sm hover:shadow-md">
            <p className="text-sm text-gold">{t("Tips", "نصايح")}</p>
            <h2 className="font-serif text-xl mt-1">
              <Link href="/blog/common-mistakes">{title3}</Link>
            </h2>
            <p className="mt-2 text-sm">
              {t(
                "Small mistakes that cost students band points, and how to fix them.",
                "أخطاء صغيرة بتكلّف الطلاب درجات، وإزاي تصلحيها.",
              )}
            </p>
            <Link
              href="/blog/common-mistakes"
              className="inline-block mt-4 underline text-sm"
            >
              {t("Read article", "اقرأ المقال")}
            </Link>
          </div>
        )}

        {show(title4, "Tips") && (
          <div className="bg-white p-6 border-t-4 border-gold shadow-sm hover:shadow-md">
            <p className="text-sm text-gold">{t("Tips", "نصايح")}</p>
            <h2 className="font-serif text-xl mt-1">
              <Link href="/blog/study-plan">{title4}</Link>
            </h2>
            <p className="mt-2 text-sm">
              {t(
                "A simple weekly routine that covers all four skills.",
                "روتين أسبوعي بسيط بيغطي المهارات الأربعة.",
              )}
            </p>
            <Link
              href="/blog/study-plan"
              className="inline-block mt-4 underline text-sm"
            >
              {t("Read article", "اقرأ المقال")}
            </Link>
          </div>
        )}
      </div>

      {count === 0 && (
        <p className="mt-8">
          {t(
            "No articles found. Try another word or category.",
            "مفيش مقالات. جرّبي كلمة أو تصنيف تاني.",
          )}
        </p>
      )}
    </div>
  );
}
