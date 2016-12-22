// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports"],function(t,n){function r(t){return t/72*n.DPI}function e(t){return 72*t/n.DPI}function o(t){if("string"==typeof t){if(i.test(t)){var n=t.match(i),r=Number(n[1]),o=n[3]&&n[3].toLowerCase();return"px"===o?e(r):r}return console.warn(u),null}return t}var i=/^(\d+(\.\d+)?)\s*((px)|(pt))?$/i,u="screenUtils.toPt: input not recognized!";n.DPI=96,n.pt2px=r,n.px2pt=e,n.toPt=o});