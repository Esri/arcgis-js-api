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

define(["../../core/declare","dojo/_base/array","../../Graphic","../../core/JSONSupporter","../../geometry/SpatialReference","./NAMessage"],function(e,r,s,n,a,o){var i=e(n,{declaredClass:"esri.tasks.support.ServiceAreaSolveResult",classMetadata:{reader:{add:["serviceAreaPolygons","serviceAreaPolygons"],exclude:["saPolygons","saPolylines"]}},facilities:null,_facilitiesReader:function(e){return e&&this._graphicsFromJson(e)},messages:null,_messagesReader:function(e){return e&&r.map(e,function(e){return o.fromJSON(e)})},pointBarriers:null,_pointBarriersReader:function(e){return e&&this._graphicsFromJson(e)},polylineBarriers:null,_polylineBarriersReader:function(e){return e&&this._graphicsFromJson(e)},polygonBarriers:null,_polygonBarriersReader:function(e){return e&&this._graphicsFromJson(e)},serviceAreaPolylines:null,_serviceAreaPolylinesReader:function(e,r){return this._graphicsFromJson(r.saPolylines)},serviceAreaPolygons:null,_serviceAreaPolygonsReader:function(e,r){return this._graphicsFromJson(r.saPolygons)},_graphicsFromJson:function(e){if(!e)return null;var n=a.fromJSON(e.spatialReference),o=e.features;return r.map(o,function(e){var r=s.fromJSON(e);return r.geometry.set("spatialReference",n),r})}});return i});