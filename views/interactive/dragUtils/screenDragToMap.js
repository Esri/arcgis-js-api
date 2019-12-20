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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/maybe"],function(e,t,r,n){function a(e,t,r){if(n.isNone(e))return null;var a=null,o=0,i=0,l=0;return function(s){"start"===s.action&&(a=e(s.start,r),o=0,i=0,l=0);var c=o,u=i,f=l,d=e(s.screenPoint,r);n.isSome(a)&&n.isSome(d)&&(c=1&t?d.x-a.x:0,u=2&t?d.y-a.y:0,f=4&t?d.z-a.z:0);var v=s.action,D={action:v,deltaX:c,deltaY:u,deltaZ:f,spatialReference:r};return o=c,i=u,l=f,D}}function o(e,t,r){if(n.isNone(e))return null;var a=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);if(0===a)return null;var o=t[0]/a,i=t[1]/a,l=t[2]/a,s=null,c=0,u=0,f=0;return function(t){"start"===t.action&&(s=e(t.start,r),c=0,u=0,f=0);var a=c,d=u,v=f,D=e(t.screenPoint,r);if(n.isSome(s)&&n.isSome(D)){a=D.x-s.x,d=D.y-s.y,v=D.z-s.z;var m=a*o+d*i+v*l;a=m*o,d=m*i,v=m*l}var p=t.action,y={action:p,deltaX:a,deltaY:d,deltaZ:v,previousDeltaX:c,previousDeltaY:u,previousDeltaZ:f,spatialReference:r};return c=a,u=d,f=v,y}}function i(e,r){return a(e,t.horizontalDegreesOfFreedom,r)}function l(e,r){return a(e,t.verticalDegreesOfFreedom,r)}function s(e){if(n.isNone(e))return e;var t=0,a=0,o=0;return function(i){var l=e(i);if(n.isNone(l))return null;"start"===i.action&&(t=0,a=0,o=0);var s=l.deltaX-t,c=l.deltaY-a,u=l.deltaZ-o,f=r({},l,{deltaDeltaX:s,deltaDeltaY:c,deltaDeltaZ:u});return t=l.deltaX,a=l.deltaY,o=l.deltaZ,f}}function c(e){if(n.isNone(e))return e;var t=0,a=0;return function(o){var i=e(o);if(n.isNone(i))return null;"start"===o.action&&(t=o.start.x,a=o.start.y);var l=o.screenPoint.x-t,s=o.screenPoint.y-a,c=r({},i,{screenDeltaDeltaX:l,screenDeltaDeltaY:s});return t=o.screenPoint.x,a=o.screenPoint.y,c}}Object.defineProperty(t,"__esModule",{value:!0}),t.createFromProject=a,t.createMapAxisConstrainedScreenToMapDrag=o,t.createXYConstrainedFromProject=i,t.createZConstrainedFromProject=l,t.withHistoryInfo=s,t.withScreenHistoryInfo=c,t.horizontalDegreesOfFreedom=3,t.verticalDegreesOfFreedom=4});