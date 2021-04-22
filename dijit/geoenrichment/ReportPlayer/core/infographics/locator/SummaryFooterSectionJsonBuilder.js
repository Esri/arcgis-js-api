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

define(["dojo/_base/lang","../../sections/SectionTypes","esri/dijit/geoenrichment/utils/FieldUtil"],(function(e,t,a){var i={buildSummaryFooterSectionJson:function(i){var n=i.dataSectionJson,d=e.clone(n.stack[0]);d.data.data.length=1;var o=d.data.data[0].fieldInfos;return d.data.columns.forEach((function(e){var t=o[e.field];t&&!a.isNumericField(t)&&(delete o[e.field],delete d.data.data[0][e.field])})),{type:t.INFOGRAPHIC_SUMMARY_FOOTER,stack:[d]}}};return i}));