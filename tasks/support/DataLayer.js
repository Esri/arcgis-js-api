// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../geometry","../../geometry","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,t,o,s,a,p,i,l){var n=new p.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"});return function(e){function r(r){var t=e.call(this)||this;return t.geometry=null,t.name=null,t.spatialRelationship=null,t.type="layer",t.where=null,t}return t(r,e),o([l.property({types:a.geometryTypes,json:{read:s.fromJSON,write:!0}})],r.prototype,"geometry",void 0),o([l.property({type:String,json:{read:{source:"layerName"},write:{target:"layerName"}}})],r.prototype,"name",void 0),o([l.property({type:String,json:{read:{source:"spatialRel",reader:n.read},write:{target:"spatialRel",writer:n.write}}})],r.prototype,"spatialRelationship",void 0),o([l.property({type:String,json:{write:!0}})],r.prototype,"type",void 0),o([l.property({type:String,json:{write:!0}})],r.prototype,"where",void 0),r=o([l.subclass("esri.tasks.support.DataLayer")],r)}(l.declared(i.JSONSupport))});