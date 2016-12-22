// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(n,u){function t(n){return n}function i(n){var u=2*(n-Math.sqrt((n-1)*n)),t=u/2/n;return function(i){return t>i?n*i*i:u*i-u+1}}function o(n,u){return function(t){return u>t?u*n(t/u):1-n((1-t)/(1-u))*(1-u)}}u.linear=t,u.inQuad=function(n){return n*n},u.outQuad=function(n){return 1-u.inQuad(1-n)},u.inOutQuad=function(n){return.5>n?u.inQuad(2*n)/2:(u.outQuad(2*(n-.5))+1)/2},u.inCubic=function(n){return n*n*n},u.outCubic=function(n){return 1-u.inCubic(1-n)},u.inOutCubic=function(n){return.5>n?u.inCubic(2*n)/2:(u.outCubic(2*(n-.5))+1)/2},u.inQuart=function(n){return n*n*n*n},u.outQuart=function(n){return 1-u.inQuart(1-n)},u.inOutQuart=function(n){return.5>n?u.inQuart(2*n)/2:(u.outQuart(2*(n-.5))+1)/2},u.inQuint=function(n){return n*n*n*n*n},u.outQuint=function(n){return 1-u.inQuint(1-n)},u.inOutQuint=function(n){return.5>n?u.inQuint(2*n)/2:(u.outQuint(2*(n-.5))+1)/2},u.inSine=function(n){return-Math.cos(n*Math.PI/2)+1},u.outSine=function(n){return 1-u.inSine(1-n)},u.inOutSine=function(n){return.5>n?u.inSine(2*n)/2:(u.outSine(2*(n-.5))+1)/2},u.inExpo=function(n){return Math.pow(2,10*(n-1))},u.outExpo=function(n){return 1-u.inExpo(1-n)},u.inOutExpo=function(n){return.5>n?u.inExpo(2*n)/2:(u.outExpo(2*(n-.5))+1)/2},u.inCirc=function(n){return-(Math.sqrt(1-n*n)-1)},u.outCirc=function(n){return 1-u.inCirc(1-n)},u.inOutCirc=function(n){return.5>n?u.inCirc(2*n)/2:(u.outCirc(2*(n-.5))+1)/2},u.inCoastQuad=o(i(1),1),u.outCoastQuad=o(i(1),0),u.inOutCoastQuad=o(i(1),.5),u.inCoastCubic=o(i(2),1),u.outCoastCubic=o(i(2),0),u.inOutCoastCubic=o(i(2),.5),u.inCoastQuart=o(i(3),1),u.outCoastQuart=o(i(3),0),u.inOutCoastQuart=o(i(3),.5),u.inCoastQuint=o(i(4),1),u.outCoastQuint=o(i(4),0),u.inOutCoastQuint=o(i(4),.5),u.named={linear:t,"in-quad":u.inQuad,"out-quad":u.outQuad,"in-out-quad":u.inOutQuad,"in-cubic":u.inCubic,"out-cubic":u.outCubic,"in-out-cubic":u.inOutCubic,"in-quart":u.inQuart,"out-quart":u.outQuart,"in-out-quart":u.inOutQuart,"in-quint":u.inQuint,"out-quint":u.outQuint,"in-out-quint":u.inOutQuint,"in-sine":u.inSine,"out-sine":u.outSine,"in-out-sine":u.inOutSine,"in-expo":u.inExpo,"out-expo":u.outExpo,"in-out-expo":u.inOutExpo,"in-circ":u.inCirc,"out-circ":u.outCirc,"in-out-circ":u.inOutCirc}});