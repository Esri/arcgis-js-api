// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/array","./RandomLCG"],function(r,n,e,t){function f(r){return r.filter(function(r,n,e){return e.indexOf(r)===n})}function u(r,n,e){if(!r&&!n)return!0;if(!r||!n||r.length!==n.length)return!1;if(e){for(var t=0;t<r.length;t++)if(!e(r[t],n[t]))return!1}else for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}function i(r,n,e){var t,f;return e?(t=n.filter(M.bind(null,r,e)),f=r.filter(M.bind(null,n,e))):(t=n.filter(x.bind(null,r)),f=r.filter(x.bind(null,n))),{added:t,removed:f}}function a(r,n,t){return r&&n?t?r.filter(function(r){return e.findIndex(n,function(n){return t(r,n)})>-1}):r.filter(function(r){return n.indexOf(r)>-1}):[]}function o(r,n){if(A)return new Array(r).fill(n);for(var e=new Array(r),t=0;t<r;t++)e[t]=n;return e}function l(r,n){void 0===n&&(n=r,r=0);for(var e=new Array(n-r),t=r;t<n;t++)e[t-r]=t;return e}function c(r,n,e){for(var t=r.length,f=0,u=t-1;f<u;){var i=f+Math.floor((u-f)/2);n>r[i]?f=i+1:u=i}var a=r[f];return e?n>=r[t-1]?-1:a===n?f:f-1:a===n?f:-1}function d(r){return r.reduce(function(r,n){return r.concat(n||[])},[])}function v(r,n,e,t){t=t||k;for(var f=null==e?r.length:e,u=Math.max(0,t.last-10),i=-1,a=u;a<f;++a)if(r[a]===n){i=a;break}if(-1===i){for(var a=0;a<u;++a)if(r[a]===n){i=a;break}if(-1===i)return}return r[i]=r[f-1],null==e&&r.pop(),t.last=i,n}function s(r,n,e,t,f,u){if(void 0===e&&(e=r.length),void 0===t&&(t=n.length),0===t||0===e)return e;z.clear();for(var i=0;i<t;++i)z.add(n[i]);f=f||k;for(var a=Math.max(0,f.last-10),i=a;i<e;++i)if(z.has(r[i])&&(u&&u.push(r[i]),z.delete(r[i]),r[i]=r[e-1],--e,--i,0===z.size||0===e))return z.clear(),e;for(var i=0;i<a;++i)if(z.has(r[i])&&(u&&u.push(r[i]),z.delete(r[i]),r[i]=r[e-1],--e,--i,0===z.size||0===e))return z.clear(),e;return z.clear(),e}function h(r,n,e){var t=r.length;if(n>=t)return r.slice(0);I.seed=e;for(var f=e?function(){return I.getFloat()}:Math.random,u=new Set,i=[];i.length<n;){var a=Math.floor(f()*t);u.has(a)||(u.add(a),i.push(r[a]))}return i}function m(r,n){I.seed=n;for(var e=n?function(){return I.getFloat()}:Math.random,t=r.length-1;t>0;t--){var f=Math.floor(e()*(t+1)),u=r[t];r[t]=r[f],r[f]=u}return r}function y(r){var n=new Array(r.size),e=0;return r.forEach(function(r,t){return n[e++]=t}),n}function g(r,n){void 0===n&&(n=b);var e=new Array(r.size),t=0;return r.forEach(function(r){return e[t++]=n(r)}),e}function p(r){if(Array.from)return Array.from(r.values());var n=new Array(r.size),e=0;return r.forEach(function(r){return n[e++]=r}),n}function w(r,n){var e=r.indexOf(n);return-1!==e?(r.splice(e,1),n):null}function x(r,n){return-1===r.indexOf(n)}function M(r,n,e){return!r.some(n.bind(null,e))}function b(r){return r}Object.defineProperty(n,"__esModule",{value:!0}),n.find=e.find,n.findIndex=e.findIndex,n.includes=e.includes,n.unique=f,n.equals=u,n.difference=i,n.intersect=a;var A=!!Array.prototype.fill;n.constant=o,n.range=l,n.binaryIndexOf=c,n.flatten=d;var O=function(){function r(){this.last=0}return r}();n.RemoveHint=O;var k=new O;n.removeUnordered=v;var z=new Set;n.removeUnorderedMany=s,n.pickRandom=h,n.shuffle=m;var I=new t;n.keysOfMap=y,n.keysOfSet=g,n.fromMapValues=p,n.remove=w});