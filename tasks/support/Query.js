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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../core/Accessoire","../../core/declare","../../core/jsonDictionary","../../core/lang","../../geometry/support/jsonUtils","./SpatialRelationship","dojo/_base/array","dojo/_base/lang"],function(t,e,i,s,r,l,n,a){var o=i({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=i({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),c=i({upperLeft:"upper-left",lowerLeft:"lower-left"}),p=e(t,{declaredClass:"esri.tasks.support.Query",spatialRelationship:"intersects",text:null,where:"",geometry:null,geometryPrecision:null,groupByFieldsForStatistics:null,objectIds:null,returnGeometry:!1,returnDistinctValues:!1,maxAllowableOffset:null,multipatchOption:null,num:null,start:null,orderByFields:null,outSpatialReference:null,outFields:null,outStatistics:null,timeExtent:null,relationParam:null,pixelSize:null,distance:null,units:"meters",resultOffset:null,resultRecordCount:null,quantizationParameters:null,toJSON:function(t){var e={text:this.text,where:this.where,returnGeometry:this.returnGeometry,spatialRel:o.toJSON(this.spatialRelationship),maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision,returnZ:this.returnZ,returnM:this.returnM},i=t&&t.geometry||this.geometry,l=this.objectIds,a=this.outFields,p=this.outSpatialReference,h=this.groupByFieldsForStatistics,S=this.orderByFields,m=this.outStatistics,f=this.distance;if(i&&(e.geometry=i,e.geometryType=r.getJsonType(i),e.inSR=i.spatialReference.wkid||JSON.stringify(i.spatialReference.toJSON())),l&&(e.objectIds=l.join(",")),a&&(e.outFields=a.join(",")),this.returnDistinctValues&&(e.returnDistinctValues=!0),h&&(e.groupByFieldsForStatistics=h.join(",")),S&&(e.orderByFields=S.join(",")),m){var d=[];n.forEach(m,function(t){d.push(t.toJSON())}),e.outStatistics=JSON.stringify(d)}p?e.outSR=p.wkid||JSON.stringify(p.toJSON()):i&&(e.outSR=i.spatialReference.wkid||JSON.stringify(i.spatialReference.toJSON()));var R=this.timeExtent;e.time=R?R.toJSON().join(","):null;var y=this.relationParam;if(y&&e.spatialRel===o.toJSON("relation")&&(e.relationParam=y),f&&(e.distance=this.distance,e.units=u.toJSON(this.units)),this.hasOwnProperty("start")&&(e.resultOffset=this.start,e.resultRecordCount=10,""===e.where&&(e.where="1=1")),this.hasOwnProperty("num")&&(e.resultRecordCount=this.num),e.pixelSize=this.pixelSize?JSON.stringify(this.pixelSize.toJSON()):null,e.multipatchOption=this.multipatchOption,this.quantizationParameters){var O=s.clone(this.quantizationParameters);O.originPosition&&(O.originPosition=c.toJSON(O.originPosition)),e.quantizationParameters=JSON.stringify(O)}return e._ts=this._ts,e}});return a.mixin(p,l),p});