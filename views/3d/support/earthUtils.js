// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./mathUtils","../../../geometry/Point","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils"],function(e,t,a,r,n,i){function s(e,t){return e.spatialReference.wkid!==n.WGS84.wkid?i.webMercatorToGeographic(e,!1,t):(t.x=e.x,t.y=e.y),t.z=e.z,t}function u(e,n,i,s){var u,o;e instanceof r&&n instanceof r&&(i=n.longitude,s=n.latitude,o=e.latitude,u=e.longitude);var d=a.deg2rad(o),h=a.deg2rad(s),c=a.deg2rad(u),g=a.deg2rad(i),l=d-h,M=c-g,f=Math.sin(l/2),w=Math.sin(M/2),R=2*a.asin(Math.sqrt(f*f+Math.cos(d)*Math.cos(h)*w*w)),m=R*t.earthRadius;return Math.round(1e4*m)/1e4}function o(e,t,a){var n=t.spatialReference,i=new r(t.x,e.y,n),s=new r(a.x,e.y,n),o=new r(e.x,t.y,n),d=new r(e.x,a.y,n);return{lon:u(i,s),lat:u(o,d)}}function d(e,r,n){var i=n/t.earthRadius,s=a.deg2rad(r),u=Math.sin(i/2),o=Math.cos(s),d=2*a.asin(Math.sqrt(u*u/(o*o)));return a.rad2deg(d)}function h(e,r,n){return a.rad2deg(n/t.earthRadius)}function c(e,t,a){return{lat:h(e,t,a),lon:d(e,t,a)}}function g(e){var r=e/2,n=a.deg2rad(r);return(1-Math.sin(n))*t.earthRadius/Math.sin(n)}function l(e,r){var n=a.deg2rad(r/2),i=(e+t.earthRadius)*Math.cos(n)-Math.sqrt(Math.pow(Math.cos(n)*(e+t.earthRadius),2)-e*e-2*e*t.earthRadius),s=2*a.acos((Math.pow(e+t.earthRadius,2)+Math.pow(t.earthRadius,2)-Math.pow(i,2))/(2*(e+t.earthRadius)*t.earthRadius));return s*t.earthRadius}function M(e,r){function n(e){var r=a.deg2rad(e.latitude),n=a.deg2rad(e.longitude),i=Math.cos(r),s=t.earthRadius+(e.z||0);return[Math.cos(n)*i*s,Math.sin(r)*s,-Math.sin(n)*i*s]}var i=n(e),s=n(r),u=[s[0]-i[0],s[1]-i[1],s[2]-i[2]];return Math.sqrt(u[0]*u[0]+u[1]*u[1]+u[2]*u[2])}function f(e,t){var a=e/15;return t||(a=Math.round(a)),a}function w(e,t){s(e,R),t||(t={hours:0,minutes:0,seconds:0}),t.hours=f(R.x,!0);var a=t.hours%1;t.hours-=a,t.minutes=60*a;var r=t.minutes%1;return t.minutes-=r,t.seconds=Math.round(60*r),t}Object.defineProperty(t,"__esModule",{value:!0}),t.wgs84Radius=6378137,t.wgs84InverseFlattening=298.257223563,t.wgs84Flattening=1/t.wgs84InverseFlattening,t.wgs84PolarRadius=t.wgs84Radius*(1-t.wgs84Flattening),t.wgs84Eccentricity=.0818191908426215,t.earthRadius=t.wgs84Radius,t.halfEarthCircumference=Math.PI*t.earthRadius,t.earthCircumference=2*t.halfEarthCircumference,t.metersPerDegree=t.halfEarthCircumference/180;var R=new r(0,0,n.WGS84);t.getGreatCircleDistance=u,t.getGreatCircleSpanAt=o,t.getLonDeltaForDistance=d,t.getLatDeltaForDistance=h,t.getLatLonDeltaForDistance=c,t.getMaxCameraAltitude=g,t.getViewExtentDistance=l,t.computeCarthesianDistance=M,t.longitudeToTimezone=f,t.positionToTimezone=w});