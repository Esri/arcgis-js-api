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

define(["require","exports","../../../../geometry/SpatialReference","../../../../geometry/Point","../../../../geometry/support/webMercatorUtils","../../lib/glMatrix"],function(e,t,r,n,i,o){function a(e,t){if("extent"===e.type)return e.center;for(var r=e["polygon"===e.type?"rings":"paths"],i=0,o=0,a=0,u=e.hasZ,c=0,g=0;g<r.length;g++){for(var d=r[g],s=0;s<d.length;s++)i+=d[s][0],o+=d[s][1],u&&(a+=d[s][2]);c+=d.length}i/=c,o/=c,a/=c;var p=new n({x:i,y:o,z:u?a:void 0,spatialReference:e.spatialReference});return t&&l(p,t),p}function l(e,t){var n=e.spatialReference;n.equals(t)||(n.isWebMercator&&t.wkid===r.WGS84.wkid?i.webMercatorToGeographic(e,!1,e):t.isWebMercator&&n.wkid===r.WGS84.wkid&&i.geographicToWebMercator(e,!1,e))}function u(e,t,r){if(e){t||(t=s.create());var n=e,i=.5*n.width*(r-1),o=.5*n.height*(r-1);return n.width<1e-7*n.height?i+=o/20:n.height<1e-7*n.width&&(o+=i/20),s.set4(n.xmin-i,n.ymin-o,n.xmax+i,n.ymax+o,t),t}return null}function c(e,t){for(var r=0;r<e.geometries.length;++r){var n=e.geometries[r].data.vertexAttributes.auxpos1;n&&n.data[3]!==t&&(n.data[3]=t,e.geometryVertexAttrsUpdated(r))}}function g(e,t){var r=[1,1,1,1];return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!==t&&void 0!==t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),r}function d(e,t,r,n,i){for(var o=i.slice(),a=0;3>a;++a)e&&null!=e[a]?o[a]=e[a]:r&&null!=r[a]&&(o[a]=r[a]);return null!=t?o[3]=t:null!=n&&(o[3]=n),o}var s=o.vec4d;t.computeCentroid=a,t.convertToSR=l,t.enlargeExtent=u,t.updateVertexAttributeAuxpos1w=c,t.mixinColorAndOpacity=g,t.overrideColor=d});