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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","../../../../core/maybe","../../../webgl","./enums","./shaders/MaterialPrograms"],(function(r,e,t,a,o,i,n){var s=function(r){return r===i.WGLDrawPhase.HITTEST||r===i.WGLDrawPhase.LABEL_ALPHA},g=function(r,e,t,o){var n=r.rendererInfo,g=r.drawPhase;return e.getVariationHash()+"-"+o.join(".")+"-"+function(r){return(s(r)?1:0)|(r===i.WGLDrawPhase.HIGHLIGHT?2:0)}(g)+"-"+n.getVariationHash()+"-"+(a.isSome(t)&&t.join("."))};return function(){function r(r){this._programByKey=new Map,this._programCache=new o.ProgramCache(r)}return r.prototype.dispose=function(){this._programCache&&this._programCache.dispose()},r.prototype.getProgram=function(r,e,a,o){void 0===a&&(a=[]),void 0===o&&(o=[]);var i=e.path+a.join(".")+o.join(".");if(this._programByKey.has(i))return this._programByKey.get(i);var s=o.reduce((function(e,a){var o;return t({},e,((o={})[a]=r.driverTestResult[a],o))}),{}),g=t({},a.reduce((function(r,e){var a;return t({},r,((a={})[e]=!0,a))}),{}),s),h=e.path,u=e.attributes,p=this._programCache.getProgram(n.createProgramTemplate(h,u),g);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,p),p},r.prototype.getMaterialProgram=function(r,e,o,h,u,p){void 0===p&&(p=["ignoresSamplerPrecision"]);var m=g(r,e,u,p);if(this._programByKey.has(m))return this._programByKey.get(m);var c=function(r,e,o,n){var g=n.reduce((function(e,a){var o;return t({},e,((o={})[a]=r.driverTestResult[a],o))}),{}),h=t({},e.getVariation(),r.rendererInfo.getVariation(),{highlight:r.drawPhase===i.WGLDrawPhase.HIGHLIGHT,id:s(r.drawPhase)},g);if(a.isSome(o))for(var u=0,p=o;u<p.length;u++){h[p[u]]=!0}return h}(r,e,u,p),f=this._programCache.getProgram(n.createProgramTemplate(o,h),c);if(!f)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(m,f),f},r}()}));