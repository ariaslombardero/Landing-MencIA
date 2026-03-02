const fs = require('fs');
const path = require('path');

const origPath = path.resolve('../../Laboratorio MencIA/Tabla periódica de asistentes y apps.html');
const currPath = path.resolve('./tabla-periodica-ia.html');

let origHtml = fs.readFileSync(origPath, 'utf8');
let currHtml = fs.readFileSync(currPath, 'utf8');

const regex = /<script>([\s\S]*?)<\/script>/g;
let origMatch;
let lastOrigMatch;
while ((origMatch = regex.exec(origHtml)) !== null) {
    lastOrigMatch = origMatch[1];
}

const scriptI18n = `
        var _lang = new URLSearchParams(window.location.search).get('lang') || 'es';
        if (_lang === 'gl') {
            document.title = 'MencIA - Catálogo visual de asistentes';
            var _h1 = document.querySelector('h1');
            if(_h1) _h1.innerHTML = 'Ecosistema de <br><span class="text-[#cf112d]">Soberanía Dixital.</span>';
            var _mp = document.querySelector('main > div > p');
            if(_mp) _mp.innerHTML = 'Explora a nosa táboa periódica de asistentes. Cada nodo representa unha solución de <span class="text-white font-medium">código aberto</span> deseñada baixo os principios de Green AI.';
            var _fp = document.querySelector('footer p');
            if(_fp) _fp.textContent = 'MencIA © 2025 — Deputación de Lugo';
            
            var _catMap = {'GESTIÓN':'XESTIÓN','JURÍDICO':'XURÍDICO','COMUNICACIÓN':'COMUNICACIÓN','SOPORTE':'SOPORTE','ESTRATEGIA':'ESTRATEXIA'};
            document.querySelectorAll('header span, header div').forEach(function(el){
                var t = el.textContent.trim();
                for(var k in _catMap) {
                    if (t.indexOf(k) !== -1) el.innerHTML = el.innerHTML.replace(k, _catMap[k]);
                }
            });
            
            var _mGreen = document.querySelector('#modal-content .text-green-400.uppercase');
            if(_mGreen) _mGreen.innerHTML = '<i data-lucide="leaf" class="w-4 h-4"></i> Sostibilidade';
            var _mBlue  = document.querySelector('#modal-content .text-blue-400.uppercase');
            if(_mBlue)  _mBlue.innerHTML  = '<i data-lucide="shield" class="w-4 h-4"></i> Soberanía UE';

            var asistentesGl = [
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
`;

// Replace all script tags in current html except for Tailwind and Lucide
// Actually, it's safer to strip everything from <script> to the end, then reconstruct since we know what it looks like.
const bodyEndIdx = currHtml.lastIndexOf('<script>');
if (bodyEndIdx > -1) {
    const finalHtml = currHtml.slice(0, bodyEndIdx) + '<script>\n' + lastOrigMatch + '\\n\\n// --- I18N BLOCK ---\\n' + scriptI18n + '\\n</script>\\n</body>\\n</html>';

    // Also, we must escape unicode characters in the i18n block to avoid encoding issues!
    let escapedHtml = finalHtml.replace(/[\\u0080-\\uFFFF]/g, function (ch) {
        if (ch === '©' || ch === '—') return ch; // Optional: let these be? No, let's escape everything non-ascii.
        return "\\\\u" + ("000" + ch.charCodeAt(0).toString(16)).substr(-4);
    });

    // Wait, the regular text in regular html structure is fine. Only within <script>!
    const htmlBeforeScript = currHtml.slice(0, bodyEndIdx);

    let combinedScript = lastOrigMatch + '\\n\\n// --- I18N BLOCK ---\\n' + scriptI18n;
    combinedScript = combinedScript.replace(/[\\u0080-\\uFFFF]/g, function (ch) {
        return "\\\\u" + ("000" + ch.charCodeAt(0).toString(16)).substr(-4);
    });

    const fixedHtml = htmlBeforeScript + '\\n<script>\\n' + combinedScript + '\\n</script>\\n</body>\\n</html>';

    fs.writeFileSync(currPath, fixedHtml, 'utf8');
    console.log("SUCCESS!");
} else {
    console.log("ERROR");
}
