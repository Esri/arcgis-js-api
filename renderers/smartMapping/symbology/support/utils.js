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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../geometry/ScreenPoint","../../../../core/screenUtils","../../../../Basemap","../../../../support/basemapUtils"],function(e,t,n,i,o,r){function a(e){var t=e.width,i=e.height,o=e.pixelSizeAt(new n(.5*t,.5*i));if(0>=o&&(o=e.pixelSizeAt(new n(.5*t,.95*i)),0>=o)){var r=e.camera.position.clone();r.z=0,o=2*e.pixelSizeAt(r)}return o}function p(e,t){return Math.ceil(a(t)*i.pt2px(i.toPt(e)))}function l(e){return"multipoint"===e?"point":"mesh"===e?"polygon":e}function u(e,t){var n=null;return"string"==typeof e&&t.indexOf(e)>-1?n=e:e instanceof o&&(n=r.getWellKnownBasemapId(e)),n||"gray"}Object.defineProperty(t,"__esModule",{value:!0}),t.getPixelSize=a,t.toWorldScale=p,t.getStorageType=l,t.getBasemapId=u});