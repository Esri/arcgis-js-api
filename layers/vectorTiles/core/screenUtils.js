// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports"],function(t,e){function r(t){return t?t/72*e.DPI:0}function n(t){return t?72*t/e.DPI:0}function o(t){if("string"==typeof t){if(u.test(t)){var e=t.match(u),r=Number(e[1]),o=e[3]&&e[3].toLowerCase(),p="-"===t.charAt(0),c="px"===o?n(r):r;return p?-c:c}return console.warn(i),null}return t}Object.defineProperty(e,"__esModule",{value:!0});var u=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i,i="screenUtils.toPt: input not recognized!";e.DPI=96,e.pt2px=r,e.px2pt=n,e.toPt=o});