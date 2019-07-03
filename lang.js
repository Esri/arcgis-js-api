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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/has","dojo/number","dojo/date/locale","./kernel"],function(e,t,r,n,i,o,a,f,u){function s(t,r,n,i){var o=r&&r[t];return o?o={formatType:o.formatType,options:o}:i&&-1!==e.indexOf(i.properties||"",t)?o={formatType:i.formatter||"DateString",options:null}:n&&-1!==e.indexOf(n.properties||"",t)&&(o={formatType:n.formatter||"NumberFormat",options:null}),o}function l(e,t,i){return[n.isString(e)?e.split(""):e,t||r.global,n.isString(i)?new Function("item","index","array",i):i]}function c(e){return void 0!==e&&null!==e}function m(e){return c(e)?e:""}function d(r,o,u,s){var l,d=u.match(/([^\(]+)(\([^\)]+\))?/i),p=n.trim(d[1]),h=d[2]?n.trim(d[2]):null,y=o[r],j=s||(h?t.fromJson(h.replace(/^\(/,"({").replace(/\)$/,"})")):{}),O=j.utcOffset;if(-1===e.indexOf(b,p)){var T=n.getObject(p);n.isFunction(T)&&(y=T(y,r,o,j))}else if(typeof y===v||typeof y===g&&y&&!isNaN(Number(y)))switch(y=Number(y),p){case"NumberFormat":return a.format(y,j);case"DateString":return l=new Date(y),j.local||j.systemLocale?j.systemLocale?l.toLocaleDateString()+(j.hideTime?"":" "+l.toLocaleTimeString()):l.toDateString()+(j.hideTime?"":" "+l.toTimeString()):(l=l.toUTCString(),j.hideTime&&(l=l.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,"")),l);case"DateFormat":return l=new Date(y),c(O)&&(l=i.add(l,"minute",l.getTimezoneOffset()-O)),f.format(l,j)}return m(y)}function p(e,t){var r;if(t)for(r in e)e.hasOwnProperty(r)&&(void 0===e[r]?delete e[r]:e[r]instanceof Object&&p(e[r],!0));else for(r in e)e.hasOwnProperty(r)&&void 0===e[r]&&delete e[r];return e}var g="string",v="number",b=["NumberFormat","DateString","DateFormat"],h=/<\/?[^>]+>/g,y={valueOf:function(e,t){var r;for(r in e)if(e[r]==t)return r;return null},stripTags:function(e){if(e){var t=typeof e;if(t===g)e=e.replace(h,"");else if("object"===t)for(var r in e){var n=e[r];n&&typeof n===g&&(n=n.replace(h,"")),e[r]=n}}return e},substitute:function(e,t,r){var i,o,a,f;if(c(r)&&(n.isObject(r)?(i=r.first,o=r.dateFormat,a=r.numberFormat,f=r.format):i=r),t&&"${*}"!==t)return n.replace(t,n.hitch({obj:e},function(e,t){var r,n=t.split(":");if(n.length>1){t=n[0],n.shift(),r=f&&f[n[0]];var i,u;return r?(i=r.formatType,u=r):(i=n.join(":"),u=null),d(t,this.obj,i,u)}return(r=s(t,f,a,o))?d(t,this.obj,r.formatType,r.options):m(this.obj[t])}),/\$\{([^\}]+)\}/g);var u,l=[];for(u in e){var p=s(u,f,a,o),g=p?d(u,e,p.formatType,p.options):e[u];if(l.push(u+" = "+m(g)+"<br/>"),i)break}return l.join("")},filter:function(e,t,r){var n,i=l(e,r,t),o={};e=i[0];for(n in e)i[2].call(i[n],e[n],n,e)&&(o[n]=e[n]);return o},startsWith:function(e,t,r){return r=r||0,e.indexOf(t,r)===r},endsWith:function(e,t,r){(typeof r!==v||!isFinite(r)||Math.floor(r)!==r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},isDefined:c,fixJson:p,isObject:function(e){return e&&"object"==typeof e},isString:function(e){return typeof e===g},mixin:function(e,t){var r;for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},clone2DArray:function(e){var t=e?e.slice(0):null;if(t){var r,n=t.length;for(r=0;r<n;r++)t[r]=t[r]?t[r].slice(0):null}return t},clone3DArray:function(e){var t=e?e.slice(0):null;if(t){var r,n=t.length;for(r=0;r<n;r++){t[r]=t[r]?t[r].slice(0):null;var i=t[r];if(i){var o,a=i.length;for(o=0;o<a;o++)i[o]=i[o]?i[o].slice(0):null}}}return t}};return o("extend-esri")&&(n.mixin(u,y),u._isDefined=c,u._getParts=l,u._sanitize=p),y});