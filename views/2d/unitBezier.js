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

define(["require","exports"],(function(n,e){function i(n,e,i,t){var r=3*n,u=3*(i-n)-r,a=1-r-u,s=3*e,o=3*(t-e)-s,c=1-s-o;function f(n){return((a*n+u)*n+r)*n}return function(n,e){return void 0===e&&(e=1e-6),function(n){return((c*n+o)*n+s)*n}(function(n,e){var i,t,s,o,c,g,F;for(s=n,g=0;g<8;g++){if(o=f(s)-n,Math.abs(o)<e)return s;if(c=(3*a*(F=s)+2*u)*F+r,Math.abs(c)<1e-6)break;s-=o/c}if((s=n)<(i=0))return i;if(s>(t=1))return t;for(;i<t;){if(o=f(s),Math.abs(o-n)<e)return s;n>o?i=s:t=s,s=.5*(t-i)+i}return s}(n,e))}}Object.defineProperty(e,"__esModule",{value:!0}),e.unitBezier=i;var t=/^cubic-bezier\((.*)\)/;e.easingFunctions={},e.parse=function(n){var r=e.easingFunctions[n]||null;if(!r){var u=t.exec(n);if(u){var a=u[1].split(",").map((function(n){return parseFloat(n.trim())}));4!==a.length||a.some((function(n){return isNaN(n)}))||(r=i.apply(i,a))}}return r},e.easingFunctions.ease=i(.25,.1,.25,1),e.easingFunctions.linear=i(0,0,1,1),e.easingFunctions.easeIn=e.easingFunctions["ease-in"]=i(.42,0,1,1),e.easingFunctions.easeOut=e.easingFunctions["ease-out"]=i(0,0,.58,1),e.easingFunctions.easeInOut=e.easingFunctions["ease-in-out"]=i(.42,0,.58,1)}));