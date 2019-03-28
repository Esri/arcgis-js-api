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

define(["require","exports","../../../../core/tsSupport/assignHelper","@dojo/framework/shim/Map","./enums","./shaders/MaterialPrograms","../../../webgl/programUtils"],function(r,e,p,a,m,u,t){var c=function(r){return r===m.WGLDrawPhase.HITTEST||r===m.WGLDrawPhase.LABEL_ALPHA},f=function(r,e,a){return a.getVariationHash()+"-"+((c(t=r)?1:0)|(t===m.WGLDrawPhase.HIGHLIGHT?2:0))+"-"+e.getVariationHash();var t};return function(){function r(r){this._programByKey=new a.default,this._programCache=new t.ProgramCache(r)}return r.prototype.dispose=function(){this._programCache&&this._programCache.dispose()},r.prototype.getProgram=function(r,e,a,t,o){var i=f(e,a,r);if(this._programByKey.has(i))return this._programByKey.get(i);var n,s,g=(n=e,s=a,p({},r.getVariation(),s.getVariation(),{highlight:n===m.WGLDrawPhase.HIGHLIGHT,id:c(n)})),h=this._programCache.getProgram(u.createProgramTemplate(t,o),g);if(!h)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,h),h},r}()});