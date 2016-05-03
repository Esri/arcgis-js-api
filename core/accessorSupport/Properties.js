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

define(["require","exports","dojo/has","./Store","./PropertyOrigin","./dictionary","./extensions","./introspection"],function(t,e,i,s,r,o,n,a){function h(t,e,i){void 0===i&&(i=!1);var s=e.metadatas[t];if(!s){var r="[accessor] cannot access unknown property '"+t+"' on instance of "+e.host.declaredClass+".";if(i||u)throw new Error(r);console.error(r)}}var d=0,u=i("dojo-debug-messages"),p=function(){function t(t){this.host=t,this._origin=r["default"].USER,this.ctorArgs=null,this.dirties=o["default"](),this.initialized=!1,this.metadatas=a.getInstanceMetadatas(this.host),this.overridden=null,this.uid="properties_"+d++,this.store=new s["default"]}return t.prototype.initialize=function(){this.initialized=!0,n.defineProperties(this.host,this.metadatas)},t.prototype.destroy=function(){},t.prototype.clearOverride=function(t){this.isOverridden(t)&&(this.overridden[t]=!1,this.propertyInvalidated(t))},t.prototype.get=function(t){h(t,this);var e=this.metadatas[t];if(this.store.has(t)&&!this.dirties[t]==!0)return this.store.get(t);var i=e.get;if(i){var s=i.call(this.host);return this.store.set(t,s,r["default"].COMPUTED),this.propertyCommitted(t,s),s}return e.value},t.prototype.has=function(t){var e=this.metadatas[t];return e?this.store.has(t):!1},t.prototype.internalGet=function(t){h(t,this,!0);var e=this.store;return e.has(t)?e.get(t):this.metadatas[t].value},t.prototype.internalSet=function(t,e){h(t,this,!0),this.propertyInvalidated(t),this.initialized?this.store.set(t,e,this._origin):this.store.set(t,e,r["default"].SERVICE),this.propertyCommitted(t,e)},t.prototype.isOverridden=function(t){return null!=this.overridden&&this.overridden[t]===!0},t.prototype.keys=function(){return this.store.keys()},t.prototype.override=function(t,e){h(t,this,!0),this.overridden||(this.overridden=o["default"]()),this.overridden[t]=!0,this.internalSet(t,e)},t.prototype.set=function(t,e){h(t,this);var i=this.metadatas[t],s=i.set,r=i.cast;r&&(e=r.call(this.host,e)),s?s.call(this.host,e):this.internalSet(t,e)},t.prototype.setDefault=function(t,e){return h(t,this,!0),this.store._originStores?(this.setDefaultOrigin(r["default"].SERVICE),this.set(t,e),void this.setDefaultOrigin(r["default"].USER)):void(this.store.has(t,r["default"].SERVICE)||(this.setDefaultOrigin(r["default"].SERVICE),this.set(t,e),this.setDefaultOrigin(r["default"].USER)))},t.prototype.setDefaultOrigin=function(t){this._origin=t},t.prototype.propertyInvalidated=function(t){this.isOverridden(t)||(this.dirties[t]=!0)},t.prototype.propertyCommitted=function(t){this.dirties[t]=!1},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=p});