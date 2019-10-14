// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/Logger","../../../../../core/libs/gl-matrix-2/vec2f32","../definitions","./BoundingBox","../util/serializationUtils"],function(t,s,e,n,d,x,p){Object.defineProperty(s,"__esModule",{value:!0});var o=e.getLogger("esri/views/2d/engine/webgl/collisions/Metric"),i=function(){function I(t,s,e,i,o){this.id=t,this.range=s,this.boxes=null,this.minZoom=-1,this.size=0,this.directionX=0,this.directionY=0,this.offsetX=0,this.offsetY=0,this.anchor=n.vec2f32.fromValues(e,i),this.baseZoom=o}return I.prototype.add=function(t){this.bounds?(this.boxes?this.boxes.push(t):(this.boxes=[this.bounds,t],this.bounds=this.bounds.clone()),this.bounds.extend(t)):this.bounds=t},I.prototype.computeIndex=function(){var t=this.bounds,s=this.anchor[0],e=this.anchor[1],i=Math.floor(s/d.COLLISION_BUCKET_SIZE),o=Math.floor(e/d.COLLISION_BUCKET_SIZE),n=0;(i>d.COLLISION_TILE_BOX_SIZE||o>d.COLLISION_TILE_BOX_SIZE)&&(i=d.COLLISION_TILE_BOX_SIZE,o=d.COLLISION_TILE_BOX_SIZE,n=1),(i<0||o<0)&&(o=i=0,n=1);var h=t.halfWidth+Math.abs(t.center[0]),r=t.halfHeight+Math.abs(t.center[1]),a=2*Math.max(h,r),u=a-s%d.COLLISION_BUCKET_SIZE,f=a-e%d.COLLISION_BUCKET_SIZE;this.xBucket=i,this.yBucket=o,this.xOverflow=Math.ceil(Math.abs(u/d.COLLISION_BUCKET_SIZE))+n,this.yOverflow=Math.ceil(Math.abs(f/d.COLLISION_BUCKET_SIZE))+n},I.prototype.findCollisionDelta=function(t){var s=this.bounds.findCollisionDelta(t.bounds),e=this.boxes&&this.boxes.length,i=t.boxes&&t.boxes.length;return Math.abs(s)>d.COLLISION_MAX_ZOOM_DELTA||!e&&!i?s:e&&i?this._boxesToBoxes(t):e?this._boxesToBox(t):this._boxToBoxes(t)},I.prototype.computeOffset=function(t,s){s||o.error("mapview-labeling","Unable to compute label offset. Expected an evaluator function but found "+s);var e=this.size;if(this.hasVV){var i=s(t);e=isNaN(i)||null==i||i===1/0?this.size:i}this.offsetX=this.directionX*(e/2+d.COLLISION_PLACEMENT_PADDING),this.offsetY=this.directionY*(e/2+d.COLLISION_PLACEMENT_PADDING)},I.prototype.setVV=function(t,s,e){this.hasVV=!0,this.size=t,this.directionX=s,this.directionY=e},I.prototype.clone=function(){var t=new I(this.id,this.range,this.anchor[0],this.anchor[1],this.baseZoom);return t.minZoom=this.minZoom,this.bounds&&(t.bounds=this.bounds.clone()),this.boxes&&(t.boxes=this.boxes.map(function(t){return t.clone()})),t.xBucket=this.xBucket,t.yBucket=this.yBucket,t.xOverflow=this.xOverflow,t.yOverflow=this.yOverflow,t.hasVV=this.hasVV,t.size=this.size,t.directionX=this.directionX,t.directionY=this.directionY,t.offsetX=this.offsetX,t.offsetY=this.offsetY,t},I.prototype._boxToBoxes=function(t){for(var s=-1/0,e=0,i=t.boxes;e<i.length;e++){var o=i[e],n=this.bounds.findCollisionDelta(o);s=Math.max(n,s)}return s},I.prototype._boxesToBox=function(t){for(var s=this.boxes[0].findCollisionDelta(t.bounds),e=1;e<this.boxes.length;e++){var i=this.boxes[e].findCollisionDelta(t.bounds);s=Math.max(i,s)}return s},I.prototype._boxesToBoxes=function(t){for(var s=-1/0,e=0;e<this.boxes.length;e++)for(var i=this.boxes[e],o=0,n=t.boxes;o<n.length;o++){var h=n[o],r=i.findCollisionDelta(h);s=Math.max(r,s)}return s},I.prototype.serialize=function(t){return t.push(this.id),this.bounds.serialize(t),t.push(this.range.from),t.push(this.range.count),t.push(this.anchor[0]),t.push(this.anchor[1]),t.push(this.baseZoom),t.push(this.hasVV?1:0),t.push(this.size),t.push(this.directionX),t.push(this.directionY),t.push(this.offsetX),t.push(this.offsetY),p.serializeList(t,this.boxes),t},I.deserialize=function(t){var s=t.readInt32(),e=x.default.deserialize(t),i={from:t.readInt32(),count:t.readInt32()},o=t.readInt32(),n=t.readInt32(),h=t.readInt32(),r=t.readInt32(),a=t.readInt32(),u=t.readInt32(),f=t.readInt32(),d=t.readInt32(),l=t.readInt32(),c=p.deserializeList(t,x.default),b=new I(s,i,o,n,h);return b.bounds=e,b.boxes=c,b.computeIndex(),r&&b.setVV(a,u,f),b.offsetX=d,b.offsetY=l,b},I}();s.default=i});