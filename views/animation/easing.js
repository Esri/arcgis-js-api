// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(t,u){function n(t){return t}function i(t){var u=2*(t-Math.sqrt((t-1)*t)),n=u/2/t;return function(i){return i<n?t*i*i:u*i-u+1}}function o(t,u){return function(n){return n<u?u*t(n/u):1-t((1-n)/(1-u))*(1-u)}}Object.defineProperty(u,"__esModule",{value:!0}),u.linear=n,u.inQuad=function(t){return t*t},u.outQuad=function(t){return 1-u.inQuad(1-t)},u.inOutQuad=function(t){return t<.5?u.inQuad(2*t)/2:(u.outQuad(2*(t-.5))+1)/2},u.inCubic=function(t){return t*t*t},u.outCubic=function(t){return 1-u.inCubic(1-t)},u.inOutCubic=function(t){return t<.5?u.inCubic(2*t)/2:(u.outCubic(2*(t-.5))+1)/2},u.inQuart=function(t){return t*t*t*t},u.outQuart=function(t){return 1-u.inQuart(1-t)},u.inOutQuart=function(t){return t<.5?u.inQuart(2*t)/2:(u.outQuart(2*(t-.5))+1)/2},u.inQuint=function(t){return t*t*t*t*t},u.outQuint=function(t){return 1-u.inQuint(1-t)},u.inOutQuint=function(t){return t<.5?u.inQuint(2*t)/2:(u.outQuint(2*(t-.5))+1)/2},u.inSine=function(t){return 1-Math.cos(t*Math.PI/2)},u.outSine=function(t){return 1-u.inSine(1-t)},u.inOutSine=function(t){return t<.5?u.inSine(2*t)/2:(u.outSine(2*(t-.5))+1)/2},u.inExpo=function(t){return Math.pow(2,10*(t-1))},u.outExpo=function(t){return 1-u.inExpo(1-t)},u.inOutExpo=function(t){return t<.5?u.inExpo(2*t)/2:(u.outExpo(2*(t-.5))+1)/2},u.inCirc=function(t){return-(Math.sqrt(1-t*t)-1)},u.outCirc=function(t){return 1-u.inCirc(1-t)},u.inOutCirc=function(t){return t<.5?u.inCirc(2*t)/2:(u.outCirc(2*(t-.5))+1)/2},u.inCoastQuad=o(i(1),1),u.outCoastQuad=o(i(1),0),u.inOutCoastQuad=o(i(1),.5),u.inCoastCubic=o(i(2),1),u.outCoastCubic=o(i(2),0),u.inOutCoastCubic=o(i(2),.5),u.inCoastQuart=o(i(3),1),u.outCoastQuart=o(i(3),0),u.inOutCoastQuart=o(i(3),.5),u.inCoastQuint=o(i(4),1),u.outCoastQuint=o(i(4),0),u.inOutCoastQuint=o(i(4),.5),u.named={linear:n,"in-quad":u.inQuad,"out-quad":u.outQuad,"in-out-quad":u.inOutQuad,"in-coast-quad":u.inCoastQuad,"out-coast-quad":u.outCoastQuad,"in-out-coast-quad":u.inOutCoastQuad,"in-cubic":u.inCubic,"out-cubic":u.outCubic,"in-out-cubic":u.inOutCubic,"in-coast-cubic":u.inCoastCubic,"out-coast-cubic":u.outCoastCubic,"in-out-coast-cubic":u.inOutCoastCubic,"in-quart":u.inQuart,"out-quart":u.outQuart,"in-out-quart":u.inOutQuart,"in-coast-quart":u.inCoastQuart,"out-coast-quart":u.outCoastQuart,"in-out-coast-quart":u.inOutCoastQuart,"in-quint":u.inQuint,"out-quint":u.outQuint,"in-out-quint":u.inOutQuint,"in-coast-quint":u.inCoastQuint,"out-coast-quint":u.outCoastQuint,"in-out-coast-quint":u.inOutCoastQuint,"in-sine":u.inSine,"out-sine":u.outSine,"in-out-sine":u.inOutSine,"in-expo":u.inExpo,"out-expo":u.outExpo,"in-out-expo":u.inOutExpo,"in-circ":u.inCirc,"out-circ":u.outCirc,"in-out-circ":u.inOutCirc}});