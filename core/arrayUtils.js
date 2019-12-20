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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/array","./RandomLCG"],function(r,n,e,t){function u(r){return r.filter(function(r,n,e){return e.indexOf(r)===n})}function f(r,n,e){if(!r&&!n)return!0;if(!r||!n||r.length!==n.length)return!1;if(e){for(var t=0;t<r.length;t++)if(!e(r[t],n[t]))return!1}else for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}function i(r,n,e){var t,u;return e?(t=n.filter(A.bind(null,r,e)),u=r.filter(A.bind(null,n,e))):(t=n.filter(w.bind(null,r)),u=r.filter(w.bind(null,n))),{added:t,removed:u}}function o(r,n,t){return r&&n?t?r.filter(function(r){return e.findIndex(n,function(n){return t(r,n)})>-1}):r.filter(function(r){return n.indexOf(r)>-1}):[]}function a(r,n){if(b)return new Array(r).fill(n);for(var e=new Array(r),t=0;t<r;t++)e[t]=n;return e}function l(r,n){void 0===n&&(n=r,r=0);for(var e=new Array(n-r),t=r;t<n;t++)e[t-r]=t;return e}function c(r,n,e){for(var t=r.length,u=0,f=t-1;u<f;){var i=u+Math.floor((f-u)/2);n>r[i]?u=i+1:f=i}var o=r[u];return e?n>=r[t-1]?-1:o===n?u:u-1:o===n?u:-1}function d(r){return r.reduce(function(r,n){return r.concat(n||[])},[])}function v(r,n,e,t){t=t||k;for(var u=Math.max(0,t.last-10),f=u;f<e;++f)if(r[f]===n)return t.last=f,f;for(var i=Math.min(u,e),f=0;f<i;++f)if(r[f]===n)return t.last=f,f;return-1}function s(r,n,e,t){var u=null==e?r.length:e,f=v(r,n,u,t);if(-1!==f)return r[f]=r[u-1],null==e&&r.pop(),n}function h(r,n,e,t,u,f){if(void 0===e&&(e=r.length),void 0===t&&(t=n.length),0===t||0===e)return e;I.clear();for(var i=0;i<t;++i)I.add(n[i]);u=u||k;for(var o=Math.max(0,u.last-10),i=o;i<e;++i)if(I.has(r[i])&&(f&&f.push(r[i]),I.delete(r[i]),r[i]=r[e-1],--e,--i,0===I.size||0===e))return I.clear(),e;for(var i=0;i<o;++i)if(I.has(r[i])&&(f&&f.push(r[i]),I.delete(r[i]),r[i]=r[e-1],--e,--i,0===I.size||0===e))return I.clear(),e;return I.clear(),e}function m(r,n,e){var t=r.length;if(n>=t)return r.slice(0);q.seed=e;for(var u=e?function(){return q.getFloat()}:Math.random,f=new Set,i=[];i.length<n;){var o=Math.floor(u()*t);f.has(o)||(f.add(o),i.push(r[o]))}return i}function y(r,n){q.seed=n;for(var e=n?function(){return q.getFloat()}:Math.random,t=r.length-1;t>0;t--){var u=Math.floor(e()*(t+1)),f=r[t];r[t]=r[u],r[u]=f}return r}function g(r){var n=new Array(r.size),e=0;return r.forEach(function(r,t){return n[e++]=t}),n}function p(r,n){void 0===n&&(n=O);var e=new Array(r.size),t=0;return r.forEach(function(r){return e[t++]=n(r)}),e}function x(r){if(Array.from)return Array.from(r.values());var n=new Array(r.size),e=0;return r.forEach(function(r){return n[e++]=r}),n}function M(r,n){var e=r.indexOf(n);return-1!==e?(r.splice(e,1),n):null}function w(r,n){return-1===r.indexOf(n)}function A(r,n,e){return!r.some(n.bind(null,e))}function O(r){return r}Object.defineProperty(n,"__esModule",{value:!0}),n.find=e.find,n.findIndex=e.findIndex,n.includes=e.includes,n.unique=u,n.equals=f,n.difference=i,n.intersect=o;var b=!!Array.prototype.fill;n.constant=a,n.range=l,n.binaryIndexOf=c,n.flatten=d;var z=function(){function r(){this.last=0}return r}();n.PositionHint=z;var k=new z;n.indexOf=v,n.removeUnordered=s;var I=new Set;n.removeUnorderedMany=h,n.pickRandom=m,n.shuffle=y;var q=new t;n.keysOfMap=g,n.keysOfSet=p,n.fromMapValues=x,n.remove=M});