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

define(["../core/declare","dojo/_base/lang","dojo/_base/kernel","dojox/gfx/_base","./SpatialReference","./Geometry","./Point","./Extent"],function(e,t,i,n,r,s,h,a){function c(e){return new a(parseFloat(e.x),parseFloat(e.y)-parseFloat(e.height),parseFloat(e.x)+parseFloat(e.width),parseFloat(e.y),e.spatialReference)}var o=t.clone(n.defaultRect),d=e(s,{declaredClass:"esri.geometry.Rect",type:"rect",getDefaults:function(){return t.mixin(this.inherited(arguments),o)},normalizeCtorArgs:function(e,i,n,r,s){return t.isObject(e)?e:{x:e,y:i,width:n,height:r,spatialReference:s}},getCenter:function(){return i.deprecated(this.declaredClass+".getCenter","Use .center instead","4.0"),this.center},_centerGetter:function(){var e,t;return e=this.x+this.width/2,t=this.y+this.height/2,new h(e,t,this.spatialReference)},offset:function(e,t){return new d(this.x+e,this.y+t,this.width,this.height,this.spatialReference)},intersects:function(e){return e.x+e.width<=this.x?!1:e.y+e.height<=this.y?!1:e.y>=this.y+this.height?!1:e.x>=this.x+this.width?!1:!0},_extentGetter:function(){return c(this)},update:function(e,t,n,r,s){return i.deprecated(this.declaredClass+".update","Use .set instead","4.0"),this.set({x:e,y:t,width:n,height:r,spatialReference:s}),this},clone:function(){return new d({x:this.x,y:this.y,width:this.width,height:this.height,spatialReference:this.spatialReference})},toJSON:function(){var e=this.spatialReference;return{x:this.x,y:this.y,width:this.width,height:this.height,spatialReference:e&&e.toJSON()}}});return d.defaultProps=o,d.fromJSON=function(e){return new d({x:e.x,y:e.y,width:e.width,height:e.height,spatialReference:e.spatialReference&&r.fromJSON(e.spatialReference)})},d});