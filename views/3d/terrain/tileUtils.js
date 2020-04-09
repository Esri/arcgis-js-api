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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/PooledArray"],(function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(){this.q=new r,this._last=null}return Object.defineProperty(t.prototype,"done",{get:function(){return 0===this.q.length&&(!this._last||this._last.isLeaf)},enumerable:!0,configurable:!0}),t.prototype.resetOne=function(t){this.q.clear(),this.q.push(t),this._last=null},t.prototype.reset=function(t){this.q.clear(),t&&this.q.pushArray(t),this._last=null},t.prototype.skipSubtree=function(){this._last=null},t.prototype.next=function(){return this._last&&!this._last.isLeaf&&this.q.pushArray(this._last.children),this._last=this.q.pop(),this._last},t}();e.IteratorPreorder=n;var i=function(){function t(){this.q=new r}return Object.defineProperty(t.prototype,"done",{get:function(){return 0===this.q.length},enumerable:!0,configurable:!0}),t.prototype.reset=function(t){if(this.q.clear(),t){this.q.pushArray(t);for(var e=0;e<this.q.length;++e){var r=this.q.data[e];r.isLeaf||this.q.pushArray(r.children)}}},t.prototype.next=function(){return this.q.pop()},t}();function l(t){return t?t[0]+"/"+t[1]+"/"+t[2]:"null"}function o(t,e){if(e(t),!t.isLeaf)for(var r=0,n=t.children;r<n.length;r++){o(n[r],e)}}function s(t,e,r){var n=t.screenDepth,i=e.screenDepth;return n<i?-r:n>i?r:0}e.IteratorPostorder=i,e.lij2str=l,e.tile2str=function(t){return t?l(t.lij):"null"},e.traverseTilesPreorder=function(t,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)o(t[r],e);else o(t,e)},e.fallsWithinLayer=function(t,e,r){if(!e)return!1;var n=e.fullExtent,i=t.extent;if(r){if(i[0]<n.xmin||i[1]<n.ymin||i[2]>n.xmax||i[3]>n.ymax)return!1}else if(n.xmin>i[2]||n.ymin>i[3]||n.xmax<i[0]||n.ymax<i[1])return!1;var l=t.surface.tilingScheme.levels[t.lij[0]].scale;return!(e.minScale>0&&l>1.00000001*e.minScale)&&!(e.maxScale>0&&l<.99999999*e.maxScale)},e.getTileNLevelsUp=function(t,e){for(;e--;)t=t.parent;return t},e.getRootTile=function(t){for(;t.parent;)t=t.parent;return t},e.nextTileInAncestry=function(t,e){var r=t.lij[0]-e.lij[0]-1,n=0;return 1&t.lij[1]>>r&&(n+=2),1&t.lij[2]>>r&&(n+=1),e.children[n]},e.sortTiles=function(t,e){e.sort((function(e,r){return s(e,r,t)}))},e.compareTiles=s,e.computeUpsampleInfo=function(t,e,r){for(var n=1,i=0,l=0;t!==e;)if(n*=.5,i*=.5,l*=.5,1&t.lij[2]&&(i+=.5),0==(1&t.lij[1])&&(l+=.5),null==(t=t.parent))throw new Error("tile was not a descendant of upsampleTile");r.init(e,i,l,n)},e.hasVisibleSiblings=function(t){for(var e=0;e<t.length;e++){var r=t[e],n=r.parent;if(n)for(var i=0;i<4;i++){var l=n.children[i];if(l&&l!==r&&l.visible)return!0}}return!1},e.tilesAreRelated=function(t,e){if(!t||!e)return!1;var r=t[0]<e[0],n=r?t:e,i=r?e:t,l=i[0]-n[0];if(0===l)return!1;var o=1<<l;return Math.floor(i[1]/o)===n[1]&&Math.floor(i[2]/o)===n[2]}}));