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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.gain=e}return e.prototype.update=function(e){if(this.hasLastValue){var t=this.computeDelta(e);this.updateDelta(t)}this.lastValue=e},e.prototype.reset=function(){this.lastValue=void 0,this.filteredDelta=void 0},Object.defineProperty(e.prototype,"hasLastValue",{get:function(){return void 0!==this.lastValue},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasFilteredDelta",{get:function(){return void 0!==this.filteredDelta},enumerable:!0,configurable:!0}),e.prototype.computeDelta=function(e){return e-this.lastValue},e.prototype.updateDelta=function(e){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*e:this.filteredDelta=e},e}();t.FilteredFiniteDifference=i});