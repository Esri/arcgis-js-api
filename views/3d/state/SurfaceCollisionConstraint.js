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

define(["require","exports","tslib","../../../core/Accessor","../../../core/Handles","../../../core/accessorSupport/decorators","../camera/constraintUtils","../camera/intersectionUtils"],(function(e,t,n,i,a,r,o,s){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t){var n=e.call(this,t)||this;return n.handles=new a,n}return n.__extends(t,e),t.prototype.initialize=function(){var e=this;this.handles.add(this.view.basemapTerrain.on("elevation-change",(function(t){return e.handleElevationChangeEvent(t)})))},t.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null)},t.prototype.handleElevationChangeEvent=function(e){if(!this.view.state.cameraController){var t=this.view.state.camera;s.eyeWithinExtent(this.view,t,e.extent,e.spatialReference)&&this.applyToCurrentCamera()}},t.prototype.applyToCurrentCamera=function(){var e=this;this.view.state.updateCamera((function(t){o.applySurfaceCollisionConstraint(e.view,t,1)}))},n.__decorate([r.property({constructOnly:!0})],t.prototype,"view",void 0),t=n.__decorate([r.subclass("esri.views.3d.state.ElevationCollisionConstraint")],t)}(i);t.SurfaceCollisionConstraint=l,t.default=l}));