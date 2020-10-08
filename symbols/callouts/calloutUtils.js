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

define(["require","exports","./Callout3D","./LineCallout3D"],(function(e,t,l,r){"use strict";function i(e){if(!e)return!1;var t=e.verticalOffset;return!!t&&!(t.screenLength<=0||t.maxWorldLength<=0)}Object.defineProperty(t,"__esModule",{value:!0}),t.calloutProperty=t.isCalloutSupport=t.hasVisibleCallout=t.hasVisibleVerticalOffset=void 0,t.hasVisibleVerticalOffset=i,t.hasVisibleCallout=function(e){if(!e)return!1;if(!e.supportsCallout||!e.supportsCallout())return!1;var t=e.callout;return!!t&&(!!t.visible&&!!i(e))},t.isCalloutSupport=function(e){return"point-3d"===e.type||"label-3d"===e.type},t.calloutProperty={types:{key:"type",base:l,typeMap:{line:r}},json:{write:!0}}}));