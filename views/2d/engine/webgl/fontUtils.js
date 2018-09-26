// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function t(e){var r=e.toLowerCase().split(" ").join("-");switch(r){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return r}}function n(e){var r=s(e)+a(e);return t(e.family)+(r.length>0?r:"-regular")}function i(e){switch(e.decoration.toLowerCase()){case"underline":return o;case"line-through":return u}return NaN}function s(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function a(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblic":return"-italic"}return""}Object.defineProperty(r,"__esModule",{value:!0});var o=8,u=-3;r.getFullyQualifiedFontName=n,r.getFontDecorationOffset=i});