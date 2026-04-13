import React from "react";
import { useTranslation } from "react-i18next";
import CreatorsEs from "./CreatorsEs";
import CreatorsEn from "./CreatorsEn";
import CreatorsFr from "./CreatorsFr";
import CreatorsDe from "./CreatorsDe";
import CreatorsIt from "./CreatorsIt";
import CreatorsPt from "./CreatorsPt";

export default function Creators() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.substring(0, 2) || "es";
  
  if (lang === "en") return <CreatorsEn />;
  if (lang === "fr") return <CreatorsFr />;
  if (lang === "de") return <CreatorsDe />;
  if (lang === "it") return <CreatorsIt />;
  if (lang === "pt") return <CreatorsPt />;
  
  return <CreatorsEs />;
}
