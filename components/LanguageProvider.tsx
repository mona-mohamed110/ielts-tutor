"use client";
import { createContext, useContext, useState } from "react";

type LanguageValue = {
  lang: string;
  toggle: () => void;
  t: (en: string, ar: string) => string;
};

const LanguageContext = createContext<LanguageValue>({
  lang: "en",
  toggle: function () {},
  t: function (en: string, ar: string) {
    return en;
  },
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState("en");

  function toggle() {
    if (lang === "en") {
      setLang("ar");
    } else {
      setLang("en");
    }
  }

  function t(en: string, ar: string) {
    if (lang === "ar") {
      return ar;
    }
    return en;
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}
