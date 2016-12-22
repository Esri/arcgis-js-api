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

define(["./declare","./accessoireSupport/introspect","./accessoireSupport/Properties"],function(t,s,e){var r="esri.core.Accessoire";t.after(function(e){t.hasMixin(e,r)&&s(e)});var o=function(t,s,e){if(null==t)return t;var r=t.get?t.get(s[e]):t[s[e]];return r&&e!==s.length-1?o(r,s,++e):r},i=t(null,{declaredClass:r,"-chains-":{postIntrospection:"after",initialize:"after",destroy:"before"},constructor:function(t){Object.defineProperty(this,"_accessorProps",{value:new e(this),enumerable:!1,configurable:!1,writable:!0}),arguments.length>0&&this.normalizeCtorArgs&&(this._accessorProps.ctorArgs=this.normalizeCtorArgs.apply(this,Array.prototype.slice.call(arguments)))},_accessorProps:null,postscript:function(t){var s,e=this._accessorProps,r=e.ctorArgs||t;s=this.getDefaults?r?this.getDefaults(r):this.getDefaults({}):null,s&&Object.getOwnPropertyNames(s).forEach(function(t){e.setDefault(t,s[t])},this),r&&(this.set(r),e.ctorArgs=null),e.initialize(),this.initialize()},postIntrospection:function(){},initialize:function(){},destroy:function(){if(this._accessorProps)this._accessorProps.dispatch(),this._accessorProps.destroy(),this._accessorProps=null;else try{throw new Error("instance is already destroyed")}catch(t){console.warn(t.stack)}},get:function(t){return t.indexOf(".")>0?o(this,t.split("."),0):this[t]},set:function(t,s){return t&&"object"==typeof t?(t._accessorProps?t.keys().forEach(function(s){this.set(s,t[s])},this):Object.getOwnPropertyNames(t).forEach(function(s){this.set(s,t[s])},this),this):("_"!==t[0]&&(this[t]=s),this)},watch:function(t,s){return this._accessorProps.watch(t,s)},hasOwnProperty:function(t){var s=this._accessorProps;return s&&s.properties[t]?s.cache.has(t)||null!==s.defaults&&s.defaults.has(t):Object.prototype.hasOwnProperty.call(this,t)},keys:function(){var t=this._accessorProps;return t.cache.keys()},notifyChange:function(t){this._accessorProps.propertyWillChange(t),this._accessorProps.propertyInvalidated(t)}});return i});