import os, re

orig_path = r'c:\Users\lombi\Desktop\Varios\Inteligencia artificial\Aplicaciones vibe coding\MencIAlanding\Laboratorio MencIA\Tabla periódica de asistentes y apps.html'
curr_path = r'c:\Users\lombi\Desktop\Varios\Inteligencia artificial\Aplicaciones vibe coding\MencIAlanding\landing\public\simuladores\tabla-periodica-ia.html'

with open(orig_path, 'r', encoding='utf-8') as f: orig = f.read()
m_orig = list(re.finditer(r'(<script>)(.*?)(</script>)', orig, re.DOTALL))
script_orig = m_orig[-1].group(2) if m_orig else ''

with open(curr_path, 'r', encoding='utf-8') as f: curr = f.read()
m_curr = list(re.finditer(r'(<script>)(.*?)(</script>)', curr, re.DOTALL))
script_i18n = m_curr[-1].group(2) if m_curr else ''

if script_orig and script_i18n:
    combined = script_orig + '\n\n// --- TRANSLATION I18N ADDED ---\n' + script_i18n
    new_curr = curr[:m_curr[-1].start()] + '<script>\n' + combined + '\n</script>' + curr[m_curr[-1].end():]
    with open(curr_path, 'w', encoding='utf-8') as f:
        f.write(new_curr)
    print("Fixed tabla successfully!")
else:
    print("Error parsing scripts.")
