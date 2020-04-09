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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","./WGLBrush","../shaders/BackgroundPrograms","../shaders/TileInfoPrograms"],(function(e,t,r,i,o,n,s,a){Object.defineProperty(t,"__esModule",{value:!0});o.enums.DataType,o.enums.PrimitiveType,o.enums.TextureSamplingMode,o.enums.Usage,o.enums.TextureType,o.enums.TextureWrapMode,o.enums.PixelFormat,o.enums.PixelType;var l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._color=i.vec4f32.fromValues(1,0,0,1),t}return r(t,e),t.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null},t.prototype.prepareState=function(e){var t=e.context;t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(1,771,1,771),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1)},t.prototype.draw=function(e,t){var r=e.context;if(t.isReady){this._loadWGLResources(r),r.bindVAO(this._outlineVertexArrayObject),r.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",t.coordRange[0],t.coordRange[1]),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),r.drawArrays(3,0,4),r.bindVAO();var i=this._getTexture(r,t);i&&(r.bindVAO(this._tileInfoVertexArrayObject),r.bindProgram(this._tileInfoProgram),r.bindTexture(i,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.coordRange[0]/t.size[0],t.coordRange[1]/t.size[1]),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),r.drawArrays(5,0,4),r.bindVAO())}},t.prototype._loadWGLResources=function(e){if(!this._outlineProgram||!this._tileInfoProgram){var t=o.createProgram(e,s.background),r=o.createProgram(e,a.tileInfo),i={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},n=new Int8Array([0,0,1,0,1,1,0,1]),l=o.BufferObject.createVertex(e,35044,n),u=new o.VertexArrayObject(e,s.background.attributes,i,{geometry:l}),c=new Int8Array([0,0,1,0,0,1,1,1]),f=o.BufferObject.createVertex(e,35044,c),d=new o.VertexArrayObject(e,a.tileInfo.attributes,i,{geometry:f});this._outlineProgram=t,this._tileInfoProgram=r,this._outlineVertexArrayObject=u,this._tileInfoVertexArrayObject=d}},t.prototype._getTexture=function(e,t){if(t.texture)return t.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","300"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=t.triangleCount,i=t.key.id;t.triangleCount>0&&(i+=", "+r);var n=this._canvas,s=n.getContext("2d");return s.font="24px sans-serif",s.textAlign="left",s.textBaseline="top",s.clearRect(0,0,300,32),r>1e5?(s.fillStyle="red",s.fillRect(0,0,300,32),s.fillStyle="black"):(s.clearRect(0,0,300,32),s.fillStyle="blue"),s.fillText(i,0,0),t.texture=new o.Texture(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071},n),t.texture},t}(n.default);t.default=l}));