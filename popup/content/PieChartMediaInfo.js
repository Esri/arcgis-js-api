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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./mixins/ChartMediaInfo","./support/chartMediaInfoUtils"],(function(t,e,r,i,o,n){return function(t){function e(e){var r=t.call(this,e)||this;return r.type="pie-chart",r}var o;return r.__extends(e,t),o=e,e.prototype.clone=function(){return new o({title:this.title,caption:this.caption,value:this.value?this.value.clone():null})},r.__decorate([i.property({type:["pie-chart"],readOnly:!0,json:{type:["piechart"],read:!1,write:n.chartTypeKebabDict.write}})],e.prototype,"type",void 0),e=o=r.__decorate([i.subclass("esri.popup.content.PieChartMediaInfo")],e)}(o)}));