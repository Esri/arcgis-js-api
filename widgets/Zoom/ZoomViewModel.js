// COPYRIGHT © 2016 Esri
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

define(["../../core/Accessor"],function(e){var t={disabled:"disabled",ready:"ready"};return e.createSubclass({properties:{state:{dependsOn:["view.ready"],readOnly:!0},canZoomIn:{dependsOn:["view.ready","view.scale"],readOnly:!0},canZoomOut:{dependsOn:["view.ready","view.scale"],readOnly:!0},view:{}},declaredClass:"esri.widgets.Zoom.ZoomViewModel",constructor:function(){this.zoomIn=this.zoomIn.bind(this),this.zoomOut=this.zoomOut.bind(this)},state:t.disabled,_stateGetter:function(){return this.get("view.ready")?t.ready:t.disabled},view:null,_canZoomInGetter:function(){if("2d"!==this.get("view.type"))return!0;var e=this.get("view.scale"),t=this.get("view.constraints.effectiveMaxScale");return 0===t||e>t},_canZoomOutGetter:function(){if("2d"!==this.get("view.type"))return!0;var e=this.get("view.scale"),t=this.get("view.constraints.effectiveMinScale");return 0===t||t>e},zoomIn:function(){this.canZoomIn&&this._zoomToFactor(.5)},zoomOut:function(){this.canZoomOut&&this._zoomToFactor(2)},_zoomToFactor:function(e){var i=this.state===t.ready;i&&this.view.goTo({scale:this.get("view.scale")*e})}})});