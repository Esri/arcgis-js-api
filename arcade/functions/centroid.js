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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","../../geometry/Point"],function(n,t,r){"use strict";function e(n,t,r){var e={x:0,y:0};t&&(e.z=0),r&&(e.m=0);for(var i=0,f=n[0],u=0;u<n.length;u++){var s=n[u];if(!1===o(s,f)){var l=h(f,s,t),v=a(f,s,t,r);v.x*=l,v.y*=l,e.x+=v.x,e.y+=v.y,t&&(v.z*=l,e.z+=v.z),r&&(v.m*=l,e.m+=v.m),i+=l,f=s}}return i>0?(e.x/=i,e.y/=i,t&&(e.z/=i),r&&(e.m/=i)):(e.x=n[0][0],e.y=n[0][1],t&&(e.z=n[0][2]),r&&t?e.m=n[0][3]:r&&(e.m=n[0][2])),e}function a(n,t,r,e){var a={x:(n[0]+t[0])/2,y:(n[1]+t[1])/2};return r&&(a.z=(n[2]+t[2])/2),r&&e?a.m=(n[3]+t[3])/2:e&&(a.m=(n[2]+t[2])/2),a}function i(n,t){if(n.length<=1)return 0;for(var r=0,e=1;e<n.length;e++)r+=h(n[e-1],n[e],t);return r}function h(n,t,r){var e=t[0]-n[0],a=t[1]-n[1];if(r){var i=t[2]-t[2];return Math.sqrt(e*e+a*a+i*i)}return Math.sqrt(e*e+a*a)}function o(n,t){if(n.length!==t.length)return!1;for(var r=0;r<n.length;r++)if(n[r]!==t[r])return!1;return!0}function f(n){for(var t={x:0,y:0,spatialReference:n.spatialReference.toJson()},a={x:0,y:0,spatialReference:n.spatialReference.toJson()},h=0,o=0,f=0;f<n.paths.length;f++)if(0!==n.paths[f].length){var u=i(n.paths[f],!0===n.hasZ);if(0===u){var s=e(n.paths[f],!0===n.hasZ,!0===n.hasM);t.x+=s.x,t.y+=s.y,!0===n.hasZ&&(t.z+=s.z),!0===n.hasM&&(t.m+=s.m),++h}else{var s=e(n.paths[f],!0===n.hasZ,!0===n.hasM);a.x+=s.x*u,a.y+=s.y*u,!0===n.hasZ&&(a.z+=s.z*u),!0===n.hasM&&(a.m+=s.m*u),o+=u}}return o>0?(a.x/=o,a.y/=o,!0===n.hasZ&&(a.z/=o),!0===n.hasM&&(a.m/=o),new r(a)):h>0?(t.x/=h,t.y/=h,!0===n.hasZ&&(a.z/=h),!0===n.hasM&&(t.m/=h),new r(t)):null}function u(n){if(0===n.points.length)return null;for(var t=0,e=0,a=0,i=0,h=0;h<n.points.length;h++){var o=n.getPoint(h);!0===o.hasZ&&(a+=o.z),!0===o.hasM&&(i+=o.m),t+=o.x,e+=o.y,i+=o.m}var f={x:t/n.points.length,y:e/n.points.length,spatialReference:null};return f.spatialReference=n.spatialReference.toJson(),!0===n.hasZ&&(f.z=a/n.points.length),!0===n.hasM&&(f.m=i/n.points.length),new r(f)}function s(n,t){return n.x*t.x+n.y*t.y}function l(n,t){return n.x*t.y-t.x*n.y}function v(n,t,r){for(void 0===r&&(r=0);n<r;)n+=t;for(var e=r+t;n>=e;)n-=t;return n}function y(n,t){return Math.atan2(t.y-n.y,t.x-n.x)}function c(n,t){return v(y(n,t),2*Math.PI)*(180/Math.PI)}function x(n,t){return v(Math.PI/2-y(n,t),2*Math.PI)*(180/Math.PI)}function g(n,t,r){var e={x:n.x-t.x,y:n.y-t.y},a={x:r.x-t.x,y:r.y-t.y};return Math.atan2(l(a,e),s(a,e))}function M(n,t,r){return v(g(n,t,r),2*Math.PI)*(180/Math.PI)}function p(n,t,r){return v(-1*g(n,t,r),2*Math.PI)*(180/Math.PI)}function m(n,t,r,e,a){var i=n[0],h=n[1],o=t[0],f=t[1],u=r[0],s=r[1],l=e[0],v=e[1],y=l-u,c=i-u,x=o-i,g=v-s,M=h-s,p=f-h,m=g*x-y*p;if(0===m)return!1;var z=(y*M-g*c)/m,P=(x*M-p*c)/m;return z>=0&&z<=1&&P>=0&&P<=1&&(a&&(a[0]=i+z*(o-i),a[1]=h+z*(f-h)),!0)}function z(n){for(var t=0;t<n.length;t++){for(var r=n[t],e=0;e<r.length-1;e++)for(var a=r[e],i=r[e+1],h=t+1;h<n.length;h++)for(var o=0;o<n[h].length-1;o++){var f=n[h][o],u=n[h][o+1],s=m(a,i,f,u,P);if(s&&!(P[0]===a[0]&&P[1]===a[1]||P[0]===f[0]&&P[1]===f[1]||P[0]===i[0]&&P[1]===i[1]||P[0]===u[0]&&P[1]===u[1]))return!0}var l=r.length;if(!(l<3))for(var e=0;e<=l-2;e++)for(var a=r[e],i=r[e+1],h=e+2;h<=l-2;h++){var f=r[h],u=r[h+1],s=m(a,i,f,u,P);if(s&&!(P[0]===a[0]&&P[1]===a[1]||P[0]===f[0]&&P[1]===f[1]||P[0]===i[0]&&P[1]===i[1]||P[0]===u[0]&&P[1]===u[1]))return!0}}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.centroidPolyline=f,t.centroidMultiPoint=u,t.angleRad=y,t.angle2D=c,t.bearing2D=x,t.angleBetweenRad=g,t.angleBetween2D=M,t.bearingBetween2D=p;var P=[0,0];t.pathsSelfIntersecting=z});