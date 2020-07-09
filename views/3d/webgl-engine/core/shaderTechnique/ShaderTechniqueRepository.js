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

define(["require","exports","tslib","../../../../../core/maybe","../../../../../core/promiseUtils"],(function(e,t,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){this.technique=e,this.refCount=0,this.refZeroFrame=0},s=function(){function e(e){this._context=e,this._perConstructorInstances=new Map,this._frameCounter=0,this._keepAliveFrameCount=1200}return Object.defineProperty(e.prototype,"viewingMode",{get:function(){return this._context.viewingMode},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"constructionContext",{get:function(){return this._context},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._perConstructorInstances.forEach((function(e){return e.forEach((function(e){return e.technique.dispose()}))})),this._perConstructorInstances.clear()},e.prototype.acquire=function(e,t){var r=t.key,n=this._perConstructorInstances.get(e);n||(n=new Map,this._perConstructorInstances.set(e,n));var o=n.get(r);return void 0===o&&(o=new i(new e(this._context,t)),n.set(r,o)),++o.refCount,o.technique},e.prototype.acquireAndReleaseExisting=function(e,t,r){return n.isNone(r)?this.acquire(e,t):t.key===r.key&&r instanceof e?r:(this.release(r),this.acquire(e,t))},e.prototype.release=function(e){var t=this._perConstructorInstances.get(e.constructor).get(e.key);t.refCount-=1,0===t.refCount&&(t.refZeroFrame=this._frameCounter)},e.prototype.frameUpdate=function(){var e=this;this._frameCounter++,this._perConstructorInstances.forEach((function(t,r){t.forEach((function(r,n){0===r.refCount&&r.refZeroFrame+e._keepAliveFrameCount<e._frameCounter&&(r.technique.dispose(),t.delete(n))})),0===t.size&&e._perConstructorInstances.delete(r)}))},e.prototype.getProgramsUsingUniform=function(e){return this._context.commonUniformStore.getPrograms(e)},e.prototype.hotReload=function(){return r.__awaiter(this,void 0,void 0,(function(){var e,t=this;return r.__generator(this,(function(n){switch(n.label){case 0:return e=new Array,this._perConstructorInstances.forEach((function(n,o){e.push(function(e,n){return r.__awaiter(t,void 0,void 0,(function(){var t,o=this;return r.__generator(this,(function(r){switch(r.label){case 0:return(t=n.shader)?[4,t.reload()]:[3,2];case 1:r.sent(),e.forEach((function(e){e.technique.reload(o._context)})),r.label=2;case 2:return[2]}}))}))}(n,o))})),[4,o.all(e)];case 1:return n.sent(),[2]}}))}))},e}();t.ShaderTechniqueRepository=s}));