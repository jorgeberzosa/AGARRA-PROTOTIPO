from PIL import Image

input_path = '/Users/Jorge/.gemini/antigravity/brain/a93ab619-ced5-46cd-83b8-5a89458cb177/animal_artfan_1775661479616.png'
output_path = 'public/artfan/animal.png'

try:
    img = Image.open(input_path)
    width, height = img.size
    
    # Target 16:9 ratio
    target_height = int(width * 9 / 16)
    
    # Calculate crop box (cropping from center)
    top = (height - target_height) // 2
    bottom = top + target_height
    
    cropped_img = img.crop((0, top, width, bottom))
    cropped_img.save(output_path, format='PNG')
    print("Successfully cropped and saved image.")
except Exception as e:
    print(f"Error: {e}")
