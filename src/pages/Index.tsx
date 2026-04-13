import React from "react";
import { useTranslation } from "react-i18next";
import IndexEs from "./IndexEs";
import IndexEn from "./IndexEn";
import IndexFr from "./IndexFr";
import IndexDe from "./IndexDe";
import IndexIt from "./IndexIt";
import IndexPt from "./IndexPt";

export default function Index() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.substring(0, 2) || "es";
  
  if (lang === "en") return <IndexEn />;
  if (lang === "fr") return <IndexFr />;
  if (lang === "de") return <IndexDe />;
  if (lang === "it") return <IndexIt />;
  if (lang === "pt") return <IndexPt />;
  
  return <IndexEs />;
}
