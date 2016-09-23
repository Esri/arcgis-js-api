// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","./TilingScheme","./TerrainConst","../../../core/Error","../../../geometry/support/scaleUtils","../support/aaBoundingRect","../lib/glMatrix"],function(e,t,a,r,i,n,o,l){function s(e,t){var a,r=!0,i=e.extent,n=o.contains(i,t);if(n)a=e.getElevation(t);else{var l=e.getElevationBounds();a=.5*(l[0]+l[1])}var s=t[2],c=a>s;if(c)r=!1;else if(!n){var h=Math.min(i[2]-i[0],i[3]-i[1]),g=e.hideSkirtsDistanceFromExtentMargin*h;if(o.containsWithMargin(i,t,g)){var f=u(e,t);f>e.hideSkirtsMinimumCameraTilt&&(r=!1)}else r=!1}r!==e.skirts&&(e.skirts=r)}function c(e,t,a,r){f.set(a,d),d[r]=t[r];var i,n=f.subtract(d,t),o=f.subtract(e,t,p),l=f.dot(o,n),s=f.dot(n,n);i=0>=l?t:l>=s?a:f.add(t,f.scale(n,l/s),d);var c=f.subtract(e,i,d);return Math.PI/2-Math.atan(c[2]/Math.sqrt(c[0]*c[0]+c[1]*c[1]))}function u(e,t){var a=e.getElevationBounds(),r=e.extent,i=.5*(a[0]+a[1]);v[0]=r[0],v[1]=r[1],v[2]=i,m[0]=r[2],m[1]=r[3],m[2]=i;var n=1/0,o=1/0;return t[0]<v[0]?n=c(t,v,m,0):t[0]>m[0]&&(n=c(t,m,v,0)),t[1]<v[1]?o=c(t,v,m,1):t[1]>m[1]&&(o=c(t,m,v,1)),Math.min(n,o)}function h(e,t,r){if(null==n.getUnitValue(e.spatialReference))return new i("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var o=a.checkUnsupported(e);if(o)return o;var l=g(e,t);return l?l:e.spatialReference.equals(r)?null:new i("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene")}function g(e,t){var n=e.lods,l=n[0].resolution*Math.pow(2,n[0].level),s=[l*e.size[0],l*e.size[1]],c=[e.origin.x,e.origin.y],u=o.fromExtent(t),h=o.create();a.computeRowColExtent(u,s,c,h);var g=(h[2]-h[0])*(h[3]-h[1]);if(g>r.MAX_ROOT_TILES){var f=n[0].scale*Math.pow(2,n[0].level),d=Math.max((u[3]-u[1])/e.size[1],(u[2]-u[0])/e.size[0]),p=d*f/l,v=Math.floor(Math.log(p)/Math.log(10));return p=Math.ceil(p/Math.pow(10,v))*Math.pow(10,v),new i("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(f).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+p.toLocaleString()+".",{level0Scale:f,suggestedLevel0Scale:p,requiredNumRootTiles:g,allowedNumRootTiles:r.MAX_ROOT_TILES})}return null}var f=l.vec3d,d=f.create(),p=f.create(),v=f.create(),m=f.create();t.autoUpdateSkirtsVisibility=s,t.tiltOnEdge=c,t.tiltToExtentEdge=u,t.checkIfTileInfoSupportedForViewSR=h});