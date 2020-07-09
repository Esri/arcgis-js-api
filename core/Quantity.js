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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./unitUtils"],(function(t,n,i){return function(){function t(t,n){this.measure=i.measureForUnit(n),this.value=t,this.unit=n}return Object.defineProperty(t.prototype,"isBaseUnit",{get:function(){return i.isBaseUnit(this.unit)},enumerable:!0,configurable:!0}),t.prototype.toUnit=function(n){return new t(i.convertUnit(this.value,this.unit,n),n)},t.prototype.toBaseUnit=function(){return this.toUnit(i.baseUnitForUnit(this.unit))},t}()}));