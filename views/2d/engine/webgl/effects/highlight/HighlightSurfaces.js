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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../webgl"],function(e,r,i){Object.defineProperty(r,"__esModule",{value:!0});i.enums.TargetType,i.enums.DepthStencilTargetType,i.enums.TextureType,i.enums.PixelFormat,i.enums.PixelType,i.enums.TextureSamplingMode,i.enums.TextureWrapMode;function a(e,r,t){var s=new i.Texture(e,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:r,height:t,samplingMode:9729});return[s,i.FramebufferObject.createWithAttachments(e,s,{colorTarget:0,depthStencilTarget:2})]}var t=function(){function e(){this._width=void 0,this._height=void 0,this._resources=null}return e.prototype.dispose=function(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)},e.prototype._initialize=function(e,r,t){var s=a(e,this._width=r,this._height=t),i=s[0],o=s[1],u=a(e,r,t),n=u[0],h=u[1];this._resources={sharedBlur1Tex:i,sharedBlur1Fbo:o,sharedBlur2Tex:n,sharedBlur2Fbo:h}},e.prototype.setup=function(e,r,t){!this._resources||this._width===r&&this._height===t||this.dispose(),this._resources||this._initialize(e,r,t)},Object.defineProperty(e.prototype,"sharedBlur1Tex",{get:function(){return this._resources.sharedBlur1Tex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sharedBlur1Fbo",{get:function(){return this._resources.sharedBlur1Fbo},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sharedBlur2Tex",{get:function(){return this._resources.sharedBlur2Tex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sharedBlur2Fbo",{get:function(){return this._resources.sharedBlur2Fbo},enumerable:!0,configurable:!0}),e}();r.default=t});