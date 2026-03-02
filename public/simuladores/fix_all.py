import re, os

BASE = os.path.dirname(os.path.abspath(__file__))

# ──────────────────────────────────────────────────────────────────────────────
# Bloques JS i18n para cada simulador, en ASCII puro con \uXXXX
# ──────────────────────────────────────────────────────────────────────────────

BLOCKS = {}

# ─── 1. COMPARADOR DE TAREAS ─────────────────────────────────────────────────
BLOCKS['comparador-tareas.html'] = r"""
        // -- i18n --
        var lang = new URLSearchParams(window.location.search).get('lang') || 'es';
        var isGl = lang === 'gl';

        if (isGl) {
            document.title = 'MencIA: Comparador de eficiencia';
            var h1 = document.querySelector('h1');
            if(h1) h1.textContent = 'Comparador de tarefas: funcionalidade fronte a espect\u00e1culo';
            var btns = document.querySelectorAll('.task-btn');
            if(btns[0]) btns[0].textContent = 'Monitor de edictos BOE';
            if(btns[1]) btns[1].textContent = 'Resumidor de documentos';
            if(btns[2]) btns[2].textContent = 'Calculadora de prazos';
            var headers = document.querySelectorAll('.card-header span');
            if(headers[0]) headers[0].textContent = 'Chatbot Xen\u00e9rico';
            document.querySelectorAll('.progress-label span:first-child').forEach(function(el){ el.textContent = 'Consumo de Tokens / Enerx\u00eda'; });
            var ctxCards = document.querySelectorAll('.context-card');
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

        var simulations = {
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

        function runSimulation(type, evtArg) {
            var buttons = document.querySelectorAll('.task-btn');
            buttons.forEach(function(b){ b.classList.remove('active'); });
            var activeBtn = evtArg && evtArg.target ? evtArg.target : (event && event.target ? event.target : null);
            if(activeBtn) activeBtn.classList.add('active');
            var genericOut = document.getElementById('generic-output');
            var menciaOut  = document.getElementById('mencia-output');
            var layers     = document.getElementById('context-layers');
            layers.classList.remove('visible');
            genericOut.innerHTML = '<p style="color:#777">' + (isGl ? 'Iniciando conversa...' : 'Iniciando conversaci\u00f3n...') + '</p>';
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

        window.onload = function(){ runSimulation('boe', null); };
"""

# ─── 2. RADAR ESTRATÉGICO ─────────────────────────────────────────────────────
BLOCKS['radar-estrategico.html'] = r"""
        var lang = new URLSearchParams(window.location.search).get('lang') || 'es';
        var isGl = lang === 'gl';

        var i18n = {
            pageTitle:  isGl ? 'MencIA: Radar estrat\u00e9xico'   : 'MencIA: Radar Estrat\u00e9gico',
            h1:         isGl ? 'Radar estrat\u00e9xico: Lugo en Europa' : 'Radar estrat\u00e9gico: Lugo en Europa',
            subtitle:   isGl ? 'Comparativa de rendemento do modelo vs. administraci\u00f3n tradicional' : 'Comparativa de rendimiento del modelo vs. administraci\u00f3n tradicional',
            cardTitle:  isGl ? 'Ali\u00f1aci\u00f3n Estrat\u00e9xica' : 'Alineaci\u00f3n Estrat\u00e9gica',
            cardBody:   isGl ? 'Pasa o cursor sobre os puntos vermellos do gr\u00e1fico para descubrir como o modelo MencIA conecta os obxectivos locais coas grandes estratexias nacionais e europeas.' : 'Pasa el cursor sobre los puntos rojos del gr\u00e1fico para descubrir c\u00f3mo el modelo MencIA conecta los objetivos locales con las grandes estrategias nacionales y europeas.',
            cardBadge:  isGl ? 'Interacci\u00f3n requirida' : 'Interacci\u00f3n requerida',
            quote:      isGl ? '"O modelo de Lugo non s\u00f3 \u00e9 compatible coa visi\u00f3n europea, sen\u00f3n un playbook validado e listo para integrarse na caixa de ferramentas dixital da Uni\u00f3n."' : '"El modelo de Lugo no es solo compatible con la visi\u00f3n europea, sino un playbook validado y listo para integrarse en la caja de herramientas digital de la Uni\u00f3n."',
            quoteAuthor: 'Informe Apply AI',
            labels: isGl
                ? ['Soberan\u00eda tecnol\u00f3xica', 'Sostibilidade (Green AI)', 'Replicabilidade', 'C\u00f3digo aberto', 'Competitividade']
                : ['Soberan\u00eda tecnol\u00f3gica', 'Sostenibilidad (Green AI)', 'Replicabilidad', 'C\u00f3digo abierto', 'Competitividad'],
            dataset0: 'Modelo MencIA',
            dataset1: isGl ? 'Promedio Administraci\u00f3n' : 'Promedio Administraci\u00f3n'
        };

        var contextDataRaw = [
            { title: isGl ? 'Soberan\u00eda tecnol\u00f3xica' : 'Soberan\u00eda tecnol\u00f3gica', icon: 'fa-shield-halved',
              text:  isGl ? 'Conexi\u00f3n directa coa estratexia <strong>\'AI First\'</strong> da UE. Garantimos o control total dos datos e eliminamos dependencias de provedores externos (feudalismo dixital).'
                           : 'Conexi\u00f3n directa con la estrategia <strong>\'AI First\'</strong> de la UE. Garantizamos el control total de los datos y eliminamos dependencias de proveedores externos (feudalismo digital).',
              badge: isGl ? 'Estratexia UE Apply AI' : 'Estrategia UE Apply AI' },
            { title: isGl ? 'Sostibilidade (Green AI)' : 'Sostenibilidad (Green AI)', icon: 'fa-leaf',
              text:  isGl ? 'Ali\u00f1aci\u00f3n co <strong>Pacto de Estado</strong> e a emerxencia clim\u00e1tica. O noso enfoque de \'un clic, unha tarefa\' reduce drasticamente a pegada de carbono fronte a modelos masivos.'
                           : 'Alineaci\u00f3n con el <strong>Pacto de Estado</strong> y la emergencia clim\u00e1tica. Nuestro enfoque de \'un clic, una tarea\' reduce dr\u00e1sticamente la huella de carbono frente a modelos masivos.',
              badge: 'Pacto de Estado / Green AI' },
            { title: isGl ? 'Replicabilidade' : 'Replicabilidad', icon: 'fa-clone',
              text:  isGl ? 'Un modelo dese\u00f1ado como <strong>Playbook</strong>. Documentaci\u00f3n, c\u00f3digo e metodolox\u00eda listos para ser exportados a outras deputaci\u00f3ns e \u00e1 caixa de ferramentas da UE.'
                           : 'Un modelo dise\u00f1ado como <strong>Playbook</strong>. Documentaci\u00f3n, c\u00f3digo y metodolog\u00eda listos para ser exportados a otras diputaciones y a la caja de herramientas de la UE.',
              badge: isGl ? 'Escalabilidade Europea' : 'Escalabilidad Europea' },
            { title: isGl ? 'C\u00f3digo aberto' : 'C\u00f3digo abierto', icon: 'fa-code-branch',
              text:  isGl ? 'Cumprimento do principio de transparencia. Usamos e contibu\u00edmos ao ecosistema <strong>Open Source</strong>, permitindo auditor\u00eda p\u00fablica e mellora continua.'
                           : 'Cumplimiento del principio de transparencia. Utilizamos y contribuimos al ecosistema <strong>Open Source</strong>, permitiendo auditor\u00eda p\u00fablica y mejora continua.',
              badge: 'Transparencia Total' },
            { title: isGl ? 'Competitividade' : 'Competitividad', icon: 'fa-rocket',
              text:  isGl ? 'Mellora real da produtividade administrativa sen sacrificar dereitos. Convertemos a administraci\u00f3n local nun motor de innovaci\u00f3n \u00e1xil.'
                           : 'Mejora real de la productividad administrativa sin sacrificar derechos. Convertimos a la administraci\u00f3n local en un motor de innovaci\u00f3n \u00e1gil.',
              badge: isGl ? 'Eficiencia P\u00fablica' : 'Eficiencia P\u00fablica' }
        ];

        document.title = i18n.pageTitle;
        var tsH1 = document.querySelector('.title-section h1');
        if(tsH1) tsH1.textContent = i18n.h1;
        var tsP  = document.querySelector('.title-section p');
        if(tsP)  tsP.textContent  = i18n.subtitle;
        var dcH3 = document.querySelector('#dynamic-card h3');
        if(dcH3) dcH3.innerHTML = '<i class="fa-solid fa-chart-pie"></i> ' + i18n.cardTitle;
        var dcP  = document.querySelector('#dynamic-card p');
        if(dcP)  dcP.textContent = i18n.cardBody;
        var dcB  = document.querySelector('#dynamic-card .context-badge');
        if(dcB)  dcB.textContent = i18n.cardBadge;
        var qt   = document.querySelector('.quote-text');
        if(qt)   qt.textContent  = i18n.quote;
        var qa   = document.querySelector('.quote-author');
        if(qa)   qa.textContent  = i18n.quoteAuthor;

        var chartData = {
            labels: i18n.labels,
            datasets: [{
                label: i18n.dataset0,
                data: [95, 90, 100, 100, 85],
                fill: true,
                backgroundColor: 'rgba(207,17,45,0.2)',
                borderColor: '#cf112d',
                pointBackgroundColor: '#cf112d',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#cf112d',
                borderWidth: 3
            },{
                label: i18n.dataset1,
                data: [30, 40, 20, 30, 50],
                fill: true,
                backgroundColor: 'rgba(148,163,184,0.1)',
                borderColor: '#475569',
                pointBackgroundColor: '#475569',
                borderDash: [5,5],
                borderWidth: 1
            }]
        };

        var chartConfig = {
            type: 'radar',
            data: chartData,
            options: {
                responsive: true,
                elements: { line: { tension: 0.3 } },
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255,255,255,0.1)' },
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        pointLabels: { color: '#94a3b8', font: { family: "'Plus Jakarta Sans',sans-serif", size: 12, weight: '600' } },
                        ticks: { display: false, backdropColor: 'transparent' },
                        suggestedMin: 0, suggestedMax: 100
                    }
                },
                plugins: {
                    legend: { labels: { color: '#fff', font: { family: "'Plus Jakarta Sans'" } } },
                    tooltip: { enabled: false }
                },
                onHover: function(event, elements) {
                    if (elements.length && elements[0].datasetIndex === 0) {
                        updateContextPanel(elements[0].index);
                    }
                }
            }
        };

        var ctx = document.getElementById('radarChart').getContext('2d');
        var myChart = new Chart(ctx, chartConfig);

        function updateContextPanel(index) {
            var card = document.getElementById('dynamic-card');
            var d = contextDataRaw[index];
            if (card.dataset.currentIndex == index) return;
            card.classList.remove('fade-in');
            void card.offsetWidth;
            card.innerHTML = '<h3><i class="fa-solid ' + d.icon + '" style="color:var(--primary-red)"></i> ' + d.title + '</h3><p>' + d.text + '</p><div class="context-badge">' + d.badge + '</div>';
            card.classList.add('fade-in');
            card.dataset.currentIndex = index;
        }
"""

# ─── 3. CALCULADORA IMPACTO VERDE ────────────────────────────────────────────
BLOCKS['calculadora-impacto-verde.html'] = r"""
        var _lang = new URLSearchParams(window.location.search).get('lang') || 'es';
        if (_lang === 'gl') {
            document.title = 'MencIA - Calculadora de Impacto Verde';
            var _h1 = document.querySelector('h1');
            if(_h1) _h1.textContent = 'Calculadora de Impacto Verde';
            var _btn = document.getElementById('sim-btn');
            if(_btn) _btn.innerHTML = '<i data-lucide="zap" class="w-4 h-4"></i> Executar Tarefa';
            var _simH2 = document.querySelector('section h2');
            if(_simH2) _simH2.innerHTML = '<i data-lucide="play-circle" class="text-[#cf112d]"></i> Monitor de Edictos BOE';
            var _ph = document.getElementById('mencia-placeholder');
            if(_ph) _ph.textContent = 'Agardando execuci\u00f3n...';
            var _eqP = document.querySelector('#ratio-display + p');
            if(_eqP) _eqP.textContent = 'M\u00e1is eficiente \u00e9 o modelo MencIA en tarefas estruturadas';
            document.querySelectorAll('.progress-label span:first-child').forEach(function(el){ el.textContent = 'Consumo Enerx\u00e9tico'; });
            document.querySelectorAll('span.text-xs').forEach(function(el){
                if(el.textContent.trim() === 'Menos es mejor') el.textContent = 'Menos \u00e9 mellor';
            });
            lucide.createIcons();
        }
"""

# --- 4. MAPA ECOSISTEMA PROVINCIAL ---
BLOCKS['mapa-ecosistema-provincial.html'] = r"""
        var _lang = new URLSearchParams(window.location.search).get('lang') || 'es';
        if (_lang === 'gl') {
            document.title = 'MencIA - Ecosistema de Replicabilidade';
            var _hdr = document.querySelector('header .text-xs.font-bold');
            if(_hdr) _hdr.innerHTML = 'Ecosistema de Rede<br>Neural Provincial';
            var _card = document.querySelector('.glass-panel.rounded-2xl.p-5');
            if(_card){
                var _ch3 = _card.querySelector('h3');
                if(_ch3) _ch3.innerHTML = 'IA en 3 Clics = Green AI <span class="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/30">Sostibilidade</span>';
                var _cp  = _card.querySelector('p');
                if(_cp)  _cp.textContent = 'A eficiencia \u00e9 ecol\u00f3xica. As nosas aplicaci\u00f3ns resolven tarefas complexas en segundos (\u201c3 clics\u201d), evitando o consumo enerx\u00e9tico masivo de sesi\u00f3ns de chat longas.';
                // Buscar los spans de energia y tiempo de forma robusta
                var _allSpans = _card.querySelectorAll('span');
                _allSpans.forEach(function(s){
                    var t = s.textContent.trim();
                    if(t.indexOf('-80%') !== -1) s.innerHTML = '<i data-lucide="zap" class="w-3 h-3 text-yellow-400"></i> -80% Enerx\u00eda';
                    if(t.indexOf('-90%') !== -1) s.innerHTML = '<i data-lucide="clock" class="w-3 h-3 text-blue-400"></i> -90% Tempo';
                });
            }
            var _legend = document.querySelector('.glass-panel.p-6.rounded-2xl.max-w-sm');
            if(_legend){
                var _lh4 = _legend.querySelector('h4');
                if(_lh4) _lh4.textContent = 'Lenda do Grafo';
                var _lbold = _legend.querySelectorAll('.text-sm.font-bold.text-white');
                if(_lbold[0]) _lbold[0].textContent = 'Hub Central (Deputaci\u00f3n)';
                if(_lbold[1]) _lbold[1].textContent = 'Nodo Municipal (<20k)';
                if(_lbold[2]) _lbold[2].textContent = 'Fluxo EDIH Hiperlocal';
                var _lsub = _legend.querySelectorAll('.text-xs.text-slate-400');
                if(_lsub[0]) _lsub[0].textContent = 'Provedor de servizos & Co\u00f1ecemento';
                if(_lsub[1]) _lsub[1].textContent = 'Receptor Art. 36.1 LBRL';
                if(_lsub[2]) _lsub[2].textContent = 'Transmisi\u00f3n de Modelos & Datos';
                // Boton Apply AI
                var _blueBoxes = _legend.querySelectorAll('[class*="text-blue"]');
                _blueBoxes.forEach(function(el){
                    if(el.textContent.indexOf('Apply AI') !== -1 || el.textContent.indexOf('Caja') !== -1)
                        el.textContent = 'Apply AI: "Caixa de ferramentas" UE';
                });
            }
            lucide.createIcons();
        }
"""

# --- 5. TABLA PERIODICA ---
BLOCKS['tabla-periodica-ia.html'] = r"""
        var _lang = new URLSearchParams(window.location.search).get('lang') || 'es';
        if (_lang === 'gl') {
            document.title = 'MencIA - Cat\u00e1logo visual de asistentes';
            var _h1 = document.querySelector('h1');
            if(_h1) _h1.innerHTML = 'Ecosistema de <br><span class="text-[#cf112d]">Soberan\u00eda Dixital.</span>';
            var _mp = document.querySelector('main > div > p');
            if(_mp) _mp.innerHTML = 'Explora a nosa t\u00e1boa peri\u00f3dica de asistentes. Cada nodo representa unha soluci\u00f3n de <span class="text-white font-medium">c\u00f3digo aberto</span> dese\u00f1ada baixo os principios de Green AI.';
            var _fp = document.querySelector('footer p');
            if(_fp) _fp.textContent = 'MencIA \u00a9 2025 \u2014 Deputaci\u00f3n de Lugo';
            // Categorias del header (leyenda)
            var _catMap = {'GESTI\u00d3N':'XESTI\u00d3N','JUR\u00cdDICO':'XUR\u00cdDICO','COMUNICACI\u00d3N':'COMUNICACI\u00d3N','SOPORTE':'SOPORTE','ESTRATEGIA':'ESTRATEXIA'};
            document.querySelectorAll('header span, header div').forEach(function(el){
                var t = el.textContent.trim();
                if(_catMap[t]) el.textContent = _catMap[t];
            });
            var _mGreen = document.querySelector('#modal-content .text-green-400.uppercase');
            if(_mGreen) _mGreen.innerHTML = '<i data-lucide="leaf" class="w-4 h-4"></i> Sostibilidade';
            var _mBlue  = document.querySelector('#modal-content .text-blue-400.uppercase');
            if(_mBlue)  _mBlue.innerHTML  = '<i data-lucide="shield" class="w-4 h-4"></i> Soberan\u00eda UE';

            var asistentesGl = [
                {id:'Rd',number:'01',name:'Resumidor de documentos',group:'gestion',desc:'Procesa documentos extensos (leis, informes) e xera un resumo coas ideas principais en segundos. Ideal para a toma de decisi\u00f3ns r\u00e1pida.',green:'Reduce o tempo de pantalla e computaci\u00f3n ao evitar a lectura completa. Modelo SLM especializado.',eu:'Soberan\u00eda de datos: o documento nunca sae do servidor provincial.',icon:'file-text'},
                {id:'Oc',number:'02',name:'Extractor de texto (OCR)',group:'gestion',desc:'Converte documentos escaneados ou imaxes en texto chan e editable para dixitalizaci\u00f3n masiva.',green:'Dixitalizaci\u00f3n eficiente que evita reimpresions innecesarias.',eu:'Alternativa open-source a ferramentas propietarias na nube.',icon:'scan-line'},
                {id:'Tr',number:'03',name:'Transcritor de audio',group:'gestion',desc:'Converte gravaci\u00f3ns de voz (plenos, comisi\u00f3ns) en texto, reco\u00f1ecendo galego e caste\u00e1n.',green:'Optimiza horas de traballo manual reducindo o consumo enerx\u00e9tico das estaci\u00f3ns de traballo.',eu:'Soporte para linguas cooficiais (diversidade cultural europea).',icon:'mic'},
                {id:'Cp',number:'04',name:'Calculadora prazos LCSP',group:'gestion',desc:'Calcula prazos de tr\u00e1mites da lei de contratos, considerando d\u00edas h\u00e1biles e festivos locais.',green:'Ferramenta simb\u00f3lica de consumo enerx\u00e9tico case nulo fronte a LLMs.',eu:'Adaptaci\u00f3n espec\u00edfica \u00e1 normativa local (Lugo).',icon:'calendar-clock'},
                {id:'Gc',number:'05',name:'Xesti\u00f3n correo intelixente',group:'gestion',desc:'Analiza, resume e categoriza correos entrantes. Transforma 1 hora de xesti\u00f3n en 5 minutos.',green:'Dr\u00e1stica reduci\u00f3n do tempo de uso de equipos para tarefas rutineiras.',eu:'Privacidade total das comunicaci\u00f3ns institucionais.',icon:'mail'},
                {id:'Mb',number:'06',name:'Monitor edictos BOE',group:'juridico',desc:'Axente que analiza diariamente o BOE para detectar edictos concursais relevantes para recadaci\u00f3n.',green:'Automatizaci\u00f3n que elimina miles de buscas manuais.',eu:'Vixilancia administrativa proactiva e soberana.',icon:'scale'},
                {id:'Mj',number:'07',name:'Memorias xustificativas',group:'juridico',desc:'Gu\u00eda os xestores na redacci\u00f3n da memoria xustificativa obrigatoria en contratos.',green:'Evita a s\u00edndrome da \u201cp\u00e1xina en branco\u201d e m\u00faltiples correcci\u00f3ns.',eu:'Cumprimento normativo asistido por IA.',icon:'file-check'},
                {id:'Ac',number:'08',name:'Asistente contrataci\u00f3n',group:'juridico',desc:'Experto en lei de contratos. Resolve d\u00fabidas sobre licitaci\u00f3ns e revisa pregos.',green:'Modelo especializado (SLM) m\u00e1is eficiente que un GPT-4 xeneralista.',eu:'Ali\u00f1ado coa dixitalizaci\u00f3n do sector p\u00fablico europeo.',icon:'briefcase'},
                {id:'Fp',number:'09',name:'Asesor funci\u00f3n p\u00fablica',group:'juridico',desc:'Experto en normativa de empregados p\u00fablicos (Galicia/Espa\u00f1a). S\u00f3 cita leis.',green:'Sen alucina\u00e7\u00f5es: computaci\u00f3n eficiente sobre base de datos vectorial.',eu:'Transparencia e certeza xur\u00eddica en RRHH.',icon:'users'},
                {id:'Vm',number:'10',name:'Valoraci\u00f3n de m\u00e9ritos',group:'juridico',desc:'Calcula automaticamente puntuaci\u00f3ns en procesos selectivos segundo bases.',green:'Substit\u00fae c\u00e1lculo manual propenso a erros por proceso batch.',eu:'Garant\u00eda de imparcialidade algor\u00edtmica.',icon:'calculator'},
                {id:'Np',number:'11',name:'Notas de prensa',group:'comunicacion',desc:'Redacta borradores de comunicaci\u00f3ns institucionais co estilo hist\u00f3rico da entidade.',green:'Xeraci\u00f3n \'One-shot\' que evita di\u00e1logos extensos.',eu:'Control do relato institucional soberano.',icon:'newspaper'},
                {id:'Pi',number:'12',name:'Profesor de IA',group:'comunicacion',desc:'Explica conceptos de IA a funcionarios sen co\u00f1ecementos t\u00e9cnicos.',green:'Educaci\u00f3n dixital base para o uso responsable.',eu:'Alfabetizaci\u00f3n dixital (DigComp).',icon:'graduation-cap'},
                {id:'Ca',number:'13',name:'Asistente CAU',group:'soporte',desc:'T\u00e9cnico virtual que resolve d\u00fabidas sobre ferramentas internas (VPN, certificados).',green:'Resoluci\u00f3n ao primeiro contacto evitando escalados IT.',eu:'Soporte t\u00e9cnico aut\u00f3nomo.',icon:'help-circle'},
                {id:'Ap',number:'14',name:'Almac\u00e9n de prompts',group:'soporte',desc:'Repositorio centralizado para compartir instruci\u00f3ns eficaces.',green:'Reutilizaci\u00f3n de prompts optimizados (Green Prompting).',eu:'Intelixencia colectiva p\u00fablica.',icon:'database'},
                {id:'Ar',number:'15',name:'Arquitecto asistentes',group:'soporte',desc:'Gu\u00eda o dese\u00f1o de novos asistentes definindo rol e funci\u00f3n.',green:'Dese\u00f1o \'Green by Design\' desde a orixe.',eu:'Fomento do desenvolvemento local.',icon:'layers'},
                {id:'An',number:'16',name:'An\u00e1lise convocatorias',group:'estrategia',desc:'Analiza bases de subvenci\u00f3ns (UE) e extrae fichas con requisitos.',green:'Procesamento focalizado de informaci\u00f3n complexa.',eu:'Absorci\u00f3n de fondos NextGen.',icon:'search'}
            ];

            container.innerHTML = '';
            asistentesGl.forEach(function(item){
                var style = styles[item.group];
                var card  = document.createElement('div');
                card.className = 'element-card bg-[#1e293b]/60 border-2 ' + style.border + ' ' + style.bg_hover + ' ' + style.border_hover + ' ' + style.glow + ' rounded-xl p-4 cursor-pointer flex flex-col justify-between h-40 relative overflow-hidden group';
                card.innerHTML = '<div class="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110"><i data-lucide="' + item.icon + '" class="w-24 h-24 text-white"></i></div><div class="flex justify-between items-start z-10"><span class="text-3xl font-bold ' + style.text + ' tracking-tight">' + item.id + '</span><span class="text-[10px] font-mono text-slate-500 bg-slate-800/50 px-1.5 py-0.5 rounded border border-white/5">' + item.number + '</span></div><div class="z-10 mt-auto"><h3 class="text-sm font-semibold text-gray-200 leading-tight group-hover:text-white transition-colors">' + item.name + '</h3></div>';
                card.addEventListener('click', function(){ openModal(item); });
                container.appendChild(card);
            });
            lucide.createIcons();
        }
"""

# ─── Función para reemplazar el último bloque <script> ──────────────────────
def replace_last_script(html, new_body):
    pattern = re.compile(r'(<script>)(.*?)(</script>)', re.DOTALL)
    matches = list(pattern.finditer(html))
    if not matches:
        return html, False
    last = matches[-1]
    return html[:last.start()] + '<script>' + new_body + '    </script>' + html[last.end():], True

# ─── Aplicar a cada archivo ─────────────────────────────────────────────────
for fname, new_block in BLOCKS.items():
    path = os.path.join(BASE, fname)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    fixed, ok = replace_last_script(content, new_block)
    if ok:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print('OK: ' + fname)
    else:
        print('SKIP (no script found): ' + fname)

print('All done.')
