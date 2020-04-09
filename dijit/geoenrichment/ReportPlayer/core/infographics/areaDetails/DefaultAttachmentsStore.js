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

define(["esri/dijit/geoenrichment/when","../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoPreviewAttributeUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,i){var r;return i=i.geoenrichment.dijit.ReportPlayer.AreaDetailsInfographic,{getDefaultAttachmentsStore:function(){return r||(r={getAttributes:function(){return[{alias:"Building Area (sq. feet)",value:1e3,type:"esriFieldTypeDouble"},{alias:"Frontage (feet)",value:100,type:"esriFieldTypeDouble"},{alias:"Parking",value:30,type:"esriFieldTypeInteger"},{alias:"Site Area (sq. feet)",value:500.5,type:"esriFieldTypeDouble"},{alias:"Number of Employees",value:300,type:"esriFieldTypeInteger"},{alias:"Address",value:"123 Main Street, City, State 55555",type:"esriFieldTypeString"}]},getNotes:function(){return[{text:i.noteSample},{text:i.noteSample}]}})},createStoreFromAttributes:function(r){return{getAttributes:function(){var i;return i="function"==typeof r?r():r,e(i,(function(e){return e?e.map((function(e){return{alias:e.alias,value:t.getAttributePreviewValue(e),type:e.type}})):[]}))},getNotes:function(){return[{text:i.noteSample},{text:i.noteSample}]}}}}}));