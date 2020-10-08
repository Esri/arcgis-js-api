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

define(["require","exports"],(function(r,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.computeNeighbors=void 0,n.computeNeighbors=function(r,n){for(var e=r.length/3,o=new Uint32Array(n+1),t=new Uint32Array(n+1),a=function(r,n){r<n?o[r+1]++:t[n+1]++},f=0;f<e;f++){var i=r[3*f],v=r[3*f+1],u=r[3*f+2];a(i,v),a(v,u),a(u,i)}var c=0,s=0;for(f=0;f<n;f++){var y=o[f+1],d=t[f+1];o[f+1]=c,t[f+1]=s,c+=y,s+=d}var l=new Uint32Array(6*e),p=o[n],w=function(r,n,e){if(r<n){var a=o[r+1]++;l[2*a]=n,l[2*a+1]=e}else{a=t[n+1]++;l[2*p+2*a]=r,l[2*p+2*a+1]=e}};for(f=0;f<e;f++){i=r[3*f],v=r[3*f+1],u=r[3*f+2];w(i,v,f),w(v,u,f),w(u,i,f)}var A=function(r,n){for(var e=2*r,o=n-r,t=1;t<o;t++){for(var a=l[e+2*t],f=l[e+2*t+1],i=t-1;i>=0&&l[e+2*i]>a;i--)l[e+2*i+2]=l[e+2*i],l[e+2*i+3]=l[e+2*i+1];l[e+2*i+2]=a,l[e+2*i+3]=f}};for(f=0;f<n;f++)A(o[f],o[f+1]),A(p+t[f],p+t[f+1]);var b=new Int32Array(3*e),g=function(n,e){return n===r[3*e]?0:n===r[3*e+1]?1:n===r[3*e+2]?2:-1},h=function(r,n){var e=g(r,n);b[3*n+e]=-1},U=function(r,n,e,o){var t=g(r,n);b[3*n+t]=o;var a=g(e,o);b[3*o+a]=n};for(f=0;f<n;f++){for(var m=o[f],N=o[f+1],_=t[f],j=t[f+1];m<N&&_<j;){var q=l[2*m];q===(x=l[2*p+2*_])?(U(f,l[2*m+1],x,l[2*p+2*_+1]),m++,_++):q<x?(h(f,l[2*m+1]),m++):(h(x,l[2*p+2*_+1]),_++)}for(;m<N;)h(f,l[2*m+1]),m++;for(;_<j;){var x;h(x=l[2*p+2*_],l[2*p+2*_+1]),_++}}return b}}));