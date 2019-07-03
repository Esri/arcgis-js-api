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

define(["require","exports","../../../core/wgs84Constants","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Point","./mathUtils","./projectionUtils"],function(e,t,a,r,n,i,s,o){function u(e,a,r,n){var o,u;e instanceof i&&a instanceof i&&(r=a.longitude,n=a.latitude,u=e.latitude,o=e.longitude);var d=s.deg2rad(u),h=s.deg2rad(n),c=s.deg2rad(o),l=s.deg2rad(r),g=d-h,f=c-l,M=Math.sin(g/2),m=Math.sin(f/2),R=2*s.asin(Math.sqrt(M*M+Math.cos(d)*Math.cos(h)*m*m)),v=R*t.earthRadius;return Math.round(1e4*v)/1e4}function d(e,t,a){var r=t.spatialReference,n=new i(t.x,e.y,r),s=new i(a.x,e.y,r),o=new i(e.x,t.y,r),d=new i(e.x,a.y,r);return{lon:u(n,s),lat:u(o,d)}}function h(e,a,r){var n=r/t.earthRadius,i=s.deg2rad(a),o=Math.sin(n/2),u=Math.cos(i),d=2*s.asin(Math.sqrt(o*o/(u*u)));return s.rad2deg(d)}function c(e,a,r){return s.rad2deg(r/t.earthRadius)}function l(e,t,a){return{lat:c(e,t,a),lon:h(e,t,a)}}function g(e){var a=e/2,r=s.deg2rad(a);return(1-Math.sin(r))*t.earthRadius/Math.sin(r)}function f(e,a){var r=s.deg2rad(a/2),n=(e+t.earthRadius)*Math.cos(r)-Math.sqrt(Math.pow(Math.cos(r)*(e+t.earthRadius),2)-e*e-2*e*t.earthRadius);return 2*s.acos((Math.pow(e+t.earthRadius,2)+Math.pow(t.earthRadius,2)-Math.pow(n,2))/(2*(e+t.earthRadius)*t.earthRadius))*t.earthRadius}function M(e,t){var a=o.wgs84ComparableLonLatToECEF(p,e.longitude,e.latitude,e.z||0),r=o.wgs84ComparableLonLatToECEF(w,t.longitude,t.latitude,t.z||0),n=[r[0]-a[0],r[1]-a[1],r[2]-a[2]];return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}function m(e,t){var a=e/15;return t||(a=Math.round(a)),a}function R(e,t){t||(t={hours:0,minutes:0,seconds:0}),t.hours=m(e[0],!0);var a=t.hours%1;t.hours-=a,t.minutes=60*a;var r=t.minutes%1;return t.minutes-=r,t.seconds=Math.round(60*r),t}function v(e,a){a=a||t.earthRadius;var n=r.vec3.dot(e,e),i=a*a;return Math.sqrt(Math.abs(n-i))}Object.defineProperty(t,"__esModule",{value:!0}),t.earthRadius=a.wgs84Radius,t.halfEarthRadius=t.earthRadius/2,t.halfEarthCircumference=Math.PI*t.earthRadius,t.earthCircumference=2*t.halfEarthCircumference,t.metersPerDegree=t.halfEarthCircumference/180,t.getGreatCircleDistance=u,t.getGreatCircleSpanAt=d,t.getLonDeltaForDistance=h,t.getLatDeltaForDistance=c,t.getLatLonDeltaForDistance=l,t.getMaxCameraAltitude=g,t.getViewExtentDistance=f,t.computeCartesianDistance=M,t.longitudeToTimezone=m,t.positionToTimezone=R,t.distanceToIdealHorizon=v;var p=n.vec3f64.create(),w=n.vec3f64.create()});