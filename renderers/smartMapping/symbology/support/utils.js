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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../Basemap","../../../../core/screenUtils","../../../../geometry/ScreenPoint","../../../../support/basemapUtils"],function(e,t,r,n,i,o){function a(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b}function c(e,t){var r=0;if(e.length===t.length){var n=e.every(function(e,r){return a(e,t[r])});if(n)r=1;else{n=e.slice(0).reverse().every(function(e,r){return a(e,t[r])}),n&&(r=-1)}}return r}function s(e){var t=e.width,r=e.height,n=e.pixelSizeAt(new i(.5*t,.5*r));if(n<=0&&(n=e.pixelSizeAt(new i(.5*t,.95*r)))<=0){var o=e.camera.position.clone();o.z=0,n=2*e.pixelSizeAt(o)}return n}function l(e,t){return Math.ceil(s(t)*n.pt2px(n.toPt(e)))}function u(e){return"multipoint"===e?"point":"mesh"===e?"polygon":e}function g(e,t,n){void 0===n&&(n=!0);var i=null;return"string"==typeof e&&t.indexOf(e)>-1?i=e:e instanceof r&&(i=o.getWellKnownBasemapId(e)),n?i||"gray":i}function p(e){var t=g(e,d,!1);return t?f.indexOf(t)>-1?"light":v.indexOf(t)>-1?"dark":void 0:null}Object.defineProperty(t,"__esModule",{value:!0});var f=["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],v=["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],d=[].concat(f).concat(v);t.hasIdenticalColors=c,t.getPixelSize=s,t.toWorldScale=l,t.getStorageType=u,t.getBasemapId=g,t.getBasemapTheme=p});