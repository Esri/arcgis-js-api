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

define(["../../core/declare","../../core/Accessoire"],function(e,i){var t=e(i,{declaredClass:"esri.tasks.support.RelationshipQuery",definitionExpression:"",geometryPrecision:null,maxAllowableOffset:null,objectIds:null,outFields:null,outSpatialReference:null,relationshipId:null,returnGeometry:!1,toJSON:function(){var e={definitionExpression:this.definitionExpression,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},i=this.objectIds,t=this.outFields,s=this.outSpatialReference;return i&&(e.objectIds=i.join(",")),t&&(e.outFields=t.join(",")),s&&(e.outSR=s.wkid||JSON.stringify(s.toJSON())),e._ts=this._ts,e}});return t});