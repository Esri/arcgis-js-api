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

define(["require","exports"],(function(n,e){"use strict";function i(n,e,i,t){var r=3*n,u=3*(i-n)-r,s=1-r-u,a=3*e,o=3*(t-e)-a,c=1-a-o;function f(n){return((s*n+u)*n+r)*n}return function(n,e){return void 0===e&&(e=1e-6),function(n){return((c*n+o)*n+a)*n}(function(n,e){var i,t,a,o,c,g,F;for(a=n,g=0;g<8;g++){if(o=f(a)-n,Math.abs(o)<e)return a;if(c=(3*s*(F=a)+2*u)*F+r,Math.abs(c)<1e-6)break;a-=o/c}if((a=n)<(i=0))return i;if(a>(t=1))return t;for(;i<t;){if(o=f(a),Math.abs(o-n)<e)return a;n>o?i=a:t=a,a=.5*(t-i)+i}return a}(n,e))}}Object.defineProperty(e,"__esModule",{value:!0}),e.parse=e.easingFunctions=e.unitBezier=void 0,e.unitBezier=i;var t=/^cubic-bezier\((.*)\)/;e.easingFunctions={},e.parse=function(n){var r=e.easingFunctions[n]||null;if(!r){var u=t.exec(n);if(u){var s=u[1].split(",").map((function(n){return parseFloat(n.trim())}));4!==s.length||s.some((function(n){return isNaN(n)}))||(r=i.apply(i,s))}}return r},e.easingFunctions.ease=i(.25,.1,.25,1),e.easingFunctions.linear=i(0,0,1,1),e.easingFunctions.easeIn=e.easingFunctions["ease-in"]=i(.42,0,1,1),e.easingFunctions.easeOut=e.easingFunctions["ease-out"]=i(0,0,.58,1),e.easingFunctions.easeInOut=e.easingFunctions["ease-in-out"]=i(.42,0,.58,1)}));