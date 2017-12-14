// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../../../geometry","../../../../geometry/support/webMercatorUtils","../../lib/glMatrix"],function(e,t,r,n,i){function a(e,t){if("extent"===e.type)return e.center;if("polygon"===e.type)return e.centroid;for(var n=e.paths,i=0,a=0,l=0,u=e.hasZ,c=0,v=0,f=n;v<f.length;v++){for(var d=f[v],h=0,s=d;h<s.length;h++){var p=s[h];i+=p[0],a+=p[1],u&&(l+=p[2])}c+=d.length}i/=c,a/=c,l/=c;var g=new r.Point({x:i,y:a,z:u?l:void 0,spatialReference:e.spatialReference});return t&&o(g,t),g}function o(e,t){var i=e.spatialReference;i.equals(t)||(i.isWebMercator&&t.wkid===r.SpatialReference.WGS84.wkid?n.webMercatorToGeographic(e,!1,e):t.isWebMercator&&i.wkid===r.SpatialReference.WGS84.wkid&&n.geographicToWebMercator(e,!1,e))}function l(e,t,r){if(e){t||(t=m.create());var n=e,i=.5*n.width*(r-1),a=.5*n.height*(r-1);return n.width<1e-7*n.height?i+=a/20:n.height<1e-7*n.width&&(a+=i/20),m.set4(n.xmin-i,n.ymin-a,n.xmax+i,n.ymax+a,t),t}return null}function u(e,t){for(var r=0;r<e.geometries.length;++r){var n=e.geometries[r].data,i=n.vertexAttributes.auxpos1;i&&i.data[3]!==t&&(i.data[3]=t,e.geometryVertexAttrsUpdated(r))}}function c(e,t){var r=[1,1,1,1];return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!==t&&void 0!==t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),r}function v(e,t,r,n,i){for(var a=[i[0],i[1],i[2],i[3]],o=0;3>o;++o)e&&null!=e[o]?a[o]=e[o]:r&&null!=r[o]&&(a[o]=r[o]);return null!=t?a[3]=t:null!=n&&(a[3]=n),a}function f(e,t,r,n){void 0===e&&(e=b),void 0===n&&(n=1);var i=new Array(3);if(null==t||null==r)i[0]=1,i[1]=1,i[2]=1;else{for(var a=void 0,o=0,l=2;l>=0;l--){var u=e[l],c=void 0,v=null!=u,f=0===l&&!a&&!v,d=r[l];"symbolValue"===u||f?c=0!==d?t[l]/d:1:v&&"proportional"!==u&&isFinite(u)&&(c=0!==d?u/d:1),null!=c&&(i[l]=c,a=c,o=Math.max(o,Math.abs(c)))}for(var l=2;l>=0;l--)null==i[l]?i[l]=a:0===i[l]&&(i[l]=.001*o)}for(var l=2;l>=0;l--)i[l]/=n;return i}function d(e,t){var r=t.isPrimitive,n=t.width,i=t.depth,a=t.height,o=10,l=r?o:1;if(null==n&&null==a&&null==i)return[l*e[0],l*e[1],l*e[2]];for(var u,c=[n,i,a],v=0;3>v;v++){var f=c[v];if(null!=f){u=f/e[v];break}}for(var v=0;3>v;v++)null==c[v]&&(c[v]=e[v]*u);return c}function h(e){return null!=e.isPrimitive}function s(e){return h(e)&&(e=[e.width,e.depth,e.height]),p(e)?null:"Symbol sizes may not be negative values"}function p(e){if(Array.isArray(e)){for(var t=0,r=e;t<r.length;t++){var n=r[t];if(!p(n))return!1}return!0}return null==e||e>=0}function g(e,t,r,n){void 0===n&&(n=y.identity());var i=e||0,a=t||0,o=r||0;return 0!==i&&y.rotateZ(n,-i/180*Math.PI,n),0!==a&&y.rotateX(n,a/180*Math.PI,n),0!==o&&y.rotateY(n,o/180*Math.PI,n),n}Object.defineProperty(t,"__esModule",{value:!0});var m=i.vec4d,y=i.mat4d,b=[1,1,1];t.computeCentroid=a,t.convertToSR=o,t.enlargeExtent=l,t.updateVertexAttributeAuxpos1w=u,t.mixinColorAndOpacity=c,t.overrideColor=v,t.computeObjectScale=f,t.computeSizeWithResourceSize=d,t.validateSymbolLayerSize=s,t.computeObjectRotation=g});