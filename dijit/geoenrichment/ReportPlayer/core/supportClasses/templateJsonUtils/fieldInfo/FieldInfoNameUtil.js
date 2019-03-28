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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define([],function(){var e={SCRIPT_PREFIX:"",DEFAULT_SCRIPT_NAME:"Custom",TOTAL_SCRIPT_NAME:"Total",AVG_SCRIPT_NAME:"Average",SCRIPT_PREFIX_RE:/^SCRIPT_/i,FIRST_SYMBOL_IS_NUMBER_RE:/^[0-9]/,DATA_COLLECTIONS_CALCULATOR_NAME:"dataCollectionsCalculator",MAPS_CALCULATOR_NAME:"mapsCalculator",UNITED_MAPS_CALCULATOR_NAME:"unitedMapsCalculator",AREA_ATTRIBUTES_CALCULATOR_NAME:"headers",ENRICHED_DATA_NO_LEVELS:"enrichFieldData_noLevels",createFieldNameFromVariable:function(a,t){if(!a)return"";if(a.isSiteAttribute)return a.attribute.name;if(a.isWebMap)return a.webMapFieldName||a.fieldName;var _=(a.fullName||a).replace(/_|\.|\s/g,"");return t=t||"n",_+="n"===t?"":"_"+t,e.FIRST_SYMBOL_IS_NUMBER_RE.test(_)&&(_="_"+_),e._checkXMLValidName(_.toUpperCase())},createFieldNameFromScript:function(a){var t=a.name;return e.SCRIPT_PREFIX_RE.test(t)&&(t=t.replace(e.SCRIPT_PREFIX_RE,"")),e._checkXMLValidName(e.SCRIPT_PREFIX+t.replace(/\.|-/g,""))},_XML_MASK_NAME_RE:/(_X)(\d\d\d\d)/i,_checkXMLValidName:function(a){return e._XML_MASK_NAME_RE.test(a)?a.replace(e._XML_MASK_NAME_RE,"$1_$2"):a},renderScriptName:function(a){return a.replace(e.SCRIPT_PREFIX_RE,"")},provideQualifiedFieldInfoTemplateName:function(a,t){a&&(t?a.templateName=t+"."+a.name:a.isWebMap?a.templateName=e.AREA_ATTRIBUTES_CALCULATOR_NAME+"."+a.name:a.isSiteAttribute?a.templateName=e.AREA_ATTRIBUTES_CALCULATOR_NAME+"."+a.name:a.templateName=e.DATA_COLLECTIONS_CALCULATOR_NAME+"."+a.name)},getCalculatorName:function(e){return e&&e.templateName&&e.templateName.substr(0,e.templateName.indexOf("."))},isAreaAttributesFieldInfo:function(a){return e.getCalculatorName(a)===e.AREA_ATTRIBUTES_CALCULATOR_NAME},updateCalculatorName:function(e,a){e&&e.templateName&&(e.templateName=a+e.templateName.substr(e.templateName.indexOf(".")))},refreshNameAndTemplateName:function(a){a.statefulName&&a.fullName&&(a.name=e.createFieldNameFromVariable(a,a.statefulName.charAt(0)),a.templateName=a.templateName.substr(0,a.templateName.lastIndexOf(".")+1)+a.name)}};return e});