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

define(["require","exports","../../../core/wgs84Constants","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/Point","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","./mathUtils"],function(e,t,a,r,n,i,s,o){function u(e,t){return e.spatialReference.wkid!==i.WGS84.wkid?s.webMercatorToGeographic(e,!1,t):(t.x=e.x,t.y=e.y),t.z=e.z,t}function d(e,a,r,i){var s,u;e instanceof n&&a instanceof n&&(r=a.longitude,i=a.latitude,u=e.latitude,s=e.longitude);var d=o.deg2rad(u),h=o.deg2rad(i),c=o.deg2rad(s),M=o.deg2rad(r),g=d-h,l=c-M,f=Math.sin(g/2),R=Math.sin(l/2),m=2*o.asin(Math.sqrt(f*f+Math.cos(d)*Math.cos(h)*R*R)),w=m*t.earthRadius;return Math.round(1e4*w)/1e4}function h(e,t,a){var r=t.spatialReference,i=new n(t.x,e.y,r),s=new n(a.x,e.y,r),o=new n(e.x,t.y,r),u=new n(e.x,a.y,r);return{lon:d(i,s),lat:d(o,u)}}function c(e,a,r){var n=r/t.earthRadius,i=o.deg2rad(a),s=Math.sin(n/2),u=Math.cos(i),d=2*o.asin(Math.sqrt(s*s/(u*u)));return o.rad2deg(d)}function M(e,a,r){return o.rad2deg(r/t.earthRadius)}function g(e,t,a){return{lat:M(e,t,a),lon:c(e,t,a)}}function l(e){var a=e/2,r=o.deg2rad(a);return(1-Math.sin(r))*t.earthRadius/Math.sin(r)}function f(e,a){var r=o.deg2rad(a/2),n=(e+t.earthRadius)*Math.cos(r)-Math.sqrt(Math.pow(Math.cos(r)*(e+t.earthRadius),2)-e*e-2*e*t.earthRadius);return 2*o.acos((Math.pow(e+t.earthRadius,2)+Math.pow(t.earthRadius,2)-Math.pow(n,2))/(2*(e+t.earthRadius)*t.earthRadius))*t.earthRadius}function R(e,a){function r(e){var a=o.deg2rad(e.latitude),r=o.deg2rad(e.longitude),n=Math.cos(a),i=t.earthRadius+(e.z||0);return[Math.cos(r)*n*i,Math.sin(a)*i,-Math.sin(r)*n*i]}var n=r(e),i=r(a),s=[i[0]-n[0],i[1]-n[1],i[2]-n[2]];return Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2])}function m(e,t){var a=e/15;return t||(a=Math.round(a)),a}function w(e,t){u(e,v),t||(t={hours:0,minutes:0,seconds:0}),t.hours=m(v.x,!0);var a=t.hours%1;t.hours-=a,t.minutes=60*a;var r=t.minutes%1;return t.minutes-=r,t.seconds=Math.round(60*r),t}function p(e,a){a=a||t.earthRadius;var n=r.vec3.dot(e,e),i=a*a;return Math.sqrt(Math.abs(n-i))}Object.defineProperty(t,"__esModule",{value:!0}),t.earthRadius=a.wgs84Radius,t.halfEarthCircumference=Math.PI*t.earthRadius,t.earthCircumference=2*t.halfEarthCircumference,t.metersPerDegree=t.halfEarthCircumference/180;var v=new n(0,0,i.WGS84);t.getGreatCircleDistance=d,t.getGreatCircleSpanAt=h,t.getLonDeltaForDistance=c,t.getLatDeltaForDistance=M,t.getLatLonDeltaForDistance=g,t.getMaxCameraAltitude=l,t.getViewExtentDistance=f,t.computeCarthesianDistance=R,t.longitudeToTimezone=m,t.positionToTimezone=w,t.distanceToIdealHorizon=p});