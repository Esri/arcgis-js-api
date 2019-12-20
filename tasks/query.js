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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","../kernel","../geometry/jsonUtils","./SpatialRelationship","dojo/has!extend-esri?./QueryTask","dojo/has!extend-esri?./RelationshipQuery","dojo/has!extend-esri?./StatisticDefinition"],function(t,e,i,s,n,r,o,a){var l=t(null,{declaredClass:"esri.tasks.Query",constructor:function(){this.spatialRelationship=l.SPATIAL_REL_INTERSECTS},text:null,where:"",geometry:null,groupByFieldsForStatistics:null,objectIds:null,returnGeometry:!1,returnCentroid:null,returnDistinctValues:!1,returnExceededLimitFeatures:null,maxRecordCountFactor:null,orderByFields:null,outSpatialReference:null,outFields:null,outStatistics:null,timeExtent:null,relationParam:null,pixelSize:null,distance:null,units:null,resultOffset:null,resultRecordCount:null,resultType:null,cacheHint:null,sqlFormat:null,quantizationParameters:null,_units:{meters:"esriSRUnit_Meter",kilometers:"esriSRUnit_Kilometer",feet:"esriSRUnit_Foot",miles:"esriSRUnit_StatuteMile","nautical-miles":"esriSRUnit_NauticalMile","us-nautical-miles":"esriSRUnit_USNauticalMile"},toJson:function(t){var e={text:this.text,where:this.where,returnGeometry:this.returnGeometry,spatialRel:this.spatialRelationship,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision,sqlFormat:this.sqlFormat},n=t&&t.geometry||this.geometry,r=this.objectIds,a=this.outFields,u=this.outSpatialReference,h=this.groupByFieldsForStatistics,c=this.orderByFields,d=this.outStatistics,m=this.distance;if(n&&(e.geometry=n,e.geometryType=o.getJsonType(n),e.inSR=n.spatialReference.wkid||s.toJson(n.spatialReference.toJson())),r&&(e.objectIds=r.join(",")),a&&(e.outFields=a.join(",")),null!=this.returnCentroid&&(e.returnCentroid=this.returnCentroid),this.returnDistinctValues&&(e.returnDistinctValues=!0),null!=this.returnExceededLimitFeatures&&(e.returnExceededLimitFeatures=this.returnExceededLimitFeatures),null!=this.maxRecordCountFactor&&(e.maxRecordCountFactor=this.maxRecordCountFactor),h&&(e.groupByFieldsForStatistics=h.join(",")),c&&(e.orderByFields=c.join(",")),d){var p=[];i.forEach(d,function(t){p.push(t.toJson())}),e.outStatistics=s.toJson(p)}u?e.outSR=u.wkid||s.toJson(u.toJson()):n&&(e.outSR=n.spatialReference.wkid||s.toJson(n.spatialReference.toJson()));var R=this.timeExtent;e.time=R?R.toJson().join(","):null;var y=this.relationParam;return y&&this.spatialRelationship===l.SPATIAL_REL_RELATION&&(e.relationParam=y),m&&(e.distance=this.distance,this.hasOwnProperty("units")?e.units=this._units[this.units]||this._units.meters:(console.warn("esri/tasks/query::no distance unit provided, defaulting to meters"),e.units=this._units.meters)),this.hasOwnProperty("start")&&(e.resultOffset=this.start,e.resultRecordCount=10,""===e.where&&(e.where="1=1")),this.hasOwnProperty("num")&&(e.resultRecordCount=this.num),e.resultType=this.resultType,this.cacheHint&&(e.cacheHint=this.cacheHint),e.pixelSize=this.pixelSize?s.toJson(this.pixelSize.toJson()):null,e.multipatchOption=this.multipatchOption,this.quantizationParameters&&(e.quantizationParameters=s.toJson(this.quantizationParameters)),e._ts=this._ts,e}});return e.mixin(l,a),n("extend-esri")&&e.setObject("tasks.Query",l,r),l});