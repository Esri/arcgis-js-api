// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","dojo/date/locale","../kernel","../numberUtils","dojo/i18n!../nls/jsapi","dojo/i18n!dojo/cldr/nls/gregorian"],function(e,a,t,n,r,l,o,i){var s={},u={lte:"<=",gte:">=",lt:"<",gt:">",pct:"%"},m={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},c="dateTimeFormat-medium",d={millisecond:[{formatLength:"long",selector:"date"},{formatLength:"medium",selector:"time"}],second:[{formatLength:"long",selector:"date"},{formatLength:"medium",selector:"time"}],minute:[{formatLength:"long",selector:"date"},{formatLength:"short",selector:"time"}],hour:[{formatLength:"long",selector:"date"},{formatLength:"short",selector:"time"}],day:[{formatLength:"long",selector:"date"}],month:[{formatLength:"long",selector:"date"}],year:[{selector:"year"}]};return e.mixin(s,{createColorStops:function(e){var t=e.values,n=e.colors,r=e.labelIndexes,o=[];return o=a.map(t,function(e,o){var i="";return 0===o?i=u.lt+" ":o===t.length-1&&(i=u.gt+" "),{value:e,color:n[o],label:!r||a.indexOf(r,o)>-1?i+l.format(e):null}})},updateColorStops:function(e){var t,n=e.stops,r=e.changes,o=[],i=a.map(n,function(e){return e.value});a.forEach(r,function(e){o.push(e.index),i[e.index]=e.value}),t=l.round(i,{indexes:o}),a.forEach(n,function(e,a){e.value=i[a];var r="";0===a?r=u.lt+" ":a===n.length-1&&(r=u.gt+" "),e.label=null!=e.label?r+l.format(t[a]):null})},createClassBreakLabel:function(e){var a=e.minValue,t=e.maxValue,n=e.isFirstBreak,r=e.normalizationType,i=n?"":u.gt+" ",s="percent-of-total"===r?u.pct:"";return a=null==a?"":l.format(a),t=null==t?"":l.format(t),i+a+s+" "+o.smartMapping.minToMax+" "+t+s},setLabelsForClassBreaks:function(e){var t=e.classBreaks,n=e.classificationMethod,r=e.normalizationType,o=[];t&&t.length&&("standard-deviation"===n?console.log("setLabelsForClassBreaks: cannot set labels for class breaks generated using 'standard-deviation' method."):e.round?(o.push(t[0].minValue),a.forEach(t,function(e){o.push(e.maxValue)}),o=l.round(o),a.forEach(t,function(e,a){e.label=s.createClassBreakLabel({minValue:0===a?o[0]:o[a],maxValue:o[a+1],isFirstBreak:0===a,normalizationType:r})})):a.forEach(t,function(e,a){e.label=s.createClassBreakLabel({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===a,normalizationType:r})}))},updateClassBreak:function(e){var a,t=e.classBreaks,n=e.classificationMethod,r=e.normalizationType,l=e.change,o=l.index,i=l.value,u=-1,m=-1,c=t.length;return"standard-deviation"===n?void console.log("updateClassBreak: cannot update labels for class breaks generated using 'standard-deviation' method."):(0===o?u=o:o===c?m=o-1:(m=o-1,u=o),u>-1&&c>u&&(a=t[u],a.minValue=i,a.label=s.createClassBreakLabel({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===u,normalizationType:r})),void(m>-1&&c>m&&(a=t[m],a.maxValue=i,a.label=s.createClassBreakLabel({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===m,normalizationType:r}))))},calculateDateFormatInterval:function(e){var t,n,r,l,o,i,s,u,c,d,f=e.length,g=1/0;for(e=a.map(e,function(e){return new Date(e)}),t=0;f-1>t;t++){for(r=e[t],o=[],u=1/0,c="",n=t+1;f>n;n++)l=e[n],i=r.getFullYear()!==l.getFullYear()&&"year"||r.getMonth()!==l.getMonth()&&"month"||r.getDate()!==l.getDate()&&"day"||r.getHours()!==l.getHours()&&"hour"||r.getMinutes()!==l.getMinutes()&&"minute"||r.getSeconds()!==l.getSeconds()&&"second"||"millisecond",s=m[i],u>s&&(u=s,c=i),o.push(i);g>u&&(g=u,d=c)}return d},createUniqueValueLabel:function(e){var t=e.value,r=e.fieldInfo,o=e.domain,s=e.dateFormatInterval,u=String(t),m=o&&o.codedValues?o.getName(t):null;if(m)u=m;else if("number"==typeof t)if("esriFieldTypeDate"===r.type){var f=new Date(t);if(s&&d[s]){var g=a.map(d[s],function(e){return n.format(f,e)}).reverse();u=1==g.length?g[0]:i[c].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(e,a){return g[a]})}else u=n.format(f)}else u=l.format(t);return u}}),t("extend-esri")&&e.setObject("renderer.utils",s,r),s});