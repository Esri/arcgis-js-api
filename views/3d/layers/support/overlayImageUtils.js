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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/support/aaBoundingRect","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/Util"],function(e,t,r,n,a,o){function i(e,t){var r=[[e[0],e[1],t],[e[2],e[1],t],[e[2],e[3],t],[e[0],e[3],t]];return a.createSquareGeometry(r)}function s(e,t,a){if(!r.intersects(e,t))return i(t,a);for(var s=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],u=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],A=t[2]-t[0],y=t[3]-t[1],g=u[0]>0&&u[2]>0?3:2,m=s[0]>0&&s[2]>0?3:2,f=(m+1)*(g+1),x=new Float32Array(3*f),c=new Float32Array(2*f),v=new Uint32Array(6*(m*g-1)),w=0,O=0,V=0,b=0,d=0,M=0;M<4;M++){var h=s[M];if(!(h<=0)){for(var C=0,U=0;U<4;U++){var G=u[U];G<=0||(x[O++]=t[0]+C,x[O++]=t[1]+w,x[O++]=a,c[V++]=C/A,c[V++]=w/y,U<3&&M<3&&(1!==U||1!==M)&&(v[d++]=b,v[d++]=b+1,v[d++]=b+g+1,v[d++]=b+1,v[d++]=b+g+2,v[d++]=b+g+1),b++,C+=G)}w+=h}}var I={};I[o.VertexAttrConstants.POSITION]={size:3,data:x},I[o.VertexAttrConstants.NORMAL]={size:3,data:l},I[o.VertexAttrConstants.UV0]={size:2,data:c};for(var p={},F=new Uint32Array(v.length),N=0;N<F.length;N++)F[N]=0;return p[o.VertexAttrConstants.POSITION]=v,p[o.VertexAttrConstants.NORMAL]=F,p[o.VertexAttrConstants.UV0]=v,new n(I,p)}Object.defineProperty(t,"__esModule",{value:!0});var l=new Float32Array([0,0,1]);t.createGeometryForExtent=i,t.createOuterImageGeometry=s});