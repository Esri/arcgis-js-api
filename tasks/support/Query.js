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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/kebabDictionary","../../core/lang","../../geometry/support/jsonUtils","dojo/_base/array"],function(t,e,i,s,r){var l=e({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),n=e({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),a=e({upperLeft:"upper-left",lowerLeft:"lower-left"}),o=t.createSubclass({declaredClass:"esri.tasks.support.Query",properties:{spatialRelationship:"intersects",text:null,where:"",geometry:null,geometryPrecision:null,groupByFieldsForStatistics:null,objectIds:null,returnGeometry:!1,returnDistinctValues:!1,returnJSON:!1,maxAllowableOffset:null,multipatchOption:null,num:null,start:null,orderByFields:null,outSpatialReference:null,outFields:null,outStatistics:null,timeExtent:null,relationParam:null,pixelSize:null,distance:null,units:"meters",resultOffset:null,resultRecordCount:null,quantizationParameters:null,sqlFormat:null},toJSON:function(t){var e={text:this.text,where:this.where,returnGeometry:this.returnGeometry,spatialRel:l.toJSON(this.spatialRelationship),maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision,returnZ:this.returnZ,returnM:this.returnM,sqlFormat:this.sqlFormat},o=t&&t.geometry||this.geometry,u=this.objectIds,c=this.outFields,p=this.outSpatialReference,S=this.groupByFieldsForStatistics,h=this.orderByFields,m=this.outStatistics,f=this.distance;if(o&&(e.geometry=o,e.geometryType=s.getJsonType(o),e.inSR=o.spatialReference.wkid||JSON.stringify(o.spatialReference.toJSON())),u&&(e.objectIds=u.join(",")),c&&(e.outFields=c.join(",")),this.returnDistinctValues&&(e.returnDistinctValues=!0),S&&(e.groupByFieldsForStatistics=S.join(",")),h&&(e.orderByFields=h.join(",")),m){var R=[];r.forEach(m,function(t){R.push(t.toJSON())}),e.outStatistics=JSON.stringify(R)}p?e.outSR=p.wkid||JSON.stringify(p.toJSON()):o&&(e.outSR=o.spatialReference.wkid||JSON.stringify(o.spatialReference.toJSON()));var d=this.timeExtent;e.time=d?d.toJSON().join(","):null;var y=this.relationParam;if(y&&e.spatialRel===l.toJSON("relation")&&(e.relationParam=y),f&&(e.distance=this.distance,e.units=n.toJSON(this.units)),this.hasOwnProperty("start")&&(e.resultOffset=this.start,e.resultRecordCount=10,""===e.where&&(e.where="1=1")),this.hasOwnProperty("num")&&(e.resultRecordCount=this.num),e.pixelSize=this.pixelSize?JSON.stringify(this.pixelSize.toJSON()):null,e.multipatchOption=this.multipatchOption,this.quantizationParameters){var O=i.clone(this.quantizationParameters);O.originPosition&&(O.originPosition=a.toJSON(O.originPosition)),e.quantizationParameters=JSON.stringify(O)}return e._ts=this._ts,e}});return o});