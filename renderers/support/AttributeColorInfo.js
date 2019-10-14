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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/JSONSupport","../../core/Logger","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],function(e,r,t,o,l,p,i,n,s){var u=i.getLogger("esri.renderers.support.AttributeColorInfo");return function(e){function r(r){var t=e.call(this,r)||this;return t.color=null,t.field=null,t.label=null,t.valueExpression=null,t.valueExpressionTitle=null,t}t(r,e),p=r,r.prototype.castField=function(e){return null==e?e:"function"==typeof e?(u.error(".field: field must be a string value"),null):s.ensureString(e)},r.prototype.getAttributeHash=function(){return this.field+"-"+this.valueExpression},r.prototype.clone=function(){return new p({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})};var p;return o([n.property({type:l,json:{type:[Number],write:!0}})],r.prototype,"color",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),o([n.cast("field")],r.prototype,"castField",null),o([n.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"valueExpression",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"valueExpressionTitle",void 0),r=p=o([n.subclass("esri.renderers.support.AttributeColorInfo")],r)}(n.declared(p.JSONSupport))});