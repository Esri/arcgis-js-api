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

define(["require","exports","./common"],function(e,r,t){function f(e,r,f){if(e.count!==r.count)return void t.logger.error("source and destination buffers need to have the same number of elements");for(var n=e.count,o=f[0],u=f[1],d=f[2],i=f[4],a=f[5],c=f[6],s=f[8],p=f[9],y=f[10],B=f[12],m=f[13],v=f[14],l=e.typedBuffer,S=e.typedBufferStride,b=r.typedBuffer,h=r.typedBufferStride,g=0;g<n;g++){var M=g*S,_=g*h,j=b[_],q=b[_+1],x=b[_+2];l[M]=o*j+i*q+s*x+B,l[M+1]=u*j+a*q+p*x+m,l[M+2]=d*j+c*q+y*x+v}}function n(e,r,f){if(e.count!==r.count)return void t.logger.error("source and destination buffers need to have the same number of elements");for(var n=e.count,o=f[0],u=f[1],d=f[2],i=f[3],a=f[4],c=f[5],s=f[6],p=f[7],y=f[8],B=e.typedBuffer,m=e.typedBufferStride,v=r.typedBuffer,l=r.typedBufferStride,S=0;S<n;S++){var b=S*m,h=S*l,g=v[h],M=v[h+1],_=v[h+2];B[b]=o*g+i*M+s*_,B[b+1]=u*g+a*M+p*_,B[b+2]=d*g+c*M+y*_}}function o(e,r,t){for(var f=Math.min(e.count,r.count),n=e.typedBuffer,o=e.typedBufferStride,u=r.typedBuffer,d=r.typedBufferStride,i=0;i<f;i++){var a=i*o,c=i*d;n[a]=t*u[c],n[a+1]=t*u[c+1],n[a+2]=t*u[c+2]}}Object.defineProperty(r,"__esModule",{value:!0}),r.transformMat4=f,r.transformMat3=n,r.scale=o});