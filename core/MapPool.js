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

define(["require","exports","./ObjectPool"],function(e,r,n){var o=function(){function e(e,r){void 0===e&&(e=50),void 0===r&&(r=50),this._pool=new n(Map,!1,function(e){return e.clear()},r,e)}return e.prototype.acquire=function(){return this._pool.acquire()},e.prototype.release=function(e){this._pool.release(e)},e.acquire=function(){return t.acquire()},e.release=function(e){return t.release(e)},e}(),t=new o(100);return o});