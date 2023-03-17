// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../color","../../definitions","../../enums","../../enums","../../LineTess","../../number","../../TileClipper","../../Utils","../../WGLDisplayRecord","./WGLMeshTemplate"],(function(e,t,r,i,o,n,s,a,l,p,u,h,c,d){Object.defineProperty(t,"__esModule",{value:!0});var y=i.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate"),f=l.allocTriangles(20),v=l.allocTriangles(20),g=[l.allocExtrudeVectors(),l.allocExtrudeVectors()],x=l.allocExtrudeVectors(),m=n.TILE_SIZE+8,T=new l.Tessellator({distanceAlongCorrection:!0}),_=new u.TileClipper(0,0,0,1,8);_.setExtent(512);var V=function(e){function t(t,r,i,o,n,a,l,p,u,h,c){var d=e.call(this)||this;d.capType=a,d.joinType=l,d.fillColor=p,d.tl=u,d.br=h,d.hasPattern=c,d.geometryType=s.WGLGeometryType.LINE;var y=1/n;return d.halfWidth=o>0?.5*(o+y):0,d._materialStore=t,d.vvFlags=r,d.materialId=d._materialStore.createSpriteMaterial(i,d.geometryType,r),d}return r(t,e),t.fromSimpleLine=function(e,r,i,n,s){var a=i.color,l=h.getCapType("round"),u=h.getJoinType("round"),c=a&&"none"!==i.style&&o.premultiplyAlphaRGBA(a)||0;if("none"===i.style&&(c=0),!n)return new t(e,r,n,i.width,s,l,u,c,0,0,!1);var d=n.rect,y=n.width,f=n.height,v=d.x+1,g=d.y+1,x=d.x+1+y,m=d.y+1+f,T=p.i1616to32(v,g),_=p.i1616to32(x,m);return new t(e,r,n,i.width,s,l,u,c,T,_,!0)},t.fromPictureLineSymbol=function(e,t,r,i){return y.error("PictureLineSymbol support does not exist!"),null},t.prototype.writeMesh=function(e,t,r,i,o,n,s){if(this.vvFlags&a.WGLVVFlag.COLOR||0!==this.fillColor){var l=this._materialStore.get(this.materialId),p=t.indexVector,u=t.get("geometry"),h=this.halfWidth,d=new c(i,this.geometryType,this.materialId),f=this._getOffset(u,l);switch(d.vertexFrom=f,d.indexFrom=p.length,e.push(d),r){case"esriGeometryPolyline":var v=o.geometry.paths,g=this._clipLines(v);return void this._write(d,p,u,f,i,h,g,l,s);case"esriGeometryPolygon":var x=o.geometry.rings;g=this._clipLines(x);return void this._write(d,p,u,f,i,h,g,l,s);default:y.error("Unable to handle geometryType: "+r)}}},t.prototype._clipLines=function(e){for(var t=[],r=!1,i=0;i<e.length;){var o=[],n=e[i];_.reset(2);var s=n[0],a=s[0],l=s[1];if(r)_.moveTo(a,l);else{if(a<-8||a>m||l<-8||l>m){r=!0;continue}o.push({x:a,y:l})}for(var p=!1,u=n.length,h=1;h<u;++h)if(a+=n[h][0],l+=n[h][1],r)_.lineTo(a,l);else{if(a<-8||a>m||l<-8||l>m){p=!0;break}o.push({x:a,y:l})}if(p)r=!0;else{if(r){var c=_.resultWithStarts();if(c)for(var d=0,y=c;d<y.length;d++){var f=y[d];t.push(f)}}else t.push({line:o,start:0});i++,r=!1}}return t},t.prototype._getOffset=function(e,t){var r=t.materialKeyInfo.hasVV()?11:8;return e.length/r},t.prototype._write=function(e,t,r,i,o,n,s,a,p){for(var u=0,h=0,c=s;h<c.length;h++){var d=c[h],y=d.line,v=d.start;if(!(y.length<2))for(var m=y[0],_=y[y.length-1],V=_.x-m.x,C=_.y-m.y,b=V*V+C*C<1e-6,w=v%65535,E=g[1],I=0;I<y.length;I++){var L=y[I],S=E===g[I%2]?g[(I+1)%2]:g[I%2],M=0===I,P=I===y.length-1;if(P&&b&&!this.hasPattern?l.copyExtrudeVectors(S,x):(this._computeExtrudeVectors(S,I,y,b),u+=this._writeVertices(r,o,n,L.x,L.y,S,w,u,a,p),!S.capCenter||b&&P||this._writePieIndices(e,t,i,S),b&&M&&!this.hasPattern&&l.copyExtrudeVectors(x,S)),M||this._writeBridgeIndices(e,t,i,E,S),!P){var J=y[I+1],R=[J.x-L.x,J.y-L.y],O=l.length(R),A=[R[0]/O,R[1]/O],G=w+O;if(G>65535){var W=(65535-w)/(G-w),B=L.x+(J.x-L.x)*W,U=L.y+(J.y-L.y)*W,z=E;T.buttCap(z,A,A),u+=this._writeVertices(r,o,n,B,U,z,65535,u,a,p),T.bridge(f,S,z),this._writeBridgeIndices(e,t,i,S,z),T.buttCap(z,A,A),w=G-65535}else w=G,E=S}}}e.vertexCount=u},t.prototype._writeVertices=function(e,t,r,i,o,n,s,a,l,u){for(var h=0,c=p.i1616to32(i,o),d=n.vectors,y=d.items,f=d.count;h<f;++h){var v=y[h].vector,g=v[0],x=v[1],m=y[h].texCoords,T=m[0],_=m[1],V=y[h].direction,C=V[0],b=V[1],w=p.i1616to32(s,31*r),E=p.i8888to32(Math.round(31*g),Math.round(31*x),Math.round(31*T),Math.round(31*_)),I=p.i8888to32(Math.round(31*C),Math.round(31*b),0,0);e.push(c),e.push(t),e.push(this.fillColor),e.push(E),e.push(w),e.push(this.tl),e.push(this.br),e.push(I),this._writeVV(e,u,l),y[h].base={index:a+h,point:[i,o]}}return h},t.prototype._writeVV=function(e,t,r){r.materialKeyInfo.hasVV()&&(e.push(t[s.VVType.SIZE]),e.push(t[s.VVType.COLOR]),e.push(t[s.VVType.OPACITY]))},t.prototype._writeBridgeIndices=function(e,t,r,i,o){T.bridge(f,i,o);for(var n=0;n<f.count;++n){var s=f.items[n];t.push(r+s.v1.base.index),t.push(r+s.v2.base.index),t.push(r+s.v3.base.index),e.indexCount+=3}},t.prototype._writePieIndices=function(e,t,r,i){T.pie(v,i);for(var o=0;o<v.count;++o){var n=v.items[o];t.push(r+n.v1.base.index),t.push(r+n.v2.base.index),t.push(r+n.v3.base.index),e.indexCount+=3}},t.prototype._computeExtrudeVectors=function(e,t,r,i){var o=r[t],n=[void 0,void 0],s=[void 0,void 0];if(t>0&&t<r.length-1){var a=r[(t+r.length-1)%r.length],p=r[(t+1)%r.length];l.normalize(n,[o.x-a.x,o.y-a.y]),l.normalize(s,[p.x-o.x,p.y-o.y])}else if(0===t){p=r[(t+1)%r.length];if(l.normalize(s,[p.x-o.x,p.y-o.y]),i){var u=r[r.length-2];l.normalize(n,[o.x-u.x,o.y-u.y])}else n=s}else{if(t!==r.length-1)return void console.error("Vertex index 'i' out of range.");a=r[(t+r.length-1)%r.length];if(l.normalize(n,[o.x-a.x,o.y-a.y]),i){var h=r[1];l.normalize(s,[h.x-o.x,h.y-o.y])}else s=n}i||0!==t?i||t!==r.length-1?this._computeJoinExtrudeVectors(e,n,s):this._computeCapExtrudeVectors(e,n,s,l.CapPosition.END):this._computeCapExtrudeVectors(e,n,s,l.CapPosition.START)},t.prototype._computeCapExtrudeVectors=function(e,t,r,i){switch(this.capType){case s.CapType.BUTT:return void T.buttCap(e,t,r);case s.CapType.ROUND:var o=l.getNumberOfSlices(Math.PI),n=i===l.CapPosition.START?-1:1;return void T.roundCap(e,t,r,i,o,n);case s.CapType.SQUARE:return void T.squareCap(e,t,r,i);default:return y.error("Encountered unknown cap type: "+this.capType+", defaulting to BUTT"),void T.buttCap(e,t,r)}},t.prototype._computeJoinExtrudeVectors=function(e,t,r){var i=l.getRads(t,r);if(i>Math.PI-.05)T.rectJoin(e,t,r);else if(this.joinType===s.JoinType.MITER||i<.1)i<.05?T.fastMiterJoin(e,t,r):i<l.MITER_SAFE_RADS?T.miterJoin(e,t,r):T.bevelJoin(e,t,r,l.SYSTEM_MAG_LIMIT);else if(this.joinType===s.JoinType.BEVEL)T.bevelJoin(e,t,r,1);else if(this.joinType===s.JoinType.ROUND){var o=l.getNumberOfSlices(i);i<2.3?o<2||i<.5?T.bevelJoin(e,t,r,1):T.roundJoin(e,t,r,o):T.unitRoundJoin(e,t,r,o)}},t}(d.default);t.default=V}));