import type { Metadata } from "next";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Student feedback and IELTS success stories (sample content).",
};

export default function Testimonials() {
  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl">
            <T en="Student stories" ar="قصص الطلاب" />
          </h1>
          <p className="mt-3">
            <T
              en="Sample content for the demo. Replace with real, approved student feedback."
              ar="محتوى تجريبي للعرض. غيّريه بآراء حقيقية موافق عليها."
            />
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 border-s-4 border-gold shadow-sm">
          <p>
            <T
              en="“Sample feedback about the Writing course.”"
              ar="“رأي تجريبي عن كورس الـ Writing.”"
            />
          </p>
          <p className="mt-4 font-semibold text-sm">
            <T en="Student A" ar="طالب أ" />
          </p>
          <p className="text-sm">
            <T
              en="Academic, Band X.X (sample)"
              ar="أكاديمي، Band X.X (تجريبي)"
            />
          </p>
        </div>
        <div className="bg-white p-6 border-s-4 border-gold shadow-sm">
          <p>
            <T
              en="“Sample feedback about Speaking practice.”"
              ar="“رأي تجريبي عن تدريب الـ Speaking.”"
            />
          </p>
          <p className="mt-4 font-semibold text-sm">
            <T en="Student B" ar="طالب ب" />
          </p>
          <p className="text-sm">
            <T
              en="General Training, Band X.X (sample)"
              ar="جنرال، Band X.X (تجريبي)"
            />
          </p>
        </div>
        <div className="bg-white p-6 border-s-4 border-gold shadow-sm">
          <p>
            <T
              en="“Sample feedback about private lessons.”"
              ar="“رأي تجريبي عن الحصص الخاصة.”"
            />
          </p>
          <p className="mt-4 font-semibold text-sm">
            <T en="Student C" ar="طالب ج" />
          </p>
          <p className="text-sm">
            <T
              en="Academic, Band X.X (sample)"
              ar="أكاديمي، Band X.X (تجريبي)"
            />
          </p>
        </div>
      </div>
    </>
  );
}
