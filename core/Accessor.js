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

define(["./declare","./accessorSupport/Properties","./accessorSupport/get","./accessorSupport/introspection","./accessorSupport/set","./accessorSupport/watch","./accessorSupport/testSupport"],function(t,e,r,s,c,i,o){e=e.default,t.before(function(e,r){t.hasMixin(e,n)&&s.processPrototype(r)}),t.after(function(e){t.hasMixin(e,n)&&(s.processClass(e),Object.defineProperties(e.prototype,{initialized:{get:function(){return this.__accessor__&&this.__accessor__.initialized||!1}},constructed:{get:function(){return this.__accessor__&&2===this.__accessor__.lifecycle||!1}},destroyed:{get:function(){return this.__accessor__&&this.__accessor__.destroyed||!1}}}))});var n=t(null,{declaredClass:"esri.core.Accessor","-chains-":{initialize:"after",destroy:"before"},constructor:function(){if(this.constructor===n)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");if(Object.defineProperty(this,"__accessor__",{value:new e(this)}),arguments.length>0&&this.normalizeCtorArgs){for(var t=[],r=0;r<arguments.length;r++)t.push(arguments[r]);this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t)}o.interceptor&&o.interceptor.onInstanceConstruct(this)},__accessor__:null,postscript:function(t){var e=this.__accessor__,r=e.ctorArgs||t;e.initialize(),r&&(this.set(r),e.ctorArgs=null),e.constructed(),this.initialize()},initialize:function(){},destroy:function(){if(this.destroyed)try{throw new Error("instance is already destroyed")}catch(t){console.warn(t.stack)}else i.removeTarget(this),this.__accessor__.destroy(),o.interceptor&&o.interceptor.onInstanceDestroy(this)},get:function(t){return r.get(this,t)},hasOwnProperty:function(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)},keys:function(){return this.__accessor__?this.__accessor__.keys():[]},set:function(t,e){return c.set(this,t,e),this},watch:function(t,e,r){return i.watch(this,t,e,r)},_clearOverride:function(t){return this.__accessor__.clearOverride(t)},_override:function(t,e){return this.__accessor__.override(t,e)},_isOverridden:function(t){return this.__accessor__.isOverridden(t)},notifyChange:function(t){this.__accessor__.propertyInvalidated(t)},_get:function(t){return this.__accessor__.internalGet(t)},_set:function(t,e){return this.__accessor__.internalSet(t,e)}});return n});