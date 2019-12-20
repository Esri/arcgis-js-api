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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/Evented","../../../core/iteratorUtils"],function(e,t,r,n,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._set=new Set,t}return r(t,e),t.prototype.clear=function(){if(this._set.size>0){var e=this.toArray();this._set.clear(),this.emit("after-changes",{type:2}),this.emit("change",{added:[],removed:e})}},Object.defineProperty(t.prototype,"length",{get:function(){return this._set.size},enumerable:!0,configurable:!0}),t.prototype.addMany=function(e){if(0!==e.length){for(var t=0,r=e;t<r.length;t++){var n=r[t];this._set.add(n)}this.emit("after-changes",{type:1}),this.emit("change",{added:e,removed:[]})}},t.prototype.removeMany=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var i=n[r];this._set.delete(i)&&t.push(i)}t.length>0&&(this.emit("after-changes",{type:2}),this.emit("change",{added:[],removed:t}))},t.prototype.toArray=function(){return i.valuesOfSet(this._set)},t.prototype.find=function(e){var t;return i.someSet(this._set,function(r){return!!e(r)&&(t=r,!0)}),t},t.prototype.forEach=function(e){this._set.forEach(function(t){return e(t)})},t}(n);t.EventedSet=o});