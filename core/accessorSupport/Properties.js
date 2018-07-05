// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/has","../Logger","./extensions","./PropertyOrigin","./Store"],function(t,e,r,i,s,o,n){function a(t,e){return!!e.metadatas[t]||(r("dojo-debug-messages")&&d.warn("cannot access unknown property '"+t+"' on instance of "+e.host.declaredClass+"."),!1)}function h(t,e,i,s){return!t.nonNullable||null!=i||(0!==s.host.__accessor__.lifecycle&&r("dojo-debug-messages")&&d.warn("cannot set non-nullable property '"+e+"' to null on "+s.host.declaredClass+"."),!1)}function u(t){return t&&"function"==typeof t.destroy}Object.defineProperty(e,"__esModule",{value:!0});var d=i.getLogger("esri.core.accessorSupport.Properties"),c=function(){function t(t){this.host=t,this._origin=o.OriginId.USER,this.cursors=null,this.ctorArgs=null,this.destroyed=!1,this.dirties={},this.lifecycle=0,this.overridden=null,this.store=new n.default;var e=this.host.constructor.__accessorMetadata__;this.metadatas=e.properties,this.autoDestroy=e.autoDestroy}return t.prototype.initialize=function(){this.lifecycle=1,s.instanceCreated(this.host,this.metadatas)},t.prototype.constructed=function(){this.lifecycle=2},t.prototype.destroy=function(){this.destroyed=!0;var t=this.cursors;if(this.cursors)for(var e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++){var i=r[e],s=t[i];if(s){for(;s.length>0;)s.pop().propertyDestroyed(this,i);t[i]=null}}if(this.autoDestroy)for(var i in this.metadatas){var o=this.internalGet(i);o&&u(o)&&(o.destroy(),this.metadatas[i].nonNullable||this.internalSet(i,null))}},Object.defineProperty(t.prototype,"initialized",{get:function(){return 0!==this.lifecycle},enumerable:!0,configurable:!0}),t.prototype.clearOverride=function(t){this.isOverridden(t)&&(this.overridden[t]=!1,this.propertyInvalidated(t))},t.prototype.get=function(t){a(t,this);var e=this.metadatas[t];if(this.store.has(t)&&!this.dirties[t])return this.store.get(t);var r=e.get;if(r){var i=r.call(this.host);return this.store.set(t,i,o.OriginId.COMPUTED),this.propertyCommitted(t),i}return e.value},t.prototype.originOf=function(t){var e=this.store.originOf(t);if(void 0===e){var r=this.metadatas[t];if(r&&r.hasOwnProperty("value"))return"defaults"}return o.idToName(e)},t.prototype.has=function(t){return!!this.metadatas[t]&&this.store.has(t)},t.prototype.internalGet=function(t){if(a(t,this)){var e=this.store;return e.has(t)?e.get(t):this.metadatas[t].value}},t.prototype.internalSet=function(t,e){a(t,this)&&(this.propertyInvalidated(t),this.initialized?this.store.set(t,e,this._origin):this.store.set(t,e,o.OriginId.DEFAULTS),this.propertyCommitted(t))},t.prototype.isOverridden=function(t){return null!=this.overridden&&!0===this.overridden[t]},t.prototype.keys=function(){return this.store.keys()},t.prototype.override=function(t,e){if(a(t,this)){this.overridden||(this.overridden={});var r=this.metadatas[t];if(h(r,t,e,this)){var i=r.cast;i&&(e=i.call(this.host,e)),this.overridden[t]=!0,this.internalSet(t,e)}}},t.prototype.set=function(t,e){if(a(t,this)){var r=this.metadatas[t];if(h(r,t,e,this)){var i=r.set,s=r.cast;s&&(e=s.call(this.host,e)),i?i.call(this.host,e):this.internalSet(t,e)}}},t.prototype.setDefaultOrigin=function(t){this._origin=o.nameToId(t)},t.prototype.propertyInvalidated=function(t){var e=this.dirties,r=this.isOverridden(t),i=this.cursors&&this.cursors[t],s=this.metadatas[t].computes;if(i)for(var o=0,n=i;o<n.length;o++){var a=n[o];a.propertyInvalidated(this,t)}if(r||(e[t]=!0),s)for(var h=0,u=s;h<u.length;h++){var d=u[h];this.propertyInvalidated(d)}},t.prototype.propertyCommitted=function(t){var e=this.cursors&&this.cursors[t];if(this.dirties[t]=!1,e)for(var r=0,i=e;r<i.length;r++){var s=i[r];s.propertyCommitted(this,t)}},t.prototype.addCursor=function(t,e){this.cursors||(this.cursors={});var r=this.cursors[t];r||(this.cursors[t]=r=[]),r.push(e)},t.prototype.removeCursor=function(t,e){var r=this.cursors[t];this.cursors[t]&&(r.splice(r.indexOf(e),1),0===r.length&&(this.cursors[t]=null))},t}();e.default=c});