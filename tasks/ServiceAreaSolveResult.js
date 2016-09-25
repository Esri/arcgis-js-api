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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../graphic","../SpatialReference","./NAMessage"],function(e,s,r,i,a,n,o,l){var t=e(null,{declaredClass:"esri.tasks.ServiceAreaSolveResult",constructor:function(e){e.saPolygons&&(this.serviceAreaPolygons=this._graphicsFromJson(e.saPolygons)),e.saPolylines&&(this.serviceAreaPolylines=this._graphicsFromJson(e.saPolylines)),e.facilities&&(this.facilities=this._graphicsFromJson(e.facilities)),e.barriers&&(this.pointBarriers=this._graphicsFromJson(e.barriers)),e.polylineBarriers&&(this.polylineBarriers=this._graphicsFromJson(e.polylineBarriers)),e.polygonBarriers&&(this.polygonBarriers=this._graphicsFromJson(e.polygonBarriers)),e.messages&&(this.messages=r.map(e.messages,function(e,s){return new l(e)}))},serviceAreaPolygons:null,serviceAreaPolylines:null,facilities:null,pointBarriers:null,polylineBarriers:null,polygonBarriers:null,messages:null,_graphicsFromJson:function(e){var s=new o(e.spatialReference),i=e.features;return r.map(i,function(e,r){var i=new n(e);return i.geometry.setSpatialReference(s),i})}});return i("extend-esri")&&s.setObject("tasks.ServiceAreaSolveResult",t,a),t});