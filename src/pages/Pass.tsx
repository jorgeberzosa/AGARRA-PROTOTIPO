import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import PassEs from "./PassEs";
import PassEn from "./PassEn";

export default function Pass() {
  const { language } = useLanguage();
  return language === "es" ? <PassEs /> : <PassEn />;
}