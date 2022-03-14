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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define([],(function(){var t={resizeTableJsonToFitWidth:function(e,i,n){var o=n&&n.columnWidths,r=0;e.columns.forEach((function(t){var e=t.style.width;"string"==typeof e&&-1!==e.indexOf("%")&&(e=Number(e.replace("%",""))/100*i,t.style.width=e),r+=e})),e.style.width=i;var s=i/r;e.columns.forEach((function(t){t.style.width*=s})),o&&o.length&&(o.forEach((function(t,i){var n=e.columns[i];n&&(n.style.width=t)})),t.resizeTableJsonToFitWidth(e,i))},resizeTableJsonToFitHeight:function(t,e){var i=0;t.rows.forEach((function(t){i+=t.style.height}));var n=e/i;t.rows.forEach((function(t){t.style.height*=n}))}};return t}));