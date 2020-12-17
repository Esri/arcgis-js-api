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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../../geometry/Point"],(function(n,e,t){"use strict";function r(n,e,t){var r={x:0,y:0};e&&(r.z=0),t&&(r.m=0);for(var i=0,f=n[0],u=0;u<n.length;u++){var l=n[u];if(!1===h(l,f)){var s=o(f,l,e),g=a(f,l,e,t);g.x*=s,g.y*=s,r.x+=g.x,r.y+=g.y,e&&(g.z*=s,r.z+=g.z),t&&(g.m*=s,r.m+=g.m),i+=s,f=l}}return i>0?(r.x/=i,r.y/=i,e&&(r.z/=i),t&&(r.m/=i)):(r.x=n[0][0],r.y=n[0][1],e&&(r.z=n[0][2]),t&&e?r.m=n[0][3]:t&&(r.m=n[0][2])),r}function a(n,e,t,r){var a={x:(n[0]+e[0])/2,y:(n[1]+e[1])/2};return t&&(a.z=(n[2]+e[2])/2),t&&r?a.m=(n[3]+e[3])/2:r&&(a.m=(n[2]+e[2])/2),a}function i(n,e){if(n.length<=1)return 0;for(var t=0,r=1;r<n.length;r++)t+=o(n[r-1],n[r],e);return t}function o(n,e,t){var r=e[0]-n[0],a=e[1]-n[1];if(t){var i=e[2]-e[2];return Math.sqrt(r*r+a*a+i*i)}return Math.sqrt(r*r+a*a)}function h(n,e){if(n.length!==e.length)return!1;for(var t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function f(n,e,t){for(void 0===t&&(t=0);n<t;)n+=e;for(var r=t+e;n>=r;)n-=e;return n}function u(n,e){return Math.atan2(e.y-n.y,e.x-n.x)}function l(n,e,t){var r,a,i={x:n.x-e.x,y:n.y-e.y},o={x:t.x-e.x,y:t.y-e.y};return Math.atan2((r=i).x*(a=o).y-a.x*r.y,function(n,e){return n.x*e.x+n.y*e.y}(i,o))}function s(n,e,t,r,a){var i=n[0],o=n[1],h=e[0],f=e[1],u=t[0],l=t[1],s=r[0]-u,g=i-u,c=h-i,y=r[1]-l,x=o-l,v=f-o,M=y*c-s*v;if(0===M)return!1;var p=(s*x-y*g)/M,m=(c*x-v*g)/M;return p>=0&&p<=1&&m>=0&&m<=1&&(a&&(a[0]=i+p*(h-i),a[1]=o+p*(f-o)),!0)}Object.defineProperty(e,"__esModule",{value:!0}),e.pathsSelfIntersecting=e.bearingBetween2D=e.angleBetween2D=e.angleBetweenRad=e.bearing2D=e.angle2D=e.angleRad=e.centroidMultiPoint=e.centroidPolyline=void 0,e.centroidPolyline=function(n){for(var e={x:0,y:0,spatialReference:n.spatialReference.toJson()},a={x:0,y:0,spatialReference:n.spatialReference.toJson()},o=0,h=0,f=0;f<n.paths.length;f++)if(0!==n.paths[f].length){var u=i(n.paths[f],!0===n.hasZ);if(0===u){var l=r(n.paths[f],!0===n.hasZ,!0===n.hasM);e.x+=l.x,e.y+=l.y,!0===n.hasZ&&(e.z+=l.z),!0===n.hasM&&(e.m+=l.m),++o}else{l=r(n.paths[f],!0===n.hasZ,!0===n.hasM);a.x+=l.x*u,a.y+=l.y*u,!0===n.hasZ&&(a.z+=l.z*u),!0===n.hasM&&(a.m+=l.m*u),h+=u}}return h>0?(a.x/=h,a.y/=h,!0===n.hasZ&&(a.z/=h),!0===n.hasM&&(a.m/=h),new t(a)):o>0?(e.x/=o,e.y/=o,!0===n.hasZ&&(a.z/=o),!0===n.hasM&&(e.m/=o),new t(e)):null},e.centroidMultiPoint=function(n){if(0===n.points.length)return null;for(var e=0,r=0,a=0,i=0,o=0;o<n.points.length;o++){var h=n.getPoint(o);!0===h.hasZ&&(a+=h.z),!0===h.hasM&&(i+=h.m),e+=h.x,r+=h.y,i+=h.m}var f={x:e/n.points.length,y:r/n.points.length,spatialReference:null};return f.spatialReference=n.spatialReference.toJson(),!0===n.hasZ&&(f.z=a/n.points.length),!0===n.hasM&&(f.m=i/n.points.length),new t(f)},e.angleRad=u,e.angle2D=function(n,e){return f(u(n,e),2*Math.PI)*(180/Math.PI)},e.bearing2D=function(n,e){return f(Math.PI/2-u(n,e),2*Math.PI)*(180/Math.PI)},e.angleBetweenRad=l,e.angleBetween2D=function(n,e,t){return f(l(n,e,t),2*Math.PI)*(180/Math.PI)},e.bearingBetween2D=function(n,e,t){return f(-1*l(n,e,t),2*Math.PI)*(180/Math.PI)};var g=[0,0];e.pathsSelfIntersecting=function(n){for(var e=0;e<n.length;e++){for(var t=n[e],r=0;r<t.length-1;r++)for(var a=t[r],i=t[r+1],o=e+1;o<n.length;o++)for(var h=0;h<n[o].length-1;h++){if(s(a,i,u=n[o][h],l=n[o][h+1],g)&&!(g[0]===a[0]&&g[1]===a[1]||g[0]===u[0]&&g[1]===u[1]||g[0]===i[0]&&g[1]===i[1]||g[0]===l[0]&&g[1]===l[1]))return!0}var f=t.length;if(!(f<3))for(r=0;r<=f-2;r++)for(a=t[r],i=t[r+1],o=r+2;o<=f-2;o++){var u,l;if(s(a,i,u=t[o],l=t[o+1],g)&&!(g[0]===a[0]&&g[1]===a[1]||g[0]===u[0]&&g[1]===u[1]||g[0]===i[0]&&g[1]===i[1]||g[0]===l[0]&&g[1]===l[1]))return!0}}return!1}}));