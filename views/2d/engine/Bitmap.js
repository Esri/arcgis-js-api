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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(t,e,r,i){var s=[0,0];return function(t){function e(e){var r=t.call(this)||this;return r.height=0,r.resolution=0,r.rotation=0,r._source=null,r._sourceHandle=null,r.width=0,r.x=0,r.y=0,r.source=e,r.requestRender=r.requestRender.bind(r),r}return r(e,t),Object.defineProperty(e.prototype,"source",{get:function(){return this._source},set:function(t){this._sourceHandle&&(this._sourceHandle.remove(),this._sourceHandle=null),this._source=t,this._source&&(this._sourceHandle=this._source.on("update",this.requestRender)),this.requestRender()},enumerable:!0,configurable:!0}),e.prototype.doRender=function(t){this.source&&this.source.ready&&this.renderCanvas2D(t)},e.prototype.renderCanvas2D=function(t){var e=this.source,r=t.context,i=t.state,o=i.resolution,n=i.rotation,h=this.resolution/o*i.pixelRatio;if(!(h<.05)){r.save();var u=i.toScreen(s,this.x,this.y),a=u[0],d=u[1];if(h>.99&&h<1.01?r.translate(Math.round(a),Math.round(d)):(r.translate(a,d),r.scale(h,h)),n){var c=n*Math.PI/180;r.rotate(c)}e.rotation&&(r.translate(.5*this.width,.5*this.height),r.rotate(-e.rotation*Math.PI/180),r.translate(.5*-this.width,.5*-this.height));var l=e.resolution||this.resolution,p=(this.x-e.x)/l,f=-(this.y-e.y)/l,v=(e.width||this.width)*(this.resolution/l),y=(e.height||this.height)*(this.resolution/l);r.clearRect(0,0,this.width,this.height),e.draw(r,Math.round(p),Math.round(f),Math.round(v),Math.round(y),0,0,this.width,this.height),r.restore()}},e}(i)});