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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../intl"],(function(r,n,t){Object.defineProperty(n,"__esModule",{value:!0});var e=/^-?(\d+)(\.(\d+))?$/i;function i(r,n){return r-n}function a(r,n){var t,e;return(t=Number(r.toFixed(n)))<r?e=t+1/Math.pow(10,n):(e=t,t-=1/Math.pow(10,n)),[t=Number(t.toFixed(n)),e=Number(e.toFixed(n))]}function o(r,n,t,e,i){var a=l(r,n,t,e),o=null==a.previous||a.previous<=i,u=null==a.next||a.next<=i;return o&&u||a.previous+a.next<=2*i}function u(r){var n=String(r),t=n.match(e);if(t&&t[1])return{integer:t[1].split("").length,fractional:t[3]?t[3].split("").length:0};if(n.toLowerCase().indexOf("e")>-1){var i=n.split("e"),a=i[0],o=i[1];if(a&&o){var l=Number(a),f=Number(o),v=f>0;v||(f=Math.abs(f));var c=u(l);return v?(c.integer+=f,f>c.fractional?c.fractional=0:c.fractional-=f):(c.fractional+=f,f>c.integer?c.integer=1:c.integer-=f),c}}return{integer:0,fractional:0}}function l(r,n,t,e){var i={previous:null,next:null};if(null!=t){var a=n-t-(o=r-t);i.previous=Math.floor(Math.abs(100*a/o))}if(null!=e){var o;a=e-n-(o=e-r);i.next=Math.floor(Math.abs(100*a/o))}return i}n.numDigits=u,n.percentChange=l,n.round=function(r,n){void 0===n&&(n={});var t=r.slice(0),e=n.tolerance,l=void 0===e?2:e,f=n.strictBounds,v=void 0!==f&&f,c=n.indexes,s=void 0===c?t.map((function(r,n){return n})):c;s.sort(i);for(var d=0;d<s.length;d++){var g=s[d],m=t[g],p=0===g?null:t[g-1],h=g===t.length-1?null:t[g+1],x=u(m).fractional;if(x){for(var b=0,M=!1,N=void 0;b<=x&&!M;){var F=a(m,b);M=o(m,N=v&&0===d?F[1]:F[0],p,h,l),b++}M&&(t[g]=N)}}return t};var f={maximumFractionDigits:20};n.format=function(r){return t.formatNumber(r,f)}}));