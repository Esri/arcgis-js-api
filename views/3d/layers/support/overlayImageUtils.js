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

define(["require","exports","../../../../geometry/support/aaBoundingRect","../../webgl-engine/lib/GeometryData","../../webgl-engine/lib/GeometryUtil","../../webgl-engine/lib/Util"],(function(t,e,r,a,n,i){function o(t,e){var r=[[t[0],t[1],e],[t[2],t[1],e],[t[2],t[3],e],[t[0],t[3],e]];return n.createSquareGeometry(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.computeImageExportSize=function(t,e,a){var n=r.width(t)/r.height(t),i={width:a,height:a};return n>1.0001?i.height=a/n:n<.9999&&(i.width=a*n),i.width=Math.round(i.width/(r.width(t)/r.width(e))),i.height=Math.round(i.height/(r.height(t)/r.height(e))),i},e.createGeometryForExtent=o,e.createOuterImageGeometry=function(t,e,n){if(!r.intersects(t,e))return o(e,n);for(var s=[t[1]-e[1],Math.min(t[3],e[3])-Math.max(t[1],e[1]),e[3]-t[3],123456],g=[t[0]-e[0],Math.min(t[2],e[2])-Math.max(t[0],e[0]),e[2]-t[2],123456],u=e[2]-e[0],d=e[3]-e[1],w=g[0]>0&&g[2]>0?3:2,l=s[0]>0&&s[2]>0?3:2,m=(l+1)*(w+1),y=new Float64Array(3*m),A=new Float32Array(2*m),c=new Uint32Array(6*(l*w-1)),f=0,x=0,v=0,M=0,O=0,V=0;V<4;V++){var b=s[V];if(!(b<=0)){for(var p=0,C=0;C<4;C++){var G=g[C];G<=0||(y[x++]=e[0]+p,y[x++]=e[1]+f,y[x++]=n,A[v++]=p/u,A[v++]=f/d,C<3&&V<3&&(1!==C||1!==V)&&(c[O++]=M,c[O++]=M+1,c[O++]=M+w+1,c[O++]=M+1,c[O++]=M+w+2,c[O++]=M+w+1),M++,p+=G)}f+=b}}var I={};I[i.VertexAttrConstants.POSITION]={size:3,data:y},I[i.VertexAttrConstants.NORMAL]={size:3,data:h},I[i.VertexAttrConstants.UV0]={size:2,data:A};for(var U={},z=new Uint32Array(c.length),F=0;F<z.length;F++)z[F]=0;return U[i.VertexAttrConstants.POSITION]=c,U[i.VertexAttrConstants.NORMAL]=z,U[i.VertexAttrConstants.UV0]=c,new a.GeometryData(I,U)};var h=new Float32Array([0,0,1])}));