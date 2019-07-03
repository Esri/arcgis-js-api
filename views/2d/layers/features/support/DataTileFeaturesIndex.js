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

define(["require","exports","@dojo/framework/shim/Map","@dojo/framework/shim/Set","../../../../../core/SetPool","../../../../../layers/graphics/data/FeatureStore","./Tile"],function(e,t,r,i,a,o,s){Object.defineProperty(t,"__esModule",{value:!0});var n=[],u=new i.default,l=function(){function e(){this._tileById=new r.default,this._tilesToFeatures=new r.default,this._featureToTiles=new r.default}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var r=e;this._tileById.set(r.id,r),this._tilesToFeatures.set(r,a.default.acquire()),this._tilesToFeatures.forEach(function(e,i){r!==i&&(s.isParentOf(r,i)?e.forEach(function(e){t._link(r,e)}):s.isChildOf(r,i)&&t.featureStore.forEachInBounds(r.bounds,function(i){e.has(i.objectId)&&t._link(r,i.objectId)}))})}},e.prototype.clear=function(){this._tilesToFeatures.forEach(function(e){return a.default.release(e)}),this._tilesToFeatures.clear(),this._featureToTiles.forEach(function(e){return a.default.release(e)}),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,r=this.get(e.id);n.length=0,this._tilesToFeatures.get(r).forEach(function(e){var i=t._featureToTiles.get(e);i.has(r)&&1===i.size?n.push(e):t._unlink(r,e)});for(var i=0,a=n;i<a.length;i++){var o=a[i];this._unlink(r,o)}this.featureStore.removeManyById(n),this._tilesToFeatures.delete(r),this._tileById.delete(r.id),n.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.setTileFeatures=function(e,t){var r=this,i=this.get(e.id);this._tilesToFeatures.has(i)||(this._tileById.set(i.id,i),this._tilesToFeatures.set(i,a.default.acquire()));for(var o=0,s=t;o<s.length;o++){var l=s[o];u.add(l.objectId)}n.length=0,this._tilesToFeatures.get(i).forEach(function(e){if(!u.has(e)){var t=r._featureToTiles.get(e);t.has(i)&&1===t.size?n.push(e):r._unlink(i,e)}});for(var f=0,h=n;f<h.length;f++){var d=h[f];this._unlink(i,d)}this.featureStore.removeManyById(n),this.featureStore.addMany(t),u.forEach(function(e){r._link(i,e)}),u.clear(),n.length=0},e.prototype.addOrUpdateFeatures=function(e){for(var t=this,r=new i.default,a=new o.default({geometryType:this.featureStore.geometryType,hasM:this.featureStore.hasM,hasZ:this.featureStore.hasZ},null),s=0,n=this.deleteFeaturesById(e.map(function(e){return e.objectId}));s<n.length;s++){var u=n[s];r.add(u)}a.addMany(e),this._tileById.forEach(function(e){a.forEachInBounds(e.bounds,function(i){t._link(e,i.objectId),r.add(e)})}),this.featureStore.addMany(e);var l=[];return r.forEach(function(e){return l.push(e)}),l},e.prototype.deleteFeaturesById=function(e){for(var t=this,r=new i.default,o=this,s=0,n=e;s<n.length;s++){var u=n[s];!function(e){var i=o._featureToTiles.get(e);i&&(i.forEach(function(i){r.add(i),t._tilesToFeatures.get(i).delete(e)}),a.default.release(i),o._featureToTiles.delete(e))}(u)}this.featureStore.removeManyById(e);var l=[];return r.forEach(function(e){return l.push(e)}),l},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,a.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(a.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=l});