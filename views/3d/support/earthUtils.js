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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../core/wgs84Constants","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/Point","./projectionUtils"],(function(e,t,a,r,n,i,s,o){function u(e,r,n,i){var o,u;e instanceof s&&r instanceof s&&(n=r.longitude,i=r.latitude,u=e.latitude,o=e.longitude);var d=a.deg2rad(u),h=a.deg2rad(i),c=d-h,l=a.deg2rad(o)-a.deg2rad(n),g=Math.sin(c/2),f=Math.sin(l/2),M=2*a.asinClamped(Math.sqrt(g*g+Math.cos(d)*Math.cos(h)*f*f))*t.earthRadius;return Math.round(1e4*M)/1e4}function d(e,t){var a=e/15;return t||(a=Math.round(a)),a}Object.defineProperty(t,"__esModule",{value:!0}),t.earthRadius=r.wgs84Radius,t.halfEarthRadius=t.earthRadius/2,t.halfEarthCircumference=Math.PI*t.earthRadius,t.earthCircumference=2*t.halfEarthCircumference,t.metersPerDegree=t.halfEarthCircumference/180,t.getGreatCircleDistance=u,t.getGreatCircleSpanAt=function(e,t,a){var r=t.spatialReference,n=new s(t.x,e.y,r),i=new s(a.x,e.y,r),o=new s(e.x,t.y,r),d=new s(e.x,a.y,r);return{lon:u(n,i),lat:u(o,d)}},t.getLonDeltaForDistance=function(e,r){var n=r/t.earthRadius,i=a.deg2rad(e),s=Math.sin(n/2),o=Math.cos(i),u=2*a.asinClamped(Math.sqrt(s*s/(o*o)));return a.rad2deg(u)},t.getLatDeltaForDistance=function(e){return a.rad2deg(e/t.earthRadius)},t.getMaxCameraAltitude=function(e){var r=e/2,n=a.deg2rad(r);return(1-Math.sin(n))*t.earthRadius/Math.sin(n)},t.getViewExtentDistance=function(e,r){var n=a.deg2rad(r/2),i=(e+t.earthRadius)*Math.cos(n)-Math.sqrt(Math.pow(Math.cos(n)*(e+t.earthRadius),2)-e*e-2*e*t.earthRadius);return 2*a.acosClamped((Math.pow(e+t.earthRadius,2)+Math.pow(t.earthRadius,2)-Math.pow(i,2))/(2*(e+t.earthRadius)*t.earthRadius))*t.earthRadius},t.computeCartesianDistance=function(e,t){var a=o.wgs84ComparableLonLatToECEF(h,e.longitude,e.latitude,e.z||0),r=o.wgs84ComparableLonLatToECEF(c,t.longitude,t.latitude,t.z||0),n=[r[0]-a[0],r[1]-a[1],r[2]-a[2]];return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])},t.longitudeToTimezone=d,t.positionToTimezone=function(e,t){t||(t={hours:0,minutes:0,seconds:0}),t.hours=d(e[0],!0);var a=t.hours%1;t.hours-=a,t.minutes=60*a;var r=t.minutes%1;return t.minutes-=r,t.seconds=Math.round(60*r),t},t.distanceToIdealHorizon=function(e,a){a=a||t.earthRadius;var r=n.vec3.dot(e,e),i=a*a;return Math.sqrt(Math.abs(r-i))};var h=i.vec3f64.create(),c=i.vec3f64.create()}));