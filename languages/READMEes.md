Lea esto en otros idiomas: [English](./languages/README.md), [русский](./languages/READMEru.md)

<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" src="../resources/icon.gif"> 

# Simple Liveworksheets hack

Este script busca **llenar automáticamente las respuestas** de cualquier página de Liveworksheets. **(Precisión 98,9%)**. Solo necesita copiar lo siguiente en la *consola de la pagina* abriéndola con **Ctrl + Shift + J** y pegarlo.

----

## 💻 Copia el siguiente **Script** y pegalo en la consola
```javascript
fetch("https://raw.githubusercontent.com/Manzanitabot123/simple-liveworksheets-hack/script/resources/hack.js")
.then(a=>a.text().then(b=>eval(b)))
```

<p align="center">
    <img src="../resources/example.gif"/>
</p>

## 🚧 Principales funciones

Entre las cosas que puede hacer **automáticamente** son:

| Funciones |
| ------ |
| Rellenar casillas de texto |
| Unir cuadros o textos |
| Arrastrar objetos al sitio correcto |
| Seleccionar la respuesta correcta | 

> **Warning**
> 😢 Lamentablemente, las casillas de texto que no tienen respuesta o son de respuesta libre (nombres o justificaciones) se mostraran vacíos.

## ✍️ Contribución

😂 Usted puede contribuir con este repositorio con los [**archivos de idiomas**](../languages) o el [**script**](../resources/hack.js), ya sea dando una opinión, sugerencia u aportando una mejora, gracias. 

- ▀█▀ █░█ ▄▀█ █▄░█ █▄▀   █▄█ █▀█ █░█
- ░█░ █▀█ █▀█ █░▀█ █░█   ░█░ █▄█ █▄█