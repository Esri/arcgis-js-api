// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./webgl-debug","../../../webgl/capabilities/isWebGL2Context"],function(e,n,t,u){function o(){n.enabled&&(b=[])}function r(e){n.enabled&&null!=b&&b.push(e)}function i(){if(n.enabled){var e=b;return b=null,e&&(c.forEach(function(n){return n(e)}),c.length=0),e}}function l(e){return n.enabled?u.default(e)?(console.warn("WebGL tracer is not supported on a WebGL2 Context"),e):t.makeDebugContext(e,void 0,function(e,u){n.enabled&&b&&b.push("gl."+e+"("+t.glFunctionArgsToString(e,u)+")")}):e}function a(e){c.push(e)}Object.defineProperty(n,"__esModule",{value:!0});var b=null,c=[];n.enabled=!1,n.begin=o,n.trace=r,n.end=i,n.instrumentContext=l,n.request=a});