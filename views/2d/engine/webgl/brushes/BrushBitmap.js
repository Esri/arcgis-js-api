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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../definitions","../VertexStream","./WGLBrush"],function(e,t,i,o,d,n){Object.defineProperty(t,"__esModule",{value:!0});var l={nearest:{defines:[],samplingMode:9728,mips:!1},bilinear:{defines:[],samplingMode:9729,mips:!1},bicubic:{defines:["bicubic"],samplingMode:9729,mips:!1},trilinear:{defines:[],samplingMode:9987,mips:!0}},r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._desc={path:"raster/bitmap",attributes:{a_position:0,a_texcoord:1}},e}return i(e,t),e.prototype.dispose=function(){this._quad&&this._quad.dispose()},e.prototype.prepareState=function(e,t){var i=e.context;i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(1,771,1,771),i.setColorMask(!0,!0,!0,!0),i.setStencilWriteMask(0),i.setStencilTestEnabled(!0),i.setStencilFunction(514,t.stencilRef,255)},e.prototype.draw=function(e,t){var i=e.context,n=e.renderingOptions,r=e.painter;if(t.source){e.timeline.begin(this.name),this._quad||(this._quad=new d(i,[0,0,1,0,0,1,1,1]));var a=function(e,t,i){if("dynamic"!==i.samplingMode)return l[i.samplingMode];var n=e.state,r=t.resolution/t.pixelRatio/n.resolution,a=Math.round(e.pixelRatio)!==e.pixelRatio,s=1.05<r||r<.95;return n.rotation||s||a||t.isSourceScaled||t.rotation?l.bilinear:l.nearest}(e,t,n),s=r.materialManager.getProgram(e,this._desc,a.defines);t.setSamplingProfile(a),t.bind(o.TEXTURE_BINDING_BITMAP),i.bindProgram(s),s.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),s.setUniform1i("u_texture",o.TEXTURE_BINDING_BITMAP),s.setUniform2fv("u_coordScale",t.coordScale),this._quad.draw(),e.timeline.end(this.name)}},e}(n.default);t.default=r});