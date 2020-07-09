// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../geometry","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,t,r,o,a,s,i,p){var l=new s.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});return function(e){function t(t){var r=e.call(this,t)||this;return r.geometry=null,r.name=null,r.spatialRelationship=null,r.type="layer",r.where=null,r}return r.__extends(t,e),r.__decorate([p.property({types:a.geometryTypes,json:{read:o.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r.__decorate([p.property({type:String,json:{read:{source:"layerName"},write:{target:"layerName"}}})],t.prototype,"name",void 0),r.__decorate([p.property({type:String,json:{read:{source:"spatialRel",reader:l.read},write:{target:"spatialRel",writer:l.write}}})],t.prototype,"spatialRelationship",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],t.prototype,"type",void 0),r.__decorate([p.property({type:String,json:{write:!0}})],t.prototype,"where",void 0),t=r.__decorate([p.subclass("esri.tasks.support.DataLayer")],t)}(i.JSONSupport)}));