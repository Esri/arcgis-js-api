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

define(["esri/dijit/geoenrichment/utils/MaskUtil","./FieldLibrary"],(function(e,a){var t={SCRIPT_PREFIX:"",DEFAULT_SCRIPT_NAME:"Custom",TOTAL_SCRIPT_NAME:"Total",AVG_SCRIPT_NAME:"Average",SCRIPT_PREFIX_RE:/^SCRIPT_/i,FIRST_SYMBOL_IS_NUMBER_RE:/^[0-9]/,DATA_COLLECTIONS_CALCULATOR_NAME:"dataCollectionsCalculator",MAPS_CALCULATOR_NAME:"mapsCalculator",UNITED_MAPS_CALCULATOR_NAME:"unitedMapsCalculator",AREA_ATTRIBUTES_CALCULATOR_NAME:"headers",ENRICHED_DATA_NO_LEVELS:"enrichFieldData_noLevels",SCRIPTS_CALCULATOR_NAME:"scripts",createFieldNameFromSource:function(e,a){if(!e)return"";var i="";if(e.isSiteAttribute)i=e.attribute.name;else if(e.isChartAttribute)i=e.id;else if(e.isWebMap)i=e.webMapFieldName||e.fieldName;else{var r=(e.fullName||e).replace(/_|\.|\s/g,"");r+="n"===(a=a||"n")?"":"_"+a,t.FIRST_SYMBOL_IS_NUMBER_RE.test(r)&&(r="_"+r),i=r.toUpperCase()}return t._validateName(i)},createFieldNameFromScript:function(e){var a=e.name;return t.SCRIPT_PREFIX_RE.test(a)&&(a=a.replace(t.SCRIPT_PREFIX_RE,"")),t._validateName(t.SCRIPT_PREFIX+a.replace(/\.|-/g,""))},_validateName:function(e){return t._checkXMLValidName(t._maskUnicodeInName(e))},_XML_MASK_NAME_RE:/(_X)(\d\d\d\d)/i,_checkXMLValidName:function(e){return t._XML_MASK_NAME_RE.test(e)?e.replace(t._XML_MASK_NAME_RE,"$1_$2"):e},_XML_UNICODE_RE:/&#x|;/gi,_maskUnicodeInName:function(a){return e.maskWithUnicodeXML(a).replace(t._XML_UNICODE_RE,"")},renderScriptName:function(e){return e.replace(t.SCRIPT_PREFIX_RE,"")},provideQualifiedFieldInfoTemplateName:function(e,a){e&&(a?e.templateName=a+"."+e.name:e.isWebMap?e.templateName=t.AREA_ATTRIBUTES_CALCULATOR_NAME+"."+e.name:e.isSiteAttribute?e.templateName=t.AREA_ATTRIBUTES_CALCULATOR_NAME+"."+e.name:e.templateName=t.DATA_COLLECTIONS_CALCULATOR_NAME+"."+e.name)},getCalculatorName:function(e){return e&&e.templateName&&e.templateName.substr(0,e.templateName.indexOf("."))},isAreaAttributesFieldInfo:function(e){return t.getCalculatorName(e)===t.AREA_ATTRIBUTES_CALCULATOR_NAME},updateCalculatorName:function(e,a){e&&(e.hasVariable||e.script)&&(e.templateName=a+e.templateName.substr(e.templateName.indexOf(".")))},refreshNameAndTemplateName:function(e){e.statefulName&&e.fullName&&(e.name=t.createFieldNameFromSource(e,e.statefulName.charAt(0)),e.templateName=e.templateName.substr(0,e.templateName.lastIndexOf(".")+1)+e.name)},getFieldInfoAlias:function(e){return e?e.script?e.script.alias:e.hasVariable||e.isMissing?e.alias:a.getFieldLabel(e.name):null},getTemplateNameParts:function(e){if(!e)return null;var a=e.indexOf(".");return-1===a?{calcName:null,fieldName:e}:{calcName:e.substr(0,a),fieldName:e.substr(a+1)}}};return t}));