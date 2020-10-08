// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define([],(function(){var e=function(e,n,r,t){var u=3*e,a=3*(r-e)-u,i=1-u-a,f=3*n,o=3*(t-n)-f,s=1-f-o;function c(e){return((i*e+a)*e+u)*e}return function(e,n){return function(e){return((s*e+o)*e+f)*e}(function(e,n){var r,t,f,o,s,l,b;for(n=null==n?1e-6:n,f=e,l=0;l<8;l++){if(o=c(f)-e,Math.abs(o)<n)return f;if(s=(3*i*(b=f)+2*a)*b+u,Math.abs(s)<1e-6)break;f-=o/s}if((f=e)<(r=0))return r;if(f>(t=1))return t;for(;r<t;){if(o=c(f),Math.abs(o-e)<n)return f;e>o?r=f:t=f,f=.5*(t-r)+r}return f}(e,n))}},n=/^cubic-bezier\((.*)\)/;return e.parse=function(r){var t=e[r]||null;if(!t){var u=n.exec(r);if(u){var a=u[1].split(",").map((function(e){return parseFloat(e.trim())}));4!==a.length||a.some((function(e){return isNaN(e)}))||(t=e.apply(e,a))}}return t},e.ease=e(.25,.1,.25,1),e.linear=e(0,0,1,1),e.easeIn=e["ease-in"]=e(.42,0,1,1),e.easeOut=e["ease-out"]=e(0,0,.58,1),e.easeInOut=e["ease-in-out"]=e(.42,0,.58,1),e}));