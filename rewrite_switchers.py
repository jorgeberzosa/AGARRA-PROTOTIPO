import os

pages = ['Index', 'Explore', 'Creators', 'Pass', 'FilmDetail', 'Journal']

for page in pages:
    code = f"""import React from "react";
import {{ useTranslation }} from "react-i18next";
import {page}Es from "./{page}Es";
import {page}En from "./{page}En";
import {page}Fr from "./{page}Fr";
import {page}De from "./{page}De";
import {page}It from "./{page}It";
import {page}Pt from "./{page}Pt";

export default function {page}() {{
  const {{ i18n }} = useTranslation();
  const lang = i18n.language?.substring(0, 2) || "es";
  
  if (lang === "en") return <{page}En />;
  if (lang === "fr") return <{page}Fr />;
  if (lang === "de") return <{page}De />;
  if (lang === "it") return <{page}It />;
  if (lang === "pt") return <{page}Pt />;
  
  return <{page}Es />;
}}
"""
    with open(f"src/pages/{page}.tsx", "w") as f:
        f.write(code)

print("Switcher files rewritten.")
