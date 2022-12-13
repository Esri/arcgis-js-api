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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../../../core/screenUtils","../../../../core/libs/earcut/earcut","../../../../core/libs/gl-matrix/mat2d","../../../../core/libs/gl-matrix/vec2","../../../../core/libs/libtess/libtess","./color","./enums","./lineMeshUtil","./MeshData","./number","./TileClipper","./Utils","./visualVariablesUtils"],(function(e,t,i,n,r,l,s,o,a,u,h,c,p,g,d,v){Object.defineProperty(t,"__esModule",{value:!0});var y,f,_=s.create(),b=l.create(),x=[],m=[],T=function(){function e(){this._currentVertexIndex=0,this._indexCounter=0,this._triangleIndices=[-1,-1,-1],this.glu=new o.GluTesselator,this.glu.gluTessCallback(o.gluEnum.GLU_TESS_BEGIN,this._begincallback.bind(this)),this.glu.gluTessCallback(o.gluEnum.GLU_TESS_VERTEX_DATA,this._vertexCallback.bind(this)),this.glu.gluTessCallback(o.gluEnum.GLU_TESS_END,this._endcallback.bind(this)),this.glu.gluTessCallback(o.gluEnum.GLU_TESS_COMBINE,this._combinecallback.bind(this)),this.glu.gluTessCallback(o.gluEnum.GLU_TESS_ERROR,this._errorcallback.bind(this)),this.glu.gluTessCallback(o.gluEnum.GLU_TESS_EDGE_FLAG,this._edgeCallback.bind(this)),this.glu.gluTessProperty(o.gluEnum.GLU_TESS_WINDING_RULE,o.windingRule.GLU_TESS_WINDING_ODD)}return e.prototype.beginPolygon=function(e,t){this._triangleIndices[0]=-1,this._triangleIndices[1]=-1,this._triangleIndices[2]=-1,this._currentVertexIndex=0,this._indexCounter=0,this.glu.gluTessBeginPolygon(e),this._indices=t},e.prototype.endPolygon=function(){this.glu.gluTessEndPolygon()},e.prototype.beginContour=function(){this.glu.gluTessBeginContour()},e.prototype.endContour=function(){this.glu.gluTessEndContour()},e.prototype.addVertex=function(e,t){this.glu.gluTessVertex(e,t)},e.prototype._vertexCallback=function(e,t){if(t[t.length]=e[0],t[t.length]=e[1],this._triangleIndices[this._currentVertexIndex]=-1,this._currentVertexIndex>=2){for(var i=0;i<3;i++)-1===this._triangleIndices[i]&&(this._triangleIndices[i]=this._indexCounter++),this._indices[this._indices.length]=this._triangleIndices[i];this._currentVertexIndex=0}else this._currentVertexIndex++},e.prototype._begincallback=function(e){this._triangleIndices[0]=-1,this._triangleIndices[1]=-1,this._triangleIndices[2]=-1,this._currentVertexIndex=0},e.prototype._endcallback=function(){this._currentVertexIndex=0},e.prototype._errorcallback=function(e){},e.prototype._combinecallback=function(e,t,i){return[e[0],e[1],e[2]]},e.prototype._edgeCallback=function(e){},e}(),I=i("esri-featurelayer-webgl"),N="libtess"===(I&&I.tesselator||"libtess");function S(e,t,i,n,l,s,o){var a=i.slice(n,l),u=e.length/(o.length+1),h=r(a,s,2),c=h.length;if(c<=0)return 0;for(var g=0;g<a.length;)e.push(p.i1616to32(a[g++],a[g++])),e.push.apply(e,o);for(var d=0;d<c;)t.push(h[d++]+u,h[d++]+u,h[d++]+u)}t.createMesh=function(e,t,i,r,o,I,E,w,V,M){switch(o){case u.WGLGeometryType.MARKER:return function(e,t,i,r,o,u,h,g){var y,f,x,m,T,I,N,S,E,w=new c,V=0,M=0,k=t.heatmapInfo;if(k){var C=Math.round(t.heatmapInfo.radius);y=0,f=0,x=C,m=C,T=[1,1,1,1],I=[0,0,0,0],N=C,S=C,E=0}else{var G=r.spriteMosaicItem;y=Math.round(G.rect.x/4),f=Math.round(G.rect.y/4),x=y+Math.round(G.rect.width/4),m=f+Math.round(G.rect.height/4),V=Math.round(o*n.pt2px(0|h.xoffset)),M=Math.round(o*n.pt2px(0|h.yoffset));var U=h.color?h.color:[0,0,0,0];T=d.isPictureSymbol(h)?[255,255,255,255]:a.copyAndPremultiply(U),N=Math.round(o*n.pt2px(h.width||h.size)),S=Math.round(o*n.pt2px(h.height||h.size)),h.outline?(I=null!=h.outline.color?a.copyAndPremultiply(h.outline.color):[0,0,0,0],E=null!=h.outline.width?Math.round(n.pt2px(h.outline.width)):0):(I=[0,0,0,0],E=0)}l.identity(b),h.angle&&l.rotate(b,b,3.14159265359/180*h.angle),l.translate(b,b,new Float32Array([-V,-M]));var P=[],L=p.i8888to32(T[0],T[1],T[2],T[3]),R=p.i8888to32(I[0],I[1],I[2],I[3]),z=p.i8888to32(N,S,E,0),A=p.numTo32(e),O=0,D=0,F=0,W=0,B=0,H=i.vvColor||i.vvOpacity||i.vvRotation||i.vvSizeMinMaxValue||i.vvSizeScaleStops||i.vvSizeFieldStops||i.vvSizeUnitValue;if(H){var j=t.vvFields,q=j.rotation?t.getValue(u,j.rotation):0,K=j.opacity?t.getValue(u,j.opacity):0,X=j.color?t.getValue(u,j.color):0,J=j.size&&!i.vvSizeScaleStops?t.getValue(u,j.size):0;i.vvSizeUnitValue&&(J=v.getVisualVariableSizeValueRepresentationRatio(J,t.vvRanges.size.unitValue.valueRepresentation)),(null===J||isNaN(J))&&(J=NaN),(null===q||isNaN(q))&&(q=NaN),(null===X||isNaN(X))&&(X=NaN),(null===K||isNaN(K))&&(K=NaN),O=p.toUint32(J),D=p.toUint32(K),F=p.toUint32(q),W=p.toUint32(X)}var Q=[O,W,D,F];k&&(B=p.toUint32(t.heatmapInfo.getIntensity(u)));var Y,Z=u.centroid||u.geometry;switch(g){case"esriGeometryPoint":Y=[[Z.x,Z.y]];break;case"esriGeometryMultipoint":Y=Z.points;break;case"esriGeometryPolyline":Y=Z.paths[0];break;case"esriGeometryPolygon":Y=u.centroid?[[Z.x,Z.y]]:Z.rings[0]}for(var $,ee=0,te=0,ie=0,ne=new Array(4*Y.length),re=0;re<Y.length;re++){var le=Y[re],se=le[0],oe=le[1],ae=p.i1616to32(se+te,oe+ie);te+=se,ie+=oe,_.set([-.5*N,-.5*S]),s.transformMat2d(_,_,b),P.push(ae),P.push(p.i8888to32(_[0],_[1],y,f)),P.push(A),P.push(L),P.push(R),P.push(z),H?P.push.apply(P,Q):k&&P.push(B),_.set([.5*N,-.5*S]),s.transformMat2d(_,_,b),P.push(ae),P.push(p.i8888to32(_[0],_[1],x,f)),P.push(A),P.push(L),P.push(R),P.push(z),H?P.push.apply(P,Q):k&&P.push(B),_.set([-.5*N,.5*S]),s.transformMat2d(_,_,b),P.push(ae),P.push(p.i8888to32(_[0],_[1],y,m)),P.push(A),P.push(L),P.push(R),P.push(z),H?P.push.apply(P,Q):k&&P.push(B),_.set([.5*N,.5*S]),s.transformMat2d(_,_,b),P.push(ae),P.push(p.i8888to32(_[0],_[1],x,m)),P.push(A),P.push(L),P.push(R),P.push(z),H?P.push.apply(P,Q):k&&P.push(B),ne[($=6*re)+0]=ee+0,ne[$+1]=ee+1,ne[$+2]=ee+2,ne[$+3]=ee+1,ne[$+4]=ee+3,ne[$+5]=ee+2,ee+=4}return w.update({geometry:P},ee,ne),w}(e,t,i,r,E,w,V,I);case u.WGLGeometryType.FILL:return function(e,t,i,n,r,l,s){var o,u=null!=n?n.spriteMosaicItem:null,h=r.geometry,v=d.isPictureSymbol(l);o=v?a.premultiplyAlphaUint32(a.white):l.color?a.premultiplyAlphaUint32(l.color):0;var _=i.vvColor||i.vvOpacity,b=new c,I=0,E=0,w=0,V=0;if(u){var M=u.rect,k=M.x,C=M.y;I=k+1,E=C+1,w=k+1+u.width,V=C+1+u.height}var G=v&&l.width&&l.height?p.i8888to32(p.nextHighestPowerOfTwo(l.width),p.nextHighestPowerOfTwo(l.height),0,0):p.i8888to32(p.nextHighestPowerOfTwo(w-I),p.nextHighestPowerOfTwo(V-E),0,0),U=[p.numTo32(e),o,p.i1616to32(I,E),p.i1616to32(w,V),G];if(_){var P=t.vvFields,L=P.opacity?t.getValue(r,P.opacity):0,R=P.color?t.getValue(r,P.color):0;(s||null===R||isNaN(R))&&(R=NaN),(s||null===L||isNaN(L))&&(L=NaN),U.push(p.toUint32(R),p.toUint32(L))}for(var z,A,O,D=!1,F=0,W=h.rings;F<W.length;F++){if(!((X=(de=W[F]).length)<3)){var B=de[0][0],H=de[0][1];if(B<-8||B>520||H<-8||H>520){D=!0;break}for(var j=1;j<X;++j)if(B+=de[j][0],H+=de[j][1],B<-8||B>520||H<-8||H>520){D=!0;break}if(D)break}}if(D){y||(y=new g.TileClipper(0,0,0,1,8)).setExtent(512),y.reset(3);for(var q=0,K=h.rings;q<K.length;q++){var X;if(!((X=(de=K[q]).length)<3)){A=de[0][0],O=de[0][1],y.moveTo(A,O);for(j=1;j<X;++j)A+=de[j][0],O+=de[j][1],y.lineTo(A,O);y.close()}}if(!(z={rings:y.result(!N)}).rings||0===z.rings.length)return null}else z=h;var J,Q,Y,Z,$,ee,te=[],ie=[];if(N){f||(f=new T),f.beginPolygon(x,ie);for(var ne=0,re=z.rings;ne<re.length;ne++){if(!((de=re[ne]).length<3)){f.beginContour(),J=Q=0,D?(A=de[0].x,O=de[0].y):(A=(Y=de[0])[0],O=Y[1]);var le=[A,O,0];f.addVertex(le,le);for(j=1;j<de.length-1;j++){D?(A=de[j].x,O=de[j].y):(A+=J=(Z=de[j])[0],O+=Q=Z[1]);var se=[A,O,0];f.addVertex(se,se)}f.endContour()}}f.endPolygon();for(var oe=0;oe<x.length;oe+=2)te.push(p.i1616to32(x[oe],x[oe+1])),te.push.apply(te,U)}else{for(var ae=0,ue=0,he=void 0,ce=void 0,pe=0,ge=z.rings;pe<ge.length;pe++){var de=ge[pe],ve=ue;D?(A=de[0].x,O=de[0].y):(A=($=de[0])[0],O=$[1]),x[ue++]=A,x[ue++]=O;var ye=0;J=Q=0;for(j=1;j<de.length;++j)D?(ye-=(J=(he=de[j].x)-A)*(O+O+(Q=(ce=de[j].y)-O)),A=he,O=ce):(ye-=(J=(ee=de[j])[0])*(O+O+(Q=ee[1])),A+=J,O+=Q),x[ue++]=A,x[ue++]=O;ye>0?(ve-ae>0&&(S(te,ie,x,ae,ve,m,U),ae=ve),m.length=0):ye<0&&ve-ae>0?m.push(.5*(ve-ae)):ue=ve}ue-ae>0&&S(te,ie,x,ae,ue,m,U)}return x.length=m.length=0,b.update({geometry:te},te.length/(U.length+1),ie),b}(e,t,i,r,w,V,M);case u.WGLGeometryType.LINE:return h.createLineMeshData(e,t,i,r,E,w,V)}return null}}));