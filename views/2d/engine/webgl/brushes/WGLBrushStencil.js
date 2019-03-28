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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec4f32","../definitions","./WGLBrush","../shaders/BackgroundPrograms","../../../../webgl/BufferObject","../../../../webgl/programUtils","../../../../webgl/VertexArrayObject"],function(r,e,t,i,o,s,a,n,d,l){Object.defineProperty(e,"__esModule",{value:!0});var c=function(e){function r(){var r=e.call(this)||this;return r._color=i.vec4f32.fromValues(1,0,0,1),r._initialized=!1,r}return t(r,e),r.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)},r.prototype.draw=function(r,e){var t=r.context;this._initialized||this._initialize(t),t.setStencilFunctionSeparate(1032,519,e.stencilRef,255),t.bindVAO(this._solidVertexArrayObject),t.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),this._solidProgram.setUniform1f("u_coord_range",o.TILE_SIZE),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),t.drawArrays(5,0,4),t.bindVAO()},r.prototype._initialize=function(r){if(this._initialized)return!0;var e=d.createProgram(r,a.background);if(!e)return!1;var t=new Int8Array([0,0,1,0,0,1,1,1]),i=n.createVertex(r,35044,t),o=new l(r,a.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:i});return this._solidProgram=e,this._solidVertexArrayObject=o,this._initialized=!0},r}(s.default);e.default=c});