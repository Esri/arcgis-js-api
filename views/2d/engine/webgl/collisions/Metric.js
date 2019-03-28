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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Logger","../../../../../core/libs/gl-matrix-2/vec2f32","../definitions","./BoundingBox","../util/serializationUtils"],function(t,e,s,n,d,x,p){Object.defineProperty(e,"__esModule",{value:!0});var i=s.getLogger("esri/views/2d/engine/webgl/collisions/Metric"),o=function(){function I(t,e,s,i,o){this.id=t,this.range=e,this.boxes=null,this.minZoom=-1,this.vv=0,this.size=0,this.directionX=0,this.directionY=0,this.offsetX=0,this.offsetY=0,this.anchor=n.vec2f32.fromValues(s,i),this.baseZoom=o}return I.prototype.add=function(t){this.bounds?(this.boxes?this.boxes.push(t):(this.boxes=[this.bounds,t],this.bounds=this.bounds.clone()),this.bounds.extend(t)):this.bounds=t},I.prototype.computeIndex=function(){var t=this.bounds,e=this.anchor[0],s=this.anchor[1],i=Math.floor(e/d.COLLISION_BUCKET_SIZE),o=Math.floor(s/d.COLLISION_BUCKET_SIZE),n=0;(i>d.COLLISION_TILE_BOX_SIZE||o>d.COLLISION_TILE_BOX_SIZE)&&(i=d.COLLISION_TILE_BOX_SIZE,o=d.COLLISION_TILE_BOX_SIZE,n=1),(i<0||o<0)&&(o=i=0,n=1);var h=t.halfWidth+Math.abs(t.center[0]),r=t.halfHeight+Math.abs(t.center[1]),a=2*Math.max(h,r),u=a-e%d.COLLISION_BUCKET_SIZE,f=a-s%d.COLLISION_BUCKET_SIZE;this.xBucket=i,this.yBucket=o,this.xOverflow=Math.ceil(Math.abs(u/d.COLLISION_BUCKET_SIZE))+n,this.yOverflow=Math.ceil(Math.abs(f/d.COLLISION_BUCKET_SIZE))+n},I.prototype.findCollisionDelta=function(t){var e=this.bounds.findCollisionDelta(t.bounds),s=this.boxes&&this.boxes.length,i=t.boxes&&t.boxes.length;return Math.abs(e)>d.COLLISION_MAX_ZOOM_DELTA||!s&&!i?e:s&&i?this._boxesToBoxes(t):s?this._boxesToBox(t):this._boxToBoxes(t)},I.prototype.computeOffset=function(t){t||i.error("mapview-labeling","Unable to compute label offset. Expected an evaluator function but found "+t);var e=t(this.vv),s=isNaN(this.vv)||isNaN(e)?this.size:e;this.offsetX=this.directionX*(s/2+d.COLLISION_PLACEMENT_PADDING),this.offsetY=this.directionY*(s/2+d.COLLISION_PLACEMENT_PADDING)},I.prototype.setVV=function(t,e,s,i){this.vv=t,this.size=e,this.directionX=s,this.directionY=i},I.prototype.clone=function(){var t=new I(this.id,this.range,this.anchor[0],this.anchor[1],this.baseZoom);return t.minZoom=this.minZoom,this.bounds&&(t.bounds=this.bounds.clone()),this.boxes&&(t.boxes=this.boxes.map(function(t){return t.clone()})),t.xBucket=this.xBucket,t.yBucket=this.yBucket,t.xOverflow=this.xOverflow,t.yOverflow=this.yOverflow,t.vv=this.vv,t.size=this.size,t.directionX=this.directionX,t.directionY=this.directionY,t.offsetX=this.offsetX,t.offsetY=this.offsetY,t},I.prototype._boxToBoxes=function(t){for(var e=-1/0,s=0,i=t.boxes;s<i.length;s++){var o=i[s],n=this.bounds.findCollisionDelta(o);e=Math.max(n,e)}return e},I.prototype._boxesToBox=function(t){for(var e=this.boxes[0].findCollisionDelta(t.bounds),s=1;s<this.boxes.length;s++){var i=this.boxes[s].findCollisionDelta(t.bounds);e=Math.max(i,e)}return e},I.prototype._boxesToBoxes=function(t){for(var e=-1/0,s=0;s<this.boxes.length;s++)for(var i=this.boxes[s],o=0,n=t.boxes;o<n.length;o++){var h=n[o],r=i.findCollisionDelta(h);e=Math.max(r,e)}return e},I.prototype.serialize=function(t){return t.push(this.id),this.bounds.serialize(t),t.push(this.range.from),t.push(this.range.count),t.push(this.anchor[0]),t.push(this.anchor[1]),t.push(this.baseZoom),t.writeF32(this.vv),t.push(this.size),t.push(this.directionX),t.push(this.directionY),t.push(this.offsetX),t.push(this.offsetY),p.serializeList(t,this.boxes),t},I.deserialize=function(t){var e=t.readInt32(),s=x.default.deserialize(t),i={from:t.readInt32(),count:t.readInt32()},o=t.readInt32(),n=t.readInt32(),h=t.readInt32(),r=t.readF32(),a=t.readInt32(),u=t.readInt32(),f=t.readInt32(),d=t.readInt32(),l=t.readInt32(),c=p.deserializeList(t,x.default),b=new I(e,i,o,n,h);return b.bounds=s,b.boxes=c,b.computeIndex(),b.setVV(r,a,u,f),b.offsetX=d,b.offsetY=l,b},I}();e.default=o});