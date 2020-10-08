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

define(["require","exports","tslib","../../../request","../../../core/Error","../../../core/Logger","../../../core/promiseUtils","../../../tasks/QueryTask","../../../tasks/support/Query","../../../tasks/support/StatisticDefinition","./featureUtils"],(function(e,t,r,a,i,s,n,l,u,o,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateRelatedInfo=t.queryRelatedFeatures=t.queryLayerInfos=t.setRelatedFeatures=t.createRelatedInfo=t.getRelatedFieldInfo=void 0;var f=s.getLogger("esri.widgets.Feature.support.relatedFeatureUtils"),c=new Map;t.getRelatedFieldInfo=function(e){if(!d.isRelatedField(e))return null;var t=e.split("/").slice(1);return{layerId:t[0],fieldName:t[1]}},t.createRelatedInfo=function(e,t){var r=function(e,t){if(!t.relationships)return null;var r=null;return t.relationships.some((function(t){return t.id===parseInt(e,10)&&(r=t,!0)})),r}(e,t);if(r){var a=t.url+"/"+r.relatedTableId;return{url:a,queryTask:new l({url:a,sourceSpatialReference:t.spatialReference}),relation:r,relatedFields:[],outStatistics:[]}}},t.setRelatedFeatures=function(e,t){if(t&&e){var r=e.features,a=e.statsFeatures,i=r&&r.value;t.relatedFeatures=i?i.features:[];var s=a&&a.value;t.relatedStatsFeatures=s?s.features:[]}},t.queryLayerInfos=function(e,t){var r=e.relatedInfos,s=e.layer,l={};return r.forEach((function(e,r){var n=e.relation;if(!n){var u=new i("relation-required","A relation is required on a layer to retrieve related records.");throw f.error(u),u}var o=n.relatedTableId;if("number"!=typeof o){u=new i("A related table ID is required on a layer to retrieve related records.");throw f.error(u),u}var d=s.url+"/"+o,y=c.get(d),p=y||function(e,t){return a(e,{query:{f:"json"},signal:t&&t.signal})}(d,t);y||c.set(d,p),l[r]=p})),n.eachAlways(l)},t.queryRelatedFeatures=function(e,t){var a=e.graphic,i=e.relatedInfos,s=e.layer,l={};return i.forEach((function(e,i){e.layerInfo&&(l[i]=function(e,t,a,i){return r.__awaiter(this,void 0,void 0,(function(){var s,l,o,d,f,c,y,p,F,v,I,g,h;return r.__generator(this,(function(r){return s=a.layerId.toString(),l=t.layerInfo,o=t.queryTask,d=t.relation,(f=function(e,t){var r;return e&&e.relationships&&e.relationships.some((function(e){return""+e.relatedTableId===t&&(r=e,!0)})),r}(l,s))?(c=d.keyField,y=f.keyField,p=function(e,t){var r=void 0;return e.fields.some((function(e){if(e.name===t.keyField){return r=-1!==["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"].indexOf(e.type)?"number":"string",!0}return!1})),r}(l,f),F="string"===p?y+"='"+e.attributes[c]+"'":y+"="+e.attributes[c],v=o.execute(new u({where:F,outFields:t.relatedFields}),i),I=t.outStatistics&&t.outStatistics.length>0&&l.supportsStatistics,g=I?o.execute(new u({where:F,outFields:t.relatedFields,outStatistics:t.outStatistics}),i):null,h={features:v},g&&(h.statsFeatures=g),[2,n.eachAlways(h)]):[2,null]}))}))}(a,e,s,t))})),n.eachAlways(l)},t.updateRelatedInfo=function(e){var t=e.relatedInfo,r=e.fieldName,a=e.fieldInfo;if(t.relatedFields.push(r),a.statisticType){var i=new o({statisticType:a.statisticType,onStatisticField:r,outStatisticFieldName:r});t.outStatistics.push(i)}}}));