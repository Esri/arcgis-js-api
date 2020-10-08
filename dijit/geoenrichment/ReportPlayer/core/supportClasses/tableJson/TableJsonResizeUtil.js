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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define([],(function(){var t={resizeTableJsonToFitWidth:function(a,e,i){var n=i&&i.columnWidths,o=0;a.data.columns.forEach((function(t){var a=t.style.width;"string"==typeof a&&-1!==a.indexOf("%")&&(a=Number(a.replace("%",""))/100*e,t.style.width=a),o+=a})),a.style.width=e;var r=e/o;a.data.columns.forEach((function(t){t.style.width*=r})),n&&n.length&&(n.forEach((function(t,e){var i=a.data.columns[e];i&&(i.style.width=t)})),t.resizeTableJsonToFitWidth(a,e))},resizeTableJsonToFitHeight:function(t,a){var e=0;t.data.data.forEach((function(t){e+=t.style.height}));var i=a/e;t.data.data.forEach((function(t){t.style.height*=i}))}};return t}));