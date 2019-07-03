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

define(["require","exports"],function(r,n){function a(r,n){for(var a=r.length/3,e=new Uint32Array(n+1),o=new Uint32Array(n+1),f=function(r,n){r<n?e[r+1]++:o[n+1]++},t=0;t<a;t++){var v=r[3*t],i=r[3*t+1],u=r[3*t+2];f(v,i),f(i,u),f(u,v)}for(var c=0,y=0,t=0;t<n;t++){var l=e[t+1],s=o[t+1];e[t+1]=c,o[t+1]=y,c+=l,y+=s}for(var w=new Uint32Array(6*a),A=e[n],d=function(r,n,a){if(r<n){var f=e[r+1]++;w[2*f]=n,w[2*f+1]=a}else{var f=o[n+1]++;w[2*A+2*f]=r,w[2*A+2*f+1]=a}},t=0;t<a;t++){var v=r[3*t],i=r[3*t+1],u=r[3*t+2];d(v,i,t),d(i,u,t),d(u,v,t)}for(var p=function(r,n){for(var a=2*r,e=n-r,o=1;o<e;o++){var f=w[a+2*o],t=w[a+2*o+1],v=o-1;for(v;v>=0&&w[a+2*v]>f;v--)w[a+2*v+2]=w[a+2*v],w[a+2*v+3]=w[a+2*v+1];w[a+2*v+2]=f,w[a+2*v+3]=t}},t=0;t<n;t++)p(e[t],e[t+1]),p(A+o[t],A+o[t+1]);for(var U=new Int32Array(3*a),b=function(n,a){return n===r[3*a]?0:n===r[3*a+1]?1:n===r[3*a+2]?2:-1},g=function(r,n){var a=b(r,n);U[3*n+a]=-1},t=0;t<n;t++){for(var h=e[t],_=e[t+1],j=o[t],m=o[t+1];h<_&&j<m;){var q=w[2*h],x=w[2*A+2*j];q===x?(!function(r,n,a,e){var o=b(r,n);U[3*n+o]=e;var f=b(a,e);U[3*e+f]=n}(t,w[2*h+1],x,w[2*A+2*j+1]),h++,j++):q<x?(g(t,w[2*h+1]),h++):(g(x,w[2*A+2*j+1]),j++)}for(;h<_;)g(t,w[2*h+1]),h++;for(;j<m;){var x=w[2*A+2*j];g(x,w[2*A+2*j+1]),j++}}return U}Object.defineProperty(n,"__esModule",{value:!0}),n.computeNeighbors=a});