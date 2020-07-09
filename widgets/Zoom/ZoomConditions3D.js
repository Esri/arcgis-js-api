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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators"],(function(e,r,o,t,n){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(r,e),Object.defineProperty(r.prototype,"canZoomIn",{get:function(){return!!this.get("view.ready")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canZoomOut",{get:function(){return!!this.get("view.ready")},enumerable:!0,configurable:!0}),o.__decorate([n.property({dependsOn:["view.ready"],readOnly:!0})],r.prototype,"canZoomIn",null),o.__decorate([n.property({dependsOn:["view.ready"],readOnly:!0})],r.prototype,"canZoomOut",null),o.__decorate([n.property()],r.prototype,"view",void 0),r=o.__decorate([n.subclass("esri.widgets.Zoom.ZoomConditions3D")],r)}(t)}));