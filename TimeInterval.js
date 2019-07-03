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

define(["require","exports","./core/tsSupport/declareExtendsHelper","./core/tsSupport/decorateHelper","./core/JSONSupport","./core/accessorSupport/decorators","./layers/support/timeUtils"],function(e,t,r,i,o,n,u){return function(e){function t(t){var r=e.call(this)||this;return r.value=0,r.unit="milliseconds",r}r(t,e),o=t,t.prototype.toMilliseconds=function(){return this.value*u.millisecondsPerTimeUnit[this.unit]},t.prototype.clone=function(){return new o({value:this.value,unit:this.unit})};var o;return i([n.property({type:Number,json:{write:!0},nonNullable:!0})],t.prototype,"value",void 0),i([n.property({type:u.timeUnitKebabDictionary.apiValues,json:{type:u.timeUnitKebabDictionary.jsonValues,read:u.timeUnitKebabDictionary.read,write:u.timeUnitKebabDictionary.write},nonNullable:!0})],t.prototype,"unit",void 0),t=o=i([n.subclass("esri.TimeInterval")],t)}(n.declared(o))});