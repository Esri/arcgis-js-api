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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/Evented","../../../core/MapUtils"],(function(e,t,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._map=new Map,t}return r(t,e),t.prototype.clear=function(){if(this._map.size>0){var e=this.toArray();this._map.clear(),this.emit("change",{added:[],removed:e})}},Object.defineProperty(t.prototype,"length",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.get=function(e){return this._map.get(e)},t.prototype.addMany=function(e){if(0!==e.length){for(var t=new Set,r=0;r<e.length;r++){var n=e[r],o=n.objectId,a=this._map.get(o);a?(t.add(o),n!==a&&(e[r]=a),++a.refCount):(n.refCount=1,this._map.set(o,n))}var i=t.size>0?e.filter((function(e){return!t.has(e.objectId)})):e;i.length>0&&this.emit("change",{added:i,removed:[]})}},t.prototype.removeMany=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var o=n[r],a=o.objectId,i=this._map.get(a);null!=i&&--i.refCount<=0&&(this._map.delete(a),t.push(o))}t.length>0&&this.emit("change",{added:[],removed:t})},t.prototype.removeManyByObjectId=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var o=n[r],a=this._map.get(o);null!=a&&--a.refCount<=0&&(this._map.delete(o),t.push(a))}t.length>0&&this.emit("change",{added:[],removed:t})},t.prototype.toArray=function(){return o.valuesOfMap(this._map)},t.prototype.find=function(e){var t;return o.someMap(this._map,(function(r){return!!e(r)&&(t=r,!0)})),t},t.prototype.forEach=function(e){this._map.forEach((function(t){return e(t)}))},t}(n);t.GraphicsMap=a}));