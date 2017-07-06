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

define(["require","exports","dojo/io-query","./TextureCollection","./ResourceController","../../../identity/IdentityManager","../../../core/watchUtils","../webgl-engine/lib/screenSizePerspectiveUtils"],function(e,t,r,i,s,n,a,c){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){var t=this;this.textures=null,this.streamDataSupplier=null,this.tokens={},this.graphicsOwners=[],this.screenSizePerspectiveHandle=null;var r=s.ClientType.SYMBOLOGY;this.stage=e.stage,this.focusTracker=e.focusTracker,this.resourceController=e.resourceController,this.streamDataSupplier=this.resourceController.registerClient(this,r,{addUrlToken:function(e){return t.addUrlToken(e)}}),this.textures=new i(this.streamDataSupplier,e.stage,{preMultiplyAlpha:!0,wrapClamp:!0}),this.screenSizePerspectiveSettings=c.getSettings(e.viewingMode),this.screenSizePerspectiveSettingsLabels=c.getLabelSettings(e.viewingMode)}return e.prototype.destroy=function(){this.resourceController.deregisterClient(this),this.textures=null,this.streamDataSupplier=null},e.prototype.addGraphicsOwner=function(e){var t=this;this.graphicsOwners.push(e);var r=null;return e.layerView&&(r=a.init(e.layerView,"layer.screenSizePerspectiveEnabled",function(){return t.updateScreenSizePerspectiveEnabled()})),{remove:function(){r&&(r.remove(),r=null,t.updateScreenSizePerspectiveEnabled())}}},e.prototype.updateScreenSizePerspectiveEnabled=function(){var e=this,t=this.graphicsOwners.some(function(e){return e.layerView&&e.layerView.get("layer.screenSizePerspectiveEnabled")===!0});t&&!this.screenSizePerspectiveHandle?(this.screenSizePerspectiveHandle=this.focusTracker.events.on("distanceToSurfaceChanged",function(){return e.updateScreenSizePerspectiveSettings()}),this.updateScreenSizePerspectiveSettings()):!t&&this.screenSizePerspectiveHandle&&(this.screenSizePerspectiveHandle.remove(),this.screenSizePerspectiveHandle=null)},e.prototype.updateScreenSizePerspectiveSettings=function(){var e=this.focusTracker;l.distance=e.distanceToSurface,l.fovY=e.fovY,this.screenSizePerspectiveSettings.update(l),this.screenSizePerspectiveSettingsLabels.update(l),this.stage.setNeedsRender()},e.prototype.addUrlToken=function(e){if(0===e.indexOf("data:"))return e;var t=e.match(/^(((?:https?:)?\/\/[^\/]+).*?)(?:\?(.*))?$/);if(!t)return e;var i=t[1],s=t[2],a=t[3],c=r.queryToObject(a||"");if(!("token"in c)){if(null==this.tokens[s]){var o=n.findCredential(e);this.tokens[s]=o&&o.token||""}this.tokens[s]&&(c.token=this.tokens[s])}var l=r.objectToQuery(c);return e=l?i+"?"+l:i},e}();t.SharedSymbolResources=o;var l={distance:0,fovY:0};t["default"]=o});