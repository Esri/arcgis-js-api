// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","./workers"],function(e,t,r){var n=function(){function e(e,t,r){this.client=e,this.id=t,this._targetWorker={id:r}}return Object.defineProperty(e.prototype,"workerId",{get:function(){return this._targetWorker.id},enumerable:!0,configurable:!0}),e.prototype.invoke=function(e,t,n){return r.invoke(e,t,n,this._targetWorker,this.id)},e.prototype.close=function(){r.closeConnection(this)},e}();return n});