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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/HandleRegistry","../../core/Accessor","../../core/watchUtils"],function(e,t,o,r,i,a,n,p){var s=function(e){function t(t){var o=e.call(this,t)||this;return o._handles=new a,o.orientation={x:0,y:0,z:0},o.view=null,o._updateForCamera=o._updateForCamera.bind(o),o._updateForRotation=o._updateForRotation.bind(o),o._updateRotationWatcher=o._updateRotationWatcher.bind(o),o}return o(t,e),t.prototype.initialize=function(){this._handles.add(p.init(this,"view",this._updateRotationWatcher))},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null,this.view=null},Object.defineProperty(t.prototype,"canShowNorth",{get:function(){var e=this.get("view.spatialReference");return e&&(e.isWebMercator||4326===e.wkid)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("view.ready")?this.canShowNorth?"compass":"rotation":"disabled"},enumerable:!0,configurable:!0}),t.prototype.reset=function(){if(this.get("view.ready")){var e={};"2d"===this.view.type?e.rotation=0:e.heading=0;var t=this.view;t.goTo(e)}},t.prototype._updateForRotation=function(e){void 0!==e&&null!==e&&(this.orientation={z:e})},t.prototype._updateForCamera=function(e){if(e){var t=-e.heading;this.orientation={x:0,y:0,z:t}}},t.prototype._updateRotationWatcher=function(e){this._handles.removeAll(),e&&("2d"===e.type?this._handles.add(p.init(this,"view.rotation",this._updateForRotation)):this._handles.add(p.init(this,"view.camera",this._updateForCamera)))},t}(i.declared(n));return r([i.property({dependsOn:["view.spatialReference.isWebMercator","view.spatialReference.wkid"],readOnly:!0})],s.prototype,"canShowNorth",null),r([i.property()],s.prototype,"orientation",void 0),r([i.property({dependsOn:["view.ready","canShowNorth"],readOnly:!0})],s.prototype,"state",null),r([i.property()],s.prototype,"view",void 0),s=r([i.subclass("esri.widgets.CompassViewModel")],s)});