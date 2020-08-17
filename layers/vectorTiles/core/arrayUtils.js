// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports"],(function(n,r){function e(n,r,e){for(var t=n.length,i=0;i<t;i++){var u=n[i];if(r.call(e,u,i,n))return i}return-1}Object.defineProperty(r,"__esModule",{value:!0}),r.findIndex=e,r.find=function(n,r,e){for(var t=n.length,i=0;i<t;i++){var u=n[i];if(r.call(e,u,i,n))return u}},r.unique=function(n){return n.filter((function(n,r,e){return e.indexOf(n)===r}))},r.equals=function(n,r,e){if(!n&&!r)return!0;if(!n||!r||n.length!==r.length)return!1;if(e){for(var t=0;t<n.length;t++)if(!e(n[t],r[t]))return!1}else for(t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0},r.difference=function(n,r,e){var t,i;return e?(t=r.filter(l.bind(null,n,e)),i=n.filter(l.bind(null,r,e))):(t=r.filter(a.bind(null,n)),i=n.filter(a.bind(null,r))),{added:t,removed:i}},r.intersect=function(n,r,t){return n&&r?t?n.filter((function(n){return e(r,(function(r){return t(n,r)}))>-1})):n.filter((function(n){return r.indexOf(n)>-1})):[]},r.constant=function(n,r){for(var e=new Array(n),t=0;t<n;t++)e[t]=r;return e},r.range=function(n,r){void 0===r&&(r=n,n=0);for(var e=new Array(r-n),t=n;t<r;t++)e[t-n]=t;return e},r.binaryIndexOf=function(n,r,e){for(var t=n.length,i=0,u=t-1;i<u;){var f=i+Math.floor((u-i)/2);r>n[f]?i=f+1:u=f}var o=n[i];return e?r>=n[t-1]?-1:o===r?i:i-1:o===r?i:-1};var t=function(){this.last=0};r.RemoveHint=t;var i=new t,u=function(n){var r=this;this._array=n,this._hint=new t,this.remove=function(n){return f(r._array,n,r._array.length,r._hint)},this.removeMany=function(n){return o(r._array,n,r._array.length,r._hint)}};function f(n,r,e,t){void 0===e&&(e=n.length),t=t||i;for(var u=Math.max(0,t.last-10),f=-1,o=u;o<e;++o)if(n[o]===r){f=o;break}if(-1===f){for(o=0;o<u;++o)if(n[o]===r){f=o;break}if(-1===f)return}return n[f]=n[e-1],n.pop(),t.last=f,r}function o(n,r,e,t){void 0===e&&(e=n.length);var i=[];return r.forEach((function(r){void 0!==f(n,r,e,t)&&(i.push(r),--e)})),i}function a(n,r){return-1===n.indexOf(r)}function l(n,r,e){return!n.some(r.bind(null,e))}function c(n){return n}r.UnorderedRemover=u,r.removeUnordered=f,r.removeUnorderedMany=o,r.keysOfMap=function(n){var r=[];return n.forEach((function(n,e){return r.push(e)})),r},r.keysOfSet=function(n,r){void 0===r&&(r=c);var e=[];return n.forEach((function(n){return e.push(r(n))})),e}}));
