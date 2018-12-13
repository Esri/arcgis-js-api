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

define(["require","exports","../../../tiling","./CollisionBucketEntry"],function(e,t,g,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){this.neighbors=new Array(9),this._tiles=new Array(t);for(var i=0;i<t;i++)this._tiles[i]=new r.default;this.key=e}return Object.defineProperty(e.prototype,"isDirty",{get:function(){for(var e=0,t=this._tiles;e<t.length;e++){if(t[e].dirty)return!0}return!1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._tiles.length},enumerable:!0,configurable:!0}),e.prototype.getTile=function(e){return this._tiles[e]},e.prototype.getReference=function(e){var t=this._tiles[e];return t&&t.reference},e.prototype.onRegisterLayer=function(e){this.invalidateRange(e),this._add(e)},e.prototype.onUnregisterLayer=function(e){this.invalidateRange(e),this._remove(e)},e.prototype.onLabelsRendered=function(){},e.prototype.invalidateRange=function(e){for(var t=e;t<this._tiles.length;t++)this._tiles[t].dirty=!0},e.prototype.add=function(e){this._add(e)},e.prototype.remove=function(e){this._remove(e)},e.prototype.canDelete=function(){return 0===this._tiles.length},e.prototype.ready=function(){for(var e=0,t=this._tiles;e<t.length;e++){t[e].dirty=!1}},e.prototype.computeNeighbors=function(e){this.neighbors[0]=this._getNeighbor(e,-1,-1),this.neighbors[1]=this._getNeighbor(e,0,-1),this.neighbors[2]=this._getNeighbor(e,1,-1),this.neighbors[3]=this._getNeighbor(e,-1,0),(this.neighbors[4]=this).neighbors[5]=this._getNeighbor(e,1,0),this.neighbors[6]=this._getNeighbor(e,-1,1),this.neighbors[7]=this._getNeighbor(e,0,1),this.neighbors[8]=this._getNeighbor(e,1,1)},e.prototype.reset=function(e,t,i){for(var r=0,o=this._tiles;r<o.length;r++){var n=o[r];n&&n.reset(e,t,i)}},e.prototype._add=function(e){var t=[];if(e>=this._tiles.length)this._tiles.push(new r.default);else{for(var i=0;i<this._tiles.length;i++)i===e&&t.push(new r.default),t.push(this._tiles[i]);this._tiles=t}},e.prototype._remove=function(e){for(var t=[],i=0;i<this._tiles.length;i++)i!==e&&t.push(this._tiles[i]);this._tiles=t},e.prototype._getNeighbor=function(e,t,i){var r=this.key,o=r.col+t,n=r.row+i,s=r.level,h=r.world,l=g.TileKey.getId(s,n,o,h);return e.has(l)?e.get(l):null},e}();t.default=i});