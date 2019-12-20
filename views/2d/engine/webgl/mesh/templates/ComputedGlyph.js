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

define(["require","exports","../../../../../../core/libs/gl-matrix-2/vec2","../../../../../../core/libs/gl-matrix-2/vec2f32","../../definitions","../../number","../../collisions/BoundingBox"],function(t,e,q,i,K,Y,k){Object.defineProperty(e,"__esModule",{value:!0});var E=i.vec2f32.create(),o=function(){function j(t,e,i,o,r,h,n,s,a,f,c,d,v,u,l){this.anchorX=t,this.anchorY=e,this.angle=i,this.bounds=o,this.minZoom=r,this.maxZoom=h,this.materialKey=n,this.vertexOffsetUpperLeft=s,this.vertexOffsetUpperRight=a,this.vertexOffsetLowerLeft=f,this.vertexOffsetLowerRight=c,this.texFontSizeUpperLeft=d,this.texFontSizeUpperRight=v,this.texFontSizeLowerLeft=u,this.texFontSizeLowerRight=l}return j.from=function(t,e,i,o,r,h,n,s,a,f,c,d,v,u,l){void 0===u&&(u=!1),void 0===l&&(l=!1);var m=s.rect,x=s.metrics,g=-1===r?255:Math.floor(180*r/Math.PI/360*254),p=Math.round(m.x/4),L=Math.round(m.y/4),M=p+Math.round(m.width/4),w=L+Math.round(m.height/4),O=-24-x.top,I=x.left,S=-x.top,_=m.width,b=m.height;!a&&(l||(O=0),I=4,_=x.width);var z=t+I,B=l?e+S:e+O,D=z+_,F=B,N=z,P=B+b,R=D,U=P,y=N+x.width,X=P-x.height,A=x.width*d/24,C=x.height*d/24;if(c){var G=E,Z=c;q.vec2.transformMat2d(G,q.vec2.set(G,z,B),Z),z=G[0],B=G[1],q.vec2.transformMat2d(G,q.vec2.set(G,D,F),Z),D=G[0],F=G[1],q.vec2.transformMat2d(G,q.vec2.set(G,N,P),Z),N=G[0],P=G[1],q.vec2.transformMat2d(G,q.vec2.set(G,R,U),Z),R=G[0],U=G[1],q.vec2.transformMat2d(G,q.vec2.set(G,y,X),Z),y=G[0],X=G[1]}return new j(0|i,0|o,g,u?new k.default(y,X,A+K.COLLISION_BOX_PADDING,C+K.COLLISION_BOX_PADDING):null,h,n,f,Y.i1616to32(8*z,8*B),Y.i1616to32(8*D,8*F),Y.i1616to32(8*N,8*P),Y.i1616to32(8*R,8*U),Y.i8888to32(p,L,d,v),Y.i8888to32(M,L,d,v),Y.i8888to32(p,w,d,v),Y.i8888to32(M,w,d,v))},j}();e.default=o});