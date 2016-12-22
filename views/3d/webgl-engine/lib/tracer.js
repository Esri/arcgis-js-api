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

define(["require","exports","./webgl-debug"],function(n,e,t){function u(){e.enabled&&(a=[])}function r(n){e.enabled&&null!=a&&a.push(n)}function i(){if(e.enabled){var n=a;return a=null,n&&(c.forEach(function(e){return e(n)}),c.length=0),n}}function l(n){return e.enabled?t.makeDebugContext(n,void 0,function(n,u){e.enabled&&a&&a.push("gl."+n+"("+t.glFunctionArgsToString(n,u)+")")}):n}function o(n){c.push(n)}var a=null,c=[];e.enabled=!1,e.begin=u,e.trace=r,e.end=i,e.instrumentContext=l,e.request=o});