// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/kebabDictionary","../../core/lang","../../geometry/support/jsonUtils"],function(e,t,s,i){var r=t({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});return e.createSubclass({declaredClass:"esri.tasks.support.DataLayer",properties:{geometry:null,name:null,spatialRelationship:null,where:null},toJSON:function(){var e={type:"layer",layerName:this.name,where:this.where,spatialRel:r.toJSON(this.spatialRelationship)},t=this.geometry;return t&&(e.geometryType=i.getJsonType(t),e.geometry=t.toJSON()),s.filter(e,function(e){if(null!==e)return!0})}})});