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

define(["require","exports","./maybe"],(function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.writeCookie=void 0,i.writeCookie=function(e,i,r){void 0===r&&(r={});var t=o.assumeNonNull(r.expires);if("number"==typeof t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3),t=r.expires=n}"string"!=typeof t&&(r.expires=t.toUTCString());var s=e+"="+encodeURIComponent(i);for(var u in r){s+="; "+u;var a=r[u];!0!==a&&(s+="="+a)}document.cookie=s}}));