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

define(["require","exports","../../../../geometry","../../../../geometry/support/boundsUtils","../../../../geometry/support/coordsUtils"],function(e,n,t,o,r){function a(e,n,o,r,a){var i=e.clone();if("point"===i.type){var s=r.toScreen(i);return r.toMap(s.x+n,s.y+o)}return("polyline"===i.type?i.paths:i.rings).forEach(function(e,s){e.forEach(function(e,c){var f,p=e[0],l=e[1];if(!1===a){var u=p+n*r.state.resolution,y=l-o*r.state.resolution;f=new t.Point(u,y,r.spatialReference)}else{var P=r.toScreen(p,l);f=r.toMap(P.x+n,P.y+o)}i.setPoint(s,c,f)})}),i}function i(e,n,t,o){return"polyline"===e.type?c(e,n,t,o):s(e,n,t,o)}function s(e,n,a,i){var s=r.geometryToCoordinates(e),c=o.getRingsOrPathsBounds(s),f=c[0],p=c[1],l=c[2],u=c[3],y=new t.Point(f,u,i.spatialReference),P=new t.Point(l,p,i.spatialReference),R=(y.x+P.x)/2,g=(y.y+P.y)/2,h=[];return s.forEach(function(e){e.forEach(function(e){var o=e[0],r=e[1],s=new t.Point(o,r,i.spatialReference),c=new t.Point((s.x-R)*n+R,(s.y-g)*a+g,i.spatialReference);h.push([c.x,c.y])})}),new t.Polygon({rings:h,spatialReference:i.spatialReference})}function c(e,n,a,i){var s=r.geometryToCoordinates(e),c=o.getRingsOrPathsBounds(s),f=c[0],p=c[1],l=c[2],u=c[3],y=new t.Point(f,u,i.spatialReference),P=new t.Point(l,p,i.spatialReference),R=(y.x+P.x)/2,g=(y.y+P.y)/2,h=[];return s.forEach(function(e){e.forEach(function(e){var o=e[0],r=e[1],s=new t.Point(o,r,i.spatialReference),c=new t.Point((s.x-R)*n+R,(s.y-g)*a+g,i.spatialReference);h.push([c.x,c.y])})}),new t.Polyline({paths:h,spatialReference:i.spatialReference})}Object.defineProperty(n,"__esModule",{value:!0}),n.move=a,n.scale=i});