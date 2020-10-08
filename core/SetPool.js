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

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._pool=[],this._set=new Set}return e.prototype.acquire=function(){if(0===this._pool.length)return new Set;var e=this._pool.pop();return this._set.delete(e),e},e.prototype.release=function(e){e&&!this._set.has(e)&&(e.clear(),this._pool.length<5e4&&(this._pool.push(e),this._set.add(e)))},e.acquire=function(){return n.acquire()},e.release=function(e){return n.release(e)},e}();t.default=r;var n=new r}));