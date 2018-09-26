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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../definitions","../GeometryUtils","./WGLBrush","../shaders/BackgroundPrograms","../shaders/TileInfoPrograms","../../../tiling/enums","../../../../webgl/BufferObject","../../../../webgl/programUtils","../../../../webgl/Texture","../../../../webgl/VertexArrayObject"],function(t,e,r,i,o,n,a,s,l,u,f,_,h){Object.defineProperty(e,"__esModule",{value:!0});var m=function(t){function e(){var e=t.call(this)||this;return e._initialized=!1,e._maxWidth=0,e._color=new Float32Array([1,0,0,1]),e}return r(e,t),e.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null),this._canvas=null},e.prototype.draw=function(t,e){var r=t.context;if(e.status!==l.TileStatus.INITIALIZED){this._initialized||this._initialize(r),r.bindVAO(this._outlineVertexArrayObject),r.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._outlineProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._outlineProgram.setUniform1f("u_coord_range",i.TILE_SIZE),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),r.setLineWidth(2),r.drawArrays(3,0,4),r.bindVAO();var o=this._getTexture(r,e);o&&(r.bindVAO(this._tileInfoVertexArrayObject),r.bindProgram(this._tileInfoProgram),r.bindTexture(o,0),this._tileInfoProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._tileInfoProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform1f("u_coord_ratio",1),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",o.descriptor.width,o.descriptor.height),r.drawArrays(5,0,4),r.bindVAO())}},e.prototype._initialize=function(t){if(this._initialized)return!0;var e=f.createProgram(t,a.background),r=f.createProgram(t,s.tileInfo),i={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},o=new Int8Array([0,0,1,0,1,1,0,1]),n=u.createVertex(t,35044,o),l=new h(t,a.background.attributes,i,{geometry:n}),_=new Int8Array([0,0,1,0,0,1,1,1]),m=u.createVertex(t,35044,_),d=new h(t,s.tileInfo.attributes,i,{geometry:m});return this._outlineProgram=e,this._tileInfoProgram=r,this._outlineVertexArrayObject=l,this._tileInfoVertexArrayObject=d,this._initialized=!0,!0},e.prototype._getTexture=function(t,e){if(e.texture)return e.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=e.key.id,i=this._canvas.getContext("2d");i.font="24px sans-serif",i.textAlign="left",i.textBaseline="middle";var n=i.measureText(r),a=Math.pow(2,Math.ceil(o.log2(n.width+2)));a>this._maxWidth&&(this._maxWidth=a);return i.clearRect(0,0,this._maxWidth,32),i.fillStyle="blue",i.fillText(r,0,16),e.texture=new _(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),e.texture},e}(n.default);e.default=m});