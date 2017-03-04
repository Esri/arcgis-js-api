// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/has","dojo/number","dojo/date/locale","./kernel"],function(e,t,r,i,n,o,a,f,s){function u(e,t,n){return[i.isString(e)?e.split(""):e,t||r.global,i.isString(n)?new Function("item","index","array",n):n]}function c(e){return void 0!==e&&null!==e}function d(e){return c(e)?e:""}function m(r,o,s){var u,m=s.match(/([^\(]+)(\([^\)]+\))?/i),l=i.trim(m[1]),b=o[r],p=t.fromJson((m[2]?i.trim(m[2]):"()").replace(/^\(/,"({").replace(/\)$/,"})")),h=p.utcOffset;if(-1===e.indexOf(g,l)){var j=i.getObject(l);i.isFunction(j)&&(b=j(b,r,o,p))}else if("number"==typeof b||"string"==typeof b&&b&&!isNaN(Number(b)))switch(b=Number(b),l){case"NumberFormat":return a.format(b,p);case"DateString":return u=new Date(b),p.local||p.systemLocale?p.systemLocale?u.toLocaleDateString()+(p.hideTime?"":" "+u.toLocaleTimeString()):u.toDateString()+(p.hideTime?"":" "+u.toTimeString()):(u=u.toUTCString(),p.hideTime&&(u=u.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,"")),u);case"DateFormat":return u=new Date(b),c(h)&&(u=n.add(u,"minute",u.getTimezoneOffset()-h)),f.format(u,p)}return d(b)}function l(e,t){var r;if(t)for(r in e)e.hasOwnProperty(r)&&(void 0===e[r]?delete e[r]:e[r]instanceof Object&&l(e[r],!0));else for(r in e)e.hasOwnProperty(r)&&void 0===e[r]&&delete e[r];return e}var b="${*}",g=["NumberFormat","DateString","DateFormat"],p=/<\/?[^>]+>/g,h={valueOf:function(e,t){var r;for(r in e)if(e[r]==t)return r;return null},stripTags:function(e){if(e){var t=typeof e;if("string"===t)e=e.replace(p,"");else if("object"===t)for(var r in e){var i=e[r];i&&"string"==typeof i&&(i=i.replace(p,"")),e[r]=i}}return e},substitute:function(t,r,n){var o,a,f;if(c(n)&&(i.isObject(n)?(o=n.first,a=n.dateFormat,f=n.numberFormat):o=n),r&&r!==b)return i.replace(r,i.hitch({obj:t},function(t,r){var i=r.split(":");return i.length>1?(r=i[0],i.shift(),m(r,this.obj,i.join(":"))):a&&-1!==e.indexOf(a.properties||"",r)?m(r,this.obj,a.formatter||"DateString"):f&&-1!==e.indexOf(f.properties||"",r)?m(r,this.obj,f.formatter||"NumberFormat"):d(this.obj[r])}),/\$\{([^\}]+)\}/g);var s,u,l=[];for(u in t)if(s=t[u],a&&-1!==e.indexOf(a.properties||"",u)?s=m(u,t,a.formatter||"DateString"):f&&-1!==e.indexOf(f.properties||"",u)&&(s=m(u,t,f.formatter||"NumberFormat")),l.push(u+" = "+d(s)+"<br/>"),o)break;return l.join("")},filter:function(e,t,r){var i,n=u(e,r,t),o={};e=n[0];for(i in e)n[2].call(n[i],e[i],i,e)&&(o[i]=e[i]);return o},startsWith:function(e,t,r){return r=r||0,e.indexOf(t,r)===r},endsWith:function(e,t,r){("number"!=typeof r||!isFinite(r)||Math.floor(r)!==r||r>e.length)&&(r=e.length),r-=t.length;var i=e.indexOf(t,r);return-1!==i&&i===r},isDefined:c,fixJson:l};return o("extend-esri")&&(i.mixin(s,h),s._isDefined=c,s._getParts=u,s._sanitize=l),h});