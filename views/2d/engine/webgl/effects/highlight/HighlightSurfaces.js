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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../../webgl"],(function(e,r,t){function s(e,r,s){var i=new t.Texture(e,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:r,height:s,samplingMode:9729});return[i,new t.FramebufferObject(e,{colorTarget:0,depthStencilTarget:2},i)]}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(){this._width=void 0,this._height=void 0,this._resources=null}return e.prototype.dispose=function(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)},e.prototype._initialize=function(e,r,t){this._width=r,this._height=t;var i=s(e,r,t),o=i[0],u=i[1],h=s(e,r,t),n=h[0],a=h[1];this._resources={sharedBlur1Tex:o,sharedBlur1Fbo:u,sharedBlur2Tex:n,sharedBlur2Fbo:a}},e.prototype.setup=function(e,r,t){!this._resources||this._width===r&&this._height===t||this.dispose(),this._resources||this._initialize(e,r,t)},Object.defineProperty(e.prototype,"sharedBlur1Tex",{get:function(){return this._resources.sharedBlur1Tex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sharedBlur1Fbo",{get:function(){return this._resources.sharedBlur1Fbo},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sharedBlur2Tex",{get:function(){return this._resources.sharedBlur2Tex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sharedBlur2Fbo",{get:function(){return this._resources.sharedBlur2Fbo},enumerable:!0,configurable:!0}),e}();r.default=i}));