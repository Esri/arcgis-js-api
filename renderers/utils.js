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

define(["dojo/_base/lang","dojo/_base/array","dojo/has","dojo/date/locale","../kernel","../numberUtils","../Color","dojo/i18n!../nls/jsapi","dojo/i18n!dojo/cldr/nls/gregorian"],function(e,t,n,a,o,i,r,s,l){function u(e){return e&&t.map(e,function(e){return new r(e)})}function m(e,t,n){var a="";return 0===t?a=d.lt+" ":t===n&&(a=d.gt+" "),a+e}var c={},d={lte:"<=",gte:">=",lt:"<",gt:">",pct:"%"},p={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},f="dateTimeFormat-medium",g={millisecond:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"medium"}},second:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"medium"}},minute:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"short"}},hour:{dateOptions:{formatLength:"long"},timeOptions:{formatLength:"short"}},day:{selector:"date",dateOptions:{formatLength:"long"}},month:{selector:"date",dateOptions:{formatLength:"long"}},year:{selector:"date",dateOptions:{selector:"year"}}},h={dateOptions:{formatLength:"short",fullYear:!0},timeOptions:{formatLength:"short"}};return e.mixin(c,{timelineDateFormatOptions:{selector:"date",dateOptions:{formatLength:"short",fullYear:!0}},formatDate:function(n,o){var i,r=[];null==n||n instanceof Date||(n=new Date(n)),o=o||{},o=e.mixin({},o);var s=o.selector?o.selector.toLowerCase():null,u=!s||s.indexOf("time")>-1,m=!s||s.indexOf("date")>-1;return u&&(o.timeOptions=o.timeOptions||h.timeOptions,o.timeOptions&&(o.timeOptions=e.mixin({},o.timeOptions),o.timeOptions.selector=o.timeOptions.selector||"time",r.push(o.timeOptions))),m&&(o.dateOptions=o.dateOptions||h.dateOptions,o.dateOptions&&(o.dateOptions=e.mixin({},o.dateOptions),o.dateOptions.selector=o.dateOptions.selector||"date",r.push(o.dateOptions))),r&&r.length?(r=t.map(r,function(e){return a.format(n,e)}),i=1==r.length?r[0]:l[f].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(e,t){return r[t]})):i=a.format(n),i},createColorStops:function(e){var n=e.values,a=e.colors,o=e.labelIndexes,r=e.isDate,s=e.dateFormatOptions,l=[];return l=t.map(n,function(e,l){var u=!o||t.indexOf(o,l)>-1,d=null;if(u){var p;p=r?c.formatDate(e,s):i.format(e),p&&(d=m(p,l,n.length-1))}return{value:e,color:a[l],label:d}})},updateColorStops:function(e){var n,a=e.stops,o=e.changes,r=e.isDate,s=e.dateFormatOptions,l=[],u=t.map(a,function(e){return e.value});t.forEach(o,function(e){l.push(e.index),u[e.index]=e.value}),n=i.round(u,{indexes:l}),t.forEach(a,function(e,t){if(e.value=u[t],null!=e.label){var o,l=null;o=r?c.formatDate(n[t],s):i.format(n[t]),o&&(l=m(o,t,a.length-1)),e.label=l}})},createClassBreakLabel:function(e){var t=e.minValue,n=e.maxValue,a=e.isFirstBreak,o=e.normalizationType,r=a?"":d.gt+" ",l="percent-of-total"===o?d.pct:"";return t=null==t?"":i.format(t),n=null==n?"":i.format(n),r+t+l+" "+s.smartMapping.minToMax+" "+n+l},setLabelsForClassBreaks:function(e){var n=e.classBreaks,a=e.classificationMethod,o=e.normalizationType,r=[];n&&n.length&&("standard-deviation"===a?console.log("setLabelsForClassBreaks: cannot set labels for class breaks generated using 'standard-deviation' method."):e.round?(r.push(n[0].minValue),t.forEach(n,function(e){r.push(e.maxValue)}),r=i.round(r),t.forEach(n,function(e,t){e.label=c.createClassBreakLabel({minValue:0===t?r[0]:r[t],maxValue:r[t+1],isFirstBreak:0===t,normalizationType:o})})):t.forEach(n,function(e,t){e.label=c.createClassBreakLabel({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===t,normalizationType:o})}))},updateClassBreak:function(e){var t,n=e.classBreaks,a=e.classificationMethod,o=e.normalizationType,i=e.change,r=i.index,s=i.value,l=-1,u=-1,m=n.length;return"standard-deviation"===a?void console.log("updateClassBreak: cannot update labels for class breaks generated using 'standard-deviation' method."):(0===r?l=r:r===m?u=r-1:(u=r-1,l=r),l>-1&&m>l&&(t=n[l],t.minValue=s,t.label=c.createClassBreakLabel({minValue:t.minValue,maxValue:t.maxValue,isFirstBreak:0===l,normalizationType:o})),void(u>-1&&m>u&&(t=n[u],t.maxValue=s,t.label=c.createClassBreakLabel({minValue:t.minValue,maxValue:t.maxValue,isFirstBreak:0===u,normalizationType:o}))))},calculateDateFormatInterval:function(e){var n,a,o,i,r,s,l,u,m,c,d=e.length,f=1/0;for(e=t.map(e,function(e){return new Date(e)}),n=0;d-1>n;n++){for(o=e[n],r=[],u=1/0,m="",a=n+1;d>a;a++)i=e[a],s=o.getFullYear()!==i.getFullYear()&&"year"||o.getMonth()!==i.getMonth()&&"month"||o.getDate()!==i.getDate()&&"day"||o.getHours()!==i.getHours()&&"hour"||o.getMinutes()!==i.getMinutes()&&"minute"||o.getSeconds()!==i.getSeconds()&&"second"||"millisecond",l=p[s],u>l&&(u=l,m=s),r.push(s);f>u&&(f=u,c=m)}return c},createUniqueValueLabel:function(e){var t=e.value,n=e.fieldInfo,a=e.domain,o=e.dateFormatInterval,r=String(t),s=a&&a.codedValues?a.getName(t):null;return s?r=s:"number"==typeof t&&(r=n&&"esriFieldTypeDate"===n.type?c.formatDate(t,o&&g[o]):i.format(t)),r},cloneColorInfo:function(n){var a;return n&&(a=e.mixin({},n),a.colors=u(a.colors),a.stops=a.stops&&t.map(a.stops,function(t){return t=e.mixin({},t),t.color&&(t.color=new r(t.color)),t}),a.legendOptions&&(a.legendOptions=e.mixin({},a.legendOptions))),a},cloneOpacityInfo:function(n){var a;if(n){a=e.mixin({},n);var o=a.opacityValues;o&&(a.opacityValues=o.slice(0)),o=a.stops,o&&(a.stops=t.map(o,function(t){return e.mixin({},t)})),o=a.legendOptions,o&&(a.legendOptions=e.mixin({},o))}return a},cloneSizeInfo:function(n){var a;if(n){a=e.mixin({},n),a.stops&&(a.stops=t.map(a.stops,function(t){return e.mixin({},t)}));var o=a.minSize;o&&"object"==typeof o&&(a.minSize=c.cloneSizeInfo(o)),o=a.maxSize,o&&"object"==typeof o&&(a.maxSize=c.cloneSizeInfo(o)),o=a.legendOptions,o&&(a.legendOptions=e.mixin({},o),o=o.customValues,o&&(a.legendOptions.customValues=o.slice(0)))}return a}}),n("extend-esri")&&e.setObject("renderer.utils",c,o),c});