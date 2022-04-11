/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../core/events","../../core/has"],(function(e,r,t){"use strict";const o=t("mac")?"Meta":"Ctrl",n={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"};for(let s=48;s<58;s++)n[s]=String.fromCharCode(s);for(let s=1;s<25;s++)n[111+s]=`F${s}`;for(let s=65;s<91;s++)n[s]=[String.fromCharCode(s+32),String.fromCharCode(s)];function a(e){if(void 0!==e.key)return r.eventKey(e);const t=n[e.keyCode];return Array.isArray(t)?e.shiftKey?t[1]:t[0]:t}function i(e){switch(e){case"Ctrl":case"Alt":case"Shift":case"Meta":case"Primary":return!0}return!1}e.eventKey=a,e.isSystemModifier=i,e.primaryKey=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
