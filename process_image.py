from PIL import Image, ImageEnhance, ImageOps

input_path = '/Users/Jorge/.gemini/antigravity/brain/a93ab619-ced5-46cd-83b8-5a89458cb177/media__1775473097787.jpg'
output_path = 'public/artfan/gauguin.png'

try:
    img = Image.open(input_path).convert('RGB')
    
    # 1. Decrease brightness slightly
    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(0.75)
    
    # 2. Increase contrast to make it punchy
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.2)
    
    # 3. Decrease saturation to make it less overwhelmingly yellow, more cinematic
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(0.8)
    
    # 4. Apply a very subtle cool/dark tint by blending with a dark color
    tint = Image.new('RGB', img.size, (10, 10, 15)) # Very dark bluish-gray
    img = Image.blend(img, tint, alpha=0.15)
    
    img.save(output_path, format='PNG')
    print("Successfully processed the image.")
except Exception as e:
    print(f"Error processing image: {e}")
