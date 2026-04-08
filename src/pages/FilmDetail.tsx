import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import FilmDetailEs from "./FilmDetailEs";
import FilmDetailEn from "./FilmDetailEn";

export default function FilmDetail() {
  const { language } = useLanguage();
  return language === "es" ? <FilmDetailEs /> : <FilmDetailEn />;
}