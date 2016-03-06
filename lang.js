// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/has","dojo/number","dojo/date/locale","./kernel"],function(e,t,r,i,n,o,a,s,f){function u(e,t,n){return[i.isString(e)?e.split(""):e,t||r.global,i.isString(n)?new Function("item","index","array",n):n]}function c(e){return void 0!==e&&null!==e}function m(e){return c(e)?e:""}function d(r,o,f){var u,d=f.match(/([^\(]+)(\([^\)]+\))?/i),l=i.trim(d[1]),b=o[r],p=t.fromJson((d[2]?i.trim(d[2]):"()").replace(/^\(/,"({").replace(/\)$/,"})")),j=p.utcOffset;if(-1===e.indexOf(g,l)){var h=i.getObject(l);i.isFunction(h)&&(b=h(b,r,o,p))}else if("number"==typeof b||"string"==typeof b&&b&&!isNaN(Number(b)))switch(b=Number(b),l){case"NumberFormat":return a.format(b,p);case"DateString":return u=new Date(b),p.local||p.systemLocale?p.systemLocale?u.toLocaleDateString()+(p.hideTime?"":" "+u.toLocaleTimeString()):u.toDateString()+(p.hideTime?"":" "+u.toTimeString()):(u=u.toUTCString(),p.hideTime&&(u=u.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,"")),u);case"DateFormat":return u=new Date(b),c(j)&&(u=n.add(u,"minute",u.getTimezoneOffset()-j)),s.format(u,p)}return m(b)}function l(e,t){var r;if(t)for(r in e)e.hasOwnProperty(r)&&(void 0===e[r]?delete e[r]:e[r]instanceof Object&&l(e[r],!0));else for(r in e)e.hasOwnProperty(r)&&void 0===e[r]&&delete e[r];return e}var b="${*}",g=["NumberFormat","DateString","DateFormat"],p=/<\/?[^>]+>/g,j={valueOf:function(e,t){var r;for(r in e)if(e[r]==t)return r;return null},stripTags:function(e){if(e){var t=typeof e;if("string"===t)e=e.replace(p,"");else if("object"===t)for(var r in e){var i=e[r];i&&"string"==typeof i&&(i=i.replace(p,"")),e[r]=i}}return e},substitute:function(t,r,n){var o,a,s;if(c(n)&&(i.isObject(n)?(o=n.first,a=n.dateFormat,s=n.numberFormat):o=n),r&&r!==b)return i.replace(r,i.hitch({obj:t},function(t,r){var i=r.split(":");return i.length>1?(r=i[0],i.shift(),d(r,this.obj,i.join(":"))):a&&-1!==e.indexOf(a.properties||"",r)?d(r,this.obj,a.formatter||"DateString"):s&&-1!==e.indexOf(s.properties||"",r)?d(r,this.obj,s.formatter||"NumberFormat"):m(this.obj[r])}),/\$\{([^\}]+)\}/g);var f,u,l=[];for(u in t)if(f=t[u],a&&-1!==e.indexOf(a.properties||"",u)?f=d(u,t,a.formatter||"DateString"):s&&-1!==e.indexOf(s.properties||"",u)&&(f=d(u,t,s.formatter||"NumberFormat")),l.push(u+" = "+m(f)+"<br/>"),o)break;return l.join("")},filter:function(e,t,r){var i,n=u(e,r,t),o={};e=n[0];for(i in e)n[2].call(n[i],e[i],i,e)&&(o[i]=e[i]);return o},isDefined:c,fixJson:l};return o("extend-esri")&&(i.mixin(f,j),f._isDefined=c,f._getParts=u,f._sanitize=l),j});