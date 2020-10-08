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

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],(function(e,r,t,o,i,l,s,n){"use strict";var p=l.getLogger("esri.renderers.support.AttributeColorInfo");return function(e){function r(r){var t=e.call(this,r)||this;return t.color=null,t.field=null,t.label=null,t.valueExpression=null,t.valueExpressionTitle=null,t}var i;return t.__extends(r,e),i=r,r.prototype.castField=function(e){return null==e?e:"function"==typeof e?(p.error(".field: field must be a string value"),null):n.ensureString(e)},r.prototype.getAttributeHash=function(){return this.field+"-"+this.valueExpression},r.prototype.clone=function(){return new i({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})},t.__decorate([s.property({type:o,json:{type:[Number],write:!0}})],r.prototype,"color",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),t.__decorate([s.cast("field")],r.prototype,"castField",null),t.__decorate([s.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],r.prototype,"valueExpression",void 0),t.__decorate([s.property({type:String,json:{write:!0}})],r.prototype,"valueExpressionTitle",void 0),r=i=t.__decorate([s.subclass("esri.renderers.support.AttributeColorInfo")],r)}(i.JSONSupport)}));