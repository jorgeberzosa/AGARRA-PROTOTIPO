import os
import glob
from PIL import Image

brain_dir = '/Users/Jorge/.gemini/antigravity/brain/a93ab619-ced5-46cd-83b8-5a89458cb177/'
output_dir = 'public/artfan/'

files = [
    ('humanpersons', 'humanpersons.png'),
    ('horamenos', 'horamenos.png'),
    ('km72', 'km72.png'),
    ('animal', 'animal.png'),
    ('orden', 'orden.png'),
    ('arena', 'arena.png'),
    ('miedo', 'miedo.png'),
    ('macu', 'macu.png'),
]

for prefix, out_name in files:
    pattern = os.path.join(brain_dir, f"{prefix}_noface_*.png")
    matches = glob.glob(pattern)
    if matches:
        input_path = sorted(matches)[-1]  # Get the newest if multiple
        try:
            img = Image.open(input_path)
            width, height = img.size
            target_height = int(width * 9 / 16)
            top = (height - target_height) // 2
            bottom = top + target_height
            cropped = img.crop((0, top, width, bottom))
            cropped.save(os.path.join(output_dir, out_name), format='PNG')
            print(f"Successfully processed {out_name}")
        except Exception as e:
            print(f"Error on {out_name}: {e}")
    else:
        print(f"Warning: No match found for {prefix}")

print("Done bulk cropping.")
