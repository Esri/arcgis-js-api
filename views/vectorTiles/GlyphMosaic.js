// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/promiseUtils","./Rect","../webgl/Texture","./RectangleBinPack"],function(e,t,i,r,s,h,a){var n;i("stable-symbol-rendering")&&(n=new Set);var o=function(){function e(e,t,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,(0>=e||0>=t)&&console.error("Glyph mosaic width and height must be greater than zero!"),this.width=e,this.height=t,this._glyphSource=i,this._binPack=new a(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}return e.prototype.getGlyphItems=function(e,t,h){for(var o=this,l=[],g=this._glyphSource,d=new Set,p=1/256,u=0,_=h;u<_.length;u++){var c=_[u],v=Math.floor(c*p);d.add(v)}var f=[];return d.forEach(function(e){if(256>=e){var i=t+e;if(o._rangePromises.has(i))f.push(o._rangePromises.get(i));else{var r=g.getRange(t,e).always(function(){o._rangePromises["delete"](i)});o._rangePromises.set(i,r),f.push(r)}}}),r.all(f).then(function(e){var r=o._glyphIndex[t];r||(r={},o._glyphIndex[t]=r);var p;if(i("stable-symbol-rendering")){n.clear();for(var u=0,_=h;u<_.length;u++){var c=_[u];n.add(c)}var v=[];d.forEach(function(e){v.push(e)}),v.sort(),p=[];for(var f=0,y=v;f<y.length;f++)for(var w=y[f],m=0;256>m;++m)p.push(256*w+m)}else p=h;for(var x=0,P=p;x<P.length;x++){var c=P[x],b=r[c];if(b)(!i("stable-symbol-rendering")||n.has(c))&&(l[c]={rect:b.rect,metrics:b.metrics,page:b.page});else{var D=g.getGlyph(t,c);if(D&&D.metrics){var I=D.metrics,k=void 0;if(0===I.width)k=new s(0,0,0,0);else{var S=3,G=I.width+2*S,U=I.height+2*S,A=G%4?4-G%4:4,E=U%4?4-U%4:4;1===A&&(A=5),1===E&&(E=5),k=o._binPack.allocate(G+A,U+E),k.isEmpty&&(o._dirties[o._currentPage]||(o._glyphData[o._currentPage]=null),o._currentPage=o._glyphData.length,o._glyphData.push(new Uint8Array(o.width*o.height)),o._dirties.push(!0),o._textures.push(void 0),o._binPack=new a(o.width-4,o.height-4),k=o._binPack.allocate(G+A,U+E));var M=o._glyphData[o._currentPage],R=D.bitmap,T=void 0,z=void 0;if(R)for(var j=0;U>j;j++){T=G*j,z=o.width*(k.y+j+1)+k.x;for(var q=0;G>q;q++)M[z+q+1]=R[T+q]}}r[c]={rect:k,metrics:I,tileIDs:null,page:o._currentPage},(!i("stable-symbol-rendering")||n.has(c))&&(l[c]={rect:k,metrics:I,page:o._currentPage}),o._dirties[o._currentPage]=!0}}}return l})},e.prototype.removeGlyphs=function(e){for(var t in this._glyphIndex){var i=this._glyphIndex[t];if(i){var r=void 0;for(var s in i)if(r=i[s],r.tileIDs["delete"](e),0===r.tileIDs.size){for(var h=this._glyphData[r.page],a=r.rect,n=void 0,o=void 0,l=0;l<a.height;l++)for(n=this.width*(a.y+l)+a.x,o=0;o<a.width;o++)h[n+o]=0;delete i[s],this._dirties[r.page]=!0}}}},e.prototype.bind=function(e,t,i,r){void 0===r&&(r=0),this._textures[i]||(this._textures[i]=new h(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var s=this._textures[i];s.setSamplingMode(t),this._dirties[i]&&s.setData(this._glyphData[i]),e.bindTexture(s,r),this._dirties[i]=!1},e.prototype.dispose=function(){this._binPack=null;for(var e=0,t=this._textures;e<t.length;e++){var i=t[e];i&&i.dispose()}this._textures.length=0},e}();return o});