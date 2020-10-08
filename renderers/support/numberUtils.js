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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../intl"],(function(r,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.format=t.round=t.percentChange=t.numDigits=void 0;var e=/^-?(\d+)(\.(\d+))?$/i;function i(r,t){return r-t}function a(r,t){var n,e;return(n=Number(r.toFixed(t)))<r?e=n+1/Math.pow(10,t):(e=n,n-=1/Math.pow(10,t)),[n=Number(n.toFixed(t)),e=Number(e.toFixed(t))]}function o(r,t,n,e,i){var a=l(r,t,n,e),o=null==a.previous||a.previous<=i,u=null==a.next||a.next<=i;return o&&u||a.previous+a.next<=2*i}function u(r){var t=String(r),n=t.match(e);if(n&&n[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0};if(t.toLowerCase().indexOf("e")>-1){var i=t.split("e"),a=i[0],o=i[1];if(a&&o){var l=Number(a),f=Number(o),v=f>0;v||(f=Math.abs(f));var c=u(l);return v?(c.integer+=f,f>c.fractional?c.fractional=0:c.fractional-=f):(c.fractional+=f,f>c.integer?c.integer=1:c.integer-=f),c}}return{integer:0,fractional:0}}function l(r,t,n,e){var i={previous:null,next:null};if(null!=n){var a=t-n-(o=r-n);i.previous=Math.floor(Math.abs(100*a/o))}if(null!=e){var o;a=e-t-(o=e-r);i.next=Math.floor(Math.abs(100*a/o))}return i}t.numDigits=u,t.percentChange=l,t.round=function(r,t){void 0===t&&(t={});var n=r.slice(0),e=t.tolerance,l=void 0===e?2:e,f=t.strictBounds,v=void 0!==f&&f,c=t.indexes,s=void 0===c?n.map((function(r,t){return t})):c;s.sort(i);for(var d=0;d<s.length;d++){var g=s[d],m=n[g],p=0===g?null:n[g-1],h=g===n.length-1?null:n[g+1],x=u(m).fractional;if(x){for(var b=0,M=!1,N=void 0;b<=x&&!M;){var F=a(m,b);M=o(m,N=v&&0===d?F[1]:F[0],p,h,l),b++}M&&(n[g]=N)}}return n};var f={maximumFractionDigits:20};t.format=function(r){return n.formatNumber(r,f)}}));