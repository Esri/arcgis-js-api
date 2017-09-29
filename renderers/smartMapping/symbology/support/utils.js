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

define(["require","exports","../../../../geometry/ScreenPoint","../../../../core/screenUtils","../../../../Basemap","../../../../support/basemapUtils"],function(e,t,r,n,o,i){function a(e){var t=e.width,n=e.height,o=e.pixelSizeAt(new r(.5*t,.5*n));if(0>=o&&(o=e.pixelSizeAt(new r(.5*t,.95*n)),0>=o)){var i=e.camera.position.clone();i.z=0,o=2*e.pixelSizeAt(i)}return o}function c(e,t){return Math.ceil(a(t)*n.pt2px(n.toPt(e)))}function s(e){return"multipoint"===e?"point":"mesh"===e?"polygon":e}function l(e,t,r){void 0===r&&(r=!0);var n=null;return"string"==typeof e&&t.indexOf(e)>-1?n=e:e instanceof o&&(n=i.getWellKnownBasemapId(e)),r?n||"gray":n}function p(e){var t=l(e,d,!1);return t?g.indexOf(t)>-1?"light":u.indexOf(t)>-1?"dark":void 0:null}Object.defineProperty(t,"__esModule",{value:!0});var g=["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],u=["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"],d=[].concat(g).concat(u);t.getPixelSize=a,t.toWorldScale=c,t.getStorageType=s,t.getBasemapId=l,t.getBasemapTheme=p});