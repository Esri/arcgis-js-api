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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/PooledArray","./Evented"],function(r,e,t,n,o){return function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.array=new n,e}return t(e,r),e.prototype.clear=function(){this.array.length>0&&this.emit("change",{added:[],removed:this.toArray()}),this.array.clear()},Object.defineProperty(e.prototype,"length",{get:function(){return this.array.length},enumerable:!0,configurable:!0}),e.prototype.getItemAt=function(r){return this.array.data[r]},e.prototype.push=function(r){var e=this.array.push(r);return this.emit("change",{added:[r],removed:[]}),e},e.prototype.addMany=function(r){var e=this.array.pushArray(r);return this.emit("change",{added:r,removed:[]}),e},e.prototype.pushNew=function(){var r=this.array.pushNew();return this.emit("change",{added:[r],removed:[]}),r},e.prototype.pop=function(){var r=this.array.pop();return void 0!==r&&this.emit("change",{added:[],removed:[r]}),r},e.prototype.removeMany=function(r){var e=this.array.removeMany(r);return e.length>0&&this.emit("change",{added:[],removed:e}),e},e.prototype.removeUnordered=function(r){var e=this.array.removeUnordered(r);return void 0!==e&&this.emit("change",{added:[],removed:[e]}),e},e.prototype.removeUnorderedMany=function(r){var e=this.array.removeUnorderedMany(r);return e.length>0&&this.emit("change",{added:[],removed:e}),e},e.prototype.toArray=function(){return this.array.toArray()},e.prototype.some=function(r,e){return this.array.some(r,e)},e.prototype.find=function(r,e){return this.array.find(r,e)},e.prototype.filter=function(r,t,n){return n=n||new e,this.array.filter(r,t,n.array),n},e.prototype.forEach=function(r,e){this.array.forEach(r,e)},e}(o.Evented)});