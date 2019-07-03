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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../GeometryUtils"],function(e,t,r,i,a){i.enums.CompareFunction,i.enums.DataType,i.enums.PixelFormat,i.enums.PixelType,i.enums.PrimitiveType,i.enums.TextureSamplingMode,i.enums.TextureType,i.enums.Usage;return function(){function e(e){this._initialized=!1,this._color=r.vec4f32.fromValues(1,0,0,1),this._maxWidth=0,this._programOptions={id:!1,pattern:!1},this._programCache=e}return e.prototype.dispose=function(){this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null),this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null)},e.prototype.render=function(e,t){this._initialized||this._initialize(e);var r=this._programCache.getProgram(0,0,this._programOptions);if(r){e.bindVAO(this._outlineVertexArrayObject),e.bindProgram(r),r.setUniformMatrix4fv("u_transformMatrix",t.tileTransform.transform),r.setUniform2fv("u_normalized_origin",t.tileTransform.displayCoord),r.setUniform1f("u_coord_range",t.coordRange),r.setUniform1f("u_depth",0),r.setUniform4fv("u_color",this._color),e.drawArrays(3,0,4),e.bindVAO(),t.triangleCount>1e5&&(e.setStencilFunction(514,t.stencilData.reference,t.stencilData.mask),e.setStencilTestEnabled(!0),e.bindVAO(this._quadVertexArrayObject),r.setUniform4f("u_color",.9,0,0,.35),e.drawArrays(5,0,4),e.bindVAO(),e.setStencilTestEnabled(!1));var i=this._getTexture(e,t);if(i){var a=this._programCache.getProgram(7,0,null);a&&(e.bindVAO(this._tileInfoVertexArrayObject),e.bindProgram(a),e.bindTexture(i,0),a.setUniformMatrix4fv("u_transformMatrix",t.tileTransform.transform),a.setUniform2fv("u_normalized_origin",t.tileTransform.displayCoord),a.setUniform1f("u_depth",0),a.setUniform1f("u_coord_ratio",t.coordRange/512),a.setUniform2f("u_delta",8,8),a.setUniform2f("u_dimensions",i.descriptor.width,i.descriptor.height),e.drawArrays(5,0,4),e.bindVAO())}}},e.prototype._initialize=function(e){if(this._initialized)return!0;var t={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},r=new Int8Array([0,0,1,0,1,1,0,1]),a=i.BufferObject.createVertex(e,35044,r),n=new i.VertexArrayObject(e,this._programCache.getProgramAttributes(0),t,{geometry:a}),s=new Int8Array([0,0,0,1,1,0,1,1]),o=i.BufferObject.createVertex(e,35044,s),l=new i.VertexArrayObject(e,this._programCache.getProgramAttributes(0),t,{geometry:o}),u=new Int8Array([0,0,1,0,0,1,1,1]),c=i.BufferObject.createVertex(e,35044,u),f=new i.VertexArrayObject(e,this._programCache.getProgramAttributes(7),t,{geometry:c});return this._outlineVertexArrayObject=n,this._quadVertexArrayObject=l,this._tileInfoVertexArrayObject=f,this._initialized=!0,!0},e.prototype._getTexture=function(e,t){if(t.texture)return t.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","512"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var r=t.key.id+", "+t.triangleCount,n=this._canvas.getContext("2d");n.font="24px sans-serif",n.textAlign="left",n.textBaseline="middle";var s=n.measureText(r),o=Math.pow(2,Math.ceil(a.log2(s.width+2)));o>this._maxWidth&&(this._maxWidth=o);n.clearRect(0,0,this._maxWidth,32),n.fillStyle="blue";var l,u=0,c=0;if(t.refKeys)for(var f=0,m=Object.keys(t.refKeys);f<m.length;f++){var d=m[f],h=t.refKeys[d],_=h.match(/\d+/);l=parseInt(_[0],10),isNaN(l)||(c++,t.key.level>l&&u++)}return u===c?n.fillStyle="red":u>0&&(n.fillStyle="purple"),n.fillText(r,0,16),t.texture=new i.Texture(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas),t.texture},e}()});