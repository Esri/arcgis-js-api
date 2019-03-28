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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../geometry/Point"],function(t,e,n){function r(t,e,n){var r={x:0,y:0};e&&(r.z=0),n&&(r.m=0);for(var y=0,s=t[0],i=0;i<t.length;i++){var o=t[i];if(!1===h(o,s)){var u=x(s,o,e),l=a(s,o,e,n);l.x*=u,l.y*=u,r.x+=l.x,r.y+=l.y,e&&(l.z*=u,r.z+=l.z),n&&(l.m*=u,r.m+=l.m),y+=u,s=o}}return y>0?(r.x/=y,r.y/=y,e&&(r.z/=y),n&&(r.m/=y)):(r.x=t[0][0],r.y=t[0][1],e&&(r.z=t[0][2]),n&&e?r.m=t[0][3]:n&&(r.m=t[0][2])),r}function a(t,e,n,r){var a={x:(t[0]+e[0])/2,y:(t[1]+e[1])/2};return n&&(a.z=(t[2]+e[2])/2),n&&r?a.m=(t[3]+e[3])/2:r&&(a.m=(t[2]+e[2])/2),a}function y(t,e){if(t.length<=1)return 0;for(var n=0,r=1;r<t.length;r++)n+=x(t[r-1],t[r],e);return n}function x(t,e,n){var r=e[0]-t[0],a=e[1]-t[1];if(n){var y=e[2]-e[2];return Math.sqrt(r*r+a*a+y*y)}return Math.sqrt(r*r+a*a)}function h(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function s(t){for(var e={x:0,y:0,spatialReference:t.spatialReference.toJSON()},a={x:0,y:0,spatialReference:t.spatialReference.toJSON()},x=0,h=0,s=0;s<t.paths.length;s++)if(0!==t.paths[s].length){var i=y(t.paths[s],!0===t.hasZ);if(0===i){var o=r(t.paths[s],!0===t.hasZ,!0===t.hasM);e.x+=o.x,e.y+=o.y,!0===t.hasZ&&(e.z+=o.z),!0===t.hasM&&(e.m+=o.m),++x}else{var o=r(t.paths[s],!0===t.hasZ,!0===t.hasM);a.x+=o.x*i,a.y+=o.y*i,!0===t.hasZ&&(a.z+=o.z*i),!0===t.hasM&&(a.m+=o.m*i),h+=i}}return h>0?(a.x/=h,a.y/=h,!0===t.hasZ&&(a.z/=h),!0===t.hasM&&(a.m/=h),new n(a)):x>0?(e.x/=x,e.y/=x,!0===t.hasZ&&(a.z/=x),!0===t.hasM&&(e.m/=x),new n(e)):null}function i(t){if(0===t.points.length)return null;for(var e=0,r=0,a=0,y=0,x=0;x<t.points.length;x++){var h=t.getPoint(x);!0===h.hasZ&&(a+=h.z),!0===h.hasM&&(y+=h.m),e+=h.x,r+=h.y,y+=h.m}var s={x:e/t.points.length,y:r/t.points.length,spatialReference:null};return s.spatialReference=t.spatialReference.toJSON(),!0===t.hasZ&&(s.z=a/t.points.length),!0===t.hasM&&(s.m=y/t.points.length),new n(s)}function o(t,e){var n=t.x,r=t.y,a=e.x,y=e.y,x=n*n+r*r;x>0&&(x=1/Math.sqrt(x));var h=a*a+y*y;h>0&&(h=1/Math.sqrt(h));var s=(n*a+r*y)*x*h;return s>1?0:s<-1?Math.PI:180*Math.acos(s)/Math.PI}function u(t,e){var n=e[0],r=e[1],a=e[2],y=n*n+r*r+a*a;return y>0&&(y=1/Math.sqrt(y),t[0]=e[0]*y,t[1]=e[1]*y,t[2]=e[2]*y),t}function l(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function f(t,e,n){var r={x:t.x-e.x,y:t.y-e.y},a={x:n.x-e.x,y:n.y-e.y},y=Math.sqrt(r.x*r.x+r.y*r.y),x={x:r.x/y,y:r.y/y},h=Math.sqrt(a.x*a.x+a.y*a.y),s={x:a.x/h,y:a.y/h},i=x.x*s.x+x.y*s.y;return 180*Math.acos(i)/Math.PI}function z(t,e,n){var r={x:t.x-e.x,y:t.y-e.y,z:t.z-e.z},a={x:n.x-e.x,y:n.y-e.y,z:n.z-e.z},y=Math.sqrt(r.x*r.x+r.y*r.y+r.z*r.z),x={x:r.x/y,y:r.y/y,z:r.z/y},h=Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z),s={x:a.x/h,y:a.y/h,z:a.z/h},i=x.x*s.x+x.y*s.y+x.z*s.z;return 180*Math.acos(i)/Math.PI}function M(t,e){var n=u([t.x,t.y,t.z],[t.x,t.y,t.z]),r=u([e.x,e.y,e.z],[e.x,e.y,e.z]),a=l(n,r);return a>1?0:a<-1?Math.PI:180*Math.acos(a)/Math.PI}Object.defineProperty(e,"__esModule",{value:!0}),e.centroidPolyline=s,e.centroidMultiPoint=i,e.angle2D=o,e.angleBetween2D=f,e.angleBetween3D=z,e.angle3D=M});