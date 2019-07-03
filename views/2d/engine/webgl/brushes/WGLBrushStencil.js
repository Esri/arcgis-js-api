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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../definitions","./WGLBrush","../shaders/BackgroundPrograms"],function(e,r,i,t,s,o,a,n){Object.defineProperty(r,"__esModule",{value:!0});s.enums.DataType,s.enums.Usage,s.enums.PrimitiveType,s.enums.CompareFunction,s.enums.Face;var d=function(r){function e(){var e=r.call(this)||this;return e._color=t.vec4f32.fromValues(1,0,0,1),e._initialized=!1,e}return i(e,r),e.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)},e.prototype.draw=function(e,r){var i=e.context;this._initialized||this._initialize(i),i.setStencilFunctionSeparate(1032,519,r.stencilRef,255),i.bindVAO(this._solidVertexArrayObject),i.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",r.dvsMat3),this._solidProgram.setUniform1f("u_coord_range",o.TILE_SIZE),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),i.drawArrays(5,0,4),i.bindVAO()},e.prototype._initialize=function(e){if(this._initialized)return!0;var r=s.createProgram(e,n.background);if(!r)return!1;var i=new Int8Array([0,0,1,0,0,1,1,1]),t=s.BufferObject.createVertex(e,35044,i),o=new s.VertexArrayObject(e,n.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:t});return this._solidProgram=r,this._solidVertexArrayObject=o,this._initialized=!0},e}(a.default);r.default=d});