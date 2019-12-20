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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/has","../../../../core/promiseUtils","../../../webgl","./Rect","./RectangleBinPack"],function(t,e,b,a,h,u,d){var P;h.enums.PixelFormat,h.enums.PixelType;return b("stable-symbol-rendering")&&(P=new Set),function(){function t(t,e,r){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,!P&&b("stable-symbol-rendering")&&(P=new Set),this.width=t,this.height=e,this._glyphSource=r,this._binPack=new d(t-4,e-4),this._glyphData.push(new Uint8Array(t*e)),this._dirties.push(!0),this._textures.push(void 0),this._addDecorationGlyph()}return t.prototype.getGlyphItems=function(_,f,i){for(var y=this,v=[],m=this._glyphSource,w=new Set,t=0,e=f;t<e.length;t++){var r=e[t],s=Math.floor(r*(1/256));w.add(s)}var h=[];return w.forEach(function(t){if(t<=256){var e=_+t;if(y._rangePromises.has(e))h.push(y._rangePromises.get(e));else{var r=m.getRange(_,t,i).then(function(){y._rangePromises.delete(e)}).catch(function(t){if(y._rangePromises.delete(e),!a.isAbortError(t))throw Error("Unable to query resource")});y._rangePromises.set(e,r),h.push(r)}}}),a.all(h).then(function(){var t,e=y._glyphIndex[_];if(e||(e={},y._glyphIndex[_]=e),b("stable-symbol-rendering")){P.clear();for(var r=0,i=f;r<i.length;r++){var s=i[r];P.add(s)}var h=[];w.forEach(function(t){h.push(t)}),h.sort(),t=[];for(var a=0,n=h;a<n.length;a++)for(var o=n[a],l=0;l<256;++l)t.push(256*o+l)}else t=f;for(var g=0,c=t;g<c.length;g++){var p=e[s=c[g]];if(p)b("stable-symbol-rendering")&&!P.has(s)||(v[s]={sdf:!0,rect:p.rect,metrics:p.metrics,page:p.page});else{var u=m.getGlyph(_,s);if(u&&u.metrics){var d=y._recordGlyph(u);e[s]={rect:d,metrics:u.metrics,tileIDs:null,page:y._currentPage},b("stable-symbol-rendering")&&!P.has(s)||(v[s]={sdf:!0,rect:d,metrics:u.metrics,page:y._currentPage}),y._dirties[y._currentPage]=!0}}}return v})},t.prototype._recordGlyph=function(t){var e,r=t.metrics;if(0===r.width)e=new u.default(0,0,0,0);else{var i=r.width+6,s=r.height+6,h=i%4?4-i%4:4,a=s%4?4-s%4:4;1===h&&(h=5),1===a&&(a=5),(e=this._binPack.allocate(i+h,s+a)).isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new d(this.width-4,this.height-4),e=this._binPack.allocate(i+h,s+a));var n=this._glyphData[this._currentPage],o=t.bitmap,l=void 0,g=void 0;if(o)for(var c=0;c<s;c++){l=i*c,g=this.width*(e.y+c+1)+e.x;for(var p=0;p<i;p++)n[g+p+1]=o[l+p]}}return e},t.prototype._addDecorationGlyph=function(){for(var t=[117,149,181,207,207,181,149,117],e=[],r=0;r<t.length;r++)for(var i=t[r],s=0;s<11;s++)e.push(i);var h={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(e)};this._recordGlyph(h)},t.prototype.bind=function(t,e,r,i){this._textures[r]||(this._textures[r]=new h.Texture(t,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var s=this._textures[r];s.setSamplingMode(e),this._dirties[r]&&s.setData(this._glyphData[r]),t.bindTexture(s,i),this._dirties[r]=!1},t.prototype.dispose=function(){this._binPack=null;for(var t=0,e=this._textures;t<e.length;t++){var r=e[t];r&&r.dispose()}this._textures.length=0,this._glyphData.length=0},t}()});