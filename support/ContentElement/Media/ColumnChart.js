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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./Chart","./Chart/utils"],function(t,e,r,o,n,c,a){return function(t){function e(e){var r=t.call(this)||this;return r.type="column-chart",r}r(e,t),c=e,e.prototype.clone=function(){return new c({title:this.title,caption:this.caption,value:this.value?this.value.clone():null})};var c;return o([n.property({type:["column-chart"],readOnly:!0,json:{read:!1,write:a.chartTypeKebabDict.write}})],e.prototype,"type",void 0),e=c=o([n.subclass("esri.support.ContentElement.Media.ColumnChart")],e)}(n.declared(c))});