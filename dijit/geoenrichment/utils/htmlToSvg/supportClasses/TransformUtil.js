// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-geometry","dojo/dom-style","dojo/sniff"],function(r,n,o){function t(){return o("safari")||o("webkit")?"webkitTransform":"transform"}function e(){return o("safari")||o("webkit")?"webkitTransformOrigin":"transformOrigin"}var s={getBox:function(n,o){var t=a.disableTransform(n,o),e=r.position(n);return a.restoreTransform(t),e}},a={disableTransform:function(r,o){function e(r){var o=n.get(r,t());o&&"none"!==o&&(r.style[t()]="none",s=s||[],s.push({node:r,transform:o}))}var s;return function(){e(r);for(var n=o;n&&(n.style.transform||n.style.parentHasTransform);)e(n.node),n=n.parentVs}(),s&&{restoreInfos:s}},restoreTransform:function(r){function o(r){r&&n.set(r.node,t(),r.transform)}r&&r.restoreInfos.forEach(o)}},f={getTransform:function(o,t,s){var a=this._getInheritedTransform(t,s);if(a){if(-1!==a.indexOf("translate"))return a;var f=r.position(t),i=n.get(t,e());n.set(t,e(),-o.x+"px "+-o.y+"px");var m=r.position(t);n.set(t,e(),i);var u=f.x+f.w/2,d=f.y+f.h/2;return"translate("+-(m.x+m.w/2-u)+" "+-(m.y+m.h/2-d)+") "+a}},_getInheritedTransform:function(r,o){var e=n.get(r,t());e&&"none"!==e||(e=void 0);for(var s=o;s&&(s.style.transform||s.style.parentHasTransform);)e=s.style.transform||e,s=s.parentVs;return e}};return{measureNode:function(r,n){var o=s.getBox(r,n);return{box:o,transform:f.getTransform(o,r,n)}},disableTransform:a.disableTransform,restoreTransform:a.restoreTransform}});