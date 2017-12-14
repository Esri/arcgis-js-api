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

define(["./utils","dojo/i18n!../../../../../../../nls/jsapi"],function(e,a){a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer;var t={},i="n/";t.createFieldInfoFromCalculator=function(a,t,r,l){if(!a)return null;var o=r&&r.format,n=r&&r.autoformatCurrency,s=r&&r.additionalText,d={triggerJson:null};d.alias=a.getDescriptionWithType()||a.getAliasWithType();var m=a.variable;d.hasVariable=!0,d.variableID=m.id,d.vintage=m.vintage,d.fullName=m.fullName,d.fieldCategory=m.fieldCategory,d.type=m.type;var u=a.getToggleGroup&&a.getToggleGroup();d.statefulName=u?u.value:i+m.fullName;var c=a.getCalcType().charAt(0);return d.name=e.name.createFieldNameFromVariable(m,c),o?e.format.setFieldInfoFormat(d,o):(d.decimals=a.getDecimals(),d.showCurrency=!(!n||"n"!==c||!m.units||"CURRENCY"!==m.units.toUpperCase()),d.showPercent="p"===c,d.useThousandsSeparator=!0),d.additionalText=s,m.isWebMap?(d.isWebMap=!0,d.webMapFieldName=m.fieldName,d.webMapField=m.field,d.webMapId=m.webMapId,!o&&m.field&&m.field.format&&(d.decimals=m.field.format.places,d.useThousandsSeparator=m.field.format.digitSeparator!==!1)):m.customDataCollection?(d.isCustomDataCollection=!0,d.customDataCollectionId=m.customDataCollection.id,d.customDataCollectionUrl=m.customDataCollection.url,d.customDataCollectionPortalUrl=m.customDataCollection.portalUrl):m.isSiteAttribute&&(d.isSiteAttribute=!0,d.attribute=m.attribute,m.attribute.places>0&&(d.decimals=m.attribute.places)),m.usedFields&&(d.usedFields=m.usedFields),e.name.provideQualifiedFieldInfoTemplateName(d,l),d},t.createFieldInfoFromScript=function(t,i,r,l){var o=r&&r.format,n=r&&r.additionalText;t=t||{},t.name=t.name||e.name.DEFAULT_SCRIPT_NAME,t.alias=t.alias||a.scriptNameDefault,t.decimals=Number(t.decimals)||0;var s={triggerJson:null};return s.name=e.name.createFieldNameFromScript(t),e.name.provideQualifiedFieldInfoTemplateName(s,l),s.script=t,o?e.format.setFieldInfoFormat(s,o):(s.decimals=Number(t.decimals),s.showCurrency=!1,s.showPercent=!1,s.useThousandsSeparator=!0),s.additionalText=n,s},t.createFieldInfoFromChart=function(e){return{isChart:!0,chartJson:e}},t.createFieldInfoFromImage=function(e,a){return{isImage:!0,imageJson:e,triggerJson:a}},t.createFieldInfoFromShape=function(e){return{isShape:!0,shapeJson:e}},t.createFieldInfoFromSection=function(e){return{isReportSection:!0,sectionJson:e}},t.createFieldInfoFromInfographic=function(e){return{isInfographic:!0,infographicJson:e}},t.createFieldInfoFromMissingVariable=function(e){return{isMissing:!0,variable:e,alias:e.alias}};var r=/^\[\w+\]$/,l=/\[\w+\]/;return t.createFieldInfoFromLabel=function(a,i){if("string"!=typeof a)return null;a=a.trim();var o=r.test(a);if(!i||o)return o?(a=a.replace(/\[|\]/g,"").toUpperCase(),t.createFieldInfoFromSpecialFieldName(e.fields.uiToTemplate(a))):null;if(!l.test(a))return null;var n=e.richText.collectFieldInfosFromRenderedXMLString(a);return n&&e.richText.createFieldInfoFromRichText(n.xmlString,n.fieldInfos,n.specialFieldInfos)},t.createFieldInfoFromSpecialFieldName=function(a,t){function i(){"CURRDATE"===l?r={name:e.fields.DATE_FIELD_NAME,alias:e.fields.DATE_FIELD_ALIAS,format:t||e.fields.DATE_FIELD_DEFAULT_FORMAT}:"SITENOTE"===l?r={name:e.fields.SITENOTE_FIELD_NAME,alias:e.fields.SITENOTE_FIELD_ALIAS}:"SITENOTES"===l&&(r={name:e.fields.SITENOTES_FIELD_NAME,alias:e.fields.SITENOTES_FIELD_ALIAS})}if("string"!=typeof a)return null;var r,a=a.substr(a.indexOf(".")+1),l=a.toUpperCase();if(i(),r)return r;var o=e.fields.templateToUIHeader(l);if(o)r={name:e.fields.qualifyTemplateHeaderName(l),alias:o};else{var n=e.fields.templateToUIReportVar(l);n&&(r={name:n,alias:n})}return r},t});