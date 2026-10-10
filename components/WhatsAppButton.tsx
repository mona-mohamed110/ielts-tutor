"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      <Link
        href="/quiz"
        className="bg-gold text-navy font-semibold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-cream"
      >
        {t("Free level test", "اختبار مستوى مجاني")}
      </Link>
      <a
        href="https://wa.me/201012345678"
        aria-label="Chat on WhatsApp"
        className="bg-green-500 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-green-600"
      >
        {t("WhatsApp", "واتساب")}
      </a>
    </div>
  );
}
