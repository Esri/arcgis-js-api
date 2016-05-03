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

define(["dojo/_base/kernel","../core/JSONSupporter","./SpatialReference"],function(e,n,a){var t=n.createSubclass({declaredClass:"esri.geometry.Geometry",classMetadata:{properties:{cache:{readOnly:!0,dependsOn:["spatialReference"]},extent:{readOnly:!0,dependsOn:["spatialReference"],copy:function(e,n){e.xmin=n.xmin,e.ymin=n.ymin,e.xmax=n.xmax,e.ymax=n.ymax,e.spatialReference=n.spatialReference,n.hasM&&(e.mmin=n.mmin,e.mmax=n.mmax),n.hasZ&&(e.zmin=n.zmin,e.zmax=n.zmax)}},spatialReference:{type:a}}},cache:null,_cacheGetter:function(){return{}},extent:null,hasM:!1,hasZ:!1,spatialReference:a.WGS84,_spatialReferenceReader:a.fromJSON,type:null,isSR:function(e){return e&&("esri.SpatialReference"===e.declaredClass||null!=e.wkid)},clone:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},toJSON:function(){return console.warn(".toJSON() is not implemented for "+this.declaredClass),null},clearCache:function(){this.notifyChange("cache")},getCacheValue:function(e){return this.cache[e]},setCacheValue:function(e,n){this.cache[e]=n},getExtent:function(){return e.deprecated(this.declaredClass+".getExtent","Use .extent instead","4.0"),this.extent},setSpatialReference:function(n){e.deprecated(this.declaredClass+".setSpatialReference","Use .spatialReference = sr; instead","4.0"),this.spatialReference=n}});return t});