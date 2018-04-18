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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../GeometryUtils","./WGLBrush","../shaders/glShaderSnippets","../../../../webgl/BufferObject","../../../../webgl/Program","../../../../webgl/Texture","../../../../webgl/VertexArrayObject"],function(t,e,r,i,n,o,a,s,l,f){Object.defineProperty(e,"__esModule",{value:!0});var _=function(t){function e(){var e=t.call(this)||this;return e._initialized=!1,e._maxWidth=0,e._color=new Float32Array([1,0,0,1]),e}return r(e,t),e.prototype.draw=function(t,e){var r=t.context;this._initialized||this._initialize(r),r.bindVAO(this._outlineVertexArrayObject),r.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._outlineProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._outlineProgram.setUniform1f("u_coord_range",512),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),r.setLineWidth(2),r.drawArrays(3,0,4),r.bindVAO();var i=this._getTexture(r,e);i&&(r.bindVAO(this._tileInfoVertexArrayObject),r.bindProgram(this._tileInfoProgram),r.bindTexture(i,0),this._tileInfoProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._tileInfoProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform1f("u_coord_ratio",1),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),r.drawArrays(5,0,4),r.bindVAO())},e.prototype._initialize=function(t){if(this._initialized)return!0;var e={a_pos:0},r=new s(t,o.backgroundVS,o.backgroundFS,e),i=new s(t,o.tileInfoVS,o.tileInfoFS,e),n={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},l=new Int8Array([0,0,1,0,1,1,0,1]),_=a.createVertex(t,35044,l),d=new f(t,e,n,{geometry:_}),u=new Int8Array([0,0,1,0,0,1,1,1]),h=a.createVertex(t,35044,u),m=new f(t,e,n,{geometry:h});return this._outlineProgram=r,this._tileInfoProgram=i,this._outlineVertexArrayObject=d,this._tileInfoVertexArrayObject=m,this._initialized=!0,!0},e.prototype._getTexture=function(t,e){if(e.texture)return e.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=e.key.id,n=this._canvas.getContext("2d");n.font="24px sans-serif",n.textAlign="left",n.textBaseline="middle";var o=n.measureText(r),a=Math.pow(2,Math.ceil(i.log2(o.width+2)));a>this._maxWidth&&(this._maxWidth=a);return n.clearRect(0,0,this._maxWidth,32),n.fillStyle="blue",n.fillText(r,0,16),e.texture=new l(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),e.texture},e}(n.default);e.default=_});