// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/text!./shaders/background.vs.glsl","dojo/text!./shaders/background.fs.glsl","dojo/text!./shaders/tileInfo.vs.glsl","dojo/text!./shaders/tileInfo.fs.glsl","../../webgl/Program","../../webgl/VertexArrayObject","../../webgl/BufferObject","../../webgl/Texture","../GeometryUtils"],function(t,e,r,i,o,n,s,a,l,d,f){var h=function(){function t(){this._initialized=!1,this._maxWidth=0,this._color=new Float32Array([1,0,0,1])}return t.prototype.render=function(t,e){this._initialized||this._initialize(t),t.bindVAO(this._outlineVertexArrayObject),t.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._outlineProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._outlineProgram.setUniform1f("u_coord_range",e.coordRange),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),t.setLineWidth(2),t.drawArrays(3,0,4),t.bindVAO();var r=this._getTexture(t,e);r&&(t.bindVAO(this._tileInfoVertexArrayObject),t.bindProgram(this._tileInfoProgram),t.bindTexture(r,0),this._tileInfoProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._tileInfoProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform1f("u_coord_ratio",e.coordRange/512),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",r.descriptor.width,r.descriptor.height),t.drawArrays(5,0,4),t.bindVAO())},t.prototype._initialize=function(t){if(this._initialized)return!0;var e={a_pos:0},d=new s(t,r,i,e),f=new s(t,o,n,e),h={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},_=new Int8Array([0,0,1,0,1,1,0,1]),m=l.createVertex(t,35044,_),u=new a(t,e,h,{geometry:m}),g=new Int8Array([0,0,1,0,0,1,1,1]),c=l.createVertex(t,35044,g),x=new a(t,e,h,{geometry:c});return this._outlineProgram=d,this._tileInfoProgram=f,this._vertexAttributes=h,this._outlineVertexArrayObject=u,this._tileInfoVertexArrayObject=x,this._initialized=!0,!0},t.prototype._getTexture=function(t,e){if(e.texture)return e.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=e.key.id,i=this._canvas.getContext("2d");i.font="24px sans-serif",i.textAlign="left",i.textBaseline="middle";var o=i.measureText(r),n=Math.pow(2,Math.ceil(f.log2(o.width+2)));n>this._maxWidth&&(this._maxWidth=n);var s=32;return i.clearRect(0,0,this._maxWidth,s),i.fillStyle=e.key.level>e.refKey.level?"red":"blue",i.fillText(r,0,s/2),e.texture=new d(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),e.texture},t}();return h});