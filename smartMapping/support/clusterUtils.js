// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/arrayUtils","../../core/maybe","../../core/MD5","../../renderers/visualVariables/support/sizeVariableUtils","../popup/support/utils","./utils"],(function(e,t,n,i,r,l,a,o){"use strict";function u(e,t){var n=function(e){if(!e)return null;var t=e.field,n=e.valueExpression,i=e.normalizationField,r=e.normalizationType,a=e.normalizationTotal,u=null;if(n)u=n;else if(t){var s=o.getNormalizationType({normalizationType:r,normalizationField:i,normalizationTotal:a});if(s){var p=s.toLowerCase();if(u=t.toLowerCase()+",norm:"+p,i)u+=","+i.toLowerCase();else if("percent-of-total"===p){var f=a;l.isValidNumber(f)&&0!==f||(f=null),u+=","+f}}}return u}(e);return t+"_"+(i.isSome(n)?function(e){return r.createMD5Hash(e)}(n):e.field)}function s(e,t){var n=t.getField(e);return n&&n.type}function p(e,t){var n="field"in t&&t.field,r=n?s(n,e):null;return{field:n,fieldType:i.isSome(r)?r:null,valueExpression:"valueExpression"in t?t.valueExpression:null,valueExpressionTitle:"valueExpressionTitle"in t?t.valueExpressionTitle:null,normalizationField:"normalizationField"in t?t.normalizationField:null,normalizationType:"normalizationType"in t?t.normalizationType:null,normalizationTotal:"normalizationTotal"in t?t.normalizationTotal:null}}function f(e,t){var n="rotation"===t.type?t.rotationType:null,r=t.legendOptions&&t.legendOptions.title,l=t.field,a=l?s(l,e):null;return{field:l,fieldType:i.isSome(a)?a:null,rotationType:n,valueExpression:t.valueExpression,valueExpressionTitle:t.valueExpressionTitle||t.valueExpression&&r,normalizationField:"normalizationField"in t?t.normalizationField:null,vvType:t.type}}function d(e){return e?e.replace(/"/g,'\\"'):""}function v(e,t){var n=[u(e,t)];return"date"===e.fieldType&&n.push(e.fieldType.toLowerCase()),e.rotationType&&n.push(e.rotationType.toLowerCase()),n.join("_")}function c(e,t){return{statisticHash:v(e,t),attributeInfo:e,statisticType:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getStatisticInfos=t.getStatisticInfo=t.getPredominantTypeExpression=t.getVariableAttributeInfo=t.getRendererAttributeInfo=t.getClusterField=t.getStatisticId=t.getClusterFieldHash=t.clusterCountField=void 0,t.clusterCountField="cluster_count",t.getClusterFieldHash=function(e,t){return e.split("cluster_"+t+"_").pop()},t.getStatisticId=u,t.getClusterField=function(e,t){return"cluster_"+u(e,t)},t.getRendererAttributeInfo=p,t.getVariableAttributeInfo=f,t.getPredominantTypeExpression=function(e,t,n){return"\n  var uvInfos = ["+function(e){return e.map((function(e){return'{\n        "value": "'+String(e.value)+'",\n        "label": "'+d(String(e.label))+'"\n      }'}))}(e).join(", ")+'];\n  var predominantType = Text($feature["'+t+'"]);\n  var label = "'+d(n)+'";\n\n  for (var i = 0; i < Count(uvInfos); i++) {\n    if (uvInfos[i].value == predominantType) {\n      label = uvInfos[i].label;\n      break;\n    }\n  }\n\n  return label;\n  '},t.getStatisticInfo=c,t.getStatisticInfos=function(e,t,i){void 0===i&&(i=!0);var r=[],l=p(e,t);"class-breaks"===t.type?r.push(c(l,"avg")):"unique-value"===t.type&&r.push(c(l,"type"));for(var o=0,u=a.getPrimaryVisualVariables(t);o<u.length;o++){var s=f(e,u[o]);r.push(c(s,"avg"))}return i?n.unique(r,(function(e,t){return e.statisticHash===t.statisticHash})):r}}));