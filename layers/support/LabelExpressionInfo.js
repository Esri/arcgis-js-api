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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","./labelUtils"],(function(e,r,t,o,n,s){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.value=null,r.expression=null,r}var o;return t.__extends(r,e),o=r,r.prototype.readExpression=function(e,r){return r.value?s.convertTemplatedStringToArcade(r.value):e},r.prototype.writeExpression=function(e,r,t){null!=this.value&&(e=s.convertTemplatedStringToArcade(this.value)),r[t]=e},r.prototype.clone=function(){return new o({value:this.value,expression:this.expression})},t.__decorate([n.property({json:{read:!1,write:!1}})],r.prototype,"value",void 0),t.__decorate([n.property({type:String,json:{write:{allowNull:!0}}})],r.prototype,"expression",void 0),t.__decorate([n.reader("expression",["expression","value"])],r.prototype,"readExpression",null),t.__decorate([n.writer("expression")],r.prototype,"writeExpression",null),r=o=t.__decorate([n.subclass("esri.layers.support.LabelExpressionInfo")],r)}(o.JSONSupport)}));