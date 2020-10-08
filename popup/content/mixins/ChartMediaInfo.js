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

define(["require","exports","tslib","../../../core/accessorSupport/decorators","./MediaInfo","../support/ChartMediaInfoValue"],(function(e,t,r,o,n,a){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.type=null,r.value=null,r}return r.__extends(t,e),r.__decorate([o.property({type:["bar-chart","column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),r.__decorate([o.property({type:a,json:{write:!0}})],t.prototype,"value",void 0),t=r.__decorate([o.subclass("esri.popup.content.mixins.ChartMediaInfo")],t)}(n)}));