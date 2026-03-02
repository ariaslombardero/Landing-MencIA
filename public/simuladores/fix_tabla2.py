import os, re

orig_path = r'c:\Users\lombi\Desktop\Varios\Inteligencia artificial\Aplicaciones vibe coding\MencIAlanding\Laboratorio MencIA\Tabla periódica de asistentes y apps.html'
curr_path = r'c:\Users\lombi\Desktop\Varios\Inteligencia artificial\Aplicaciones vibe coding\MencIAlanding\landing\public\simuladores\tabla-periodica-ia.html'

# Lee el javascript original
with open(orig_path, 'r', encoding='utf-8') as f: orig = f.read()
m_orig = list(re.finditer(r'(<script>)(.*?)(</script>)', orig, re.DOTALL))
script_orig = m_orig[-1].group(2)

# El script i18n
script_i18n = r"""
        var _lang = new URLSearchParams(window.location.search).get('lang') || 'es';
        if (_lang === 'gl') {
            document.title = 'MencIA - Cat\u00e1logo visual de asistentes';
            var _h1 = document.querySelector('h1');
            if(_h1) _h1.innerHTML = 'Ecosistema de <br><span class="text-[#cf112d]">Soberan\u00eda Dixital.</span>';
            var _mp = document.querySelector('main > div > p');
            if(_mp) _mp.innerHTML = 'Explora a nosa t\u00e1boa peri\u00f3dica de asistentes. Cada nodo representa unha soluci\u00f3n de <span class="text-white font-medium">c\u00f3digo aberto</span> dese\u00f1ada baixo os principios de Green AI.';
            var _fp = document.querySelector('footer p');
            if(_fp) _fp.textContent = 'MencIA \u00a9 2025 \u2014 Deputaci\u00f3n de Lugo';
            
            var _catMap = {'GESTI\u00d3N':'XESTI\u00d3N','JUR\u00cdDICO':'XUR\u00cdDICO','COMUNICACI\u00d3N':'COMUNICACI\u00d3N','SOPORTE':'SOPORTE','ESTRATEGIA':'ESTRATEXIA'};
            document.querySelectorAll('header span, header div').forEach(function(el){
                var t = el.textContent.trim();
                for(var k in _catMap) {
                    if (t.indexOf(k) !== -1) el.innerHTML = el.innerHTML.replace(k, _catMap[k]);
                }
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

with open(curr_path, 'r', encoding='utf-8') as f: curr = f.read()

# Extraer todo el contenido fuera del tag script final
m_curr = list(re.finditer(r'(<script>)(.*?)(</script>)', curr, re.DOTALL))

if len(m_curr) > 0:
    combined = script_orig + '\n\n// --- I18N BLOCK ---\n' + script_i18n
    new_curr = curr[:m_curr[-1].start()] + '<script>\n' + combined + '\n</script>\n</body>\n</html>'
    with open(curr_path, 'w', encoding='utf-8') as f:
        f.write(new_curr)
    print("Tabla periodica restaurada correctamente con traducción.")
else:
    print("Error parsing scripts.")
