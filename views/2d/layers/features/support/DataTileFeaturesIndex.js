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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/Map","@dojo/framework/shim/Set","../../../../../core/SetPool","../../../../../layers/graphics/data/DefaultSpatialIndex","./Tile"],function(e,t,i,a,s,r,o){Object.defineProperty(t,"__esModule",{value:!0});var n=[],u=new a.default,l=function(){function e(){this._tileById=new i.default,this._tilesToFeatures=new i.default,this._featureToTiles=new i.default}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,s.default.acquire()),this._tilesToFeatures.forEach(function(e,a){i!==a&&(o.isParentOf(i,a)?e.forEach(function(e){t._link(i,e)}):o.isChildOf(i,a)&&t.spatialIndex.forEachFeatureInBounds(i.bounds,function(a){e.has(a.objectId)&&t._link(i,a.objectId)}))})}},e.prototype.clear=function(){this._tilesToFeatures.forEach(function(e){return s.default.release(e)}),this._tilesToFeatures.clear(),this._featureToTiles.forEach(function(e){return s.default.release(e)}),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,i=this.get(e.id);n.length=0,this._tilesToFeatures.get(i).forEach(function(e){var a=t._featureToTiles.get(e);a.has(i)&&1===a.size?n.push(e):t._unlink(i,e)});for(var a=0,s=n;a<s.length;a++){var r=s[a];this._unlink(i,r)}this.spatialIndex.removeManyById(n),this._tilesToFeatures.delete(i),this._tileById.delete(i.id),n.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.setTileFeatures=function(e,t){var i=this,a=this.get(e.id);this._tilesToFeatures.has(a)||(this._tileById.set(a.id,a),this._tilesToFeatures.set(a,s.default.acquire()));for(var r=0,o=t;r<o.length;r++){var l=o[r];u.add(l.objectId)}n.length=0,this._tilesToFeatures.get(a).forEach(function(e){if(!u.has(e)){var t=i._featureToTiles.get(e);t.has(a)&&1===t.size?n.push(e):i._unlink(a,e)}});for(var h=0,d=n;h<d.length;h++){var f=d[h];this._unlink(a,f)}this.spatialIndex.removeManyById(n),this.spatialIndex.addMany(t),u.forEach(function(e){i._link(a,e)}),u.clear(),n.length=0},e.prototype.addOrUpdateFeatures=function(e){for(var t=this,i=new a.default,s=new r.default({geometryType:this.spatialIndex.geometryType,hasM:this.spatialIndex.hasM,hasZ:this.spatialIndex.hasZ}),o=0,n=this.deleteFeaturesById(e.map(function(e){return e.objectId}));o<n.length;o++){var u=n[o];i.add(u)}s.addMany(e),this._tileById.forEach(function(e){s.forEachFeatureInBounds(e.bounds,function(a){t._link(e,a.objectId),i.add(e)})}),this.spatialIndex.addMany(e);var l=[];return i.forEach(function(e){return l.push(e)}),l},e.prototype.deleteFeaturesById=function(e){for(var t=this,i=new a.default,r=this,o=0,n=e;o<n.length;o++){var u=n[o];!function(e){var a=r._featureToTiles.get(e);a&&(a.forEach(function(a){i.add(a),t._tilesToFeatures.get(a).delete(e)}),s.default.release(a),r._featureToTiles.delete(e))}(u)}this.spatialIndex.removeManyById(e);var l=[];return i.forEach(function(e){return l.push(e)}),l},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,s.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(s.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=l});