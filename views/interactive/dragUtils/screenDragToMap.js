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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/maybe"],(function(e,t,r,n){function a(e,t,r){if(n.isNone(e))return null;var a=null,i=0,o=0,l=0;return function(c){if("cancel"===c.action)return null;"start"===c.action&&(a=e(c.start,r),i=0,o=0,l=0);var s=i,u=o,f=l,d=e(c.screenPoint,r);n.isSome(a)&&n.isSome(d)&&(s=1&t?d.x-a.x:0,u=2&t?d.y-a.y:0,f=4&t?d.z-a.z:0);var v=c.action;return i=s,o=u,l=f,{action:v,deltaX:s,deltaY:u,deltaZ:f,spatialReference:r}}}Object.defineProperty(t,"__esModule",{value:!0}),t.createFromProject=a,t.createMapAxisConstrainedScreenToMapDrag=function(e,t,r){if(n.isNone(e))return null;var a=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);if(0===a)return null;var i=t[0]/a,o=t[1]/a,l=t[2]/a,c=null,s=0,u=0,f=0;return function(t){if("cancel"===t.action)return null;"start"===t.action&&(c=e(t.start,r),s=0,u=0,f=0);var a=s,d=u,v=f,D=e(t.screenPoint,r);if(n.isSome(c)&&n.isSome(D)){a=D.x-c.x,d=D.y-c.y,v=D.z-c.z;var m=a*i+d*o+v*l;a=m*i,d=m*o,v=m*l}var p={action:t.action,deltaX:a,deltaY:d,deltaZ:v,previousDeltaX:s,previousDeltaY:u,previousDeltaZ:f,spatialReference:r};return s=a,u=d,f=v,p}},t.createXYConstrainedFromProject=function(e,r){return a(e,t.horizontalDegreesOfFreedom,r)},t.createZConstrainedFromProject=function(e,r){return a(e,t.verticalDegreesOfFreedom,r)},t.withHistoryInfo=function(e){if(n.isNone(e))return e;var t=0,a=0,i=0;return function(o){var l=e(o);if(n.isNone(l))return null;"start"===o.action&&(t=0,a=0,i=0);var c=l.deltaX-t,s=l.deltaY-a,u=l.deltaZ-i,f=r({},l,{deltaDeltaX:c,deltaDeltaY:s,deltaDeltaZ:u});return t=l.deltaX,a=l.deltaY,i=l.deltaZ,f}},t.withScreenHistoryInfo=function(e){if(n.isNone(e))return e;var t=0,a=0;return function(i){var o=e(i);if(n.isNone(o))return null;"start"===i.action&&(t=i.start.x,a=i.start.y);var l=i.screenPoint.x-t,c=i.screenPoint.y-a,s=r({},o,{screenDeltaDeltaX:l,screenDeltaDeltaY:c});return t=i.screenPoint.x,a=i.screenPoint.y,s}},t.horizontalDegreesOfFreedom=3,t.verticalDegreesOfFreedom=4}));