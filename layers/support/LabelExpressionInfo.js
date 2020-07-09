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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","./labelUtils"],(function(e,r,o,t,n,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.value=null,r.expression=null,r}var t;return o.__extends(r,e),t=r,r.prototype.readExpression=function(e,r){return r.value?s.convertTemplatedStringToArcade(r.value):e},r.prototype.writeExpression=function(e,r,o){null!=this.value&&(e=s.convertTemplatedStringToArcade(this.value)),r[o]=e},r.prototype.clone=function(){return new t({value:this.value,expression:this.expression})},o.__decorate([n.property({json:{read:!1,write:!1}})],r.prototype,"value",void 0),o.__decorate([n.property({type:String,json:{write:{allowNull:!0}}})],r.prototype,"expression",void 0),o.__decorate([n.reader("expression",["expression","value"])],r.prototype,"readExpression",null),o.__decorate([n.writer("expression")],r.prototype,"writeExpression",null),r=t=o.__decorate([n.subclass("esri.layers.support.LabelExpressionInfo")],r)}(t.JSONSupport)}));