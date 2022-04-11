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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define([],(function(){var e={};function i(e){return("string"==typeof e?e:e&&e.type)||""}e.isNumericField=function(e){switch(i(e)){case"esriFieldTypeSmallInteger":case"esriFieldTypeInteger":return"i";case"esriFieldTypeSingle":case"esriFieldTypeDouble":return"f"}return!1},e.isStringField=function(e){return"esriFieldTypeString"==i(e)||!1},e.isDateField=function(e){return"esriFieldTypeDate"==i(e)||!1};var t=/DISTANCE$/;e.isDistanceField=function(e){return t.test(i(e))};var r=/^(SHAPE__Area|SHAPE__Length)$/i;return e.canShowField=function(i,t){if(!i||!i.name||"esriFieldTypeOID"===i.type)return!1;if("esriFieldTypeDate"===i.type)return"d";var n=e.isNumericField(i)||e.isStringField(i);return"f"===n&&!1===i.editable&&r.test(i.name)?null:(void 0===t&&(t=/^(OBJECTID|OID|FID)$/i),(!t||!t.test(i.name))&&(!0===n?"s":n))},e.createFieldInfo=function(i){var t=e.canShowField(i),r={fieldName:i.name,label:i.alias||i.name,isEditable:!!i.editable,visible:!!t};switch(t){case"i":r.format={places:0,digitSeparator:!0};break;case"f":r.format={digitSeparator:!0};break;case"s":r.stringFieldOption="textbox"}return r},e}));