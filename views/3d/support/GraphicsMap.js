// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/Evented","../../../core/iteratorUtils"],function(e,t,r,n,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._map=new Map,t}return r(t,e),t.prototype.clear=function(){if(this._map.size>0){var e=this.toArray();this._map.clear(),this.emit("change",{added:[],removed:e})}},Object.defineProperty(t.prototype,"length",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.get=function(e){return this._map.get(e)},t.prototype.addManyAndDeduplicate=function(e){if(0!==e.length){for(var t=new Set,r=0;r<e.length;r++){var n=e[r],i=n.uid,o=this._map.get(i);o?(t.add(i),n!==o&&(e[r]=o),++o.refCount):(n.refCount=1,this._map.set(i,n))}var a=t.size>0?e.filter(function(e){return!t.has(e.uid)}):e;this.emit("change",{added:a,removed:[]})}},t.prototype.removeMany=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var i=n[r],o=i.uid,a=this._map.get(o);null!=a&&--a.refCount<=0&&this._map.delete(o)&&t.push(i)}t.length>0&&this.emit("change",{added:[],removed:t})},t.prototype.toArray=function(){return i.valuesOfMap(this._map)},t.prototype.find=function(e){var t;return i.everyMap(this._map,function(r){return!e(r)||(t=r,!1)}),t},t.prototype.forEach=function(e){this._map.forEach(function(t){return e(t)})},t}(n);t.GraphicsMap=o});