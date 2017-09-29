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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/SpatialReference","../../../../geometry/Point","../../../../geometry/support/webMercatorUtils","../../lib/glMatrix"],function(e,t,r,n,i,a){function o(e,t){if("extent"===e.type)return e.center;if("polygon"===e.type)return e.centroid;for(var r=e.paths,i=0,a=0,o=0,u=e.hasZ,c=0,v=0,f=r;v<f.length;v++){for(var d=f[v],h=0,s=d;h<s.length;h++){var p=s[h];i+=p[0],a+=p[1],u&&(o+=p[2])}c+=d.length}i/=c,a/=c,o/=c;var g=new n({x:i,y:a,z:u?o:void 0,spatialReference:e.spatialReference});return t&&l(g,t),g}function l(e,t){var n=e.spatialReference;n.equals(t)||(n.isWebMercator&&t.wkid===r.WGS84.wkid?i.webMercatorToGeographic(e,!1,e):t.isWebMercator&&n.wkid===r.WGS84.wkid&&i.geographicToWebMercator(e,!1,e))}function u(e,t,r){if(e){t||(t=y.create());var n=e,i=.5*n.width*(r-1),a=.5*n.height*(r-1);return n.width<1e-7*n.height?i+=a/20:n.height<1e-7*n.width&&(a+=i/20),y.set4(n.xmin-i,n.ymin-a,n.xmax+i,n.ymax+a,t),t}return null}function c(e,t){for(var r=0;r<e.geometries.length;++r){var n=e.geometries[r].data.vertexAttributes.auxpos1;n&&n.data[3]!==t&&(n.data[3]=t,e.geometryVertexAttrsUpdated(r))}}function v(e,t){var r=[1,1,1,1];return null!=e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),null!==t&&void 0!==t?r[3]=t:null!=e&&e.length>3&&(r[3]=e[3]),r}function f(e,t,r,n,i){for(var a=i.slice(),o=0;3>o;++o)e&&null!=e[o]?a[o]=e[o]:r&&null!=r[o]&&(a[o]=r[o]);return null!=t?a[3]=t:null!=n&&(a[3]=n),a}function d(e,t,r,n){void 0===e&&(e=x),void 0===n&&(n=1);var i=new Array(3);if(null==t||null==r)i[0]=1,i[1]=1,i[2]=1;else{for(var a=void 0,o=0,l=2;l>=0;l--){var u=e[l],c=void 0,v=null!=u,f=0===l&&!a&&!v,d=r[l];"symbolValue"===u||f?c=0!==d?t[l]/d:1:v&&"proportional"!==u&&isFinite(u)&&(c=0!==d?u/d:1),null!=c&&(i[l]=c,a=c,o=Math.max(o,Math.abs(c)))}for(var l=2;l>=0;l--)null==i[l]?i[l]=a:0===i[l]&&(i[l]=.001*o)}for(var l=2;l>=0;l--)i[l]/=n;return i}function h(e,t){var r=t.isPrimitive,n=t.width,i=t.depth,a=t.height,o=10,l=r?o:1;if(null==n&&null==a&&null==i)return[l*e[0],l*e[1],l*e[2]];for(var u,c=[n,i,a],v=0;3>v;v++){var f=c[v];if(null!=f){u=f/e[v];break}}for(var v=0;3>v;v++)null==c[v]&&(c[v]=e[v]*u);return c}function s(e){return null!=e.isPrimitive}function p(e){return s(e)&&(e=[e.width,e.depth,e.height]),g(e)?null:"Symbol sizes may not be negative values"}function g(e){if(Array.isArray(e)){for(var t=0,r=e;t<r.length;t++){var n=r[t];if(!g(n))return!1}return!0}return null==e||e>=0}function m(e,t,r,n){void 0===n&&(n=b.identity());var i=e||0,a=t||0,o=r||0;return 0!==i&&b.rotateZ(n,-i/180*Math.PI,n),0!==a&&b.rotateX(n,a/180*Math.PI,n),0!==o&&b.rotateY(n,o/180*Math.PI,n),n}Object.defineProperty(t,"__esModule",{value:!0});var y=a.vec4d,b=a.mat4d,x=[1,1,1];t.computeCentroid=o,t.convertToSR=l,t.enlargeExtent=u,t.updateVertexAttributeAuxpos1w=c,t.mixinColorAndOpacity=v,t.overrideColor=f,t.computeObjectScale=d,t.computeSizeWithResourceSize=h,t.validateSymbolLayerSize=p,t.computeObjectRotation=m});