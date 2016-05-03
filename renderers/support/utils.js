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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/date/locale","../../core/numberUtils","dojo/i18n!../nls/smartMapping","dojo/i18n!dojo/cldr/nls/gregorian"],function(e,a,t,n,o,r){var l={},i={lte:"<=",gte:">=",lt:"<",gt:">",pct:"%"},s={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},u="dateTimeFormat-medium",m={millisecond:[{formatLength:"long",selector:"date"},{formatLength:"medium",selector:"time"}],second:[{formatLength:"long",selector:"date"},{formatLength:"medium",selector:"time"}],minute:[{formatLength:"long",selector:"date"},{formatLength:"short",selector:"time"}],hour:[{formatLength:"long",selector:"date"},{formatLength:"short",selector:"time"}],day:[{formatLength:"long",selector:"date"}],month:[{formatLength:"long",selector:"date"}],year:[{selector:"year"}]};return e.mixin(l,{createColorStops:function(e){var t=e.values,o=e.colors,r=e.labelIndexes,l=[];return l=a.map(t,function(e,l){var s="";return 0===l?s=i.lt+" ":l===t.length-1&&(s=i.gt+" "),{value:e,color:o[l],label:!r||a.indexOf(r,l)>-1?s+n.format(e):null}})},updateColorStops:function(e){var t,o=e.stops,r=e.changes,l=[],s=a.map(o,function(e){return e.value});a.forEach(r,function(e){l.push(e.index),s[e.index]=e.value}),t=n.round(s,{indexes:l}),a.forEach(o,function(e,a){e.value=s[a];var r="";0===a?r=i.lt+" ":a===o.length-1&&(r=i.gt+" "),e.label=null!=e.label?r+n.format(t[a]):null})},createClassBreakLabel:function(e){var a=e.minValue,t=e.maxValue,r=e.isFirstBreak,l=e.normalizationType,s=r?"":i.gt+" ",u="percent-of-total"===l?i.pct:"";return a=null==a?"":n.format(a),t=null==t?"":n.format(t),s+a+u+" "+o.minToMax+" "+t+u},setLabelsForClassBreaks:function(e){var t=e.classBreaks,o=e.classificationMethod,r=e.normalizationType,i=[];t&&t.length&&("standard-deviation"===o?console.log("setLabelsForClassBreaks: cannot set labels for class breaks generated using 'standard-deviation' method."):e.round?(i.push(t[0].minValue),a.forEach(t,function(e){i.push(e.maxValue)}),i=n.round(i),a.forEach(t,function(e,a){e.label=l.createClassBreakLabel({minValue:0===a?i[0]:i[a],maxValue:i[a+1],isFirstBreak:0===a,normalizationType:r})})):a.forEach(t,function(e,a){e.label=l.createClassBreakLabel({minValue:e.minValue,maxValue:e.maxValue,isFirstBreak:0===a,normalizationType:r})}))},updateClassBreak:function(e){var a,t=e.classBreaks,n=e.classificationMethod,o=e.normalizationType,r=e.change,i=r.index,s=r.value,u=-1,m=-1,c=t.length;return"standard-deviation"===n?void console.log("updateClassBreak: cannot update labels for class breaks generated using 'standard-deviation' method."):(0===i?u=i:i===c?m=i-1:(m=i-1,u=i),u>-1&&c>u&&(a=t[u],a.minValue=s,a.label=l.createClassBreakLabel({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===u,normalizationType:o})),void(m>-1&&c>m&&(a=t[m],a.maxValue=s,a.label=l.createClassBreakLabel({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===m,normalizationType:o}))))},calculateDateFormatInterval:function(e){var t,n,o,r,l,i,u,m,c,d,f=e.length,g=1/0;for(e=a.map(e,function(e){return new Date(e)}),t=0;f-1>t;t++){for(o=e[t],l=[],m=1/0,c="",n=t+1;f>n;n++)r=e[n],i=o.getFullYear()!==r.getFullYear()&&"year"||o.getMonth()!==r.getMonth()&&"month"||o.getDate()!==r.getDate()&&"day"||o.getHours()!==r.getHours()&&"hour"||o.getMinutes()!==r.getMinutes()&&"minute"||o.getSeconds()!==r.getSeconds()&&"second"||"millisecond",u=s[i],m>u&&(m=u,c=i),l.push(i);g>m&&(g=m,d=c)}return d},createUniqueValueLabel:function(e){var o=e.value,l=e.fieldInfo,i=e.domain,s=e.dateFormatInterval,c=String(o),d=i&&i.codedValues?i.getName(o):null;if(d)c=d;else if("number"==typeof o)if("date"===l.type){var f=new Date(o);if(s&&m[s]){var g=a.map(m[s],function(e){return t.format(f,e)}).reverse();c=1==g.length?g[0]:r[u].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(e,a){return g[a]})}else c=t.format(f)}else c=n.format(o);return c}}),l});