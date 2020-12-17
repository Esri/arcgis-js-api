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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../GeometryUtils","./vtShaderSnippets","../../webgl/BufferObject","../../webgl/Program","../../webgl/Texture","../../webgl/VertexArrayObject"],(function(t,e,r,i,o,n,a,s){return function(){function t(){this._initialized=!1,this._maxWidth=0,this._color=new Float32Array([1,0,0,1])}return t.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null),this._tileInfoProgram&&(this._tileInfoProgram.dispose(),this._tileInfoProgram=null),this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null)},t.prototype.render=function(t,e){this._initialized||this._initialize(t),t.bindVAO(this._outlineVertexArrayObject),t.bindProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._outlineProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._outlineProgram.setUniform1f("u_coord_range",e.coordRange),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),t.setLineWidth(2),t.drawArrays(3,0,4),t.bindVAO();var r=this._getTexture(t,e);r&&(t.bindVAO(this._tileInfoVertexArrayObject),t.bindProgram(this._tileInfoProgram),t.bindTexture(r,0),this._tileInfoProgram.setUniformMatrix4fv("u_transformMatrix",e.tileTransform.transform),this._tileInfoProgram.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform1f("u_coord_ratio",e.coordRange/512),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",r.descriptor.width,r.descriptor.height),t.drawArrays(5,0,4),t.bindVAO())},t.prototype._initialize=function(t){if(this._initialized)return!0;var e={a_pos:0},r=new n(t,i.backgroundVS,i.backgroundFS,e),a=new n(t,i.tileInfoVS,i.tileInfoFS,e),l={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},_=new Int8Array([0,0,1,0,1,1,0,1]),f=o.createVertex(t,35044,_),h=new s(t,e,l,{geometry:f}),u=new Int8Array([0,0,1,0,0,1,1,1]),m=o.createVertex(t,35044,u),d=new s(t,e,l,{geometry:m});return this._outlineProgram=r,this._tileInfoProgram=a,this._outlineVertexArrayObject=h,this._tileInfoVertexArrayObject=d,this._initialized=!0,!0},t.prototype._getTexture=function(t,e){if(e.texture)return e.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","256"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var i=e.key.id,o=this._canvas.getContext("2d");o.font="24px sans-serif",o.textAlign="left",o.textBaseline="middle";var n=o.measureText(i),s=Math.pow(2,Math.ceil(r.log2(n.width+2)));s>this._maxWidth&&(this._maxWidth=s);return o.clearRect(0,0,this._maxWidth,32),o.fillStyle=e.key.level>e.refKey.level?"red":"blue",o.fillText(i,0,16),e.texture=new a(t,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),e.texture},t}()}));