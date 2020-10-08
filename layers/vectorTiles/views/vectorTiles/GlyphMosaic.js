// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/promiseUtils","./Rect","./RectangleBinPack","../webgl/Texture"],(function(e,t,i,r,s,h,a){var n;return i("stable-symbol-rendering")&&(n=new Set),function(){function e(e,t,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,(e<=0||t<=0)&&console.error("Glyph mosaic width and height must be greater than zero!"),this.width=e,this.height=t,this._glyphSource=i,this._binPack=new h(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}return e.prototype.getGlyphItems=function(e,t,a){for(var o=this,l=[],g=this._glyphSource,d=new Set,p=0,u=a;p<u.length;p++){var _=u[p],c=Math.floor(_*(1/256));d.add(c)}var v=[];return d.forEach((function(e){if(e<=256){var i=t+e;if(o._rangePromises.has(i))v.push(o._rangePromises.get(i));else{var r=g.getRange(t,e).always((function(){o._rangePromises.delete(i)}));o._rangePromises.set(i,r),v.push(r)}}})),r.all(v).then((function(e){var r,p=o._glyphIndex[t];if(p||(p={},o._glyphIndex[t]=p),i("stable-symbol-rendering")){n.clear();for(var u=0,_=a;u<_.length;u++){var c=_[u];n.add(c)}var v=[];d.forEach((function(e){v.push(e)})),v.sort(),r=[];for(var f=0,y=v;f<y.length;f++)for(var w=y[f],m=0;m<256;++m)r.push(256*w+m)}else r=a;for(var x=0,P=r;x<P.length;x++){var b=p[c=P[x]];if(b)i("stable-symbol-rendering")&&!n.has(c)||(l[c]={rect:b.rect,metrics:b.metrics,page:b.page});else{var D=g.getGlyph(t,c);if(D&&D.metrics){var I=D.metrics,k=void 0;if(0===I.width)k=new s(0,0,0,0);else{var S=I.width+6,G=I.height+6,U=S%4?4-S%4:4,A=G%4?4-G%4:4;1===U&&(U=5),1===A&&(A=5),(k=o._binPack.allocate(S+U,G+A)).isEmpty&&(o._dirties[o._currentPage]||(o._glyphData[o._currentPage]=null),o._currentPage=o._glyphData.length,o._glyphData.push(new Uint8Array(o.width*o.height)),o._dirties.push(!0),o._textures.push(void 0),o._binPack=new h(o.width-4,o.height-4),k=o._binPack.allocate(S+U,G+A));var E=o._glyphData[o._currentPage],M=D.bitmap,R=void 0,T=void 0;if(M)for(var z=0;z<G;z++){R=S*z,T=o.width*(k.y+z+1)+k.x;for(var j=0;j<S;j++)E[T+j+1]=M[R+j]}}p[c]={rect:k,metrics:I,tileIDs:null,page:o._currentPage},i("stable-symbol-rendering")&&!n.has(c)||(l[c]={rect:k,metrics:I,page:o._currentPage}),o._dirties[o._currentPage]=!0}}}return l}))},e.prototype.removeGlyphs=function(e){for(var t in this._glyphIndex){var i=this._glyphIndex[t];if(i){var r=void 0;for(var s in i)if((r=i[s]).tileIDs.delete(e),0===r.tileIDs.size){for(var h=this._glyphData[r.page],a=r.rect,n=void 0,o=void 0,l=0;l<a.height;l++)for(n=this.width*(a.y+l)+a.x,o=0;o<a.width;o++)h[n+o]=0;delete i[s],this._dirties[r.page]=!0}}}},e.prototype.bind=function(e,t,i,r){void 0===r&&(r=0),this._textures[i]||(this._textures[i]=new a(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var s=this._textures[i];s.setSamplingMode(t),this._dirties[i]&&s.setData(this._glyphData[i]),e.bindTexture(s,r),this._dirties[i]=!1},e.prototype.dispose=function(){this._binPack=null;for(var e=0,t=this._textures;e<t.length;e++){var i=t[e];i&&i.dispose()}this._textures.length=0},e}()}));