// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","./legacyTimeZoneMap","../../../libs/luxon/luxon"],(function(e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertLegacyTimeZone=void 0,t.convertLegacyTimeZone=function(e,t){if(void 0===t&&(t="system"),!e||!n.legacyTimeZoneMap.has(e.timeZone))return t;var i=n.legacyTimeZoneMap.get(e.timeZone);return e.timeZone.startsWith("UTC")||e.respectsDaylightSaving?i:function(e){var t=o.DateTime.local().setZone(e),n=Math.min(t.set({month:1,day:1}).offset,t.set({month:5}).offset);if(0===n)return"Etc/UTC";return"Etc/GMT"+o.FixedOffsetZone.instance(-n).formatOffset(0,"narrow")}(i)}}));