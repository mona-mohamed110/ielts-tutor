import type { Metadata } from "next";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about IELTS preparation time, study method and online lessons.",
};

export default function FAQ() {
  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl">
            <T en="Frequently asked questions" ar="الأسئلة الشائعة" />
          </h1>
          <p className="mt-3">
            <T
              en="Quick answers about preparation time, lessons and booking."
              ar="إجابات سريعة عن مدة التحضير والحصص والحجز."
            />
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <details className="bg-white p-4 mb-3 border-s-4 border-gold shadow-sm">
          <summary className="cursor-pointer font-semibold">
            <T
              en="How long does IELTS preparation take?"
              ar="التحضير للـ IELTS بياخد قد إيه؟"
            />
          </summary>
          <p className="mt-2 text-sm">
            <T
              en="It depends on your current level and target score. Most students need 6 to 12 weeks."
              ar="بيعتمد على مستواك الحالي والدرجة المطلوبة. أغلب الطلاب بيحتاجوا من 6 لـ 12 أسبوع."
            />
          </p>
        </details>
        <details className="bg-white p-4 mb-3 border-s-4 border-gold shadow-sm">
          <summary className="cursor-pointer font-semibold">
            <T en="Are the lessons online?" ar="الحصص أونلاين؟" />
          </summary>
          <p className="mt-2 text-sm">
            <T
              en="Yes. Lessons are live on video call."
              ar="أيوه. الحصص لايف على مكالمة فيديو."
            />
          </p>
        </details>
        <details className="bg-white p-4 mb-3 border-s-4 border-gold shadow-sm">
          <summary className="cursor-pointer font-semibold">
            <T
              en="Do you offer a free level check?"
              ar="في تحديد مستوى مجاني؟"
            />
          </summary>
          <p className="mt-2 text-sm">
            <T
              en="Placeholder answer. Update with the tutor's real policy."
              ar="إجابة تجريبية. حدّثيها بسياسة المدرسة الحقيقية."
            />
          </p>
        </details>
        <details className="bg-white p-4 mb-3 border-s-4 border-gold shadow-sm">
          <summary className="cursor-pointer font-semibold">
            <T en="How do I book?" ar="أحجز إزاي؟" />
          </summary>
          <p className="mt-2 text-sm">
            <T
              en="Use the contact form or send a WhatsApp message."
              ar="استخدم نموذج التواصل أو ابعت رسالة واتساب."
            />
          </p>
        </details>
      </div>
    </>
  );
}
