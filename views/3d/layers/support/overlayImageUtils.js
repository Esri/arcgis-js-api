// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../support/aaBoundingRect","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/Util"],function(t,e,r,n,a,o){function i(t,e){var r=[[t[0],t[1],e],[t[2],t[1],e],[t[2],t[3],e],[t[0],t[3],e]];return a.createSquareGeometry(r)}function s(t,e,a){if(!r.intersects(t,e))return i(e,a);for(var s=[t[1]-e[1],Math.min(t[3],e[3])-Math.max(t[1],e[1]),e[3]-t[3],123456],u=[t[0]-e[0],Math.min(t[2],e[2])-Math.max(t[0],e[0]),e[2]-t[2],123456],A=e[2]-e[0],y=e[3]-e[1],f=u[0]>0&&u[2]>0?3:2,g=s[0]>0&&s[2]>0?3:2,m=(g+1)*(f+1),x=new Float32Array(3*m),c=new Float32Array(2*m),v=new Uint32Array(6*(g*f-1)),w=0,O=0,V=0,b=0,d=0,M=0;4>M;M++){var h=s[M];if(!(0>=h)){for(var C=0,U=0;4>U;U++){var G=u[U];0>=G||(x[O++]=e[0]+C,x[O++]=e[1]+w,x[O++]=a,c[V++]=C/A,c[V++]=w/y,3>U&&3>M&&(1!==U||1!==M)&&(v[d++]=b,v[d++]=b+1,v[d++]=b+f+1,v[d++]=b+1,v[d++]=b+f+2,v[d++]=b+f+1),b++,C+=G)}w+=h}}var I={};I[o.VertexAttrConstants.POSITION]={size:3,data:x},I[o.VertexAttrConstants.NORMAL]={size:3,data:l},I[o.VertexAttrConstants.UV0]={size:2,data:c};for(var p={},F=new Uint32Array(v.length),N=0;N<F.length;N++)F[N]=0;return p[o.VertexAttrConstants.POSITION]=v,p[o.VertexAttrConstants.NORMAL]=F,p[o.VertexAttrConstants.UV0]=v,new n(I,p)}Object.defineProperty(e,"__esModule",{value:!0});var l=new Float32Array([0,0,1]);e.createGeometryForExtent=i,e.createOuterImageGeometry=s});