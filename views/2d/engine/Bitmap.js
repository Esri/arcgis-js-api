// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f32","../../../core/libs/gl-matrix-2/vec2f32","../../webgl","./DisplayObject","./ImageryBitmapSource"],function(t,e,i,r,s,n,o,u,a){function h(t){return t&&"render"in t}function c(t){return t&&!("render"in t)}function l(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function d(t,e,i){var r={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(r.width=e,r.height=i),new o.Texture(t,r)}function f(t){return t.updateTexture()}function p(t){g.has(t)&&(m.splice(m.indexOf(t),1),g.delete(t))}Object.defineProperty(e,"__esModule",{value:!0});var m=(o.enums.TextureType,o.enums.PixelFormat,o.enums.PixelType,o.enums.TextureWrapMode,[]),g=new Set,x=function(t){function e(e,i){void 0===e&&(e=null),void 0===i&&(i=function(){return null});var r=t.call(this)||this;return r.stencilRef=0,r.coordScale=[1,1],r._height=void 0,r.pixelRatio=1,r.resolution=0,r.rotation=0,r._source=null,r._width=void 0,r.x=0,r.y=0,r.transforms={dvs:s.mat3f32.create()},r.source=e,r.requestRender=i,r}return i(e,t),Object.defineProperty(e.prototype,"isSourceScaled",{get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(t){this._height=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"source",{get:function(){return this._source},set:function(t){this._source=t,this.invalidateTexture()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceHeight",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sourceWidth",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(t){this._width=t},enumerable:!0,configurable:!0}),e.prototype.attach=function(){return f(this),!0},e.prototype.detach=function(){this._texture.dispose(),this._texture=null,p(this)},e.prototype.invalidateTexture=function(){this.attached?f(this):p(this)},e.prototype.setTransform=function(t){var e=r.mat3.identity(this.transforms.dvs),i=t.toScreenNoRotation([0,0],this.x,this.y),s=i[0],o=i[1],u=this.resolution/this.pixelRatio/t.resolution,a=u*this.width,h=u*this.height,c=Math.PI*this.rotation/180;r.mat3.translate(e,e,n.vec2f32.fromValues(s,o)),r.mat3.translate(e,e,n.vec2f32.fromValues(a/2,h/2)),r.mat3.rotate(e,e,-c),r.mat3.translate(e,e,n.vec2f32.fromValues(-a/2,-h/2)),r.mat3.scaleByVec2(e,e,n.vec2f32.fromValues(a,h)),r.mat3.multiply(this.transforms.dvs,t.displayViewMat3,e)},e.prototype.updateTexture=function(){this._texture||(this.source?this._texture=d(this.stage.context,this.sourceWidth,this.sourceHeight):this._texture=d(this.stage.context));var t=this.source;if(!t)return void this._texture.setData(null);if(this._texture.resize(this.sourceWidth,this.sourceHeight),h(t))if(t instanceof a.default){var e=t.getRenderedRasterPixels();this._texture.setData(e.renderedRasterPixels)}else this._texture.setData(l(t));else c(t)&&this._texture.setData(t);this.ready(),this.requestRender()},e.prototype.setSamplingProfile=function(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))},e.prototype.bind=function(t){if(this._texture){this.stage.context.bindTexture(this._texture,t)}},e}(u.DisplayObject);e.Bitmap=x});