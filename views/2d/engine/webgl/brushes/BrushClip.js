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

define(["require","exports","tslib","../../../../../core/libs/gl-matrix-2/vec4f32","../Utils","./WGLBrush","../shaders/BackgroundPrograms","../../../../webgl/programUtils"],(function(t,e,r,o,s,a,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._color=o.vec4f32.fromValues(0,1,0,1),e}return r.__extends(e,t),e.prototype.dispose=function(){this._program&&this._program.dispose()},e.prototype.prepareState=function(t){var e=t.context;e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255),e.setStencilFunction(519,0,255)},e.prototype.draw=function(t,e){var r=t.context,o=t.state;this._program||(this._program=n.createProgram(r,i.background));var a=this._program,l=s.createProgramDescriptor("clip",{geometry:[{location:0,name:"a_pos",count:2,type:5122}]}),c=e.getVAO(r,o,l.attributes,l.bufferLayouts);r.bindProgram(this._program),a.setUniform2fv("u_coord_range",[1,1]),a.setUniform4fv("u_color",this._color),a.setUniformMatrix3fv("u_dvsMat3",o.displayMat3),r.bindVAO(c),r.drawElements(4,c.indexBuffer.size,5125,0),r.bindVAO()},e}(a.default);e.default=l}));