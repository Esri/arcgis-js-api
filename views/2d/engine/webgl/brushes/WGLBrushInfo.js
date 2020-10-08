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

define(["require","exports","tslib","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","./WGLBrush","../shaders/BackgroundPrograms","../shaders/TileInfoPrograms"],(function(t,e,r,i,o,n,a,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._color=i.vec4f32.fromValues(1,0,0,1),e}return r.__extends(e,t),e.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null},e.prototype.prepareState=function(t){var e=t.context;e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)},e.prototype.draw=function(t,e){var r=t.context;if(e.isReady){this._loadWGLResources(r),r.bindVAO(this._outlineVertexArrayObject),r.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),this._outlineProgram.setUniform2f("u_coord_range",e.coordRange[0],e.coordRange[1]),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),r.drawArrays(3,0,4),r.bindVAO();var i=this._getTexture(r,e);i&&(r.bindVAO(this._tileInfoVertexArrayObject),r.bindProgram(this._tileInfoProgram),r.bindTexture(i,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",e.coordRange[0]/e.size[0],e.coordRange[1]/e.size[1]),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),r.drawArrays(5,0,4),r.bindVAO())}},e.prototype._loadWGLResources=function(t){if(!this._outlineProgram||!this._tileInfoProgram){var e=o.createProgram(t,a.background),r=o.createProgram(t,s.tileInfo),i={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},n=new Int8Array([0,0,1,0,1,1,0,1]),l=o.BufferObject.createVertex(t,35044,n),u=new o.VertexArrayObject(t,a.background.attributes,i,{geometry:l}),c=new Int8Array([0,0,1,0,0,1,1,1]),f=o.BufferObject.createVertex(t,35044,c),d=new o.VertexArrayObject(t,s.tileInfo.attributes,i,{geometry:f});this._outlineProgram=e,this._tileInfoProgram=r,this._outlineVertexArrayObject=u,this._tileInfoVertexArrayObject=d}},e.prototype._getTexture=function(t,e){if(e.texture&&e.triangleCountReportedInDebug===e.triangleCount)return e.texture;e.triangleCountReportedInDebug=e.triangleCount,this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","300"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=e.triangleCount,i=e.key.id;e.triangleCount>0&&(i+=", "+r);var n=this._canvas,a=n.getContext("2d");return a.font="24px sans-serif",a.textAlign="left",a.textBaseline="top",a.clearRect(0,0,300,32),r>1e5?(a.fillStyle="red",a.fillRect(0,0,300,32),a.fillStyle="black"):(a.clearRect(0,0,300,32),a.fillStyle="blue"),a.fillText(i,0,0),e.texture=new o.Texture(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071},n),e.texture},e}(n.default);e.default=l}));