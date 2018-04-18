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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(t,r,e,i){var o=[0,0];return function(t){function r(r){var e=t.call(this)||this;return e.source=r,e.height=0,e.resolution=0,e.rotation=0,e.width=0,e.x=0,e.y=0,e}return e(r,t),r.prototype.doRender=function(t){this.source&&this.source.ready&&this.renderCanvas2D(t)},r.prototype.renderCanvas2D=function(t){var r=this.source,e=t.context,i=t.state,s=i.resolution,h=i.rotation,n=this.resolution/s*i.pixelRatio;if(!(n<.05)){e.save();var a=i.toScreen(o,this.x,this.y),u=a[0],d=a[1];if(n>.99&&n<1.01?e.translate(Math.round(u),Math.round(d)):(e.translate(u,d),e.scale(n,n)),h){var l=h*Math.PI/180;e.rotate(l)}r.rotation&&(e.translate(.5*this.width,.5*this.height),e.rotate(-r.rotation*Math.PI/180),e.translate(.5*-this.width,.5*-this.height));var c=(this.x-r.x)/r.resolution,p=-(this.y-r.y)/r.resolution,v=r.width*(this.resolution/r.resolution),f=r.height*(this.resolution/r.resolution);e.clearRect(0,0,this.width,this.height),r.draw(e,Math.round(c),Math.round(p),Math.round(v),Math.round(f),0,0,this.width,this.height),e.restore()}},r}(i)});