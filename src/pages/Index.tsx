import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import IndexEs from "./IndexEs";
import IndexEn from "./IndexEn";

export default function Index() {
  const { language } = useLanguage();
  return language === "es" ? <IndexEs /> : <IndexEn />;
}