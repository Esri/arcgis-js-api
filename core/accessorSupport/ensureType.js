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

define(["require","exports","../Logger"],function(n,e,r){function t(n,e){return e.isInstanceOf?e.isInstanceOf(n):e instanceof n}function u(n){return null==n?n:new Date(n)}function o(n){return n===!0||n===!1?n:!!n}function s(n){return null==n?n:n.toString()}function a(n){return null==n?n:parseFloat(n)}function i(n){return n&&n.constructor&&void 0!==n.constructor._meta}function c(n,e){return null!=e&&n&&!t(n,e)}function l(n){return n&&n.prototype&&n.prototype.declaredClass||"unknown"}function f(n,e){return 1===arguments.length?f.bind(null,n):(c(n,e)&&(i(e)?d.error("Accessor#set","Assigning an instance of '"+(e.declaredClass||"unknown")+"' which is not a subclass of '"+l(n)+"'"):e=new n(e)),e)}function p(n,e){return 1===arguments.length?p.bind(null,n):e?Array.isArray(e)?e.map(n):[n(e)]:e}function y(n,e){return 1===arguments.length?p(f.bind(null,n)):p(f.bind(null,n),e)}function g(n){var e={},r=[],t=[];for(var u in n.typeMap){var o=n.typeMap[u];e[u]=f(o),r.push(l(o)),t.push(u)}var s=function(){return"'"+r.join("', '")+"'"},a=function(){return"'"+t.join("', '")+"'"},i=function(){return l(n.base)},p="string"==typeof n.key?function(e){return e[n.key]}:n.key;return function(r){if(n.base&&!c(n.base,r))return r;var t=e[p(r)];if(!t)return d.error("Accessor#set","Invalid property value, value needs to be a subclass of '"+i()+"' ("+s()+"), or a plain object that can auto-cast (having .type = "+a()+")"),null;if("string"==typeof n.key){var u={};for(var o in r)o!==n.key&&(u[o]=r[o]);return t(u)}return t(r)}}Object.defineProperty(e,"__esModule",{value:!0});var d=r.getLogger("esri.core.Accessor");e.isInstanceOf=t,e.ensureDate=u,e.ensureBoolean=o,e.ensureString=s,e.ensureNumber=a,e.isClassedType=i,e.requiresType=c,e.ensureType=f,e.ensureArrayTyped=p,e.ensureArray=y,e.ensureOneOfType=g,e["default"]=f});