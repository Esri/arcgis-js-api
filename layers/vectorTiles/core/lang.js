// COPYRIGHT © 201 Esri
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

define(["dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/number","dojo/date/locale","dojo/i18n!../nls/common"],(function(e,t,n,r,i,o){function a(e){return null!=e}var s=["NumberFormat","DateString","DateFormat"],f=/<\/?[^>]+>/g;function c(e){return a(e)?e:""}function u(e,o,f){var u,l=f.match(/([^\(]+)(\([^\)]+\))?/i),m=t.trim(l[1]),p=o[e],d=JSON.parse((l[2]?t.trim(l[2]):"{}").replace(/^\(/,"{").replace(/\)$/,"}").replace(/([{,])\s*([0-9a-zA-Z\_]+)\s*:/gi,'$1"$2":').replace(/\"\s*:\s*\'/gi,'":"').replace(/\'\s*(,|\})/gi,'"$1')),g=d.utcOffset;if(-1===s.indexOf(m)){var y=t.getObject(m);t.isFunction(y)&&(p=y(p,e,o,d))}else if("number"==typeof p||"string"==typeof p&&p&&!isNaN(Number(p)))switch(p=Number(p),m){case"NumberFormat":var b=t.mixin({},d),h=parseFloat(b.places);return(isNaN(h)||h<0)&&(b.places=1/0),r.format(p,b);case"DateString":return u=new Date(p),d.local||d.systemLocale?d.systemLocale?u.toLocaleDateString()+(d.hideTime?"":" "+u.toLocaleTimeString()):u.toDateString()+(d.hideTime?"":" "+u.toTimeString()):(u=u.toUTCString(),d.hideTime&&(u=u.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,"")),u);case"DateFormat":return u=new Date(p),a(g)&&(u=n.add(u,"minute",u.getTimezoneOffset()-g)),i.format(u,d)}return c(p)}return{equals:function(e,n){return e===n||"number"==typeof e&&isNaN(e)&&"number"==typeof n&&isNaN(n)||t.isFunction((e||{}).getTime)&&t.isFunction((n||{}).getTime)&&e.getTime()==n.getTime()||t.isFunction((e||{}).equals)&&e.equals(n)||t.isFunction((n||{}).equals)&&n.equals(e)||!1},mixin:t.mixin,valueOf:function(e,t){var n;for(n in e)if(e[n]==t)return n;return null},stripTags:function(e){if(e){var t=typeof e;if("string"===t)e=e.replace(f,"");else if("object"===t){var n;for(n in e){var r=e[n];r&&"string"==typeof r&&(r=r.replace(f,"")),e[n]=r}}}return e},substitute:function(e,n,r){var i,s,f;if(a(r)&&(t.isObject(r)?(i=r.first,s=r.dateFormat,f=r.numberFormat):i=r),n&&"{*}"!==n)return t.replace(n,t.hitch({obj:e},(function(e,t){var n=t.split(":");return n.length>1?(t=n[0],n.shift(),u(t,this.obj,n.join(":"))):s&&-1!==(s.properties||[]).indexOf(t)?u(t,this.obj,s.formatter||"DateString"):f&&-1!==(f.properties||[]).indexOf(t)?u(t,this.obj,f.formatter||"NumberFormat"):c(this.obj[t])})));var l,m,p=[];for(m in p.push('<table class="esri-widget__table" summary="'+o.fieldsSummary+'"><tbody>'),e)if(l=e[m],s&&-1!==(s.properties||[]).indexOf(m)?l=u(m,e,s.formatter||"DateString"):f&&-1!==(f.properties||[]).indexOf(m)&&(l=u(m,e,f.formatter||"NumberFormat")),p.push("<tr><th>"+m+"</th><td>"+c(l)+"</td></tr>"),i)break;return p.push("</tbody></table>"),p.join("")},filter:function(n,r,i){var o,a=function(n,r,i){return[t.isString(n)?n.split(""):n,r||e.global,t.isString(i)?new Function("item","index","array",i):i]}(n,i,r),s={};for(o in n=a[0])a[2].call(a[o],n[o],o,n)&&(s[o]=n[o]);return s},startsWith:function(e,t,n){return n=n||0,e.indexOf(t,n)===n},endsWith:function(e,t,n){("number"!=typeof n||!isFinite(n)||Math.floor(n)!==n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},isDefined:a,fixJson:function e(t,n){var r;if(n)for(r in t)t.hasOwnProperty(r)&&(void 0===t[r]?delete t[r]:t[r]instanceof Object&&e(t[r],!0));else for(r in t)t.hasOwnProperty(r)&&void 0===t[r]&&delete t[r];return t},clone:function e(n){return!n||"object"!=typeof n||t.isFunction(n)?n:n instanceof Int8Array||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Int32Array||n instanceof Uint16Array||n instanceof Uint32Array||n instanceof Float32Array||n instanceof Float64Array||n instanceof Date?new(0,n.constructor)(n):n instanceof ArrayBuffer?n.slice(0,n.byteLength):"function"==typeof n.clone?n.clone():"function"==typeof n.map&&"function"==typeof n.forEach?n.map(e):"function"==typeof n.notifyChange&&"function"==typeof n.watch?n.clone():function(e,t,n){var r,i,o={};for(r in t){i=t[r];var a=!(r in o)||o[r]!==i;r in e&&(e[r]===i||!a)||(e[r]=n?n(i):i)}return e}({},n,e)}}}));