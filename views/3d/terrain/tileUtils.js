// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/maybe","../../../core/PooledArray"],function(e,t,r,n){function i(e){return e[0]+"/"+e[1]+"/"+e[2]}function s(e){return i(e.lij)}function a(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)o(e[r],t);else o(e,t)}function o(e,t){if(t(e),!e.isLeaf)for(var r=0,n=e.children;r<n.length;r++){var i=n[r];o(i,t)}}function l(e,t){for(;e;e=e.parent)if(e.hasLij(t))return e;return null}function u(e,t,r){if(!t)return!1;var n=t.fullExtent,i=e.extent;if(r){if(i[0]<n.xmin||i[1]<n.ymin||i[2]>n.xmax||i[3]>n.ymax)return!1}else if(n.xmin>i[2]||n.ymin>i[3]||n.xmax<i[0]||n.ymax<i[1])return!1;var s=e.surface.tilingScheme.levels[e.lij[0]].scale;return!(t.minScale>0&&s>1.00000001*t.minScale)&&!(t.maxScale>0&&s<.99999999*t.maxScale)}function f(e,t){for(;t--;)e=e.parent;return e}function c(e){for(;e.parent;)e=e.parent;return e}function h(e,t){var r=e.lij[0]-t.lij[0]-1,n=e.lij[1]>>r,i=e.lij[2]>>r,s=0;return 1&n&&(s+=2),1&i&&(s+=1),t.children[s]}function p(e,t){t.sort(function(t,r){return y(t,r,e)})}function y(e,t,r){var n=e.screenDepth,i=t.screenDepth;return n<i?-r:n>i?r:0}function d(e,t,r){for(var n=1,i=0,s=0;e!==t;)if(n*=.5,i*=.5,s*=.5,1&e.lij[2]&&(i+=.5),0==(1&e.lij[1])&&(s+=.5),null==(e=e.parent))throw new Error("tile was not a descendant of upsampleTile");r.init(t,i,s,n)}function v(e){for(var t=0;t<e.length;t++){var r=e[t],n=r.parent;if(n)for(var i=0;i<4;i++){var s=n.children[i];if(s&&s!==r&&s.visible)return!0}}return!1}Object.defineProperty(t,"__esModule",{value:!0});var q=function(){function e(){this.q=new n,this._last=null}return Object.defineProperty(e.prototype,"done",{get:function(){return 0===this.q.length&&(!this._last||this._last.isLeaf)},enumerable:!0,configurable:!0}),e.prototype.resetOne=function(e){this.q.clear(),this.q.push(e),this._last=null},e.prototype.reset=function(e,t){if(this.q.clear(),this._eye=t,e&&(this.q.pushArray(e),r.isSome(this._eye))){var n=this._eye;this.q.sort(function(e,t){return t.distanceToSquared(n)-e.distanceToSquared(n)})}this._last=null},e.prototype.skipSubtree=function(){this._last=null},e.prototype.next=function(){if(this._last&&!this._last.isLeaf){var e=this._last.children;if(r.isSome(this._eye)){var t=this._eye;m.pushArray(e),m.sort(function(e,r){return r.distanceToSquared(t)-e.distanceToSquared(t)}),this.q.pushArray(m.data,m.length),m.clear()}else this.q.pushArray(e)}return this._last=this.q.pop(),this._last},e}();t.IteratorPreorder=q;var m=new n,_=function(){function e(){this.q=new n}return Object.defineProperty(e.prototype,"done",{get:function(){return 0===this.q.length},enumerable:!0,configurable:!0}),e.prototype.reset=function(e){if(this.q.clear(),e){this.q.pushArray(e);for(var t=0;t<this.q.length;++t){var r=this.q.data[t];r.isLeaf||this.q.pushArray(r.children)}}},e.prototype.next=function(){return this.q.pop()},e}();t.IteratorPostorder=_,t.lij2str=i,t.tile2str=s,t.traverseTilesPreorder=a,t.findParentByLIJ=l,t.fallsWithinLayer=u,t.getTileNLevelsUp=f,t.getRootTile=c,t.nextTileInAncestry=h,t.sortTiles=p,t.compareTiles=y,t.computeUpsampleInfo=d,t.hasVisibleSiblings=v});