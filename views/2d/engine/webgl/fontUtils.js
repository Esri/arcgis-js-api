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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports"],function(e,t){function r(e){var t=e.font,r=n(t)+i(t)+o(t);return t.family.charAt(0).toUpperCase()+t.family.slice(1)+(r.length>0?r:" Regular")}function n(e){switch(e.weight.toLowerCase()){case"bold":case"bolder":return" Bold"}return""}function i(e){switch(e.style.toLowerCase()){case"italic":case"oblic":return" Italic"}return""}function o(e){switch(e.decoration.toLowerCase()){case"underline":return" Underline";case"line-through":return" Strikethrough"}return""}Object.defineProperty(t,"__esModule",{value:!0}),t.getFullyQualifiedFontName=r});