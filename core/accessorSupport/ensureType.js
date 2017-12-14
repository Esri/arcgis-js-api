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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../Logger"],function(n,r,e){function t(n,r){return r.isInstanceOf?r.isInstanceOf(n):r instanceof n}function u(n){return null==n?n:new Date(n)}function a(n){return null==n?n:!!n}function o(n){return null==n?n:n.toString()}function i(n){return null==n?n:parseFloat(n)}function s(n){return n&&n.constructor&&void 0!==n.constructor._meta}function c(n,r){return null!=r&&n&&!t(n,r)}function l(n,r){return c(n,r)&&(s(r)?m.error("Accessor#set","Assigning an instance of '"+(r.declaredClass||"unknown")+"' which is not a subclass of '"+f(n)+"'"):r=new n(r)),r}function f(n){return n&&n.prototype&&n.prototype.declaredClass||"unknown"}function y(n){switch(n){case Number:return i;case Boolean:return a;case String:return o;case Date:return u;default:return l.bind(null,n)}}function p(n,r){var e=y(n);return 1===arguments.length?e:e(r)}function d(n,r){return 1===arguments.length?d.bind(null,n):r?Array.isArray(r)?r.map(n):[n(r)]:r}function g(n,r){return 1===arguments.length?d(p.bind(null,n)):d(p.bind(null,n),r)}function v(n,r,e){return 0!==r&&Array.isArray(e)?e.map(function(e){return v(n,r-1,e)}):n(e)}function b(n,r,e){if(2===arguments.length)return b.bind(null,n,r);if(!e)return e;e=v(n,r,e);for(var t=r,u=e;t>0&&Array.isArray(u);)t--,u=u[0];if(void 0!==u)for(var a=0;t>a;a++)e=[e];return e}function A(n,r,e){return 2===arguments.length?b(p.bind(null,n),r):b(p.bind(null,n),r,e)}function h(n){var r={},e=[],t=[];for(var u in n.typeMap){var a=n.typeMap[u];r[u]=p(a),e.push(f(a)),t.push(u)}var o=function(){return"'"+e.join("', '")+"'"},i=function(){return"'"+t.join("', '")+"'"},l="string"==typeof n.key?function(r){return r[n.key]}:n.key;return function(e){if(n.base&&!c(n.base,e))return e;var t=l(e),u=r[t];if(!u)return m.error("Accessor#set","Invalid property value, value needs to be one of "+o()+", or a plain object that can auto-cast (having .type = "+i()+")"),null;if(!c(n.typeMap[t],e))return e;if("string"!=typeof n.key||s(e))return u(e);var a={};for(var f in e)f!==n.key&&(a[f]=e[f]);return u(a)}}Object.defineProperty(r,"__esModule",{value:!0});var m=e.getLogger("esri.core.Accessor");r.isInstanceOf=t,r.ensureDate=u,r.ensureBoolean=a,r.ensureString=o,r.ensureNumber=i,r.isClassedType=s,r.requiresType=c,r.ensureClass=l,r.ensureType=p,r.ensureArrayTyped=d,r.ensureArray=g,r.ensureNArrayTyped=b,r.ensureNArray=A,r.ensureOneOfType=h,r["default"]=p});