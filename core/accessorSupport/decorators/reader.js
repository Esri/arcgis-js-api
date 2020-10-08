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

define(["require","exports","../../object","./property"],(function(r,e,o,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.reader=void 0,e.reader=function(r,e,a){var c,d;return void 0===e||Array.isArray(e)?(d=r,a=e,c=[void 0]):(d=e,c=Array.isArray(r)?r:[r]),function(r,e){var i=r.constructor.prototype;c.forEach((function(c){var n=t.propertyJSONMeta(r,c,d);n.read&&"object"!=typeof n.read&&(n.read={}),o.setDeepValue("read.reader",i[e],n),a&&(n.read.source=(n.read.source||[]).concat(a))}))}}}));