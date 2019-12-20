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

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../../../../../core/mathUtils","../../../../../../core/libs/gl-matrix-2/mat2d","../../../../../../core/libs/gl-matrix-2/mat2df32","../../definitions","../../materialKey/MaterialKey","./ComputedGlyph","./util"],function(t,e,x,i,V,W,$,tt,_,et,it){Object.defineProperty(e,"__esModule",{value:!0});var b=i.getLogger("esri.views.2d.engine.webgl.GlyphGroup"),o=function(){function t(t,e,i,o,a,r,s,h,n,l){void 0===i&&(i=0),void 0===o&&(o=-1),void 0===a&&(a=-1),void 0===r&&(r=-1),void 0===s&&(s=-1),void 0===h&&(h=-1),void 0===n&&(n=0),void 0===l&&(l=-1),this.x=t,this.y=e,this.t=i,this.i=o,this.j=a,this.segmentPosX=r,this.segmentPosY=s,this.segmentLen=h,this.pathLen=n,this.order=l,this._glyphs=new Map,this.minZoom=0}return Object.defineProperty(t.prototype,"glyphs",{get:function(){return this._glyphs},enumerable:!0,configurable:!0}),t.prototype.add=function(t,e){var i=this._glyphs.get(e);i?i.push(t):this._glyphs.set(e,[t])},t.prototype.clear=function(){this._glyphs.clear()},t.prototype.place=function(t,e,i,o,a,r,s,h,n,l,d){var p,m,g=t.x,y=t.y,c=t.codePoint,u=t.glyphMosaicItem,f=_.MaterialKeyBase.load(a);switch(f.textureBinding=t.glyphMosaicItem.textureBinding,e){case"esriGeometryPoint":case"esriGeometryPolygon":var v=et.default.from(g,y,this.x,this.y,-1,l,d,u,c,f.data,o,r,s);return void this.add(v,0);case"esriGeometryPolyline":var M=i.geometry;return this._placeGlyphAlongLine(t,f.data,M,o,h,r,s,n,l,d,-1),void this._placeGlyphAlongLine(t,f.data,M,o,h,r,s,n,l,d,1);case"esriGeometryMultipoint":case"esriGeometryEnvelope":return p="Cannot place for unsupported geometryType: "+e,void 0===m&&(m="mapview-labeling"),void b.error(new x(m,p))}},t.prototype._findLabelTheta=function(t,e,i,o){var a=o*e,r=(0*a+-1*(o*-t))/(1*i),s=Math.acos(r);return 0<a&&(s=2*Math.PI-s),s},t.prototype._placeGlyphAlongLine=function(t,e,i,o,a,r,s,h,n,l,d){var p=i.paths[this.i],m=p[this.j],g=m[0],y=m[1],c=t.x,u=t.y,f=t.glyphMosaicItem,v=t.codePoint,M=t.glyphMosaicItem.metrics,x=(t.x+M.left+M.width/2)*r/24,_=d*V.sign(x)||1,b=Math.abs(x),L=it.len(g,y),P=this._findLabelTheta(g,y,L,d),G=(_+1)/2,w=-_*(-1*G+this.t)*L,I=W.mat2d.rotate($.mat2df32.create(),o,-P),j=l,O=48<a.height,A=0===w?j:Math.max(Math.max(h+V.log2(Math.abs(b/w)),0),n);O&&(A=n);var T=O||A<=h&&h<=j&&1===d,Z=et.default.from(c,u,this.x,this.y,P,A,j,f,v,e,I,r,s,T);if(this.add(Z,this.j),!O)for(var B=this.segmentPosX+G*g,C=this.segmentPosY+G*y,E=A,K=this.j+_;0<K&&K<p.length;K+=_){var X=B,Y=C,k=p[K],q=k[0],D=k[1],N=it.len(q,D),S=this._findLabelTheta(q,D,N,d),U=W.mat2d.rotate($.mat2df32.create(),o,-S),z=X+-_*q/N*w,F=Y+-_*D/N*w,H=E-.1,J=0===(w+=N)?H:Math.max(Math.max(h+V.log2(Math.abs(b/w)),0),n),Q=J<=h&&h<=H&&1===d,R=et.default.from(c,u,z,F,P,J,H,f,v,e,U,r,s,Q);if(this.add(R,K),J<h-tt.COLLISION_MAX_ZOOM_DELTA){this.minZoom=Math.max(J,this.minZoom);break}B+=_*q,C+=_*D,E=J}},t}();e.default=o});