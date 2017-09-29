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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["./utils","dojo/i18n!../../../../../../nls/jsapi"],function(e,a){a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer;var i={},t="n/";i.createFieldInfoFromCalculator=function(a,i,r){if(!a)return null;var l=r&&r.format,o=r&&r.autoformatCurrency,n=r&&r.additionalText,s={triggerJson:null};s.alias=a.getDescriptionWithType()||a.getAliasWithType();var m=a.variable;s.hasVariable=!0,s.variableID=m.id,s.vintage=m.vintage,s.fullName=m.fullName,s.fieldCategory=m.fieldCategory;var f=a.getToggleGroup&&a.getToggleGroup();s.statefulName=f?f.value:t+m.fullName;var d=a.getCalcType().charAt(0);return s.name=e.name.createFieldNameFromVariable(m,d),e.name.provideQualifiedFieldInfoTemplateName(s),l?e.format.setFieldInfoFormat(s,l):(s.decimals=a.getDecimals(),s.showCurrency=o&&"n"==d&&m.units&&"CURRENCY"==m.units.toUpperCase(),s.showPercent="p"==d,s.useThousandsSeparator=!0),s.additionalText=n,m.isWebMap?(s.isWebMap=!0,s.webMapFieldName=m.fieldName,s.webMapField=m.field,s.webMapId=m.webMapId,!l&&m.field&&m.field.format&&(s.decimals=m.field.format.places,s.useThousandsSeparator=m.field.format.digitSeparator)):m.customDataCollection&&(s.isCustomDataCollection=!0,s.customDataCollectionId=m.customDataCollection.id,s.customDataCollectionUrl=m.customDataCollection.url,s.customDataCollectionPortalUrl=m.customDataCollection.portalUrl),s},i.createFieldInfoFromScript=function(i,t,r){var l=r&&r.format,o=r&&r.additionalText;i=i||{},i.name=i.name||e.name.DEFAULT_SCRIPT_NAME,i.alias=i.alias||a.scriptNameDefault,i.decimals=Number(i.decimals)||0;var n={triggerJson:null};return n.name=e.name.createFieldNameFromScript(i),e.name.provideQualifiedFieldInfoTemplateName(n),n.script=i,l?e.format.setFieldInfoFormat(n,l):(n.decimals=Number(i.decimals),n.showCurrency=!1,n.showPercent=!1,n.useThousandsSeparator=!0),n.additionalText=o,n},i.createFieldInfoFromChart=function(e){return{isChart:!0,chartJson:e}},i.createFieldInfoFromImage=function(e,a){return{isImage:!0,imageJson:e,triggerJson:a}},i.createFieldInfoFromShape=function(e){return{isShape:!0,shapeJson:e}},i.createFieldInfoFromSection=function(e){return{isReportSection:!0,sectionJson:e}},i.createFieldInfoFromInfographic=function(e){return{isInfographic:!0,infographicJson:e}},i.createFieldInfoFromMissingVariable=function(e){return{isMissing:!0,variable:e,alias:e.alias}};var r=/^\[\w+\]$/,l=/\[\w+\]/;return i.getFieldInfoFromLabel=function(a,t){if("string"!=typeof a)return null;a=a.trim();var o=r.test(a);if(!t||o)return o?(a=a.replace(/\[|\]/g,"").toUpperCase(),i.createFieldInfoFromSpecialFieldName(e.fields.uiToTemplate(a))):null;if(!l.test(a))return null;var n=e.richText.collectFieldInfosFromRenderedXMLString(a);return n&&e.richText.createFieldInfoFromRichText(n.xmlString,n.fieldInfos,n.specialFieldInfos)},i.createFieldInfoFromSpecialFieldName=function(a,i){function t(){"CURRDATE"==l?r={name:e.fields.DATE_FIELD_NAME,alias:e.fields.DATE_FIELD_ALIAS,format:i||e.fields.DATE_FIELD_DEFAULT_FORMAT}:"SITENOTE"==l?r={name:e.fields.SITENOTE_FIELD_NAME,alias:e.fields.SITENOTE_FIELD_ALIAS}:"SITENOTES"==l&&(r={name:e.fields.SITENOTES_FIELD_NAME,alias:e.fields.SITENOTES_FIELD_ALIAS})}if("string"!=typeof a)return null;var r,a=a.substr(a.indexOf(".")+1),l=a.toUpperCase();if(t(),r)return r;var o=e.fields.templateToUIHeader(l);if(o)r={name:e.fields.qualifyTemplateHeaderName(l),alias:o};else{var n=e.fields.templateToUIReportVar(l);n&&(r={name:n,alias:n})}return r},i});