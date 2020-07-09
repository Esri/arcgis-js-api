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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../../core/SetPool","../../../../../layers/graphics/data/FeatureStore","./Tile"],(function(e,t,r,i,a){Object.defineProperty(t,"__esModule",{value:!0});var s=[],o=new Set,n=function(){function e(){this._tileById=new Map,this._tilesToFeatures=new Map,this._featureToTiles=new Map}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,r.default.acquire()),this._tilesToFeatures.forEach((function(e,r){i!==r&&(a.isParentOf(i,r)?e.forEach((function(e){t._link(i,e)})):a.isChildOf(i,r)&&t.featureStore.forEachInBounds(i.bounds,(function(r){e.has(r.objectId)&&t._link(i,r.objectId)})))}))}},e.prototype.clear=function(){this._tilesToFeatures.forEach((function(e){return r.default.release(e)})),this._tilesToFeatures.clear(),this._featureToTiles.forEach((function(e){return r.default.release(e)})),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,r=this.get(e.id);s.length=0,this._tilesToFeatures.get(r).forEach((function(e){var i=t._featureToTiles.get(e);i.has(r)&&1===i.size?s.push(e):t._unlink(r,e)}));for(var i=0,a=s;i<a.length;i++){var o=a[i];this._unlink(r,o)}this.featureStore.removeManyById(s),this._tilesToFeatures.delete(r),this._tileById.delete(r.id),s.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.setTileFeatures=function(e,t){var i=this,a=this.get(e.id);this._tilesToFeatures.has(a)||(this._tileById.set(a.id,a),this._tilesToFeatures.set(a,r.default.acquire()));for(var n=0,u=t;n<u.length;n++){var h=u[n];o.add(h.objectId)}s.length=0,this._tilesToFeatures.get(a).forEach((function(e){if(!o.has(e)){var t=i._featureToTiles.get(e);t.has(a)&&1===t.size?s.push(e):i._unlink(a,e)}}));for(var l=0,f=s;l<f.length;l++){var d=f[l];this._unlink(a,d)}this.featureStore.removeManyById(s),this.featureStore.addMany(t),o.forEach((function(e){i._link(a,e)})),o.clear(),s.length=0},e.prototype.addOrUpdateFeatures=function(e){for(var t=this,r=new Set,a=new i.default({geometryType:this.featureStore.geometryType,hasM:this.featureStore.hasM,hasZ:this.featureStore.hasZ}),s=0,o=this.deleteFeaturesById(e.map((function(e){return e.objectId})));s<o.length;s++){var n=o[s];r.add(n)}a.addMany(e),this._tileById.forEach((function(e){a.forEachInBounds(e.bounds,(function(i){t._link(e,i.objectId),r.add(e)}))})),this.featureStore.addMany(e);var u=[];return r.forEach((function(e){return u.push(e)})),u},e.prototype.deleteFeaturesById=function(e){for(var t=this,i=new Set,a=function(e){var a=s._featureToTiles.get(e);a&&(a.forEach((function(r){i.add(r),t._tilesToFeatures.get(r).delete(e)})),r.default.release(a),s._featureToTiles.delete(e))},s=this,o=0,n=e;o<n.length;o++){a(n[o])}this.featureStore.removeManyById(e);var u=[];return i.forEach((function(e){return u.push(e)})),u},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,r.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(r.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=n}));