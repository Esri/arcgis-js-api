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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/string","./utils","../../conditionalStyling/ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!../../../../../../../nls/jsapi","../../../../_devConfig"],function(e,r,t,a,n,i){function l(e){return e.variableID?e.variableID:e.script&&A[e.script.alias]}n=n.geoenrichment.dijit.ReportPlayer.FieldInfoPreview;var u={percent:[10,15,20,25,33,46,72,90,95],percentSmall:[2,3,4,5,6,7],index:[80,99,105,111,113,118,121,130],number:[1150,2013,5006,10135,20456,36813],numberSep:[1150,2013,5006,10135,20456,36813],numberSmall:[10,5,3,7,15]},o=/^MEDAGE|^AVGHHSZ|^UNEMPRT|ECYHSZAVG|ECYPTAMED/,s={percent:{MP19013a_B:72,MP19014a_B:70,EMP_TO_POP:25,NOHS:10,HSG:20,SC:30,BGPD:40},percentSmall:{UNEMPRT_CY:5},index:{},number:{MEDHINC_CY:55650,TOTPOP_CY:20456,TOTHH_CY:8546,MEDDI_CY:38290,S01_BUS:11256,S01_EMP:60382,PCI_CY:30382,MEDNW_CY:88548,MEDVAL_CY:352430,X3004_A:5682,ACSMEDCRNT:1227,X5001_A:1762,X1003_A:4073,X4100_A:543,X8001_A:4538,X1130_A:3465,X7001_A:1568,X9008_A:246,X9073_A:158,X9074_A:326,X9045_A:42,ECYPTAPOP:20456,ECYHNIMED:55650},numberSep:{MEDHINC_CY:55650,TOTPOP_CY:20456,TOTHH_CY:8546,MEDDI_CY:38290,S01_BUS:11256,S01_EMP:60382,PCI_CY:30382,MEDNW_CY:88548,MEDVAL_CY:352430,X3004_A:5682,ACSMEDCRNT:1227,X5001_A:1762,X1003_A:4073,X4100_A:543,X8001_A:4538,X1130_A:3465,X7001_A:1568,X9008_A:246,X9073_A:158,X9074_A:326,X9045_A:42,ECYPTAPOP:20456,ECYHNIMED:55650},numberSmall:{AVGHHSZ_CY:2,MEDAGE_CY:36,ECYHSZAVG:2,ECYPTAMED:36},string:{TSEGNAME:"Bright Young Professionals",TLIFECODE:"L8",TLIFENAME:"Middle Ground",TSEGCODE:"8A",CONAME:"Coffee",NAICS:"1234",SIC:"5678",ADDR:"380 New York St, Redlands, CA",STATE:"CA",STATE_NAME:"California",ZIP:"92373",ZIP4:"92373",CITY:"Redlands",STREET:"New York st.",DIRECTION:"SW",FRNCOD:"24"}},A={"Employee/ Population Ratio":"EMP_TO_POP","No High School Diploma":"NOHS","High School Graduate":"HSG","Some College":"SC","Bachelors/Grad/Prof Degree":"BGPD"},C={};return{getValuePreview:function(t,A){function _(){return t.hasVariable&&o.test(t.variableID)}return t.hasVariable||t.script?function(){function e(e){return t.decimals>0?e+=.5432123456789:e=Math.round(e),a.formatNumber(e,{places:t.decimals||0,noSeparator:"numberSep"!==o})}if("esriFieldTypeString"===t.type){var r=t.isDataLayerAttribute?t.attribute.name:t.variableID;return s.string[r]||n.sampleTextValue}var o,S=t.statefulName?"p"===t.statefulName.charAt(0):t.showPercent,E=t.statefulName&&"i"===t.statefulName.charAt(0);if(o=S?_()?"percentSmall":"percent":E?"index":_()?"numberSmall":t.useThousandsSeparator?"numberSep":"number",i.preview.bigValues&&("number"===o||"numberSep"===o))return a.formatNumber(1e11,{places:0,noSeparator:"number"===o});if(A.getPreviewValueFunction)return"percent"!==o&&(o="number"),e(A.getPreviewValueFunction()[o]);var P=C[o]=C[o]||{},m=t.name+";"+t.decimals,d=P[m];if(!d){if(!(d=s[o][l(t)])){var c=u[o];d=c[Math.round((c.length-1)*Math.random())]}d=P[m]=e(d)}return d}():"headers.AREA_DESC"===t.name&&A.featureIndex>-1?function(){var r=1+2*A.featureIndex;return e.substitute(r>1?n.fieldPreviewAreaDescWithRadiusPlural:n.fieldPreviewAreaDescWithRadiusSingular,{radius:r})}():r.fields.getPreview(t.name,A.isGraphicReport)||t.alias},getConditionalStylePreview:function(e,r){if(e.triggerJson&&void 0!==r.rowIndex){var a=e.triggerJson.cases[r.rowIndex%e.triggerJson.cases.length];return a&&t.styleFromSetters(a.setters)}return null}}});