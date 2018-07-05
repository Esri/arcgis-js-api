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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./unitUtils"],function(t,i,n){return function(){function t(t,i){this.measure=n.measureForUnit(i),this.value=t,this.unit=i}return Object.defineProperty(t.prototype,"isBaseUnit",{get:function(){return n.isBaseUnit(this.unit)},enumerable:!0,configurable:!0}),t.prototype.toUnit=function(i){return new t(n.convertUnit(this.value,this.unit,i),i)},t.prototype.toBaseUnit=function(){return this.toUnit(n.baseUnitForUnit(this.unit))},t.prototype.toDecimalString=function(t,i){return void 0===t&&(t=2),n.formatDecimal(this.value,this.unit,t,i)},t}()});