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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/compilerUtils","./Util"],function(e,t,r,a){function i(e,t){return e+"_"+t}var n=function(){function e(e){this.refCnt=0,this.glMaterial=e}return e.prototype.incRefCnt=function(){++this.refCnt},e.prototype.decRefCnt=function(){--this.refCnt,a.assert(this.refCnt>=0)},e.prototype.getRefCnt=function(){return this.refCnt},e.prototype.getGLMaterial=function(){return this.glMaterial},e}(),o=function(){function e(e,t){this._textureRep=e,this._programRep=t,this._id2glMaterialRef=new Map}return e.prototype.aquire=function(e,t){var r,a=i(e.id,t),o=this._id2glMaterialRef.get(a);if(null==o){var s=e.getGLMaterials()[t];r=s?new s(e,this._programRep,this._textureRep):void 0,o=new n(r),this._id2glMaterialRef.set(a,o)}else r=o.getGLMaterial();return o.incRefCnt(),r&&this.increaseProgramReferences(r),r},e.prototype.release=function(e,t){var r=i(e,t),a=this._id2glMaterialRef.get(r);if(a.decRefCnt(),0===a.getRefCnt()){var n=a.getGLMaterial();n&&(this.decreaseProgramReferences(n),n.dispose()),this._id2glMaterialRef.delete(r)}},e.prototype.updateMaterialParameters=function(e){for(var t=0,r=s;t<r.length;t++){var a=r[t],n=this._id2glMaterialRef.get(i(e,a));n&&n.getGLMaterial()&&this.updateParamsForMat(n.getGLMaterial())}},e.prototype.updateParamsForMat=function(e){e.updateParameters&&(this.decreaseProgramReferences(e),e.updateParameters(),this.increaseProgramReferences(e))},e.prototype.increaseProgramReferences=function(e){for(var t=e.getPrograms(),r=this._programRep,a=0;a<t.length;a++)r.increaseRefCount(t[a])},e.prototype.decreaseProgramReferences=function(e){for(var t=e.getPrograms(),r=this._programRep,a=0;a<t.length;a++)r.decreaseRefCount(t[a])},e}(),s=r.tuple("color","depth","depthShadowMap","normal","highlight");return o});