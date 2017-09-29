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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["../../Graphic","../../core/JSONSupport","../../geometry/SpatialReference","./NAMessage"],function(r,e,s,n){var a=e.createSubclass({declaredClass:"esri.tasks.support.ServiceAreaSolveResult",properties:{facilities:{value:null,json:{read:function(r){return r&&this._graphicsFromJson(r)}}},messages:{value:null,type:[n]},pointBarriers:{value:null,json:{read:function(r){return r&&this._graphicsFromJson(r)}}},polylineBarriers:{value:null,json:{read:function(r){return r&&this._graphicsFromJson(r)}}},polygonBarriers:{value:null,json:{read:function(r){return r&&this._graphicsFromJson(r)}}},serviceAreaPolylines:{value:null,json:{read:{source:["saPolylines"],reader:function(r,e){return this._graphicsFromJson(e.saPolylines)}}}},serviceAreaPolygons:{value:null,json:{read:{source:["saPolygons"],reader:function(r,e){return this._graphicsFromJson(e.saPolygons)}}}}},_graphicsFromJson:function(e){if(!e)return null;var n=s.fromJSON(e.spatialReference),a=e.features;return Array.isArray(a)&&(a=a.map(function(e){var s=r.fromJSON(e);return s.geometry.spatialReference=n,s})),a}});return a});