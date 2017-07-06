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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../SpatialReference"],function(e,t,c,n,a){var i=e(null,{declaredClass:"esri.geometry.Geometry",spatialReference:null,type:null,cache:void 0,setSpatialReference:function(e){return this.spatialReference=e,this},verifySR:function(){this.spatialReference||this.setSpatialReference(new a(4326))},getExtent:function(){return null},clearCache:function(){this.cache=void 0},getCacheValue:function(e){return this.cache&&this.cache[e]},setCacheValue:function(e,t){this.cache||(this.cache={}),this.cache[e]=t}});return c("extend-esri")&&t.setObject("geometry.Geometry",i,n),i});