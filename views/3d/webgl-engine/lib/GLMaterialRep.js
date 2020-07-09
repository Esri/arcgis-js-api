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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/Logger","../../../../core/maybe","../core/shaderLibrary/ShaderOutputOptions","./Util"],(function(t,e,i,r,a,n){var o=i.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRep"),u=function(){function t(t){this.refCnt=0,this.glMaterial=t}return t.prototype.incRefCnt=function(){++this.refCnt},t.prototype.decRefCnt=function(){--this.refCnt,n.assert(this.refCnt>=0)},t.prototype.getRefCnt=function(){return this.refCnt},t.prototype.getGLMaterial=function(){return this.glMaterial},t}();return function(){function t(t,e,i){this._textureRep=t,this._techniqueRep=e,this.onMaterialChanged=i,this._id2glMaterialRef=new Map}return t.prototype.acquire=function(t,e){this.ownMaterial(t);var i,r=a.getShaderOutputID(t.id,e),n=this._id2glMaterialRef.get(r);return null==n?(i=t.getGLMaterial({material:t,techniqueRep:this._techniqueRep,textureRep:this._textureRep,output:e}),n=new u(i),this._id2glMaterialRef.set(r,n)):i=n.getGLMaterial(),n.incRefCnt(),i},t.prototype.release=function(t,e){var i=a.getShaderOutputID(t.id,e),r=this._id2glMaterialRef.get(i);if(r.decRefCnt(),0===r.getRefCnt()){var n=r.getGLMaterial();n&&n.dispose(),this._id2glMaterialRef.delete(i)}},t.prototype.materialChanged=function(t){for(var e=0,i=a.ShaderOutputTypes;e<i.length;e++){var r=i[e];if(5!==r.output&&6!==r.output){var n=this._id2glMaterialRef.get(a.getShaderOutputID(t.id,r.output));if(n&&n.getGLMaterial()){var o=n.getGLMaterial();o.updateParameters&&o.updateParameters()}}}this.onMaterialChanged&&this.onMaterialChanged(t)},t.prototype.ownMaterial=function(t){r.isSome(t.materialRepository)&&t.materialRepository!==this&&o.error("Material is already owned by a different material repository"),t.materialRepository=this},t}()}));