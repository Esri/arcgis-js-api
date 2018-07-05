// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","./Geometry","./Point","./Extent","../srUtils"],function(t,e,i,s,h,n,r,a,c){function o(t){return new a(parseFloat(t.x),parseFloat(t.y)-parseFloat(t.height),parseFloat(t.x)+parseFloat(t.width),parseFloat(t.y),t.spatialReference)}var l=t(n,{declaredClass:"esri.geometry.Rect",type:"rect",x:0,y:0,width:100,height:100,constructor:function(t,e,i,s,n){h.isObject(t)&&"extent"===t.type&&(e=t.ymax,i=t.getWidth(),s=t.getHeight(),n=t.spatialReference,t=t.xmin),h.isObject(t)?(h.mixin(this,t),this.spatialReference&&(this.spatialReference=c.createSpatialReference(this.spatialReference))):(this.x=t,this.y=e,this.width=i,this.height=s,this.spatialReference=n),this.verifySR()},getCenter:function(){return new r(this.x+this.width/2,this.y+this.height/2,this.spatialReference)},offset:function(t,e){return new l(this.x+t,this.y+e,this.width,this.height,this.spatialReference)},intersects:function(t){return!(t.x+t.width<=this.x)&&(!(t.y+t.height<=this.y)&&(!(t.y>=this.y+this.height)&&!(t.x>=this.x+this.width)))},getExtent:function(){return o(this)},update:function(t,e,i,s,h){return this.x=t,this.y=e,this.width=i,this.height=s,this.spatialReference=h,this.clearCache(),this}});return i("extend-esri")&&(e.setObject("geometry.Rect",l,s),s.geometry._rectToExtent=o,s.geometry._extentToRect=function(t){return new l(t)}),l});