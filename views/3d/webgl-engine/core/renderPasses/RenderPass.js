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

define(["require","exports","../../../../../core/PooledArray"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RenderPass=void 0;var i=function(){function e(e,t,i){void 0===i&&(i=0),this._rctx=e,this._techniqueRepository=t,this._sorting=i,this._draws=new r({initialSize:32,allocator:function(e){return e||{material:null,geometry:null,geometryRanges:null,bindDrawParams:null,depthSquaredHint:0,indexType:0}}}),this._passBoundTechniques=new Set,this._previouslyBoundMaterials=new Map,this._previouslyBoundDraw=new Map}return e.prototype.submitDraw=function(e,t,r,i,a){var n=this._draws.pushNew();n.geometry=t,n.geometryRanges=r,n.material=e,n.bindDrawParams=i,n.depthSquaredHint=a,n.indexType=t.indexed?t.vao.indexBuffer.indexType:0},e.prototype.dispatch=function(e){var t=this._rctx;this._passBoundTechniques.clear(),this._previouslyBoundMaterials.clear(),this._previouslyBoundDraw.clear();for(var r=null,i={repository:this._techniqueRepository},n=this._draws.length,s=0;s<n;s++){var o=this._draws.data[s],u=o.geometry,d=o.material.getTechnique(i,e,u.parameters);if(this._passBoundTechniques.has(d)||(d.bindPass(t,e),this._passBoundTechniques.add(d)),t.bindVAO(u.vao),d===r&&3===d.configuration.transparencyPassType||(t.bindProgram(d.program),t.setPipelineState(d.pipeline),r=d),this._previouslyBoundMaterials.get(d)!==o.material&&(d.bindMaterial(t,o.material,e),this._previouslyBoundMaterials.set(d,o.material)),this._previouslyBoundDraw.get(d)!==o.bindDrawParams&&(d.bindDraw(o.bindDrawParams,o.material,e),this._previouslyBoundMaterials.set(d,o.material)),0!==o.indexType)for(var p=a.get(o.indexType),l=0;l<o.geometryRanges.length;l+=2){var h=o.geometryRanges[l],y=o.geometryRanges[l+1];t.drawElements(u.primitiveType,y,o.indexType,h*p)}else for(l=0;l<o.geometryRanges.length;l+=2){h=o.geometryRanges[l],y=o.geometryRanges[l+1];t.drawArrays(u.primitiveType,h,y)}}},e.prototype.prepareSubmit=function(){this._draws.clear()},e.prototype.finishSubmit=function(){var e=0===this._sorting?1:-1;this._draws.sort((function(t,r){var i=e*(t.depthSquaredHint-r.depthSquaredHint);return 0!==i?i:t.geometry.vao.size-r.geometry.vao.size}))},Object.defineProperty(e.prototype,"count",{get:function(){return this._draws.length},enumerable:!1,configurable:!0}),e}();t.RenderPass=i;var a=new Map;a.set(5121,1),a.set(5123,2),a.set(5125,4)}));