// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/lang","../support/attributeUtils"],(function(t,u){function n(t){return"number"==typeof t&&!isNaN(t)&&t!==1/0&&t!==-1/0}function i(t){return t*Math.PI/180}var e={sum:{initialize:function(){return{count:0,sum:null}},updateCellStat:function(t,u){n(u)&&(t.count++,t.sum+=u)},updateClusterStat:function(t,u){u.count&&(t.count+=u.count,t.sum+=u.sum)},summarize:function(t){return t.sum}},avg:{initialize:function(t){return{count:0,sum:null,avg:null,sum_cosine:null,sum_sine:null}},updateCellStat:function(t,u,e){n(u)&&(t.count++,e.isAngular?(e.isArithmetic||(u=-1*u+90),t.sum_cosine+=Math.cos(i(u)),t.sum_sine+=Math.sin(i(u))):t.sum+=u)},updateClusterStat:function(t,u,n){u.count&&(t.count+=u.count,n.isAngular?(t.sum_cosine+=u.sum_cosine,t.sum_sine+=u.sum_sine):t.sum+=u.sum)},summarize:function(t,u){if(t.count>0){var n=t.count;if(u.isAngular){var i=t.sum_cosine/n,e=t.sum_sine/n,o=180*Math.atan2(e,i)/Math.PI;u.isArithmetic||(o=-1*(o-90)),t.avg=o<0?o+360:o}else t.avg=t.sum/n,u.isDate&&(t.avg=Math.ceil(t.avg))}return t.avg}},type:{initialize:function(){return{uvInfos:{}}},updateCellStat:function(u,n){(null==n||""===n||"string"==typeof n&&""===t.trim(n))&&(n=null);var i=u.uvInfos;null==i[n]?i[n]={count:1,value:n}:i[n].count++},updateClusterStat:function(t,u){var n,i=t.uvInfos,e=u.uvInfos;for(n in e){var o=e[n];null==i[n]?i[n]={count:o.count,value:o.value}:i[n].count+=o.count}},summarize:function(t){return function(t){var u,n,i=-1/0;for(u in t){var e=t[u];e.count>i?(i=e.count,n=e.value):e.count===i&&(n=null)}return n}(t.uvInfos)}}},o={isSupportedStatisticType:function(t){return e.hasOwnProperty(t)},getStatisticFunctions:function(t){return e[t]},getStatisticId:function(t,n){var i=u.getAttributeIdSource(t);return n+"_"+(i&&u.getAttributeId(i)||t.field)},getClusterField:function(t,u){return"cluster_"+o.getStatisticId(t,u)},getStatisticHash:function(t,u){var n=[o.getStatisticId(t,u)];return t.attributeType&&n.push(t.attributeType.toLowerCase()),t.rotationType&&n.push(t.rotationType.toLowerCase()),n.join("_")}};return o}));