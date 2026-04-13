import React from "react";
import { useTranslation } from "react-i18next";
import ExploreEs from "./ExploreEs";
import ExploreEn from "./ExploreEn";
import ExploreFr from "./ExploreFr";
import ExploreDe from "./ExploreDe";
import ExploreIt from "./ExploreIt";
import ExplorePt from "./ExplorePt";

export default function Explore() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.substring(0, 2) || "es";
  
  if (lang === "en") return <ExploreEn />;
  if (lang === "fr") return <ExploreFr />;
  if (lang === "de") return <ExploreDe />;
  if (lang === "it") return <ExploreIt />;
  if (lang === "pt") return <ExplorePt />;
  
  return <ExploreEs />;
}
