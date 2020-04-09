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

define(["require","exports","../../../core/libs/gl-matrix-2/vec2"],(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t,i){this.maxSize=e,this.tileInfoView=t,this.removedFunc=i,this._tilePerId=new Map,this._tileKeysPerLevel=[]}return e.prototype.has=function(e){return this._tilePerId.has(e)},e.prototype.get=function(e){return this._tilePerId.get(e)},e.prototype.pop=function(e){var t=this._tilePerId.get(e);if(!t)return null;var i=t.key.level,r=this._tileKeysPerLevel[i];n(this._tilePerId,e);for(var s=0;s<r.length;s++)if(r[s].id===e){r.splice(s,1);break}return t.visible=!0,t},e.prototype.add=function(e){e.visible=!1;var t=e.key,i=t.id;if(!this._tilePerId.has(i)){this._tilePerId.set(i,e);var r=t.level;this._tileKeysPerLevel[r]||(this._tileKeysPerLevel[r]=[]),this._tileKeysPerLevel[r].push(t)}},e.prototype.prune=function(e,t,i){var r=this._tilePerId.size;if(!(r<=this.maxSize)){for(var n=this._tileKeysPerLevel.length-1;r>this.maxSize&&n>=0;)n!==e&&(r=this._pruneAroundCenterTile(r,t,i,n)),n--;r>this.maxSize&&(r=this._pruneAroundCenterTile(r,t,i,e))}},e.prototype._pruneAroundCenterTile=function(e,t,r,n){var s=this._tileKeysPerLevel[n];if(!s||0===s.length)return e;var l=this.tileInfoView.tileInfo,o=l.size,h=l.origin,u=r*o[0],v=r*o[1],a=[0,0],d=[0,0];for(s.sort((function(e,r){return a[0]=h.x+u*(e.col+.5),a[1]=h.y-v*(e.row+.5),d[0]=h.x+u*(r.col+.5),d[1]=h.y-v*(r.row+.5),i.vec2.squaredDistance(a,t)-i.vec2.squaredDistance(d,t)}));s.length>0;){var f=s.pop();if(this._removeTile(f.id),--e===this.maxSize)break}return e},e.prototype._removeTile=function(e){var t=this._tilePerId.get(e);this.removedFunc&&this.removedFunc(t),n(this._tilePerId,e)},e}();function n(e,t){e.delete(t)}t.default=r}));