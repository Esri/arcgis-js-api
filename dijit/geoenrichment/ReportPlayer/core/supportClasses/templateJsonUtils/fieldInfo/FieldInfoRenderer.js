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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","dojo/i18n!esri/nls/jsapi"],function(e,a,t,r){var i=r.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable,n=r.geoenrichment.dijit.ReportPlayer.ReportPlayer.unsupportedContent;r=r.geoenrichment.dijit.ReportPlayer.VariableStates;var l={},o={renderPreview:function(e,r){return r.fieldData?t.getValueFromFieldData(e,r):a.getValuePreview(e,r)},tryProvideConditionalStylePreview:function(e,t,r){if(!e.isUnavailableData&&!e.conditionalStyle&&!r.fieldData){var i=a.getConditionalStylePreview(t,r);i&&(e.conditionalStyle=!!r.previewConditionalStyle&&i)}},tryProvideRangeFilterPreview:function(e,t){e.isUnavailableData||e.rangeValue||t.fieldData||!t.presetFilter||(e.rangeValue=a.getRangeFilterPreview(t))}},u={buildVariableLabel:function(e){function a(e,a){return!e||e.length<=a?e:e.substr(0,a-3)+"..."}return"["+(e.isWebMap?a(e.webMapFieldName,15)+"(WebMap)":e.isSiteAttribute?a(e.alias,15)+"(SiteAttribute)":e.isDataLayerAttribute?a(e.alias,15)+"(NearbyLocations)":e.isCustomDataCollection?a(e.alias,15)+"(CustomData)":function(e,a){var t;switch(a){case"p":t=r.statePercent_short;break;case"a":t=r.stateAverage_short;break;case"i":t=r.stateIndex_short;break;case"r":t=r.stateReliability_short;break;default:return e}return e+" ("+t+")"}(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()))+"]"},buildScriptLabel:function(a){return"["+e.name.renderScriptName(a.name)+"]"}},d={renderRichTextFieldInfoInTableCell:function(a,t){return e.richText.createRichTextFromFieldInfo(a,function(e){var a=l.renderFieldInfoInTableCell(e,t),r=a.formattedValue;if(t&&t.isBenchmarked){var i=t.getBenchmarkInfo(a.value,e);r+=" ("+(i.isGreater?"+":"-")+i.formattedValue+")"}return r},function(e){return l.renderFieldInfoInTableCell(e,t).formattedValue})}};return l.renderFieldInfoInTableCell=function(a,t){t=t||{};var r={formattedValue:null,value:null,formatFunction:null,isUnavailableData:!1,conditionalStyle:null,rangeValue:null};if(a.isRichText)return r.formattedValue=d.renderRichTextFieldInfoInTableCell(a,t),r;if(a.isMissing)return r.formattedValue=i,r.isUnavailableData=!0,r;if(a.isUnsupportedContent)return r.formattedValue=n,r.isUnavailableData=!0,r;if(t.previewValues?r=o.renderPreview(a,t):a.hasVariable?r.formattedValue=u.buildVariableLabel(a):a.script?r.formattedValue=u.buildScriptLabel(a.script):r.formattedValue="["+a.alias+"]",(a.hasVariable||a.script)&&(o.tryProvideConditionalStylePreview(r,a,t),o.tryProvideRangeFilterPreview(r,t),r.formattedValue=e.format.providePercentCurrencySymbols(r.formattedValue,a,{placePercentCurrencyInFront:!t.previewValues}),r.formatFunction)){var l=r.formatFunction;r.formatFunction=function(r){return e.format.providePercentCurrencySymbols(l(r),a,{placePercentCurrencyInFront:!t.previewValues})},r.conditionalStyle&&void 0===r.conditionalStyle.formattedValue&&(r.conditionalStyle.formattedValue=r.formatFunction(r.conditionalStyle.value)),r.rangeValue&&void 0===r.rangeValue.formattedValue&&(r.rangeValue.formattedValue=r.formatFunction(r.rangeValue.value))}return r},l.getConditionalStylePreview=function(e,a){var t={};return o.tryProvideConditionalStylePreview(t,e,{rowIndex:a,previewConditionalStyle:!0}),t.conditionalStyle},l.renderRichTextFieldInfoInTableCell=d.renderRichTextFieldInfoInTableCell,l.getValueFromFieldData=t.getValueFromFieldData,l.getFieldDataValue=t.getFieldDataValue,l});