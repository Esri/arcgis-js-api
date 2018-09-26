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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../geometry/support/aaBoundingRect","../lib/gl-matrix","./TerrainConst","./TilingScheme"],function(e,t,r,o,a,n,i){function c(e,t,r){void 0===r&&(r=0);var a=e.extent;if(0===r)return o.containsPoint(a,t);var n=Math.min(a[2]-a[0],a[3]-a[1]);return o.containsPointWithMargin(a,t,r*n)}function l(e,t,r,o){a.vec3d.set(r,h),h[o]=t[o];var n,i=a.vec3d.subtract(h,t),c=a.vec3d.subtract(e,t,v),l=a.vec3d.dot(c,i),s=a.vec3d.dot(i,i);n=l<=0?t:s<=l?r:a.vec3d.add(t,a.vec3d.scale(i,l/s),h);var u=a.vec3d.subtract(e,n,h);return Math.PI/2-Math.atan(u[2]/Math.sqrt(u[0]*u[0]+u[1]*u[1]))}function s(e,t){var r=e.getElevationBounds(),o=e.extent,a=.5*(r[0]+r[1]);g[0]=o[0],g[1]=o[1],g[2]=a,f[0]=o[2],f[1]=o[3],f[2]=a;var n=1/0,i=1/0;return t[0]<g[0]?n=l(t,g,f,0):t[0]>f[0]&&(n=l(t,f,g,0)),t[1]<g[1]?i=l(t,g,f,1):t[1]>f[1]&&(i=l(t,f,g,1)),Math.min(n,i)}function u(e,t,o){if(e.spatialReference.isGeographic)return new r("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var a=i.checkUnsupported(e);if(a)return a;var n=d(e,t);return n||(o&&!e.spatialReference.equals(o)?new r("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}function d(e,t){var a=e.lods,c=a[0].resolution*Math.pow(2,a[0].level),l=[c*e.size[0],c*e.size[1]],s=[e.origin.x,e.origin.y],u=o.fromExtent(t),d=o.create();i.computeRowColExtent(u,l,s,d);var h=(d[2]-d[0])*(d[3]-d[1]);if(h>n.MAX_ROOT_TILES){var v=a[0].scale*Math.pow(2,a[0].level),g=Math.max((u[3]-u[1])/e.size[1],(u[2]-u[0])/e.size[0]),f=g*v/c,p=Math.floor(Math.log(f)/Math.log(10));return f=Math.ceil(f/Math.pow(10,p))*Math.pow(10,p),new r("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(v).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+f.toLocaleString()+".",{level0Scale:v,suggestedLevel0Scale:f,requiredNumRootTiles:h,allowedNumRootTiles:n.MAX_ROOT_TILES})}return null}Object.defineProperty(t,"__esModule",{value:!0});var h=a.vec3d.create(),v=a.vec3d.create(),g=a.vec3d.create(),f=a.vec3d.create();t.isInsideExtent=c,t.tiltOnEdge=l,t.tiltToExtentEdge=s,t.checkIfTileInfoSupportedForViewSR=u});