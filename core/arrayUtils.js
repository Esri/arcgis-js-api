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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/array","./RandomLCG"],function(n,r,e,t){function i(n){return n.filter(function(n,r,e){return e.indexOf(n)===r})}function u(n,r,e){if(!n&&!r)return!0;if(!n||!r||n.length!==r.length)return!1;if(e){for(var t=0;t<n.length;t++)if(!e(n[t],r[t]))return!1}else for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}function f(n,r,e){var t,i;return e?(t=r.filter(b.bind(null,n,e)),i=n.filter(b.bind(null,r,e))):(t=r.filter(_.bind(null,n)),i=n.filter(_.bind(null,r))),{added:t,removed:i}}function o(n,e,t){return n&&e?t?n.filter(function(n){return r.findIndex(e,function(r){return t(n,r)})>-1}):n.filter(function(n){return e.indexOf(n)>-1}):[]}function a(n,r){for(var e=new Array(n),t=0;t<n;t++)e[t]=r;return e}function c(n,r){void 0===r&&(r=n,n=0);for(var e=new Array(r-n),t=n;t<r;t++)e[t-n]=t;return e}function l(n,r,e){for(var t=n.length,i=0,u=t-1;i<u;){var f=i+Math.floor((u-i)/2);r>n[f]?i=f+1:u=f}var o=n[i];return e?r>=n[t-1]?-1:o===r?i:i-1:o===r?i:-1}function d(n){return n.reduce(function(n,r){return n.concat(r||[])},[])}function v(n,r,e,t){void 0===e&&(e=n.length),t=t||M;for(var i=Math.max(0,t.last-10),u=-1,f=i;f<e;++f)if(n[f]===r){u=f;break}if(-1===u){for(var f=0;f<i;++f)if(n[f]===r){u=f;break}if(-1===u)return}return n[u]=n[e-1],n.pop(),t.last=u,r}function h(n,r,e,t){void 0===e&&(e=n.length);var i=[];return r.forEach(function(r){void 0!==v(n,r,e,t)&&(i.push(r),--e)}),i}function s(n,r){O.seed=r;for(var e=r?function(){return O.getFloat()}:Math.random,t=n.length-1;t>0;t--){var i=Math.floor(e()*(t+1)),u=n[t];n[t]=n[i],n[i]=u}return n}function y(n){var r=[];return n.forEach(function(n,e){return r.push(e)}),r}function m(n,r){void 0===r&&(r=p);var e=[];return n.forEach(function(n){return e.push(r(n))}),e}function g(n){if(Array.from)return Array.from(n.values());var r=new Array(n.size),e=0;return n.forEach(function(n){r[e++]=n}),r}function _(n,r){return-1===n.indexOf(r)}function b(n,r,e){return!n.some(r.bind(null,e))}function p(n){return n}Object.defineProperty(r,"__esModule",{value:!0}),r.find=e.find,r.findIndex=e.findIndex,r.unique=i,r.equals=u,r.difference=f,r.intersect=o,r.constant=a,r.range=c,r.binaryIndexOf=l,r.concatAll=d;var x=function(){function n(){this.last=0}return n}();r.RemoveHint=x;var M=new x,w=function(){function n(n){var r=this;this._array=n,this._hint=new x,this.remove=function(n){return v(r._array,n,r._array.length,r._hint)},this.removeMany=function(n){return h(r._array,n,r._array.length,r._hint)}}return n}();r.UnorderedRemover=w,r.removeUnordered=v,r.removeUnorderedMany=h,r.shuffle=s;var O=new t;r.keysOfMap=y,r.keysOfSet=m,r.fromMapValues=g});