import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import ExploreEs from "./ExploreEs";
import ExploreEn from "./ExploreEn";

export default function Explore() {
  const { language } = useLanguage();
  return language === "es" ? <ExploreEs /> : <ExploreEn />;
}