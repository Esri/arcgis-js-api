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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define([],function(){var e={};e.isNumericField=function(e){switch(e&&e.type){case"esriFieldTypeSmallInteger":case"esriFieldTypeInteger":return"i";case"esriFieldTypeSingle":case"esriFieldTypeDouble":return"f"}return!1},e.isStringField=function(e){return e&&"esriFieldTypeString"==e.type||!1},e.isDateField=function(e){return e&&"esriFieldTypeDate"==e.type||!1};var i=/^(SHAPE__Area|SHAPE__Length)$/;return e.canShowField=function(r,t){if(!r||!r.name||"esriFieldTypeOID"===r.type)return!1;if("esriFieldTypeDate"===r.type)return"d";var n=e.isNumericField(r)||e.isStringField(r);return"f"===n&&!1===r.editable&&i.test(r.name)?null:(void 0===t&&(t=/^(OBJECTID|OID|FID)$/i),(!t||!t.test(r.name))&&(!0===n?"s":n))},e});