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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/dom-geometry","./dom-style","dojo/sniff"],(function(r,n,t){function e(){return t("safari")||t("webkit")?"webkitTransform":"transform"}function o(){return t("safari")||t("webkit")?"webkitTransformOrigin":"transformOrigin"}var s=function(n,t){var e=a.disableTransform(n,t),o=r.position(n);return a.restoreTransform(e),o},a={disableTransform:function(r,t){var o;function s(r){var t=n.get(r,e());t&&"none"!==t&&(r.style[e()]="none",(o=o||[]).push({node:r,transform:t}))}return function(){s(r);for(var n=t;n&&(n.style.transform||n.style.parentHasTransform);)s(n.node),n=n.parentVs}(),o&&{restoreInfos:o}},restoreTransform:function(r){r&&r.restoreInfos.forEach((function(r){r&&n.set(r.node,e(),r.transform)}))}},f={getTransform:function(t,e,s){var a=this._getInheritedTransform(e,s);if(a){if(-1!==a.indexOf("translate"))return a;var f=r.position(e),i=n.get(e,o());n.set(e,o(),-t.x+"px "+-t.y+"px");var m=r.position(e);n.set(e,o(),i);var u=f.x+f.w/2,d=f.y+f.h/2;return"translate("+-(m.x+m.w/2-u)+" "+-(m.y+m.h/2-d)+") "+a}},_getInheritedTransform:function(r,t){var o=n.get(r,e());o&&"none"!==o||(o=void 0);for(var s=t;s&&(s.style.transform||s.style.parentHasTransform);)o=s.style.transform||o,s=s.parentVs;return o}};return{measureNode:function(r,n){var t=s(r,n);return{box:t,transform:f.getTransform(t,r,n)}},disableTransform:a.disableTransform,restoreTransform:a.restoreTransform}}));