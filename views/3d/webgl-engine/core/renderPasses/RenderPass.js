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

define(["require","exports","../../../../../core/PooledArray"],function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,r){this._rctx=e,this._techniqueRepository=r,this._draws=new t({initialSize:32,allocator:function(e){return e||{material:null,geometry:null,geometryRanges:null,bindDrawParams:null,depthSquaredHint:0,indexType:0}}}),this._passBoundTechniques=new Set,this._previouslyBoundMaterials=new Map,this._previouslyBoundDraw=new Map}return e.prototype.submitDraw=function(e,r,t,i,a){var n=this._draws.pushNew();n.geometry=r,n.geometryRanges=t,n.material=e,n.bindDrawParams=i,n.depthSquaredHint=a,n.indexType=r.indexed?r.vao.indexBuffer.indexType:0},e.prototype.dispatch=function(e){var r=this._rctx;this._passBoundTechniques.clear(),this._previouslyBoundMaterials.clear(),this._previouslyBoundDraw.clear();for(var t=null,i={repository:this._techniqueRepository},n=this._draws.length,s=0;s<n;s++){var o=this._draws.data[s],u=o.geometry,d=o.material.getTechnique(i,e,u.parameters);if(this._passBoundTechniques.has(d)||(d.bindPass(r,e),this._passBoundTechniques.add(d)),r.bindVAO(u.vao),d!==t&&(r.bindProgram(d.program),r.setPipelineState(d.pipeline),t=d),this._previouslyBoundMaterials.get(d)!==o.material&&(d.bindMaterial(r,o.material),this._previouslyBoundMaterials.set(d,o.material)),this._previouslyBoundDraw.get(d)!==o.bindDrawParams&&(d.bindDraw(o.bindDrawParams),this._previouslyBoundMaterials.set(d,o.material)),0!==o.indexType)for(var p=a.get(o.indexType),l=0;l<o.geometryRanges.length;l+=2){var h=o.geometryRanges[l],y=o.geometryRanges[l+1];r.drawElements(u.primitiveType,y,o.indexType,h*p)}else for(var l=0;l<o.geometryRanges.length;l+=2){var h=o.geometryRanges[l],y=o.geometryRanges[l+1];r.drawArrays(u.primitiveType,h,y)}}},e.prototype.prepareSubmit=function(){this._draws.clear()},e.prototype.finishSubmit=function(){this._draws.sort(function(e,r){return e.depthSquaredHint-r.depthSquaredHint})},Object.defineProperty(e.prototype,"count",{get:function(){return this._draws.length},enumerable:!0,configurable:!0}),e}();r.RenderPass=i;var a=new Map;a.set(5121,1),a.set(5123,2),a.set(5125,4)});