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

define(["require","exports","../../../../core/maybe","./glUtil3D","../shaders/CompositingTechnique","../../../webgl/Util"],(function(e,t,i,o,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){this._rctx=e,this._techniqueRepository=t,this._techniques=new Set}return e.prototype.dispose=function(){var e=this;this._techniques.forEach((function(t){return e._techniqueRepository.release(t)})),this._techniques.clear(),i.isSome(this._vao)&&(this._vao.dispose(),this._vao=null)},e.prototype.composite=function(e,t,i){void 0===t&&(t=0),void 0===i&&(i=1),this.compositeInternal(e,t,i,0)},e.prototype.compositeTransparent=function(e,t,i,o){void 0===o&&(o=1);var s=this._rctx;a.alphaMode=3,a.function=3,a.hasOpacityFactor=1!==o;var c=this._techniqueRepository.acquire(r.CompositingTechnique,a);s.bindProgram(c.program),c.bindPipelineState(s),c.program.setUniform1i("colorTexture",1),s.bindTexture(e,1),c.program.setUniform1i("alphaTexture",2),s.bindTexture(t,2),c.program.setUniform1i("frontFaceTexture",3),s.bindTexture(i,3);var p=this.ensureVAO();s.bindVAO(p),s.drawArrays(5,0,n.vertexCount(p,"geometry")),this._techniqueRepository.release(c)},e.prototype.compositeSpecial=function(e,t){this.compositeInternal(e,0,1,t)},e.prototype.compositeInternal=function(e,t,i,o){var s=this._rctx;a.alphaMode=t,a.function=o,a.hasOpacityFactor=1!==i;var c=this._techniqueRepository.acquire(r.CompositingTechnique,a);s.bindProgram(c.program),c.bindPipelineState(s),c.program.setUniform1i("tex",1),a.hasOpacityFactor&&c.program.setUniform1f("opacity",i),s.bindTexture(e,1);var p=this.ensureVAO();s.bindVAO(p),s.drawArrays(5,0,n.vertexCount(p,"geometry")),this._techniqueRepository.release(c)},e.prototype.ensureVAO=function(){return i.isNone(this._vao)&&(this._vao=o.createQuadVAO(this._rctx)),this._vao},e}();t.default=s;var a=new r.CompositingTechniqueConfiguration}));