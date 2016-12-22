// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/lang","./mathUtils","../../../geometry/Point","../../../geometry/SpatialReference","../../../geometry/support/webMercatorUtils"],function(t,e,a,n,r){function i(t,e){return t.spatialReference.wkid!==n.WGS84.wkid?r.webMercatorToGeographic(t,!1,e):(e.x=t.x,e.y=t.y),e.z=t.z,e}var o=6378137,s=Math.PI*o,u=new a(0,0,n.WGS84),c={earthRadius:o,halfEarthCircumference:s,earthCircumference:2*s,metersPerDegree:s/180,getGreatCircleDistance:function(a,n,r,i){void 0===r&&void 0===i&&t.isObject(a)&&t.isObject(n)&&(r=n.get("longitude"),i=n.get("latitude"),n=a.get("latitude"),a=a.get("longitude"));var s=e.deg2rad(n),u=e.deg2rad(i),c=e.deg2rad(a),d=e.deg2rad(r),h=s-u,g=c-d,l=Math.sin(h/2),M=Math.sin(g/2),f=2*e.asin(Math.sqrt(l*l+Math.cos(s)*Math.cos(u)*M*M)),m=f*o;return m=Math.round(1e4*m)/1e4},getGreatCircleSpanAt:function(t,e,n){var r=e.spatialReference,i=new a(e.x,t.y,r),o=new a(n.x,t.y,r),s=new a(t.x,e.y,r),u=new a(t.x,n.y,r);return{lon:this.getGreatCircleDistance(i,o),lat:this.getGreatCircleDistance(s,u)}},getLonDeltaForDistance:function(t,a,n){var r=n/o,i=e.deg2rad(a),s=Math.sin(r/2),u=Math.cos(i),c=2*e.asin(Math.sqrt(s*s/(u*u)));return e.rad2deg(c)},getLatDeltaForDistance:function(t,a,n){return e.rad2deg(n/o)},getLatLonDeltaForDistance:function(t,e,a){return{lat:this.getLatDeltaForDistance(t,e,a),lon:this.getLonDeltaForDistance(t,e,a)}},getMaxCameraAltitude:function(t){var a=t/2,n=e.deg2rad(a);return(1-Math.sin(n))*o/Math.sin(n)},getViewExtentDistance:function(t,a){var n=e.deg2rad(a/2),r=(t+o)*Math.cos(n)-Math.sqrt(Math.pow(Math.cos(n)*(t+o),2)-t*t-2*t*o),i=2*e.acos((Math.pow(t+o,2)+Math.pow(o,2)-Math.pow(r,2))/(2*(t+o)*o));return i*o},computeCarthesianDistance:function(t,a){function n(t){var a=e.deg2rad(t.get("latitude")),n=e.deg2rad(t.get("longitude")),r=Math.cos(a),i=o+(t.z||0);return[Math.cos(n)*r*i,Math.sin(a)*i,-Math.sin(n)*r*i]}var r=n(t),i=n(a),s=[i[0]-r[0],i[1]-r[1],i[2]-r[2]];return Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2])},longitudeToTimezone:function(t,e){var a=t/15;return e||(a=Math.round(a)),a},positionToTimezone:function(t,e){i(t,u),e||(e={hours:0,minutes:0,seconds:0}),e.hours=c.longitudeToTimezone(u.x,!0);var a=e.hours%1;e.hours-=a,e.minutes=60*a;var n=e.minutes%1;return e.minutes-=n,e.seconds=Math.round(60*n),e}};return c});