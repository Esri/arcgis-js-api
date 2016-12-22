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

define(["require","exports","../../../../Basemap","../../../../support/basemapUtils","../../../../geometry/ScreenPoint","../../../../core/screenUtils"],function(e,t,n,i,r,o){function a(e){var t=null;return"string"==typeof e?t=e:e instanceof n&&(t=i.wellKnownBasemapId(e)),t}function l(e){var t=a(e);return t&&t.replace("-vector","")}function c(e){var t=e.width,n=e.height,i=e.pixelSizeAt(new r(.5*t,.5*n));if(0>=i&&(i=e.pixelSizeAt(new r(.5*t,.95*n)),0>=i)){var o=e.camera.position.clone();o.z=0,i=2*e.pixelSizeAt(o)}return i}function p(e,t){return Math.ceil(c(t)*o.pt2px(o.toPt(e)))}t.normalizedBasemapId=l,t.getPixelSize=c,t.toWorldScale=p});