// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/has","./Store","./PropertyOrigin","./extensions","../Logger"],function(t,r,e,i,s,o,n){function a(t,r){return r.metadatas[t]?!0:(e("dojo-debug-messages")&&d.warn("cannot access unknown property '"+t+"' on instance of "+r.host.declaredClass+"."),!1)}function h(t,r,i,s){return t.nonNullable&&null==i?(e("dojo-debug-messages")&&d.warn("cannot set non-nullable property '"+r+"' to null on "+s.host.declaredClass+"."),!1):!0}function u(t){return t&&"function"==typeof t.destroy}Object.defineProperty(r,"__esModule",{value:!0});var d=n.getLogger("esri.core.accessorSupport.Properties"),l=function(){function t(t){this.host=t,this._origin=s.OriginId.USER,this.cursors=null,this.ctorArgs=null,this.destroyed=!1,this.dirties={},this.lifecycle=0,this.overridden=null,this.store=new i["default"];var r=this.host.constructor.__accessorMetadata__;this.metadatas=r.properties,this.autoDestroy=r.autoDestroy}return t.prototype.initialize=function(){this.lifecycle=1,o.instanceCreated(this.host,this.metadatas)},t.prototype.constructed=function(){this.lifecycle=2},t.prototype.destroy=function(){this.destroyed=!0;var t=this.cursors;if(this.cursors)for(var r=0,e=Object.getOwnPropertyNames(t);r<e.length;r++){var i=e[r],s=t[i];if(s){for(;s.length>0;)s.pop().propertyDestroyed(this,i);t[i]=null}}if(this.autoDestroy)for(var i in this.metadatas){var o=this.internalGet(i);o&&u(o)&&(o.destroy(),this.metadatas[i].nonNullable||this.internalSet(i,null))}},Object.defineProperty(t.prototype,"initialized",{get:function(){return 0!==this.lifecycle},enumerable:!0,configurable:!0}),t.prototype.clearOverride=function(t){this.isOverridden(t)&&(this.overridden[t]=!1,this.propertyInvalidated(t))},t.prototype.get=function(t){a(t,this);var r=this.metadatas[t];if(this.store.has(t)&&!this.dirties[t])return this.store.get(t);var e=r.get;if(e){var i=e.call(this.host);return this.store.set(t,i,s.OriginId.COMPUTED),this.propertyCommitted(t),i}return r.value},t.prototype.originOf=function(t){var r=this.store.originOf(t);if(void 0===r){var e=this.metadatas[t];if(e&&e.hasOwnProperty("value"))return"defaults"}return s.idToName(r)},t.prototype.has=function(t){var r=this.metadatas[t];return r?this.store.has(t):!1},t.prototype.internalGet=function(t){if(a(t,this)){var r=this.store;return r.has(t)?r.get(t):this.metadatas[t].value}},t.prototype.internalSet=function(t,r){a(t,this)&&(this.propertyInvalidated(t),this.initialized?this.store.set(t,r,this._origin):this.store.set(t,r,s.OriginId.DEFAULTS),this.propertyCommitted(t))},t.prototype.isOverridden=function(t){return null!=this.overridden&&this.overridden[t]===!0},t.prototype.keys=function(){return this.store.keys()},t.prototype.override=function(t,r){if(a(t,this)){this.overridden||(this.overridden={});var e=this.metadatas[t];if(h(e,t,r,this)){var i=e.cast;i&&(r=i.call(this.host,r)),this.overridden[t]=!0,this.internalSet(t,r)}}},t.prototype.set=function(t,r){if(a(t,this)){var e=this.metadatas[t];if(h(e,t,r,this)){var i=e.set,s=e.cast;s&&(r=s.call(this.host,r)),i?i.call(this.host,r):this.internalSet(t,r)}}},t.prototype.setDefaultOrigin=function(t){this._origin=s.nameToId(t)},t.prototype.propertyInvalidated=function(t){var r=this.dirties,e=this.isOverridden(t),i=this.cursors&&this.cursors[t],s=this.metadatas[t].computes;if(i)for(var o=0,n=i;o<n.length;o++){var a=n[o];a.propertyInvalidated(this,t)}if(e||(r[t]=!0),s)for(var h=0,u=s;h<u.length;h++){var d=u[h];this.propertyInvalidated(d)}},t.prototype.propertyCommitted=function(t){var r=this.cursors&&this.cursors[t];if(this.dirties[t]=!1,r)for(var e=0,i=r;e<i.length;e++){var s=i[e];s.propertyCommitted(this,t)}},t.prototype.addCursor=function(t,r){this.cursors||(this.cursors={});var e=this.cursors[t];e||(this.cursors[t]=e=[]),e.push(r)},t.prototype.removeCursor=function(t,r){var e=this.cursors[t];this.cursors[t]&&(e.splice(e.indexOf(r),1),0===e.length&&(this.cursors[t]=null))},t}();r["default"]=l});