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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../declare","../../geometry/jsonUtils","../../geometry/Geometry","./StudyArea"],function(e,t,o,r){return e("esri.tasks.geoenrichment.GeometryStudyArea",[r],{geometry:null,constructor:function(e){e&&e.geometry&&(e.geometry instanceof o?this.geometry=e.geometry:this.geometry=t.fromJson(e.geometry))},toJson:function(){var e=this.inherited(arguments);return e.geometry=this.geometry.toJson(),e},getGeomType:function(){return this.geometry.type}})});