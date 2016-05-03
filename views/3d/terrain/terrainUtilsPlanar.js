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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../support/aaBoundingRect","../lib/glMatrix"],function(t,e,a,i){function r(t,e){var i,r=!0,n=t.extent,o=a.contains(n,e);if(o)i=t.getElevation(e);else{var c=t.getElevationBounds();i=.5*(c[0]+c[1])}var u=e[2],d=i>u;if(d)r=!1;else if(!o){var v=Math.min(n[2]-n[0],n[3]-n[1]),l=t.hideSkirtsDistanceFromExtentMargin*v;if(a.containsWithMargin(n,e,l)){var f=s(t,e);f>t.hideSkirtsMinimumCameraTilt&&(r=!1)}else r=!1}r!==t.skirts&&(t.skirts=r)}function n(t,e,a,i){o.set(a,c),c[i]=e[i];var r,n=o.subtract(c,e),s=o.subtract(t,e,u),d=o.dot(s,n),v=o.dot(n,n);r=0>=d?e:d>=v?a:o.add(e,o.scale(n,d/v),c);var l=o.subtract(t,r,c);return Math.PI/2-Math.atan(l[2]/Math.sqrt(l[0]*l[0]+l[1]*l[1]))}function s(t,e){var a=t.getElevationBounds(),i=t.extent,r=.5*(a[0]+a[1]);d[0]=i[0],d[1]=i[1],d[2]=r,v[0]=i[2],v[1]=i[3],v[2]=r;var s=1/0,o=1/0;return e[0]<d[0]?s=n(e,d,v,0):e[0]>v[0]&&(s=n(e,v,d,0)),e[1]<d[1]?o=n(e,d,v,1):e[1]>v[1]&&(o=n(e,v,d,1)),Math.min(s,o)}var o=i.vec3d,c=o.create(),u=o.create(),d=o.create(),v=o.create();e.autoUpdateSkirtsVisibility=r,e.tiltOnEdge=n,e.tiltToExtentEdge=s});