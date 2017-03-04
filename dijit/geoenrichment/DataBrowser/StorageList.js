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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/Evented","dojo/when"],function(t,e,i,s,r,n){return t(r,{storage:null,storageKey:"data-browser-favorites-",itemLimit:0,_items:null,_index:null,constructor:function(t){e.mixin(this,t),this._items=[],this._index={}},_syncPromise:null,_lastError:null,_lastCountryID:null,_lastHierarchyID:null,_updated:!1,synchronize:function(t,e){if(!t)return this._syncPromise;if(this._lastCountryID!=t||this._lastHierarchyID!=e){this._lastCountryID=t,this._lastHierarchyID=e,this._updated=!1,this._items=[],this._index={};var i=this;this._syncPromise=this._loadItems().then(function(t){i._lastError=null;var e=i._setItems(t);return e&&i._updated&&i.save(),e},function(t){return i._lastError=t,(new s).resolve(!1)})}return this._syncPromise},getLastError:function(){return this._lastError},_setItems:function(t){return null===t||void 0===t?!0:t instanceof Array?(this.itemLimit&&t.length>this.itemLimit&&t.splice(0,t.length-this.itemLimit),this._items=t,i.forEach(t,function(t,e){this._index[this.getIdentity(t)]=e+1},this),!0):(this._lastError=new Error("Wrong storage object type."),!1)},getIdentity:function(t){return String(t)},save:function(t){return this._updated||t?(this._updated=!1,this.emit("updated"),this._lastError?!1:this._saveItems()):!1},get:function(t){var e=this._index[t];return e?this._items[e-1]:null},contains:function(t){return!!this._index[t]},getItemsCount:function(){return this._items.length},getItems:function(t){t=t||{};var e=this._items.length,i=t.start||0;i>e&&(i=e);var s=t.count||e;i+s>e&&(s=e-i),t.reverse&&(i=e-i-s);var r;if(t.converter){var n;if(r=[],t.reverse)for(i+=s;i-- >0&&r.length!=s;)n=t.converter(this._items[i]),void 0!==n&&null!==n&&r.push(n);else for(;e>i&&r.length!=s;)n=t.converter(this._items[i++]),void 0!==n&&null!==n&&r.push(n)}else r=this._items.slice(i,i+s),t.reverse&&r.reverse();return r},add:function(t){var e=this.getIdentity(t);this.remove(e),this.itemLimit&&this._items.length==this.itemLimit&&this.remove(this.getIdentity(this._items[0])),this._items.push(t),this._index[e]=this._items.length,this._updated=!0},remove:function(t){var e="string"==typeof t?t:this.getIdentity(t),i=this._index[e];if(!i)return!1;this._items.splice(i-1,1),delete this._index[e];for(var e in this._index){var s=this._index[e];s>i&&(this._index[e]=s-1)}return this._updated=!0,!0},clear:function(t){this._items=[],this._index={},this._updated=!0,t&&this.save()},_loadItems:function(){return n(this._getStorage().get(this._composeStorageListKey()))},_saveItems:function(){return n(this._getStorage().set(this._composeStorageListKey(),this._items))},_composeStorageListKey:function(){return"function"==typeof this.storageKey?this.storageKey(this._lastCountryID,this._lastHierarchyID):this.storageKey+this._lastCountryID+(this._lastHierarchyID?this._lastHierarchyID:"")},_getStorage:function(){return this.storage||(this.storage={get:function(t){return this[t]},set:function(t,e){this[t]=e}}),this.storage}})});