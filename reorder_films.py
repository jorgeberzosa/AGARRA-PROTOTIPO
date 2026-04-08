import re

files = ["src/lib/dataEs.ts", "src/lib/dataEn.ts"]

desired_order = [
    "gauguin-y-el-canal",
    "km-72",
    "la-mujer-del-animal",
    "humanpersons",
    "hora-menos",
    "cuando-todo-este-en-orden",
    "el-pais-del-miedo",
    "macu-mujer-policia",
    "arena-en-bolsillos"
]

for file in files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Update macu image
    content = content.replace('"https://m.media-amazon.com/images/M/MV5BZTc2NjZhOTYtYmQwOC00OGVmLTg4YTktNmQzNWZjYzAxYzgxXkEyXkFqcGc@._V1_QL75_UY562_CR6,0,380,562_.jpg"', '"/posters/macu.jpg"')
    
    # Extract films array
    films_match = re.search(r'(export const films: Film\[\] = \[)(.*?)(\n\];)', content, re.DOTALL)
    if not films_match:
        print("Couldn't find films array in", file)
        continue
    
    prefix = films_match.group(1)
    films_content = films_match.group(2)
    suffix = films_match.group(3)
    
    # Using regex to find all objects
    film_objects = re.findall(r'(\n  \{.*?\n  \})', films_content, re.DOTALL)
    
    id_map = {}
    for obj in film_objects:
        # Extract id
        id_match = re.search(r'id:\s*"([^"]+)"', obj)
        if id_match:
            id_map[id_match.group(1)] = obj
        else:
            print("Couldn't find id in obj:", obj[:20])
            
    # Reconstruct in desired order
    new_films_content = ",".join(id_map[film_id] for film_id in desired_order)
    
    new_content = content[:films_match.start()] + prefix + new_films_content + suffix + content[films_match.end():]
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Processed {file}")
