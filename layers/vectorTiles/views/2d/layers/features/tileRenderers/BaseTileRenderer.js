// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/declareExtendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../../core/Accessor","../../../../../core/HandleOwner","../../../../../core/accessorSupport/decorators","../../../tiling/enums"],(function(t,e,r,i,o,n,p,s){Object.defineProperty(e,"__esModule",{value:!0});var l=function(t){function e(e){var r=t.call(this)||this;return r.tiles=new Map,r.layer=null,r}return r(e,t),e.prototype.destroy=function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.highlightOptions=this.configuration=this.tiles=null},Object.defineProperty(e.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0}),e.prototype.acquireTile=function(t){var e=this,r=this.createTile(t);return r.once("attach",(function(){return e.notifyChange("updating")})),this.tiles.set(t.id,r),r},e.prototype.forEachTile=function(t){this.tiles.forEach(t)},e.prototype.releaseTile=function(t){this.tiles.delete(t.key.id),this.disposeTile(t)},e.prototype.isUpdating=function(){var t=!0;return this.tiles.forEach((function(e){t=t&&e.status!==s.TileStatus.INITIALIZED})),!t},e.prototype.requestUpdate=function(){this.layerView.requestUpdate()},i([p.property()],e.prototype,"configuration",void 0),i([p.property()],e.prototype,"highlightOptions",void 0),i([p.property()],e.prototype,"layer",void 0),i([p.property()],e.prototype,"layerView",void 0),i([p.property()],e.prototype,"tileInfoView",void 0),i([p.property()],e.prototype,"updating",null),e=i([p.subclass()],e)}(p.declared(o,n));e.default=l}));