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

define(["require","exports","./common"],(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.transformMat4=function(e,t,f){if(e.count===t.count)for(var u=e.count,n=f[0],o=f[1],d=f[2],i=f[3],a=f[4],c=f[5],p=f[6],s=f[7],y=f[8],B=f[9],m=f[10],v=f[11],l=f[12],h=f[13],S=f[14],b=f[15],g=e.typedBuffer,M=e.typedBufferStride,_=t.typedBuffer,j=t.typedBufferStride,q=0;q<u;q++){var x=q*M,O=q*j,P=_[O],R=_[O+1],k=_[O+2],w=_[O+3];g[x]=n*P+a*R+y*k+l*w,g[x+1]=o*P+c*R+B*k+h*w,g[x+2]=d*P+p*R+m*k+S*w,g[x+3]=i*P+s*R+v*k+b*w}else r.logger.error("source and destination buffers need to have the same number of elements")},t.transformMat3=function(e,t,f){if(e.count===t.count)for(var u=e.count,n=f[0],o=f[1],d=f[2],i=f[3],a=f[4],c=f[5],p=f[6],s=f[7],y=f[8],B=e.typedBuffer,m=e.typedBufferStride,v=t.typedBuffer,l=t.typedBufferStride,h=0;h<u;h++){var S=h*m,b=h*l,g=v[b],M=v[b+1],_=v[b+2],j=v[b+3];B[S]=n*g+i*M+p*_,B[S+1]=o*g+a*M+s*_,B[S+2]=d*g+c*M+y*_,B[S+3]=j}else r.logger.error("source and destination buffers need to have the same number of elements")},t.scale=function(e,t,r){for(var f=Math.min(e.count,t.count),u=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,d=t.typedBufferStride,i=0;i<f;i++){var a=i*n,c=i*d;u[a]=r*o[c],u[a+1]=r*o[c+1],u[a+2]=r*o[c+2],u[a+3]=r*o[c+3]}},t.shiftRight=function(e,t,r){for(var f=Math.min(e.count,t.count),u=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,d=t.typedBufferStride,i=0;i<f;i++){var a=i*n,c=i*d;u[a]=o[c]>>r,u[a+1]=o[c+1]>>r,u[a+2]=o[c+2]>>r,u[a+3]=o[c+3]>>r}}}));