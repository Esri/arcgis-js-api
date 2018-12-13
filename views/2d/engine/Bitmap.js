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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","@dojo/framework/shim/Set","./DisplayObject","../../webgl/Texture"],function(t,e,i,r,n,o){function s(t){return t&&"render"in t}function h(t){return t&&!("render"in t)}function u(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function a(t){return new o(t,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0})}function c(t){return t.updateTexture()}function d(t){f.has(t)&&(p.splice(p.indexOf(t),1),f.delete(t))}Object.defineProperty(e,"__esModule",{value:!0});var l=[0,0],p=[],f=new r.default,_=function(t){function e(e){void 0===e&&(e=null);var i=t.call(this)||this;return i._height=void 0,i.pixelRatio=1,i.resolution=0,i.rotation=0,i._source=null,i._width=void 0,i.x=0,i.y=0,i.source=e,i.requestRender=i.requestRender.bind(i),i}return i(e,t),Object.defineProperty(e.prototype,"height",{get:function(){return void 0!==this._height?this._height:this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},set:function(t){this._height=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"source",{get:function(){return this._source},set:function(t){this._source=t,this.invalidateTexture()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return void 0!==this._width?this._width:this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},set:function(t){this._width=t},enumerable:!0,configurable:!0}),e.prototype.attach=function(){return this._texture=a(this.stage.context),c(this),!0},e.prototype.detach=function(){this._texture.dispose(),this._texture=null,d(this),t.prototype.detach.call(this)},e.prototype.invalidateTexture=function(){this.attached?c(this):d(this)},e.prototype.updateTexture=function(){if(this._texture){var t=this.source;if(!t)return void this._texture.setData(null);this._texture.resize(this.width,this.height),s(t)?this._texture.setData(u(t)):h(t)&&this._texture.setData(t),this.ready(),this.requestRender()}},e.prototype.doRender=function(t){if(this.source&&this.width>0&&this.isReady){var e=this.stage,i=e.context,r=e.painter,n=t.state,o=t.pixelRatio,s=n.resolution,h=n.rotation,u=this.resolution/this.pixelRatio/s;if(!(u<.05)){var a=n.toScreen(l,this.x,this.y),c=a[0],d=a[1];!(h+this.rotation)&&u<1.05&&u>.95?this._texture.setSamplingMode(9728):this._texture.setSamplingMode(9729),r.drawImage(i,this._texture,c,d,this.width*u,this.height*u,-Math.PI*h/180,-Math.PI*this.rotation/180,this.opacity*t.globalOpacity,o,t.drawPhase)}}},e}(n.DisplayObject);e.Bitmap=_});