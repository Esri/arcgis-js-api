// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/libs/gl-matrix-2/mat3","../../../core/libs/gl-matrix-2/mat3f32","../../../core/libs/gl-matrix-2/vec2f32","../../webgl","./DisplayObject","./ImageryBitmapSource"],(function(t,e,i,r,n,s,o,a,u){"use strict";function h(t,e,i){var r={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(r.width=e,r.height=i),new o.Texture(t,r)}Object.defineProperty(e,"__esModule",{value:!0}),e.Bitmap=void 0;var c=function(t){function e(e,i){void 0===e&&(e=null),void 0===i&&(i=!0);var r=t.call(this)||this;return r.requestRenderOnSourceChangedEnabled=i,r._textureInvalidated=!0,r.stencilRef=0,r.coordScale=[1,1],r._height=void 0,r.pixelRatio=1,r.resolution=0,r.rotation=0,r._source=null,r._width=void 0,r.x=0,r.y=0,r.transforms={dvs:n.mat3f32.create()},r.source=e,r.requestRender=r.requestRender.bind(r),r}return i.__extends(e,t),Object.defineProperty(e.prototype,"isSourceScaled",{get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(t){this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"source",{get:function(){return this._source},set:function(t){this._source=t,this.invalidateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sourceHeight",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sourceWidth",{get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(t){this._width=t},enumerable:!1,configurable:!0}),e.prototype.invalidateTexture=function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())},e.prototype.setTransform=function(t){var e=r.mat3.identity(this.transforms.dvs),i=t.toScreenNoRotation([0,0],this.x,this.y),n=i[0],o=i[1],a=this.resolution/this.pixelRatio/t.resolution,u=a*this.width,h=a*this.height,c=Math.PI*this.rotation/180;r.mat3.translate(e,e,s.vec2f32.fromValues(n,o)),r.mat3.translate(e,e,s.vec2f32.fromValues(u/2,h/2)),r.mat3.rotate(e,e,-c),r.mat3.translate(e,e,s.vec2f32.fromValues(-u/2,-h/2)),r.mat3.scaleByVec2(e,e,s.vec2f32.fromValues(u,h)),r.mat3.multiply(this.transforms.dvs,t.displayViewMat3,e)},e.prototype.setSamplingProfile=function(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))},e.prototype.bind=function(t,e){var i=t.context;this._texture&&i.bindTexture(this._texture,e)},e.prototype.updateTexture=function(t){var e,i=t.context;if(!this.stage)return null===(e=this._texture)||void 0===e||e.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=h(i,this.sourceWidth,this.sourceHeight):this._texture=h(i));var r=this.source;if(r){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(t){return t&&"render"in t}(r))if(r instanceof u.default){var n=r.getRenderedRasterPixels();this._texture.setData(n.renderedRasterPixels)}else this._texture.setData(function(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}(r));else(function(t){return t&&!("render"in t)})(r)&&this._texture.setData(r);this.ready()}else this._texture.setData(null)}},e.prototype.onAttach=function(){this.invalidateTexture()},e.prototype.onDetach=function(){this.invalidateTexture()},e}(a.DisplayObject);e.Bitmap=c}));