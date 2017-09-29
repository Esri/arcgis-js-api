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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/promise/all","dojo/has","../../../webgl/Texture","./Rect","./RectangleBinPack"],function(e,t,r,i,s,a,h){function n(e){return"Arial Regular"}var o;i("stable-symbol-rendering")&&(o=new Set);var g=function(){function e(e,t,r){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,(0>=e||0>=t)&&console.error("Glyph mosaic width and height must be greater than zero!"),this.width=e,this.height=t,this._glyphSource=r,this._binPack=new h(e-4,t-4),this._glyphData.push(new Uint8Array(e*t)),this._dirties.push(!0),this._textures.push(void 0)}return e.prototype.getGlyphItems=function(e,t){for(var s=this,g=n(e),l=[],u=this._glyphSource,c=new Set,d=1/256,p=0,_=t;p<_.length;p++){var f=_[p],v=Math.floor(f*d);c.add(v)}var y=[];return c.forEach(function(e){if(256>=e){var t=g+e;if(s._rangePromises.has(t))y.push(s._rangePromises.get(t));else{var r=u.getRange(g,e).always(function(){s._rangePromises["delete"](t)});s._rangePromises.set(t,r),y.push(r)}}}),r(y).then(function(e){var r=s._glyphIndex[g];r||(r={},s._glyphIndex[g]=r);var n;if(i("stable-symbol-rendering")){o.clear();for(var d=0,p=t;d<p.length;d++){var _=p[d];o.add(_)}var f=[];c.forEach(function(e){f.push(e)}),f.sort(),n=[];for(var v=0,y=f;v<y.length;v++)for(var m=y[v],w=0;256>w;++w)n.push(256*m+w)}else n=t;for(var P=0,b=n;P<b.length;P++){var _=b[P],x=r[_];if(x)(!i("stable-symbol-rendering")||o.has(_))&&(l[_]={rect:x.rect,metrics:x.metrics,page:x.page});else{var D=u.getGlyph(g,_);if(D&&D.metrics){var k=D.metrics,I=void 0;if(0===k.width)I=new a(0,0,0,0);else{var S=3,A=k.width+2*S,R=k.height+2*S,E=A%4?4-A%4:4,G=R%4?4-R%4:4;1===E&&(E=5),1===G&&(G=5),I=s._binPack.allocate(A+E,R+G),I.isEmpty&&(s._dirties[s._currentPage]||(s._glyphData[s._currentPage]=null),s._currentPage=s._glyphData.length,s._glyphData.push(new Uint8Array(s.width*s.height)),s._dirties.push(!0),s._textures.push(void 0),s._binPack=new h(s.width-4,s.height-4),I=s._binPack.allocate(A+E,R+G));var M=s._glyphData[s._currentPage],T=D.bitmap,U=void 0,j=void 0;if(T)for(var q=0;R>q;q++){U=A*q,j=s.width*(I.y+q+1)+I.x;for(var z=0;A>z;z++)M[j+z+1]=T[U+z]}}r[_]={rect:I,metrics:k,tileIDs:null,page:s._currentPage},(!i("stable-symbol-rendering")||o.has(_))&&(l[_]={rect:I,metrics:k,page:s._currentPage}),s._dirties[s._currentPage]=!0}}}return l})},e.prototype.bind=function(e,t,r,i){this._textures[r]||(this._textures[r]=new s(e,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var a=this._textures[r];a.setSamplingMode(t),this._dirties[r]&&a.setData(this._glyphData[r]),e.bindTexture(a,i),this._dirties[r]=!1},e.prototype.dispose=function(){this._binPack=null;for(var e=0,t=this._textures;e<t.length;e++){var r=t[e];r&&r.dispose()}this._textures.length=0},e}();return g});