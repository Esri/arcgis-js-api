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

define(["require","exports"],function(r,n){function e(r,n,e){for(var t=r.length,i=0;i<t;i++){var u=r[i];if(n.call(e,u,i,r))return i}return-1}function t(r,n,e){for(var t=r.length,i=0;i<t;i++){var u=r[i];if(n.call(e,u,i,r))return u}}function i(r){return r.filter(function(r,n,e){return e.indexOf(r)===n})}function u(r,n,e){if(!r&&!n)return!0;if(!r||!n||r.length!==n.length)return!1;if(e){for(var t=0;t<r.length;t++)if(!e(r[t],n[t]))return!1}else for(var t=0;t<r.length;t++)if(r[t]!==n[t])return!1;return!0}function f(r,n,e){var t,i;return e?(t=n.filter(m.bind(null,r,e)),i=r.filter(m.bind(null,n,e))):(t=n.filter(g.bind(null,r)),i=r.filter(g.bind(null,n))),{added:t,removed:i}}function o(r,n,t){return r&&n?t?r.filter(function(r){return e(n,function(n){return t(r,n)})>-1}):r.filter(function(r){return n.indexOf(r)>-1}):[]}function a(r,n){for(var e=new Array(r),t=0;t<r;t++)e[t]=n;return e}function c(r,n){void 0===n&&(n=r,r=0);for(var e=new Array(n-r),t=r;t<n;t++)e[t-r]=t;return e}function l(r,n,e){for(var t=r.length,i=0,u=t-1;i<u;){var f=i+Math.floor((u-i)/2);n>r[f]?i=f+1:u=f}var o=r[i];return e?n>=r[t-1]?-1:o===n?i:i-1:o===n?i:-1}function v(r,n,e,t){void 0===e&&(e=r.length),t=t||p;for(var i=Math.max(0,t.last-10),u=-1,f=i;f<e;++f)if(r[f]===n){u=f;break}if(-1===u){for(var f=0;f<i;++f)if(r[f]===n){u=f;break}if(-1===u)return}return r[u]=r[e-1],r.pop(),t.last=u,n}function d(r,n,e,t){void 0===e&&(e=r.length);var i=[];return n.forEach(function(n){void 0!==v(r,n,e,t)&&(i.push(n),--e)}),i}function h(r){var n=[];return r.forEach(function(r,e){return n.push(e)}),n}function s(r,n){void 0===n&&(n=_);var e=[];return r.forEach(function(r){return e.push(n(r))}),e}function y(r){if(Array.from)return Array.from(r.values());var n=new Array(r.size),e=0;return r.forEach(function(r){n[e++]=r}),n}function g(r,n){return-1===r.indexOf(n)}function m(r,n,e){return!r.some(n.bind(null,e))}function _(r){return r}Object.defineProperty(n,"__esModule",{value:!0}),n.findIndex=e,n.find=t,n.unique=i,n.equals=u,n.difference=f,n.intersect=o,n.constant=a,n.range=c,n.binaryIndexOf=l;var b=function(){function r(){this.last=0}return r}();n.RemoveHint=b;var p=new b,x=function(){function r(r){var n=this;this._array=r,this._hint=new b,this.remove=function(r){return v(n._array,r,n._array.length,n._hint)},this.removeMany=function(r){return d(n._array,r,n._array.length,n._hint)}}return r}();n.UnorderedRemover=x,n.removeUnordered=v,n.removeUnorderedMany=d,n.keysOfMap=h,n.keysOfSet=s,n.fromMapValues=y});