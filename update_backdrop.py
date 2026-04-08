import re

files = ["src/lib/dataEs.ts", "src/lib/dataEn.ts"]

artfan_map = {
    "gauguin-y-el-canal": "/artfan/gauguin.png",
    "humanpersons": "/artfan/humanpersons.png",
    "hora-menos": "/artfan/horamenos.png",
    "km-72": "/artfan/km72.png",
    "macu-mujer-policia": "/artfan/macu.png",
    "cuando-todo-este-en-orden": "/artfan/orden.png",
    "arena-en-bolsillos": "/artfan/arena.png",
    "el-pais-del-miedo": "/artfan/miedo.png"
}

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Add backdrop property to Film interface
    if "  backdrop?: string;\n" not in content:
        content = content.replace("  image: string;\n", "  image: string;\n  backdrop?: string;\n")

    # Add backdrop to each film
    for id_val, backdrop in artfan_map.items():
        pattern = r'(id: "{}",[\s\S]*?image: "[^"]+",\n)'.format(id_val)
        replacement = r'\g<1>    backdrop: "{}",\n'.format(backdrop)
        content = re.sub(pattern, replacement, content)
    
    with open(file, 'w') as f:
        f.write(content)

print("Done")
