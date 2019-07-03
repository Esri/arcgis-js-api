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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators"],function(e,r,o,t,n,p){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),Object.defineProperty(r.prototype,"canZoomIn",{get:function(){return!!this.get("view.ready")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canZoomOut",{get:function(){return!!this.get("view.ready")},enumerable:!0,configurable:!0}),t([p.property({dependsOn:["view.ready"],readOnly:!0})],r.prototype,"canZoomIn",null),t([p.property({dependsOn:["view.ready"],readOnly:!0})],r.prototype,"canZoomOut",null),t([p.property()],r.prototype,"view",void 0),r=t([p.subclass("esri.widgets.Zoom.ZoomConditions3D")],r)}(p.declared(n))});