import type { Metadata } from "next";
import LevelQuiz from "@/components/LevelQuiz";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Free Level Test",
  description:
    "Take a quick 5-question English test and find the right IELTS course for your level.",
};

export default function Quiz() {
  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl">
            <T en="Free level test" ar="اختبار مستوى مجاني" />
          </h1>
          <p className="mt-3">
            <T
              en="Answer 5 quick questions and see which course fits you."
              ar="جاوبي على 5 أسئلة سريعة وشوفي الكورس المناسب (الأسئلة بالإنجليزي)."
            />
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <LevelQuiz />
      </div>
    </>
  );
}
