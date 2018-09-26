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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports"],function(e,n){function t(e,n){var t=n.graphics3DGraphics,i="null",u=e.suspendResumeExtent;u&&(i=[u[0],u[1],u[2],u[3]].map(function(e){return e.toPrecision(4)}).join(", "));var r="null",s=n.computedExtent;return s&&(r=[s.xmin,s.ymin,s.xmax,s.ymax].map(function(e){return e.toPrecision(4)}).join(", ")),{numCollection:e.loadedGraphics.length,numGraphics:Object.keys(t).length,graphicsUpdating:n.updating,resumeExtent:i,computedExtent:r,updating:e.updating,suspended:e.suspended}}Object.defineProperty(n,"__esModule",{value:!0}),n.stats=t});