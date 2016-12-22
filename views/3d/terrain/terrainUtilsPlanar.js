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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./TilingScheme","./TerrainConst","../../../core/Error","../support/aaBoundingRect","../lib/glMatrix"],function(e,t,a,i,r,o,n){function l(e,t){var a,i=!0,r=e.extent,n=o.contains(r,t);if(n)a=e.getElevation(t);else{var l=e.getElevationBounds();a=.5*(l[0]+l[1])}var s=t[2],u=a>s;if(u)i=!1;else if(!n){var h=Math.min(r[2]-r[0],r[3]-r[1]),g=e.hideSkirtsDistanceFromExtentMargin*h;if(o.containsWithMargin(r,t,g)){var f=c(e,t);f>e.hideSkirtsMinimumCameraTilt&&(i=!1)}else i=!1}i!==e.skirts&&(e.skirts=i)}function s(e,t,a,i){g.set(a,f),f[i]=t[i];var r,o=g.subtract(f,t),n=g.subtract(e,t,d),l=g.dot(n,o),s=g.dot(o,o);r=0>=l?t:l>=s?a:g.add(t,g.scale(o,l/s),f);var c=g.subtract(e,r,f);return Math.PI/2-Math.atan(c[2]/Math.sqrt(c[0]*c[0]+c[1]*c[1]))}function c(e,t){var a=e.getElevationBounds(),i=e.extent,r=.5*(a[0]+a[1]);v[0]=i[0],v[1]=i[1],v[2]=r,p[0]=i[2],p[1]=i[3],p[2]=r;var o=1/0,n=1/0;return t[0]<v[0]?o=s(t,v,p,0):t[0]>p[0]&&(o=s(t,p,v,0)),t[1]<v[1]?n=s(t,v,p,1):t[1]>p[1]&&(n=s(t,p,v,1)),Math.min(o,n)}function u(e,t,i){if(e.spatialReference.isGeographic)return new r("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var o=a.checkUnsupported(e);if(o)return o;var n=h(e,t);return n?n:i&&!e.spatialReference.equals(i)?new r("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null}function h(e,t){var n=e.lods,l=n[0].resolution*Math.pow(2,n[0].level),s=[l*e.size[0],l*e.size[1]],c=[e.origin.x,e.origin.y],u=o.fromExtent(t),h=o.create();a.computeRowColExtent(u,s,c,h);var g=(h[2]-h[0])*(h[3]-h[1]);if(g>i.MAX_ROOT_TILES){var f=n[0].scale*Math.pow(2,n[0].level),d=Math.max((u[3]-u[1])/e.size[1],(u[2]-u[0])/e.size[0]),v=d*f/l,p=Math.floor(Math.log(v)/Math.log(10));return v=Math.ceil(v/Math.pow(10,p))*Math.pow(10,p),new r("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(f).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+v.toLocaleString()+".",{level0Scale:f,suggestedLevel0Scale:v,requiredNumRootTiles:g,allowedNumRootTiles:i.MAX_ROOT_TILES})}return null}var g=n.vec3d,f=g.create(),d=g.create(),v=g.create(),p=g.create();t.autoUpdateSkirtsVisibility=l,t.tiltOnEdge=s,t.tiltToExtentEdge=c,t.checkIfTileInfoSupportedForViewSR=u});