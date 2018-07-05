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

define(["require","exports","../../../geometry","../../../geometry/Circle","../../../geometry/geometryEngine"],function(e,n,t,r,a){function o(e,n){var r=e.map(function(e){return Array.apply([],e)});r.forEach(function(e,n){e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]||e.push(e[0])});var o=new t.Polygon({rings:r,spatialReference:n.spatialReference});return o.rings.forEach(function(e){o.isClockwise(e)||e.reverse()}),o.isSelfIntersecting&&(o=a.simplify(o)),o}function i(e,n){return new t.Polyline({paths:e,spatialReference:n.spatialReference})}function y(e,n){return new t.Multipoint({points:e,spatialReference:n.spatialReference})}function l(e,n,t){var r=[];if(n.toScreen(e[0][0],e[0][1],null,h),n.toScreen(e[1][0],e[1][1],null,g),t){var a=Math.round(g.x-h.x),i=Math.round(g.y-h.y);r.push([h.x-a,h.y-i],[g.x,h.y-i],[g.x,g.y],[h.x-a,g.y])}else r.push([h.x,h.y],[g.x,h.y],[g.x,g.y],[h.x,g.y]);return o([r.map(function(e){var t=e[0],r=e[1];return n.toMap(t,r,S),[S.x,S.y]})],n)}function c(e,n,r){var a=[];n.toScreen(e[0][0],e[0][1],null,h),n.toScreen(e[1][0],e[1][1],null,g);var i=Math.round(g.x-h.x),y=Math.round(g.y-h.y),l=Math.max(Math.abs(i),Math.abs(y));if(r){var c=new t.ScreenPoint(h.x+l,h.y+l),x=new t.ScreenPoint(h.x-l,h.y-l);a.push([c.x,x.y],[x.x,x.y],[x.x,c.y],[c.x,c.y])}else{var u=new t.ScreenPoint({x:i>0?h.x+l:h.x-l,y:y>0?h.y+l:h.y-l});a.push([h.x,h.y],[u.x,h.y],[u.x,u.y],[h.x,u.y])}return o([a.map(function(e){var t=e[0],r=e[1];return n.toMap(t,r,S),[S.x,S.y]})],n)}function x(e,n,r){n.toScreen(e[0][0],e[0][1],null,h),n.toScreen(e[1][0],e[1][1],null,g);var a=Math.round(g.x-h.x),o=Math.round(g.y-h.y),i=new t.Point({x:r?h.x:h.x+a/2,y:r?h.y:h.y+o/2}),y=t.Polygon.createEllipse({center:i,longAxis:r?a:a/2,shortAxis:r?o:o/2,numberOfPoints:60,view:n});return y.isClockwise(y.rings[0])||(y.rings[0].reverse(),y=y.clone()),y}function u(e,n,o){var i=null,y=null;if(o)i=new t.Point({x:e[0][0],y:e[0][1],spatialReference:n.spatialReference}),y=new t.Point({x:e[1][0],y:e[1][1],spatialReference:n.spatialReference});else{n.toScreen(e[0][0],e[0][1],null,h),n.toScreen(e[1][0],e[1][1],null,g);var l=Math.round(g.x-h.x),c=Math.round(g.y-h.y),x=Math.max(Math.abs(l),Math.abs(c)),u=new t.ScreenPoint({x:l>0?h.x+x/2:h.x-x/2,y:c>0?h.y+x/2:h.y-x/2});i=n.toMap(u),y=n.toMap(Math.abs(l)>Math.abs(c)?u.x-x/2:u.x,Math.abs(l)>Math.abs(c)?u.y:u.y-x/2)}var s=a.distance(i,y,M);return new r({center:i,radius:s,radiusUnit:M,spatialReference:n.spatialReference})}function s(e,n,t,r){n.toScreen(e[0][0],e[0][1],null,h),n.toScreen(e[1][0],e[1][1],null,g);var a=Math.round(g.x-h.x),i=Math.round(g.y-h.y);if(t&&r){var y=Math.sqrt(a*a+i*i);n.toMap(-.8660254037844386*y+h.x,.5*y+h.y,v),n.toMap(.8660254037844386*y+h.x,.5*y+h.y,P),n.toMap(h.x,h.y-y,w)}else if(t)n.toMap(i>0?g.x:h.x,h.y+i,v),n.toMap(h.x-a,i>0?g.y:h.y-i,P),n.toMap(i>0?h.x:g.x,h.y-i,w);else if(r){var l=Math.max(Math.abs(a),Math.abs(i)),c=l*Math.sqrt(3)/2;n.toMap(h.x,i>0?h.y+l:h.y,v),n.toMap(a>0?h.x+l:h.x-l,i>0?h.y+l:h.y,P),n.toMap(a>0?h.x+l/2:h.x-l/2,i>0?h.y+l-c:h.y-c,w)}else n.toMap(i>0?h.x+a/2:g.x,h.y,v),n.toMap(i>0?h.x:h.x+a/2,g.y,P),n.toMap(i>0?g.x:h.x,i>0?g.y:h.y,w);return o([[[v.x,v.y],[w.x,w.y],[P.x,P.y]]],n)}function p(e){var n=e.rings.map(function(e){return Array.apply([],e)});return n.forEach(function(e){e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&e.pop()}),n}function f(e){return e.paths.map(function(e){return Array.apply([],e)})}Object.defineProperty(n,"__esModule",{value:!0});var M="meters",h=new t.ScreenPoint,g=new t.ScreenPoint,v=new t.Point,P=new t.Point,w=new t.Point,S=new t.Point;n.createPolygon=o,n.createPolyline=i,n.createMultipoint=y,n.createRectangle=l,n.createSquare=c,n.createEllipse=x,n.createCircle=u,n.createTriangle=s,n.getVerticesForPolygon=p,n.getVerticesForPolyline=f});