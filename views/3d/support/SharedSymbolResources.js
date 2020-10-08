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

define(["require","exports","../../../core/arrayUtils","../../../core/Handles","./TextureCollection","../webgl-engine/lib/screenSizePerspectiveUtils"],(function(e,t,s,r,i,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SharedSymbolResources=void 0;var a=function(){function e(e){this.textures=null,this.streamDataRequester=null,this.graphicsOwners=[],this.screenSizePerspectiveHandles=null,this.cimSymbolRasterizer=null,this.viewState=e.viewState,this.stage=e.stage,this.pointsOfInterest=e.pointsOfInterest,this.objectResourceCache=e.objectResourceCache,this.streamDataRequester=e.resourceController.createStreamDataRequester(3),this.textures=new i.default(this.streamDataRequester,e.stage,{preMultiplyAlpha:!0,wrap:{s:33071,t:33071}},e.resourceController.scheduler),this.screenSizePerspectiveSettings=n.getSettings(e.viewingMode),this.screenSizePerspectiveSettingsLabels=n.getLabelSettings(e.viewingMode)}return e.prototype.destroy=function(){this.textures.destroy(),this.textures=null,this.streamDataRequester=null},e.prototype.addGraphicsOwner=function(e){var t=this;if(!e)return{remove:function(){}};this.graphicsOwners.push(e);var r="layer"in e?e.watch("layer.screenSizePerspectiveEnabled",(function(){return t.updateScreenSizePerspectiveEnabled()})):null;return this.updateScreenSizePerspectiveEnabled(),{remove:function(){r&&(r.remove(),s.removeUnordered(t.graphicsOwners,e),t.updateScreenSizePerspectiveEnabled())}}},e.prototype.updateScreenSizePerspectiveEnabled=function(){var e=this,t=this.graphicsOwners.some((function(e){return!0===e.get("layer.screenSizePerspectiveEnabled")}));if(t&&!this.screenSizePerspectiveHandles){this.screenSizePerspectiveHandles=new r;var s=function(){return e.updateScreenSizePerspectiveSettings()};this.screenSizePerspectiveHandles.add([this.pointsOfInterest.centerOnSurfaceInfrequent.watch("distance",s,!0),this.viewState.events.on("camera-projection-changed",s)]),this.updateScreenSizePerspectiveSettings()}else!t&&this.screenSizePerspectiveHandles&&(this.screenSizePerspectiveHandles.destroy(),this.screenSizePerspectiveHandles=null)},e.prototype.updateScreenSizePerspectiveSettings=function(){var e=this.pointsOfInterest;c.distance=e.centerOnSurfaceInfrequent.distance,c.fovY=this.viewState.camera.fovY,this.screenSizePerspectiveSettings.update(c),this.screenSizePerspectiveSettingsLabels.update(c),this.stage.renderView.setNeedsRender()},e}();t.SharedSymbolResources=a;var c={distance:0,fovY:0};t.default=a}));