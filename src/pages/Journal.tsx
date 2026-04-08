import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import JournalEs from "./JournalEs";
import JournalEn from "./JournalEn";

export default function Journal() {
  const { language } = useLanguage();
  return language === "es" ? <JournalEs /> : <JournalEn />;
}