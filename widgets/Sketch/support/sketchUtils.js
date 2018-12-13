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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../geometry","../../../geometry/Circle","../../../geometry/geometryEngine","../../../geometry/support/spatialReferenceUtils"],function(e,n,t,r,a,o){function i(e,n){var r=e.map(function(e){return Array.apply([],e)});r.forEach(function(e,n){e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]||e.push(e[0])});var i=new t.Polygon({rings:r,spatialReference:n.spatialReference});return i.rings.forEach(function(e){i.isClockwise(e)||e.reverse()}),i.isSelfIntersecting&&o.isValid(n.spatialReference)&&(i=a.simplify(i)),i}function y(e,n){return new t.Polyline({paths:e,spatialReference:n.spatialReference})}function l(e,n){return new t.Multipoint({points:e,spatialReference:n.spatialReference})}function c(e,n,t){var r=[];if(n.toScreen(e[0][0],e[0][1],null,g),n.toScreen(e[1][0],e[1][1],null,v),t){var a=Math.round(v.x-g.x),o=Math.round(v.y-g.y);r.push([g.x-a,g.y-o],[v.x,g.y-o],[v.x,v.y],[g.x-a,v.y])}else r.push([g.x,g.y],[v.x,g.y],[v.x,v.y],[g.x,v.y]);return i([r.map(function(e){var t=e[0],r=e[1];return n.toMap(t,r,d),[d.x,d.y]})],n)}function s(e,n,r){var a=[];n.toScreen(e[0][0],e[0][1],null,g),n.toScreen(e[1][0],e[1][1],null,v);var o=Math.round(v.x-g.x),y=Math.round(v.y-g.y),l=Math.max(Math.abs(o),Math.abs(y));if(r){var c=new t.ScreenPoint(g.x+l,g.y+l),s=new t.ScreenPoint(g.x-l,g.y-l);a.push([c.x,s.y],[s.x,s.y],[s.x,c.y],[c.x,c.y])}else{var u=new t.ScreenPoint({x:o>0?g.x+l:g.x-l,y:y>0?g.y+l:g.y-l});a.push([g.x,g.y],[u.x,g.y],[u.x,u.y],[g.x,u.y])}return i([a.map(function(e){var t=e[0],r=e[1];return n.toMap(t,r,d),[d.x,d.y]})],n)}function u(e,n,r){n.toScreen(e[0][0],e[0][1],null,g),n.toScreen(e[1][0],e[1][1],null,v);var a=Math.round(v.x-g.x),o=Math.round(v.y-g.y),i=new t.Point({x:r?g.x:g.x+a/2,y:r?g.y:g.y+o/2}),y=t.Polygon.createEllipse({center:i,longAxis:r?a:a/2,shortAxis:r?o:o/2,numberOfPoints:60,view:n});return y.isClockwise(y.rings[0])||(y.rings[0].reverse(),y=y.clone()),y}function x(e,n,o){var i=null,y=null;if(o)i=new t.Point({x:e[0][0],y:e[0][1],spatialReference:n.spatialReference}),y=new t.Point({x:e[1][0],y:e[1][1],spatialReference:n.spatialReference});else{n.toScreen(e[0][0],e[0][1],null,g),n.toScreen(e[1][0],e[1][1],null,v);var l=Math.round(v.x-g.x),c=Math.round(v.y-g.y),s=Math.max(Math.abs(l),Math.abs(c)),u=new t.ScreenPoint({x:l>0?g.x+s/2:g.x-s/2,y:c>0?g.y+s/2:g.y-s/2});i=n.toMap(u),y=n.toMap(Math.abs(l)>Math.abs(c)?u.x-s/2:u.x,Math.abs(l)>Math.abs(c)?u.y:u.y-s/2)}var x=a.distance(i,y,h);return new r({center:i,radius:x,radiusUnit:h,spatialReference:n.spatialReference})}function p(e,n,t,r){n.toScreen(e[0][0],e[0][1],null,g),n.toScreen(e[1][0],e[1][1],null,v);var a=Math.round(v.x-g.x),o=Math.round(v.y-g.y);if(t&&r){var y=Math.sqrt(a*a+o*o);n.toMap(-.8660254037844386*y+g.x,.5*y+g.y,P),n.toMap(.8660254037844386*y+g.x,.5*y+g.y,w),n.toMap(g.x,g.y-y,S)}else if(t)n.toMap(o>0?v.x:g.x,g.y+o,P),n.toMap(g.x-a,o>0?v.y:g.y-o,w),n.toMap(o>0?g.x:v.x,g.y-o,S);else if(r){var l=Math.max(Math.abs(a),Math.abs(o)),c=l*Math.sqrt(3)/2;n.toMap(g.x,o>0?g.y+l:g.y,P),n.toMap(a>0?g.x+l:g.x-l,o>0?g.y+l:g.y,w),n.toMap(a>0?g.x+l/2:g.x-l/2,o>0?g.y+l-c:g.y-c,S)}else n.toMap(o>0?g.x+a/2:v.x,g.y,P),n.toMap(o>0?g.x:g.x+a/2,v.y,w),n.toMap(o>0?v.x:g.x,o>0?v.y:g.y,S);return i([[[P.x,P.y],[S.x,S.y],[w.x,w.y]]],n)}function f(e){var n=e.rings.map(function(e){return Array.apply([],e)});return n.forEach(function(e){e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&e.pop()}),n}function M(e){return e.paths.map(function(e){return Array.apply([],e)})}Object.defineProperty(n,"__esModule",{value:!0});var h="meters",g=new t.ScreenPoint,v=new t.ScreenPoint,P=new t.Point,w=new t.Point,S=new t.Point,d=new t.Point;n.createPolygon=i,n.createPolyline=y,n.createMultipoint=l,n.createRectangle=c,n.createSquare=s,n.createEllipse=u,n.createCircle=x,n.createTriangle=p,n.getVerticesForPolygon=f,n.getVerticesForPolyline=M});