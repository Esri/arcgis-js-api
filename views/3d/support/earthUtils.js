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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../geometry/Point","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils","../lib/glMatrix","./mathUtils"],function(e,t,a,r,n,i,s){function u(e,t){return e.spatialReference.wkid!==r.WGS84.wkid?n.webMercatorToGeographic(e,!1,t):(t.x=e.x,t.y=e.y),t.z=e.z,t}function o(e,r,n,i){var u,o;e instanceof a&&r instanceof a&&(n=r.longitude,i=r.latitude,o=e.latitude,u=e.longitude);var d=s.deg2rad(o),h=s.deg2rad(i),c=s.deg2rad(u),g=s.deg2rad(n),l=d-h,M=c-g,f=Math.sin(l/2),w=Math.sin(M/2),R=2*s.asin(Math.sqrt(f*f+Math.cos(d)*Math.cos(h)*w*w)),m=R*t.earthRadius;return Math.round(1e4*m)/1e4}function d(e,t,r){var n=t.spatialReference,i=new a(t.x,e.y,n),s=new a(r.x,e.y,n),u=new a(e.x,t.y,n),d=new a(e.x,r.y,n);return{lon:o(i,s),lat:o(u,d)}}function h(e,a,r){var n=r/t.earthRadius,i=s.deg2rad(a),u=Math.sin(n/2),o=Math.cos(i),d=2*s.asin(Math.sqrt(u*u/(o*o)));return s.rad2deg(d)}function c(e,a,r){return s.rad2deg(r/t.earthRadius)}function g(e,t,a){return{lat:c(e,t,a),lon:h(e,t,a)}}function l(e){var a=e/2,r=s.deg2rad(a);return(1-Math.sin(r))*t.earthRadius/Math.sin(r)}function M(e,a){var r=s.deg2rad(a/2),n=(e+t.earthRadius)*Math.cos(r)-Math.sqrt(Math.pow(Math.cos(r)*(e+t.earthRadius),2)-e*e-2*e*t.earthRadius);return 2*s.acos((Math.pow(e+t.earthRadius,2)+Math.pow(t.earthRadius,2)-Math.pow(n,2))/(2*(e+t.earthRadius)*t.earthRadius))*t.earthRadius}function f(e,a){function r(e){var a=s.deg2rad(e.latitude),r=s.deg2rad(e.longitude),n=Math.cos(a),i=t.earthRadius+(e.z||0);return[Math.cos(r)*n*i,Math.sin(a)*i,-Math.sin(r)*n*i]}var n=r(e),i=r(a),u=[i[0]-n[0],i[1]-n[1],i[2]-n[2]];return Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])}function w(e,t){var a=e/15;return t||(a=Math.round(a)),a}function R(e,t){u(e,v),t||(t={hours:0,minutes:0,seconds:0}),t.hours=w(v.x,!0);var a=t.hours%1;t.hours-=a,t.minutes=60*a;var r=t.minutes%1;return t.minutes-=r,t.seconds=Math.round(60*r),t}function m(e,a){a=a||t.earthRadius;var r=i.vec3d.dot(e,e),n=a*a;return Math.sqrt(Math.abs(r-n))}Object.defineProperty(t,"__esModule",{value:!0}),t.wgs84Radius=6378137,t.wgs84InverseFlattening=298.257223563,t.wgs84Flattening=1/t.wgs84InverseFlattening,t.wgs84PolarRadius=t.wgs84Radius*(1-t.wgs84Flattening),t.wgs84Eccentricity=.0818191908426215,t.earthRadius=t.wgs84Radius,t.halfEarthCircumference=Math.PI*t.earthRadius,t.earthCircumference=2*t.halfEarthCircumference,t.metersPerDegree=t.halfEarthCircumference/180;var v=new a(0,0,r.WGS84);t.getGreatCircleDistance=o,t.getGreatCircleSpanAt=d,t.getLonDeltaForDistance=h,t.getLatDeltaForDistance=c,t.getLatLonDeltaForDistance=g,t.getMaxCameraAltitude=l,t.getViewExtentDistance=M,t.computeCarthesianDistance=f,t.longitudeToTimezone=w,t.positionToTimezone=R,t.distanceToIdealHorizon=m});