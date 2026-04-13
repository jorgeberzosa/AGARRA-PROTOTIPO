import React from "react";
import { useTranslation } from "react-i18next";
import JournalEs from "./JournalEs";
import JournalEn from "./JournalEn";
import JournalFr from "./JournalFr";
import JournalDe from "./JournalDe";
import JournalIt from "./JournalIt";
import JournalPt from "./JournalPt";

export default function Journal() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.substring(0, 2) || "es";
  
  if (lang === "en") return <JournalEn />;
  if (lang === "fr") return <JournalFr />;
  if (lang === "de") return <JournalDe />;
  if (lang === "it") return <JournalIt />;
  if (lang === "pt") return <JournalPt />;
  
  return <JournalEs />;
}
