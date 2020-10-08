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

define(["require","exports","../../../core/maybe","../../../core/PooledArray"],(function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tilesAreRelated=t.hasVisibleSiblings=t.computeUpsampleInfo=t.compareTiles=t.sortTiles=t.fallsWithinLayer=t.traverseTilesPreorder=t.tile2str=t.lij2str=t.IteratorPostorder=t.IteratorPreorder=void 0;var n=function(){function e(){this.q=new i,this._last=null}return Object.defineProperty(e.prototype,"done",{get:function(){return 0===this.q.length&&(!this._last||this._last.isLeaf)},enumerable:!1,configurable:!0}),e.prototype.resetOne=function(e){this.q.clear(),this.q.push(e),this._last=null},e.prototype.reset=function(e){this.q.clear(),e&&this.q.pushArray(e),this._last=null},e.prototype.skipSubtree=function(){this._last=null},e.prototype.next=function(){return this._last&&!this._last.isLeaf&&this.q.pushArray(this._last.children),this._last=this.q.pop(),this._last},e}();t.IteratorPreorder=n;var s=function(){function e(){this.q=new i}return Object.defineProperty(e.prototype,"done",{get:function(){return 0===this.q.length},enumerable:!1,configurable:!0}),e.prototype.reset=function(e){if(this.q.clear(),e){this.q.pushArray(e);for(var t=0;t<this.q.length;++t){var r=this.q.data[t];r.isLeaf||this.q.pushArray(r.children)}}},e.prototype.next=function(){return this.q.pop()},e}();function o(e){return e?e[0]+"/"+e[1]+"/"+e[2]:"null"}function l(e,t){if(t(e),!e.isLeaf)for(var r=0,i=e.children;r<i.length;r++){l(i[r],t)}}function a(e,t,r){var i=e.screenDepth,n=t.screenDepth;return i<n?-r:i>n?r:0}t.IteratorPostorder=s,t.lij2str=o,t.tile2str=function(e){return e?o(e.lij):"null"},t.traverseTilesPreorder=function(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)l(e[r],t);else l(e,t)},t.fallsWithinLayer=function(e,t,i){if(r.isNone(t))return!1;var n=t.fullExtent,s=e.extent;if(i){if(s[0]<n.xmin||s[1]<n.ymin||s[2]>n.xmax||s[3]>n.ymax)return!1}else if(n.xmin>s[2]||n.ymin>s[3]||n.xmax<s[0]||n.ymax<s[1])return!1;var o=e.surface.tilingScheme.levels[e.lij[0]].scale;return!(t.minScale>0&&o>1.00000001*t.minScale)&&!(t.maxScale>0&&o<.99999999*t.maxScale)},t.sortTiles=function(e,t){t.sort((function(t,r){return a(t,r,e)}))},t.compareTiles=a,t.computeUpsampleInfo=function(e,t,r){for(var i=1,n=0,s=0;e!==t;)if(i*=.5,n*=.5,s*=.5,1&e.lij[2]&&(n+=.5),0==(1&e.lij[1])&&(s+=.5),null==(e=e.parent))throw new Error("tile was not a descendant of upsampleTile");r.init(t,n,s,i)},t.hasVisibleSiblings=function(e){for(var t=0;t<e.length;t++){var r=e[t],i=r.parent;if(i)for(var n=0;n<4;n++){var s=i.children[n];if(s&&s!==r&&s.visible)return!0}}return!1},t.tilesAreRelated=function(e,t){if(!e||!t)return!1;var r=e[0]<t[0],i=r?e:t,n=r?t:e,s=n[0]-i[0];if(0===s)return!1;var o=1<<s;return Math.floor(n[1]/o)===i[1]&&Math.floor(n[2]/o)===i[2]}}));