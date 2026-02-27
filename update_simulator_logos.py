import glob
import re

files = glob.glob("public/simuladores/*.html")

# The exact old string as a regex
old_src_pattern = r'src="\.\./Logos%20mencia/Imagen%20de%20WhatsApp%202025-10-31%20a%20las%2015\.07\.11_8460b800\.jpg"'

# The new string with the transparent logo and inline styles restricting the size
new_src = 'src="../logos/mencia-logo-trans-dark.png" style="height: 42px; width: auto; object-fit: contain;"'

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    content = content.replace('class="h-8 w-auto object-contain rounded"', '')
    
    new_content = re.sub(old_src_pattern, new_src, content)
    
    if new_content != content:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {f}")
