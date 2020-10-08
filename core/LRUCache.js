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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./MemCache"],(function(t,e,r){"use strict";return function(){function t(t,e){this._storage=new r.MemCacheStorage,this._storage.maxSize=t,e&&this._storage.registerRemoveFunc("",e)}return t.prototype.put=function(t,e,r){this._storage.put(t,e,r,1)},t.prototype.pop=function(t){return this._storage.pop(t)},t.prototype.get=function(t){return this._storage.get(t)},t.prototype.clear=function(){this._storage.clearAll()},t.prototype.destroy=function(){this._storage.clearAll()},Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._storage.maxSize},set:function(t){this._storage.maxSize=t},enumerable:!1,configurable:!0}),t}()}));