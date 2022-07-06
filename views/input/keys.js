/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{eventKey as r}from"../../core/events.js";import e from"../../core/has.js";const t=e("mac")?"Meta":"Ctrl",o={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"};for(let s=48;s<58;s++)o[s]=String.fromCharCode(s);for(let s=1;s<25;s++)o[111+s]=`F${s}`;for(let s=65;s<91;s++)o[s]=[String.fromCharCode(s+32),String.fromCharCode(s)];function a(e){if(void 0!==e.key)return r(e);const t=o[e.keyCode];return Array.isArray(t)?e.shiftKey?t[1]:t[0]:t}function n(r){switch(r){case"Ctrl":case"Alt":case"Shift":case"Meta":case"Primary":return!0}return!1}export{a as eventKey,n as isSystemModifier,t as primaryKey};
