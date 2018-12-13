// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","../definitions","../GeometryUtils","./WGLBrush","../shaders/BackgroundPrograms","../shaders/TileInfoPrograms","../../../../webgl/BufferObject","../../../../webgl/programUtils","../../../../webgl/Texture","../../../../webgl/VertexArrayObject"],function(t,e,r,i,o,s,a,h,_,d,f,n,c){Object.defineProperty(e,"__esModule",{value:!0});var l=function(e){function t(){var t=e.call(this)||this;return t._initialized=!1,t._color=i.vec4f32.fromValues(1,0,0,1),t._maxWidth=0,t}return r(t,e),t.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null},t.prototype.draw=function(t,e){var r=t.context;if(e.isReady){this._initialized||this._initialize(r),r.bindVAO(this._outlineVertexArrayObject),r.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),this._outlineProgram.setUniform1f("u_coord_range",o.TILE_SIZE),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),r.setLineWidth(2),r.drawArrays(3,0,4),r.bindVAO();var i=this._getTexture(r,e);i&&(r.bindVAO(this._tileInfoVertexArrayObject),r.bindProgram(this._tileInfoProgram),r.bindTexture(i,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform1f("u_coord_ratio",1),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),r.drawArrays(5,0,4),r.bindVAO())}},t.prototype._initialize=function(t){if(this._initialized)return!0;var e=f.createProgram(t,h.background),r=f.createProgram(t,_.tileInfo),i={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},o=new Int8Array([0,0,1,0,1,1,0,1]),a=d.createVertex(t,35044,o),s=new c(t,h.background.attributes,i,{geometry:a}),n=new Int8Array([0,0,1,0,0,1,1,1]),l=d.createVertex(t,35044,n),u=new c(t,_.tileInfo.attributes,i,{geometry:l});return this._outlineProgram=e,this._tileInfoProgram=r,this._outlineVertexArrayObject=s,this._tileInfoVertexArrayObject=u,this._initialized=!0},t.prototype._getTexture=function(t,e){if(e.texture)return e.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=e.key.id,i=this._canvas.getContext("2d");i.font="24px sans-serif",i.textAlign="left",i.textBaseline="middle";var o=i.measureText(r),a=Math.pow(2,Math.ceil(s.log2(o.width+2)));a>this._maxWidth&&(this._maxWidth=a);return i.clearRect(0,0,this._maxWidth,32),i.fillStyle="blue",i.fillText(r,0,16),e.texture=new n(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),e.texture},t}(a.default);e.default=l});