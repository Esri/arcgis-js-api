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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define([],function(){"use strict";function t(t,r,f,a,i){n(t,r,f||0,a||t.length-1,i||o)}function n(t,o,f,a,i){for(;a>f;){if(a-f>600){var h=a-f+1,u=o-f+1,e=Math.log(h),M=.5*Math.exp(2*e/3),c=.5*Math.sqrt(e*M*(h-M)/h)*(0>u-h/2?-1:1),l=Math.max(f,Math.floor(o-u*M/h+c)),s=Math.min(a,Math.floor(o+(h-u)*M/h+c));n(t,o,l,s,i)}var v=t[o],g=f,m=a;for(r(t,f,o),i(t[a],v)>0&&r(t,f,a);m>g;){for(r(t,g,m),g++,m--;i(t[g],v)<0;)g++;for(;i(t[m],v)>0;)m--}0===i(t[f],v)?r(t,f,m):(m++,r(t,m,a)),o>=m&&(f=m+1),m>=o&&(a=m-1)}}function r(t,n,r){var o=t[n];t[n]=t[r],t[r]=o}function o(t,n){return n>t?-1:t>n?1:0}return t});