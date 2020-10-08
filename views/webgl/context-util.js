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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){"use strict";function t(e,r,t){var o;switch(void 0===r&&(r={}),t){case"webgl":o=["webgl","experimental-webgl","webkit-3d","moz-webgl"];break;case"webgl2":o=["webgl2"];break;default:o=["webgl","experimental-webgl","webkit-3d","moz-webgl"]}for(var a=null,l=0,n=o;l<n.length;l++){var i=n[l];try{a=e.getContext(i,r)}catch(e){}if(a)break}return a}function o(e,r){var t=e.parentNode;t&&(t.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+r+"</div></div></td></tr></table>")}Object.defineProperty(r,"__esModule",{value:!0}),r.createContext=r.createContextOrErrorHTML=void 0,r.createContextOrErrorHTML=function(e,r,n){if(void 0===r&&(r={}),!window.WebGLRenderingContext)return o(e,a),null;var i=t(e,r,n);return i||(o(e,l),null)},r.createContext=t;var a='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',l='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>'}));