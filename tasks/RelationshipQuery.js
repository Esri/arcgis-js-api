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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel"],function(e,t,s,i,o){var n=e(null,{declaredClass:"esri.tasks.RelationshipQuery",definitionExpression:"",relationshipId:null,returnGeometry:!1,objectIds:null,outSpatialReference:null,outFields:null,toJson:function(){var e={definitionExpression:this.definitionExpression,relationshipId:this.relationshipId,returnGeometry:this.returnGeometry,maxAllowableOffset:this.maxAllowableOffset,geometryPrecision:this.geometryPrecision},t=this.objectIds,i=this.outFields,o=this.outSpatialReference;return t&&(e.objectIds=t.join(",")),i&&(e.outFields=i.join(",")),o&&(e.outSR=o.wkid||s.toJson(o.toJson())),e._ts=this._ts,e}});return i("extend-esri")&&t.setObject("tasks.RelationshipQuery",n,o),n});