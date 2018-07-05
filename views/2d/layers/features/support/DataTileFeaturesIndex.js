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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","@dojo/shim/Map","@dojo/shim/Set","../../../../../core/SetPool","./Tile"],function(e,t,i,s,r,o){Object.defineProperty(t,"__esModule",{value:!0});var a=[],l=new s.default,n=function(){function e(){this._tileById=new i.default,this._tilesToFeatures=new i.default,this._featureToTiles=new i.default}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,r.default.acquire()),this._tilesToFeatures.forEach(function(e,s){if(i!==s)if(o.isParentOf(i,s))e.forEach(function(e){t._link(i,e)});else if(o.isChildOf(i,s))for(var r=0,a=t.store.searchBounds(i.bounds);r<a.length;r++){var l=a[r].oid;e.has(l)&&t._link(i,l)}})}},e.prototype.clear=function(){this._tilesToFeatures.forEach(function(e){return r.default.release(e)}),this._tilesToFeatures.clear(),this._featureToTiles.forEach(function(e){return r.default.release(e)}),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,i=this.get(e.id);a.length=0,this._tilesToFeatures.get(i).forEach(function(e){var s=t._featureToTiles.get(e);s.has(i)&&1===s.size?a.push(e):t._unlink(i,e)});for(var s=0,r=a;s<r.length;s++){var o=r[s];this._unlink(i,o)}this.store.delete(a),this._tilesToFeatures.delete(i),this._tileById.delete(i.id),a.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.load=function(e,t){var i=this,s=this.get(e.id);this._tilesToFeatures.has(s)||(this._tileById.set(s.id,s),this._tilesToFeatures.set(s,r.default.acquire()));for(var o=this.store.objectIdField,n=0,u=t;n<u.length;n++){var h=u[n];l.add(h.attributes[o])}a.length=0,this._tilesToFeatures.get(s).forEach(function(e){if(!l.has(e)){var t=i._featureToTiles.get(e);t.has(s)&&1===t.size?a.push(e):i._unlink(s,e)}});for(var f=0,d=a;f<d.length;f++){var _=d[f];this._unlink(s,_)}this.store.delete(a),this.store.load(t),l.forEach(function(e){i._link(s,e)}),l.clear(),a.length=0},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,r.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(r.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=n});