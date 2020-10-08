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

define(["require","exports","tslib","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","./WGLBrush","../shaders/BackgroundPrograms"],(function(e,t,r,i,s,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._color=i.vec4f32.fromValues(1,0,0,1),t._initialized=!1,t}return r.__extends(t,e),t.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)},t.prototype.prepareState=function(e,t){var r=e.context;r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setBlendingEnabled(!1),r.setColorMask(!1,!1,!1,!1),r.setStencilOp(7680,7680,7681),r.setStencilWriteMask(255),r.setStencilFunctionSeparate(1032,516,t.stencilRef,255)},t.prototype.draw=function(e,t){var r=e.context;this._initialized||this._initialize(r),r.bindVAO(this._solidVertexArrayObject),r.bindProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),this._solidProgram.setUniform2fv("u_coord_range",t.coordRange),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),r.drawArrays(5,0,4),r.bindVAO()},t.prototype._initialize=function(e){if(this._initialized)return!0;var t=s.createProgram(e,a.background);if(!t)return!1;var r=new Int8Array([0,0,1,0,0,1,1,1]),i=s.BufferObject.createVertex(e,35044,r),o=new s.VertexArrayObject(e,a.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:i});return this._solidProgram=t,this._solidVertexArrayObject=o,this._initialized=!0,!0},t}(o.default);t.default=n}));