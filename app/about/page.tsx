import type { Metadata } from "next";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sara Ahmed, an IELTS tutor in Egypt. Background, qualifications and teaching style.",
};

export default function About() {
  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl">
            <T en="About me" ar="من أنا" />
          </h1>
          <p className="mt-3">
            <T
              en="Background, qualifications and teaching style."
              ar="الخلفية والمؤهلات وأسلوب التدريس."
            />
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-lg">
          <T
            en="I am an English teacher who helps students in Egypt prepare for the IELTS exam. (Placeholder text: replace with the real tutor biography.)"
            ar="أنا مدرسة إنجليزي بساعد الطلاب في مصر يحضّروا لامتحان IELTS. (نص تجريبي: غيّريه بنبذة المدرسة الحقيقية.)"
          />
        </p>

        <h2 className="font-serif text-2xl mt-10">
          <T en="Qualifications" ar="المؤهلات" />
        </h2>
        <ul className="mt-3 list-disc ps-5 space-y-1">
          <li>
            <T
              en="Degree in English (placeholder)"
              ar="بكالوريوس في اللغة الإنجليزية (تجريبي)"
            />
          </li>
          <li>
            <T
              en="Teaching certificate, such as CELTA (placeholder)"
              ar="شهادة تدريس زي CELTA (تجريبي)"
            />
          </li>
          <li>
            <T
              en="Years of IELTS teaching experience (placeholder)"
              ar="سنين خبرة في تدريس IELTS (تجريبي)"
            />
          </li>
        </ul>

        <h2 className="font-serif text-2xl mt-10">
          <T en="Teaching style" ar="أسلوب التدريس" />
        </h2>
        <p className="mt-3">
          <T
            en="Lessons are practical. We work on real exam tasks, review your mistakes together, and track your progress each week."
            ar="الحصص عملية. بنشتغل على مهام امتحان حقيقية، وبنراجع أخطاءك مع بعض، ونتابع تقدمك كل أسبوع."
          />
        </p>

        <h2 className="font-serif text-2xl mt-10">
          <T en="Who I teach" ar="بدرّس مين" />
        </h2>
        <p className="mt-3">
          <T
            en="Beginners building a foundation, and students who already have an exam date and need focused practice."
            ar="مبتدئين بيبنوا أساس، وطلاب عندهم ميعاد امتحان ومحتاجين تدريب مركّز."
          />
        </p>
      </div>
    </>
  );
}
