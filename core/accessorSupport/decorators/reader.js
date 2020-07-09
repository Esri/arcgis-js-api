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

define(["require","exports","../../object","./property"],(function(r,e,o,a){Object.defineProperty(e,"__esModule",{value:!0}),e.reader=function(r,e,t){var c,d;return void 0===e||Array.isArray(e)?(d=r,t=e,c=[void 0]):(d=e,c=Array.isArray(r)?r:[r]),function(r,e){var n=r.constructor.prototype;c.forEach((function(c){var u=a.propertyJSONMeta(r,c,d);u.read&&"object"!=typeof u.read&&(u.read={}),o.setDeepValue("read.reader",n[e],u),t&&(u.read.source=(u.read.source||[]).concat(t))}))}}}));