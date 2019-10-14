// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/wgs84Constants","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Point","./projectionUtils"],function(e,t,a,r,n,i,o,s){function u(e,r,n,i){var s,u;e instanceof o&&r instanceof o&&(n=r.longitude,i=r.latitude,u=e.latitude,s=e.longitude);var d=a.deg2rad(u),c=a.deg2rad(i),h=a.deg2rad(s),l=a.deg2rad(n),g=d-c,f=h-l,M=Math.sin(g/2),m=Math.sin(f/2),R=2*a.asinClamped(Math.sqrt(M*M+Math.cos(d)*Math.cos(c)*m*m)),v=R*t.earthRadius;return Math.round(1e4*v)/1e4}function d(e,t,a){var r=t.spatialReference,n=new o(t.x,e.y,r),i=new o(a.x,e.y,r),s=new o(e.x,t.y,r),d=new o(e.x,a.y,r);return{lon:u(n,i),lat:u(s,d)}}function c(e,r,n){var i=n/t.earthRadius,o=a.deg2rad(r),s=Math.sin(i/2),u=Math.cos(o),d=2*a.asinClamped(Math.sqrt(s*s/(u*u)));return a.rad2deg(d)}function h(e,r,n){return a.rad2deg(n/t.earthRadius)}function l(e,t,a){return{lat:h(e,t,a),lon:c(e,t,a)}}function g(e){var r=e/2,n=a.deg2rad(r);return(1-Math.sin(n))*t.earthRadius/Math.sin(n)}function f(e,r){var n=a.deg2rad(r/2),i=(e+t.earthRadius)*Math.cos(n)-Math.sqrt(Math.pow(Math.cos(n)*(e+t.earthRadius),2)-e*e-2*e*t.earthRadius);return 2*a.acosClamped((Math.pow(e+t.earthRadius,2)+Math.pow(t.earthRadius,2)-Math.pow(i,2))/(2*(e+t.earthRadius)*t.earthRadius))*t.earthRadius}function M(e,t){var a=s.wgs84ComparableLonLatToECEF(p,e.longitude,e.latitude,e.z||0),r=s.wgs84ComparableLonLatToECEF(C,t.longitude,t.latitude,t.z||0),n=[r[0]-a[0],r[1]-a[1],r[2]-a[2]];return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}function m(e,t){var a=e/15;return t||(a=Math.round(a)),a}function R(e,t){t||(t={hours:0,minutes:0,seconds:0}),t.hours=m(e[0],!0);var a=t.hours%1;t.hours-=a,t.minutes=60*a;var r=t.minutes%1;return t.minutes-=r,t.seconds=Math.round(60*r),t}function v(e,a){a=a||t.earthRadius;var r=n.vec3.dot(e,e),i=a*a;return Math.sqrt(Math.abs(r-i))}Object.defineProperty(t,"__esModule",{value:!0}),t.earthRadius=r.wgs84Radius,t.halfEarthRadius=t.earthRadius/2,t.halfEarthCircumference=Math.PI*t.earthRadius,t.earthCircumference=2*t.halfEarthCircumference,t.metersPerDegree=t.halfEarthCircumference/180,t.getGreatCircleDistance=u,t.getGreatCircleSpanAt=d,t.getLonDeltaForDistance=c,t.getLatDeltaForDistance=h,t.getLatLonDeltaForDistance=l,t.getMaxCameraAltitude=g,t.getViewExtentDistance=f,t.computeCartesianDistance=M,t.longitudeToTimezone=m,t.positionToTimezone=R,t.distanceToIdealHorizon=v;var p=i.vec3f64.create(),C=i.vec3f64.create()});