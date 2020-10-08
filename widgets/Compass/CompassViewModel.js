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

define(["require","exports","tslib","../../core/Accessor","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","../support/GoTo"],(function(t,e,o,i,r,a,n,s){"use strict";return function(t){function e(e){var o=t.call(this,e)||this;return o._handles=new r,o.orientation={x:0,y:0,z:0},o.view=null,o._updateForCamera=o._updateForCamera.bind(o),o._updateForRotation=o._updateForRotation.bind(o),o._updateRotationWatcher=o._updateRotationWatcher.bind(o),o.view,o}return o.__extends(e,t),e.prototype.initialize=function(){this._handles.add(a.init(this,"view",this._updateRotationWatcher))},e.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},Object.defineProperty(e.prototype,"canShowNorth",{get:function(){var t=this.get("view.spatialReference");return!(!t||!t.isWebMercator&&!t.isGeographic)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this.get("view.ready")?this.canShowNorth?"compass":"rotation":"disabled"},enumerable:!1,configurable:!0}),e.prototype.reset=function(){if(this.get("view.ready")){var t={};"2d"===this.view.type?t.rotation=0:t.heading=0,this.callGoTo({target:t})}},e.prototype._updateForRotation=function(t){null!=t&&(this.orientation={z:t})},e.prototype._updateForCamera=function(t){if(t){var e=-t.heading;this.orientation={x:0,y:0,z:e}}},e.prototype._updateRotationWatcher=function(t){this._handles.removeAll(),t&&("2d"===t.type?this._handles.add(a.init(this,"view.rotation",this._updateForRotation)):this._handles.add(a.init(this,"view.camera",this._updateForCamera)))},o.__decorate([n.property({dependsOn:["view.spatialReference.isWebMercator","view.spatialReference.wkid"],readOnly:!0})],e.prototype,"canShowNorth",null),o.__decorate([n.property()],e.prototype,"orientation",void 0),o.__decorate([n.property({dependsOn:["view.ready","canShowNorth"],readOnly:!0})],e.prototype,"state",null),o.__decorate([n.property()],e.prototype,"view",void 0),e=o.__decorate([n.subclass("esri.widgets.CompassViewModel")],e)}(s.GoToMixin(i))}));