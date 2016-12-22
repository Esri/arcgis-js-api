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

define(["dojo/_base/array","../../Graphic","../../core/JSONSupporter","../../geometry/SpatialReference","./DirectionsFeatureSet","./NAMessage"],function(r,e,n,i,s,t){var o=n.createSubclass({declaredClass:"esri.tasks.support.ClosestFacilitySolveResult",directions:null,_directionsReader:function(r){return r.map(function(r){return s.fromJSON(r)})},facilities:null,_facilitiesReader:function(r){return r&&this._graphicsFromJson(r)},incidents:null,_incidentsReader:function(r){return r&&this._graphicsFromJson(r)},messages:null,_messagesReader:function(e){return e&&r.map(e,function(r){return t.fromJSON(r)})},pointBarriers:null,_pointBarriersReader:function(r){return r&&this._graphicsFromJson(r)},polylineBarriers:null,_polylineBarriersReader:function(r){return r&&this._graphicsFromJson(r)},polygonBarriers:null,_polygonBarriersReader:function(r){return r&&this._graphicsFromJson(r)},routes:null,_routesReader:function(r){return r&&this._graphicsFromJson(r)},_graphicsFromJson:function(n){var s=i.fromJSON(n.spatialReference);return r.map(n.features,function(r){var n=e.fromJSON(r);return n.geometry.set("spatialReference",s),n})}});return o});