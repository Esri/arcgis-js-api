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

define(["require","exports","tslib","../../../../core/maybe","../../../webgl","./enums","./shaders/MaterialPrograms"],(function(r,e,a,t,i,n,o){var s=function(r){return r===n.WGLDrawPhase.HITTEST||r===n.WGLDrawPhase.LABEL_ALPHA},g=function(r,e,a,i){var o=r.rendererInfo,g=r.drawPhase;return e.getVariationHash()+"-"+i.join(".")+"-"+function(r){return(s(r)?1:0)|(r===n.WGLDrawPhase.HIGHLIGHT?2:0)}(g)+"-"+o.getVariationHash()+"-"+(t.isSome(a)&&a.join("."))};return function(){function r(r){this._programByKey=new Map,this._programCache=new i.ProgramCache(r)}return r.prototype.dispose=function(){this._programCache&&this._programCache.dispose()},r.prototype.getProgram=function(r,e,t,i){void 0===t&&(t=[]),void 0===i&&(i=[]);var n=e.path+t.join(".")+i.join(".");if(this._programByKey.has(n))return this._programByKey.get(n);var s=i.reduce((function(e,t){var i;return a.__assign(a.__assign({},e),((i={})[t]=r.driverTestResult[t],i))}),{}),g=a.__assign(a.__assign({},t.reduce((function(r,e){var t;return a.__assign(a.__assign({},r),((t={})[e]=!0,t))}),{})),s),h=e.path,_=e.attributes,u=this._programCache.getProgram(o.createProgramTemplate(h,_),g);if(!u)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(n,u),u},r.prototype.getMaterialProgram=function(r,e,i,h,_,u){void 0===u&&(u=["ignoresSamplerPrecision"]);var m=g(r,e,_,u);if(this._programByKey.has(m))return this._programByKey.get(m);var p=function(r,e,i,o){var g=o.reduce((function(e,t){var i;return a.__assign(a.__assign({},e),((i={})[t]=r.driverTestResult[t],i))}),{}),h=a.__assign(a.__assign(a.__assign(a.__assign({},e.getVariation()),r.rendererInfo.getVariation()),{highlight:r.drawPhase===n.WGLDrawPhase.HIGHLIGHT,id:s(r.drawPhase)}),g);if(t.isSome(i))for(var _=0,u=i;_<u.length;_++){h[u[_]]=!0}return h}(r,e,_,u),c=this._programCache.getProgram(o.createProgramTemplate(i,h),p);if(!c)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(m,c),c},r}()}));