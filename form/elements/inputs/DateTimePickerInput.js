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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","./Input"],(function(e,t,r,n,o){"use strict";function i(e){return null!=e?new Date(e):null}function p(e){return e?e.getTime():null}return function(e){function t(t){var r=e.call(this,t)||this;return r.includeTime=!1,r.max=null,r.min=null,r.type="datetime-picker",r}var o;return r.__extends(t,e),o=t,t.prototype.readMax=function(e,t){return i(t.max)},t.prototype.writeMax=function(e,t){t.max=p(e)},t.prototype.readMin=function(e,t){return i(t.min)},t.prototype.writeMin=function(e,t){t.min=p(e)},t.prototype.clone=function(){return new o({includeTime:this.includeTime,max:this.max,min:this.min,type:this.type})},r.__decorate([n.property({type:Boolean,json:{write:!0,default:!1}})],t.prototype,"includeTime",void 0),r.__decorate([n.property({type:Date,json:{type:Number,write:!0}})],t.prototype,"max",void 0),r.__decorate([n.reader("max")],t.prototype,"readMax",null),r.__decorate([n.writer("max")],t.prototype,"writeMax",null),r.__decorate([n.property({type:Date,json:{type:Number,write:!0}})],t.prototype,"min",void 0),r.__decorate([n.reader("min")],t.prototype,"readMin",null),r.__decorate([n.writer("min")],t.prototype,"writeMin",null),r.__decorate([n.property({type:["datetime-picker"],json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=o=r.__decorate([n.subclass("esri.form.elements.inputs.DateTimePickerInput")],t)}(o)}));