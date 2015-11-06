// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../SpatialReference","./DirectionsFeatureSet","./NAMessage"],function(s,e,r,i,n,t,o,a,l){var c=s(null,{declaredClass:"esri.tasks.ClosestFacilitySolveResult",constructor:function(s){s.directions&&(this.directions=[],r.forEach(s.directions,function(s,e){var i=[],n=[];r.forEach(s.features,function(s,e){n[e]=s.compressedGeometry,i[e]=s.strings}),s.strings=i,this.directions[e]=new a(s,n)},this)),s.routes&&(this.routes=this._graphicsFromJson(s.routes)),s.facilities&&(this.facilities=this._graphicsFromJson(s.facilities)),s.incidents&&(this.incidents=this._graphicsFromJson(s.incidents)),s.barriers&&(this.pointBarriers=this._graphicsFromJson(s.barriers)),s.polylineBarriers&&(this.polylineBarriers=this._graphicsFromJson(s.polylineBarriers)),s.polygonBarriers&&(this.polygonBarriers=this._graphicsFromJson(s.polygonBarriers)),s.messages&&(this.messages=r.map(s.messages,function(s){return new l(s)}))},routes:null,facilities:null,incidents:null,pointBarriers:null,polylineBarriers:null,polygonBarriers:null,directions:null,messages:null,_graphicsFromJson:function(s){var e=new o(s.spatialReference),i=s.features;return r.map(i,function(s){var r=new t(s);return r.geometry.setSpatialReference(e),r})}});return i("extend-esri")&&e.setObject("tasks.ClosestFacilitySolveResult",c,n),c});