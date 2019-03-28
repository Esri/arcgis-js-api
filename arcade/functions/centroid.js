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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../../geometry/Point"],function(t,e,n){"use strict";function r(t,e,n){var r={x:0,y:0};e&&(r.z=0),n&&(r.m=0);for(var s=0,o=t[0],y=0;y<t.length;y++){var x=t[y];if(!1===i(x,o)){var l=h(o,x,e),f=a(o,x,e,n);f.x*=l,f.y*=l,r.x+=f.x,r.y+=f.y,e&&(f.z*=l,r.z+=f.z),n&&(f.m*=l,r.m+=f.m),s+=l,o=x}}return s>0?(r.x/=s,r.y/=s,e&&(r.z/=s),n&&(r.m/=s)):(r.x=t[0][0],r.y=t[0][1],e&&(r.z=t[0][2]),n&&e?r.m=t[0][3]:n&&(r.m=t[0][2])),r}function a(t,e,n,r){var a={x:(t[0]+e[0])/2,y:(t[1]+e[1])/2};return n&&(a.z=(t[2]+e[2])/2),n&&r?a.m=(t[3]+e[3])/2:r&&(a.m=(t[2]+e[2])/2),a}function s(t,e){if(t.length<=1)return 0;for(var n=0,r=1;r<t.length;r++)n+=h(t[r-1],t[r],e);return n}function h(t,e,n){var r=e[0]-t[0],a=e[1]-t[1];if(n){var s=e[2]-e[2];return Math.sqrt(r*r+a*a+s*s)}return Math.sqrt(r*r+a*a)}function i(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function o(t){for(var e={x:0,y:0,spatialReference:t.spatialReference.toJson()},a={x:0,y:0,spatialReference:t.spatialReference.toJson()},h=0,i=0,o=0;o<t.paths.length;o++)if(0!==t.paths[o].length){var y=s(t.paths[o],!0===t.hasZ);if(0===y){var x=r(t.paths[o],!0===t.hasZ,!0===t.hasM);e.x+=x.x,e.y+=x.y,!0===t.hasZ&&(e.z+=x.z),!0===t.hasM&&(e.m+=x.m),++h}else{var x=r(t.paths[o],!0===t.hasZ,!0===t.hasM);a.x+=x.x*y,a.y+=x.y*y,!0===t.hasZ&&(a.z+=x.z*y),!0===t.hasM&&(a.m+=x.m*y),i+=y}}return i>0?(a.x/=i,a.y/=i,!0===t.hasZ&&(a.z/=i),!0===t.hasM&&(a.m/=i),new n(a)):h>0?(e.x/=h,e.y/=h,!0===t.hasZ&&(a.z/=h),!0===t.hasM&&(e.m/=h),new n(e)):null}function y(t){if(0===t.points.length)return null;for(var e=0,r=0,a=0,s=0,h=0;h<t.points.length;h++){var i=t.getPoint(h);!0===i.hasZ&&(a+=i.z),!0===i.hasM&&(s+=i.m),e+=i.x,r+=i.y,s+=i.m}var o={x:e/t.points.length,y:r/t.points.length,spatialReference:null};return o.spatialReference=t.spatialReference.toJson(),!0===t.hasZ&&(o.z=a/t.points.length),!0===t.hasM&&(o.m=s/t.points.length),new n(o)}function x(t,e){var n=t.x,r=t.y,a=e.x,s=e.y,h=n*n+r*r;h>0&&(h=1/Math.sqrt(h));var i=a*a+s*s;i>0&&(i=1/Math.sqrt(i));var o=(n*a+r*s)*h*i;return o>1?0:o<-1?Math.PI:180*Math.acos(o)/Math.PI}function l(t,e,n){var r={x:t.x-e.x,y:t.y-e.y},a={x:n.x-e.x,y:n.y-e.y},s=Math.sqrt(r.x*r.x+r.y*r.y),h={x:r.x/s,y:r.y/s},i=Math.sqrt(a.x*a.x+a.y*a.y),o={x:a.x/i,y:a.y/i},y=h.x*o.x+h.y*o.y;return 180*Math.acos(y)/Math.PI}Object.defineProperty(e,"__esModule",{value:!0}),e.centroidPolyline=o,e.centroidMultiPoint=y,e.angle2D=x,e.angleBetween2D=l});