from deep_translator import GoogleTranslator
import os
import re
import time

filepath = "src/lib/dataEs.ts"
if not os.path.exists(filepath):
    print("Error: dataEs.ts not found.")
    exit(1)

with open(filepath, "r", encoding="utf-8") as f:
    source_content = f.read()

languages = {
    "fr": "french",
    "de": "german",
    "it": "italian",
    "pt": "portuguese"
}

# Fields to translate
fields_to_translate = ["synopsis", "shortDescription", "whyItMatters", "description", "excerpt", "category", "target", "upcomingEvent", "question", "answer"]

for lang_code, lang_name in languages.items():
    print(f"Translating data to {lang_name}...")
    translator = GoogleTranslator(source='es', target=lang_code)
    
    # We will use regex to find lines like:  synopsis: "...",
    # or description: "...",
    lines = source_content.split("\n")
    translated_lines = []
    
    for line in lines:
        matched = False
        for field in fields_to_translate:
            # Match field: "some text"
            match = re.search(fr'^(\s*{field}:\s*")(.*)(".*?)$', line)
            if match:
                prefix = match.group(1)
                text_to_translate = match.group(2)
                suffix = match.group(3)
                
                if text_to_translate.strip():
                    try:
                        translated_text = translator.translate(text_to_translate)
                        # escape quotes to avoid breaking TS syntax
                        translated_text = translated_text.replace('"', '\\"')
                        translated_lines.append(f"{prefix}{translated_text}{suffix}")
                        matched = True
                        break
                    except Exception as e:
                        print(f"Error translating '{text_to_translate}':", e)
                        pass
        
        # Translate items in FAQ arrays or passTiers features arrays
        # They look like: "text",
        string_arr_match = re.search(r'^(\s*")([^"]+)(".*)$', line)
        if not matched and string_arr_match and "https" not in line and "jpg" not in line and "png" not in line:
            # We must be careful not to translate ID's or URLs
            prefix = string_arr_match.group(1)
            text_to_translate = string_arr_match.group(2)
            suffix = string_arr_match.group(3)
            # small heuristic: if it has spaces and Capital first letter, it's a phrase
            if " " in text_to_translate and text_to_translate[0].isupper():
                try:
                    translated_text = translator.translate(text_to_translate)
                    translated_text = translated_text.replace('"', '\\"')
                    translated_lines.append(f"{prefix}{translated_text}{suffix}")
                    matched = True
                except:
                    pass

        if not matched:
            translated_lines.append(line)
            
    # Write to target file
    out_file = f"src/lib/data{lang_code.capitalize()}.ts"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("\n".join(translated_lines))
        
    print(f"Created {out_file}.")
    time.sleep(1) # Be gentle with the translator API

# Now update the imports in the TSX files
for lang_code in languages.keys():
    suffix = lang_code.capitalize() + ".tsx"
    for file in os.listdir("src/pages"):
        if file.endswith(suffix):
            fpath = os.path.join("src/pages", file)
            with open(fpath, "r", encoding="utf-8") as f:
                content = f.read()
            # replace import { X } from "@/lib/dataEs";
            content = re.sub(r'from "@/lib/dataEs"', f'from "@/lib/data{lang_code.capitalize()}"', content)
            # also replace import { X } from "./dataEs"; if it exists
            content = re.sub(r'from "\.\/dataEs"', f'from "./data{lang_code.capitalize()}"', content)
            
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)

print("Done. All data fields translated and components updated.")
