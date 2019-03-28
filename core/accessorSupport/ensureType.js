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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../Logger"],function(n,r,e){function t(n,r){return r.isInstanceOf?r.isInstanceOf(n):r instanceof n}function u(n){return null==n?n:new Date(n)}function o(n){return null==n?n:!!n}function i(n){return null==n?n:n.toString()}function a(n){return null==n?n:"number"==typeof n&&isNaN(n)?0:parseFloat(n)}function s(n){return null==n?n:Math.round(parseFloat(n))}function l(n){return n&&n.constructor&&void 0!==n.constructor._meta}function f(n,r){return null!=r&&n&&!t(n,r)}function c(n){return n&&("isCollection"in n||n._meta&&n._meta.bases&&n._meta.bases.some(function(n){return"isCollection"in n}))}function y(n){return n&&n.Type?"function"==typeof n.Type?n.Type:n.Type.base:null}function p(n,r){if(!r||!r.constructor||!c(r.constructor))return d(n,r)?r:new n(r);var e=y(n.prototype.itemType),t=y(r.constructor.prototype.itemType);if(!e)return r;if(!t)return new n(r);if(e===t)return r;var u=t._meta&&t._meta.bases;return u&&-1!==u.indexOf(e)?new n(r):(d(n,r),r)}function d(n,r){return!!l(r)&&(I.error("Accessor#set","Assigning an instance of '"+(r.declaredClass||"unknown")+"' which is not a subclass of '"+g(n)+"'"),!0)}function v(n,r){return null==r?r:c(n)?p(n,r):f(n,r)?d(n,r)?r:new n(r):r}function g(n){return n&&n.prototype&&n.prototype.declaredClass||"unknown"}function b(n){switch(n){case Number:return a;case N:return s;case Boolean:return o;case String:return i;case Date:return u;default:return v.bind(null,n)}}function h(n,r){var e=b(n);return 1===arguments.length?e:e(r)}function A(n,r){return 1===arguments.length?A.bind(null,n):r?Array.isArray(r)?r.map(n):[n(r)]:r}function m(n,r){return 1===arguments.length?A(h.bind(null,n)):A(h.bind(null,n),r)}function T(n,r,e){return 0!==r&&Array.isArray(e)?e.map(function(e){return T(n,r-1,e)}):n(e)}function w(n,r,e){if(2===arguments.length)return w.bind(null,n,r);if(!e)return e;e=T(n,r,e);for(var t=r,u=e;t>0&&Array.isArray(u);)t--,u=u[0];if(void 0!==u)for(var o=0;o<t;o++)e=[e];return e}function O(n,r,e){return 2===arguments.length?w(h.bind(null,n),r):w(h.bind(null,n),r,e)}function _(n){if(!Array.isArray(n))return!1;var r=typeof n[0];return"string"===r||"number"===r}function k(n,r){if(2===arguments.length)return k(n).call(null,r);for(var e=new Set,t=0,u=n;t<u.length;t++){var o=u[t];e.add(o)}var i=null;return function(r,t){return null==r?r:(e.has(r)||(i||(i=n.map(function(n){return"string"==typeof n?"'"+n+"'":""+n}).join(", ")),I.error("Accessor#set","'"+r+"' is not a valid value for this property, only the following values are valid: "+i),t&&(t.valid=!1)),r)}}function C(n,r){if(2===arguments.length)return C(n).call(null,r);var e={},t=[],u=[];for(var o in n.typeMap){var i=n.typeMap[o];e[o]=h(i),t.push(g(i)),u.push(o)}var a=function(){return"'"+t.join("', '")+"'"},s=function(){return"'"+u.join("', '")+"'"},c="string"==typeof n.key?function(r){return r[n.key]}:n.key;return function(r){if(n.base&&!f(n.base,r))return r;var t=c(r)||n.defaultKeyValue,u=e[t];if(!u)return I.error("Accessor#set","Invalid property value, value needs to be one of "+a()+", or a plain object that can autocast (having .type = "+s()+")"),null;if(!f(n.typeMap[t],r))return r;if("string"==typeof n.key&&!l(r)){var o={};for(var i in r)i!==n.key&&(o[i]=r[i]);return u(o)}return u(r)}}Object.defineProperty(r,"__esModule",{value:!0});var I=e.getLogger("esri.core.Accessor");r.isInstanceOf=t,r.ensureDate=u,r.ensureBoolean=o,r.ensureString=i,r.ensureNumber=a,r.ensureInteger=s,r.isClassedType=l,r.requiresType=f,r.ensureClass=v,r.ensureType=h,r.ensureArrayTyped=A,r.ensureArray=m,r.ensureNArrayTyped=w,r.ensureNArray=O,r.isOneOf=_,r.ensureOneOf=k,r.ensureOneOfType=C;var N=function(){function n(){}return n}();r.Integer=N,r.default=h});