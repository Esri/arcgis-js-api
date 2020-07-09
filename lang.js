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

define(["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/has","dojo/number","dojo/date/locale","./kernel"],(function(e,t,r,n,i,o,a,f,u){var s=["NumberFormat","DateString","DateFormat"],l=/<\/?[^>]+>/g;function c(t,r,n,i){var o=r&&r[t];return o?o={formatType:o.formatType,options:o}:i&&-1!==e.indexOf(i.properties||"",t)?o={formatType:i.formatter||"DateString",options:null}:n&&-1!==e.indexOf(n.properties||"",t)&&(o={formatType:n.formatter||"NumberFormat",options:null}),o}function m(e,t,i){return[n.isString(e)?e.split(""):e,t||r.global,n.isString(i)?new Function("item","index","array",i):i]}function d(e){return null!=e}function p(e){return d(e)?e:""}function g(r,o,u,l){var c,m=u.match(/([^\(]+)(\([^\)]+\))?/i),g=n.trim(m[1]),b=m[2]?n.trim(m[2]):null,h=o[r],v=l||(b?t.fromJson(b.replace(/^\(/,"({").replace(/\)$/,"})")):{}),y=v.utcOffset;if(-1===e.indexOf(s,g)){var j=n.getObject(g);n.isFunction(j)&&(h=j(h,r,o,v))}else if("number"==typeof h||"string"==typeof h&&h&&!isNaN(Number(h)))switch(h=Number(h),g){case"NumberFormat":return a.format(h,v);case"DateString":return c=new Date(h),v.local||v.systemLocale?v.systemLocale?c.toLocaleDateString()+(v.hideTime?"":" "+c.toLocaleTimeString()):c.toDateString()+(v.hideTime?"":" "+c.toTimeString()):(c=c.toUTCString(),v.hideTime&&(c=c.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,"")),c);case"DateFormat":return c=new Date(h),d(y)&&(c=i.add(c,"minute",c.getTimezoneOffset()-y)),f.format(c,v)}return p(h)}function b(e,t){var r;if(t)for(r in e)e.hasOwnProperty(r)&&(void 0===e[r]?delete e[r]:e[r]instanceof Object&&b(e[r],!0));else for(r in e)e.hasOwnProperty(r)&&void 0===e[r]&&delete e[r];return e}var h={valueOf:function(e,t){var r;for(r in e)if(e[r]==t)return r;return null},stripTags:function(e){if(e){var t=typeof e;if("string"===t)e=e.replace(l,"");else if("object"===t)for(var r in e){var n=e[r];n&&"string"==typeof n&&(n=n.replace(l,"")),e[r]=n}}return e},substitute:function(e,t,r){var i,o,a,f;if(d(r)&&(n.isObject(r)?(i=r.first,o=r.dateFormat,a=r.numberFormat,f=r.format):i=r),t&&"${*}"!==t)return n.replace(t,n.hitch({obj:e},(function(e,t){var r,n,i,u=t.split(":");return u.length>1?(t=u[0],u.shift(),(r=f&&f[u[0]])?(n=r.formatType,i=r):(n=u.join(":"),i=null),g(t,this.obj,n,i)):(r=c(t,f,a,o))?g(t,this.obj,r.formatType,r.options):p(this.obj[t])})),/\$\{([^\}]+)\}/g);var u,s=[];for(u in e){var l=c(u,f,a,o),m=l?g(u,e,l.formatType,l.options):e[u];if(s.push(u+" = "+p(m)+"<br/>"),i)break}return s.join("")},filter:function(e,t,r){var n,i=m(e,r,t),o={};for(n in e=i[0])i[2].call(i[n],e[n],n,e)&&(o[n]=e[n]);return o},startsWith:function(e,t,r){return r=r||0,e.indexOf(t,r)===r},endsWith:function(e,t,r){("number"!=typeof r||!isFinite(r)||Math.floor(r)!==r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},isDefined:d,fixJson:b,isObject:function(e){return e&&"object"==typeof e},isString:function(e){return"string"==typeof e},mixin:function(e,t){var r;for(r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},clone2DArray:function(e){var t=e?e.slice(0):null;if(t){var r,n=t.length;for(r=0;r<n;r++)t[r]=t[r]?t[r].slice(0):null}return t},clone3DArray:function(e){var t=e?e.slice(0):null;if(t){var r,n=t.length;for(r=0;r<n;r++){t[r]=t[r]?t[r].slice(0):null;var i=t[r];if(i){var o,a=i.length;for(o=0;o<a;o++)i[o]=i[o]?i[o].slice(0):null}}}return t}};return o("extend-esri")&&(n.mixin(u,h),u._isDefined=d,u._getParts=m,u._sanitize=b),h}));