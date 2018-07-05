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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["../../Graphic","../../core/JSONSupport","../../geometry/SpatialReference","./DirectionsFeatureSet","./NAMessage"],function(e,r,n,s,t){return r.createSubclass({declaredClass:"esri.tasks.support.ClosestFacilitySolveResult",properties:{directions:{value:null,type:[s]},facilities:{value:null,json:{read:function(e){return e&&this._graphicsFromJson(e)}}},incidents:{value:null,json:{read:function(e){return e&&this._graphicsFromJson(e)}}},messages:{value:null,type:[t]},pointBarriers:{value:null,json:{read:function(e){return e&&this._graphicsFromJson(e)}}},polylineBarriers:{value:null,json:{read:function(e){return e&&this._graphicsFromJson(e)}}},polygonBarriers:{value:null,json:{read:function(e){return e&&this._graphicsFromJson(e)}}},routes:{value:null,json:{read:function(e){return e&&this._graphicsFromJson(e)}}}},_graphicsFromJson:function(r){var s=n.fromJSON(r.spatialReference);return(r.features||[]).map(function(r){var n=e.fromJSON(r);return n.geometry.set("spatialReference",s),n})}})});