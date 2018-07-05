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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","../countryConfig","dojo/i18n!esri/nls/jsapi"],function(e,t,a,r,i){var n=i.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable;i=i.geoenrichment.dijit.ReportPlayer.VariableStates;var l={},o={renderPreview:function(e,r){return r.fieldData?a.getValueFromFieldData(e,r):t.getValuePreview(e,r)},tryProvideConditionalStylePreview:function(e,a,r){if(!e.isUnavailableData&&!e.conditionalStyle&&!r.fieldData){var i=t.getConditionalStylePreview(a,r);i&&(e.conditionalStyle=!!r.previewConditionalStyle&&i)}}},u={buildVariableLabel:function(e){function t(e,t){return!e||e.length<=t?e:e.substr(0,t-3)+"..."}return"["+(e.isWebMap?t(e.webMapFieldName,15)+"(WebMap)":e.isSiteAttribute?t(e.alias,15)+"(SiteAttribute)":e.isDataLayerAttribute?t(e.alias,15)+"(PointProximityData)":e.isCustomDataCollection?t(e.alias,15)+"(CustomData)":function(e,t){var a;switch(t){case"p":a=i.statePercent_short;break;case"a":a=i.stateAverage_short;break;case"i":a=i.stateIndex_short;break;case"r":a=i.stateReliability_short;break;default:return e}return e+" ("+a+")"}(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()))+"]"},buildScriptLabel:function(t){return"["+e.name.renderScriptName(t.name)+"]"}},d={renderRichTextFieldInfoInTableCell:function(t,a){return e.richText.createRichTextFromFieldInfo(t,function(e){return l.renderFieldInfoInTableCell(e,a).formattedValue},function(e){return l.renderFieldInfoInTableCell(e,a).formattedValue})}};return l.renderFieldInfoInTableCell=function(e,t){t=t||{};var a={formattedValue:null,value:null,formatFunction:null,isUnavailableData:!1,conditionalStyle:null};if(e.isRichText)return a.formattedValue=d.renderRichTextFieldInfoInTableCell(e,t),a;if(e.isMissing)return a.formattedValue=n,a.isUnavailableData=!0,a;if(t.previewValues?a=o.renderPreview(e,t):e.hasVariable?a.formattedValue=u.buildVariableLabel(e):e.script?a.formattedValue=u.buildScriptLabel(e.script):a.formattedValue="["+e.alias+"]",(e.hasVariable||e.script)&&(o.tryProvideConditionalStylePreview(a,e,t),a.formattedValue=l._providePercentCurrencySymbols(a.formattedValue,e,t),a.formatFunction)){var r=a.formatFunction;a.formatFunction=function(a){return l._providePercentCurrencySymbols(r(a),e,t)},a.conditionalStyle&&void 0===a.conditionalStyle.formattedValue&&(a.conditionalStyle.formattedValue=a.formatFunction(a.conditionalStyle.value))}return a},l._providePercentCurrencySymbols=function(e,t,a){return t.showCurrency?e="-"===e.charAt(0)?"-"+r.getCurrencySymbol()+e.substr(1):r.getCurrencySymbol()+e:t.showPercent&&(a.previewValues?e+="%":e="%"+e),e},l.renderRichTextFieldInfoInTableCell=d.renderRichTextFieldInfoInTableCell,l.getValueFromFieldData=a.getValueFromFieldData,l.getFieldDataValue=a.getFieldDataValue,l});