/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/has","../../core/events"],(function(e,r,t){"use strict";const o=r("mac")?"Meta":"Ctrl",n={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"};for(let e=48;e<58;e++)n[e]=String.fromCharCode(e);for(let e=1;e<25;e++)n[111+e]=`F${e}`;for(let e=65;e<91;e++)n[e]=[String.fromCharCode(e+32),String.fromCharCode(e)];e.eventKey=function(e){if(void 0!==e.key)return t.eventKey(e);const r=n[e.keyCode];return Array.isArray(r)?e.shiftKey?r[1]:r[0]:r},e.isSystemModifier=function(e){switch(e){case"Ctrl":case"Alt":case"Shift":case"Meta":case"Primary":return!0}return!1},e.primaryKey=o,Object.defineProperty(e,"__esModule",{value:!0})}));
