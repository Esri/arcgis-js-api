// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define([],function(){return{arraysEqual:function(n,t){if(!n&&!t)return!0;if(!n||!t)return!1;if(n.length!=t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!=t[e])return!1;return!0},isNumber:function(n){return!isNaN(parseFloat(n))&&isFinite(n)},startsWith:function(n,t){return 0===n.lastIndexOf(t,0)},endsWith:function(n,t){var e=n.length-t.length;return 0>e?!1:n.indexOf(t,e)===e},isBoolean:function(n){return"boolean"==typeof n||n instanceof Boolean}}});