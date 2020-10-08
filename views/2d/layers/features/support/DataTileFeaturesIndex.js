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

define(["require","exports","../../../../../core/SetPool","../../../../../layers/graphics/data/FeatureStore","./Tile"],(function(e,t,r,i,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=[],o=new Set,n=function(){function e(){this._tileById=new Map,this._tilesToFeatures=new Map,this._featureToTiles=new Map}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,r.default.acquire()),this._tilesToFeatures.forEach((function(e,r){i!==r&&(s.isParentOf(i,r)?e.forEach((function(e){t._link(i,e)})):s.isChildOf(i,r)&&t.featureStore.forEachInBounds(i.bounds,(function(r){e.has(r.objectId)&&t._link(i,r.objectId)})))}))}},e.prototype.clear=function(){this._tilesToFeatures.forEach((function(e){return r.default.release(e)})),this._tilesToFeatures.clear(),this._featureToTiles.forEach((function(e){return r.default.release(e)})),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,r=this.get(e.id);a.length=0,this._tilesToFeatures.get(r).forEach((function(e){var i=t._featureToTiles.get(e);i.has(r)&&1===i.size?a.push(e):t._unlink(r,e)}));for(var i=0,s=a;i<s.length;i++){var o=s[i];this._unlink(r,o)}this.featureStore.removeManyById(a),this._tilesToFeatures.delete(r),this._tileById.delete(r.id),a.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.setTileFeatures=function(e,t){var i=this,s=this.get(e.id);this._tilesToFeatures.has(s)||(this._tileById.set(s.id,s),this._tilesToFeatures.set(s,r.default.acquire()));for(var n=0,u=t;n<u.length;n++){var h=u[n];o.add(h.objectId)}a.length=0,this._tilesToFeatures.get(s).forEach((function(e){if(!o.has(e)){var t=i._featureToTiles.get(e);t.has(s)&&1===t.size?a.push(e):i._unlink(s,e)}}));for(var l=0,f=a;l<f.length;l++){var d=f[l];this._unlink(s,d)}this.featureStore.removeManyById(a),this.featureStore.addMany(t),o.forEach((function(e){i._link(s,e)})),o.clear(),a.length=0},e.prototype.addOrUpdateFeatures=function(e){for(var t=this,r=new Set,s=new i.default({geometryType:this.featureStore.geometryType,hasM:this.featureStore.hasM,hasZ:this.featureStore.hasZ}),a=0,o=this.deleteFeaturesById(e.map((function(e){return e.objectId})));a<o.length;a++){var n=o[a];r.add(n)}s.addMany(e),this._tileById.forEach((function(e){s.forEachInBounds(e.bounds,(function(i){t._link(e,i.objectId),r.add(e)}))})),this.featureStore.addMany(e);var u=[];return r.forEach((function(e){return u.push(e)})),u},e.prototype.deleteFeaturesById=function(e){for(var t=this,i=new Set,s=function(e){var s=a._featureToTiles.get(e);s&&(s.forEach((function(r){i.add(r),t._tilesToFeatures.get(r).delete(e)})),r.default.release(s),a._featureToTiles.delete(e))},a=this,o=0,n=e;o<n.length;o++){s(n[o])}this.featureStore.removeManyById(e);var u=[];return i.forEach((function(e){return u.push(e)})),u},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,r.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(r.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=n}));