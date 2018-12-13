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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../geometry/Point"],function(e,t,n){function r(e,t,n){var r={x:0,y:0};t&&(r.z=0),n&&(r.m=0);for(var s=0,l=e[0],o=0;o<e.length;o++){var f=e[o];if(!1===h(f,l)){var u=i(l,f,t),p=a(l,f,t,n);p.x*=u,p.y*=u,r.x+=p.x,r.y+=p.y,t&&(p.z*=u,r.z+=p.z),n&&(p.m*=u,r.m+=p.m),s+=u,l=f}}return s>0?(r.x/=s,r.y/=s,t&&(r.z/=s),n&&(r.m/=s)):(r.x=e[0][0],r.y=e[0][1],t&&(r.z=e[0][2]),n&&t?r.m=e[0][3]:n&&(r.m=e[0][2])),r}function a(e,t,n,r){var a={x:(e[0]+t[0])/2,y:(e[1]+t[1])/2};return n&&(a.z=(e[2]+t[2])/2),n&&r?a.m=(e[3]+t[3])/2:r&&(a.m=(e[2]+t[2])/2),a}function s(e,t){if(e.length<=1)return 0;for(var n=0,r=1;r<e.length;r++)n+=i(e[r-1],e[r],t);return n}function i(e,t,n){var r=t[0]-e[0],a=t[1]-e[1];if(n){var s=t[2]-t[2];return Math.sqrt(r*r+a*a+s*s)}return Math.sqrt(r*r+a*a)}function h(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function l(e){for(var t={x:0,y:0,spatialReference:e.spatialReference.toJSON()},a={x:0,y:0,spatialReference:e.spatialReference.toJSON()},i=0,h=0,l=0;l<e.paths.length;l++)if(0!==e.paths[l].length){var o=s(e.paths[l],!0===e.hasZ);if(0===o){var f=r(e.paths[l],!0===e.hasZ,!0===e.hasM);t.x+=f.x,t.y+=f.y,!0===e.hasZ&&(t.z+=f.z),!0===e.hasM&&(t.m+=f.m),++i}else{var f=r(e.paths[l],!0===e.hasZ,!0===e.hasM);a.x+=f.x*o,a.y+=f.y*o,!0===e.hasZ&&(a.z+=f.z*o),!0===e.hasM&&(a.m+=f.m*o),h+=o}}return h>0?(a.x/=h,a.y/=h,!0===e.hasZ&&(a.z/=h),!0===e.hasM&&(a.m/=h),new n(a)):i>0?(t.x/=i,t.y/=i,!0===e.hasZ&&(a.z/=i),!0===e.hasM&&(t.m/=i),new n(t)):null}function o(e){if(0===e.points.length)return null;for(var t=0,r=0,a=0,s=0,i=0;i<e.points.length;i++){var h=e.getPoint(i);!0===h.hasZ&&(a+=h.z),!0===h.hasM&&(s+=h.m),t+=h.x,r+=h.y,s+=h.m}var l={x:t/e.points.length,y:r/e.points.length,spatialReference:null};return l.spatialReference=e.spatialReference.toJSON(),!0===e.hasZ&&(l.z=a/e.points.length),!0===e.hasM&&(l.m=s/e.points.length),new n(l)}Object.defineProperty(t,"__esModule",{value:!0}),t.centroidPolyline=l,t.centroidMultiPoint=o});