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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../support/buffer/BufferView","../../../../webgl/Texture"],(function(t,e,i,r){Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){void 0===e&&(e=1),this.rctx=t,this.fieldCount=e,this.textureWidth=4096,this.dirty=!0,this.texture=new r(this.rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:this.textureWidth,height:1,flipped:!1}),this.data=new i.BufferViewVec4u8(new ArrayBuffer(4*this.textureWidth))}return t.prototype.dispose=function(){this.texture.dispose(),this.texture=void 0,this.data=void 0},t.prototype.setData=function(t,e,i,r,s,h){var u=t*this.fieldCount+e;this.dirty=!0,this.data.set(u,0,i),this.data.set(u,1,r),this.data.set(u,2,s),this.data.set(u,3,h)},t.prototype.setDataElement=function(t,e,i,r){var s=t*this.fieldCount+e;this.dirty=!0,this.data.set(s,i,r)},t.prototype.resizeToFit=function(t){var e=t*this.fieldCount;if(e>=this.data.count){var r=Math.ceil((e+1)/this.textureWidth)*this.textureWidth,s=new i.BufferViewVec4u8(new ArrayBuffer(4*r));s.typedBuffer.set(this.data.typedBuffer),this.data=s}},t.prototype.updateTexture=function(){if(this.dirty){var t=this.texture.descriptor.width,e=this.texture.descriptor.height;this.data.count>t*e&&this.texture.resize(t,this.data.count/t),this.texture.setData(this.data.typedBuffer),this.dirty=!1}},t.prototype.bind=function(t,e){this.rctx.bindTexture(this.texture,e.unit),t.setUniform1i(e.texName,e.unit),t.setUniform2f(e.invDimName,1/this.texture.descriptor.width,1/this.texture.descriptor.height)},t}();e.TextureBackedBuffer=s}));