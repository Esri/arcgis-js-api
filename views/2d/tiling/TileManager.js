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

define(["require","exports","../../../core/maybe","./TileCoverage","./TileKey"],(function(e,t,i,r,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TileManager=void 0;var o=function(){function e(e){this._tiles=new Map,this.buffer=0,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,this.buffer=e.buffer}return e.prototype.destroy=function(){},e.prototype.clear=function(){var e=this;this._tiles.forEach((function(t){return e._releaseTile(t)}))},e.prototype.tileKeys=function(){var e=[];return this._tiles.forEach((function(t,i){return e.push(i)})),e},e.prototype.update=function(e){for(var t=this,i=this.tileInfoView.getTileCoverage(e.state,this.buffer,"closest"),o=i.spans,a=i.lodInfo,s=a.level,n=[],d=[],h=new Set,u=new Set,c=0,f=o;c<f.length;c++)for(var p=f[c],y=p.row,v=p.colFrom,_=p.colTo,T=v;T<=_;T++){var g=l.getId(s,y,a.normalizeCol(T),a.getWorldForColumn(T)),b=this._getOrAcquireTile(n,g);h.add(g),b.isReady?b.visible=!0:u.add(b.key)}return u.forEach((function(e){return t._addPlaceholders(h,e)})),this._tiles.forEach((function(e){h.has(e.key.id)||(d.push(e.key.id),t._releaseTile(e))})),r.pool.release(i),{hasMissingTiles:u.size>0,added:n,removed:d}},e.prototype._getOrAcquireTile=function(e,t){if(!this._tiles.has(t)){var i=this.acquireTile(new l(t));e.push(t),this._tiles.set(t,i),i.visible=!1}return this._tiles.get(t)},e.prototype._getTile=function(e){return this._tiles.get(e)},e.prototype._releaseTile=function(e){this._tiles.delete(e.key.id),this.releaseTile(e)},e.prototype._addPlaceholders=function(e,t){var i=this._addPlaceholderChildren(e,t);Math.abs(1-i)<1e-6||(this._addPlaceholderParent(e,t)||(this._getTile(t.id).visible=!0))},e.prototype._addPlaceholderChildren=function(e,t){var i=this,r=0;return this._tiles.forEach((function(l){r+=i._addPlaceholderChild(e,l,t)})),r},e.prototype._addPlaceholderChild=function(e,t,i){return t.key.level<=i.level||!t.hasData||!i.contains(t.key)?0:(t.visible=!0,e.add(t.key.id),1/(1<<2*(t.key.level-i.level)))},e.prototype._addPlaceholderParent=function(e,t){for(var r=t.getParentKey(),l=0,o=null;i.isSome(r);){if(e.has(r.id))return!0;var a=this._getTile(r.id);if(null==a?void 0:a.isReady)return a.visible=!0,e.add(a.key.id),!0;(null==a?void 0:a.hasData)&&a.patchCount>l&&(l=a.patchCount,o=a),r=r.getParentKey()}return!!o&&(o.visible=!0,e.add(o.key.id),!0)},e}();t.TileManager=o}));