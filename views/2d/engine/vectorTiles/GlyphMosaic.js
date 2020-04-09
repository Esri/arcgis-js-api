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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/has","../../../../core/promiseUtils","../../../webgl","./RectangleBinPack","../webgl/Rect"],(function(e,t,i,r,s,h,a){var n;s.enums.PixelFormat,s.enums.PixelType;return function(){function e(e,t,r){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,!n&&i("stable-symbol-rendering")&&(n=new Set),this.width=e,this.height=t,this._glyphSource=r,this._binPack=new h(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}return e.prototype.getGlyphItems=function(e,t){for(var s=this,o=[],l=this._glyphSource,g=new Set,d=0,p=t;d<p.length;d++){var u=p[d],c=Math.floor(u*(1/256));g.add(c)}var _=[];return g.forEach((function(t){if(t<=256){var i=e+t;if(s._rangePromises.has(i))_.push(s._rangePromises.get(i));else{var r=l.getRange(e,t).then((function(){s._rangePromises.delete(i)}),(function(){s._rangePromises.delete(i)}));s._rangePromises.set(i,r),_.push(r)}}})),r.all(_).then((function(){var r,d=s._glyphIndex[e];if(d||(d={},s._glyphIndex[e]=d),i("stable-symbol-rendering")){n.clear();for(var p=0,u=t;p<u.length;p++){var c=u[p];n.add(c)}var _=[];g.forEach((function(e){_.push(e)})),_.sort(),r=[];for(var f=0,v=_;f<v.length;f++)for(var y=v[f],m=0;m<256;++m)r.push(256*y+m)}else r=t;for(var w=0,P=r;w<P.length;w++){var x=d[c=P[w]];if(x)i("stable-symbol-rendering")&&!n.has(c)||(o[c]={sdf:!0,rect:x.rect,metrics:x.metrics,page:x.page,code:c});else{var b=l.getGlyph(e,c);if(b&&b.metrics){var D=b.metrics,I=void 0;if(0===D.width)I=new a.default(0,0,0,0);else{var k=D.width+6,S=D.height+6,T=k%4?4-k%4:4,U=S%4?4-S%4:4;1===T&&(T=5),1===U&&(U=5),(I=s._binPack.allocate(k+T,S+U)).isEmpty&&(s._dirties[s._currentPage]||(s._glyphData[s._currentPage]=null),s._currentPage=s._glyphData.length,s._glyphData.push(new Uint8Array(s.width*s.height)),s._dirties.push(!0),s._textures.push(void 0),s._binPack=new h(s.width-4,s.height-4),I=s._binPack.allocate(k+T,S+U));var A=s._glyphData[s._currentPage],E=b.bitmap,G=void 0,M=void 0;if(E)for(var R=0;R<S;R++){G=k*R,M=s.width*(I.y+R+1)+I.x;for(var F=0;F<k;F++)A[M+F+1]=E[G+F]}}d[c]={rect:I,metrics:D,tileIDs:null,page:s._currentPage},i("stable-symbol-rendering")&&!n.has(c)||(o[c]={sdf:!0,rect:I,metrics:D,page:s._currentPage,code:c}),s._dirties[s._currentPage]=!0}}}return o}))},e.prototype.removeGlyphs=function(e){for(var t in this._glyphIndex){var i=this._glyphIndex[t];if(i){var r=void 0;for(var s in i)if((r=i[s]).tileIDs.delete(e),0===r.tileIDs.size){for(var h=this._glyphData[r.page],a=r.rect,n=void 0,o=void 0,l=0;l<a.height;l++)for(n=this.width*(a.y+l)+a.x,o=0;o<a.width;o++)h[n+o]=0;delete i[s],this._dirties[r.page]=!0}}}},e.prototype.bind=function(e,t,i,r){void 0===r&&(r=0),this._textures[i]||(this._textures[i]=new s.Texture(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var h=this._textures[i];h.setSamplingMode(t),this._dirties[i]&&h.setData(this._glyphData[i]),e.bindTexture(h,r),this._dirties[i]=!1},e.prototype.dispose=function(){this._binPack=null;for(var e=0,t=this._textures;e<t.length;e++){var i=t[e];i&&i.dispose()}this._textures.length=0},e}()}));