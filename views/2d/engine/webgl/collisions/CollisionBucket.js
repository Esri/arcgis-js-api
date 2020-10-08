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

define(["require","exports","../../../tiling","./CollisionBucketEntry"],(function(t,e,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){this.neighbors=new Array(9),this._tiles=new Array(e);for(var i=0;i<e;i++)this._tiles[i]=new r.default;this.key=t}return Object.defineProperty(t.prototype,"isDirty",{get:function(){for(var t=0,e=this._tiles;t<e.length;t++){if(e[t].dirty)return!0}return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._tiles.length},enumerable:!1,configurable:!0}),t.prototype.getTile=function(t){return this._tiles[t]},t.prototype.getReference=function(t){var e=this._tiles[t];return e&&e.reference},t.prototype.onRegisterLayer=function(t){this.invalidateRange(t),this._add(t)},t.prototype.onUnregisterLayer=function(t){this.invalidateRange(t),this._remove(t)},t.prototype.onLabelsRendered=function(){},t.prototype.invalidateRange=function(t){for(var e=t;e<this._tiles.length;e++)this._tiles[e].dirty=!0},t.prototype.add=function(t){this._add(t)},t.prototype.remove=function(t){this._remove(t)},t.prototype.canDelete=function(){return 0===this._tiles.length},t.prototype.ready=function(){for(var t=0,e=this._tiles;t<e.length;t++){e[t].dirty=!1}},t.prototype.computeNeighbors=function(t){this.neighbors[0]=this._getNeighbor(t,-1,-1),this.neighbors[1]=this._getNeighbor(t,0,-1),this.neighbors[2]=this._getNeighbor(t,1,-1),this.neighbors[3]=this._getNeighbor(t,-1,0),this.neighbors[4]=this,this.neighbors[5]=this._getNeighbor(t,1,0),this.neighbors[6]=this._getNeighbor(t,-1,1),this.neighbors[7]=this._getNeighbor(t,0,1),this.neighbors[8]=this._getNeighbor(t,1,1)},t.prototype.reset=function(t,e,i){var r=this._tiles[i.index];r&&r.reset(t,e,i)},t.prototype._add=function(t){var e=[];if(t>=this._tiles.length)this._tiles.push(new r.default);else{for(var i=0;i<this._tiles.length;i++)i===t&&e.push(new r.default),e.push(this._tiles[i]);this._tiles=e}},t.prototype._remove=function(t){for(var e=[],i=0;i<this._tiles.length;i++)i!==t&&e.push(this._tiles[i]);this._tiles=e},t.prototype._getNeighbor=function(t,e,r){var o=this.key,n=o.col+e,s=o.row+r,h=o.level,l=o.world,g=i.TileKey.getId(h,s,n,l);return t.has(g)?t.get(g):null},t}();e.default=o}));