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

define([],function(){"use strict";function t(t,r,f,a,i){n(t,r,f||0,a||t.length-1,i||o)}function n(t,o,f,a,i){for(;a>f;){if(a-f>600){var h=a-f+1,u=o-f+1,e=Math.log(h),M=.5*Math.exp(2*e/3),c=.5*Math.sqrt(e*M*(h-M)/h)*(u-h/2<0?-1:1);n(t,o,Math.max(f,Math.floor(o-u*M/h+c)),Math.min(a,Math.floor(o+(h-u)*M/h+c)),i)}var l=t[o],s=f,v=a;for(r(t,f,o),i(t[a],l)>0&&r(t,f,a);s<v;){for(r(t,s,v),s++,v--;i(t[s],l)<0;)s++;for(;i(t[v],l)>0;)v--}0===i(t[f],l)?r(t,f,v):(v++,r(t,v,a)),v<=o&&(f=v+1),o<=v&&(a=v-1)}}function r(t,n,r){var o=t[n];t[n]=t[r],t[r]=o}function o(t,n){return t<n?-1:t>n?1:0}return t});