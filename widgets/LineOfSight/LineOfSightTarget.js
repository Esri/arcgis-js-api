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

define(["require","exports","tslib","../../Graphic","../../core/Accessor","../../core/accessorSupport/decorators","../../geometry/Point"],(function(e,t,o,r,i,c,n){return function(e){function t(t){var o=e.call(this,t)||this;return o.location=null,o.intersectedLocation=null,o.intersectedGraphic=null,o.visible=void 0,o}return o.__extends(t,e),o.__decorate([c.property({type:n})],t.prototype,"location",void 0),o.__decorate([c.property({type:n})],t.prototype,"intersectedLocation",void 0),o.__decorate([c.property({type:r})],t.prototype,"intersectedGraphic",void 0),o.__decorate([c.property({type:Boolean})],t.prototype,"visible",void 0),t=o.__decorate([c.subclass("esri.widgets.lineOfSight.LineOfSightTarget")],t)}(i)}));