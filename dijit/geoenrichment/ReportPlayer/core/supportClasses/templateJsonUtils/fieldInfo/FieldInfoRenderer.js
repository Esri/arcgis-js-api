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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","dojo/i18n!esri/nls/jsapi"],function(e,t,a,r){var i=r.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable,n=r.geoenrichment.dijit.ReportPlayer.ReportPlayer.unsupportedContent;r=r.geoenrichment.dijit.ReportPlayer.VariableStates;var l={},o={renderPreview:function(e,r){return r.fieldData?a.getValueFromFieldData(e,r):t.getValuePreview(e,r)},tryProvideConditionalStylePreview:function(e,a,r){if(!e.isUnavailableData&&!e.conditionalStyle&&!r.fieldData){var i=t.getConditionalStylePreview(a,r);i&&(e.conditionalStyle=!!r.previewConditionalStyle&&i)}},tryProvideRangeFilterPreview:function(e,a){e.isUnavailableData||e.rangeValue||a.fieldData||!a.presetFilter||(e.rangeValue=t.getRangeFilterPreview(a))}},u={buildVariableLabel:function(e){function t(e,t){return!e||e.length<=t?e:e.substr(0,t-3)+"..."}return"["+(e.isWebMap?t(e.webMapFieldName,15)+"(WebMap)":e.isSiteAttribute?t(e.alias,15)+"(SiteAttribute)":e.isDataLayerAttribute?t(e.alias,15)+"(NearbyLocations)":e.isCustomDataCollection?t(e.alias,15)+"(CustomData)":function(e,t){var a;switch(t){case"p":a=r.statePercent_short;break;case"a":a=r.stateAverage_short;break;case"i":a=r.stateIndex_short;break;case"r":a=r.stateReliability_short;break;default:return e}return e+" ("+a+")"}(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()))+"]"},buildScriptLabel:function(t){return"["+e.name.renderScriptName(t.name)+"]"}},d={renderRichTextFieldInfoInTableCell:function(t,a){return e.richText.createRichTextFromFieldInfo(t,function(e){return l.renderFieldInfoInTableCell(e,a).formattedValue},function(e){return l.renderFieldInfoInTableCell(e,a).formattedValue})}};return l.renderFieldInfoInTableCell=function(t,a){a=a||{};var r={formattedValue:null,value:null,formatFunction:null,isUnavailableData:!1,conditionalStyle:null,rangeValue:null};if(t.isRichText)return r.formattedValue=d.renderRichTextFieldInfoInTableCell(t,a),r;if(t.isMissing)return r.formattedValue=i,r.isUnavailableData=!0,r;if(t.isUnsupportedContent)return r.formattedValue=n,r.isUnavailableData=!0,r;if(a.previewValues?r=o.renderPreview(t,a):t.hasVariable?r.formattedValue=u.buildVariableLabel(t):t.script?r.formattedValue=u.buildScriptLabel(t.script):r.formattedValue="["+t.alias+"]",(t.hasVariable||t.script)&&(o.tryProvideConditionalStylePreview(r,t,a),o.tryProvideRangeFilterPreview(r,a),r.formattedValue=e.format.providePercentCurrencySymbols(r.formattedValue,t,{placePercentCurrencyInFront:!a.previewValues}),r.formatFunction)){var l=r.formatFunction;r.formatFunction=function(r){return e.format.providePercentCurrencySymbols(l(r),t,{placePercentCurrencyInFront:!a.previewValues})},r.conditionalStyle&&void 0===r.conditionalStyle.formattedValue&&(r.conditionalStyle.formattedValue=r.formatFunction(r.conditionalStyle.value)),r.rangeValue&&void 0===r.rangeValue.formattedValue&&(r.rangeValue.formattedValue=r.formatFunction(r.rangeValue.value))}return r},l.getConditionalStylePreview=function(e,t){var a={};return o.tryProvideConditionalStylePreview(a,e,{rowIndex:t,previewConditionalStyle:!0}),a.conditionalStyle},l.renderRichTextFieldInfoInTableCell=d.renderRichTextFieldInfoInTableCell,l.getValueFromFieldData=a.getValueFromFieldData,l.getFieldDataValue=a.getFieldDataValue,l});