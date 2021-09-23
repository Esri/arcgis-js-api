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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/lang","../../sections/SectionTypes","esri/dijit/geoenrichment/utils/FieldUtil"],(function(e,i,n){var o={buildSummaryFooterSectionJson:function(o){var t=o.dataSectionJson,r=e.clone(t.stack[0]);r.rows.length=1;var s=r.rows[0].fieldInfos;return r.columns.forEach((function(e){var i=s[e.field];i&&!n.isNumericField(i)&&(delete s[e.field],delete r.rows[0][e.field])})),{type:i.INFOGRAPHIC_SUMMARY_FOOTER,stack:[r]}}};return o}));