// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../Logger"],(function(n,r,e){Object.defineProperty(r,"__esModule",{value:!0});var t=e.getLogger("esri.core.Accessor");function u(n,r){return r.isInstanceOf?r.isInstanceOf(n):r instanceof n}function a(n){return null==n?n:new Date(n)}function o(n){return null==n?n:!!n}function i(n){return null==n?n:n.toString()}function s(n){return null==n?n:parseFloat(n)}function l(n){return null==n?n:Math.round(parseFloat(n))}function c(n){return n&&n.constructor&&void 0!==n.constructor._meta}function f(n,r){return null!=r&&n&&!u(n,r)}function y(n,r){return f(n,r)&&(c(r)?t.error("Accessor#set","Assigning an instance of '"+(r.declaredClass||"unknown")+"' which is not a subclass of '"+p(n)+"'"):r=new n(r)),r}function p(n){return n&&n.prototype&&n.prototype.declaredClass||"unknown"}function d(n){switch(n){case Number:return s;case A:return l;case Boolean:return o;case String:return i;case Date:return a;default:return y.bind(null,n)}}function g(n,r){var e=d(n);return 1===arguments.length?e:e(r)}function v(n,r){return 1===arguments.length?v.bind(null,n):r?Array.isArray(r)?r.map(n):[n(r)]:r}function b(n,r,e){return 0!==r&&Array.isArray(e)?e.map((function(e){return b(n,r-1,e)})):n(e)}function h(n,r,e){if(2===arguments.length)return h.bind(null,n,r);if(!e)return e;for(var t=r,u=e=b(n,r,e);t>0&&Array.isArray(u);)t--,u=u[0];if(void 0!==u)for(var a=0;a<t;a++)e=[e];return e}r.isInstanceOf=u,r.ensureDate=a,r.ensureBoolean=o,r.ensureString=i,r.ensureNumber=s,r.ensureInteger=l,r.isClassedType=c,r.requiresType=f,r.ensureClass=y,r.ensureType=g,r.ensureArrayTyped=v,r.ensureArray=function(n,r){return 1===arguments.length?v(g.bind(null,n)):v(g.bind(null,n),r)},r.ensureNArrayTyped=h,r.ensureNArray=function(n,r,e){return 2===arguments.length?h(g.bind(null,n),r):h(g.bind(null,n),r,e)},r.ensureOneOfType=function n(r,e){if(2===arguments.length)return n(r).call(null,e);var u={},a=[],o=[];for(var i in r.typeMap){var s=r.typeMap[i];u[i]=g(s),a.push(p(s)),o.push(i)}var l=function(){return"'"+a.join("', '")+"'"},y=function(){return"'"+o.join("', '")+"'"},d="string"==typeof r.key?function(n){return n[r.key]}:r.key;return function(n){if(r.base&&!f(r.base,n))return n;var e=d(n)||r.defaultKeyValue,a=u[e];if(!a)return t.error("Accessor#set","Invalid property value, value needs to be one of "+l()+", or a plain object that can auto-cast (having .type = "+y()+")"),null;if(!f(r.typeMap[e],n))return n;if("string"!=typeof r.key||c(n))return a(n);var o={};for(var i in n)i!==r.key&&(o[i]=n[i]);return a(o)}};var A=function(){};r.Integer=A,r.default=g}));