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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../geometry/Point"],function(n,t,e){function r(n,t,e){var r={x:0,y:0};t&&(r.z=0),e&&(r.m=0);for(var i=0,o=n[0],f=0;f<n.length;f++){var s=n[f];if(!1===u(s,o)){var l=h(o,s,t),y=a(o,s,t,e);y.x*=l,y.y*=l,r.x+=y.x,r.y+=y.y,t&&(y.z*=l,r.z+=y.z),e&&(y.m*=l,r.m+=y.m),i+=l,o=s}}return i>0?(r.x/=i,r.y/=i,t&&(r.z/=i),e&&(r.m/=i)):(r.x=n[0][0],r.y=n[0][1],t&&(r.z=n[0][2]),e&&t?r.m=n[0][3]:e&&(r.m=n[0][2])),r}function a(n,t,e,r){var a={x:(n[0]+t[0])/2,y:(n[1]+t[1])/2};return e&&(a.z=(n[2]+t[2])/2),e&&r?a.m=(n[3]+t[3])/2:r&&(a.m=(n[2]+t[2])/2),a}function i(n,t){if(n.length<=1)return 0;for(var e=0,r=1;r<n.length;r++)e+=h(n[r-1],n[r],t);return e}function h(n,t,e){var r=t[0]-n[0],a=t[1]-n[1];if(e){var i=t[2]-t[2];return Math.sqrt(r*r+a*a+i*i)}return Math.sqrt(r*r+a*a)}function u(n,t){if(n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function o(n){for(var t={x:0,y:0,spatialReference:n.spatialReference.toJSON()},a={x:0,y:0,spatialReference:n.spatialReference.toJSON()},h=0,u=0,o=0;o<n.paths.length;o++)if(0!==n.paths[o].length){var f=i(n.paths[o],!0===n.hasZ);if(0===f){var s=r(n.paths[o],!0===n.hasZ,!0===n.hasM);t.x+=s.x,t.y+=s.y,!0===n.hasZ&&(t.z+=s.z),!0===n.hasM&&(t.m+=s.m),++h}else{var s=r(n.paths[o],!0===n.hasZ,!0===n.hasM);a.x+=s.x*f,a.y+=s.y*f,!0===n.hasZ&&(a.z+=s.z*f),!0===n.hasM&&(a.m+=s.m*f),u+=f}}return u>0?(a.x/=u,a.y/=u,!0===n.hasZ&&(a.z/=u),!0===n.hasM&&(a.m/=u),new e(a)):h>0?(t.x/=h,t.y/=h,!0===n.hasZ&&(a.z/=h),!0===n.hasM&&(t.m/=h),new e(t)):null}function f(n){if(0===n.points.length)return null;for(var t=0,r=0,a=0,i=0,h=0;h<n.points.length;h++){var u=n.getPoint(h);!0===u.hasZ&&(a+=u.z),!0===u.hasM&&(i+=u.m),t+=u.x,r+=u.y,i+=u.m}var o={x:t/n.points.length,y:r/n.points.length,spatialReference:null};return o.spatialReference=n.spatialReference.toJSON(),!0===n.hasZ&&(o.z=a/n.points.length),!0===n.hasM&&(o.m=i/n.points.length),new e(o)}function s(n,t){return n.x*t.x+n.y*t.y}function l(n,t){return n.x*t.y-t.x*n.y}function y(n,t,e){for(void 0===e&&(e=0);n<e;)n+=t;for(var r=e+t;n>=r;)n-=t;return n}function x(n,t){return Math.atan2(t.y-n.y,t.x-n.x)}function c(n,t){return y(x(n,t),2*Math.PI)*(180/Math.PI)}function M(n,t){return y(Math.PI/2-x(n,t),2*Math.PI)*(180/Math.PI)}function g(n,t,e){var r={x:n.x-t.x,y:n.y-t.y},a={x:e.x-t.x,y:e.y-t.y};return Math.atan2(l(a,r),s(a,r))}function p(n,t,e){return y(g(n,t,e),2*Math.PI)*(180/Math.PI)}function v(n,t,e){return y(-1*g(n,t,e),2*Math.PI)*(180/Math.PI)}Object.defineProperty(t,"__esModule",{value:!0}),t.centroidPolyline=o,t.centroidMultiPoint=f,t.angleRad=x,t.angle2D=c,t.bearing2D=M,t.angleBetweenRad=g,t.angleBetween2D=p,t.bearingBetween2D=v});