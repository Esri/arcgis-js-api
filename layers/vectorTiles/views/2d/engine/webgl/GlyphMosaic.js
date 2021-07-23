// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports","dojo/has","dojo/promise/all","./Rect","./RectangleBinPack","../../../webgl/Texture"],(function(t,e,r,i,h,s,a){var n;return r("stable-symbol-rendering")&&(n=new Set),function(){function t(t,e,r){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,(t<=0||e<=0)&&console.error("Glyph mosaic width and height must be greater than zero!"),this.width=t,this.height=e,this._glyphSource=r,this._binPack=new s(t-4,e-4),this._glyphData.push(new Uint8Array(t*e)),this._dirties.push(!0),this._textures.push(void 0),this._addDecorationGlyph()}return t.prototype.getGlyphItems=function(t,e){for(var h=this,s=[],a=this._glyphSource,o=new Set,l=0,g=e;l<g.length;l++){var c=g[l],p=Math.floor(c*(1/256));o.add(p)}var u=[];return o.forEach((function(e){if(e<=256){var r=t+e;if(h._rangePromises.has(r))u.push(h._rangePromises.get(r));else{var i=a.getRange(t,e).then((function(){h._rangePromises.delete(r)})).catch((function(){throw h._rangePromises.delete(r),Error("Unable to query resource")}));h._rangePromises.set(r,i),u.push(i)}}})),i(u).then((function(i){var l,g=h._glyphIndex[t];if(g||(g={},h._glyphIndex[t]=g),r("stable-symbol-rendering")){n.clear();for(var c=0,p=e;c<p.length;c++){var u=p[c];n.add(u)}var d=[];o.forEach((function(t){d.push(t)})),d.sort(),l=[];for(var _=0,y=d;_<y.length;_++)for(var f=y[_],v=0;v<256;++v)l.push(256*f+v)}else l=e;for(var m=0,w=l;m<w.length;m++){var b=g[u=w[m]];if(b)r("stable-symbol-rendering")&&!n.has(u)||(s[u]={rect:b.rect,metrics:b.metrics,page:b.page});else{var P=a.getGlyph(t,u);if(P&&P.metrics){var x=h._recordGlyph(P,u);g[u]={rect:x,metrics:P.metrics,tileIDs:null,page:h._currentPage},r("stable-symbol-rendering")&&!n.has(u)||(s[u]={rect:x,metrics:P.metrics,page:h._currentPage}),h._dirties[h._currentPage]=!0}}}return s}))},t.prototype._recordGlyph=function(t,e){var r,i=t.metrics;if(0===i.width)r=new h(0,0,0,0);else{var a=i.width+6,n=i.height+6,o=a%4?4-a%4:4,l=n%4?4-n%4:4;1===o&&(o=5),1===l&&(l=5),(r=this._binPack.allocate(a+o,n+l)).isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new s(this.width-4,this.height-4),r=this._binPack.allocate(a+o,n+l));var g=this._glyphData[this._currentPage],c=t.bitmap,p=void 0,u=void 0;if(c)for(var d=0;d<n;d++){p=a*d,u=this.width*(r.y+d+1)+r.x;for(var _=0;_<a;_++)g[u+_+1]=c[p+_]}}return r},t.prototype._addDecorationGlyph=function(){for(var t=[117,149,181,207,207,181,149,117],e=[],r=0;r<t.length;r++)for(var i=t[r],h=0;h<11;h++)e.push(i);var s={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(e)};this._recordGlyph(s,0)},t.prototype.bind=function(t,e,r,i){this._textures[r]||(this._textures[r]=new a(t,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));var h=this._textures[r];h.setSamplingMode(e),this._dirties[r]&&h.setData(this._glyphData[r]),t.bindTexture(h,i),this._dirties[r]=!1},t.prototype.dispose=function(){this._binPack=null;for(var t=0,e=this._textures;t<e.length;t++){var r=e[t];r&&r.dispose()}this._textures.length=0,this._glyphData.length=0},t}()}));