// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../lang","../graphicsUtils"],function(e,t,r,s,i,l,o){var a=e(null,{declaredClass:"esri.tasks.ServiceAreaParameters",accumulateAttributes:null,attributeParameterValues:null,defaultBreaks:null,doNotLocateOnRestrictedElements:!0,excludeSourcesFromPolygons:null,facilities:null,impedanceAttribute:null,mergeSimilarPolygonRanges:!1,outputGeometryPrecision:null,outputGeometryPrecisionUnits:null,outputLines:null,outputPolygons:null,outSpatialReference:null,overlapLines:!1,overlapPolygons:!1,overrides:null,pointBarriers:null,polygonBarriers:null,polylineBarriers:null,restrictionAttributes:null,restrictUTurns:null,returnFacilities:!1,returnPointBarriers:!1,returnPolylgonBarriers:!1,returnPolylineBarriers:!1,splitLinesAtBreaks:!1,splitPolygonsAtBreaks:!1,travelDirection:null,trimOuterPolygon:!1,trimPolygonDistance:null,trimPolygonDistanceUnits:null,useHierarchy:null,timeOfDay:null,travelMode:null,toJson:function(e){var t={returnFacilities:this.returnFacilities,returnBarriers:this.returnPointBarriers,returnPolygonBarriers:this.returnPolygonBarriers,returnPolylineBarriers:this.returnPolylineBarriers,mergeSimilarPolygonRanges:this.mergeSimilarPolygonRanges,overlapLines:this.overlapLines,overlapPolygons:this.overlapPolygons,splitLinesAtBreaks:this.splitLinesAtBreaks,splitPolygonsAtBreaks:this.splitPolygonsAtBreaks,trimOuterPolygon:this.trimOuterPolygon,accumulateAttributeNames:this.accumulateAttributes?this.accumulateAttributes.join(","):null,attributeParameterValues:this.attributeParameterValues&&r.toJson(this.attributeParameterValues),defaultBreaks:this.defaultBreaks?this.defaultBreaks.join(","):null,excludeSourcesFromPolygons:this.excludeSourcesFromPolygons?this.excludeSourcesFromPolygons.join(","):null,impedanceAttributeName:this.impedanceAttribute,outputGeometryPrecision:this.outputGeometryPrecision,outputGeometryPrecisionUnits:this.outputGeometryPrecisionUnits,outputLines:this.outputLines,outputPolygons:this.outputPolygons,outSR:this.outSpatialReference?this.outSpatialReference.wkid||r.toJson(this.outSpatialReference.toJson()):null,overrides:this.overrides,restrictionAttributeNames:this.restrictionAttributes?this.restrictionAttributes.join(","):null,restrictUTurns:this.restrictUTurns,travelDirection:this.travelDirection,trimPolygonDistance:this.trimPolygonDistance,trimPolygonDistanceUnits:this.trimPolygonDistanceUnits,useHierarchy:this.useHierarchy,timeOfDay:this.timeOfDay&&this.timeOfDay.getTime(),travelMode:"object"==typeof this.travelMode?r.toJson(this.travelMode):this.travelMode},s=this.facilities;"esri.tasks.FeatureSet"===s.declaredClass&&s.features.length>0?t.facilities=r.toJson({type:"features",features:o._encodeGraphics(s.features,e&&e["facilities.features"]),doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}):"esri.tasks.DataLayer"===s.declaredClass?t.facilities=s:"esri.tasks.DataFile"===s.declaredClass&&(t.facilities=r.toJson({type:"features",url:s.url,doNotLocateOnRestrictedElements:this.doNotLocateOnRestrictedElements}));var i=function(t,s){return t?"esri.tasks.FeatureSet"===t.declaredClass?t.features.length>0?r.toJson({type:"features",features:o._encodeGraphics(t.features,e&&e[s])}):null:"esri.tasks.DataLayer"===t.declaredClass?t:"esri.tasks.DataFile"===t.declaredClass?r.toJson({type:"features",url:t.url}):r.toJson(t):null};return this.pointBarriers&&(t.barriers=i(this.pointBarriers,"pointBarriers.features")),this.polygonBarriers&&(t.polygonBarriers=i(this.polygonBarriers,"polygonBarriers.features")),this.polylineBarriers&&(t.polylineBarriers=i(this.polylineBarriers,"polylineBarriers.features")),l.filter(t,function(e){if(null!==e)return!0})}});return s("extend-esri")&&t.setObject("tasks.ServiceAreaParameters",a,i),a});