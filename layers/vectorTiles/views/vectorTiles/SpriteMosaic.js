// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","./Rect","./RectangleBinPack","../webgl/Texture"],function(t,i,e,h,r){var s=function(){function t(t,i){this._width=0,this._height=0,this._mosaicRects={},this._dirty=!1,this.pixelRatio=1,(0>=t||0>=i)&&console.error("Sprites mosaic width and height must be greater than zero!"),this._width=t,this._height=i,this._binPack=new h(t,i)}return Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),t.prototype.setSpriteSource=function(t){if(this._dispose(),this.pixelRatio=t.devicePixelRatio,!this._mosaicData){this._binPack=new h(this._width,this._height);var i=Math.floor(this._width),e=Math.floor(this._height);this._mosaicData=new Uint32Array(i*e)}this._sprites=t},t.prototype.getSpriteItem=function(t,i){void 0===i&&(i=!1);var e=this._mosaicRects[t];if(e)return e;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;var h=this._sprites.getSpritePosition(t);if(!h||!h.width||!h.height)return null;var r=this._allocateImage(h.width,h.height);return r.width<=0?null:(e={rect:r,width:h.width,height:h.height,sdf:h.sdf,pixelRatio:h.pixelRatio},this._copy(r,h,i),this._mosaicRects[t]=e,e)},t.prototype.getSpriteItems=function(t){for(var i={},e=0,h=t;e<h.length;e++){var r=h[e];i[r]=this.getSpriteItem(r)}return i},t.prototype.getMosaicItemPosition=function(t,i){var e=this.getSpriteItem(t,i),h=e&&e.rect;if(!h)return null;h.width=e.width,h.height=e.height;var r=e.width,s=e.height,o=1;return{size:[e.width,e.height],tl:[(h.x+o)/this._width,(h.y+o)/this._height],br:[(h.x+o+r)/this._width,(h.y+o+s)/this._height]}},t.prototype.bind=function(t,i,e){void 0===e&&(e=0),this._texture||(this._texture=new r(t,{pixelFormat:6408,dataType:5121,width:this._width,height:this._height},new Uint8Array(this._mosaicData.buffer))),this._texture.setSamplingMode(i),t.bindTexture(this._texture,e),this._dirty&&this._texture.updateData(0,0,0,this._width,this._height,new Uint8Array(this._mosaicData.buffer)),this._dirty=!1},t._copyBits=function(t,i,e,h,r,s,o,a,n,_){for(var c=h*i+e,u=a*s+o,p=0;_>p;p++){for(var d=0;n>d;d++)r[u+d]=t[c+d];c+=i,u+=s}},t.prototype._copy=function(i,e,h){if(this._sprites&&"loaded"===this._sprites.loadStatus){var r=new Uint32Array(this._sprites.image.buffer),s=this._mosaicData;s&&r||console.error("Source or target images are uninitialized!");var o=1;t._copyBits(r,this._sprites.width,e.x,e.y,s,this._width,i.x+o,i.y+o,e.width,e.height),this._dirty=!0}},t.prototype._allocateImage=function(t,i){t+=2,i+=2;var h=t%4?4-t%4:0,r=i%4?4-i%4:0,s=this._binPack.allocate(t+h,i+r);return s.width<=0&&(console.warn("Out of sprite mosaic space!"),s=new e(0,0,0,0)),s},t.prototype._dispose=function(){this._mosaicData=null,this._binPack=null,this._mosaicRects={},this._dirty=!0},t}();return s});