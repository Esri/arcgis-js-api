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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(t,r,o,e){function n(t){return null!=t.context}var i=[0,0],s=function(t){function r(r){var o=t.call(this)||this;return o.source=r,o.coords=[0,0],o.resolution=0,o.rotation=0,o.width=0,o.height=0,o.source.onReady(function(){return o.requestRender()}),o}return o(r,t),r.prototype.attach=function(t){return!0},r.prototype.detach=function(){},r.prototype.render=function(t){this.source&&this.source.ready&&n(t)&&this.renderCanvas2D(t)},r.prototype.renderCanvas2D=function(t){var r=this.source,o=t.context,e=t.state,n=e.resolution,s=e.rotation,a=this.resolution/n;if(!(.05>a)){o.save();var h=e.toScreen(i,this.coords),u=h[0],c=h[1];if(1===a?o.translate(Math.round(u),Math.round(c)):(o.translate(u,c),o.scale(a,a)),s){var d=s*Math.PI/180;o.rotate(d)}r.rotation&&(o.translate(.5*r.width,.5*r.height),o.rotate(-r.rotation*Math.PI/180),o.translate(.5*-r.width,.5*-r.height));var l=(this.coords[0]-r.coords[0])/r.resolution,p=-(this.coords[1]-r.coords[1])/r.resolution,f=r.width*(this.resolution/r.resolution),v=r.height*(this.resolution/r.resolution);o.clearRect(0,0,this.width,this.height),r.draw(o,Math.round(l),Math.round(p),Math.round(f),Math.round(v),0,0,this.width,this.height),o.restore()}},r}(e);return s});