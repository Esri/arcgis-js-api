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

define(["require","exports","../../../core/Error","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/support/aaBoundingRect","./TerrainConst","./TilingScheme"],function(e,t,r,o,a,n,i,c){function l(e,t,r){void 0===r&&(r=0);var o=e.extent;if(0===r)return n.containsPoint(o,t);var a=Math.min(o[2]-o[0],o[3]-o[1]);return n.containsPointWithMargin(o,t,r*a)}function s(e,t,r,a){o.vec3.copy(f,r),f[a]=t[a];var n,i=o.vec3.subtract(f,f,t),c=o.vec3.subtract(g,e,t),l=o.vec3.dot(c,i),s=o.vec3.dot(i,i);n=l<=0?t:s<=l?r:o.vec3.add(f,t,o.vec3.scale(i,i,l/s));var u=o.vec3.subtract(f,e,n);return Math.PI/2-Math.atan(u[2]/Math.sqrt(u[0]*u[0]+u[1]*u[1]))}function u(e,t){var r=e.elevationBounds,o=e.extent,a=.5*(r.min+r.max);d[0]=o[0],d[1]=o[1],d[2]=a,p[0]=o[2],p[1]=o[3],p[2]=a;var n=1/0,i=1/0;return t[0]<d[0]?n=s(t,d,p,0):t[0]>p[0]&&(n=s(t,p,d,0)),t[1]<d[1]?i=s(t,d,p,1):t[1]>p[1]&&(i=s(t,p,d,1)),Math.min(n,i)}function v(e,t,o){if(e.spatialReference.isGeographic)return new r("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var a=c.checkUnsupported(e);if(a)return a;var n=h(e,o);return n||(t&&!e.spatialReference.equals(t)?new r("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}function h(e,t){var o=e.lods,a=o[0].resolution*Math.pow(2,o[0].level),l=[a*e.size[0],a*e.size[1]],s=[e.origin.x,e.origin.y],u=n.fromExtent(t),v=n.create();c.computeRowColExtent(u,l,s,v);var h=(v[2]-v[0])*(v[3]-v[1]);if(h>i.MAX_ROOT_TILES){var f=o[0].scale*Math.pow(2,o[0].level),g=Math.max((u[3]-u[1])/e.size[1],(u[2]-u[0])/e.size[0]),d=g*f/a,p=Math.floor(Math.log(d)/Math.log(10));return d=Math.ceil(d/Math.pow(10,p))*Math.pow(10,p),new r("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(f).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+d.toLocaleString()+".",{level0Scale:f,suggestedLevel0Scale:d,requiredNumRootTiles:h,allowedNumRootTiles:i.MAX_ROOT_TILES})}return null}Object.defineProperty(t,"__esModule",{value:!0});var f=a.vec3f64.create(),g=a.vec3f64.create(),d=a.vec3f64.create(),p=a.vec3f64.create();t.isInsideExtent=l,t.tiltOnEdge=s,t.tiltToExtentEdge=u,t.checkIfTileInfoSupportedForViewSR=v});