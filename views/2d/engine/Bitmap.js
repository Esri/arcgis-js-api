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

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(t,o,r,e){function i(t){return null!=t.context}var s=[0,0],n=function(t){function o(o){var r=t.call(this)||this;return r.source=o,r.coords=[0,0],r.resolution=0,r.rotation=0,r.width=0,r.height=0,r}return r(o,t),o.prototype.doRender=function(t){this.source&&this.source.ready&&i(t)&&this.renderCanvas2D(t)},o.prototype.renderCanvas2D=function(t){var o=this.source,r=t.context,e=t.state,i=e.resolution,n=e.rotation,h=this.resolution/i*e.pixelRatio;if(!(.05>h)){r.save();var a=e.toScreen(s,this.coords),u=a[0],d=a[1];if(h>.99&&1.01>h?r.translate(Math.round(u),Math.round(d)):(r.translate(u,d),r.scale(h,h)),n){var c=n*Math.PI/180;r.rotate(c)}o.rotation&&(r.translate(.5*this.width,.5*this.height),r.rotate(-o.rotation*Math.PI/180),r.translate(.5*-this.width,.5*-this.height));var l=(this.coords[0]-o.coords[0])/o.resolution,p=-(this.coords[1]-o.coords[1])/o.resolution,f=o.width*(this.resolution/o.resolution),v=o.height*(this.resolution/o.resolution);r.clearRect(0,0,this.width,this.height),o.draw(r,Math.round(l),Math.round(p),Math.round(f),Math.round(v),0,0,this.width,this.height),r.restore()}},o}(e);return n});