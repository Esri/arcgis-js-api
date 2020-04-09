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

define(["esri/dijit/geoenrichment/utils/MaskUtil"],(function(e){var a={SCRIPT_PREFIX:"",DEFAULT_SCRIPT_NAME:"Custom",TOTAL_SCRIPT_NAME:"Total",AVG_SCRIPT_NAME:"Average",SCRIPT_PREFIX_RE:/^SCRIPT_/i,FIRST_SYMBOL_IS_NUMBER_RE:/^[0-9]/,DATA_COLLECTIONS_CALCULATOR_NAME:"dataCollectionsCalculator",MAPS_CALCULATOR_NAME:"mapsCalculator",UNITED_MAPS_CALCULATOR_NAME:"unitedMapsCalculator",AREA_ATTRIBUTES_CALCULATOR_NAME:"headers",ENRICHED_DATA_NO_LEVELS:"enrichFieldData_noLevels",SCRIPTS_CALCULATOR_NAME:"scripts",createFieldNameFromVariable:function(e,t){if(!e)return"";var _="";if(e.isSiteAttribute)_=e.attribute.name;else if(e.isWebMap)_=e.webMapFieldName||e.fieldName;else{var m=(e.fullName||e).replace(/_|\.|\s/g,"");m+="n"===(t=t||"n")?"":"_"+t,a.FIRST_SYMBOL_IS_NUMBER_RE.test(m)&&(m="_"+m),_=m.toUpperCase()}return a._validateName(_)},createFieldNameFromScript:function(e){var t=e.name;return a.SCRIPT_PREFIX_RE.test(t)&&(t=t.replace(a.SCRIPT_PREFIX_RE,"")),a._validateName(a.SCRIPT_PREFIX+t.replace(/\.|-/g,""))},_validateName:function(e){return a._checkXMLValidName(a._maskUnicodeInName(e))},_XML_MASK_NAME_RE:/(_X)(\d\d\d\d)/i,_checkXMLValidName:function(e){return a._XML_MASK_NAME_RE.test(e)?e.replace(a._XML_MASK_NAME_RE,"$1_$2"):e},_XML_UNICODE_RE:/&#x|;/gi,_maskUnicodeInName:function(t){return e.maskWithUnicodeXML(t).replace(a._XML_UNICODE_RE,"")},renderScriptName:function(e){return e.replace(a.SCRIPT_PREFIX_RE,"")},provideQualifiedFieldInfoTemplateName:function(e,t){e&&(t?e.templateName=t+"."+e.name:e.isWebMap?e.templateName=a.AREA_ATTRIBUTES_CALCULATOR_NAME+"."+e.name:e.isSiteAttribute?e.templateName=a.AREA_ATTRIBUTES_CALCULATOR_NAME+"."+e.name:e.templateName=a.DATA_COLLECTIONS_CALCULATOR_NAME+"."+e.name)},getCalculatorName:function(e){return e&&e.templateName&&e.templateName.substr(0,e.templateName.indexOf("."))},isAreaAttributesFieldInfo:function(e){return a.getCalculatorName(e)===a.AREA_ATTRIBUTES_CALCULATOR_NAME},updateCalculatorName:function(e,a){e&&e.templateName&&(e.templateName=a+e.templateName.substr(e.templateName.indexOf(".")))},refreshNameAndTemplateName:function(e){e.statefulName&&e.fullName&&(e.name=a.createFieldNameFromVariable(e,e.statefulName.charAt(0)),e.templateName=e.templateName.substr(0,e.templateName.lastIndexOf(".")+1)+e.name)}};return a}));