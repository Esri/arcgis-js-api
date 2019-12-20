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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../lib/AutoDisposable"],function(t,e,n,r){Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),Object.defineProperty(e.prototype,"bucketKey",{get:function(){return this._bucket.key},enumerable:!0,configurable:!0}),e}(r.AutoDisposable);e.BucketStorable=u;var o=function(){function t(){this._buckets=new Map,this._count=0}return t.prototype.add=function(t,e){var n=this._getBucket(t);e._bucket=n,e._bucketIndex=n.count,n._data.push(e),this._count++},t.prototype.remove=function(t){var e=t._bucket._data,n=e[e.length-1];e[t._bucketIndex]=n,n._bucketIndex=t._bucketIndex,e.pop(),this._count--},t.prototype.updateKey=function(t,e){this.remove(t),this.add(e,t)},t.prototype.getBucket=function(t){return this._getBucket(t).data},t.prototype.forEach=function(t){this._buckets.forEach(function(e){t(e.data,e.key)})},Object.defineProperty(t.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),t.prototype._getBucket=function(t){var e=this._buckets.get(t);if(e)return e;var n=new c(t);return this._buckets.set(t,n),n},t}();e.BucketedObjectStore=o;var c=function(){function t(t){this.key=t,this._data=new Array}return Object.defineProperty(t.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"count",{get:function(){return this._data.length},enumerable:!0,configurable:!0}),t}()});