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

define(["require","exports","../../../../../../core/libs/gl-matrix-2/gl-matrix","../../definitions","../../number","../../collisions/BoundingBox"],function(t,e,q,Y,k,E){Object.defineProperty(e,"__esModule",{value:!0});var H=q.vec2f32.create(),i=function(){function j(t,e,i,o,r,h,n,s,a,f,d,c,v,u,l){this.anchorX=t,this.anchorY=e,this.angle=i,this.bounds=o,this.minZoom=r,this.maxZoom=h,this.materialId=n,this.vertexOffsetUpperLeft=s,this.vertexOffsetUpperRight=a,this.vertexOffsetLowerLeft=f,this.vertexOffsetLowerRight=d,this.texFontSizeUpperLeft=c,this.texFontSizeUpperRight=v,this.texFontSizeLowerLeft=u,this.texFontSizeLowerRight=l}return j.from=function(t,e,i,o,r,h,n,s,a,f,d,c,v,u,l){void 0===u&&(u=!1),void 0===l&&(l=!1);var m=s.rect,x=s.metrics,g=-1===r?255:Math.floor(180*r/Math.PI/360*254),p=Math.round(m.x/4),L=Math.round(m.y/4),M=p+Math.round(m.width/4),w=L+Math.round(m.height/4),O=-24-x.top,I=x.left,S=-x.top,_=m.width,b=m.height;!a&&(l||(O=0),I=4,_=x.width);var z=t+I,B=l?e+S:e+O,D=z+_,F=B,N=z,P=B+b,R=D,U=P,X=N+x.width,y=P-x.height,A=x.width*c/24,C=x.height*c/24;if(d){var G=H,Z=d;q.vec2.transformMat2d(G,q.vec2.set(G,z,B),Z),z=G[0],B=G[1],q.vec2.transformMat2d(G,q.vec2.set(G,D,F),Z),D=G[0],F=G[1],q.vec2.transformMat2d(G,q.vec2.set(G,N,P),Z),N=G[0],P=G[1],q.vec2.transformMat2d(G,q.vec2.set(G,R,U),Z),R=G[0],U=G[1],q.vec2.transformMat2d(G,q.vec2.set(G,X,y),Z),X=G[0],y=G[1]}return new j(0|i,0|o,g,u?new E.default(X,y,A+Y.COLLISION_BOX_PADDING,C+Y.COLLISION_BOX_PADDING):null,h,n,f,k.i1616to32(8*z,8*B),k.i1616to32(8*D,8*F),k.i1616to32(8*N,8*P),k.i1616to32(8*R,8*U),k.i8888to32(p,L,c,v),k.i8888to32(M,L,c,v),k.i8888to32(p,w,c,v),k.i8888to32(M,w,c,v))},j}();e.default=i});