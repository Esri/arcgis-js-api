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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});!function(e){function t(e,t,n){if(e.count!==t.count)return void console.error("input and output buffers need to have the same number of elements");for(var o=e.count,r=n[0],u=n[1],f=n[2],s=n[3],a=n[4],c=n[5],i=n[6],v=n[7],d=n[8],m=n[9],g=n[10],l=n[11],p=n[12],b=n[13],h=n[14],M=n[15],_=0;_<o;_++){var j=t.get(_,0),q=t.get(_,1),x=t.get(_,2),y=s*j+v*q+l*x+M;y=y||1,e.set(_,0,(r*j+a*q+d*x+p)/y),e.set(_,1,(u*j+c*q+m*x+b)/y),e.set(_,2,(f*j+i*q+g*x+h)/y)}}function n(e,t,n){if(e.count!==t.count)return void console.error("input and output buffers need to have the same number of elements");for(var o=e.count,r=n[0],u=n[1],f=n[2],s=n[3],a=n[4],c=n[5],i=n[6],v=n[7],d=n[8],m=0;m<o;m++){var g=t.get(m,0),l=t.get(m,1),p=t.get(m,2);e.set(m,0,r*g+s*l+i*p),e.set(m,1,u*g+a*l+v*p),e.set(m,2,f*g+c*l+d*p)}}e.transformMat4=t,e.transformMat3=n}(t.vec3f||(t.vec3f={}))});