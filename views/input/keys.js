// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/events","../../core/has"],(function(e,r,t,o){Object.defineProperty(r,"__esModule",{value:!0}),r.primaryKey=o("mac")?"Meta":"Ctrl";for(var a={8:"Backspace",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete"},n=48;n<58;n++)a[n]=String.fromCharCode(n);for(n=1;n<25;n++)a[111+n]="F"+n;for(n=65;n<91;n++)a[n]=[String.fromCharCode(n+32),String.fromCharCode(n)];r.eventKey=function(e){if(void 0!==e.key)return t.eventKey(e);var r=a[e.keyCode];return Array.isArray(r)?e.shiftKey?r[1]:r[0]:r},r.isSystemModifier=function(e){switch(e){case"Ctrl":case"Alt":case"Shift":case"Meta":case"Primary":return!0}return!1}}));