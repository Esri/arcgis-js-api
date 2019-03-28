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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./common"],function(e,r,t){function f(e,r,f){if(e.count!==r.count)return void t.logger.error("source and destination buffers need to have the same number of elements");for(var n=e.count,o=f[0],u=f[1],d=f[2],i=f[3],a=f[4],c=f[5],s=f[6],p=f[7],y=f[8],B=f[9],m=f[10],v=f[11],l=f[12],S=f[13],b=f[14],h=f[15],g=e.typedBuffer,M=e.typedBufferStride,_=r.typedBuffer,j=r.typedBufferStride,q=0;q<n;q++){var x=q*M,O=q*j,P=_[O],k=_[O+1],w=_[O+2],z=_[O+3];g[x]=o*P+a*k+y*w+l*z,g[x+1]=u*P+c*k+B*w+S*z,g[x+2]=d*P+s*k+m*w+b*z,g[x+3]=i*P+p*k+v*w+h*z}}function n(e,r,f){if(e.count!==r.count)return void t.logger.error("source and destination buffers need to have the same number of elements");for(var n=e.count,o=f[0],u=f[1],d=f[2],i=f[3],a=f[4],c=f[5],s=f[6],p=f[7],y=f[8],B=e.typedBuffer,m=e.typedBufferStride,v=r.typedBuffer,l=r.typedBufferStride,S=0;S<n;S++){var b=S*m,h=S*l,g=v[h],M=v[h+1],_=v[h+2],j=v[h+3];B[b]=o*g+i*M+s*_,B[b+1]=u*g+a*M+p*_,B[b+2]=d*g+c*M+y*_,B[b+3]=j}}function o(e,r,t){for(var f=Math.min(e.count,r.count),n=e.typedBuffer,o=e.typedBufferStride,u=r.typedBuffer,d=r.typedBufferStride,i=0;i<f;i++){var a=i*o,c=i*d;n[a]=t*u[c],n[a+1]=t*u[c+1],n[a+2]=t*u[c+2],n[a+3]=t*u[c+3]}}Object.defineProperty(r,"__esModule",{value:!0}),r.transformMat4=f,r.transformMat3=n,r.scale=o});