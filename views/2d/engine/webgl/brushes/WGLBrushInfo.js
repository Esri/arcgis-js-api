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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../GeometryUtils","./WGLBrush","../shaders/BackgroundPrograms","../shaders/TileInfoPrograms"],function(t,e,r,i,d,a,n,f,h){Object.defineProperty(e,"__esModule",{value:!0});d.enums.DataType,d.enums.PrimitiveType,d.enums.TextureSamplingMode,d.enums.Usage,d.enums.TextureType,d.enums.PixelFormat,d.enums.PixelType;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._initialized=!1,t._color=i.vec4f32.fromValues(1,0,0,1),t._maxWidth=0,t}return r(t,e),t.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null},t.prototype.prepareState=function(t,e){var r=t.context;r.setBlendingEnabled(!0),r.setBlendFunctionSeparate(1,771,1,771),r.setColorMask(!0,!0,!0,!0),r.setStencilWriteMask(0),r.setStencilTestEnabled(!0),r.setStencilFunction(514,e.stencilRef,255)},t.prototype.draw=function(t,e){var r=t.context;if(e.isReady){this._initialized||this._initialize(r),r.bindVAO(this._outlineVertexArrayObject),r.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",e.size[0],e.size[1]),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),r.drawArrays(3,0,4),r.bindVAO();var i=this._getTexture(r,e);i&&(r.bindVAO(this._tileInfoVertexArrayObject),r.bindProgram(this._tileInfoProgram),r.bindTexture(i,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",1,1),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),r.drawArrays(5,0,4),r.bindVAO())}},t.prototype._initialize=function(t){if(this._initialized)return!0;var e=d.createProgram(t,f.background),r=d.createProgram(t,h.tileInfo),i={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},n=new Int8Array([0,0,1,0,1,1,0,1]),s=d.BufferObject.createVertex(t,35044,n),a=new d.VertexArrayObject(t,f.background.attributes,i,{geometry:s}),o=new Int8Array([0,0,1,0,0,1,1,1]),l=d.BufferObject.createVertex(t,35044,o),u=new d.VertexArrayObject(t,h.tileInfo.attributes,i,{geometry:l});return this._outlineProgram=e,this._tileInfoProgram=r,this._outlineVertexArrayObject=a,this._tileInfoVertexArrayObject=u,this._initialized=!0},t.prototype._getTexture=function(t,e){if(e.texture)return e.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=e.key.id,i=this._canvas.getContext("2d");i.font="24px sans-serif",i.textAlign="left",i.textBaseline="middle";var n=i.measureText(r),s=Math.pow(2,Math.ceil(a.log2(n.width+2)));s>this._maxWidth&&(this._maxWidth=s);return i.clearRect(0,0,this._maxWidth,32),i.fillStyle="blue",i.fillText(r,0,16),e.texture=new d.Texture(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),e.texture},t}(n.default);e.default=s});