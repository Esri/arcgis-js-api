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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define([],(function(){var e={NONE:"None",LABEL:"Label",VALUE:"Value",LABEL_VALUE:"LabelValue",PERCENT:"Percent",LABEL_PERCENT:"LabelPercent",isSupported:function(n){for(var r in e)if(e[r]===n)return!0;return!1},toSupportedValue:function(n){return e.isSupported(n)?n:e.NONE},buildType:function(n){var r="";return n.label&&(r="Label"),n.value?r+="Value":n.percent&&(r+="Percent"),r||e.NONE},hasLabel:function(e){return e&&-1!==e.indexOf("Label")},hasValue:function(e){return e&&-1!==e.indexOf("Value")},hasPercent:function(e){return e&&-1!==e.indexOf("Percent")},has2Values:function(n){return n===e.LABEL_VALUE||n===e.LABEL_PERCENT}};return e}));