"use client";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-cream mt-20 border-t-4 border-gold">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <p className="font-serif text-xl">IELTS with Sara Ahmed</p>
          <p className="mt-3 opacity-80 max-w-xs">
            {t(
              "Online IELTS preparation for students in Egypt.",
              "تحضير IELTS أونلاين للطلاب في مصر.",
            )}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-serif text-lg text-gold">
            {t("Pages", "الصفحات")}
          </p>
          <Link href="/about" className="hover:text-gold">
            {t("About", "من أنا")}
          </Link>
          <Link href="/courses" className="hover:text-gold">
            {t("Courses", "الكورسات")}
          </Link>
          <Link href="/testimonials" className="hover:text-gold">
            {t("Testimonials", "آراء الطلاب")}
          </Link>
          <Link href="/faq" className="hover:text-gold">
            {t("FAQ", "الأسئلة الشائعة")}
          </Link>
          <Link href="/contact" className="hover:text-gold">
            {t("Contact", "تواصل معنا")}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-serif text-lg text-gold">
            {t("Get in touch", "تواصل معنا")}
          </p>
          <p>sara.ielts@example.com</p>
          <a href="https://wa.me/201012345678" className="hover:text-gold">
            WhatsApp
          </a>
          <p className="opacity-80">{t("Cairo, Egypt", "القاهرة، مصر")}</p>
        </div>
      </div>
      <p className="text-center text-xs opacity-60 pb-2">
        {t(
          "Demo website. All names and content are placeholders.",
          "موقع تجريبي. كل الأسماء والمحتوى أمثلة.",
        )}
      </p>
      <p className="text-center text-sm pb-6">
        {t("Developed by", "تطوير")}{" "}
        <span className="text-gold">Mona Mohamed Hussein</span>
      </p>
    </footer>
  );
}
