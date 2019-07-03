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

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.maxCount=e,this._nextIndex=0,this.recycledIndices=[]}return Object.defineProperty(e.prototype,"activeCount",{get:function(){return this._nextIndex-this.recycledIndices.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"availableCount",{get:function(){return this.recycledIndices.length+this.maxCount-this._nextIndex},enumerable:!0,configurable:!0}),e.prototype.acquire=function(){if(this.recycledIndices.length>0)return this.recycledIndices.pop();if(this.availableCount)return this._nextIndex++},e.prototype.release=function(e){this.recycledIndices.push(e)},e}();t.SimpleIndexManager=n});