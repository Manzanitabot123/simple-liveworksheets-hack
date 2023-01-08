/*
fetch("https://raw.githubusercontent.com/Manzanitabot123/Pranks-and-hacks-for-page-console/main/Liveworksheets/hack.js")
.then(a=>a.text().then(b=>eval(b)))
*/
;
let element, total = 0, select = 0, tick = 0, drag = null, text = 0, choose = 0, ans = null, joins = 0, join = null, x1, y1, nulos = 0;
function random(a) { return Math.floor(Math.random() * a) + 1 }
function worksheetHack(lg) {
let success = 'Success', free = 'Free answer', completed = 'Sheet auto-filled', none = ' but there are <number> unanswered boxes' ; 
if(lg === 'es') {
    success = "Correctamente";
    free = "Respuesta libre";
    completed = 'Se completó la hoja automáticamente';
    none = ' pero hay <number> casilleros sin respuesta';
} else if(lg === 'ru') {
    success = "Правильно";
    free = "Бесплатный ответ";
    completed = 'Лист заполнен автоматически';
    none = ' но есть <number> неотвеченных ящиков';
}
let up=true; let value = 1; let int = setInterval(() => { if(up) { if(value >= 30){up = false}; value++ } else if(value === 0) { clearInterval(int) } else {value--}; document.querySelector("#capafondo").style.filter = 'blur('+value+'px)'; }, 20)
var userLang = navigator.language || navigator.userLanguage; 
alert ("The language is: " + userLang);
Array.from(contenidorellenado)
.forEach(x => {
total++;
if(x[0].includes('select:')) {
	element = document.querySelectorAll('[id^="selectablediv"]')[select];
    (x[0].includes('yes') && !element.ariaChecked)?element.click():{};
    select++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if(x[0].includes('tick:')) {
	element = document.querySelectorAll('[id^="tickbox"]')[tick];
    (x[0].includes('yes') && !element.ariaChecked)?element.click():{};
    tick++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if(x[0].includes('drag:')) {
    element = Array.from(document.querySelectorAll('[id^="dragablediv"]')).filter(b => (b.style.top.includes(x[1]) && b.style.left.includes(x[2])))[0];
    if(element.ariaChecked) return;
    drag = contenidorellenado[contenidorellenado.findIndex(entry => entry[0].includes(x[0].replace('drag:','drop:')))];
    element.style.top = drag[1]+"px"; element.style.left = drag[2]+"px"; element.ariaChecked = true
} else if(x[0].includes('choose:')) {
	element = document.querySelectorAll('[id^="selectbox"]')[choose];
    !element.ariaChecked?(ans = x[0].replace('choose:','').split('/').findIndex(entry => entry.includes("*")), element.selectedIndex = ans+1):{};
    choose++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if (x[0].includes('join:')) {
	drag = contenidorellenado.filter(entry => (entry[0] == x[0]))[1]; if(drag) {
    let yvmShadow = document.createElementNS('http://www.w3.org/2000/svg', "line"); 
    yvmShadow.setAttribute("x1",drag[2]+drag[4]/2); yvmShadow.setAttribute("y1",drag[1]+random(drag[3])); yvmShadow.setAttribute("x2",x[2]+x[4]/2); yvmShadow.setAttribute("y2",x[1]+random(x[3])); yvmShadow.setAttribute("stroke","darkblue"); yvmShadow.style.stroke = "darkblue"; yvmShadow.style.strokeWidth = "5px"
    document.querySelector('#elsvgdefinitivo').appendChild(yvmShadow); drag[5] = x[0]; drag[0].replace('join', 'joined'); x[5] = x[0]; }; x[0] = x[0].replace('join', 'joined'); 
	console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else if (x[0] =='') {
	text++; console.log("%c"+total+" | Free answer", 'background: yellow; color: black; font-size: 12px'); 
    nulos++;
} else if(typeof x[0] === "string" && !(x[0].includes('listen') && x[0].includes(':')) && !x[0].includes('joined') && !x[0].includes('drop:')) {
	element = document.querySelectorAll('[id^="textbox"]')[text];
    !element.ariaChecked?(element.textContent = x[0]):{};
    text++; element.ariaChecked = true; console.log("%c"+total+" | Success => "+x[0], 'background: #005e06; color: white; font-size: 12px') 
} else console.log("%c"+total+" | Error => "+x[0], 'background: #5e0000; color: white; font-size: 12px') 
})

if(nulos>0) { completed += none.replace('<number>', nulos) }
let speech = new SpeechSynthesisUtterance();
speech.lang = lg;

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
};
speech.rate = 1;
speech.volume = 1;
speech.pitch = 1;
speech.voice = voices[0]; speech.text = completed;
window.speechSynthesis.speak(speech)

}

if(typeof lang !== 'undefined' && typeof lang == 'string' && (lang.trim()=='es' || lang.trim()=='em' || lang.trim()=='ru')) {
lang = String(lang.trim())
} else { lang = 'en' }
worksheetHack(lang)