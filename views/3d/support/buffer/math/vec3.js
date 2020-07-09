// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","./common"],(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.transformMat4=function(e,t,f){if(e.count===t.count)for(var u=e.count,n=f[0],o=f[1],d=f[2],i=f[4],a=f[5],c=f[6],p=f[8],s=f[9],y=f[10],B=f[12],m=f[13],v=f[14],l=e.typedBuffer,h=e.typedBufferStride,S=t.typedBuffer,b=t.typedBufferStride,g=0;g<u;g++){var M=g*h,_=g*b,j=S[_],q=S[_+1],x=S[_+2];l[M]=n*j+i*q+p*x+B,l[M+1]=o*j+a*q+s*x+m,l[M+2]=d*j+c*q+y*x+v}else r.logger.error("source and destination buffers need to have the same number of elements")},t.transformMat3=function(e,t,f){if(e.count===t.count)for(var u=e.count,n=f[0],o=f[1],d=f[2],i=f[3],a=f[4],c=f[5],p=f[6],s=f[7],y=f[8],B=e.typedBuffer,m=e.typedBufferStride,v=t.typedBuffer,l=t.typedBufferStride,h=0;h<u;h++){var S=h*m,b=h*l,g=v[b],M=v[b+1],_=v[b+2];B[S]=n*g+i*M+p*_,B[S+1]=o*g+a*M+s*_,B[S+2]=d*g+c*M+y*_}else r.logger.error("source and destination buffers need to have the same number of elements")},t.scale=function(e,t,r){for(var f=Math.min(e.count,t.count),u=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,d=t.typedBufferStride,i=0;i<f;i++){var a=i*n,c=i*d;u[a]=r*o[c],u[a+1]=r*o[c+1],u[a+2]=r*o[c+2]}},t.shiftRight=function(e,t,r){for(var f=Math.min(e.count,t.count),u=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,d=t.typedBufferStride,i=0;i<f;i++){var a=i*n,c=i*d;u[a]=o[c]>>r,u[a+1]=o[c+1]>>r,u[a+2]=o[c+2]>>r}}}));