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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define([],function(){var e={};return e.isNumericField=function(e){switch(e&&e.type){case"esriFieldTypeSmallInteger":case"esriFieldTypeInteger":return"i";case"esriFieldTypeSingle":case"esriFieldTypeDouble":return"f"}return!1},e.isStringField=function(e){return e&&"esriFieldTypeString"==e.type||!1},e.isDateField=function(e){return e&&"esriFieldTypeDate"==e.type||!1},e.canShowField=function(i,r){if(!i||!i.name||"esriFieldTypeOID"===i.type)return!1;if("esriFieldTypeDate"===i.type)return"d";var t=e.isNumericField(i)||e.isStringField(i);return"f"===t&&!1===i.editable?null:(void 0===r&&(r=/^(OBJECTID|OID|FID)$/i),(!r||!r.test(i.name))&&(!0===t?"s":t))},e});