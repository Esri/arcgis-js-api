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

define([],(function(){"use strict";function t(t,n,r){var o=t[n];t[n]=t[r],t[r]=o}function n(t,n){return t<n?-1:t>n?1:0}return function(r,o,f,a,i){!function n(r,o,f,a,i){for(;a>f;){if(a-f>600){var h=a-f+1,u=o-f+1,e=Math.log(h),M=.5*Math.exp(2*e/3),c=.5*Math.sqrt(e*M*(h-M)/h)*(u-h/2<0?-1:1),l=Math.max(f,Math.floor(o-u*M/h+c)),s=Math.min(a,Math.floor(o+(h-u)*M/h+c));n(r,o,l,s,i)}var v=r[o],g=f,m=a;for(t(r,f,o),i(r[a],v)>0&&t(r,f,a);g<m;){for(t(r,g,m),g++,m--;i(r[g],v)<0;)g++;for(;i(r[m],v)>0;)m--}0===i(r[f],v)?t(r,f,m):(m++,t(r,m,a)),m<=o&&(f=m+1),o<=m&&(a=m-1)}}(r,o,f||0,a||r.length-1,i||n)}}));