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

define(["require","exports","dojo/_base/lang","../../../core/promiseUtils","../../../tasks/support/GenerateRendererParameters","./support/utils","../support/utils"],function(e,a,r,n,t,i,l){function s(e){if(!(e&&e.layer&&e.field))return n.reject(i.createError("class-breaks:missing-parameters","'layer' and 'field' parameters are required"));var a=r.mixin({},e);return a.normalizationType=i.getNormalizationType(a),a.layer=l.createLayerAdapter(a.layer),a.layer?a.layer.load().then(function(){var e=a.layer,r=a.field,t=a.minValue,s=a.maxValue,o=null!=t||null!=s,u=a.classificationMethod,m="percent-of-total"===a.normalizationType,c=a.analyzeData!==!1,d=r?e.getField(r):null,f=l.getFieldsList({field:a.field,normalizationField:a.normalizationField}),p=i.verifyBasicFieldValidity(e,f,"class-breaks:invalid-parameters");if(p)return n.reject(p);var v=i.verifyNumericField(e,d,"class-breaks:invalid-parameters");if(v)return n.reject(v);if(o)if(c){if(m&&null==a.normalizationTotal)return n.reject(i.createError("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'minValue', 'maxValue' are specified"))}else{if(null==t||null==s)return n.reject(i.createError("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false"));if(u&&"equal-interval"!==u)return n.reject(i.createError("class-breaks:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'analyzeData' is false"));if(m&&null==a.normalizationTotal)return n.reject(i.createError("class-breaks:missing-parameters","'normalizationTotal' is required when 'normalizationType' is 'precent-of-total' and 'analyzeData' is false"))}else if(!c)return n.reject(i.createError("class-breaks:missing-parameters","Both 'minValue' and 'maxValue' are required when 'analyzeData' is false"));return a}):n.reject(i.createError("class-breaks:invalid-parameters","'layer' must be one of these types: "+v))}function o(e,a){var r=e.layer,n=i.createCBDefn(e,a),l=i.getSQLFilterForNormalization(e),s=i.getFieldExpr(e,e.normalizationTotal),o=i.getRangeExpr(s,e.minValue,e.maxValue),u=new t;return u.classificationDefinition=n,u.where=i.mergeWhereClauses(l,o),r.generateRenderer(u)}function u(e,a){var n=a.classBreakInfos,t=n.length,i=n[0].minValue,l=n[t-1].maxValue,s="standard-deviation"===e.classificationMethod,o=p;return n=n.map(function(e){var a=e.label,n={minValue:e.minValue,maxValue:e.maxValue,label:a};if(s&&a){var t=a.match(o),i=t.map(function(e){return+r.trim(e)});2===i.length?(n.minStdDev=i[0],n.maxStdDev=i[1],i[0]<0&&i[1]>0&&(n.hasAvg=!0)):1===i.length&&(a.indexOf("<")>-1?(n.minStdDev=null,n.maxStdDev=i[0]):a.indexOf(">")>-1&&(n.minStdDev=i[0],n.maxStdDev=null))}return n}),{minValue:i,maxValue:l,classBreakInfos:n,normalizationTotal:a.normalizationTotal}}function m(e,a){var r=e.minValue,t=e.maxValue;if(r>=t)return n.reject(i.createError("class-breaks:invalid-parameters","'minValue' should be less than 'maxValue'"));for(var l=[],s=(t-r)/a,o=0;a>o;o++){var u=r+o*s;l.push({minValue:u,maxValue:u+s})}return l[a-1].maxValue=t,n.resolve({classBreakInfos:l,normalizationTotal:e.normalizationTotal})}function c(e){var a=e.numClasses||f,r=e.analyzeData!==!1;return r?o(e,a).then(function(a){return u(e,a)}):m(e,a).then(function(a){return u(e,a)})}function d(e){return s(e).then(function(e){return c(e)})}var f=5,p=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,v=l.supportedLayerTypes.join(", ");return d});