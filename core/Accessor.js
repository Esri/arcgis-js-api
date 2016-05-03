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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["./declare","./accessorSupport/Properties","./accessorSupport/get","./accessorSupport/introspection","./accessorSupport/set","./accessorSupport/watch"],function(t,e,r,s,c,i){e=e["default"],t.before(function(e,r){if(t.hasMixin(e,o)){if(s.hasPrototypeMetadata(r))throw new Error("[accessor] classMetadata '"+r.declaredClass+"' already used.");s.createPrototypeMetadata(r)}}),t.after(function(e){t.hasMixin(e,o)&&s.defineProperties(e)});var o=t(null,{declaredClass:"esri.core.Accessor","-chains-":{initialize:"after",destroy:"before"},constructor:function(){if(this.constructor===o)throw new Error("[accessor] cannot instanciate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{value:new e(this),enumerable:!1,configurable:!1,writable:!0}),arguments.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,Array.prototype.slice.call(arguments)))},__accessor__:null,postscript:function(t){var e,r=this.__accessor__,s=r.ctorArgs||t;e=this.getDefaults?this.getDefaults(s?s:{}):null,e&&Object.getOwnPropertyNames(e).forEach(function(t){r.setDefault(t,e[t])},this),r.initialize(),s&&(this.set(s),r.ctorArgs=null),this.initialize()},initialize:function(){},destroy:function(){if(this.__accessor__)i.removeTarget(this),this.__accessor__.destroy(),this.__accessor__=null;else try{throw new Error("instance is already destroyed")}catch(t){console.warn(t.stack)}},get:function(t){return r.get(this,t)},hasOwnProperty:function(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)},keys:function(){return this.__accessor__?this.__accessor__.keys():[]},notifyChange:function(t){this.__accessor__.propertyInvalidated(t)},set:function(t,e){return c.set(this,t,e),this},watch:function(t,e,r){return i.watch(this,t,e,r)},_clearOverride:function(t){return this.__accessor__.clearOverride(t)},_override:function(t,e){return this.__accessor__.override(t,e)},_get:function(t){return this.__accessor__.internalGet(t)},_set:function(t,e){return this.__accessor__.internalSet(t,e)}});return o});