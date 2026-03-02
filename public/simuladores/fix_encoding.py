import re, os

# Mapa de reparacion: bytes Latin-1 mal interpretados -> caracter correcto
# Patron: string corrupto -> string correcto
CORRUPT_MAP = [
    ('\u00c3\u00a1', '\u00e1'),  # a con tilde (a acento agudo)
    ('\u00c3\u00a9', '\u00e9'),  # e con tilde
    ('\u00c3\u00ad', '\u00ed'),  # i con tilde
    ('\u00c3\u00b3', '\u00f3'),  # o con tilde
    ('\u00c3\u00ba', '\u00fa'),  # u con tilde
    ('\u00c3\u00b1', '\u00f1'),  # enie
    ('\u00c3\u00bc', '\u00fc'),  # u dieresis
    ('\u00c3\u00b6', '\u00f6'),  # o dieresis
    ('\u00c3\u00a4', '\u00e4'),  # a dieresis
    ('\u00c3\u009f', '\u00df'),  # sz alemana
    ('\u00c3\u0081', '\u00c1'),  # A con tilde
    ('\u00c3\u0089', '\u00c9'),  # E con tilde
    ('\u00c3\u008d', '\u00cd'),  # I con tilde
    ('\u00c3\u0093', '\u00d3'),  # O con tilde
    ('\u00c3\u009a', '\u00da'),  # U con tilde
    ('\u00c3\u0091', '\u00d1'),  # Enie mayuscula
    ('\u00c2\u00bf', '\u00bf'),  # signo de interrogacion invertido
    ('\u00c2\u00a1', '\u00a1'),  # signo de exclamacion invertido
    ('\u00c2\u00ab', '\u00ab'),  # comilla angulada izq
    ('\u00c2\u00bb', '\u00bb'),  # comilla angulada der
    ('\u00c3\u00b2', '\u00f2'),  # o grave
    ('\u00c3\u00a0', '\u00e0'),  # a grave
    ('\u00c3\u00a8', '\u00e8'),  # e grave
    ('\u00c3\u00ac', '\u00ec'),  # i grave
    ('\u00c3\u00b9', '\u00f9'),  # u grave
]

def repair_corrupted(text):
    for bad, good in CORRUPT_MAP:
        text = text.replace(bad, good)
    return text

def escape_ascii(text):
    return ''.join(
        c if ord(c) < 128 else ('\\u%04x' % ord(c))
        for c in text
    )

def process_scripts(html):
    def replacer(m):
        tag_open  = m.group(1)
        body      = m.group(2)
        tag_close = m.group(3)
        repaired = repair_corrupted(body)
        escaped  = escape_ascii(repaired)
        return tag_open + escaped + tag_close
    return re.sub(
        r'(<script[^>]*>)(.*?)(</script>)',
        replacer,
        html,
        flags=re.DOTALL | re.IGNORECASE
    )

base = os.path.dirname(os.path.abspath(__file__))
files = [
    'radar-estrategico.html',
    'comparador-tareas.html',
    'calculadora-impacto-verde.html',
    'mapa-ecosistema-provincial.html',
    'tabla-periodica-ia.html',
]

for fname in files:
    path = os.path.join(base, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    fixed = process_scripts(content)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(fixed)
    print('Repaired + escaped: ' + fname)

print('All done.')
