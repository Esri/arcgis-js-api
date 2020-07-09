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

define(["require","exports","tslib","../definitions","../VertexStream","./WGLBrush"],(function(e,t,i,n,r,a){Object.defineProperty(t,"__esModule",{value:!0});var s={nearest:{defines:[],samplingMode:9728,mips:!1},bilinear:{defines:[],samplingMode:9729,mips:!1},bicubic:{defines:["bicubic"],samplingMode:9729,mips:!1},trilinear:{defines:[],samplingMode:9987,mips:!0}},o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._desc={path:"raster/bitmap",attributes:{a_position:0,a_texcoord:1}},t}return i.__extends(t,e),t.prototype.dispose=function(){this._quad&&this._quad.dispose()},t.prototype.prepareState=function(e,t){var i=e.context;i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(1,771,1,771),i.setColorMask(!0,!0,!0,!0),i.setStencilWriteMask(0),i.setStencilTestEnabled(!0),i.setStencilFunction(514,t.stencilRef,255)},t.prototype.draw=function(e,t){var i=e.context,a=e.renderingOptions,o=e.painter;if(t.source){e.timeline.begin(this.name),this._quad||(this._quad=new r(i,[0,0,1,0,0,1,1,1]));var d=function(e,t,i){if("dynamic"===i.samplingMode){var n=e.state,r=t.resolution/t.pixelRatio/n.resolution,a=Math.round(e.pixelRatio)!==e.pixelRatio,o=r>1.05||r<.95;return n.rotation||o||a||t.isSourceScaled||t.rotation?s.bilinear:s.nearest}return s[i.samplingMode]}(e,t,a),l=o.materialManager.getProgram(e,this._desc,d.defines);t.setSamplingProfile(d),t.bind(n.TEXTURE_BINDING_BITMAP),i.bindProgram(l),l.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),l.setUniform1i("u_texture",n.TEXTURE_BINDING_BITMAP),l.setUniform2fv("u_coordScale",t.coordScale),this._quad.draw(),e.timeline.end(this.name)}},t}(a.default);t.default=o}));