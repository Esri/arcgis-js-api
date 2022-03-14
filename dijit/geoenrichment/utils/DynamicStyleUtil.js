// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define([],(function(){var e={};return{addStyle:function(t,n){e[n]&&this.removeStyle(n);var r=document.head,i=t.map((function(e){var t=document.createElement("style");t.type="text/css",e.id&&(t.id=e.id);var n=e.content||e;return t.innerHTML=n&&n.replace&&n.replace(/&#65279;/gi,"")||"",r.appendChild(t),t}));n&&(e[n]=i)},removeStyle:function(t){var n=e[t];if(n){var r=document.head;n.forEach((function(e){r.removeChild(e)})),delete e[t]}},getStyle:function(t){return e[t]}}}));