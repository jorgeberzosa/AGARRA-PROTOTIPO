import glob

# For Es files
for file in glob.glob("src/pages/*Es.tsx"):
    with open(file, 'r') as f:
        content = f.read()
    content = content.replace("from \"@/lib/data\"", "from \"@/lib/dataEs\"")
    with open(file, 'w') as f:
        f.write(content)

# For En files
for file in glob.glob("src/pages/*En.tsx"):
    with open(file, 'r') as f:
        content = f.read()
    content = content.replace("from \"@/lib/data\"", "from \"@/lib/dataEn\"")
    with open(file, 'w') as f:
        f.write(content)

print("Imports fixed.")
