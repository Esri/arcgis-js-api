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

define(["require","exports","../../../../core/compilerUtils","../../webgl-engine/lib/Util"],(function(r,e,t,a){"use strict";function n(r,e){for(var t=r,n=new Uint8Array(4*t*t),c=t/2-.5,i=e/2,u=0;u<t;u++)for(var o=0;o<t;o++){var s=o+t*u,f=o-c,v=u-c,h=Math.sqrt(f*f+v*v)-i;h=h/r+.5,a.packFloatRGBA(h,n,4*s)}return n}function c(r,e){return f(r,e,!1)}function i(r,e){return f(r,e,!0)}function u(r,e){return v(r,e,!1)}function o(r,e){return v(r,e,!0)}function s(r,e){for(var t=new Uint8Array(4*r*r),n=-.5,c=Math.sqrt(1.25),i=(r-e)/2,u=0;u<r;u++)for(var o=0;o<r;o++){var s=u*r+o,f=(o-i)/e,v=(u-i+.75)/e,h=-(1*f+n*v)/c,l=(1*(f-1)+n*-v)/c,M=-v,R=Math.max(h,l,M)*e/r+.5;a.packFloatRGBA(R,t,4*s)}return t}function f(r,e,t){t&&(e/=Math.SQRT2);for(var n=new Uint8Array(4*r*r),c=0;c<r;c++)for(var i=0;i<r;i++){var u=i-.5*r+.25,o=.5*r-c-.75,s=c*r+i;if(t){var f=(u+o)/Math.SQRT2;o=(o-u)/Math.SQRT2,u=f}var v=Math.max(Math.abs(u),Math.abs(o))-.5*e;v=v/r+.5,a.packFloatRGBA(v,n,4*s)}return n}function v(r,e,t){t&&(e*=Math.SQRT2);for(var n=.5*e,c=new Uint8Array(4*r*r),i=0;i<r;i++)for(var u=0;u<r;u++){var o=u-.5*r,s=.5*r-i-1,f=i*r+u;if(t){var v=(o+s)/Math.SQRT2;s=(s-o)/Math.SQRT2,o=v}var h=void 0;h=(h=(o=Math.abs(o))>(s=Math.abs(s))?o>n?Math.sqrt((o-n)*(o-n)+s*s):s:s>n?Math.sqrt(o*o+(s-n)*(s-n)):o)/r+.5,a.packFloatRGBA(h,c,4*f)}return c}Object.defineProperty(e,"__esModule",{value:!0}),e.createTriangle=e.createX=e.createCross=e.createKite=e.createSquare=e.createCircle=e.createType=void 0,e.createType=function(r,e,a){switch(r){case"circle":return n(e,a);case"square":return c(e,a);case"cross":return u(e,a);case"x":return o(e,a);case"kite":return i(e,a);case"triangle":return s(e,a);default:return t.neverReached(r),n(e,a)}},e.createCircle=n,e.createSquare=c,e.createKite=i,e.createCross=u,e.createX=o,e.createTriangle=s}));