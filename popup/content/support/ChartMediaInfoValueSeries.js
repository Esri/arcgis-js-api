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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(t,o,e,r,p){"use strict";return function(t){function o(o){var e=t.call(this,o)||this;return e.tooltip=null,e.value=null,e.x=null,e.y=null,e}var r;return e.__extends(o,t),r=o,o.prototype.clone=function(){return new r({tooltip:this.tooltip,value:this.value})},e.__decorate([p.property()],o.prototype,"tooltip",void 0),e.__decorate([p.property()],o.prototype,"value",void 0),e.__decorate([p.aliasOf("value")],o.prototype,"x",void 0),e.__decorate([p.aliasOf("tooltip")],o.prototype,"y",void 0),o=r=e.__decorate([p.subclass("esri.popup.content.support.ChartMediaInfoValueSeries")],o)}(r)}));