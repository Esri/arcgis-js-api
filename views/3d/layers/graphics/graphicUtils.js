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

define(["require","exports","../../../../geometry/SpatialReference","../../../../geometry/Point","../../../../geometry/support/webMercatorUtils","../../lib/glMatrix"],function(e,t,r,i,n,a){function o(e,t){if("extent"===e.type)return e.center;for(var r=e["polygon"===e.type?"rings":"paths"],n=0,a=0,o=0,g=e.hasZ,h=0,l=0;l<r.length;l++){for(var p=r[l],f=0;f<p.length;f++)n+=p[f][0],a+=p[f][1],g&&(o+=p[f][2]);h+=p.length}n/=h,a/=h,o/=h;var s=new i({x:n,y:a,z:g?o:void 0,spatialReference:e.spatialReference});return t&&c(s,t),s}function c(e,t){var i=e.spatialReference;i.equals(t)||(i.isWebMercator&&t.wkid===r.WGS84.wkid?n.webMercatorToGeographic(e,!1,e):t.isWebMercator&&i.wkid===r.WGS84.wkid&&n.geographicToWebMercator(e,!1,e))}function g(e,t,r){if(e){t||(t=h.create());var i=e,n=.5*i.width*(r-1),a=.5*i.height*(r-1);return i.width<1e-7*i.height?n+=a/20:i.height<1e-7*i.width&&(a+=n/20),h.set4(i.xmin-n,i.ymin-a,i.xmax+n,i.ymax+a,t),t}return null}var h=a.vec4d;t.computeCentroid=o,t.convertToSR=c,t.enlargeExtent=g});