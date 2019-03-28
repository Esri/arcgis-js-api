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

define(["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","dojo/i18n!esri/nls/jsapi"],function(e,t,a,r){var i=r.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable;r=r.geoenrichment.dijit.ReportPlayer.VariableStates;var n={},l={renderPreview:function(e,r){return r.fieldData?a.getValueFromFieldData(e,r):t.getValuePreview(e,r)},tryProvideConditionalStylePreview:function(e,a,r){if(!e.isUnavailableData&&!e.conditionalStyle&&!r.fieldData){var i=t.getConditionalStylePreview(a,r);i&&(e.conditionalStyle=!!r.previewConditionalStyle&&i)}}},o={buildVariableLabel:function(e){function t(e,t){return!e||e.length<=t?e:e.substr(0,t-3)+"..."}return"["+(e.isWebMap?t(e.webMapFieldName,15)+"(WebMap)":e.isSiteAttribute?t(e.alias,15)+"(SiteAttribute)":e.isDataLayerAttribute?t(e.alias,15)+"(NearbyLocations)":e.isCustomDataCollection?t(e.alias,15)+"(CustomData)":function(e,t){var a;switch(t){case"p":a=r.statePercent_short;break;case"a":a=r.stateAverage_short;break;case"i":a=r.stateIndex_short;break;case"r":a=r.stateReliability_short;break;default:return e}return e+" ("+a+")"}(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()))+"]"},buildScriptLabel:function(t){return"["+e.name.renderScriptName(t.name)+"]"}},u={renderRichTextFieldInfoInTableCell:function(t,a){return e.richText.createRichTextFromFieldInfo(t,function(e){return n.renderFieldInfoInTableCell(e,a).formattedValue},function(e){return n.renderFieldInfoInTableCell(e,a).formattedValue})}};return n.renderFieldInfoInTableCell=function(t,a){a=a||{};var r={formattedValue:null,value:null,formatFunction:null,isUnavailableData:!1,conditionalStyle:null};if(t.isRichText)return r.formattedValue=u.renderRichTextFieldInfoInTableCell(t,a),r;if(t.isMissing)return r.formattedValue=i,r.isUnavailableData=!0,r;if(a.previewValues?r=l.renderPreview(t,a):t.hasVariable?r.formattedValue=o.buildVariableLabel(t):t.script?r.formattedValue=o.buildScriptLabel(t.script):r.formattedValue="["+t.alias+"]",(t.hasVariable||t.script)&&(l.tryProvideConditionalStylePreview(r,t,a),r.formattedValue=e.format.providePercentCurrencySymbols(r.formattedValue,t,{placePercentInFront:!a.previewValues}),r.formatFunction)){var n=r.formatFunction;r.formatFunction=function(r){return e.format.providePercentCurrencySymbols(n(r),t,{placePercentInFront:!a.previewValues})},r.conditionalStyle&&void 0===r.conditionalStyle.formattedValue&&(r.conditionalStyle.formattedValue=r.formatFunction(r.conditionalStyle.value))}return r},n.getConditionalStylePreview=function(e,t){var a={};return l.tryProvideConditionalStylePreview(a,e,{rowIndex:t,previewConditionalStyle:!0}),a.conditionalStyle},n.renderRichTextFieldInfoInTableCell=u.renderRichTextFieldInfoInTableCell,n.getValueFromFieldData=a.getValueFromFieldData,n.getFieldDataValue=a.getFieldDataValue,n});