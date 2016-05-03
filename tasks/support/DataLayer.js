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

define(["../../core/Accessoire","../../core/declare","../../core/jsonDictionary","../../core/lang","../../geometry/support/jsonUtils","./SpatialRelationship","dojo/_base/lang"],function(e,t,i,s,a,l,r){var n=i({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),o=t(e,{declaredClass:"esri.tasks.support.DataLayer",geometry:null,name:null,spatialRelationship:null,where:null,toJSON:function(){var e={type:"layer",layerName:this.name,where:this.where,spatialRel:n.toJSON(this.spatialRelationship)},t=this.geometry;return t&&(e.geometryType=a.getJsonType(t),e.geometry=t.toJSON()),s.filter(e,function(e){return null!==e?!0:void 0})}});return r.mixin(o,l),o});