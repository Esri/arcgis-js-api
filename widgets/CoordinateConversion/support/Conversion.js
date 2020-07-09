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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(o,e,t,r,n){return function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.format=null,e.position={coordinate:null,location:null},e}return t.__extends(e,o),Object.defineProperty(e.prototype,"displayCoordinate",{get:function(){var o=this.get("format");return o&&o.getDisplayCoordinate(this.get("position.coordinate"))},enumerable:!0,configurable:!0}),t.__decorate([n.property({readOnly:!0,dependsOn:["position","format.currentPattern"]})],e.prototype,"displayCoordinate",null),t.__decorate([n.property()],e.prototype,"format",void 0),t.__decorate([n.property()],e.prototype,"position",void 0),e=t.__decorate([n.subclass("esri.widgets.CoordinateConversion.support.Conversion")],e)}(r)}));