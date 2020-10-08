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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators"],(function(e,t,i,r,n){"use strict";return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),Object.defineProperty(t.prototype,"canZoomIn",{get:function(){if(!this.get("view.ready"))return!1;var e=this.get("view.animation.target.scale")||this.get("view.scale"),t=this.get("view.constraints.effectiveMaxScale");return 0===t||e>t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canZoomOut",{get:function(){if(!this.get("view.ready"))return!1;var e=this.get("view.animation.target.scale")||this.get("view.scale"),t=this.get("view.constraints.effectiveMinScale");return 0===t||e<t},enumerable:!1,configurable:!0}),i.__decorate([n.property({dependsOn:["view.ready","view.scale","view.animation.target.scale","view.constraints.effectiveMaxScale"],readOnly:!0})],t.prototype,"canZoomIn",null),i.__decorate([n.property({dependsOn:["view.ready","view.scale","view.animation.target.scale","view.constraints.effectiveMinScale"],readOnly:!0})],t.prototype,"canZoomOut",null),i.__decorate([n.property()],t.prototype,"view",void 0),t=i.__decorate([n.subclass("esri.widgets.Zoom.ZoomConditions2D")],t)}(r)}));