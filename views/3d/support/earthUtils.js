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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/mathUtils","../../../geometry/Point","../../../geometry/support/geodesicConstants"],(function(e,t,a,n,r){"use strict";function i(e,t,i,o){var s,u;e instanceof n&&t instanceof n&&(i=t.longitude,o=t.latitude,u=e.latitude,s=e.longitude);var d=a.deg2rad(u),c=a.deg2rad(o),g=d-c,l=a.deg2rad(s)-a.deg2rad(i),h=Math.sin(g/2),M=Math.sin(l/2),m=2*a.asinClamped(Math.sqrt(h*h+Math.cos(d)*Math.cos(c)*M*M))*r.earthRadius;return Math.round(1e4*m)/1e4}function o(e,t){var a=e/15;return t||(a=Math.round(a)),a}Object.defineProperty(t,"__esModule",{value:!0}),t.positionToTimezone=t.longitudeToTimezone=t.getMaxCameraAltitude=t.getLatDeltaForDistance=t.getLonDeltaForDistance=t.getGreatCircleSpanAt=t.getGreatCircleDistance=void 0,t.getGreatCircleDistance=i,t.getGreatCircleSpanAt=function(e,t,a){var r=t.spatialReference,o=new n(t.x,e.y,r),s=new n(a.x,e.y,r),u=new n(e.x,t.y,r),d=new n(e.x,a.y,r);return{lon:i(o,s),lat:i(u,d)}},t.getLonDeltaForDistance=function(e,t){var n=t/r.earthRadius,i=a.deg2rad(e),o=Math.sin(n/2),s=Math.cos(i),u=2*a.asinClamped(Math.sqrt(o*o/(s*s)));return a.rad2deg(u)},t.getLatDeltaForDistance=function(e){return a.rad2deg(e/r.earthRadius)},t.getMaxCameraAltitude=function(e){var t=e/2,n=a.deg2rad(t);return(1-Math.sin(n))*r.earthRadius/Math.sin(n)},t.longitudeToTimezone=o,t.positionToTimezone=function(e,t){t||(t={hours:0,minutes:0,seconds:0}),t.hours=o(e[0],!0);var a=t.hours%1;t.hours-=a,t.minutes=60*a;var n=t.minutes%1;return t.minutes-=n,t.seconds=Math.round(60*n),t}}));