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

define(["require","exports","tslib","../../../../../core/HandleOwner","../../../../../core/accessorSupport/decorators"],(function(e,t,r,o,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t){var r=e.call(this,t)||this;return r.tiles=new Map,r}return r.__extends(t,e),t.prototype.destroy=function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null},Object.defineProperty(t.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0}),t.prototype.acquireTile=function(e){var t=this,r=this.createTile(e);return r.once("isReady",(function(){return t.notifyChange("updating")})),this.tiles.set(e.id,r),r},t.prototype.lockAttributeTextureUpload=function(){},t.prototype.unlockAttributeTextureUpload=function(){},t.prototype.forceAttributeTextureUpload=function(){},t.prototype.forEachTile=function(e){this.tiles.forEach(e)},t.prototype.releaseTile=function(e){this.tiles.delete(e.key.id),this.disposeTile(e)},t.prototype.isUpdating=function(){var e=!0;return this.tiles.forEach((function(t){e=e&&t.isReady})),!e},t.prototype.setHighlight=function(){},t.prototype.invalidateLabels=function(){},t.prototype.requestUpdate=function(){this.layerView.requestUpdate()},r.__decorate([i.property()],t.prototype,"layer",void 0),r.__decorate([i.property()],t.prototype,"layerView",void 0),r.__decorate([i.property()],t.prototype,"tileInfoView",void 0),r.__decorate([i.property()],t.prototype,"updating",null),t=r.__decorate([i.subclass("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],t)}(o.HandleOwner);t.default=n}));