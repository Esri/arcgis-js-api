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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../intl"],function(r,n,t){function e(r,n){return r-n}function i(r,n){var t,e;return t=Number(r.toFixed(n)),t<r?e=t+1/Math.pow(10,n):(e=t,t-=1/Math.pow(10,n)),t=Number(t.toFixed(n)),e=Number(e.toFixed(n)),[t,e]}function a(r,n,t,e,i){var a=u(r,n,t,e),o=null==a.previous||a.previous<=i,l=null==a.next||a.next<=i;return o&&l||a.previous+a.next<=2*i}function o(r){var n=String(r),t=n.match(v);if(t&&t[1])return{integer:t[1].split("").length,fractional:t[3]?t[3].split("").length:0};if(n.toLowerCase().indexOf("e")>-1){var e=n.split("e"),i=e[0],a=e[1];if(i&&a){var u=Number(i),l=Number(a),f=l>0;f||(l=Math.abs(l));var c=o(u);return f?(c.integer+=l,l>c.fractional?c.fractional=0:c.fractional-=l):(c.fractional+=l,l>c.integer?c.integer=1:c.integer-=l),c}}return{integer:0,fractional:0}}function u(r,n,t,e){var i={previous:null,next:null};if(null!=t){var a=r-t,o=n-t,u=o-a;i.previous=Math.floor(Math.abs(100*u/a))}if(null!=e){var a=e-r,o=e-n,u=o-a;i.next=Math.floor(Math.abs(100*u/a))}return i}function l(r,n){void 0===n&&(n={});var t=r.slice(0),u=n.tolerance,l=void 0===u?2:u,f=n.strictBounds,v=void 0!==f&&f,c=n.indexes,s=void 0===c?t.map(function(r,n){return n}):c;s.sort(e);for(var d=0;d<s.length;d++){var g=s[d],m=t[g],p=0===g?null:t[g-1],h=g===t.length-1?null:t[g+1],x=o(m),b=x.fractional;if(b){for(var M=0,N=!1,F=void 0;M<=b&&!N;){var w=i(m,M);F=v&&0===d?w[1]:w[0],N=a(m,F,p,h,l),M++}N&&(t[g]=F)}}return t}function f(r){return t.formatNumber(r,c)}Object.defineProperty(n,"__esModule",{value:!0});var v=/^-?(\d+)(\.(\d+))?$/i;n.numDigits=o,n.percentChange=u,n.round=l;var c={maximumFractionDigits:20};n.format=f});