// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor"],function(e,r,t,o,n,c){var i=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),Object.defineProperty(r.prototype,"canZoomIn",{get:function(){var e=this.get("view.scale"),r=this.get("view.constraints.effectiveMaxScale");return 0===r||e>r},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canZoomOut",{get:function(){var e=this.get("view.scale"),r=this.get("view.constraints.effectiveMinScale");return 0===r||r>e},enumerable:!0,configurable:!0}),o([n.property({dependsOn:["view.ready","view.scale"],readOnly:!0})],r.prototype,"canZoomIn",null),o([n.property({dependsOn:["view.ready","view.scale"],readOnly:!0})],r.prototype,"canZoomOut",null),o([n.property()],r.prototype,"view",void 0),r=o([n.subclass("esri.widgets.Zoom.ZoomConditions2D")],r)}(n.declared(c));return i});