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

define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/mat3","../../../../core/libs/gl-matrix-2/mat3f32","./RenderBucket","./decluttering/config","../webgl/TiledDisplayObject"],(function(e,t,r,a,s,i,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VectorTile=void 0;var c=function(e){function t(t,r,a,i){var n=e.call(this,t,a,i,[4096,4096])||this;return n._referenced=0,n._hasSymbolBuckets=!1,n._memoryUsedByLayerData=0,n.layerData={},n.layerCount=0,n.status="loading",n.allSymbolsFadingOut=!1,n.lastOpacityUpdate=0,n.symbols=new Map,n.isCoverage=!1,n.neededForCoverage=!1,n.decluttered=!1,n.invalidating=!1,n._referenced=1,n.styleLayers=r,n.id=t.id,n.transforms.tileUnitsToPixels=s.mat3f32.create(),n}return r.__extends(t,e),Object.defineProperty(t.prototype,"hasSymbolBuckets",{get:function(){return this._hasSymbolBuckets},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isFading",{get:function(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<n.FADE_DURATION},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isHoldingForFade",{get:function(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<n.FADE_DURATION)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"wasRequested",{get:function(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status},enumerable:!1,configurable:!0}),t.prototype.setData=function(e){this.changeDataImpl(e),this.requestRender(),this.ready(),this.invalidating=!1},t.prototype.hasData=function(){return this.layerCount>0},t.prototype.dispose=function(){t._destroyRenderBuckets(this.layerData),this.layerData={},this.layerCount=0,this._memoryUsedByLayerData=0,this.destroy()},t.prototype.release=function(){return 0==--this._referenced&&(this.dispose(),this.stage=null,!0)},t.prototype.reference=function(){++this._referenced},Object.defineProperty(t.prototype,"referenced",{get:function(){return this._referenced},enumerable:!1,configurable:!0}),t.prototype.getMemoryUsage=function(){return this._memoryUsedByLayerData/(this._referenced||1)},t.prototype.changeDataImpl=function(e){if(t._destroyRenderBuckets(this.layerData),this.layerData={},this.layerCount=0,this._memoryUsedByLayerData=0,e){var r=t._createRenderBuckets(e);for(var a in r)this.layerData[a]&&(this._memoryUsedByLayerData-=this.layerData[a].memoryUsed,this.layerData[a].destroy(),this.layerData[a]=null,this.layerCount--),this._memoryUsedByLayerData+=r[a].memoryUsed,this.layerData[a]=r[a],this.layerCount++}var s=new Map;for(var i in this._hasSymbolBuckets=!1,this.layerData){a=parseInt(i,10);var n=this.layerData[a];3===n.type&&(s.set(a,n.symbols),this._hasSymbolBuckets=!0)}this.symbols=s,this.emit("symbols-changed")},t.prototype.attachWithContext=function(e){this.stage={context:e,trashDisplayObject:function(e){e.processDetach()},untrashDisplayObject:function(){return!1}}},t.prototype.setTransform=function(t,r){e.prototype.setTransform.call(this,t,r);var s=r/(t.resolution*t.pixelRatio),i=this.size[0]/this.coordRange[0]*s,n=this.size[1]/this.coordRange[1]*s,o=t.toScreen([0,0],this.coords),c=o[0],l=o[1],y=this.transforms.tileUnitsToPixels;a.mat3.identity(y),a.mat3.translate(y,y,[c,l]),a.mat3.rotate(y,y,Math.PI*t.rotation/180),a.mat3.scale(y,y,[i,n,1])},t._destroyRenderBuckets=function(e){var t=new Set;for(var r in e){var a=e[r];t.has(a)||(a.destroy(),t.add(a))}},t._createRenderBuckets=function(e){for(var t={},r=0,a=e.buckets;r<a.length;r++){var s=a[r],n=void 0;switch(new Uint32Array(s)[0]){case 1:n=new i.FillRenderBucket(s);break;case 2:n=new i.LineRenderBucket(s);break;case 3:n=new i.SymbolRenderBucket(s);break;case 4:n=new i.CircleRenderBucket(s)}for(var o=0,c=n.layerIndices;o<c.length;o++){t[c[o]]=n}}return t},t}(o.TiledDisplayObject);t.VectorTile=c}));