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

define(["require","exports","../../../core/Error","../../../core/libs/gl-matrix-2/gl-matrix","../../../geometry/support/aaBoundingRect","./TerrainConst","./TilingScheme"],function(e,t,r,o,a,n,i){function c(e,t,r){void 0===r&&(r=0);var o=e.extent;if(0===r)return a.containsPoint(o,t);var n=Math.min(o[2]-o[0],o[3]-o[1]);return a.containsPointWithMargin(o,t,r*n)}function l(e,t,r,a){o.vec3.copy(v,r),v[a]=t[a];var n,i=o.vec3.subtract(v,v,t),c=o.vec3.subtract(f,e,t),l=o.vec3.dot(c,i),s=o.vec3.dot(i,i);n=l<=0?t:s<=l?r:o.vec3.add(v,t,o.vec3.scale(i,i,l/s));var u=o.vec3.subtract(v,e,n);return Math.PI/2-Math.atan(u[2]/Math.sqrt(u[0]*u[0]+u[1]*u[1]))}function s(e,t){var r=e.getElevationBounds(),o=e.extent,a=.5*(r[0]+r[1]);g[0]=o[0],g[1]=o[1],g[2]=a,d[0]=o[2],d[1]=o[3],d[2]=a;var n=1/0,i=1/0;return t[0]<g[0]?n=l(t,g,d,0):t[0]>d[0]&&(n=l(t,d,g,0)),t[1]<g[1]?i=l(t,g,d,1):t[1]>d[1]&&(i=l(t,d,g,1)),Math.min(n,i)}function u(e,t,o){if(e.spatialReference.isGeographic)return new r("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var a=i.checkUnsupported(e);if(a)return a;var n=h(e,t);return n||(o&&!e.spatialReference.equals(o)?new r("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}function h(e,t){var o=e.lods,c=o[0].resolution*Math.pow(2,o[0].level),l=[c*e.size[0],c*e.size[1]],s=[e.origin.x,e.origin.y],u=a.fromExtent(t),h=a.create();i.computeRowColExtent(u,l,s,h);var v=(h[2]-h[0])*(h[3]-h[1]);if(v>n.MAX_ROOT_TILES){var f=o[0].scale*Math.pow(2,o[0].level),g=Math.max((u[3]-u[1])/e.size[1],(u[2]-u[0])/e.size[0]),d=g*f/c,p=Math.floor(Math.log(d)/Math.log(10));return d=Math.ceil(d/Math.pow(10,p))*Math.pow(10,p),new r("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(f).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+d.toLocaleString()+".",{level0Scale:f,suggestedLevel0Scale:d,requiredNumRootTiles:v,allowedNumRootTiles:n.MAX_ROOT_TILES})}return null}Object.defineProperty(t,"__esModule",{value:!0});var v=o.vec3f64.create(),f=o.vec3f64.create(),g=o.vec3f64.create(),d=o.vec3f64.create();t.isInsideExtent=c,t.tiltOnEdge=l,t.tiltToExtentEdge=s,t.checkIfTileInfoSupportedForViewSR=u});