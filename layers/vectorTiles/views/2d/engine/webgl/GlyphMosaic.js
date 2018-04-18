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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","dojo/has","dojo/promise/all","./fontUtils","./Rect","./RectangleBinPack","../../../webgl/Texture"],function(e,t,r,i,s,a,h,n){var o;return r("stable-symbol-rendering")&&(o=new Set),function(){function e(e,t,r){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,(e<=0||t<=0)&&console.error("Glyph mosaic width and height must be greater than zero!"),this.width=e,this.height=t,this._glyphSource=r,this._binPack=new h(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}return e.prototype.getGlyphItems=function(e,t){for(var n=this,l=s.getFullyQualifiedFontName(e),g=[],u=this._glyphSource,d=new Set,c=0,p=t;c<p.length;c++){var _=p[c],f=Math.floor(_*(1/256));d.add(f)}var y=[];return d.forEach(function(e){if(e<=256){var t=l+e;if(n._rangePromises.has(t))y.push(n._rangePromises.get(t));else{var r=u.getRange(l,e).always(function(){n._rangePromises.delete(t)});n._rangePromises.set(t,r),y.push(r)}}}),i(y).then(function(e){var i=n._glyphIndex[l];i||(i={},n._glyphIndex[l]=i);var s;if(r("stable-symbol-rendering")){o.clear();for(var c=0,p=t;c<p.length;c++){var _=p[c];o.add(_)}var f=[];d.forEach(function(e){f.push(e)}),f.sort(),s=[];for(var y=0,v=f;y<v.length;y++)for(var m=v[y],w=0;w<256;++w)s.push(256*m+w)}else s=t;for(var P=0,b=s;P<b.length;P++){var _=b[P],x=i[_];if(x)r("stable-symbol-rendering")&&!o.has(_)||(g[_]={rect:x.rect,metrics:x.metrics,page:x.page});else{var D=u.getGlyph(l,_);if(D&&D.metrics){var k=D.metrics,I=void 0;if(0===k.width)I=new a(0,0,0,0);else{var S=k.width+6,U=k.height+6,A=S%4?4-S%4:4,E=U%4?4-U%4:4;1===A&&(A=5),1===E&&(E=5),I=n._binPack.allocate(S+A,U+E),I.isEmpty&&(n._dirties[n._currentPage]||(n._glyphData[n._currentPage]=null),n._currentPage=n._glyphData.length,n._glyphData.push(new Uint8Array(n.width*n.height)),n._dirties.push(!0),n._textures.push(void 0),n._binPack=new h(n.width-4,n.height-4),I=n._binPack.allocate(S+A,U+E));var F=n._glyphData[n._currentPage],G=D.bitmap,M=void 0,R=void 0;if(G)for(var T=0;T<U;T++){M=S*T,R=n.width*(I.y+T+1)+I.x;for(var j=0;j<S;j++)F[R+j+1]=G[M+j]}}i[_]={rect:I,metrics:k,tileIDs:null,page:n._currentPage},r("stable-symbol-rendering")&&!o.has(_)||(g[_]={rect:I,metrics:k,page:n._currentPage}),n._dirties[n._currentPage]=!0}}}return g})},e.prototype.bind=function(e,t,r,i){this._textures[r]||(this._textures[r]=new n(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var s=this._textures[r];s.setSamplingMode(t),this._dirties[r]&&s.setData(this._glyphData[r]),e.bindTexture(s,i),this._dirties[r]=!1},e.prototype.dispose=function(){this._binPack=null;for(var e=0,t=this._textures;e<t.length;e++){var r=t[e];r&&r.dispose()}this._textures.length=0},e}()});