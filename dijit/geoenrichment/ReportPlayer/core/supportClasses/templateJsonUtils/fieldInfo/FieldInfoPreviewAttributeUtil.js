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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/FieldUtil","dojo/i18n!esri/nls/jsapi"],function(e,i){i=i.geoenrichment.dijit.ReportPlayer.FieldInfoPreview;var n={},r={BUILDING_AREA:5e3,SITE_AREA:1e4,FRONTAGE:800,PARKING:300};return n.getAttributePreviewValue=function(n){if(!n)return"";if(n.domain&&"codedValue"===n.domain.type)return n.domain.codedValues[0].name;if("esriFieldTypeString"===n.type)return i.sampleTextValue;if("esriFieldTypeDate"===n.type){var t=new Date;return n.domain&&"range"===n.domain.type&&t.setTime(n.domain.range[0]),t.getTime()}var a;return a=n.domain&&"range"===n.domain.type?n.domain.range[0]:r[n.name]||Number((100*Math.random()+50).toFixed(1)),"i"===e.isNumericField(n)?Math.round(a):a},n});