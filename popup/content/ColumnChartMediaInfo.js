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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./mixins/ChartMediaInfo","./support/chartMediaInfoUtils"],function(e,t,r,o,n,c,i){return function(e){function t(t){var r=e.call(this)||this;return r.type="column-chart",r}r(t,e),c=t,t.prototype.clone=function(){return new c({title:this.title,caption:this.caption,value:this.value?this.value.clone():null})};var c;return o([n.property({type:["column-chart"],readOnly:!0,json:{read:!1,write:i.chartTypeKebabDict.write}})],t.prototype,"type",void 0),t=c=o([n.subclass("esri.popup.content.ColumnChartMediaInfo")],t)}(n.declared(c))});