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

define(["require","exports","tslib","../../../../core/maybe","../../../webgl","./enums","./shaders/MaterialPrograms"],(function(r,e,a,t,n,i,s){"use strict";var o=function(r){return r===i.WGLDrawPhase.HITTEST||r===i.WGLDrawPhase.LABEL_ALPHA},g=function(r,e,a,n){var s=r.rendererInfo,g=r.drawPhase;return e.getVariationHash()+"-"+n.join(".")+"-"+function(r){return(o(r)?1:0)|(r===i.WGLDrawPhase.HIGHLIGHT?2:0)}(g)+"-"+s.getVariationHash()+"-"+(t.isSome(a)&&a.join("."))};return function(){function r(r){this._programByKey=new Map,this._programCache=new n.ProgramCache(r)}return r.prototype.dispose=function(){this._programCache&&this._programCache.dispose()},r.prototype.getProgram=function(r,e,t,n){void 0===t&&(t=[]),void 0===n&&(n=[]);var i=e.vsPath+"."+e.fsPath+JSON.stringify(t)+n.join(".");if(this._programByKey.has(i))return this._programByKey.get(i);var o=n.reduce((function(e,t){var n;return a.__assign(a.__assign({},e),((n={})[t]=r.driverTestResult[t],n))}),{}),g=a.__assign(a.__assign({},t.map((function(r){return"string"==typeof r?{name:r,value:!0}:r})).reduce((function(r,e){var t;return a.__assign(a.__assign({},r),((t={})[e.name]=e.value,t))}),{})),o),h=e.vsPath,u=e.fsPath,_=e.attributes,m=this._programCache.getProgram(s.createProgramTemplate(h,u,_),g);if(!m)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,m),m},r.prototype.getMaterialProgram=function(r,e,n,h,u,_){void 0===_&&(_=["ignoresSamplerPrecision"]);var m=g(r,e,u,_);if(this._programByKey.has(m))return this._programByKey.get(m);var f=function(r,e,n,s){var g=s.reduce((function(e,t){var n;return a.__assign(a.__assign({},e),((n={})[t]=r.driverTestResult[t],n))}),{}),h=a.__assign(a.__assign(a.__assign(a.__assign({},e.getVariation()),r.rendererInfo.getVariation()),{highlight:r.drawPhase===i.WGLDrawPhase.HIGHLIGHT,id:o(r.drawPhase)}),g);if(t.isSome(n))for(var u=0,_=n;u<_.length;u++){h[_[u]]=!0}return h}(r,e,u,_),p=this._programCache.getProgram(s.createProgramTemplate(n,n,h),f);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(m,p),p},r}()}));