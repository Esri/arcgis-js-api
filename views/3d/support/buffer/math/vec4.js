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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./common"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shiftRight=t.scale=t.transformMat3=t.transformMat4=void 0,t.transformMat4=function(e,t,f){if(e.count===t.count)for(var n=e.count,o=f[0],u=f[1],d=f[2],i=f[3],a=f[4],s=f[5],c=f[6],p=f[7],y=f[8],B=f[9],m=f[10],v=f[11],h=f[12],l=f[13],S=f[14],M=f[15],g=e.typedBuffer,b=e.typedBufferStride,R=t.typedBuffer,_=t.typedBufferStride,j=0;j<n;j++){var q=j*b,x=j*_,O=R[x],P=R[x+1],k=R[x+2],w=R[x+3];g[q]=o*O+a*P+y*k+h*w,g[q+1]=u*O+s*P+B*k+l*w,g[q+2]=d*O+c*P+m*k+S*w,g[q+3]=i*O+p*P+v*k+M*w}else r.logger.error("source and destination buffers need to have the same number of elements")},t.transformMat3=function(e,t,f){if(e.count===t.count)for(var n=e.count,o=f[0],u=f[1],d=f[2],i=f[3],a=f[4],s=f[5],c=f[6],p=f[7],y=f[8],B=e.typedBuffer,m=e.typedBufferStride,v=t.typedBuffer,h=t.typedBufferStride,l=0;l<n;l++){var S=l*m,M=l*h,g=v[M],b=v[M+1],R=v[M+2],_=v[M+3];B[S]=o*g+i*b+c*R,B[S+1]=u*g+a*b+p*R,B[S+2]=d*g+s*b+y*R,B[S+3]=_}else r.logger.error("source and destination buffers need to have the same number of elements")},t.scale=function(e,t,r){for(var f=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride,i=0;i<f;i++){var a=i*o,s=i*d;n[a]=r*u[s],n[a+1]=r*u[s+1],n[a+2]=r*u[s+2],n[a+3]=r*u[s+3]}},t.shiftRight=function(e,t,r){for(var f=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride,i=0;i<f;i++){var a=i*o,s=i*d;n[a]=u[s]>>r,n[a+1]=u[s+1]>>r,n[a+2]=u[s+2]>>r,n[a+3]=u[s+3]>>r}}}));