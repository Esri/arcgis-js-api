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

define(["require","exports","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../layers/graphics/dehydratedFeatures","../../../../../support/elevationInfoUtils"],(function(e,t,i,n,o,r){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t,i){this.elevationInfo=e,this.defaultZ=t,this.view=i}return e.prototype.screenToMap=function(e){if(i.isSome(this.defaultZ))return this.view.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(e.x,e.y),this.elevationInfo,this.defaultZ);var t=this.view.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(e.x,e.y),this.elevationInfo,0);return i.isSome(t)&&(t.z=void 0),t},e.prototype.mapToScreen=function(e){var t=o.makeDehydratedPoint(e.x,e.y,r.getConvertedElevation(this.view,e,this.elevationInfo),e.spatialReference);return this.view.toScreen(t)},e}();t.ElevationDrawSurface=a;var s=function(){function e(e,t,i){void 0===i&&(i=[]),this.view=e,this.elevationInfo=t,this.exclude=i}return e.prototype.screenToMap=function(e){var t=this.view.toMap(e,{exclude:this.exclude});return i.isSome(t)&&(t.z=r.getZForElevationMode(t,this.view,this.elevationInfo)),t},e.prototype.mapToScreen=function(e){var t=e;return i.isSome(this.elevationInfo)&&(t=o.makeDehydratedPoint(e.x,e.y,r.getConvertedElevation(this.view,e,this.elevationInfo),e.spatialReference)),this.view.toScreen(t)},e}();t.SceneDrawSurface=s}));