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

define([],(function(){var n={};function r(n,r){return"string"!=typeof n?n:String(n).replace(/[^\x20-\x7f]/g,(function(n){var t=n.charCodeAt(0).toString(16).toUpperCase();return r(t)}))}return n.maskWithUnicode=function(n){return r(n,(function(n){return"\\u000".substr(0,6-n.length)+n}))},n.maskWithUnicodeXML=function(n){return r(n,(function(n){return"&#x000".substr(0,7-n.length)+n+";"}))},n.removeUnicode=function(n,t){return r(n,(function(n){return t||""}))},n.removeXMLMasks=function(n,r){return n.replace(/&#x.*?;/g,r||"")},n}));