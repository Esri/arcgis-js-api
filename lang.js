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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/has","dojo/number","dojo/date/locale","./kernel"],function(e,t,r,n,i,o,a,f,s){function u(e,t,i){return[n.isString(e)?e.split(""):e,t||r.global,n.isString(i)?new Function("item","index","array",i):i]}function l(e){return void 0!==e&&null!==e}function c(e){return l(e)?e:""}function m(r,o,s){var u,m=s.match(/([^\(]+)(\([^\)]+\))?/i),d=n.trim(m[1]),b=o[r],p=t.fromJson((m[2]?n.trim(m[2]):"()").replace(/^\(/,"({").replace(/\)$/,"})")),h=p.utcOffset;if(-1===e.indexOf(g,d)){var v=n.getObject(d);n.isFunction(v)&&(b=v(b,r,o,p))}else if("number"==typeof b||"string"==typeof b&&b&&!isNaN(Number(b)))switch(b=Number(b),d){case"NumberFormat":return a.format(b,p);case"DateString":return u=new Date(b),p.local||p.systemLocale?p.systemLocale?u.toLocaleDateString()+(p.hideTime?"":" "+u.toLocaleTimeString()):u.toDateString()+(p.hideTime?"":" "+u.toTimeString()):(u=u.toUTCString(),p.hideTime&&(u=u.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,"")),u);case"DateFormat":return u=new Date(b),l(h)&&(u=i.add(u,"minute",u.getTimezoneOffset()-h)),f.format(u,p)}return c(b)}function d(e,t){var r;if(t)for(r in e)e.hasOwnProperty(r)&&(void 0===e[r]?delete e[r]:e[r]instanceof Object&&d(e[r],!0));else for(r in e)e.hasOwnProperty(r)&&void 0===e[r]&&delete e[r];return e}var g=["NumberFormat","DateString","DateFormat"],b=/<\/?[^>]+>/g,p={valueOf:function(e,t){var r;for(r in e)if(e[r]==t)return r;return null},stripTags:function(e){if(e){var t=typeof e;if("string"===t)e=e.replace(b,"");else if("object"===t)for(var r in e){var n=e[r];n&&"string"==typeof n&&(n=n.replace(b,"")),e[r]=n}}return e},substitute:function(t,r,i){var o,a,f;if(l(i)&&(n.isObject(i)?(o=i.first,a=i.dateFormat,f=i.numberFormat):o=i),r&&"${*}"!==r)return n.replace(r,n.hitch({obj:t},function(t,r){var n=r.split(":");return n.length>1?(r=n[0],n.shift(),m(r,this.obj,n.join(":"))):a&&-1!==e.indexOf(a.properties||"",r)?m(r,this.obj,a.formatter||"DateString"):f&&-1!==e.indexOf(f.properties||"",r)?m(r,this.obj,f.formatter||"NumberFormat"):c(this.obj[r])}),/\$\{([^\}]+)\}/g);var s,u,d=[];for(u in t)if(s=t[u],a&&-1!==e.indexOf(a.properties||"",u)?s=m(u,t,a.formatter||"DateString"):f&&-1!==e.indexOf(f.properties||"",u)&&(s=m(u,t,f.formatter||"NumberFormat")),d.push(u+" = "+c(s)+"<br/>"),o)break;return d.join("")},filter:function(e,t,r){var n,i=u(e,r,t),o={};e=i[0];for(n in e)i[2].call(i[n],e[n],n,e)&&(o[n]=e[n]);return o},startsWith:function(e,t,r){return r=r||0,e.indexOf(t,r)===r},endsWith:function(e,t,r){("number"!=typeof r||!isFinite(r)||Math.floor(r)!==r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},isDefined:l,fixJson:d,isObject:function(e){return e&&"object"==typeof e},isString:function(e){return"string"==typeof e},mixin:function(e,t){var r;for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},clone2DArray:function(e){var t=e?e.slice(0):null;if(t){var r,n=t.length;for(r=0;r<n;r++)t[r]=t[r]?t[r].slice(0):null}return t},clone3DArray:function(e){var t=e?e.slice(0):null;if(t){var r,n=t.length;for(r=0;r<n;r++){t[r]=t[r]?t[r].slice(0):null;var i=t[r];if(i){var o,a=i.length;for(o=0;o<a;o++)i[o]=i[o]?i[o].slice(0):null}}}return t}};return o("extend-esri")&&(n.mixin(s,p),s._isDefined=l,s._getParts=u,s._sanitize=d),p});