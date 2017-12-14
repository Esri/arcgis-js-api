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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/string","./utils","../../conditionalStyling/ConditionalStyleUtil","dojo/i18n!../../../../../../../nls/jsapi","../../../../_devConfig"],function(e,r,n,t,a){function i(e){return e.variableID?e.variableID:e.script&&s[e.script.alias]}t=t.geoenrichment.dijit.ReportPlayer.ReportPlayer;var l={percent:["10","15","20","25","33","46","72","90","95"],percentSmall:["2","3","4","5","6","7"],index:["80","99","105","111","113","118","121","130"],number:["1150","2013","5006","10135","20456","36813"],numberSep:["1,150","2,013","5,006","10,135","20,456","36,813"],numberSmall:["10","5","3","7","15"]},u=/^MEDAGE|^AVGHHSZ|^UNEMPRT|ECYHSZAVG|ECYPTAMED/,o={percent:{MP19013a_B:"72",MP19014a_B:"70",EMP_TO_POP:"25",NOHS:"10",HSG:"20",SC:"30",BGPD:"40"},percentSmall:{UNEMPRT_CY:"5"},index:{},number:{MEDHINC_CY:"55650",TOTPOP_CY:"20456",TOTHH_CY:"8546",MEDDI_CY:"38290",S01_BUS:"11256",S01_EMP:"60382",PCI_CY:"30382",MEDNW_CY:"88548",MEDVAL_CY:"352430",X3004_A:"5682",ACSMEDCRNT:"1227",X5001_A:"1762",X1003_A:"4073",X4100_A:"543",X8001_A:"4538",X1130_A:"3465",X7001_A:"1568",X9008_A:"246",X9073_A:"158",X9074_A:"326",X9045_A:"42",ECYPTAPOP:"20456",ECYHNIMED:"55650"},numberSep:{MEDHINC_CY:"55,650",TOTPOP_CY:"20,456",TOTHH_CY:"8,546",MEDDI_CY:"38,290",S01_BUS:"11,256",S01_EMP:"60,382",PCI_CY:"30,382",MEDNW_CY:"88,548",MEDVAL_CY:"352,430",X3004_A:"5,682",ACSMEDCRNT:"1,227",X5001_A:"1,762",X1003_A:"4,073",X4100_A:"543",X8001_A:"4,538",X1130_A:"3,465",X7001_A:"1,568",X9008_A:"246",X9073_A:"158",X9074_A:"326",X9045_A:"42",ECYPTAPOP:"20,456",ECYHNIMED:"55,650"},numberSmall:{AVGHHSZ_CY:"2",MEDAGE_CY:"36",ECYHSZAVG:"2",ECYPTAMED:"36"},string:{TSEGNAME:"Bright Young Professionals",TLIFECODE:"L8",TLIFENAME:"Middle Ground",TSEGCODE:"8A"}},s={"Employee/ Population Ratio":"EMP_TO_POP","No High School Diploma":"NOHS","High School Graduate":"HSG","Some College":"SC","Bachelors/Grad/Prof Degree":"BGPD"},_={},A={getValuePreview:function(n,s){function A(){function A(){return n.hasVariable&&u.test(n.variableID)}function E(){function e(){if(s.getPreviewValueFunction)return"percent"!==u&&(u="number"),r(s.getPreviewValueFunction()[u]);var e=_[u]=_[u]||{},t=n.name+n.decimals,a=e[t];if(!a){if(a=o[u][i(n)],!a){var A=l[u];a=A[Math.round((A.length-1)*Math.random())]}a=e[t]=r(a)}return a}function r(e){return n.decimals>0&&(e+="."+(""+10*Math.random()).replace(".","").substr(0,n.decimals)),e}if("esriFieldTypeString"===n.type)return o.string[n.variableID]||t.sampleTextValue;var u,E=n.statefulName&&"p"===n.statefulName.charAt(0)||n.showPercent,C=n.statefulName&&"i"===n.statefulName.charAt(0);return u=E?A()?"percentSmall":"percent":C?"index":A()?"numberSmall":n.useThousandsSeparator?"numberSep":"number",!a.preview.bigValues||"number"!==u&&"numberSep"!==u?e():"100,000,000,000"}function C(){var r=1+2*s.featureIndex;return e.substitute(r>1?t.fieldPreviewAreaDescWithRadiusPlural:t.fieldPreviewAreaDescWithRadiusSingular,{radius:r})}return n.hasVariable||n.script?E():"headers.AREA_DESC"===n.name&&s.featureIndex>-1?C():r.fields.getPreview(n.name,s.isGraphicReport)||n.alias}return A()},getConditionalStylePreview:function(e,r){if(e.triggerJson&&void 0!==r.rowIndex){var t=e.triggerJson.cases[r.rowIndex%e.triggerJson.cases.length];return t&&n.styleFromSetters(t.setters)}return null}};return A});