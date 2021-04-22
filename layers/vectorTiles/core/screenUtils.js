// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var r=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;function n(t){return t?72*t/e.DPI:0}e.DPI=96,e.pt2px=function(t){return t?t/72*e.DPI:0},e.px2pt=n,e.toPt=function(t){if("string"==typeof t){if(r.test(t)){var e=t.match(r),o=Number(e[1]),u=e[3]&&e[3].toLowerCase(),i="-"===t.charAt(0),p="px"===u?n(o):o;return i?-p:p}return console.warn("screenUtils.toPt: input not recognized!"),null}return t}}));