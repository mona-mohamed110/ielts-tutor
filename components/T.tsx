"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function T({ en, ar }: { en: string; ar: string }) {
  const { t } = useLanguage();
  return <>{t(en, ar)}</>;
}
