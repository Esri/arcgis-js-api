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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","dojo/has","../Logger","./extensions","./PropertyOrigin","./Store"],(function(t,e,r,i,s,o,n){Object.defineProperty(e,"__esModule",{value:!0});var a=i.getLogger("esri.core.accessorSupport.Properties");function h(t,e){return!!e.metadatas[t]||(r("dojo-debug-messages")&&a.warn("cannot access unknown property '"+t+"' on instance of "+e.host.declaredClass+"."),!1)}function d(t,e,i,s){return!t.nonNullable||null!=i||(r("dojo-debug-messages")&&a.warn("cannot set non-nullable property '"+e+"' to null on "+s.host.declaredClass+"."),!1)}var u=function(){function t(t){this.host=t,this._origin=o.OriginId.USER,this.cursors=null,this.ctorArgs=null,this.destroyed=!1,this.dirties={},this.lifecycle=0,this.overridden=null,this.store=new n.default;var e=this.host.constructor.__accessorMetadata__;this.metadatas=e.properties,this.autoDestroy=e.autoDestroy}return t.prototype.initialize=function(){this.lifecycle=1,s.instanceCreated(this.host,this.metadatas)},t.prototype.constructed=function(){this.lifecycle=2},t.prototype.destroy=function(){this.destroyed=!0;var t,e=this.cursors;if(this.cursors)for(var r=0,i=Object.getOwnPropertyNames(e);r<i.length;r++){var s=e[o=i[r]];if(s){for(;s.length>0;)s.pop().propertyDestroyed(this,o);e[o]=null}}if(this.autoDestroy)for(var o in this.metadatas){var n=this.internalGet(o);n&&((t=n)&&"function"==typeof t.destroy)&&(n.destroy(),this.metadatas[o].nonNullable||this.internalSet(o,null))}},Object.defineProperty(t.prototype,"initialized",{get:function(){return 0!==this.lifecycle},enumerable:!0,configurable:!0}),t.prototype.clearOverride=function(t){this.isOverridden(t)&&(this.overridden[t]=!1,this.propertyInvalidated(t))},t.prototype.get=function(t){h(t,this);var e=this.metadatas[t];if(this.store.has(t)&&!this.dirties[t])return this.store.get(t);var r=e.get;if(r){var i=r.call(this.host);return this.store.set(t,i,o.OriginId.COMPUTED),this.propertyCommitted(t),i}return e.value},t.prototype.originOf=function(t){var e=this.store.originOf(t);if(void 0===e){var r=this.metadatas[t];if(r&&r.hasOwnProperty("value"))return"defaults"}return o.idToName(e)},t.prototype.has=function(t){return!!this.metadatas[t]&&this.store.has(t)},t.prototype.internalGet=function(t){if(h(t,this)){var e=this.store;return e.has(t)?e.get(t):this.metadatas[t].value}},t.prototype.internalSet=function(t,e){h(t,this)&&(this.propertyInvalidated(t),this.initialized?this.store.set(t,e,this._origin):this.store.set(t,e,o.OriginId.DEFAULTS),this.propertyCommitted(t))},t.prototype.isOverridden=function(t){return null!=this.overridden&&!0===this.overridden[t]},t.prototype.keys=function(){return this.store.keys()},t.prototype.override=function(t,e){if(h(t,this)){this.overridden||(this.overridden={});var r=this.metadatas[t];if(d(r,t,e,this)){var i=r.cast;i&&(e=i.call(this.host,e)),this.overridden[t]=!0,this.internalSet(t,e)}}},t.prototype.set=function(t,e){if(h(t,this)){var r=this.metadatas[t];if(d(r,t,e,this)){var i=r.set,s=r.cast;s&&(e=s.call(this.host,e)),i?i.call(this.host,e):this.internalSet(t,e)}}},t.prototype.setDefaultOrigin=function(t){this._origin=o.nameToId(t)},t.prototype.propertyInvalidated=function(t){var e=this.dirties,r=this.isOverridden(t),i=this.cursors&&this.cursors[t],s=this.metadatas[t].computes;if(i)for(var o=0,n=i;o<n.length;o++){n[o].propertyInvalidated(this,t)}if(r||(e[t]=!0),s)for(var a=0,h=s;a<h.length;a++){var d=h[a];this.propertyInvalidated(d)}},t.prototype.propertyCommitted=function(t){var e=this.cursors&&this.cursors[t];if(this.dirties[t]=!1,e)for(var r=0,i=e;r<i.length;r++){i[r].propertyCommitted(this,t)}},t.prototype.addCursor=function(t,e){this.cursors||(this.cursors={});var r=this.cursors[t];r||(this.cursors[t]=r=[]),r.push(e)},t.prototype.removeCursor=function(t,e){var r=this.cursors[t];this.cursors[t]&&(r.splice(r.indexOf(e),1),0===r.length&&(this.cursors[t]=null))},t}();e.default=u}));
