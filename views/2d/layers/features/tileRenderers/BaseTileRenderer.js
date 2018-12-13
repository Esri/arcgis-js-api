// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Accessor","../../../../../core/HandleOwner","../../../../../core/accessorSupport/decorators"],function(e,t,r,i,o,p,n){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var r=e.call(this)||this;return r.tiles=new Map,r.layer=null,r}return r(t,e),t.prototype.destroy=function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.highlightOptions=this.configuration=this.tiles=null},Object.defineProperty(t.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0}),t.prototype.acquireTile=function(e){var t=this,r=this.createTile(e);return r.once("isReady",function(){return t.notifyChange("updating")}),this.tiles.set(e.id,r),r},t.prototype.forEachTile=function(e){this.tiles.forEach(e)},t.prototype.releaseTile=function(e){this.tiles.delete(e.key.id),this.disposeTile(e)},t.prototype.isUpdating=function(){var e=!0;return this.tiles.forEach(function(t){e=e&&t.isReady}),!e},t.prototype.requestUpdate=function(){this.layerView.requestUpdate()},i([n.property()],t.prototype,"configuration",void 0),i([n.property()],t.prototype,"highlightOptions",void 0),i([n.property()],t.prototype,"layer",void 0),i([n.property()],t.prototype,"layerView",void 0),i([n.property()],t.prototype,"tileInfoView",void 0),i([n.property()],t.prototype,"updating",null),t=i([n.subclass()],t)}(n.declared(o,p));t.default=s});