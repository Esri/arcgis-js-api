// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Util"],function(e,t,r){function a(e,t){return e+"_"+t}var i=function(){function e(e){this.refCnt=0,this.glMaterial=e}return e.prototype.incRefCnt=function(){++this.refCnt},e.prototype.decRefCnt=function(){--this.refCnt,r.assert(this.refCnt>=0)},e.prototype.getRefCnt=function(){return this.refCnt},e.prototype.getGLMaterial=function(){return this.glMaterial},e}(),o=function(){function e(e,t){this.textureRep=e,this.programRep=t,this.id2glMaterialRef={}}return e.prototype.aquire=function(e){return this.aquireExt(e,"color")},e.prototype.aquireDepthShadowMap=function(e){return this.aquireExt(e,"depthShadowMap")},e.prototype.aquireDepth=function(e){return this.aquireExt(e,"depth")},e.prototype.aquireNormal=function(e){return this.aquireExt(e,"normal")},e.prototype.aquireHighlight=function(e){return this.aquireExt(e,"highlight")},e.prototype.aquireExt=function(e,t){var r,o=a(e.getId(),t),n=this.id2glMaterialRef[o];if(null==n){var s=e.getGLMaterials()[t];r=s?new s(e,this.programRep,this.textureRep):void 0,n=new i(r),this.id2glMaterialRef[o]=n}else r=n.getGLMaterial();return n.incRefCnt(),r&&this.increaseProgramReferences(r),r},e.prototype.release=function(e){this.releaseExt(e,"color")},e.prototype.releaseDepth=function(e){this.releaseExt(e,"depth")},e.prototype.releaseNormal=function(e){this.releaseExt(e,"normal")},e.prototype.releaseDepthShadowMap=function(e){this.releaseExt(e,"depthShadowMap")},e.prototype.releaseHighlight=function(e){this.releaseExt(e,"highlight")},e.prototype.releaseExt=function(e,t){var r=a(e,t),i=this.id2glMaterialRef[r];if(i.decRefCnt(),0===i.getRefCnt()){var o=i.getGLMaterial();o&&(this.decreaseProgramReferences(o),void 0!==o.dispose&&o.dispose()),delete this.id2glMaterialRef[r]}},e.prototype.updateMaterialParameters=function(e){var t=this.id2glMaterialRef[a(e,"color")];t&&t.getGLMaterial()&&this.updateParamsForMat(t.getGLMaterial());var r=this.id2glMaterialRef[a(e,"depth")];r&&r.getGLMaterial()&&this.updateParamsForMat(r.getGLMaterial());var i=this.id2glMaterialRef[a(e,"depthShadowMap")];i&&i.getGLMaterial()&&this.updateParamsForMat(i.getGLMaterial());var o=this.id2glMaterialRef[a(e,"normal")];o&&o.getGLMaterial()&&this.updateParamsForMat(o.getGLMaterial());var n=this.id2glMaterialRef[a(e,"highlight")];n&&n.getGLMaterial()&&this.updateParamsForMat(n.getGLMaterial())},e.prototype.updateParamsForMat=function(e){e.updateParameters&&e.updateParameters()},e.prototype.increaseProgramReferences=function(e){if(e.getAllPrograms)for(var t=e.getAllPrograms(),r=0;r<t.length;r++)this.programRep.increaseRefCount(t[r]);else this.programRep.increaseRefCount(e.getProgram())},e.prototype.decreaseProgramReferences=function(e){if(e.getAllPrograms)for(var t=e.getAllPrograms(),r=0;r<t.length;r++)this.programRep.decreaseRefCount(t[r]);else this.programRep.decreaseRefCount(e.getProgram())},e}();return o});