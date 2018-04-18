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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./Util"],function(t,e,r){function a(t,e){return t+"_"+e}var i=function(){function t(t){this.refCnt=0,this.glMaterial=t}return t.prototype.incRefCnt=function(){++this.refCnt},t.prototype.decRefCnt=function(){--this.refCnt,r.assert(this.refCnt>=0)},t.prototype.getRefCnt=function(){return this.refCnt},t.prototype.getGLMaterial=function(){return this.glMaterial},t}();return function(){function t(t,e){this.textureRep=t,this.programRep=e,this.id2glMaterialRef={}}return t.prototype.aquire=function(t){return this.aquireExt(t,"color")},t.prototype.aquireDepthShadowMap=function(t){return this.aquireExt(t,"depthShadowMap")},t.prototype.aquireDepth=function(t){return this.aquireExt(t,"depth")},t.prototype.aquireNormal=function(t){return this.aquireExt(t,"normal")},t.prototype.aquireHighlight=function(t){return this.aquireExt(t,"highlight")},t.prototype.aquireExt=function(t,e){var r,o=a(t.id,e),n=this.id2glMaterialRef[o];if(null==n){var s=t.getGLMaterials()[e];r=s?new s(t,this.programRep,this.textureRep):void 0,n=new i(r),this.id2glMaterialRef[o]=n}else r=n.getGLMaterial();return n.incRefCnt(),r&&this.increaseProgramReferences(r),r},t.prototype.release=function(t){this.releaseExt(t,"color")},t.prototype.releaseDepth=function(t){this.releaseExt(t,"depth")},t.prototype.releaseNormal=function(t){this.releaseExt(t,"normal")},t.prototype.releaseDepthShadowMap=function(t){this.releaseExt(t,"depthShadowMap")},t.prototype.releaseHighlight=function(t){this.releaseExt(t,"highlight")},t.prototype.releaseExt=function(t,e){var r=a(t,e),i=this.id2glMaterialRef[r];if(i.decRefCnt(),0===i.getRefCnt()){var o=i.getGLMaterial();o&&(this.decreaseProgramReferences(o),o.dispose()),delete this.id2glMaterialRef[r]}},t.prototype.updateMaterialParameters=function(t){var e=this.id2glMaterialRef[a(t,"color")];e&&e.getGLMaterial()&&this.updateParamsForMat(e.getGLMaterial());var r=this.id2glMaterialRef[a(t,"depth")];r&&r.getGLMaterial()&&this.updateParamsForMat(r.getGLMaterial());var i=this.id2glMaterialRef[a(t,"depthShadowMap")];i&&i.getGLMaterial()&&this.updateParamsForMat(i.getGLMaterial());var o=this.id2glMaterialRef[a(t,"normal")];o&&o.getGLMaterial()&&this.updateParamsForMat(o.getGLMaterial());var n=this.id2glMaterialRef[a(t,"highlight")];n&&n.getGLMaterial()&&this.updateParamsForMat(n.getGLMaterial())},t.prototype.updateParamsForMat=function(t){t.updateParameters&&t.updateParameters()},t.prototype.increaseProgramReferences=function(t){for(var e=t.getPrograms(),r=0;r<e.length;r++)this.programRep.increaseRefCount(e[r])},t.prototype.decreaseProgramReferences=function(t){for(var e=t.getPrograms(),r=0;r<e.length;r++)this.programRep.decreaseRefCount(e[r])},t}()});