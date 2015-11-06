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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","../SpatialReference","./Geometry","./Point","./Extent","../srUtils"],function(e,t,i,s,h,n,r,a,c,o){function f(e){return new c(parseFloat(e.x),parseFloat(e.y)-parseFloat(e.height),parseFloat(e.x)+parseFloat(e.width),parseFloat(e.y),e.spatialReference)}var l=e(r,{declaredClass:"esri.geometry.Rect",constructor:function(e,i,h,n,r){t.mixin(this,s.defaultRect),t.isObject(e)&&"extent"===e.type&&(i=e.ymax,h=e.getWidth(),n=e.getHeight(),r=e.spatialReference,e=e.xmin),t.isObject(e)?(t.mixin(this,e),this.spatialReference&&(this.spatialReference=o.createSpatialReference(this.spatialReference))):(this.x=e,this.y=i,this.width=h,this.height=n,this.spatialReference=r),this.verifySR()},getCenter:function(){return new a(this.x+this.width/2,this.y+this.height/2,this.spatialReference)},offset:function(e,t){return new l(this.x+e,this.y+t,this.width,this.height,this.spatialReference)},intersects:function(e){return e.x+e.width<=this.x?!1:e.y+e.height<=this.y?!1:e.y>=this.y+this.height?!1:e.x>=this.x+this.width?!1:!0},getExtent:function(){return f(this)},update:function(e,t,i,s,h){return this.x=e,this.y=t,this.width=i,this.height=s,this.spatialReference=h,this.clearCache(),this}});return i("extend-esri")&&(t.setObject("geometry.Rect",l,h),h.geometry._rectToExtent=f,h.geometry._extentToRect=function(e){return new l(e)}),l});