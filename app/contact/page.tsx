import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import T from "@/components/T";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Book a consultation or ask a question about IELTS courses.",
};

export default function Contact() {
  return (
    <>
      <section className="bg-navy text-cream py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl">
            <T en="Contact & booking" ar="التواصل والحجز" />
          </h1>
          <p className="mt-3">
            <T
              en="Lessons run Sunday to Thursday, Cairo time. Hours are placeholders."
              ar="الحصص من الأحد للخميس بتوقيت القاهرة. المواعيد تجريبية."
            />
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <ContactForm />
        <a
          href="https://wa.me/201012345678"
          className="inline-block mt-6 underline"
        >
          <T en="Or message me on WhatsApp" ar="أو ابعتيلي على واتساب" />
        </a>
      </div>
    </>
  );
}
