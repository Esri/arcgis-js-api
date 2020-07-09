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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/arrayUtils","../../core/maybe","../../core/MD5","../../renderers/visualVariables/support/sizeVariableUtils","../popup/support/utils","./utils"],(function(e,n,i,t,r,l,a,o){function u(e,n){var i=function(e){if(!e)return null;var n=e.field,i=e.valueExpression,t=e.normalizationField,r=e.normalizationType,a=e.normalizationTotal,u=null;if(i)u=i;else if(n){var s=o.getNormalizationType({normalizationType:r,normalizationField:t,normalizationTotal:a});if(s){var p=s.toLowerCase();if(u=n.toLowerCase()+",norm:"+p,t)u+=","+t.toLowerCase();else if("percent-of-total"===p){var f=a;l.isValidNumber(f)&&0!==f||(f=null),u+=","+f}}}return u}(e);return n+"_"+(t.isSome(i)?function(e){return r.createMD5Hash(e)}(i):e.field)}function s(e,n){var i=n.getField(e);return i&&i.type}function p(e,n){var i="field"in n&&n.field,r=i?s(i,e):null;return{field:i,fieldType:t.isSome(r)?r:null,valueExpression:"valueExpression"in n?n.valueExpression:null,valueExpressionTitle:"valueExpressionTitle"in n?n.valueExpressionTitle:null,normalizationField:"normalizationField"in n?n.normalizationField:null,normalizationType:"normalizationType"in n?n.normalizationType:null,normalizationTotal:"normalizationTotal"in n?n.normalizationTotal:null}}function f(e,n){var i="rotation"===n.type?n.rotationType:null,r=n.legendOptions&&n.legendOptions.title,l=n.field,a=l?s(l,e):null;return{field:l,fieldType:t.isSome(a)?a:null,rotationType:i,valueExpression:n.valueExpression,valueExpressionTitle:n.valueExpressionTitle||n.valueExpression&&r,normalizationField:"normalizationField"in n?n.normalizationField:null,vvType:n.type}}function v(e){return e?e.replace(/"/g,'\\"'):""}function c(e,n){var i=[u(e,n)];return"date"===e.fieldType&&i.push(e.fieldType.toLowerCase()),e.rotationType&&i.push(e.rotationType.toLowerCase()),i.join("_")}function d(e,n){return{statisticHash:c(e,n),attributeInfo:e,statisticType:n}}Object.defineProperty(n,"__esModule",{value:!0}),n.clusterCountField="cluster_count",n.getClusterFieldHash=function(e,n){return e.split("cluster_"+n+"_").pop()},n.getStatisticId=u,n.getClusterField=function(e,n){return"cluster_"+u(e,n)},n.getRendererAttributeInfo=p,n.getVariableAttributeInfo=f,n.getPredominantTypeExpression=function(e,n,i){return"\n  var uvInfos = ["+function(e){return e.map((function(e){return'{\n        "value": "'+String(e.value)+'",\n        "label": "'+v(String(e.label))+'"\n      }'}))}(e).join(", ")+'];\n  var predominantType = Text($feature["'+n+'"]);\n  var label = "'+v(i)+'";\n\n  for (var i = 0; i < Count(uvInfos); i++) {\n    if (uvInfos[i].value == predominantType) {\n      label = uvInfos[i].label;\n      break;\n    }\n  }\n\n  return label;\n  '},n.getStatisticInfo=d,n.getStatisticInfos=function(e,n,t){void 0===t&&(t=!0);var r=[],l=p(e,n);"class-breaks"===n.type?r.push(d(l,"avg")):"unique-value"===n.type&&r.push(d(l,"type"));for(var o=0,u=a.getPrimaryVisualVariables(n);o<u.length;o++){var s=f(e,u[o]);r.push(d(s,"avg"))}return t?i.unique(r,(function(e,n){return e.statisticHash===n.statisticHash})):r}}));