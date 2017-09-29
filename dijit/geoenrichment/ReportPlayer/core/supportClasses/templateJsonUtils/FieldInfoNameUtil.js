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

define([],function(){var e={SCRIPT_PREFIX:"SCRIPT_",DEFAULT_SCRIPT_NAME:"SCRIPT_Custom",SCRIPT_PREFIX_RE:/^SCRIPT_/i,FIRST_SYMBOL_IS_NUMBER_RE:/^[0-9]/,DATA_COLLECTIONS_CALCULATOR_NAME:"dataCollectionsCalculator",MAPS_CALCULATOR_NAME:"mapsCalculator",createFieldNameFromVariable:function(r,_){function a(e){return e.replace(/_|\.|\s/g,"")}if(!r)return"";var t;if(r.isWebMap)t=a(r.fieldName);else{t=a(r.fullName||r),_=_||"n";var R="n"==_?"":"_"+_;t+=R,e.FIRST_SYMBOL_IS_NUMBER_RE.test(t)&&(t="_"+t)}return t.toUpperCase()},createFieldNameFromScript:function(r){var _=r.name;return e.SCRIPT_PREFIX_RE.test(_)&&(_=_.substr(e.SCRIPT_PREFIX.length)),e.SCRIPT_PREFIX+_.replace(/\.|-/g,"")},renderScriptName:function(r){return r.replace(e.SCRIPT_PREFIX_RE,"")},provideQualifiedFieldInfoTemplateName:function(r){r.templateName=e.DATA_COLLECTIONS_CALCULATOR_NAME+"."+r.name}};return e});