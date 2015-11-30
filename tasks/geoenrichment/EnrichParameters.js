// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["../../declare","../../SpatialReference","./EnrichParametersBase","./StandardIntersectingGeography"],function(e,r,t,i){return e("esri.tasks.geoenrichment.EnrichParameters",[t],{variables:null,returnGeometry:!1,outSR:null,intersectingGeographies:null,forStorage:!0,constructor:function(e){if(this.variables=[],e&&(this.variables=e.analysisVariables||e.variables||null,e.returnGeometry&&(this.returnGeometry=!0),e.outSR&&(this.outSR=new r(e.outSR)),e.forStorage&&(this.forStorage=e.forStorage),e.intersectingGeographies)){this.intersectingGeographies=[];for(var t=0;t<e.intersectingGeographies.length;t++){var s=e.intersectingGeographies[t];if("standard"==s.geographyType)this.intersectingGeographies.push(new i(s));else if("external"==s.geographyType)throw new Error("Not implemented")}}},toJson:function(){var e=this.inherited(arguments);if(e.analysisVariables=this.variables,this.returnGeometry&&(e.returnGeometry=!0),this.outSR&&(e.outSR=this.outSR.toJson()),this.forStorage||(e.forStorage=!1),this.intersectingGeographies){e.intersectingGeographies=[];for(var r=0;r<this.intersectingGeographies.length;r++)e.intersectingGeographies.push(this.intersectingGeographies[r].toJson())}return e}})});