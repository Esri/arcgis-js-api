// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../core/maybe"],(function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.highlightsSupported=function(e){return e&&"function"==typeof e.highlight},n.occludeesSupported=function(e){return e&&"function"==typeof e.occlude},n.scaleBoundsPredicate=function(e,n,c){return t.isNone(e)||e>c&&(0===n||e<n)},n.extractSafeScaleBounds=function(e){var n=e.minScale,t=e.maxScale;return{minScale:n=n||0,maxScale:t=t||0}}}));