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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../../../geometry/support/aaBoundingRect","./TerrainConst","./TilingScheme"],(function(e,t,r,o,n,i,a,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkIfTileInfoSupportedForViewSR=t.tiltToExtentEdge=t.tiltOnEdge=t.isInsideExtent=void 0;var l=n.vec3f64.create(),s=n.vec3f64.create(),u=n.vec3f64.create(),v=n.vec3f64.create();function h(e,t,r,n){o.vec3.copy(l,r),l[n]=t[n];var i,a=o.vec3.subtract(l,l,t),c=o.vec3.subtract(s,e,t),u=o.vec3.dot(c,a),v=o.vec3.dot(a,a);i=u<=0?t:v<=u?r:o.vec3.add(l,t,o.vec3.scale(a,a,u/v));var h=o.vec3.subtract(l,e,i);return Math.PI/2-Math.atan(h[2]/Math.sqrt(h[0]*h[0]+h[1]*h[1]))}t.isInsideExtent=function(e,t,r){void 0===r&&(r=0);var o=e.extent;if(0===r)return i.containsPoint(o,t);var n=Math.min(o[2]-o[0],o[3]-o[1]);return i.containsPointWithMargin(o,t,r*n)},t.tiltOnEdge=h,t.tiltToExtentEdge=function(e,t){var r=e.elevationBounds,o=e.extent,n=.5*(r.min+r.max);u[0]=o[0],u[1]=o[1],u[2]=n,v[0]=o[2],v[1]=o[3],v[2]=n;var i=1/0,a=1/0;return t[0]<u[0]?i=h(t,u,v,0):t[0]>v[0]&&(i=h(t,v,u,0)),t[1]<u[1]?a=h(t,u,v,1):t[1]>v[1]&&(a=h(t,v,u,1)),Math.min(i,a)},t.checkIfTileInfoSupportedForViewSR=function(e,t,o){if(e.spatialReference.isGeographic)return new r("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var n=c.checkUnsupported(e);if(n)return n;var l=function(e,t){var o=e.lods,n=o[0].resolution*Math.pow(2,o[0].level),l=[n*e.size[0],n*e.size[1]],s=[e.origin.x,e.origin.y],u=i.fromExtent(t),v=i.create();c.computeRowColExtent(u,l,s,v);var h=(v[2]-v[0])*(v[3]-v[1]);if(h>a.MAX_ROOT_TILES){var f=o[0].scale*Math.pow(2,o[0].level),d=Math.max((u[3]-u[1])/e.size[1],(u[2]-u[0])/e.size[0])*f/n,g=Math.floor(Math.log(d)/Math.log(10));return d=Math.ceil(d/Math.pow(10,g))*Math.pow(10,g),new r("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(f).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+d.toLocaleString()+".",{level0Scale:f,suggestedLevel0Scale:d,requiredNumRootTiles:h,allowedNumRootTiles:a.MAX_ROOT_TILES})}return null}(e,o);return l||(t&&!e.spatialReference.equals(t)?new r("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}}));