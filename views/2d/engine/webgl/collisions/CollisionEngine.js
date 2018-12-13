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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","@dojo/framework/shim/array","@dojo/framework/shim/Map","../definitions","./CollisionBucket","./LayerCollisionInfo","../util/iterator","../../../../3d/support/mathUtils"],function(e,t,y,i,a,o,d,r,l){Object.defineProperty(t,"__esModule",{value:!0});var B=a.TILE_SIZE/a.COLLISION_BUCKET_SIZE,I=B,n=function(){function e(e){this._layers=new i.default,this._collisionBuckets=new i.default,this._tilingScheme=e}return Object.defineProperty(e.prototype,"collisionInfos",{get:function(){var t=[];return r.forEachIter(this._layers.values(),function(e){return t.push(e)}),t},enumerable:!0,configurable:!0}),e.prototype.registerLayer=function(e,t){if(e&&!this._layers.has(e.uid)){var i=d.default.create(e,t,this.collisionInfos,this._tilingScheme);this._layers.set(e.uid,i),this._collisionBuckets.forEach(function(e){return e.onRegisterLayer(i.index)})}},e.prototype.unregisterLayer=function(e){var o=this;if(e&&this._layers.has(e.uid)){var r=this._layers.get(e.uid);d.default.delete(r.index,this.collisionInfos),this._layers.delete(e.uid),this._collisionBuckets.forEach(function(e,t){var i=e.getTile(r.index);i&&(i.dirty=!1,e.onUnregisterLayer(r.index),e.canDelete()&&o._collisionBuckets.delete(t))})}},e.prototype.addTile=function(e,t){var i=t.key.id;this._layers.has(e)&&(this._collisionBuckets.has(i)||this._collisionBuckets.set(i,new o.default(t.key,this._layers.size)),this._collisionBuckets.get(i).getTile(this._getIndex(e)).reference=t)},e.prototype.removeTile=function(e,t){this._layers.has(e)&&this._collisionBuckets.has(t)&&(this._collisionBuckets.get(t).getTile(this._getIndex(e)).reference=null)},e.prototype.run=function(e,t){for(var i=y.from(this._collisionBuckets.values()).filter(function(e){return e.key.level===t}).sort(function(e,t){return e.key.compareRowMajor(t.key)}),o=this._checkRotation(e.rotation),r=0,n=i;r<n.length;r++){var s=n[r];o=o||s.isDirty;for(var a=0;a<this._layers.size;a++){var l=d.default.find(a,this.collisionInfos);s.computeNeighbors(this._collisionBuckets),s.reset(e,o,l)}}for(var u=0;u<this._layers.size;u++){l=d.default.find(u,this.collisionInfos);for(var c=0,f=i;c<f.length;c++){s=f[c];this._run(s,l,t)}}for(var h=0,_=i;h<_.length;h++){(s=_[h]).ready()}},e.prototype._run=function(e,t,i){var o=e.getReference(t.index);o&&o.isDirty&&o.hasData&&this._runVisibility(e,o,t,i)},e.prototype._runVisibility=function(e,t,i,o){for(var r=0,n=t.displayObjects;r<n.length;r++){for(var s=n[r],a=0,l=0;l<s.metrics.length;l++){var u=s.metrics[l],c=this._computeLabelVisibility(s,u,i.index,e,t,u.baseZoom,o);a=Math.max(c,a)}for(var f=0,h=s.metrics;f<h.length;f++){u=h[f];t.setVisibilityRange(s.id,u.range.from,u.range.count,a),u.minZoom=a}}},e.prototype._computeLabelVisibility=function(e,t,i,o,r,n,s){for(var a=n,l=t.xBucket,u=t.yBucket,c=t.xOverflow,f=t.yOverflow,h=l-c,_=l+c+1,y=u+f+1,d=u-f;d<y;d++)for(var p=h;p<_;p++)if(!(p<-B||d<-I||B<p||I<d))for(var g=0;g<=i;g++){var v=this._getRelativeSubBucket(g,o,r,p,d);if(v)for(var m=0,k=v;m<k.length;m++){var b=k[m];if(b.id!==e.id){var x=this._compareLabels(t,b,a,s);a=Math.max(x,a)}}}return a},e.prototype._compareLabels=function(e,t,i,o){var r=10*(o+a.COLLISION_MAX_ZOOM_DELTA);if(-1===t.minZoom||t.minZoom>r||t.minZoom>Math.floor(10*o))return i;var n=e.findCollisionDelta(t),s=l.clamp(Math.floor(10*(n+o)),0,255);return t.minZoom>=s?i:Math.max(i,s)},e.prototype._getNeighboringTile=function(e,t,i,o,r){var n=3*(1+r)+(1+o),s=t.neighbors[n];return s&&s.getTile(e)},e.prototype._getRelativeSubBucket=function(e,t,i,o,r){var n=l.sign(Math.floor(o/4)),s=l.sign(Math.floor(r/4)),a=this._getNeighboringTile(e,t,i,n,s);return a&&a.reference&&a.index&&a.reference.hasData?a.index[r-4*s][o-4*n]:null},e.prototype._checkRotation=function(e){if(!this._lastRotation)return this._lastRotation=e,!1;var t=e!==this._lastRotation;return this._lastRotation=e,t},e.prototype._getIndex=function(e){return this._layers.get(e).index},e}();t.default=n});