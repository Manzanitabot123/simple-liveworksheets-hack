function SimpleLiveworksheetHack(jsonlang) {
    let element, incr = 0, select = 0, tick = 0, drag = null, text = 0, choose = 0, ans = null, joins = 0, join = null, x1, y1, nulos = 0;
    function random(a) { return Math.floor(Math.random() * a) + 1 }
    let lg = navigator.language || navigator.userLanguage; 
    let json = jsonlang.messages.filter(d => (lg.includes(d.locale)))[0]
    if(!json) {json = jsonlang.messages.filter(d => (d.locale == 'en'))[0]};
    if(!document.URL.startsWith("https://www.liveworksheets.com") && !document.URL.startsWith("https://es.liveworksheets.com")) { return confirm(json.domain)?(window.open("https://www.liveworksheets.com/", "liveworksheets")):false}
    if(document.querySelectorAll('#elsvgdefinitivo')[0] == undefined) return alert(json.noSheet);
    if(document.querySelector("#capafinish").ariaChecked) return alert(json.finished);
    let idArray = Array.from(contenidorellenado);
    if(idArray.length===0) return console.log("%c"+json.time, 'color: yellow; font-size: 12px');
    const CheckAnswers = function(arr, delay) {
        if (incr < arr.length) {
            setTimeout( () => {
            if(arr[incr][0].includes('select:')) {
                element = document.querySelectorAll('[id^="selectablediv"]')[select];
                arr[incr][0].includes('yes')?element.click():{};
                select++; console.log("%c"+incr+" | "+json.success+" => "+arr[incr][0], 'background: #005e06; color: white; font-size: 12px') 
            } else if(arr[incr][0].includes('tick:')) {
                element = document.querySelectorAll('[id^="tickbox"]')[tick];
                arr[incr][0].includes('yes')?element.click():{};
                tick++; console.log("%c"+incr+" | "+json.success+" => "+arr[incr][0], 'background: #005e06; color: white; font-size: 12px') 
            } else if(arr[incr][0].includes('drag:')) {
                element = Array.from(document.querySelectorAll('[id^="dragablediv"]')).filter(b => (b.style.top.includes(arr[incr][1]) && b.style.left.includes(arr[incr][2])))[0];
                drag = contenidorellenado[contenidorellenado.findIndex(entry => entry[0].includes(arr[incr][0].replace('drag:','drop:')))];
                element.style.top = drag[1]+"px"; element.style.left = drag[2]+"px";
                console.log("%c"+incr+" | "+json.success+" => "+arr[incr][0], 'background: #005e06; color: white; font-size: 12px')
            } else if(arr[incr][0].includes('choose:')) {
                element = document.querySelectorAll('[id^="selectbox"]')[choose];
                ans = arr[incr][0].replace('choose:','').split('/').findIndex(entry => entry.includes("*")), element.selectedIndex = ans+1;
                choose++; console.log("%c"+incr+" | "+json.success+" => "+arr[incr][0], 'background: #005e06; color: white; font-size: 12px') 
            } else if (arr[incr][0].includes('join:')) {
                drag = contenidorellenado.filter(entry => (entry[0] == arr[incr][0]))[1]; if(drag) {
                let yvmShadow = document.createElementNS('http://www.w3.org/2000/svg', "line"); 
                yvmShadow.setAttribute("x1",drag[2]+drag[4]/2); yvmShadow.setAttribute("y1",drag[1]+random(drag[3])); yvmShadow.setAttribute("x2",arr[incr][2]+arr[incr][4]/2); yvmShadow.setAttribute("y2",arr[incr][1]+random(arr[incr][3])); yvmShadow.setAttribute("stroke","darkblue"); yvmShadow.style.stroke = "darkblue"; yvmShadow.style.strokeWidth = "5px"
                document.querySelector('#elsvgdefinitivo').appendChild(yvmShadow); drag[5] = arr[incr][0]; drag[0].replace('join', 'joined'); arr[incr][5] = arr[incr][0]; }; arr[incr][0] = arr[incr][0].replace('join', 'joined'); 
                console.log("%c"+incr+" | "+json.success+" => "+arr[incr][0], 'background: #005e06; color: white; font-size: 12px') 
            } else if (arr[incr][0].includes('listen') && arr[incr][0].includes(':') || arr[incr][0].includes('joined:') || arr[incr][0].includes('drop:') || arr[incr][0].includes('https://youtu.be/')) {
            } else if (arr[incr][0] =='') {
                text++; console.log("%c"+incr+" | "+json.free, 'background: yellow; color: black; font-size: 12px'); 
                nulos++;
            } else if(typeof arr[incr][0] === "string") {
                element = document.querySelectorAll('[id^="textbox"]')[text];
                element.textContent = arr[incr][0];
                text++; console.log("%c"+incr+" | "+json.success+" => "+arr[incr][0], 'background: #005e06; color: white; font-size: 12px') 
            } else console.log("%c"+incr+" | "+json.error+" => "+arr[incr][0], 'background: #5e0000; color: white; font-size: 12px') 
            incr++;
            CheckAnswers(arr, delay);
            }, delay)
        } else {
            console.log("%c"+json.completed+(nulos>0?" "+json.none.replace('<number>', nulos):""), 'background: #005e06; color: white; font-size: 16px');
            console.log('%c'+json.dev, 'color: #804949');
            document.querySelector("#capafinish").ariaChecked = true;
        }
    }
    CheckAnswers(idArray, 25);
}

fetch("https://raw.githubusercontent.com/Manzanitabot123/simple-liveworksheets-hack/script/languages/languages.json").then(a=>a.json().then(b=>{SimpleLiveworksheetHack(b)}));