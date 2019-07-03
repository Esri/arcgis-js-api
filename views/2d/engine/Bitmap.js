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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","@dojo/framework/shim/Set","../../webgl","./DisplayObject"],function(t,e,i,r,n,s){function o(t){return t&&"render"in t}function u(t){return t&&!("render"in t)}function h(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function a(t,e,i){var r={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0};return e&&i&&(r.width=e,r.height=i),new n.Texture(t,r)}function c(t){return t.updateTexture()}function d(t){l.has(t)&&(p.splice(p.indexOf(t),1),l.delete(t))}Object.defineProperty(e,"__esModule",{value:!0});var p=(n.enums.TextureType,n.enums.PixelFormat,n.enums.PixelType,n.enums.TextureWrapMode,n.enums.TextureSamplingMode,[]),l=new r.default,f=function(t){function e(e){void 0===e&&(e=null);var i=t.call(this)||this;return i._height=void 0,i.pixelRatio=1,i.resolution=0,i.rotation=0,i._source=null,i._width=void 0,i.x=0,i.y=0,i.source=e,i.requestRender=i.requestRender.bind(i),i}return i(e,t),Object.defineProperty(e.prototype,"height",{get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(t){this._height=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"source",{get:function(){return this._source},set:function(t){this._source=t,this.invalidateTexture()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceHeight",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceWidth",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(t){this._width=t},enumerable:!0,configurable:!0}),e.prototype.attach=function(){return c(this),t.prototype.attach.call(this),!0},e.prototype.detach=function(){this._texture.dispose(),this._texture=null,d(this)},e.prototype.invalidateTexture=function(){this.attached?c(this):d(this)},e.prototype.updateTexture=function(){this._texture||(this.source?this._texture=a(this.stage.context,this.sourceWidth,this.sourceHeight):this._texture=a(this.stage.context));var t=this.source;if(!t)return void this._texture.setData(null);this._texture.resize(this.sourceWidth,this.sourceHeight),o(t)?this._texture.setData(h(t)):u(t)&&this._texture.setData(t),this.ready(),this.requestRender()},e.prototype.setSamplingMode=function(t){if(this._texture){var e=t;if(!this._texture.descriptor.hasMipmap)return this.width===this.sourceHeight&&this.height===this.sourceHeight||(e=9729),void this._texture.setSamplingMode(e);e=9728===t?9985:9729===t?9987:t,this._texture.setSamplingMode(e)}},e.prototype.bind=function(t){if(this._texture){this.stage.context.bindTexture(this._texture,t)}},e.prototype.doRender=function(t){if(this.source&&this.width>0&&this.isReady){var e=this.stage.painter,i=t.state,r=i.resolution,n=this.resolution/this.pixelRatio/r;n<.05||e.drawBitmap(t,this,n)}},e}(s.DisplayObject);e.Bitmap=f});