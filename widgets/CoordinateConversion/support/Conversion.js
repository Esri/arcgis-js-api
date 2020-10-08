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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(o,t,e,r,n){"use strict";return function(o){function t(t){var e=o.call(this,t)||this;return e.format=null,e.position={coordinate:null,location:null},e}return e.__extends(t,o),Object.defineProperty(t.prototype,"displayCoordinate",{get:function(){var o=this.get("format");return o&&o.getDisplayCoordinate(this.get("position.coordinate"))},enumerable:!1,configurable:!0}),e.__decorate([n.property({readOnly:!0,dependsOn:["position","format.currentPattern"]})],t.prototype,"displayCoordinate",null),e.__decorate([n.property()],t.prototype,"format",void 0),e.__decorate([n.property()],t.prototype,"position",void 0),t=e.__decorate([n.subclass("esri.widgets.CoordinateConversion.support.Conversion")],t)}(r)}));