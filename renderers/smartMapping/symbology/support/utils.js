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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../Basemap","../../../../core/screenUtils","../../../../support/basemapUtils"],function(e,t,r,n,i){function o(e,t){return e.r===t.r&&e.g===t.g&&e.b===t.b}function a(e,t){var r=0;if(e.length===t.length){var n=e.every(function(e,r){return o(e,t[r])});if(n)r=1;else{n=e.slice(0).reverse().every(function(e,r){return o(e,t[r])}),n&&(r=-1)}}return r}function c(e){var t=e.width,r=e.height,i=e.pixelSizeAt(n.createScreenPoint(.5*t,.5*r));if(i<=0&&(i=e.pixelSizeAt(n.createScreenPoint(.5*t,.95*r)))<=0){var o=e.camera.position.clone();o.z=0,i=2*e.pixelSizeAt(o)}return i}function s(e,t){return Math.ceil(c(t)*n.pt2px(n.toPt(e)))}function l(e){return"multipoint"===e?"point":"mesh"===e?"polygon":e}function u(e,t,n){void 0===n&&(n=!0);var o=null;return"string"==typeof e&&t.indexOf(e)>-1?o=e:e instanceof r&&(o=i.getWellKnownBasemapId(e)),n?o||"gray":o}function g(e){var t=u(e,v,!1);return t?p.indexOf(t)>-1?"light":f.indexOf(t)>-1?"dark":void 0:null}Object.defineProperty(t,"__esModule",{value:!0});var p=["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],f=["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],v=[].concat(p).concat(f);t.hasIdenticalColors=a,t.getPixelSize=c,t.toWorldScale=s,t.getStorageType=l,t.getBasemapId=u,t.getBasemapTheme=g});