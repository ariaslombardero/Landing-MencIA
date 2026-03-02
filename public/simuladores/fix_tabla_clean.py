import re
import os

curr_path = r'c:\Users\lombi\Desktop\Varios\Inteligencia artificial\Aplicaciones vibe coding\MencIAlanding\landing\public\simuladores\tabla-periodica-ia.html'

with open(curr_path, 'r', encoding='utf-8') as f: curr = f.read()

# Locate the <script> block
m_curr = list(re.finditer(r'<script(?! src)>([\s\S]*?)</script>', curr))
# Extract HTML before the last script block
html_before_script = curr[:m_curr[-1].start()]

script_js = r"""
<script>
        var lang = new URLSearchParams(window.location.search).get('lang') || 'es';

        // Translations for UI
        if (lang === 'gl') {
            document.title = 'MencIA - Catálogo visual de asistentes';
            var h1 = document.querySelector('h1');
            if(h1) h1.innerHTML = 'Ecosistema de <br><span class="text-[#cf112d]">Soberanía Dixital.</span>';
            var mp = document.querySelector('main > div > p');
            if(mp) mp.innerHTML = 'Explora a nosa táboa periódica de asistentes. Cada nodo representa unha solución de <span class="text-white font-medium">código aberto</span> deseñada baixo os principios de Green AI.';
            var fp = document.querySelector('footer p');
            if(fp) fp.textContent = 'MencIA © 2025 — Deputación de Lugo';
            
            // Safe translation of header legend without destroying DOM
            var cats = {
                'Gestión': 'XESTIÓN',
                'Jurídico': 'XURÍDICO',
                'Comunicación': 'COMUNICACIÓN',
                'Soporte': 'SOPORTE',
                'Estrategia': 'ESTRATEXIA'
            };
            var legendDivs = document.querySelectorAll('.hidden.md\\:flex.gap-6 > div');
            legendDivs.forEach(function(div) {
                var textNode = Array.from(div.childNodes).find(n => n.nodeType === 3 && n.textContent.trim().length > 0);
                if (textNode) {
                    var val = textNode.textContent.trim();
                    if (cats[val]) textNode.textContent = ' ' + cats[val];
                }
            });
            
            var mGreen = document.querySelector('#modal-content .text-green-400.uppercase');
            if(mGreen) mGreen.innerHTML = '<i data-lucide="leaf" class="w-4 h-4"></i> Sostibilidade';
            var mBlue  = document.querySelector('#modal-content .text-blue-400.uppercase');
            if(mBlue)  mBlue.innerHTML  = '<i data-lucide="shield" class="w-4 h-4"></i> Soberanía UE';
        }

        // Datos de asistentes
        var asistentes = [];
        if (lang === 'gl') {
            asistentes = [
                {id:'Rd',number:'01',name:'Resumidor de documentos',group:'gestion',desc:'Procesa documentos extensos (leis, informes) e xera un resumo coas ideas principais en segundos. Ideal para a toma de decisións rápida.',green:'Reduce o tempo de pantalla e computación ao evitar a lectura completa. Modelo SLM especializado.',eu:'Soberanía de datos: o documento nunca sae do servidor provincial.',icon:'file-text'},
                {id:'Oc',number:'02',name:'Extractor de texto (OCR)',group:'gestion',desc:'Converte documentos escaneados ou imaxes en texto chan e editable para dixitalización masiva.',green:'Dixitalización eficiente que evita reimpresions innecesarias.',eu:'Alternativa open-source a ferramentas propietarias na nube.',icon:'scan-line'},
                {id:'Tr',number:'03',name:'Transcritor de audio',group:'gestion',desc:'Converte gravacións de voz (plenos, comisións) en texto, recoñecendo galego e casteán.',green:'Optimiza horas de traballo manual reducindo o consumo enerxético das estacións de traballo.',eu:'Soporte para linguas cooficiais (diversidade cultural europea).',icon:'mic'},
                {id:'Cp',number:'04',name:'Calculadora prazos LCSP',group:'gestion',desc:'Calcula prazos de trámites da lei de contratos, considerando días hábiles e festivos locais.',green:'Ferramenta simbólica de consumo enerxético case nulo fronte a LLMs.',eu:'Adaptación específica á normativa local (Lugo).',icon:'calendar-clock'},
                {id:'Gc',number:'05',name:'Xestión correo intelixente',group:'gestion',desc:'Analiza, resume e categoriza correos entrantes. Transforma 1 hora de xestión en 5 minutos.',green:'Drástica redución do tempo de uso de equipos para tarefas rutineiras.',eu:'Privacidade total das comunicacións institucionais.',icon:'mail'},
                {id:'Mb',number:'06',name:'Monitor edictos BOE',group:'juridico',desc:'Axente que analiza diariamente o BOE para detectar edictos concursais relevantes para recadación.',green:'Automatización que elimina miles de buscas manuais.',eu:'Vixilancia administrativa proactiva e soberana.',icon:'scale'},
                {id:'Mj',number:'07',name:'Memorias xustificativas',group:'juridico',desc:'Guía os xestores na redacción da memoria xustificativa obrigatoria en contratos.',green:'Evita a síndrome da “páxina en branco” e múltiples correccións.',eu:'Cumprimento normativo asistido por IA.',icon:'file-check'},
                {id:'Ac',number:'08',name:'Asistente contratación',group:'juridico',desc:'Experto en lei de contratos. Resolve dúbidas sobre licitacións e revisa pregos.',green:'Modelo especializado (SLM) máis eficiente que un GPT-4 xeneralista.',eu:'Aliñado coa dixitalización do sector público europeo.',icon:'briefcase'},
                {id:'Fp',number:'09',name:'Asesor función pública',group:'juridico',desc:'Experto en normativa de empregados públicos (Galicia/España). Só cita leis.',green:'Sen alucinações: computación eficiente sobre base de datos vectorial.',eu:'Transparencia e certeza xurídica en RRHH.',icon:'users'},
                {id:'Vm',number:'10',name:'Valoración de méritos',group:'juridico',desc:'Calcula automaticamente puntuacións en procesos selectivos segundo bases.',green:'Substitúe cálculo manual propenso a erros por proceso batch.',eu:'Garantía de imparcialidade algorítmica.',icon:'calculator'},
                {id:'Np',number:'11',name:'Notas de prensa',group:'comunicacion',desc:'Redacta borradores de comunicacións institucionais co estilo histórico da entidade.',green:'Xeración \\'One-shot\\' que evita diálogos extensos.',eu:'Control do relato institucional soberano.',icon:'newspaper'},
                {id:'Pi',number:'12',name:'Profesor de IA',group:'comunicacion',desc:'Explica conceptos de IA a funcionarios sen coñecementos técnicos.',green:'Educación dixital base para o uso responsable.',eu:'Alfabetización dixital (DigComp).',icon:'graduation-cap'},
                {id:'Ca',number:'13',name:'Asistente CAU',group:'soporte',desc:'Técnico virtual que resolve dúbidas sobre ferramentas internas (VPN, certificados).',green:'Resolución ao primeiro contacto evitando escalados IT.',eu:'Soporte técnico autónomo.',icon:'help-circle'},
                {id:'Ap',number:'14',name:'Almacén de prompts',group:'soporte',desc:'Repositorio centralizado para compartir instrucións eficaces.',green:'Reutilización de prompts optimizados (Green Prompting).',eu:'Intelixencia colectiva pública.',icon:'database'},
                {id:'Ar',number:'15',name:'Arquitecto asistentes',group:'soporte',desc:'Guía o deseño de novos asistentes definindo rol e función.',green:'Deseño \\'Green by Design\\' desde a orixe.',eu:'Fomento do desenvolvemento local.',icon:'layers'},
                {id:'An',number:'16',name:'Análise convocatorias',group:'estrategia',desc:'Analiza bases de subvencións (UE) e extrae fichas con requisitos.',green:'Procesamento focalizado de información complexa.',eu:'Absorción de fondos NextGen.',icon:'search'}
            ];
        } else {
            asistentes = [
                {id:"Rd",number:"01",name:"Resumidor de documentos",group:"gestion",desc:"Procesa documentos extensos (leyes, informes) y genera un resumen con las ideas principales en segundos. Ideal para la toma de decisiones rápida.",green:"Reduce el tiempo de pantalla y computación al evitar la lectura completa. Modelo SLM especializado.",eu:"Soberanía de datos: el documento nunca sale del servidor provincial.",icon:"file-text"},
                {id:"Oc",number:"02",name:"Extractor de texto (OCR)",group:"gestion",desc:"Convierte documentos escaneados o imágenes en texto plano y editable para digitalización masiva.",green:"Digitalización eficiente que evita reimpresiones innecesarias.",eu:"Alternativa open-source a herramientas propietarias en la nube.",icon:"scan-line"},
                {id:"Tr",number:"03",name:"Transcriptor de audio",group:"gestion",desc:"Convierte grabaciones de voz (plenos, comisiones) en texto, reconociendo gallego y castellano.",green:"Optimiza horas de trabajo manual reduciendo el consumo energético de estaciones de trabajo.",eu:"Soporte para lenguas cooficiales (diversidad cultural europea).",icon:"mic"},
                {id:"Cp",number:"04",name:"Calculadora plazos LCSP",group:"gestion",desc:"Calcula plazos de trámites de la ley de contratos, considerando días hábiles y festivos locales.",green:"Herramienta simbólica de consumo energético casi nulo frente a LLMs.",eu:"Adaptación específica a la normativa local (Lugo).",icon:"calendar-clock"},
                {id:"Gc",number:"05",name:"Gestión correo inteligente",group:"gestion",desc:"Analiza, resume y categoriza correos entrantes. Transforma 1 hora de gestión en 5 minutos.",green:"Drástica reducción del tiempo de uso de equipos para tareas rutinarias.",eu:"Privacidad total de las comunicaciones institucionales.",icon:"mail"},
                {id:"Mb",number:"06",name:"Monitor edictos BOE",group:"juridico",desc:"Agente que analiza diariamente el BOE para detectar edictos concursales relevantes para recaudación.",green:"Automatización que elimina miles de búsquedas manuales.",eu:"Vigilancia administrativa proactiva y soberana.",icon:"scale"},
                {id:"Mj",number:"07",name:"Memorias justificativas",group:"juridico",desc:"Guía a los gestores en la redacción de la memoria justificativa obligatoria en contratos.",green:"Evita el síndrome de la 'página en blanco' y múltiples correcciones.",eu:"Cumplimiento normativo asistido por IA.",icon:"file-check"},
                {id:"Ac",number:"08",name:"Asistente contratación",group:"juridico",desc:"Experto en ley de contratos. Resuelve dudas sobre licitaciones y revisa pliegos.",green:"Modelo especializado (SLM) más eficiente que un GPT-4 generalista.",eu:"Alineado con la digitalización del sector público europeo.",icon:"briefcase"},
                {id:"Fp",number:"09",name:"Asesor función pública",group:"juridico",desc:"Experto en normativa de empleados públicos (Galicia/España). Solo cita leyes.",green:"Sin alucinaciones: computación eficiente sobre base de datos vectorial.",eu:"Transparencia y certeza jurídica en RRHH.",icon:"users"},
                {id:"Vm",number:"10",name:"Valoración de méritos",group:"juridico",desc:"Calcula automáticamente puntuaciones en procesos selectivos según bases.",green:"Sustituye cálculo manual propenso a errores por proceso batch.",eu:"Garantía de imparcialidad algorítmica.",icon:"calculator"},
                {id:"Np",number:"11",name:"Notas de prensa",group:"comunicacion",desc:"Redacta borradores de comunicaciones institucionales con el estilo histórico de la entidad.",green:"Generación 'One-shot' que evita diálogos extensos.",eu:"Control del relato institucional soberano.",icon:"newspaper"},
                {id:"Pi",number:"12",name:"Profesor de IA",group:"comunicacion",desc:"Explica conceptos de IA a funcionarios sin conocimientos técnicos.",green:"Educación digital base para el uso responsable.",eu:"Alfabetización digital (DigComp).",icon:"graduation-cap"},
                {id:"Ca",number:"13",name:"Asistente CAU",group:"soporte",desc:"Técnico virtual que resuelve dudas sobre herramientas internas (VPN, certificados).",green:"Resolución al primer contacto evitando escalados IT.",eu:"Soporte técnico autónomo.",icon:"help-circle"},
                {id:"Ap",number:"14",name:"Almacén de prompts",group:"soporte",desc:"Repositorio centralizado para compartir instrucciones eficaces.",green:"Reutilización de prompts optimizados (Green Prompting).",eu:"Inteligencia colectiva pública.",icon:"database"},
                {id:"Ar",number:"15",name:"Arquitecto asistentes",group:"soporte",desc:"Guía el diseño de nuevos asistentes definiendo rol y función.",green:"Diseño 'Green by Design' desde el origen.",eu:"Fomento del desarrollo local.",icon:"layers"},
                {id:"An",number:"16",name:"Análisis convocatorias",group:"estrategia",desc:"Analiza bases de subvenciones (UE) y extrae fichas con requisitos.",green:"Procesamento focalizado de información compleja.",eu:"Absorción de fondos NextGen.",icon:"search"}
            ];
        }

        const styles = {
            gestion: {border:"border-blue-500/30",text:"text-blue-400",bg_hover:"hover:bg-blue-500/10",border_hover:"hover:border-blue-400",glow:"hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"},
            juridico: {border:"border-emerald-500/30",text:"text-emerald-400",bg_hover:"hover:bg-emerald-500/10",border_hover:"hover:border-emerald-400",glow:"hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"},
            comunicacion: {border:"border-purple-500/30",text:"text-purple-400",bg_hover:"hover:bg-purple-500/10",border_hover:"hover:border-purple-400",glow:"hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"},
            soporte: {border:"border-amber-500/30",text:"text-amber-400",bg_hover:"hover:bg-amber-500/10",border_hover:"hover:border-amber-400",glow:"hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"},
            estrategia: {border:"border-red-500/30",text:"text-[#ff4d6d]",bg_hover:"hover:bg-[#cf112d]/10",border_hover:"hover:border-[#cf112d]",glow:"hover:shadow-[0_0_20px_rgba(207,17,45,0.2)]"}
        };

        const container = document.getElementById('periodic-table');

        // Renderizar las tarjetas
        asistentes.forEach((item) => {
            const style = styles[item.group];
            const card = document.createElement('div');

            card.className = "element-card bg-[#1e293b]/60 border-2 " + style.border + " " + style.bg_hover + " " + style.border_hover + " " + style.glow + " rounded-xl p-4 cursor-pointer flex flex-col justify-between h-40 relative overflow-hidden group";
            card.innerHTML = "<div class='absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110'><i data-lucide='" + item.icon + "' class='w-24 h-24 text-white'></i></div><div class='flex justify-between items-start z-10'><span class='text-3xl font-bold " + style.text + " tracking-tight'>" + item.id + "</span><span class='text-[10px] font-mono text-slate-500 bg-slate-800/50 px-1.5 py-0.5 rounded border border-white/5'>" + item.number + "</span></div><div class='z-10 mt-auto'><h3 class='text-sm font-semibold text-gray-200 leading-tight group-hover:text-white transition-colors'>" + item.name + "</h3></div>";

            card.addEventListener('click', () => openModal(item));
            container.appendChild(card);
        });

        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');
        const closeModalBtn = document.getElementById('close-modal');
        const modalBgIcon = document.getElementById('modal-bg-icon');

        function openModal(item) {
            document.getElementById('modal-title').textContent = item.name;
            document.getElementById('modal-code').textContent = item.id + ' · ' + item.number;
            document.getElementById('modal-desc').textContent = item.desc;
            document.getElementById('modal-green').textContent = item.green;
            document.getElementById('modal-eu').textContent = item.eu;
            document.getElementById('modal-tag').textContent = item.group.toUpperCase();

            modalBgIcon.setAttribute('data-lucide', item.icon);
            lucide.createIcons();

            modalOverlay.classList.remove('hidden');
            setTimeout(() => {
                modalOverlay.classList.remove('opacity-0');
                modalContent.classList.remove('opacity-0', 'scale-95');
            }, 10);
        }

        function closeModal() {
            modalOverlay.classList.add('opacity-0');
            modalContent.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
            }, 300);
        }

        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        lucide.createIcons();
</script>
</body>
</html>
"""

def escape_non_ascii(match):
    char = match.group(0)
    return fr'\u{ord(char):04x}'

escaped_js = re.sub(r'[^\x00-\x7F]', escape_non_ascii, script_js)

with open(curr_path, 'w', encoding='utf-8') as f:
    f.write(html_before_script + escaped_js)

print("HTML re-escrito perfectamente y acentos escapados a ASCII puros.")
