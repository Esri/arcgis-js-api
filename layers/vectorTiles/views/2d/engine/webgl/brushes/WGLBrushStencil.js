// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix/vec4","./WGLBrush","../shaders/glShaderSnippets","../../../../webgl/BufferObject","../../../../webgl/Program","../../../../webgl/VertexArrayObject"],(function(r,i,e,t,o,s,a,n,l){Object.defineProperty(i,"__esModule",{value:!0});var d=function(r){function i(){var i=r.call(this)||this;return i._color=t.create(),i._initialized=!1,i._color.set([1,0,0,1]),i}return e(i,r),i.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)},i.prototype.draw=function(r,i){var e=r.context;this._initialized||this._initialize(e),e.setStencilFunctionSeparate(1032,519,i.stencilRef,255),e.bindVAO(this._solidVertexArrayObject),e.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix4fv("u_transformMatrix",i.tileTransform.transform),this._solidProgram.setUniform2fv("u_normalized_origin",i.tileTransform.displayCoord),this._solidProgram.setUniform1f("u_coord_range",512),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),e.drawArrays(5,0,4),e.bindVAO()},i.prototype._initialize=function(r){if(this._initialized)return!0;var i={a_pos:0},e=new n(r,s.backgroundVS,s.backgroundFS,i);if(!e)return!1;var t=new Int8Array([0,0,1,0,0,1,1,1]),o=a.createVertex(r,35044,t),d=new l(r,i,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:o});return this._solidProgram=e,this._solidVertexArrayObject=d,this._initialized=!0,!0},i}(o.default);i.default=d}));