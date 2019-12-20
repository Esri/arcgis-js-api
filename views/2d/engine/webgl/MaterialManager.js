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

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/maybe","../../../webgl","./enums","./shaders/MaterialPrograms"],function(r,e,u,h,t,p,m){var c=function(r){return r===p.WGLDrawPhase.HITTEST||r===p.WGLDrawPhase.LABEL_ALPHA},f=function(r,e,t,a){var o,i=r.rendererInfo,n=r.drawPhase;return e.getVariationHash()+"-"+a.join(".")+"-"+((c(o=n)?1:0)|(o===p.WGLDrawPhase.HIGHLIGHT?2:0))+"-"+i.getVariationHash()+"-"+(h.isSome(t)&&t.join("."))};return function(){function r(r){this._programByKey=new Map,this._programCache=new t.ProgramCache(r)}return r.prototype.dispose=function(){this._programCache&&this._programCache.dispose()},r.prototype.getProgram=function(a,r,e,t){void 0===e&&(e=[]),void 0===t&&(t=[]);var o=r.path+e.join(".")+t.join(".");if(this._programByKey.has(o))return this._programByKey.get(o);var i=t.reduce(function(r,e){var t;return u({},r,((t={})[e]=a.driverTestResult[e],t))},{}),n=u({},e.reduce(function(r,e){var t;return u({},r,((t={})[e]=!0,t))},{}),i),s=r.path,g=r.attributes,h=this._programCache.getProgram(m.createProgramTemplate(s,g),n);if(!h)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(o,h),h},r.prototype.getMaterialProgram=function(r,e,t,a,o,i){void 0===i&&(i=["ignoresSamplerPrecision"]);var n=f(r,e,o,i);if(this._programByKey.has(n))return this._programByKey.get(n);var s=function(a,r,e,t){var o=t.reduce(function(r,e){var t;return u({},r,((t={})[e]=a.driverTestResult[e],t))},{}),i=u({},r.getVariation(),a.rendererInfo.getVariation(),{highlight:a.drawPhase===p.WGLDrawPhase.HIGHLIGHT,id:c(a.drawPhase)},o);if(h.isSome(e))for(var n=0,s=e;n<s.length;n++)i[s[n]]=!0;return i}(r,e,o,i),g=this._programCache.getProgram(m.createProgramTemplate(t,a),s);if(!g)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(n,g),g},r}()});