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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../lib/glMatrix","../support/aaBoundingRect","./TerrainConst","./TilingScheme"],function(e,t,i,a,r,o,n){function l(e,t){var i,a=!0,o=e.extent,n=r.containsPoint(o,t);if(n)i=e.getElevation(t);else{var l=e.getElevationBounds();i=.5*(l[0]+l[1])}if(i>t[2])a=!1;else if(!n){var c=Math.min(o[2]-o[0],o[3]-o[1]),u=e.hideSkirtsDistanceFromExtentMargin*c;if(r.containsPointWithMargin(o,t,u)){var d=s(e,t);d>e.hideSkirtsMinimumCameraTilt&&(a=!1)}else a=!1}a!==e.skirts&&(e.skirts=a)}function c(e,t,i,r){a.vec3d.set(i,h),h[r]=t[r];var o,n=a.vec3d.subtract(h,t),l=a.vec3d.subtract(e,t,v),c=a.vec3d.dot(l,n),s=a.vec3d.dot(n,n);o=c<=0?t:s<=c?i:a.vec3d.add(t,a.vec3d.scale(n,c/s),h);var u=a.vec3d.subtract(e,o,h);return Math.PI/2-Math.atan(u[2]/Math.sqrt(u[0]*u[0]+u[1]*u[1]))}function s(e,t){var i=e.getElevationBounds(),a=e.extent,r=.5*(i[0]+i[1]);g[0]=a[0],g[1]=a[1],g[2]=r,f[0]=a[2],f[1]=a[3],f[2]=r;var o=1/0,n=1/0;return t[0]<g[0]?o=c(t,g,f,0):t[0]>f[0]&&(o=c(t,f,g,0)),t[1]<g[1]?n=c(t,g,f,1):t[1]>f[1]&&(n=c(t,f,g,1)),Math.min(o,n)}function u(e,t,a){if(e.spatialReference.isGeographic)return new i("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var r=n.checkUnsupported(e);if(r)return r;var o=d(e,t);return o||(a&&!e.spatialReference.equals(a)?new i("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null)}function d(e,t){var a=e.lods,l=a[0].resolution*Math.pow(2,a[0].level),c=[l*e.size[0],l*e.size[1]],s=[e.origin.x,e.origin.y],u=r.fromExtent(t),d=r.create();n.computeRowColExtent(u,c,s,d);var h=(d[2]-d[0])*(d[3]-d[1]);if(h>o.MAX_ROOT_TILES){var v=a[0].scale*Math.pow(2,a[0].level),g=Math.max((u[3]-u[1])/e.size[1],(u[2]-u[0])/e.size[0]),f=g*v/l,p=Math.floor(Math.log(f)/Math.log(10));return f=Math.ceil(f/Math.pow(10,p))*Math.pow(10,p),new i("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(v).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+f.toLocaleString()+".",{level0Scale:v,suggestedLevel0Scale:f,requiredNumRootTiles:h,allowedNumRootTiles:o.MAX_ROOT_TILES})}return null}Object.defineProperty(t,"__esModule",{value:!0});var h=a.vec3d.create(),v=a.vec3d.create(),g=a.vec3d.create(),f=a.vec3d.create();t.autoUpdateSkirtsVisibility=l,t.tiltOnEdge=c,t.tiltToExtentEdge=s,t.checkIfTileInfoSupportedForViewSR=u});