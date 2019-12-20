// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Handles","../../../core/accessorSupport/decorators","../camera/constraintUtils","../camera/intersectionUtils"],function(e,t,n,r,a,i,o,s,l){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t){var n=e.call(this,t)||this;return n.handles=new i,n}return n(t,e),t.prototype.initialize=function(){var e=this;this.handles.add(this.view.basemapTerrain.on("elevation-change",function(t){return e.handleElevationChangeEvent(t)}))},t.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)},t.prototype.handleElevationChangeEvent=function(e){if(!this.view.state.cameraController){var t=this.view.state,n=t.camera;l.eyeWithinExtent(this.view,n,e.extent,e.spatialReference)&&this.applyToCurrentCamera()}},t.prototype.applyToCurrentCamera=function(){var e=this;this.view.state.updateCamera(function(t){s.applySurfaceCollisionConstraint(e.view,t,1)})},r([o.property({constructOnly:!0})],t.prototype,"view",void 0),t=r([o.subclass("esri.views.3d.state.ElevationCollisionConstraint")],t)}(o.declared(a));t.SurfaceCollisionConstraint=c,t.default=c});