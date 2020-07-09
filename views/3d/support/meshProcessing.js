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

define(["require","exports"],(function(r,n){Object.defineProperty(n,"__esModule",{value:!0}),n.computeNeighbors=function(r,n){for(var e=r.length/3,o=new Uint32Array(n+1),a=new Uint32Array(n+1),f=function(r,n){r<n?o[r+1]++:a[n+1]++},t=0;t<e;t++){var v=r[3*t],i=r[3*t+1],u=r[3*t+2];f(v,i),f(i,u),f(u,v)}var c=0,y=0;for(t=0;t<n;t++){var l=o[t+1],s=a[t+1];o[t+1]=c,a[t+1]=y,c+=l,y+=s}var w=new Uint32Array(6*e),A=o[n],d=function(r,n,e){if(r<n){var f=o[r+1]++;w[2*f]=n,w[2*f+1]=e}else{f=a[n+1]++;w[2*A+2*f]=r,w[2*A+2*f+1]=e}};for(t=0;t<e;t++){v=r[3*t],i=r[3*t+1],u=r[3*t+2];d(v,i,t),d(i,u,t),d(u,v,t)}var p=function(r,n){for(var e=2*r,o=n-r,a=1;a<o;a++){for(var f=w[e+2*a],t=w[e+2*a+1],v=a-1;v>=0&&w[e+2*v]>f;v--)w[e+2*v+2]=w[e+2*v],w[e+2*v+3]=w[e+2*v+1];w[e+2*v+2]=f,w[e+2*v+3]=t}};for(t=0;t<n;t++)p(o[t],o[t+1]),p(A+a[t],A+a[t+1]);var U=new Int32Array(3*e),b=function(n,e){return n===r[3*e]?0:n===r[3*e+1]?1:n===r[3*e+2]?2:-1},g=function(r,n){var e=b(r,n);U[3*n+e]=-1},h=function(r,n,e,o){var a=b(r,n);U[3*n+a]=o;var f=b(e,o);U[3*o+f]=n};for(t=0;t<n;t++){for(var _=o[t],j=o[t+1],m=a[t],q=a[t+1];_<j&&m<q;){var x=w[2*_];x===(I=w[2*A+2*m])?(h(t,w[2*_+1],I,w[2*A+2*m+1]),_++,m++):x<I?(g(t,w[2*_+1]),_++):(g(I,w[2*A+2*m+1]),m++)}for(;_<j;)g(t,w[2*_+1]),_++;for(;m<q;){var I;g(I=w[2*A+2*m],w[2*A+2*m+1]),m++}}return U}}));