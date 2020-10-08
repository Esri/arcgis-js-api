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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/maybe"],(function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractSafeScaleBounds=t.scaleBoundsPredicate=t.occludeesSupported=t.highlightsSupported=void 0,t.highlightsSupported=function(e){return e&&"function"==typeof e.highlight},t.occludeesSupported=function(e){return e&&"function"==typeof e.occlude},t.scaleBoundsPredicate=function(e,t,n){return c.isNone(e)||e>n&&(0===t||e<t)},t.extractSafeScaleBounds=function(e){var t=e.minScale,c=e.maxScale;return{minScale:t=t||0,maxScale:c=c||0}}}));