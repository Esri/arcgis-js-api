// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/maybe"],function(e,n,t){function i(e){return e&&"function"==typeof e.highlight}function a(e,n,i){return t.isNone(e)||e>i&&(0===n||e<n)}function c(e){var n=e.minScale,t=e.maxScale;return n=n||0,t=t||0,{minScale:n,maxScale:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.hasHighlight=i,n.scaleBoundsPredicate=a,n.extractSafeScaleBounds=c});