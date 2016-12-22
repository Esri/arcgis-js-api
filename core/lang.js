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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/kernel","dojo/_base/lang","dojo/date","dojo/number","dojo/date/locale","dojo/i18n!../nls/common"],function(e,t,r,n,i,o,a){function s(e,n,i){return[r.isString(e)?e.split(""):e,n||t.global,r.isString(i)?new Function("item","index","array",i):i]}function u(e){return void 0!==e&&null!==e}function f(e){return u(e)?e:""}function c(t,a,s){var c,l=s.match(/([^\(]+)(\([^\)]+\))?/i),m=r.trim(l[1]),d=a[t],b=JSON.parse((l[2]?r.trim(l[2]):"{}").replace(/^\(/,"{").replace(/\)$/,"}").replace(/([{,])\s*([0-9a-zA-Z\_]+)\s*:/gi,'$1"$2":').replace(/\"\s*:\s*\'/gi,'":"').replace(/\'\s*(,|\})/gi,'"$1')),g=b.utcOffset;if(-1===e.indexOf(p,m)){var h=r.getObject(m);r.isFunction(h)&&(d=h(d,t,a,b))}else if("number"==typeof d||"string"==typeof d&&d&&!isNaN(Number(d)))switch(d=Number(d),m){case"NumberFormat":var v=r.mixin({},b),y=parseFloat(v.places);return(isNaN(y)||0>y)&&(v.places=1/0),i.format(d,v);case"DateString":return c=new Date(d),b.local||b.systemLocale?b.systemLocale?c.toLocaleDateString()+(b.hideTime?"":" "+c.toLocaleTimeString()):c.toDateString()+(b.hideTime?"":" "+c.toTimeString()):(c=c.toUTCString(),b.hideTime&&(c=c.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,"")),c);case"DateFormat":return c=new Date(d),u(g)&&(c=n.add(c,"minute",c.getTimezoneOffset()-g)),o.format(c,b)}return f(d)}function l(e,t){var r;if(t)for(r in e)e.hasOwnProperty(r)&&(void 0===e[r]?delete e[r]:e[r]instanceof Object&&l(e[r],!0));else for(r in e)e.hasOwnProperty(r)&&void 0===e[r]&&delete e[r];return e}function m(e){function t(e,t,r){var n,i,o={};for(n in t){i=t[n];var a=!(n in o)||o[n]!==i;(!(n in e)||e[n]!==i&&a)&&(e[n]=r?r(i):i)}return e}if(!e||"object"!=typeof e||r.isFunction(e))return e;var n;return n="function"==typeof e.clone?e.clone():"function"==typeof e.map&&"function"==typeof e.forEach?e.map(m):t({},e,m)}var d="{*}",p=["NumberFormat","DateString","DateFormat"],b=/<\/?[^>]+>/g,g={equals:function(e,t){var n=e===t||"number"==typeof e&&isNaN(e)&&"number"==typeof t&&isNaN(t)||r.isFunction((e||{}).getTime)&&r.isFunction((t||{}).getTime)&&e.getTime()==t.getTime()||r.isFunction((e||{}).equals)&&e.equals(t)||r.isFunction((t||{}).equals)&&t.equals(e)||!1;return n},valueOf:function(e,t){var r;for(r in e)if(e[r]==t)return r;return null},stripTags:function(e){if(e){var t=typeof e;if("string"===t)e=e.replace(b,"");else if("object"===t){var r;for(r in e){var n=e[r];n&&"string"==typeof n&&(n=n.replace(b,"")),e[r]=n}}}return e},substitute:function(t,n,i){var o,s,l;if(u(i)&&(r.isObject(i)?(o=i.first,s=i.dateFormat,l=i.numberFormat):o=i),n&&n!==d)return r.replace(n,r.hitch({obj:t},function(t,r){var n=r.split(":");return n.length>1?(r=n[0],n.shift(),c(r,this.obj,n.join(":"))):s&&-1!==e.indexOf(s.properties||"",r)?c(r,this.obj,s.formatter||"DateString"):l&&-1!==e.indexOf(l.properties||"",r)?c(r,this.obj,l.formatter||"NumberFormat"):f(this.obj[r])}));var m,p,b=[];b.push('<table summary="'+a.fieldsSummary+'"><tbody>');for(p in t)if(m=t[p],s&&-1!==e.indexOf(s.properties||"",p)?m=c(p,t,s.formatter||"DateString"):l&&-1!==e.indexOf(l.properties||"",p)&&(m=c(p,t,l.formatter||"NumberFormat")),b.push("<tr><th>"+p+"</th><td>"+f(m)+"</td></tr>"),o)break;return b.push("</tbody></table>"),b.join("")},filter:function(e,t,r){var n,i=s(e,r,t),o={};e=i[0];for(n in e)i[2].call(i[n],e[n],n,e)&&(o[n]=e[n]);return o},startsWith:function(e,t,r){return r=r||0,e.indexOf(t,r)===r},endsWith:function(e,t,r){("number"!=typeof r||!isFinite(r)||Math.floor(r)!==r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},isDefined:u,fixJson:l,clone:m};return g});