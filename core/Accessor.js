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

define(["require","exports","tslib","./deprecate","./Logger","./accessorSupport/decorators","./accessorSupport/get","./accessorSupport/Properties","./accessorSupport/set","./accessorSupport/testSupport","./accessorSupport/watch"],(function(t,e,r,o,s,n,c,i,a,p,u){function _(t){var e=typeof t;return null==t?{value:t}:Array.isArray(t)?{type:[t[0]],value:null}:"object"===e?t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t:"boolean"===e?{type:Boolean,value:t}:"string"===e?{type:String,value:t}:"number"===e?{type:Number,value:t}:"function"===e?{type:t,value:null}:void 0}return function(){function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(this.constructor===t)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new i.default(this)}),e.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,e)),p.interceptor&&p.interceptor.onInstanceConstruct(this)}return t.createSubclass=function(t){if(void 0===t&&(t={}),Array.isArray(t))throw new Error("Multi-inheritance unsupported since 4.16");var e=t.properties,o=t.declaredClass,s=t.constructor;delete t.declaredClass,delete t.properties,delete t.constructor;var c=this,i=function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var o=t.apply(this,e)||this;return s&&s.apply(o,e),o}return r.__extends(e,t),e}(c);i.__accessorMetadata__=c.__accessorMetadata__;var a=function(e){var r=t[e];i.prototype[e]="function"==typeof r?function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];this.inherited=function(){if(c.prototype[e])return c.prototype[e].apply(this,t)};var s=r.apply(this,t);return this.inherited=null,s}:t[e]};for(var p in t)a(p);for(var p in e){var u=_(e[p]);n.property(u)(i.prototype,p)}return n.subclass(o)(i)},t.prototype.postscript=function(t){var e=this.__accessor__,r=e.ctorArgs||t;e.initialize(),r&&(this.set(r),e.ctorArgs=null),e.constructed(),this.initialize()},t.prototype.initialize=function(){},t.prototype.destroy=function(){if(this.destroyed)try{throw new Error("instance is already destroyed")}catch(t){console.warn(t.stack)}else u.removeTarget(this),this.__accessor__.destroy(),p.interceptor&&p.interceptor.onInstanceDestroy(this)},Object.defineProperty(t.prototype,"initialized",{get:function(){return this.__accessor__&&this.__accessor__.initialized||!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"constructed",{get:function(){return this.__accessor__&&2===this.__accessor__.lifecycle||!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"destroyed",{get:function(){return this.__accessor__&&this.__accessor__.destroyed||!1},enumerable:!0,configurable:!0}),t.prototype.get=function(t){return c.default(this,t)},t.prototype.hasOwnProperty=function(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)},t.prototype.isInstanceOf=function(t){return o.deprecatedFunction(s.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof t},t.prototype.keys=function(){return this.__accessor__?this.__accessor__.keys():[]},t.prototype.set=function(t,e){return a.default(this,t,e),this},t.prototype.watch=function(t,e,r){return u.default(this,t,e,r)},t.prototype._clearOverride=function(t){return this.__accessor__.clearOverride(t)},t.prototype._override=function(t,e){return this.__accessor__.override(t,e)},t.prototype._isOverridden=function(t){return this.__accessor__.isOverridden(t)},t.prototype.notifyChange=function(t){this.__accessor__.propertyInvalidated(t)},t.prototype._get=function(t){return this.__accessor__.internalGet(t)},t.prototype._set=function(t,e){return this.__accessor__.internalSet(t,e),this},t}()}));