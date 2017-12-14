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

define(["../../core/Accessor"],function(e){var t=0,n=e.createSubclass({constructor:function(){this._deletedGraphicsIndex=new Set,this._intentsIndex=new Map},destroy:function(){this.removeAll(),this._deletedGraphicsIndex=null,this._intentsIndex=null},properties:{graphics:null,indexById:{value:null,dependsOn:["graphics","objectIdField"],get:function(){return this._createIndexById(this.graphics&&this.graphics.toArray(),this.objectIdField)}},numGraphics:{value:0,dependsOn:["indexById"],get:function(){return this.indexById?this.indexById.size:0}},objectIdField:null,updating:{value:!1,dependsOn:["_intentsIndex"],get:function(){return!!(this._intentsIndex&&this._intentsIndex.size>0)}},_intentsIndex:{value:null}},_oldIndex:null,_deletedGraphicsIndex:null,beginPagedUpdate:function(){this._oldIndex=this.indexById,this.indexById=null,this.notifyChange("numGraphics")},addPage:function(e,t){this.add(e,t)},revertPagedUpdate:function(){var e=this._removeLeftOnly(this.indexById,this._oldIndex);this.indexById=this._oldIndex,this._oldIndex=null,this.graphics.removeMany(e),this.notifyChange("numGraphics")},endPagedUpdate:function(){var e=this._removeLeftOnly(this._oldIndex,this.indexById);this._oldIndex=null,this.graphics.removeMany(e),this.notifyChange("numGraphics")},findGraphic:function(e){var t=this.indexById&&this.indexById.get(e);return t&&t.graphic},removeAll:function(){this.indexById=this._oldIndex=null,this.graphics.removeAll(),this.notifyChange("numGraphics")},add:function(e,t){if(e&&e.length){this.indexById=this.indexById||new Map;var n=this._updateAndExtractNew(e,this.indexById,this._oldIndex,t);this.graphics.removeMany(n.toRemove),this.graphics.addMany(n.toAdd),this.notifyChange("numGraphics")}},remove:function(e){this._remove(e,!1)},"delete":function(e){this._remove(e,!0)},isDeleted:function(e){return this._deletedGraphicsIndex.has(e)},createIntentToAdd:function(e){e&&this._intentsIndex.forEach(function(t,n){e.forEach(function(e){t.ignoredIds.add(e)})},this);var n=t++;return this._intentsIndex.set(n,{ignoredIds:new Set}),this.notifyChange("updating"),n},findIntent:function(e){return this._intentsIndex.get(e)},removeIntent:function(e){this._intentsIndex["delete"](e),this.notifyChange("updating")},_createIndexById:function(e,t){var n;if(e&&e.length&&t){var i,d,s;for(n=new Map,i=0;d=e[i];i++)s=d.attributes&&d.attributes[t],null!=s&&n.set(s,{graphic:d,refCount:1})}return n},_updateAndExtractNew:function(e,t,n,i){var d,s=[],r=[],h=e?e.length:0,a=this.objectIdField,o=this.findIntent(i);for(d=0;h>d;d++){var u=e[d],c=u.attributes&&u.attributes[a];if(null!=c){var l=n&&n.get(c),f=t.get(c),I=f||l;I?o&&o.ignoredIds.has(c)||(t.set(c,{graphic:u,refCount:I.refCount+1}),r.push(I.graphic),s.push(u)):this.isDeleted(c)||(t.set(c,{graphic:u,refCount:1}),s.push(u))}else s.push(u)}return{toRemove:r,toAdd:s}},_remove:function(e,t){e=e||[];var n;n="object"==typeof e[0]?e.map(function(e){return e.attributes&&e.attributes[this.objectIdField]}.bind(this)):e;var i=this._extractGraphics(n,this._oldIndex),d=this._extractGraphics(n,this.indexById);n.forEach(function(e){t&&this._deletedGraphicsIndex.add(e),this._removeFromIndex(e,this._oldIndex,t),this._removeFromIndex(e,this.indexById,t)}.bind(this)),this.graphics.removeMany(i.concat(d)),this.notifyChange("numGraphics")},_removeFromIndex:function(e,t,n){if(t&&t.has(e))if(n)t["delete"](e);else{var i=t.get(e),d=i.refCount-1;0===d?t["delete"](e):i.refCount=d}},_removeLeftOnly:function(e,t){var n=[];return e&&e.forEach(function(i,d){var s=i.graphic;!s||t&&t.has(d)||(i.refCount=i.refCount-1,0===i.refCount&&e["delete"](d),n.push(s))}),n},_extractGraphics:function(e,t){return e&&t?e.map(function(e){var n=t.get(e);return n&&n.graphic}):[]}});return n});