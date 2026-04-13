import React from "react";
import { useTranslation } from "react-i18next";
import FilmDetailEs from "./FilmDetailEs";
import FilmDetailEn from "./FilmDetailEn";
import FilmDetailFr from "./FilmDetailFr";
import FilmDetailDe from "./FilmDetailDe";
import FilmDetailIt from "./FilmDetailIt";
import FilmDetailPt from "./FilmDetailPt";

export default function FilmDetail() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.substring(0, 2) || "es";
  
  if (lang === "en") return <FilmDetailEn />;
  if (lang === "fr") return <FilmDetailFr />;
  if (lang === "de") return <FilmDetailDe />;
  if (lang === "it") return <FilmDetailIt />;
  if (lang === "pt") return <FilmDetailPt />;
  
  return <FilmDetailEs />;
}
