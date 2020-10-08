// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../../../../geometry","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","../../../../geometry/support/centroid","../../../../geometry/support/coordsUtils","../../../../geometry/support/webMercatorUtils","../../../../layers/graphics/dehydratedFeatures","../../lib/glMatrix","../../support/mathUtils"],(function(e,t,r,n,i,a,o,u,l,s,c){Object.defineProperty(t,"__esModule",{value:!0});var m=[1,1,1];function d(e){var t=e.paths[0];if(!t||0===t.length)return null;var r=o.getPointOnPath(t,o.getPathLength(t)/2);return l.makeDehydratedPoint(r[0],r[1],r[2],e.spatialReference)}t.computeCentroid=function(e){if("point"===e.type)return e;if(l.isHydratedGeometry(e))switch(e.type){case"extent":return e.center;case"polygon":return e.centroid;case"polyline":return d(e);case"mesh":return e.extent.center}else switch(e.type){case"extent":return function(e){var t=c.isFinite(e.zmin);return l.makeDehydratedPoint(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),t?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}(e);case"polygon":return function(e){var t=a.ringsCentroid(e.rings,l.hasZ(e));return l.makeDehydratedPoint(t[0],t[1],t[2],e.spatialReference)}(e);case"polyline":return d(e)}},t.convertPointSR=function(e,t){var n=e.spatialReference;n.isWebMercator&&t.isWGS84?(u.xyToLngLat(e.x,e.y,p),e.x=p[0],e.y=p[1],e.spatialReference=r.SpatialReference.WGS84):t.isWebMercator&&n.isWGS84&&(u.lngLatToXY(e.x,e.y,p),e.x=p[0],e.y=p[1],e.spatialReference=r.SpatialReference.WebMercator)},t.enlargeExtent=function(e,t,r){if(e){t||(t=i.create());var n=e,a=.5*n.width*(r-1),o=.5*n.height*(r-1);return n.width<1e-7*n.height?a+=o/20:n.height<1e-7*n.width&&(o+=a/20),s.vec4d.set4(n.xmin-a,n.ymin-o,n.xmax+a,n.ymax+o,t),t}return null},t.updateVertexAttributeAuxpos1w=function(e,t){for(var r=0;r<e.geometries.length;++r){var n=e.geometries[r].data.vertexAttributes.auxpos1;n&&n.data[3]!==t&&(n.data[3]=t,e.geometryVertexAttrsUpdated(r))}},t.mixinColorAndOpacity=function(e,t){var r=[1,1,1,1];return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!=t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),r},t.overrideColor=function(e,t,r,n,i,a){void 0===a&&(a=[0,0,0,0]);for(var o=0;o<3;++o)e&&null!=e[o]?a[o]=e[o]:r&&null!=r[o]?a[o]=r[o]:a[o]=i[o];return a[3]=null!=t?t:null!=n?n:i[3],a},t.computeObjectScale=function(e,t,r,n){void 0===e&&(e=m),void 0===n&&(n=1);var i=new Array(3);if(null==t||null==r)i[0]=1,i[1]=1,i[2]=1;else{for(var a=void 0,o=0,u=2;u>=0;u--){var l=e[u],s=void 0,c=null!=l,d=0===u&&!a&&!c,p=r[u];"symbolValue"===l||d?s=0!==p?t[u]/p:1:c&&"proportional"!==l&&isFinite(l)&&(s=0!==p?l/p:1),null!=s&&(i[u]=s,a=s,o=Math.max(o,Math.abs(s)))}for(u=2;u>=0;u--)null==i[u]?i[u]=a:0===i[u]&&(i[u]=.001*o)}for(u=2;u>=0;u--)i[u]/=n;return i},t.computeSizeWithResourceSize=function(e,t){var r=t.isPrimitive,n=t.width,i=t.depth,a=t.height,o=r?10:1;if(null==n&&null==a&&null==i)return[o*e[0],o*e[1],o*e[2]];for(var u,l=[n,i,a],s=0;s<3;s++){var c=l[s];if(null!=c){u=c/e[s];break}}for(s=0;s<3;s++)null==l[s]&&(l[s]=e[s]*u);return l},t.validateSymbolLayerSize=function(e){return null!=e.isPrimitive&&(e=[e.width,e.depth,e.height]),function e(t){if(Array.isArray(t)){for(var r=0,n=t;r<n.length;r++){var i=n[r];if(!e(i))return!1}return!0}return null==t||t>=0}(e)?null:"Symbol sizes may not be negative values"},t.computeObjectRotation=function(e,t,r,n){void 0===n&&(n=s.mat4d.identity());var i=e||0,a=t||0,o=r||0;return 0!==i&&s.mat4d.rotateZ(n,-i/180*Math.PI,n),0!==a&&s.mat4d.rotateX(n,a/180*Math.PI,n),0!==o&&s.mat4d.rotateY(n,o/180*Math.PI,n),n},t.demResolutionForBoundingBox=function(e,t){return null!=t.minDemResolution?t.minDemResolution:n.isPoint(e)?t.minDemResolutionForPoints:.01*n.maximumDimension(e)};var p=[0,0]}));