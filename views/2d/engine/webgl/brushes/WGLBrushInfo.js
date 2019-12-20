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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","./WGLBrush","../shaders/BackgroundPrograms","../shaders/TileInfoPrograms"],function(e,t,r,i,c,o,f,d){Object.defineProperty(t,"__esModule",{value:!0});c.enums.DataType,c.enums.PrimitiveType,c.enums.TextureSamplingMode,c.enums.Usage,c.enums.TextureType,c.enums.TextureWrapMode,c.enums.PixelFormat,c.enums.PixelType;var s=300,n=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._color=i.vec4f32.fromValues(1,0,0,1),e}return r(e,t),e.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null},e.prototype.prepareState=function(e){var t=e.context;t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(1,771,1,771),t.setColorMask(!0,!0,!0,!0),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1)},e.prototype.draw=function(e,t){var r=e.context;if(t.isReady){this._loadWGLResources(r),r.bindVAO(this._outlineVertexArrayObject),r.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",t.coordRange[0],t.coordRange[1]),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),r.drawArrays(3,0,4),r.bindVAO();var i=this._getTexture(r,t);i&&(r.bindVAO(this._tileInfoVertexArrayObject),r.bindProgram(this._tileInfoProgram),r.bindTexture(i,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.coordRange[0]/t.size[0],t.coordRange[1]/t.size[1]),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),r.drawArrays(5,0,4),r.bindVAO())}},e.prototype._loadWGLResources=function(e){if(!this._outlineProgram||!this._tileInfoProgram){var t=c.createProgram(e,f.background),r=c.createProgram(e,d.tileInfo),i={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},o=new Int8Array([0,0,1,0,1,1,0,1]),n=c.BufferObject.createVertex(e,35044,o),s=new c.VertexArrayObject(e,f.background.attributes,i,{geometry:n}),a=new Int8Array([0,0,1,0,0,1,1,1]),l=c.BufferObject.createVertex(e,35044,a),u=new c.VertexArrayObject(e,d.tileInfo.attributes,i,{geometry:l});this._outlineProgram=t,this._tileInfoProgram=r,this._outlineVertexArrayObject=s,this._tileInfoVertexArrayObject=u}},e.prototype._getTexture=function(e,t){if(t.texture)return t.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width",""+s),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=t.triangleCount,i=t.key.id;0<t.triangleCount&&(i+=", "+r);var o=this._canvas,n=o.getContext("2d");return n.font="24px sans-serif",n.textAlign="left",n.textBaseline="top",n.clearRect(0,0,s,32),n.fillStyle=1e5<r?(n.fillStyle="red",n.fillRect(0,0,s,32),"black"):(n.clearRect(0,0,s,32),"blue"),n.fillText(i,0,0),t.texture=new c.Texture(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071},o),t.texture},e}(o.default);t.default=n});