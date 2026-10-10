"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggle, t } = useLanguage();

  function linkClass(path: string) {
    if (pathname === path) {
      return "text-gold border-b-2 border-gold pb-1";
    }
    return "hover:text-gold pb-1";
  }

  return (
    <header className="bg-navy text-cream sticky top-0 z-50 shadow-lg border-b border-gold">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="bg-gold text-navy font-serif text-lg font-bold w-10 h-10 flex items-center justify-center">
            SA
          </span>
          <span className="font-serif text-xl">Sara Ahmed</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link href="/" className={linkClass("/")}>
            {t("Home", "الرئيسية")}
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            {t("About", "من أنا")}
          </Link>
          <Link href="/courses" className={linkClass("/courses")}>
            {t("Courses", "الكورسات")}
          </Link>
          <Link href="/testimonials" className={linkClass("/testimonials")}>
            {t("Testimonials", "آراء الطلاب")}
          </Link>
          <Link href="/faq" className={linkClass("/faq")}>
            {t("FAQ", "الأسئلة الشائعة")}
          </Link>
          <Link href="/blog" className={linkClass("/blog")}>
            {t("Blog", "المدونة")}
          </Link>
          <Link href="/quiz" className={linkClass("/quiz")}>
            {t("Level test", "اختبار المستوى")}
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            {t("Contact", "تواصل معنا")}
          </Link>
          <button
            onClick={toggle}
            className="border border-gold px-3 py-1 rounded hover:bg-gold hover:text-navy"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <Link
            href="/contact"
            className="bg-gold text-navy font-semibold px-4 py-2 rounded hover:bg-cream"
          >
            {t("Book a lesson", "احجز حصة")}
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border border-gold px-3 py-1 text-sm"
          aria-label="Toggle menu"
        >
          {open ? t("Close", "إغلاق") : t("Menu", "القائمة")}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={pathname === "/" ? "text-gold" : ""}
          >
            {t("Home", "الرئيسية")}
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className={pathname === "/about" ? "text-gold" : ""}
          >
            {t("About", "من أنا")}
          </Link>
          <Link
            href="/courses"
            onClick={() => setOpen(false)}
            className={pathname === "/courses" ? "text-gold" : ""}
          >
            {t("Courses", "الكورسات")}
          </Link>
          <Link
            href="/testimonials"
            onClick={() => setOpen(false)}
            className={pathname === "/testimonials" ? "text-gold" : ""}
          >
            {t("Testimonials", "آراء الطلاب")}
          </Link>
          <Link
            href="/faq"
            onClick={() => setOpen(false)}
            className={pathname === "/faq" ? "text-gold" : ""}
          >
            {t("FAQ", "الأسئلة الشائعة")}
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className={pathname === "/blog" ? "text-gold" : ""}
          >
            {t("Blog", "المدونة")}
          </Link>
          <Link
            href="/quiz"
            onClick={() => setOpen(false)}
            className={pathname === "/quiz" ? "text-gold" : ""}
          >
            {t("Level test", "اختبار المستوى")}
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={pathname === "/contact" ? "text-gold" : ""}
          >
            {t("Contact", "تواصل معنا")}
          </Link>
          <button
            onClick={toggle}
            className="border border-gold px-3 py-2 rounded"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-gold text-navy font-semibold text-center py-2 rounded"
          >
            {t("Book a lesson", "احجز حصة")}
          </Link>
        </nav>
      )}
    </header>
  );
}
