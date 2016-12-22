// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/now"],function(e,t,n){var r=function(){function e(e){void 0===e&&(e=Number.MAX_VALUE),this._begin=0,this._budget=0,this.enabled=!0,this.reset(e)}return e.now=function(){return n()},Object.defineProperty(e.prototype,"done",{get:function(){return this.enabled&&this.elapsed>=this._budget},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"elapsed",{get:function(){return n()-this._begin},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"remaining",{get:function(){return Math.max(this._budget-this.elapsed,0)},enumerable:!0,configurable:!0}),e.prototype.reset=function(e){void 0===e&&(e=Number.MAX_VALUE),this._begin=n(),this._budget=this.enabled?e:Number.MAX_VALUE},e}();return r});