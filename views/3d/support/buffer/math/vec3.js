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

define(["require","exports","./common"],function(e,r,t){function f(e,r,f){if(e.count!==r.count)return void t.logger.error("source and destination buffers need to have the same number of elements");for(var o=e.count,n=f[0],u=f[1],d=f[2],i=f[4],a=f[5],s=f[6],c=f[8],m=f[9],p=f[10],v=f[12],y=f[13],B=f[14],l=e.typedBuffer,b=e.typedBufferStride,g=r.typedBuffer,h=r.typedBufferStride,S=0;S<o;S++){var M=S*b,_=S*h,j=g[_],q=g[_+1],x=g[_+2];l[M]=n*j+i*q+c*x+v,l[M+1]=u*j+a*q+m*x+y,l[M+2]=d*j+s*q+p*x+B}}function o(e,r,f){if(e.count!==r.count)return void t.logger.error("source and destination buffers need to have the same number of elements");for(var o=e.count,n=f[0],u=f[1],d=f[2],i=f[3],a=f[4],s=f[5],c=f[6],m=f[7],p=f[8],v=e.typedBuffer,y=e.typedBufferStride,B=r.typedBuffer,l=r.typedBufferStride,b=0;b<o;b++){var g=b*y,h=b*l,S=B[h],M=B[h+1],_=B[h+2];v[g]=n*S+i*M+c*_,v[g+1]=u*S+a*M+m*_,v[g+2]=d*S+s*M+p*_}}Object.defineProperty(r,"__esModule",{value:!0}),r.transformMat4=f,r.transformMat3=o});