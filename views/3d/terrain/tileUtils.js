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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/PooledArray"],function(t,r,e){function n(t){return t[0]+"/"+t[1]+"/"+t[2]}function i(t){return n(t.lij)}function s(t,r){if(Array.isArray(t))for(var e=0;e<t.length;e++)o(t[e],r);else o(t,r)}function o(t,r){r(t);for(var e=0;e<4;e++){var n=t.children[e];n&&o(n,r)}}function l(t,r){if(Array.isArray(t))for(var e=0;e<t.length;e++)a(t[e],r);else a(t,r)}function a(t,r){for(var e=0;e<4;e++){var n=t.children[e];n&&a(n,r)}r(t)}function u(t,r){for(;t;t=t.parent)if(t.hasLij(r))return t;return null}function h(t,r,e){if(!r)return!1;var n=r.fullExtent,i=t.extent;if(e){if(i[0]<n.xmin||i[1]<n.ymin||i[2]>n.xmax||i[3]>n.ymax)return!1}else if(n.xmin>i[2]||n.ymin>i[3]||n.xmax<i[0]||n.ymax<i[1])return!1;var s=t.surface.tilingScheme.levels[t.lij[0]].scale;return!(r.minScale>0&&s>1.00000001*r.minScale)&&!(r.maxScale>0&&s<.99999999*r.maxScale)}function f(t,r){var e=t.extent;return r[0]>=e[0]&&r[1]>=e[1]&&r[0]<=e[2]&&r[1]<=e[3]}function c(t,r){for(;r--;)t=t.parent;return t}function p(t,r){var e=t.lij[0]-r.lij[0]-1,n=t.lij[1]>>e,i=t.lij[2]>>e,s=0;return 1&n&&(s+=2),1&i&&(s+=1),r.children[s]}function v(t,r){r.sort(function(r,e){return d(r,e,t)})}function d(t,r,e){var n=t.screenDepth,i=r.screenDepth;return n<i?-e:n>i?e:0}function y(t,r,e){for(var n=1,i=0,s=0;t!==r;)if(n*=.5,i*=.5,s*=.5,1&t.lij[2]&&(i+=.5),0==(1&t.lij[1])&&(s+=.5),null==(t=t.parent))throw new Error("tile was not a descendant of upsampleTile");e.init(r,i,s,n)}function q(t){for(var r=0;r<t.length;r++){var e=t[r],n=e.parent;if(n)for(var i=0;i<4;i++){var s=n.children[i];if(s&&s!==e&&s.visible)return!0}}return!1}Object.defineProperty(r,"__esModule",{value:!0});var m=function(){function t(){this.q=new e,this._last=null,this.done=!0}return t.prototype.resetOne=function(t){this.q.clear(),this.q.push(t),this._last=null,this.done=!1},t.prototype.reset=function(t){this.q.clear(),t&&this.q.pushArray(t),this._last=null,this.done=0===this.q.length},t.prototype.skipSubtree=function(){this._last=null,0===this.q.length&&(this.done=!0)},t.prototype.next=function(){if(this.done)return null;if(this._last){var t=this._last.children;if(t[0])for(var r=3;r>=0;r--){var e=t[r];e&&this.q.push(e)}}return this._last=this.q.pop(),0!==this.q.length||this._last.children[0]||(this.done=!0),this._last},t}();r.IteratorPreorder=m;var x=function(){function t(){this.q=new e,this.done=!0}return t.prototype.reset=function(t){if(this.q.clear(),t){this.q.pushArray(t);for(var r=0;r<this.q.length;++r)for(var e=this.q.data[r],n=0;n<4;n++){var i=e.children[n];i&&this.q.push(i)}}this.done=0===this.q.length},t.prototype.next=function(){var t=this.q.pop();return this.done=0===this.q.length,t},t}();r.IteratorPostorder=x,r.lij2str=n,r.tile2str=i,r.traverseTilesPreorder=s,r.traverseTilesPostorder=l,r.findParentByLIJ=u,r.fallsWithinLayer=h,r.isPosWithinTile=f,r.getTileNLevelsUp=c,r.nextTileInAncestry=p,r.sortTiles=v,r.compareTiles=d,r.computeUpsampleInfo=y,r.hasVisibleSiblings=q});