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

define(["require","exports","../../../core/tsSupport/extendsHelper","@dojo/framework/shim/array","@dojo/framework/shim/Set","./Evented"],function(e,t,r,n,o,i){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._set=new o.default,t}return r(t,e),t.prototype.clear=function(){if(this._set.size>0){var e=this.toArray();this._set.clear(),this.emit("change",{added:[],removed:e})}},Object.defineProperty(t.prototype,"length",{get:function(){return this._set.size},enumerable:!0,configurable:!0}),t.prototype.addMany=function(e){if(0!==e.length){for(var t=0,r=e;t<r.length;t++){var n=r[t];this._set.add(n)}this.emit("change",{added:e,removed:[]})}},t.prototype.removeMany=function(e){for(var t=[],r=0,n=e;r<n.length;r++){var o=n[r];this._set.delete(o)&&t.push(o)}t.length>0&&this.emit("change",{added:[],removed:t})},t.prototype.toArray=function(){return n.from(this._set)},t.prototype.find=function(e){for(var t=this._set.entries(),r=t.next();!r.done;r=t.next())if(e(r.value[0]))return r.value[0]},t.prototype.forEach=function(e){this._set.forEach(function(t){return e(t)})},t}(i.Evented);t.EventedSet=a});