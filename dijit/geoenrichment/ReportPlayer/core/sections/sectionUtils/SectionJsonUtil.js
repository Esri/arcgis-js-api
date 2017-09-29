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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define([],function(){var n={};return n.tableJsonHasInfographic=function(n){return n.data.data.some(function(n){if(n.fieldInfos)for(var f in n.fieldInfos){var i=n.fieldInfos[f];if(i&&i.isInfographic)return!0}})},n.tableJsonHasChart=function(n){return n.data.data.some(function(n){if(n.fieldInfos)for(var f in n.fieldInfos){var i=n.fieldInfos[f];if(i&&i.isChart)return!0}})},n});