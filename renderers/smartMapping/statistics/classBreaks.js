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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","dojo/Deferred","../../../tasks/support/GenerateRendererParameters","../../../tasks/GenerateRendererTask","./support/utils"],function(e,a,r,n,i,l,t){function s(e,a,r){var n=new l({url:a.parsedUrl.path,gdbVersion:a.gdbVersion});n.execute(r).then(function(a){e.resolve(a)}).otherwise(function(a){e.reject(t.createError("classBreaks","Generate renderer operation failed."))})}function o(e,a){var r=e.layer,l=new n;if(r.url&&r.version>=10.1){var o=t.createCBDefn(e,a),u=t.getGRWhereInfo(e).where,c=t.getFieldExpr(e,e.normalizationTotal),d=t.getRangeExpr(c,e.minValue,e.maxValue),m=new i;m.classificationDefinition=o,m.where=u?u+(d?" AND "+d:""):d,r.then(function(){s(l,r,m)})}else l.reject(t.createError("classBreaks","Generate renderer operation requires server version 10.1 or later."));return l.promise}function u(e,a,n){var i=n.classBreakInfos,l=i.length,t=i[0].minValue,s=i[l-1].maxValue,o="standard-deviation"===a.classificationMethod,u=v;i=i.map(function(e){var a=e.label,n={minValue:e.minValue,maxValue:e.maxValue,label:a};if(o&&a){var i=a.match(u),l=i.map(function(e){return+r.trim(e)});2===l.length?(n.minStdDev=l[0],n.maxStdDev=l[1],l[0]<0&&l[1]>0&&(n.hasAvg=!0)):1===l.length&&(a.indexOf("<")>-1?(n.minStdDev=null,n.maxStdDev=l[0]):a.indexOf(">")>-1&&(n.minStdDev=l[0],n.maxStdDev=null))}return n}),e.resolve({minValue:t,maxValue:s,classBreakInfos:i,normalizationTotal:n.normalizationTotal})}function c(e,a){var r=new n,i=e.minValue,l=e.maxValue;if(i>=l||!a||1>a)r.reject(t.createError("classBreaks","invalid input parameters: minValue, maxValue or numClasses."));else{for(var s=[],o=(l-i)/a,u=0;a>u;u++){var c=i+u*o;s.push({minValue:c,maxValue:c+o})}s[a-1].maxValue=l,r.resolve({classBreakInfos:s,normalizationTotal:e.normalizationTotal})}return r.promise}function d(e,a){var r=a.layer,n=a.field,i=a.minValue,l=a.maxValue,s=null!=i||null!=l,d=a.classificationMethod,m="percent-of-total"===a.normalizationType,v=a.numClasses||f,V=a.analyzeData!==!1,h=r.getField(n);if(!t.verifyNumericField(e,r,h,"classBreaks")){if(s)if(V){if(m&&null==a.normalizationTotal)return void e.reject(t.createError("classBreaks","normalizationTotal is required when minValue/maxValue are specified."))}else{if(null==i||null==l)return void e.reject(t.createError("classBreaks","both minValue AND maxValue are required when data analysis is disabled."));if(d&&"equal-interval"!==d)return void e.reject(t.createError("classBreaks","data analysis can be disabled only for equal-interval classification."));if(m&&null==a.normalizationTotal)return void e.reject(t.createError("classBreaks","normalizationTotal is required when data analysis is disabled."))}else if(!V)return void e.reject(t.createError("classBreaks","both minValue AND maxValue are required when data analysis is disabled."));V?o(a,v).then(function(r){u(e,a,r)}).otherwise(function(a){e.reject(t.createError("classBreaks","unable to calculate class breaks."))}):c(a,v).then(function(r){u(e,a,r)}).otherwise(function(a){e.reject(t.createError("classBreaks","unable to calculate class breaks."))})}}function m(e){var a=new n;return e&&e.layer&&e.field?e.layer.then(function(){d(a,e)}):a.reject(t.createError("classBreaks","'layer' and 'field' parameters are required.")),a.promise}var f=5,v=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi;return m});