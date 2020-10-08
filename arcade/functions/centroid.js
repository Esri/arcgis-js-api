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

define(["require","exports","../../geometry/Point","../../geometry/support/intersects"],(function(e,n,t,r){"use strict";function a(e,n,t){var r={x:0,y:0};n&&(r.z=0),t&&(r.m=0);for(var a=0,o=e[0],f=0;f<e.length;f++){var l=e[f];if(!1===s(l,o)){var u=h(o,l,n),g=i(o,l,n,t);g.x*=u,g.y*=u,r.x+=g.x,r.y+=g.y,n&&(g.z*=u,r.z+=g.z),t&&(g.m*=u,r.m+=g.m),a+=u,o=l}}return a>0?(r.x/=a,r.y/=a,n&&(r.z/=a),t&&(r.m/=a)):(r.x=e[0][0],r.y=e[0][1],n&&(r.z=e[0][2]),t&&n?r.m=e[0][3]:t&&(r.m=e[0][2])),r}function i(e,n,t,r){var a={x:(e[0]+n[0])/2,y:(e[1]+n[1])/2};return t&&(a.z=(e[2]+n[2])/2),t&&r?a.m=(e[3]+n[3])/2:r&&(a.m=(e[2]+n[2])/2),a}function o(e,n){if(e.length<=1)return 0;for(var t=0,r=1;r<e.length;r++)t+=h(e[r-1],e[r],n);return t}function h(e,n,t){var r=n[0]-e[0],a=n[1]-e[1];if(t){var i=n[2]-n[2];return Math.sqrt(r*r+a*a+i*i)}return Math.sqrt(r*r+a*a)}function s(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function f(e,n,t){for(void 0===t&&(t=0);e<t;)e+=n;for(var r=t+n;e>=r;)e-=n;return e}function l(e,n){return Math.atan2(n.y-e.y,n.x-e.x)}function u(e,n,t){var r,a,i={x:e.x-n.x,y:e.y-n.y},o={x:t.x-n.x,y:t.y-n.y};return Math.atan2((r=o).x*(a=i).y-a.x*r.y,function(e,n){return e.x*n.x+e.y*n.y}(o,i))}Object.defineProperty(n,"__esModule",{value:!0}),n.pathsSelfIntersecting=n.bearingBetween2D=n.angleBetween2D=n.angleBetweenRad=n.bearing2D=n.angle2D=n.angleRad=n.centroidMultiPoint=n.centroidPolyline=void 0,n.centroidPolyline=function(e){for(var n={x:0,y:0,spatialReference:e.spatialReference.toJSON()},r={x:0,y:0,spatialReference:e.spatialReference.toJSON()},i=0,h=0,s=0;s<e.paths.length;s++)if(0!==e.paths[s].length){var f=o(e.paths[s],!0===e.hasZ);if(0===f){var l=a(e.paths[s],!0===e.hasZ,!0===e.hasM);n.x+=l.x,n.y+=l.y,!0===e.hasZ&&(n.z+=l.z),!0===e.hasM&&(n.m+=l.m),++i}else{l=a(e.paths[s],!0===e.hasZ,!0===e.hasM);r.x+=l.x*f,r.y+=l.y*f,!0===e.hasZ&&(r.z+=l.z*f),!0===e.hasM&&(r.m+=l.m*f),h+=f}}return h>0?(r.x/=h,r.y/=h,!0===e.hasZ&&(r.z/=h),!0===e.hasM&&(r.m/=h),new t(r)):i>0?(n.x/=i,n.y/=i,!0===e.hasZ&&(r.z/=i),!0===e.hasM&&(n.m/=i),new t(n)):null},n.centroidMultiPoint=function(e){if(0===e.points.length)return null;for(var n=0,r=0,a=0,i=0,o=0;o<e.points.length;o++){var h=e.getPoint(o);!0===h.hasZ&&(a+=h.z),!0===h.hasM&&(i+=h.m),n+=h.x,r+=h.y,i+=h.m}var s={x:n/e.points.length,y:r/e.points.length,spatialReference:null};return s.spatialReference=e.spatialReference.toJSON(),!0===e.hasZ&&(s.z=a/e.points.length),!0===e.hasM&&(s.m=i/e.points.length),new t(s)},n.angleRad=l,n.angle2D=function(e,n){return f(l(e,n),2*Math.PI)*(180/Math.PI)},n.bearing2D=function(e,n){return f(Math.PI/2-l(e,n),2*Math.PI)*(180/Math.PI)},n.angleBetweenRad=u,n.angleBetween2D=function(e,n,t){return f(u(e,n,t),2*Math.PI)*(180/Math.PI)},n.bearingBetween2D=function(e,n,t){return f(-1*u(e,n,t),2*Math.PI)*(180/Math.PI)};var g=[0,0];n.pathsSelfIntersecting=function(e){for(var n=0;n<e.length;n++){for(var t=e[n],a=0;a<t.length-1;a++)for(var i=t[a],o=t[a+1],h=n+1;h<e.length;h++)for(var s=0;s<e[h].length-1;s++){var f=e[h][s],l=e[h][s+1];if(r.segmentIntersects(i,o,f,l,g)&&!(g[0]===i[0]&&g[1]===i[1]||g[0]===f[0]&&g[1]===f[1]||g[0]===o[0]&&g[1]===o[1]||g[0]===l[0]&&g[1]===l[1]))return!0}var u=t.length;if(!(u<3))for(a=0;a<=u-2;a++)for(i=t[a],o=t[a+1],h=a+2;h<=u-2;h++){f=t[h],l=t[h+1];if(r.segmentIntersects(i,o,f,l,g)&&!(g[0]===i[0]&&g[1]===i[1]||g[0]===f[0]&&g[1]===f[1]||g[0]===o[0]&&g[1]===o[1]||g[0]===l[0]&&g[1]===l[1]))return!0}}return!1}}));