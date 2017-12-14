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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../.././../../geometry","./PointToPointMeasurementView"],function(e,t,o,i,n,r){var a=function(){function e(e,t){this._tempPickRequest=new r.PickRequest,this.model=e,this.view=t,this.reset()}return e.prototype.reset=function(){this.model.reset()},e.prototype.clearMeasurement=function(){this.model.clearMeasurement()},e.prototype.hoverAt=function(e){this._updateHoveredHandle(e);var t=this._pick(e,!1);t.mapPoint&&(this.model.cursorPoint=t.mapPoint)},e.prototype.startAt=function(e,t){void 0===t&&(t="mouse");var o=this._pick(e);return o.mapPoint?(this.model.startPoint=o.mapPoint,this.model.startPointSurfaceLocation=this._surfaceLocation(o.mapPoint,o.type),this.model.hoveredHandle="start",!0):(this._updateHoveredHandle(e),!1)},e.prototype.endAt=function(e,t){void 0===t&&(t="mouse");var o=this._pick(e);return o.mapPoint&&!this.view.overlappingHandles(o.mapPoint,this.model.startPoint)?(this.model.endPoint=o.mapPoint,this.model.endPointSurfaceLocation=this._surfaceLocation(o.mapPoint,o.type),"mouse"===t?this.model.hoveredHandle="end":this.model.hoveredHandle=null,!0):(this._updateHoveredHandle(e),!1)},e.prototype.handleAt=function(e){var t=this._pick(e,!0);return t.handle},e.prototype.moveHandleTo=function(e,t){t=this._clipToScreen(t);var o=this._pick(t);if(o.mapPoint)if("start"===e){if(!this.view.overlappingHandles(o.mapPoint,this.model.endPoint))return this.model.startPoint=o.mapPoint,this.model.startPointSurfaceLocation=this._surfaceLocation(o.mapPoint,o.type),this.model.hoveredHandle="start",!0}else if("end"===e&&!this.view.overlappingHandles(o.mapPoint,this.model.startPoint))return this.model.endPoint=o.mapPoint,this.model.endPointSurfaceLocation=this._surfaceLocation(o.mapPoint,o.type),this.model.hoveredHandle="end",!0;return this._updateHoveredHandle(t),!1},e.prototype._pick=function(e,t){void 0===t&&(t=!1);var o=this._tempPickRequest;return o.screenPoint=e,o.pickHandles=t,this.view.pick(o)},e.prototype._clipToScreen=function(e){return new n.ScreenPoint({x:Math.max(0,Math.min(this.model.sceneView.width,e.x)),y:Math.max(0,Math.min(this.model.sceneView.height,e.y))})},e.prototype._updateHoveredHandle=function(e){var t=this._pick(e,!0);this.model.hoveredHandle=t.handle},e.prototype._surfaceLocation=function(e,t){return"surface"===t?"on-the-surface":e.z>=this.view.getElevation(e)?"above-the-surface":"below-the-surface"},e}();return a});