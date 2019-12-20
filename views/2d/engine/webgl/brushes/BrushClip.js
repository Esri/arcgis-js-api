// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec4f32","../Utils","./WGLBrush","../shaders/BackgroundPrograms","../../../../webgl/programUtils"],function(e,t,r,o,n,a,l,c){Object.defineProperty(t,"__esModule",{value:!0});var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._color=o.vec4f32.fromValues(0,1,0,1),e}return r(e,t),e.prototype.dispose=function(){this._program&&this._program.dispose()},e.prototype.prepareState=function(e){var t=e.context;t.setStencilTestEnabled(!0),t.setBlendingEnabled(!1),t.setFaceCullingEnabled(!1),t.setColorMask(!1,!1,!1,!1),t.setStencilOp(7680,7680,7681),t.setStencilWriteMask(255),t.setStencilFunction(519,0,255)},e.prototype.draw=function(e,t){var r=e.context,o=e.state;this._program||(this._program=c.createProgram(r,l.background));var a=this._program,s=n.createProgramDescriptor("clip",{geometry:[{location:0,name:"a_pos",count:2,type:5122}]}),i=t.getVAO(r,o,s.attributes,s.bufferLayouts);r.bindProgram(this._program),a.setUniform2fv("u_coord_range",[1,1]),a.setUniform4fv("u_color",this._color),a.setUniformMatrix3fv("u_dvsMat3",o.displayMat3),r.bindVAO(i),r.drawElements(4,i.indexBuffer.size,5125,0),r.bindVAO()},e}(a.default);t.default=s});