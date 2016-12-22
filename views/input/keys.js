// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/sniff"],function(r,e,o){function t(r){if(void 0!==r.key)return f[r.key]||r.key;var e=i[r.keyCode];return Array.isArray(e)?r.shiftKey?e[1]:e[0]:e}function a(r){switch(r){case"Ctrl":case"Alt":case"Shift":case"Meta":case"Primary":return!0}}e.primaryKey=o("mac")?"Meta":"Ctrl";for(var i={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"},n=48;58>n;n++)i[n]=String.fromCharCode(n);for(var n=1;25>n;n++)i[111+n]="F"+n;for(var n=65;91>n;n++)i[n]=[String.fromCharCode(n+32),String.fromCharCode(n)];var f={Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown"};e.eventKey=t,e.isSystemModifier=a});