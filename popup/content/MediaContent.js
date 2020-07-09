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

define(["require","exports","tslib","../../core/lang","../../core/accessorSupport/decorators","./BarChartMediaInfo","./ColumnChartMediaInfo","./Content","./ImageMediaInfo","./LineChartMediaInfo","./PieChartMediaInfo","./support/mediaInfoTypes"],(function(e,t,o,r,n,a,i,p,d,f,s,c){return function(e){function t(t){var o=e.call(this,t)||this;return o.mediaInfos=null,o.type="media",o}var p;return o.__extends(t,e),p=t,t.prototype.readMediaInfos=function(e){return e&&e.map((function(e){return"image"===e.type?d.fromJSON(e):"barchart"===e.type?a.fromJSON(e):"columnchart"===e.type?i.fromJSON(e):"linechart"===e.type?f.fromJSON(e):"piechart"===e.type?s.fromJSON(e):void 0})).filter(Boolean)},t.prototype.writeMediaInfos=function(e,t){t.mediaInfos=e&&e.map((function(e){return e.toJSON()}))},t.prototype.clone=function(){return new p({mediaInfos:this.mediaInfos?r.clone(this.mediaInfos):null})},o.__decorate([n.property({types:[c.types]})],t.prototype,"mediaInfos",void 0),o.__decorate([n.reader("mediaInfos")],t.prototype,"readMediaInfos",null),o.__decorate([n.writer("mediaInfos")],t.prototype,"writeMediaInfos",null),o.__decorate([n.property({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=p=o.__decorate([n.subclass("esri.popup.content.MediaContent")],t)}(p)}));