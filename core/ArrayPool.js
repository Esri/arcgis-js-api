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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./ObjectPool"],function(e,r,t){function n(e){e.length=0}var o=Array.prototype.splice,i=function(){function e(e,r){void 0===e&&(e=50),void 0===r&&(r=50),this._pool=new t(Array,!1,n,r,e)}return e.prototype.acquire=function(){return this._pool.acquire()},e.prototype.copy=function(e){var r=this.acquire();return e.unshift(0,0),o.apply(r,e),e.splice(0,2),r},e.prototype.release=function(e){this._pool.release(e)},e.acquire=function(){return u.acquire()},e.copy=function(e){return u.copy(e)},e.release=function(e){return u.release(e)},e}(),u=new i(100);return i});