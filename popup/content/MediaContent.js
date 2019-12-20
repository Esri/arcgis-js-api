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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/accessorSupport/decorators","./BarChartMediaInfo","./ColumnChartMediaInfo","./Content","./ImageMediaInfo","./LineChartMediaInfo","./PieChartMediaInfo","./support/mediaInfoTypes"],function(e,o,t,r,n,a,i,p,d,f,s,c,u){return function(e){function o(o){var t=e.call(this,o)||this;return t.mediaInfos=null,t.type="media",t}t(o,e),d=o,o.prototype.readMediaInfos=function(e){return e&&e.map(function(e){return"image"===e.type?f.fromJSON(e):"barchart"===e.type?i.fromJSON(e):"columnchart"===e.type?p.fromJSON(e):"linechart"===e.type?s.fromJSON(e):"piechart"===e.type?c.fromJSON(e):void 0}).filter(Boolean)},o.prototype.writeMediaInfos=function(e,o){o.mediaInfos=e&&e.map(function(e){return e.toJSON()})},o.prototype.clone=function(){return new d({mediaInfos:this.mediaInfos?n.clone(this.mediaInfos):null})};var d;return r([a.property({types:[u.types]})],o.prototype,"mediaInfos",void 0),r([a.reader("mediaInfos")],o.prototype,"readMediaInfos",null),r([a.writer("mediaInfos")],o.prototype,"writeMediaInfos",null),r([a.property({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],o.prototype,"type",void 0),o=d=r([a.subclass("esri.popup.content.MediaContent")],o)}(a.declared(d))});