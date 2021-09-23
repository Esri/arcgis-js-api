/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./deprecate","./Logger","./accessorSupport/get","./accessorSupport/metadata","./accessorSupport/Properties","./accessorSupport/set","./accessorSupport/watch","./accessorSupport/decorators/property","./accessorSupport/decorators/subclass"],(function(t,e,r,s,n,c,i,o,a,u){"use strict";function _(t){if(null==t)return{value:t};if(Array.isArray(t))return{type:[t[0]],value:null};switch(typeof t){case"object":return t.constructor&&t.constructor.__accessorMetadata__||t instanceof Date?{type:t.constructor,value:t}:t;case"boolean":return{type:Boolean,value:t};case"string":return{type:String,value:t};case"number":return{type:Number,value:t};case"function":return{type:t,value:null};default:return}}return function(){function h(...t){if(this.constructor===h)throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,value:new c(this)}),t.length>0&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,t))}h.createSubclass=function(e={}){if(Array.isArray(e))throw new Error("Multi-inheritance unsupported since 4.16");const{properties:r,declaredClass:s,constructor:c}=e;delete e.declaredClass,delete e.properties,delete e.constructor;const i=this;let o=function(e){function r(...r){var s;return(s=e.call(this,...r)||this).inherited=null,c&&c.apply(t._assertThisInitialized(s),r),s}return t._inheritsLoose(r,e),r}(i);n.getOwnClassMetadata(o.prototype);for(const t in e){const r=e[t];o.prototype[t]="function"==typeof r?function(...e){const s=this.inherited;let n;this.inherited=function(...e){if(i.prototype[t])return i.prototype[t].apply(this,e)};try{n=r.apply(this,e)}catch(c){throw this.inherited=s,c}return this.inherited=s,n}:e[t]}for(const t in r){const e=_(r[t]);a.property(e)(o.prototype,t)}return u.subclass(s)(o)};var l=h.prototype;return l.postscript=function(t){const e=this.__accessor__,r=e.ctorArgs||t;e.initialize(),r&&(this.set(r),e.ctorArgs=null),e.constructed(),this.initialize()},l.initialize=function(){},l.destroy=function(){this.destroyed||(o.removeTarget(this),this.__accessor__.destroy())},l.commitProperty=function(t){this.get(t)},l.get=function(t){return s.get(this,t)},l.hasOwnProperty=function(t){return this.__accessor__?this.__accessor__.has(t):Object.prototype.hasOwnProperty.call(this,t)},l.isInstanceOf=function(t){return e.deprecatedFunction(r.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"}),this instanceof t},l.keys=function(){return this.__accessor__?this.__accessor__.keys():[]},l.set=function(t,e){return i.set(this,t,e),this},l.watch=function(t,e,r){return o.watch(this,t,e,r)},l._clearOverride=function(t){return this.__accessor__.clearOverride(t)},l._override=function(t,e){return this.__accessor__.override(t,e)},l._isOverridden=function(t){return this.__accessor__.isOverridden(t)},l.notifyChange=function(t){this.__accessor__.notifyChange(t)},l._get=function(t){return this.__accessor__.internalGet(t)},l._set=function(t,e){return this.__accessor__.internalSet(t,e),this},t._createClass(h,[{key:"initialized",get:function(){return this.__accessor__&&this.__accessor__.initialized||!1}},{key:"constructed",get:function(){return this.__accessor__&&2===this.__accessor__.lifecycle||!1}},{key:"destroyed",get:function(){return this.__accessor__&&this.__accessor__.destroyed||!1}}]),h}()}));
