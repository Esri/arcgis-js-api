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

define(["require","exports","dojo/promise/all","dojo/Deferred","./Rect","../webgl/Texture","./RectangleBinPack"],function(t,e,i,r,h,s,a){var n=function(){function t(t,e,i){this.width=0,this.height=0,this._dirty=!1,this._glyphIndex={},this._pixelRatio=1,this._rangePromises={},(0>=t||0>=e)&&console.error("Glyph mosaic width and height must be greater than zero!"),this.width=t,this.height=e,this._glyphSource=i,this._binPack=new a(t,e),this._glyphData=new Uint8Array(t*e)}return t.prototype.getGlyphItems=function(t,e,s){for(var a=this,n=[],o=this._glyphSource,d=new Set,l=1/256,g=0,p=s;g<p.length;g++){var v=p[g],c=Math.floor(v*l);d.add(c)}var _=[];return d.forEach(function(t){if(256>=t){var i=new r;_.push(i.promise);var h=e+t,s=a._rangePromises[h];s?s.push(i):(a._rangePromises[h]=[i],o.getRange(e,t).then(function(){var t=a._rangePromises[h];delete a._rangePromises[h];for(var e=0,i=t;e<i.length;e++){var r=i[e];r.resolve()}}))}}),i(_).then(function(i){var r=a._glyphIndex[e];r||(r={},a._glyphIndex[e]=r);for(var d=0,l=s;d<l.length;d++){var g=l[d],p=r[g];if(p)p.tileIDs.add(t),n[g]={rect:p.rect,metrics:p.metrics};else{var v=o.getGlyph(e,g);if(v&&v.metrics){var c=v.metrics,_=void 0;if(0===c.width)_=new h(0,0,0,0);else{var f=3,y=c.width+2*f,u=c.height+2*f,w=y%4?4-y%4:0,m=u%4?4-u%4:0;_=a._binPack.allocate(y+w,u+m),_.width<=0&&(_=new h(0,0,0,0));var x=v.bitmap,D=void 0,I=void 0;if(x)for(var P=0;u>P;P++){D=y*P,I=a.width*(_.y+P)+_.x;for(var b=0;y>b;b++)a._glyphData[I+b]=x[D+b]}}var R=new Set;R.add(t),r[g]={rect:_,metrics:c,tileIDs:R},n[g]={rect:_,metrics:c},a._dirty=!0}}}return n})},t.prototype.removeGlyphs=function(t){for(var e in this._glyphIndex){var i=this._glyphIndex[e];if(i){var r=void 0;for(var h in i)if(r=i[h],r.tileIDs["delete"](t),0===r.tileIDs.size){for(var s=r.rect,a=void 0,n=void 0,o=0;o<s.height;o++)for(a=this.width*(s.y+o)+s.x,n=0;n<s.width;n++)this._glyphData[a+n]=0;delete i[h],this._dirty=!0}}}},t.prototype.bind=function(t,e,i){void 0===i&&(i=0),this._texture||(this._texture=new s(t,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height))),this._texture.setSamplingMode(e),t.bindTexture(this._texture,i),this._dirty&&this._texture.updateData(0,0,0,this.width*this._pixelRatio,this.height*this._pixelRatio,this._glyphData),this._dirty=!1},t}();return n});