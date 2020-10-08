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

define(["require","exports","tslib","../../../core/JSONSupport","../../../core/lang","../../../core/accessorSupport/decorators","./ChartMediaInfoValueSeries"],(function(e,t,o,r,i,p,n){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o.fields=[],o.normalizeField=null,o.series=[],o.tooltipField=null,o}var r;return o.__extends(t,e),r=t,t.prototype.clone=function(){return new r({fields:i.clone(this.fields),normalizeField:this.normalizeField,tooltipField:this.tooltipField})},o.__decorate([p.property({type:[String],json:{write:!0}})],t.prototype,"fields",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],t.prototype,"normalizeField",void 0),o.__decorate([p.property({type:[n],json:{read:!1}})],t.prototype,"series",void 0),o.__decorate([p.property({type:String,json:{write:!0}})],t.prototype,"tooltipField",void 0),t=r=o.__decorate([p.subclass("esri.popup.content.support.ChartMediaInfoValue")],t)}(r.JSONSupport)}));