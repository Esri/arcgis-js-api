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

define(["require","exports","../../geometry/Point","../../geometry/support/intersects"],(function(t,e,n,r){function a(t,e,n){var r={x:0,y:0};e&&(r.z=0),n&&(r.m=0);for(var a=0,h=t[0],s=0;s<t.length;s++){var u=t[s];if(!1===f(u,h)){var l=o(h,u,e),y=i(h,u,e,n);y.x*=l,y.y*=l,r.x+=y.x,r.y+=y.y,e&&(y.z*=l,r.z+=y.z),n&&(y.m*=l,r.m+=y.m),a+=l,h=u}}return a>0?(r.x/=a,r.y/=a,e&&(r.z/=a),n&&(r.m/=a)):(r.x=t[0][0],r.y=t[0][1],e&&(r.z=t[0][2]),n&&e?r.m=t[0][3]:n&&(r.m=t[0][2])),r}function i(t,e,n,r){var a={x:(t[0]+e[0])/2,y:(t[1]+e[1])/2};return n&&(a.z=(t[2]+e[2])/2),n&&r?a.m=(t[3]+e[3])/2:r&&(a.m=(t[2]+e[2])/2),a}function h(t,e){if(t.length<=1)return 0;for(var n=0,r=1;r<t.length;r++)n+=o(t[r-1],t[r],e);return n}function o(t,e,n){var r=e[0]-t[0],a=e[1]-t[1];if(n){var i=e[2]-e[2];return Math.sqrt(r*r+a*a+i*i)}return Math.sqrt(r*r+a*a)}function f(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function s(t,e,n){for(void 0===n&&(n=0);t<n;)t+=e;for(var r=n+e;t>=r;)t-=e;return t}function u(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}function l(t,e,n){var r,a,i={x:t.x-e.x,y:t.y-e.y},h={x:n.x-e.x,y:n.y-e.y};return Math.atan2((r=h).x*(a=i).y-a.x*r.y,function(t,e){return t.x*e.x+t.y*e.y}(h,i))}Object.defineProperty(e,"__esModule",{value:!0}),e.centroidPolyline=function(t){for(var e={x:0,y:0,spatialReference:t.spatialReference.toJSON()},r={x:0,y:0,spatialReference:t.spatialReference.toJSON()},i=0,o=0,f=0;f<t.paths.length;f++)if(0!==t.paths[f].length){var s=h(t.paths[f],!0===t.hasZ);if(0===s){var u=a(t.paths[f],!0===t.hasZ,!0===t.hasM);e.x+=u.x,e.y+=u.y,!0===t.hasZ&&(e.z+=u.z),!0===t.hasM&&(e.m+=u.m),++i}else{u=a(t.paths[f],!0===t.hasZ,!0===t.hasM);r.x+=u.x*s,r.y+=u.y*s,!0===t.hasZ&&(r.z+=u.z*s),!0===t.hasM&&(r.m+=u.m*s),o+=s}}return o>0?(r.x/=o,r.y/=o,!0===t.hasZ&&(r.z/=o),!0===t.hasM&&(r.m/=o),new n(r)):i>0?(e.x/=i,e.y/=i,!0===t.hasZ&&(r.z/=i),!0===t.hasM&&(e.m/=i),new n(e)):null},e.centroidMultiPoint=function(t){if(0===t.points.length)return null;for(var e=0,r=0,a=0,i=0,h=0;h<t.points.length;h++){var o=t.getPoint(h);!0===o.hasZ&&(a+=o.z),!0===o.hasM&&(i+=o.m),e+=o.x,r+=o.y,i+=o.m}var f={x:e/t.points.length,y:r/t.points.length,spatialReference:null};return f.spatialReference=t.spatialReference.toJSON(),!0===t.hasZ&&(f.z=a/t.points.length),!0===t.hasM&&(f.m=i/t.points.length),new n(f)},e.angleRad=u,e.angle2D=function(t,e){return s(u(t,e),2*Math.PI)*(180/Math.PI)},e.bearing2D=function(t,e){return s(Math.PI/2-u(t,e),2*Math.PI)*(180/Math.PI)},e.angleBetweenRad=l,e.angleBetween2D=function(t,e,n){return s(l(t,e,n),2*Math.PI)*(180/Math.PI)},e.bearingBetween2D=function(t,e,n){return s(-1*l(t,e,n),2*Math.PI)*(180/Math.PI)};var y=[0,0];e.pathsSelfIntersecting=function(t){for(var e=0;e<t.length;e++){for(var n=t[e],a=0;a<n.length-1;a++)for(var i=n[a],h=n[a+1],o=e+1;o<t.length;o++)for(var f=0;f<t[o].length-1;f++){var s=t[o][f],u=t[o][f+1];if(r.segmentIntersects(i,h,s,u,y)&&!(y[0]===i[0]&&y[1]===i[1]||y[0]===s[0]&&y[1]===s[1]||y[0]===h[0]&&y[1]===h[1]||y[0]===u[0]&&y[1]===u[1]))return!0}var l=n.length;if(!(l<3))for(a=0;a<=l-2;a++)for(i=n[a],h=n[a+1],o=a+2;o<=l-2;o++){s=n[o],u=n[o+1];if(r.segmentIntersects(i,h,s,u,y)&&!(y[0]===i[0]&&y[1]===i[1]||y[0]===s[0]&&y[1]===s[1]||y[0]===h[0]&&y[1]===h[1]||y[0]===u[0]&&y[1]===u[1]))return!0}}return!1}}));