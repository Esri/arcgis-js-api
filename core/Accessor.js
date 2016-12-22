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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./declare","./accessorSupport/Properties","./accessorSupport/get","./accessorSupport/introspection","./accessorSupport/set","./accessorSupport/watch"],function(t,e,s,r,i,c){e=e["default"],t.before(function(e,s){t.hasMixin(e,o)&&r.processPrototype(s)}),t.after(function(e){t.hasMixin(e,o)&&(r.processClass(e),Object.defineProperties(e.prototype,{initialized:{get:function(){return this.__accessor__&&this.__accessor__.initialized||!1}},destroyed:{get:function(){return this.__accessor__&&this.__accessor__.destroyed||!1}}}))});var n="__accessor__",o=t(null,{declaredClass:"esri.core.Accessor","-chains-":{initialize:"after",destroy:"before"},constructor:function(){if(this.constructor===o)throw new Error("[accessor] cannot instanciate Accessor. This can be fixed by creating a subclass of Accessor");if(Object.defineProperty(this,n,{value:new e(this)}),arguments.length>0&&this.normalizeCtorArgs){for(var t=[],s=0;s<arguments.length;s++)t.push(arguments[s]);this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t)}},__accessor__:null,postscript:function(t){var e,s=this.__accessor__,r=s.ctorArgs||t;null!=this.getDefaults&&(e=this.getDefaults(r||{}),this.set(e)),s.initialize(),r&&(this.set(r),s.ctorArgs=null),this.initialize()},initialize:function(){},destroy:function(){if(this.__accessor__)c.removeTarget(this),this.__accessor__.destroy();else try{throw new Error("instance is already destroyed")}catch(t){console.warn(t.stack)}},get:function(t){return s.get(this,t)},hasOwnProperty:function(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)},keys:function(){return this.__accessor__?this.__accessor__.keys():[]},set:function(t,e){return i.set(this,t,e),this},watch:function(t,e,s){return c.watch(this,t,e,s)},_clearOverride:function(t){return this.__accessor__.clearOverride(t)},_override:function(t,e){return this.__accessor__.override(t,e)},_isOverridden:function(t){return this.__accessor__.isOverridden(t)},notifyChange:function(t){this.__accessor__.propertyInvalidated(t)},_get:function(t){return this.__accessor__.internalGet(t)},_set:function(t,e){return this.__accessor__.internalSet(t,e)}});return o});