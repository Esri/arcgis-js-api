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

define(["require","exports","tslib","./core/JSONSupport","./core/accessorSupport/decorators","./layers/support/timeUtils"],(function(e,t,i,r,n,o){"use strict";return function(e){function t(t){var i=e.call(this,t)||this;return i.value=0,i.unit="milliseconds",i}var r;return i.__extends(t,e),r=t,t.prototype.toMilliseconds=function(){return this.value*o.millisecondsPerTimeUnit[this.unit]},t.prototype.clone=function(){return new r({value:this.value,unit:this.unit})},i.__decorate([n.property({type:Number,json:{write:!0},nonNullable:!0})],t.prototype,"value",void 0),i.__decorate([n.property({type:o.timeUnitKebabDictionary.apiValues,json:{type:o.timeUnitKebabDictionary.jsonValues,read:o.timeUnitKebabDictionary.read,write:o.timeUnitKebabDictionary.write},nonNullable:!0})],t.prototype,"unit",void 0),t=r=i.__decorate([n.subclass("esri.TimeInterval")],t)}(r.JSONSupport)}));