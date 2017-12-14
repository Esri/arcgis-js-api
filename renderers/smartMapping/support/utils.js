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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../layers/FeatureLayer","./adapters/FeatureLayerAdapter","../../../layers/SceneLayer","./adapters/SceneLayerAdapter","../../../layers/PointCloudLayer","./adapters/PointCloudLayerAdapter","./adapters/LayerAdapter","../../../support/arcadeUtils","../statistics/support/utils","../../../core/promiseUtils","dojo/_base/lang"],function(e,r,t,a,n,u,i,l,o,s,c,f,p){function d(e){return e.map(function(e){return A[e].label})}function m(e,r){if(e instanceof o)return e;var t=null;return r.some(function(r){var a=e.constructor===A[r].layer;if(a){var n=A[r].adapter;t=new n({layer:e})}return a}),t}function v(e){var r=e.field,t=e.normalizationField,a=e.valueExpression,n=[];return a&&(n=s.extractFieldNames(a)),r&&n.push(r),t&&n.push(t),n}function y(e){var r=e.layer;return e.fields.filter(function(e){return!r.getField(e)})}function g(e,r,t){for(var a,n=(r-e)/t,u=[],i=e,l=1;t>=l;l++)a=i+n,a=Number(a.toFixed(16)),u.push([i,a]),i=a;return u}function F(e){var r=e&&e.features,t=r&&r[0]&&r[0].attributes,a={};for(var n in t)a[n.replace(S,"").toLowerCase()]=t[n];return a.min===a.max&&null!=a.min&&null==a.stddev&&(a.stddev=a.variance=0),a}function b(e){var r;for(r in e)c.statisticTypes.indexOf(r)>-1&&(c.isValidNumber(e[r])||(e[r]=null));return e}function x(e,r,t,a){var n={},u="countOFExpr";e&&e.features&&e.features.forEach(function(e){var r=e.attributes,t=c.getCustomExprVal(r,u),a=c.getAttributeVal(r,u);0!==t&&(n[t]=a)});var i=[],l=g(r,t,a);return l.forEach(function(e,r){var t=(r+1).toString();i.push({minValue:e[0],maxValue:e[1],count:n.hasOwnProperty(t)?n[t]:0})}),{bins:i,minValue:r,maxValue:t}}function L(e,r){var t=e.layer,a=e.field,n=e.numBins||C,u=r.min,i=r.max,l=r.intervals||g(u,i,n),o=r.normTotal,s=r&&r.sqlExpr||a,c=r&&r.excludeZerosExpr;return h(t,s,c,l).then(function(e){var r=e.map(function(e,r){return{minValue:l[r][0],maxValue:l[r][1],count:e.value}});return{bins:r,minValue:u,maxValue:i,normalizationTotal:o}})}function h(e,r,t,a){for(var n=[],u=a.length,i=0;u>i;i++){var l=c.mergeWhereClauses(t,c.mergeWhereClauses(r+" >= "+a[i][0],null!==a[i][1]?r+(i===u-1?" <= ":" < ")+a[i][1]:""));n.push(l)}return f.eachAlways(n.map(function(r){return e.queryFeatureCount(r)}))}function V(e,r,t,a){var n=e&&e.features,u="countOF"+(t||"Expr"),i={},l=!1;if(n.forEach(function(e){var r=e.attributes,a=c.getAttributeVal(r,u),n=t?c.getAttributeVal(r,t):c.getCustomExprVal(r,u);null===n&&0===a&&(l=!0),(null==n||"string"==typeof n&&""===p.trim(n))&&(n=null),null==i[n]?i[n]={count:a,data:n}:i[n].count=i[n].count+a}),t&&l){var o=t+" is NULL";return r.queryFeatureCount(o).then(function(e){return e=e||0,i["null"].count=i["null"].count+e,E(i,a)}).otherwise(function(){return E(i,a)})}return f.resolve(E(i,a))}function E(e,r){if(r)for(var t in e)e[t].label=r[t];return{count:e}}Object.defineProperty(r,"__esModule",{value:!0});var S=/_value$/i,C=10,A=(q={},q[0]={adapter:a,layer:t,label:"FeatureLayer"},q[1]={adapter:u,layer:n,label:"SceneLayer"},q[2]={adapter:l,layer:i,label:"PointCloudLayer"},q);r.getLayerTypeLabels=d,r.createLayerAdapter=m,r.getFieldsList=v,r.getUnknownFields=y,r.getEqualIntervalBins=g,r.getSummaryStatisticsFromFeatureSet=F,r.processSummaryStatisticsResult=b,r.getHistogramFromFeatureSet=x,r.getBins=L,r.getUniqueValuesFromFeatureSet=V;var q});