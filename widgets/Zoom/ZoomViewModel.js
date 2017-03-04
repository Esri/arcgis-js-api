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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor"],function(e,t,o,r,n,i){var a=function(e){function t(t){var o=e.call(this,t)||this;return o.view=null,o.zoomIn=o.zoomIn.bind(o),o.zoomOut=o.zoomOut.bind(o),o}return o(t,e),t.prototype.destroy=function(){this.view=null},Object.defineProperty(t.prototype,"canZoomIn",{get:function(){if("2d"!==this.get("view.type"))return!0;var e=this.get("view.scale"),t=this.get("view.constraints.effectiveMaxScale");return 0===t||e>t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canZoomOut",{get:function(){if("2d"!==this.get("view.type"))return!0;var e=this.get("view.scale"),t=this.get("view.constraints.effectiveMinScale");return 0===t||t>e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.zoomIn=function(){this.canZoomIn&&this._zoomToFactor(.5)},t.prototype.zoomOut=function(){this.canZoomOut&&this._zoomToFactor(2)},t.prototype._zoomToFactor=function(e){if("ready"===this.state){var t=this.view;t.goTo({scale:this.get("view.scale")*e})}},t}(n.declared(i));return r([n.property({dependsOn:["view.ready","view.scale"],readOnly:!0})],a.prototype,"canZoomIn",null),r([n.property({dependsOn:["view.ready","view.scale"],readOnly:!0})],a.prototype,"canZoomOut",null),r([n.property({dependsOn:["view.ready"],readOnly:!0})],a.prototype,"state",null),r([n.property()],a.prototype,"view",void 0),a=r([n.subclass("esri.widgets.Zoom.ZoomViewModel")],a)});