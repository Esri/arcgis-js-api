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

define(["require","exports","../../../../core/has","../../../../core/promiseUtils","../../../webgl","./RectangleBinPack","../webgl/Rect"],function(e,t,i,r,s,h,a){var n;s.enums.PixelFormat,s.enums.PixelType;return function(){function e(e,t,r){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,!n&&i("stable-symbol-rendering")&&(n=new Set),this.width=e,this.height=t,this._glyphSource=r,this._binPack=new h(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}return e.prototype.getGlyphItems=function(e,t,s){for(var o=this,l=[],g=this._glyphSource,d=new Set,p=0,u=s;p<u.length;p++){var _=u[p],c=Math.floor(_*(1/256));d.add(c)}var f=[];return d.forEach(function(e){if(e<=256){var i=t+e;if(o._rangePromises.has(i))f.push(o._rangePromises.get(i));else{var r=g.getRange(t,e).then(function(){o._rangePromises.delete(i)},function(){o._rangePromises.delete(i)});o._rangePromises.set(i,r),f.push(r)}}}),r.all(f).then(function(e){var r=o._glyphIndex[t];r||(r={},o._glyphIndex[t]=r);var p;if(i("stable-symbol-rendering")){n.clear();for(var u=0,_=s;u<_.length;u++){var c=_[u];n.add(c)}var f=[];d.forEach(function(e){f.push(e)}),f.sort(),p=[];for(var v=0,y=f;v<y.length;v++)for(var m=y[v],w=0;w<256;++w)p.push(256*m+w)}else p=s;for(var P=0,x=p;P<x.length;P++){var c=x[P],b=r[c];if(b)i("stable-symbol-rendering")&&!n.has(c)||(l[c]={sdf:!0,rect:b.rect,metrics:b.metrics,page:b.page});else{var D=g.getGlyph(t,c);if(D&&D.metrics){var I=D.metrics,k=void 0;if(0===I.width)k=new a.default(0,0,0,0);else{var S=I.width+6,T=I.height+6,U=S%4?4-S%4:4,A=T%4?4-T%4:4;1===U&&(U=5),1===A&&(A=5),k=o._binPack.allocate(S+U,T+A),k.isEmpty&&(o._dirties[o._currentPage]||(o._glyphData[o._currentPage]=null),o._currentPage=o._glyphData.length,o._glyphData.push(new Uint8Array(o.width*o.height)),o._dirties.push(!0),o._textures.push(void 0),o._binPack=new h(o.width-4,o.height-4),k=o._binPack.allocate(S+U,T+A));var E=o._glyphData[o._currentPage],G=D.bitmap,M=void 0,R=void 0;if(G)for(var F=0;F<T;F++){M=S*F,R=o.width*(k.y+F+1)+k.x;for(var q=0;q<S;q++)E[R+q+1]=G[M+q]}}r[c]={rect:k,metrics:I,tileIDs:null,page:o._currentPage},i("stable-symbol-rendering")&&!n.has(c)||(l[c]={sdf:!0,rect:k,metrics:I,page:o._currentPage}),o._dirties[o._currentPage]=!0}}}return l})},e.prototype.removeGlyphs=function(e){for(var t in this._glyphIndex){var i=this._glyphIndex[t];if(i){var r=void 0;for(var s in i)if(r=i[s],r.tileIDs.delete(e),0===r.tileIDs.size){for(var h=this._glyphData[r.page],a=r.rect,n=void 0,o=void 0,l=0;l<a.height;l++)for(n=this.width*(a.y+l)+a.x,o=0;o<a.width;o++)h[n+o]=0;delete i[s],this._dirties[r.page]=!0}}}},e.prototype.bind=function(e,t,i,r){void 0===r&&(r=0),this._textures[i]||(this._textures[i]=new s.Texture(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var h=this._textures[i];h.setSamplingMode(t),this._dirties[i]&&h.setData(this._glyphData[i]),e.bindTexture(h,r),this._dirties[i]=!1},e.prototype.dispose=function(){this._binPack=null;for(var e=0,t=this._textures;e<t.length;e++){var i=t[e];i&&i.dispose()}this._textures.length=0},e}()});