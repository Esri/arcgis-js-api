// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../../../../../core/libs/gl-matrix-2/gl-matrix","../../definitions","./ComputedGlyph","./util","../../../../../3d/support/mathUtils"],function(t,e,M,i,V,W,$,tt,et){Object.defineProperty(e,"__esModule",{value:!0});var _=i.getLogger("esri.views.2d.engine.webgl.GlyphGroup"),o=function(){function t(t,e,i,o,s,r,a,h,n,l){void 0===i&&(i=0),void 0===o&&(o=-1),void 0===s&&(s=-1),void 0===r&&(r=-1),void 0===a&&(a=-1),void 0===h&&(h=-1),void 0===n&&(n=0),void 0===l&&(l=-1),this.x=t,this.y=e,this.t=i,this.i=o,this.j=s,this.segmentPosX=r,this.segmentPosY=a,this.segmentLen=h,this.pathLen=n,this.order=l,this._glyphs=new Map,this.minZoom=0}return Object.defineProperty(t.prototype,"glyphs",{get:function(){return this._glyphs},enumerable:!0,configurable:!0}),t.prototype.add=function(t,e){var i=this._glyphs.get(e);i?i.push(t):this._glyphs.set(e,[t])},t.prototype.clear=function(){this._glyphs.clear()},t.prototype.place=function(t,e,i,o,s,r,a,h,n,l,p){var d,m,g=t.x,c=t.y,y=t.codePoint,u=t.glyphMosaicItem;switch(e){case"esriGeometryPoint":case"esriGeometryPolygon":var f=$.default.from(g,c,this.x,this.y,-1,l,p,u,y,s,o,r,a);return void this.add(f,0);case"esriGeometryPolyline":var v=i.geometry;return this._placeGlyphAlongLine(t,s,v,o,h,r,a,n,l,p,-1),void this._placeGlyphAlongLine(t,s,v,o,h,r,a,n,l,p,1);case"esriGeometryMultipoint":case"esriGeometryEnvelope":return d="Cannot place for unsupported geometryType: "+e,void 0===m&&(m="mapview-labeling"),void _.error(new M(m,d))}},t.prototype._findLabelTheta=function(t,e,i,o){var s=o*e,r=(0*s+-1*(o*-t))/(1*i),a=Math.acos(r);return 0<s&&(a=2*Math.PI-a),a},t.prototype._placeGlyphAlongLine=function(t,e,i,o,s,r,a,h,n,l,p){var d=i.paths[this.i],m=d[this.j],g=m[0],c=m[1],y=t.x,u=t.y,f=t.glyphMosaicItem,v=t.codePoint,M=t.glyphMosaicItem.metrics,_=(t.x+M.left+M.width/2)*r/24,b=p*et.sign(_)||1,x=Math.abs(_),L=tt.len(g,c),P=this._findLabelTheta(g,c,L,p),G=(b+1)/2,w=-b*(-1*G+this.t)*L,j=V.mat2d.rotate(V.mat2df32.create(),o,-P),I=l,O=48<s.height,A=0===w?I:Math.max(Math.max(h+et.log2(Math.abs(x/w)),0),n);O&&(A=n);var T=O||A<=h&&h<=I&&1===p,Z=$.default.from(y,u,this.x,this.y,P,A,I,f,v,e,j,r,a,T);if(this.add(Z,this.j),!O)for(var C=this.segmentPosX+G*g,E=this.segmentPosY+G*c,X=A,Y=this.j+b;0<Y&&Y<d.length;Y+=b){var k=C,q=E,D=d[Y],N=D[0],S=D[1],U=tt.len(N,S),z=this._findLabelTheta(N,S,U,p),B=V.mat2d.rotate(V.mat2df32.create(),o,-z),F=k+-b*N/U*w,H=q+-b*S/U*w,J=X-.1,K=0===(w+=U)?J:Math.max(Math.max(h+et.log2(Math.abs(x/w)),0),n),Q=K<=h&&h<=J&&1===p,R=$.default.from(y,u,F,H,P,K,J,f,v,e,B,r,a,Q);if(this.add(R,Y),K<h-W.COLLISION_MAX_ZOOM_DELTA){this.minZoom=Math.max(K,this.minZoom);break}C+=b*N,E+=b*S,X=K}},t}();e.default=o});