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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/accessorSupport/decorators","./ContentElement","./Media/BarChart","./Media/ColumnChart","./Media/Image","./Media/LineChart","./Media/PieChart","./Media/types"],function(e,t,r,o,n,a,i,p,d,s,f,u,c){return function(e){function t(t){var r=e.call(this)||this;return r.mediaInfos=null,r.type="media",r}r(t,e),i=t,t.prototype.readMediaInfos=function(e){return e&&e.map(function(e){return"image"===e.type?s.fromJSON(e):"barchart"===e.type?p.fromJSON(e):"columnchart"===e.type?d.fromJSON(e):"linechart"===e.type?f.fromJSON(e):"piechart"===e.type?u.fromJSON(e):void 0}).filter(Boolean)},t.prototype.writeMediaInfos=function(e,t){t.mediaInfos=e&&e.map(function(e){return e.toJSON()})},t.prototype.clone=function(){return new i({mediaInfos:this.mediaInfos?n.clone(this.mediaInfos):null})};var i;return o([a.property({types:[c.default]})],t.prototype,"mediaInfos",void 0),o([a.reader("mediaInfos")],t.prototype,"readMediaInfos",null),o([a.writer("mediaInfos")],t.prototype,"writeMediaInfos",null),o([a.property({type:String,readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=i=o([a.subclass("esri.support.ContentElement.Media")],t)}(a.declared(i))});