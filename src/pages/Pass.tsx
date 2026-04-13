import React from "react";
import { useTranslation } from "react-i18next";
import PassEs from "./PassEs";
import PassEn from "./PassEn";
import PassFr from "./PassFr";
import PassDe from "./PassDe";
import PassIt from "./PassIt";
import PassPt from "./PassPt";

export default function Pass() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.substring(0, 2) || "es";
  
  if (lang === "en") return <PassEn />;
  if (lang === "fr") return <PassFr />;
  if (lang === "de") return <PassDe />;
  if (lang === "it") return <PassIt />;
  if (lang === "pt") return <PassPt />;
  
  return <PassEs />;
}
