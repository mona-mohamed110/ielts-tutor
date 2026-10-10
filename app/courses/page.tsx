import type { Metadata } from "next";
import Link from "next/link";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "IELTS Academic, General Training, Speaking, Writing and private online lessons.",
};

export default function Courses() {
  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl">
            <T en="Courses" ar="الكورسات" />
          </h1>
          <p className="mt-3 max-w-xl">
            <T
              en="Choose the course that fits your level and exam date. Prices and durations are placeholders."
              ar="اختاري الكورس المناسب لمستواك وميعاد امتحانك. الأسعار والمدد تجريبية."
            />
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 flex flex-col border-t-4 border-gold shadow-sm hover:shadow-md">
          <h2 className="font-serif text-xl">
            <Link href="/courses/academic" className="hover:text-gold">
              <T en="IELTS Academic Preparation" ar="تحضير IELTS أكاديمي" />
            </Link>
          </h2>
          <p className="mt-2 text-sm flex-1">
            <T
              en="Full preparation for all four sections of the Academic test."
              ar="تحضير كامل للأقسام الأربعة في الاختبار الأكاديمي."
            />
          </p>
          <p className="mt-5 font-serif text-3xl">
            <T en="EGP 000" ar="000 جنيه" />
          </p>
          <p className="mt-1 text-sm">
            <T
              en="8 weeks · Intermediate and above"
              ar="8 أسابيع · متوسط فما فوق"
            />
          </p>
          <Link
            href="/contact"
            className="mt-5 bg-navy text-cream text-center py-2 rounded hover:bg-gold hover:text-navy"
          >
            <T en="Enquire" ar="استفسر" />
          </Link>
        </div>

        <div className="bg-white p-6 flex flex-col border-t-4 border-gold shadow-sm hover:shadow-md">
          <h2 className="font-serif text-xl">
            <Link href="/courses/general" className="hover:text-gold">
              <T en="IELTS General Training" ar="IELTS جنرال" />
            </Link>
          </h2>
          <p className="mt-2 text-sm flex-1">
            <T
              en="For migration and work. Focus on letters and everyday reading."
              ar="للهجرة والشغل. تركيز على الخطابات والقراءة اليومية."
            />
          </p>
          <p className="mt-5 font-serif text-3xl">
            <T en="EGP 000" ar="000 جنيه" />
          </p>
          <p className="mt-1 text-sm">
            <T
              en="8 weeks · Intermediate and above"
              ar="8 أسابيع · متوسط فما فوق"
            />
          </p>
          <Link
            href="/contact"
            className="mt-5 bg-navy text-cream text-center py-2 rounded hover:bg-gold hover:text-navy"
          >
            <T en="Enquire" ar="استفسر" />
          </Link>
        </div>

        <div className="bg-white p-6 flex flex-col border-t-4 border-gold shadow-sm hover:shadow-md">
          <h2 className="font-serif text-xl">
            <Link href="/courses/speaking" className="hover:text-gold">
              <T en="Speaking Practice" ar="تدريب Speaking" />
            </Link>
          </h2>
          <p className="mt-2 text-sm flex-1">
            <T
              en="Mock interviews, fluency drills and personal feedback."
              ar="مقابلات تجريبية وتمارين طلاقة وتقييم شخصي."
            />
          </p>
          <p className="mt-5 font-serif text-3xl">
            <T en="EGP 000" ar="000 جنيه" />
          </p>
          <p className="mt-1 text-sm">
            <T en="4 weeks · All levels" ar="4 أسابيع · كل المستويات" />
          </p>
          <Link
            href="/contact"
            className="mt-5 bg-navy text-cream text-center py-2 rounded hover:bg-gold hover:text-navy"
          >
            <T en="Enquire" ar="استفسر" />
          </Link>
        </div>

        <div className="bg-white p-6 flex flex-col border-t-4 border-gold shadow-sm hover:shadow-md">
          <h2 className="font-serif text-xl">
            <Link href="/courses/writing" className="hover:text-gold">
              <T en="Writing Skills" ar="مهارات Writing" />
            </Link>
          </h2>
          <p className="mt-2 text-sm flex-1">
            <T
              en="Task 1 and Task 2 structure, vocabulary and corrections."
              ar="هيكل Task 1 و Task 2 والمفردات والتصحيح."
            />
          </p>
          <p className="mt-5 font-serif text-3xl">
            <T en="EGP 000" ar="000 جنيه" />
          </p>
          <p className="mt-1 text-sm">
            <T
              en="4 weeks · Intermediate and above"
              ar="4 أسابيع · متوسط فما فوق"
            />
          </p>
          <Link
            href="/contact"
            className="mt-5 bg-navy text-cream text-center py-2 rounded hover:bg-gold hover:text-navy"
          >
            <T en="Enquire" ar="استفسر" />
          </Link>
        </div>

        <div className="bg-white p-6 flex flex-col border-t-4 border-gold shadow-sm hover:shadow-md">
          <h2 className="font-serif text-xl">
            <Link href="/courses/private" className="hover:text-gold">
              <T en="Private Online Lessons" ar="حصص خاصة أونلاين" />
            </Link>
          </h2>
          <p className="mt-2 text-sm flex-1">
            <T
              en="One-to-one lessons built around your weak areas."
              ar="حصص فردية مبنية على نقاط ضعفك."
            />
          </p>
          <p className="mt-5 font-serif text-3xl">
            <T en="EGP 000" ar="000 جنيه" />
          </p>
          <p className="mt-1 text-sm">
            <T en="Per hour · All levels" ar="في الساعة · كل المستويات" />
          </p>
          <Link
            href="/contact"
            className="mt-5 bg-navy text-cream text-center py-2 rounded hover:bg-gold hover:text-navy"
          >
            <T en="Book a lesson" ar="احجز حصة" />
          </Link>
        </div>
      </div>
    </>
  );
}
