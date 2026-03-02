import re, os

# Este script reemplaza el bloque i18n del comparador-tareas.html
# usando escapes Unicode directos (\uXXXX) para todos los caracteres acentuados.
# De esta forma no hay dependencia del encoding del archivo al ser interpretado.

COMPARADOR = r'c:\Users\lombi\Desktop\Varios\Inteligencia artificial\Aplicaciones vibe coding\MencIAlanding\landing\public\simuladores\comparador-tareas.html'

# Leemos el archivo
with open(COMPARADOR, 'r', encoding='utf-8') as f:
    content = f.read()

# El bloque nuevo de i18n + runSimulation, TODO en ASCII puro con \uXXXX
NEW_BLOCK = r"""
        // -- i18n --
        const lang = new URLSearchParams(window.location.search).get('lang') || 'es';
        const isGl = lang === 'gl';

        // Traducciones estaticas
        if (isGl) {
            document.title = 'MencIA: Comparador de eficiencia';
            document.querySelector('h1').textContent = 'Comparador de tarefas: funcionalidade fronte a espect\u00e1culo';
            const btns = document.querySelectorAll('.task-btn');
            if(btns[0]) btns[0].textContent = 'Monitor de edictos BOE';
            if(btns[1]) btns[1].textContent = 'Resumidor de documentos';
            if(btns[2]) btns[2].textContent = 'Calculadora de prazos';
            const headers = document.querySelectorAll('.card-header span');
            if(headers[0]) headers[0].textContent = 'Chatbot Xen\u00e9rico';
            document.querySelectorAll('.progress-label span:first-child').forEach(function(el){ el.textContent = 'Consumo de Tokens / Enerx\u00eda'; });
            const ctxCards = document.querySelectorAll('.context-card');
            if(ctxCards[0]){
                ctxCards[0].querySelector('h3').innerHTML = '<i class="fa-solid fa-leaf context-icon" style="color:var(--accent-green)"></i> Green in AI';
                ctxCards[0].querySelector('p').textContent = 'O modelo de Lugo aposta pola eficiencia por dese\u00f1o. Ao usar aplicaci\u00f3ns especializadas (\u201cun clic, unha tarefa\u201d) evitamos di\u00e1logos redundantes que disparan o consumo ener\u0078\u00e9tico.';
                ctxCards[0].querySelector('.stat-highlight').textContent = 'O 56,8% da cidad\u00e1n\u00eda prefire sostibilidade a potencia bruta.';
            }
            if(ctxCards[1]){
                ctxCards[1].querySelector('h3').innerHTML = '<i class="fa-solid fa-tree-city context-icon"></i> Pacto de Estado';
                ctxCards[1].querySelector('p').innerHTML = 'Frugalidade tecnol\u00f3xica aplicada ao territorio. A IA permite xestionar mellor os recursos rurais mediante a an\u00e1lise de datos locais, como a <strong>prevenci\u00f3n de incendios</strong> ou a <strong>xesti\u00f3n de augas</strong>, sen necesidade de grandes infraestruturas.';
                ctxCards[1].querySelector('.stat-highlight').textContent = 'Tecnolox\u00eda \u00fatil para a emerxencia clim\u00e1tica.';
            }
            if(ctxCards[2]){
                ctxCards[2].querySelector('h3').innerHTML = '<i class="fa-solid fa-star context-icon" style="color:#fbbf24"></i> Apply AI - UE';
                ctxCards[2].querySelector('p').textContent = 'Sincron\u00eda total coa estratexia europea. A especializaci\u00f3n de tarefas ali\u00f1ase cos obxectivos dos EDIH, ofrecendo soluci\u00f3ns concretas e soberanas \u00e1 administraci\u00f3n local.';
                ctxCards[2].querySelector('.stat-highlight').textContent = 'Modelo validado como \u201cboa pr\u00e1ctica\u201d europea.';
            }
        }

        // Textos de simulacion (biligue)
        const simulations = {
            boe: {
                generic: isGl
                    ? 'Ola, son o teu asistente virtual. Para buscar no BOE necesito que me especifiques a data, o departamento e palabras clave. Estou procesando a t\u00faa petici\u00f3n... buscando en bases de datos xerais... atopei 400 resultados posibles. Queres que os liste todos ou prefires filtrar por comunidade aut\u00f3noma?...'
                    : 'Hola, soy tu asistente virtual. Para buscar en el BOE necesito que me especifiques la fecha, el departamento y palabras clave. Estoy procesando tu petici\u00f3n... buscando en bases de datos generales... he encontrado 400 resultados posibles. \u00bfQuieres que los liste todos o prefieres filtrar por comunidad aut\u00f3noma?...',
                mencia: isGl
                    ? '<h4><i class=\'fa-solid fa-check\'></i> Edicto Detectado</h4><p><strong>Bolet\u00edn:</strong> BOE-A-2025-1234</p><p><strong>Estado:</strong> Notificaci\u00f3n xudicial (Concursal)</p><p><strong>Acci\u00f3n:</strong> Enviado a Recadaci\u00f3n.</p>'
                    : '<h4><i class=\'fa-solid fa-check\'></i> Edicto Detectado</h4><p><strong>Bolet\u00edn:</strong> BOE-A-2025-1234</p><p><strong>Estado:</strong> Notificaci\u00f3n judicial (Concursal)</p><p><strong>Acci\u00f3n:</strong> Enviado a Recaudaci\u00f3n.</p>',
                genericLoad: 85, menciaLoad: 15
            },
            resume: {
                generic: isGl
                    ? 'Claro, podo axudarte con iso. Por favor sube o texto. Procesando... \u00c9 un texto longo. Aqu\u00ed tes un primeiro par\u00e1grafo... Queres que contin\u00fae co segundo? Lembra que te\u00f1o un l\u00edmite de tokens por resposta, polo que terei que facelo en varias partes...'
                    : 'Claro, puedo ayudarte con eso. Por favor sube el texto. Procesando... Es un texto largo. Aqu\u00ed tienes un primer p\u00e1rrafo... \u00bfQuieres que contin\u00fae con el segundo? Recuerda que tengo un l\u00edmite de tokens por respuesta, as\u00ed que tendr\u00e9 que hacerlo en varias partes...',
                mencia: isGl
                    ? '<h4><i class=\'fa-solid fa-file-lines\'></i> Resumo Executivo</h4><ul><li>Obxecto: Licitaci\u00f3n de obras.</li><li>Orzamento: 150.000\u20ac.</li><li>Prazo: 3 meses.</li></ul><p><em>Documento procesado en 0.4s</em></p>'
                    : '<h4><i class=\'fa-solid fa-file-lines\'></i> Resumen Ejecutivo</h4><ul><li>Objeto: Licitaci\u00f3n de obras.</li><li>Presupuesto: 150.000\u20ac.</li><li>Plazo: 3 meses.</li></ul><p><em>Documento procesado en 0.4s</em></p>',
                genericLoad: 95, menciaLoad: 10
            },
            calc: {
                generic: isGl
                    ? 'Para calcular prazos necesito saber a lei aplic\u00e1bel. \u00c9 a LCSP 9/2017? Ben. Cando se publicou o anuncio? \u00c9 d\u00eda h\u00e1bil ou natural no teu municipio? Agarda, d\u00e9ixame consultar o calendario laboral xeral de Espa\u00f1a...'
                    : 'Para calcular plazos necesito saber la ley aplicable. \u00bfEs la LCSP 9/2017? Bien. \u00bfCu\u00e1ndo se public\u00f3 el anuncio? \u00bfEs d\u00eda h\u00e1bil o natural en tu municipio? Espera, d\u00e9jame consultar el calendario laboral general de Espa\u00f1a...',
                mencia: isGl
                    ? '<h4><i class=\'fa-regular fa-calendar-check\'></i> Prazo Finalizado</h4><p><strong>Fin de presentaci\u00f3n:</strong> 15 de Outubro (14:00h)</p><p><em>C\u00e1lculo axustado a festivos locais de Lugo.</em></p>'
                    : '<h4><i class=\'fa-regular fa-calendar-check\'></i> Plazo Finalizado</h4><p><strong>Fin de presentaci\u00f3n:</strong> 15 de Octubre (14:00h)</p><p><em>C\u00e1lculo ajustado a festivos locales de Lugo.</em></p>',
                genericLoad: 70, menciaLoad: 5
            }
        };

        function runSimulation(type) {
            var evt = arguments[1] || event;
            var buttons = document.querySelectorAll('.task-btn');
            buttons.forEach(function(b){ b.classList.remove('active'); });
            if(evt && evt.target) evt.target.classList.add('active');

            var genericOut = document.getElementById('generic-output');
            var menciaOut  = document.getElementById('mencia-output');
            var layers     = document.getElementById('context-layers');

            layers.classList.remove('visible');
            genericOut.innerHTML = '<p style="color:#777">' + (isGl ? 'Iniciando conversa\u00e7\u00e3o...' : 'Iniciando conversaci\u00f3n...') + '</p>';
            menciaOut.innerHTML  = '<p style="color:#777">' + (isGl ? 'Cargando m\u00f3dulo...' : 'Cargando m\u00f3dulo...') + '</p>';

            document.getElementById('generic-bar').style.width = '0%';
            document.getElementById('mencia-bar').style.width  = '0%';
            document.getElementById('generic-metric').innerText = '0%';
            document.getElementById('mencia-metric').innerText  = '0%';

            var data = simulations[type];

            setTimeout(function(){
                menciaOut.innerHTML = '<div class="structured-output" style="display:block">' + data.mencia + '</div>';
                document.getElementById('mencia-bar').style.width  = data.menciaLoad + '%';
                document.getElementById('mencia-metric').innerText = data.menciaLoad + '% (' + (isGl ? 'Baixo' : 'Bajo') + ')';
            }, 800);

            setTimeout(function(){
                var text = data.generic;
                genericOut.innerHTML = '<p class="typing-animation" style="color:var(--text-gray)">' + text.substring(0,60) + '...</p>';
                setTimeout(function(){
                    genericOut.innerHTML = '<p>' + text + '</p>';
                    document.getElementById('generic-bar').style.width  = data.genericLoad + '%';
                    document.getElementById('generic-metric').innerText = data.genericLoad + '% (' + (isGl ? 'Alto' : 'Alto') + ')';
                    setTimeout(function(){ layers.classList.add('visible'); }, 500);
                }, 1500);
            }, 500);
        }

        window.onload = function(){ runSimulation('boe', {target: document.querySelector('.task-btn')}); };
"""

# Buscar el bloque script original para reemplazarlo
# Buscamos desde '// -- i18n --' o '// ── i18n ──' hasta el ultimo </script>
# Mejor: reemplazar todo el contenido del ultimo bloque <script>

# Encontrar todos los bloques <script>
script_pattern = re.compile(r'(<script>)(.*?)(</script>)', re.DOTALL)
matches = list(script_pattern.finditer(content))

if not matches:
    print('ERROR: No se encontro bloque <script>')
else:
    # El ultimo bloque <script> es el nuestro (i18n + runSimulation)
    last = matches[-1]
    new_content = content[:last.start()] + '<script>' + NEW_BLOCK + '    </script>' + content[last.end():]
    with open(COMPARADOR, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('Reemplazado bloque script en comparador-tareas.html')
    print('Bloques script encontrados: ' + str(len(matches)))
