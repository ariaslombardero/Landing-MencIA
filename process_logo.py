from PIL import Image
import sys

def process_logo(input_path, output_dark_path, output_light_path):
    print(f"Processing {input_path}")
    img = Image.open(input_path).convert("RGB")
    pixels = img.load()
    width, height = img.size
    
    img_dark = Image.new("RGBA", (width, height))
    pixels_dark = img_dark.load()
    
    img_light = Image.new("RGBA", (width, height))
    pixels_light = img_light.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            alpha = max(r, g, b)
            
            if alpha == 0:
                pixels_dark[x, y] = (0, 0, 0, 0)
                pixels_light[x, y] = (0, 0, 0, 0)
            else:
                new_r = int(r * 255 / alpha)
                new_g = int(g * 255 / alpha)
                new_b = int(b * 255 / alpha)
                
                pixels_dark[x, y] = (new_r, new_g, new_b, alpha)
                
                # For light mode:
                # Make the letters and cross all red (MencIA Red: #cf112d)
                pixels_light[x, y] = (207, 17, 45, alpha)

    img_dark.save(output_dark_path, "PNG")
    img_light.save(output_light_path, "PNG")
    print(f"Saved {output_dark_path} and {output_light_path}")

process_logo("public/logos/mencia-banner.jpg", "public/logos/mencia-logo-trans-dark.png", "public/logos/mencia-logo-trans-light.png")
