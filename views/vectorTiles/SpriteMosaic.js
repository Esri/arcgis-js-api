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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Rect","./RectangleBinPack","../webgl/Texture"],function(t,i,e,r,h){var s=function(){function t(t,i){this._width=0,this._height=0,this._mosaicRects={},this._dirty=!1,this.pixelRatio=1,(0>=t||0>=i)&&console.error("Sprites mosaic width and height must be greater than zero!"),this._width=t,this._height=i,this._binPack=new r(t,i)}return Object.defineProperty(t.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),t.prototype.setSpriteSource=function(t){if(this._dispose(),this.pixelRatio=t.devicePixelRatio,!this._mosaicData){this._binPack=new r(this._width,this._height);var i=Math.floor(this._width),e=Math.floor(this._height);this._mosaicData=new Uint32Array(i*e)}this._sprites=t},t.prototype.getSpriteItem=function(t,i){void 0===i&&(i=!1);var e=this._mosaicRects[t];if(e)return e;if(!this._sprites||"loaded"!==this._sprites.loadStatus)return null;var r=this._sprites.getSpritePosition(t);if(!r||!r.width||!r.height)return null;var h=this._allocateImage(r.width,r.height);return h.width<=0?null:(e={rect:h,width:r.width,height:r.height,sdf:r.sdf,pixelRatio:r.pixelRatio},this._copy(h,r,i),this._mosaicRects[t]=e,e)},t.prototype.getSpriteItems=function(t){for(var i={},e=0,r=t;e<r.length;e++){var h=r[e];i[h]=this.getSpriteItem(h)}return i},t.prototype.getMosaicItemPosition=function(t,i){var e=this.getSpriteItem(t,i),r=e&&e.rect;if(!r)return null;r.width=e.width,r.height=e.height;var h=e.width,s=e.height,o=1;return{size:[e.width,e.height],tl:[(r.x+o)/this._width,(r.y+o)/this._height],br:[(r.x+o+h)/this._width,(r.y+o+s)/this._height]}},t.prototype.bind=function(t,i,e){void 0===e&&(e=0),this._texture||(this._texture=new h(t,{pixelFormat:6408,dataType:5121,width:this._width,height:this._height},new Uint8Array(this._mosaicData.buffer))),this._texture.setSamplingMode(i),t.bindTexture(this._texture,e),this._dirty&&this._texture.setData(new Uint8Array(this._mosaicData.buffer)),this._dirty=!1},t._copyBits=function(t,i,e,r,h,s,o,a,n,c,_){var u=r*i+e,p=a*s+o;if(_){p-=s;for(var d=-1;c>=d;d++,u=((d+c)%c+r)*i+e,p+=s)for(var l=-1;n>=l;l++)h[p+l]=t[u+(l+n)%n]}else for(var d=0;c>d;d++){for(var l=0;n>l;l++)h[p+l]=t[u+l];u+=i,p+=s}},t.prototype._copy=function(i,e,r){if(this._sprites&&"loaded"===this._sprites.loadStatus){var h=new Uint32Array(this._sprites.image.buffer),s=this._mosaicData;s&&h||console.error("Source or target images are uninitialized!");var o=1;t._copyBits(h,this._sprites.width,e.x,e.y,s,this._width,i.x+o,i.y+o,e.width,e.height,r),this._dirty=!0}},t.prototype._allocateImage=function(t,i){t+=2,i+=2;var r=t%4?4-t%4:0,h=i%4?4-i%4:0,s=this._binPack.allocate(t+r,i+h);return s.width<=0&&(console.warn("Out of sprite mosaic space!"),s=new e(0,0,0,0)),s},t.prototype._dispose=function(){this._mosaicData=null,this._binPack=null,this._mosaicRects={},this._dirty=!0},t}();return s});