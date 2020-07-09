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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(t,e,i,o,r){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.statisticType=null,e.onStatisticField=null,e.onStatisticValueExpression=null,e}var o;return i.__extends(e,t),o=e,e.prototype.clone=function(){return new o({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})},i.__decorate([r.property({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),i.__decorate([r.property({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),i.__decorate([r.property({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=o=i.__decorate([r.subclass("esri.layers.support.OutStatistic")],e)}(o.JSONSupport)}));