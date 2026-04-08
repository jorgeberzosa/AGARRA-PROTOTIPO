import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import CreatorsEs from "./CreatorsEs";
import CreatorsEn from "./CreatorsEn";

export default function Creators() {
  const { language } = useLanguage();
  return language === "es" ? <CreatorsEs /> : <CreatorsEn />;
}