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

define(["require","exports","../../../../core/compilerUtils","../../webgl-engine/lib/Util"],(function(r,a,e,t){function n(r,a){for(var e=r,n=new Uint8Array(4*e*e),c=e/2-.5,i=a/2,u=0;u<e;u++)for(var o=0;o<e;o++){var f=o+e*u,s=o-c,v=u-c,h=Math.sqrt(s*s+v*v)-i;h=h/r+.5,t.packFloatRGBA(h,n,4*f)}return n}function c(r,a){return s(r,a,!1)}function i(r,a){return s(r,a,!0)}function u(r,a){return v(r,a,!1)}function o(r,a){return v(r,a,!0)}function f(r,a){for(var e=new Uint8Array(4*r*r),n=-.5,c=Math.sqrt(1.25),i=(r-a)/2,u=0;u<r;u++)for(var o=0;o<r;o++){var f=u*r+o,s=(o-i)/a,v=(u-i+.75)/a,h=-(1*s+n*v)/c,M=(1*(s-1)+n*-v)/c,l=-v,R=Math.max(h,M,l)*a/r+.5;t.packFloatRGBA(R,e,4*f)}return e}function s(r,a,e){e&&(a/=Math.SQRT2);for(var n=new Uint8Array(4*r*r),c=0;c<r;c++)for(var i=0;i<r;i++){var u=i-.5*r+.25,o=.5*r-c-.75,f=c*r+i;if(e){var s=(u+o)/Math.SQRT2;o=(o-u)/Math.SQRT2,u=s}var v=Math.max(Math.abs(u),Math.abs(o))-.5*a;v=v/r+.5,t.packFloatRGBA(v,n,4*f)}return n}function v(r,a,e){e&&(a*=Math.SQRT2);for(var n=.5*a,c=new Uint8Array(4*r*r),i=0;i<r;i++)for(var u=0;u<r;u++){var o=u-.5*r,f=.5*r-i-1,s=i*r+u;if(e){var v=(o+f)/Math.SQRT2;f=(f-o)/Math.SQRT2,o=v}var h=void 0;h=(h=(o=Math.abs(o))>(f=Math.abs(f))?o>n?Math.sqrt((o-n)*(o-n)+f*f):f:f>n?Math.sqrt(o*o+(f-n)*(f-n)):o)/r+.5,t.packFloatRGBA(h,c,4*s)}return c}Object.defineProperty(a,"__esModule",{value:!0}),a.createType=function(r,a,t){switch(r){case"circle":return n(a,t);case"square":return c(a,t);case"cross":return u(a,t);case"x":return o(a,t);case"kite":return i(a,t);case"triangle":return f(a,t);default:return e.neverReached(r),n(a,t)}},a.createCircle=n,a.createSquare=c,a.createKite=i,a.createCross=u,a.createX=o,a.createTriangle=f}));