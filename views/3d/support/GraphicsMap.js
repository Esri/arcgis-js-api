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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","@dojo/framework/shim/Map","./Evented"],function(e,t,r,n,a){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._map=new n.default,t}return r(t,e),t.prototype.clear=function(){if(this._map.size>0){var e=this.toArray();this._map.clear(),this.emit("change",{added:[],removed:e})}},Object.defineProperty(t.prototype,"length",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.addMany=function(e){if(0!==e.length){for(var t=new Set,r=0,n=e;r<n.length;r++){var a=n[r],i=a.uid;this._map.has(i)?(t.add(i),++this._map.get(i).refCount):(a.refCount=1,this._map.set(i,a))}var o=t.size>0?e.filter(function(e){return!t.has(e.uid)}):e;this.emit("change",{added:o,removed:[]})}},t.prototype.removeMany=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var a=n[r],i=a.uid,o=this._map.get(i);null!=o&&--o.refCount<=0&&this._map.delete(i)&&t.push(a)}t.length>0&&this.emit("change",{added:[],removed:t})},t.prototype.toArray=function(){var e=new Array(this._map.size),t=0;return this._map.forEach(function(r){return e[t++]=r}),e},t.prototype.find=function(e){for(var t=this._map.entries(),r=t.next();!r.done;r=t.next())if(e(r.value[1]))return r.value[1]},t.prototype.forEach=function(e){this._map.forEach(function(t){return e(t)})},t}(a.Evented);t.GraphicsMap=i});