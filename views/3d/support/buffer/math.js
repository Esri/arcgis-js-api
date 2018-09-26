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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});!function(e){function t(e,t,n){if(e.count!==t.count)return void console.error("input and output buffers need to have the same number of elements");for(var o=e.count,r=n[0],u=n[1],s=n[2],c=n[3],f=n[4],a=n[5],i=n[6],v=n[7],g=n[8],d=n[9],m=n[10],l=n[11],p=n[12],b=n[13],h=n[14],M=n[15],_=0;_<o;_++){var j=t.get(_,0),q=t.get(_,1),x=t.get(_,2),y=c*j+v*q+l*x+M;y=y||1,e.set(_,0,(r*j+f*q+g*x+p)/y),e.set(_,1,(u*j+a*q+d*x+b)/y),e.set(_,2,(s*j+i*q+m*x+h)/y)}}function n(e,t,n){if(e.count!==t.count)return void console.error("input and output buffers need to have the same number of elements");for(var o=e.count,r=n[0],u=n[1],s=n[2],c=n[3],f=n[4],a=n[5],i=n[6],v=n[7],g=n[8],d=0;d<o;d++){var m=t.get(d,0),l=t.get(d,1),p=t.get(d,2);e.set(d,0,r*m+c*l+i*p),e.set(d,1,u*m+f*l+v*p),e.set(d,2,s*m+a*l+g*p)}}e.transformMat4=t,e.transformMat3=n}(t.vec3||(t.vec3={}));!function(e){function t(e,t,n){for(var o=Math.min(e.count,t.count),r=0;r<o;r++)e.set(r,0,t.get(r,0)*n),e.set(r,1,t.get(r,1)*n),e.set(r,2,t.get(r,2)*n),e.set(r,3,t.get(r,3)*n)}e.scale=t}(t.vec4||(t.vec4={}))});