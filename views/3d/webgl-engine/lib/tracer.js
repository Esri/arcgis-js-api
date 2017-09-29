// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./webgl-debug"],function(e,n,t){function u(){n.enabled&&(a=[])}function r(e){n.enabled&&null!=a&&a.push(e)}function l(){if(n.enabled){var e=a;return a=null,e&&(c.forEach(function(n){return n(e)}),c.length=0),e}}function i(e){return n.enabled?t.makeDebugContext(e,void 0,function(e,u){n.enabled&&a&&a.push("gl."+e+"("+t.glFunctionArgsToString(e,u)+")")}):e}function o(e){c.push(e)}Object.defineProperty(n,"__esModule",{value:!0});var a=null,c=[];n.enabled=!1,n.begin=u,n.trace=r,n.end=l,n.instrumentContext=i,n.request=o});