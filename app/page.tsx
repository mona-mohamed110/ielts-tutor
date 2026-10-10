"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight">
            {t("Prepare for IELTS with confidence", "حضّر للـ IELTS بثقة")}
          </h1>
          <p className="mt-5 text-lg max-w-md">
            {t(
              "Personalized IELTS preparation to help you improve your English and work toward your target score.",
              "تحضير شخصي للـ IELTS يساعدك تحسّن إنجليزيتك وتوصل للدرجة اللي بتستهدفها.",
            )}
          </p>
          <p className="mt-4 text-sm border-s-4 border-gold ps-3">
            {t(
              "Helping students aim for Band 6.5 to 8 (sample range).",
              "نساعد الطلاب على استهداف Band من 6.5 إلى 8 (نطاق تجريبي).",
            )}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/courses" className="bg-navy text-cream px-6 py-3">
              {t("Explore courses", "شوف الكورسات")}
            </Link>
            <Link
              href="/contact"
              className="border border-gold text-navy px-6 py-3"
            >
              {t("Book a consultation", "احجز استشارة")}
            </Link>
          </div>
        </div>

        <img
          src="/tutor.webp"
          alt="Sara Ahmed, IELTS tutor"
          className="border-4 border-gold h-80 w-full object-cover"
        />
      </section>

      <section className="bg-navy text-cream py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-serif text-4xl text-gold">10+</p>
            <p className="mt-1 text-sm">
              {t("Years of teaching", "سنين تدريس")}
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl text-gold">200+</p>
            <p className="mt-1 text-sm">
              {t("Students taught", "طالب درّستهم")}
            </p>
          </div>
          <div>
            <p className="font-serif text-4xl text-gold">4</p>
            <p className="mt-1 text-sm">
              {t("IELTS skills covered", "مهارات IELTS مغطاة")}
            </p>
          </div>
        </div>
        <p className="text-center text-xs opacity-60 mt-6">
          {t(
            "Sample numbers for the demo. Replace with real ones.",
            "أرقام تجريبية للعرض. غيّريها بأرقام حقيقية.",
          )}
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-serif text-3xl mb-8">
          {t("Why study with me", "ليه تدرس معايا")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-t-4 border-gold bg-white p-6 shadow-sm hover:shadow-md">
            <h3 className="font-serif text-xl">
              {t("A plan for your target score", "خطة لدرجتك المستهدفة")}
            </h3>
            <p className="mt-2 text-sm">
              {t(
                "We start with a level check, then build a study plan around your exam date.",
                "نبدأ بتحديد مستوى، وبعدها نبني خطة مذاكرة حسب ميعاد امتحانك.",
              )}
            </p>
          </div>
          <div className="border-t-4 border-gold bg-white p-6 shadow-sm hover:shadow-md">
            <h3 className="font-serif text-xl">
              {t("Feedback on every task", "تقييم لكل مهمة")}
            </h3>
            <p className="mt-2 text-sm">
              {t(
                "You get written feedback on Writing and spoken feedback on Speaking.",
                "هتاخد تقييم مكتوب على الـ Writing وتقييم صوتي على الـ Speaking.",
              )}
            </p>
          </div>
          <div className="border-t-4 border-gold bg-white p-6 shadow-sm hover:shadow-md">
            <h3 className="font-serif text-xl">
              {t("Flexible online lessons", "حصص أونلاين مرنة")}
            </h3>
            <p className="mt-2 text-sm">
              {t(
                "Lessons are held live online at times that suit your schedule in Egypt.",
                "الحصص بتتعمل لايف أونلاين في مواعيد تناسب جدولك في مصر.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="font-serif text-3xl mb-8">
          {t("Popular courses", "الكورسات الأكثر طلبًا")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-sm hover:shadow-md">
            <h3 className="font-serif text-xl">
              {t("IELTS Academic Preparation", "تحضير IELTS أكاديمي")}
            </h3>
            <p className="mt-2 text-sm">
              {t(
                "For university admission and professional registration.",
                "للقبول في الجامعات والتسجيل المهني.",
              )}
            </p>
          </div>
          <div className="bg-white p-6 shadow-sm hover:shadow-md">
            <h3 className="font-serif text-xl">
              {t("Speaking Practice", "تدريب Speaking")}
            </h3>
            <p className="mt-2 text-sm">
              {t(
                "Mock interviews, fluency drills and feedback.",
                "مقابلات تجريبية وتمارين طلاقة وتقييم.",
              )}
            </p>
          </div>
        </div>
        <Link href="/courses" className="inline-block mt-6 underline">
          {t("See all courses", "شوف كل الكورسات")}
        </Link>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="font-serif text-3xl mb-8">
          {t("What students say", "رأي الطلاب")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border-s-4 border-gold shadow-sm">
            <p>
              {t(
                "“Sample feedback about the Writing course.”",
                "“رأي تجريبي عن كورس الـ Writing.”",
              )}
            </p>
            <p className="mt-4 text-sm font-semibold">
              {t("Student A (sample)", "طالب أ (تجريبي)")}
            </p>
          </div>
          <div className="bg-white p-6 border-s-4 border-gold shadow-sm">
            <p>
              {t(
                "“Sample feedback about Speaking practice.”",
                "“رأي تجريبي عن تدريب الـ Speaking.”",
              )}
            </p>
            <p className="mt-4 text-sm font-semibold">
              {t("Student B (sample)", "طالب ب (تجريبي)")}
            </p>
          </div>
          <div className="bg-white p-6 border-s-4 border-gold shadow-sm">
            <p>
              {t(
                "“Sample feedback about private lessons.”",
                "“رأي تجريبي عن الحصص الخاصة.”",
              )}
            </p>
            <p className="mt-4 text-sm font-semibold">
              {t("Student C (sample)", "طالب ج (تجريبي)")}
            </p>
          </div>
        </div>
        <Link href="/testimonials" className="inline-block mt-6 underline">
          {t("More student stories", "المزيد من قصص الطلاب")}
        </Link>
      </section>

      <section className="bg-navy text-cream py-16 text-center px-4">
        <h2 className="font-serif text-3xl">
          {t("Ready to start?", "جاهز تبدأ؟")}
        </h2>
        <p className="mt-3">
          {t(
            "Send a message and we will find the right course for you.",
            "ابعت رسالة وهنختار معاك الكورس المناسب.",
          )}
        </p>
        <a
          href="https://wa.me/201012345678"
          className="inline-block mt-6 bg-gold text-navy px-6 py-3"
        >
          {t("Chat on WhatsApp", "كلمنا على واتساب")}
        </a>
      </section>
    </>
  );
}
