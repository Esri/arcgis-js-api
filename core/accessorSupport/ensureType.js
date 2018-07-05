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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../Logger"],function(n,r,e){function t(n,r){return r.isInstanceOf?r.isInstanceOf(n):r instanceof n}function u(n){return null==n?n:new Date(n)}function o(n){return null==n?n:!!n}function a(n){return null==n?n:n.toString()}function i(n){return null==n?n:parseFloat(n)}function s(n){return null==n?n:Math.round(parseFloat(n))}function l(n){return n&&n.constructor&&void 0!==n.constructor._meta}function c(n,r){return null!=r&&n&&!t(n,r)}function f(n,r){return c(n,r)&&(l(r)?w.error("Accessor#set","Assigning an instance of '"+(r.declaredClass||"unknown")+"' which is not a subclass of '"+y(n)+"'"):r=new n(r)),r}function y(n){return n&&n.prototype&&n.prototype.declaredClass||"unknown"}function p(n){switch(n){case Number:return i;case I:return s;case Boolean:return o;case String:return a;case Date:return u;default:return f.bind(null,n)}}function d(n,r){var e=p(n);return 1===arguments.length?e:e(r)}function g(n,r){return 1===arguments.length?g.bind(null,n):r?Array.isArray(r)?r.map(n):[n(r)]:r}function v(n,r){return 1===arguments.length?g(d.bind(null,n)):g(d.bind(null,n),r)}function b(n,r,e){return 0!==r&&Array.isArray(e)?e.map(function(e){return b(n,r-1,e)}):n(e)}function h(n,r,e){if(2===arguments.length)return h.bind(null,n,r);if(!e)return e;e=b(n,r,e);for(var t=r,u=e;t>0&&Array.isArray(u);)t--,u=u[0];if(void 0!==u)for(var o=0;o<t;o++)e=[e];return e}function A(n,r,e){return 2===arguments.length?h(d.bind(null,n),r):h(d.bind(null,n),r,e)}function k(n,r){if(2===arguments.length)return k(n).call(null,r);var e={},t=[],u=[];for(var o in n.typeMap){var a=n.typeMap[o];e[o]=d(a),t.push(y(a)),u.push(o)}var i=function(){return"'"+t.join("', '")+"'"},s=function(){return"'"+u.join("', '")+"'"},f="string"==typeof n.key?function(r){return r[n.key]}:n.key;return function(r){if(n.base&&!c(n.base,r))return r;var t=f(r)||n.defaultKeyValue,u=e[t];if(!u)return w.error("Accessor#set","Invalid property value, value needs to be one of "+i()+", or a plain object that can autocast (having .type = "+s()+")"),null;if(!c(n.typeMap[t],r))return r;if("string"!=typeof n.key||l(r))return u(r);var o={};for(var a in r)a!==n.key&&(o[a]=r[a]);return u(o)}}Object.defineProperty(r,"__esModule",{value:!0});var w=e.getLogger("esri.core.Accessor");r.isInstanceOf=t,r.ensureDate=u,r.ensureBoolean=o,r.ensureString=a,r.ensureNumber=i,r.ensureInteger=s,r.isClassedType=l,r.requiresType=c,r.ensureClass=f,r.ensureType=d,r.ensureArrayTyped=g,r.ensureArray=v,r.ensureNArrayTyped=h,r.ensureNArray=A,r.ensureOneOfType=k;var I=function(){function n(){}return n}();r.Integer=I,r.default=d});