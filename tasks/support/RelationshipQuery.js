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

define(["../../core/Accessor"],function(e){var t=e.createSubclass({declaredClass:"esri.tasks.support.RelationshipQuery",properties:{definitionExpression:"",geometryPrecision:null,maxAllowableOffset:null,objectIds:null,outFields:null,outSpatialReference:null,relationshipId:null,returnGeometry:!1},toJSON:function(){var e={definitionExpression:this.definitionExpression,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},t=this.objectIds,i=this.outFields,s=this.outSpatialReference;return t&&(e.objectIds=t.join(",")),i&&(e.outFields=i.join(",")),s&&(e.outSR=s.wkid||JSON.stringify(s.toJSON())),e._ts=this._ts,e}});return t});