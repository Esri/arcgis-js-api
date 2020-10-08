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

define(["require","exports","../../webgl","../../webgl/Util"],(function(e,r,t,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.OverlayRenderTarget=void 0;var i=function(){function e(e,r,n,i){this._renderTarget=null,this.id=r+"_"+ ++n,this._renderTarget=new t.FramebufferObject(e,{colorTarget:0,depthStencilTarget:0},{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9987,hasMipmap:i,maxAnisotropy:8,width:0,height:0})}return e.prototype.dispose=function(){this._renderTarget.dispose(),this._renderTarget=null},e.prototype.getTexture=function(){return this._renderTarget?this._renderTarget.colorTexture:null},e.prototype.isValid=function(){return null!==this._renderTarget},e.prototype.resize=function(e,r){this._renderTarget.resize(e,r)},e.prototype.bind=function(e){e.bindFramebuffer(this._renderTarget)},e.prototype.generateMipMap=function(){this._renderTarget.colorTexture.descriptor.hasMipmap&&this._renderTarget.colorTexture.generateMipmap()},e.prototype.disposeRenderTargetMemory=function(){this._renderTarget&&this._renderTarget.resize(0,0)},e.prototype.getGpuMemoryUsage=function(){var e=0;return this._renderTarget&&(e+=n.getGpuMemoryUsage(this._renderTarget)),e},e}();r.OverlayRenderTarget=i}));