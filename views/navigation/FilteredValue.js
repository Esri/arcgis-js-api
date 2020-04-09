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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.gain=e}return e.prototype.update=function(e){this.hasFilteredValue?this.filteredValue=(1-this.gain)*this.filteredValue+this.gain*e:this.filteredValue=e},e.prototype.reset=function(){this.filteredValue=void 0},Object.defineProperty(e.prototype,"hasFilteredValue",{get:function(){return void 0!==this.filteredValue},enumerable:!0,configurable:!0}),e}();t.FilteredValue=i}));