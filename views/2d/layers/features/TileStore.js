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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../support/Evented","../../tiling/TileKey"],function(e,t,i,s,o,n){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t){var i=e.call(this)||this;return i._tiles=new Map,i.tiles=[],i.tileInfo=t,i.spatialReference=t.spatialReference,i}return i(t,e),t.prototype.destroy=function(){this._tiles.clear()},t.prototype.has=function(e){return this._tiles.has(e)},t.prototype.get=function(e){return this._tiles.get(e)},t.prototype.findByKey=function(e){return this._tiles.get(e.id)},t.prototype.add=function(e){if(!this.has(e)){var t=new n(e),i=this.tileInfo.lodAt(t.level),s=i.resolution,o=i.scale,r=this.tileInfo.getTileBounds([0,0,0,0],t),l={id:e,key:t,bounds:r,resolution:s,scale:o};this._tiles.set(e,l),this.tiles.push(l),this.emit("add",l)}},t.prototype.delete=function(e){if(this.has(e)){var t=this.get(e);this._tiles.delete(e),this.tiles.splice(this.tiles.indexOf(t),1),this.emit("remove",t)}},t}(o.default);t.default=r});