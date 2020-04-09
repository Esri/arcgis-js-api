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

define(["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","dojo/i18n!esri/nls/jsapi"],(function(e,t,a,i){var r=i.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable,n=i.geoenrichment.dijit.ReportPlayer.ReportPlayer.unsupportedContent;i=i.geoenrichment.dijit.ReportPlayer.VariableStates;var l={},o=function(e,i){return i.fieldData?a.getValueFromFieldData(e,i):t.getValuePreview(e,i)},u=function(e,a,i){if(!e.isUnavailableData&&!e.conditionalStyle&&!i.fieldData){var r=t.getConditionalStylePreview(a,i);r&&(e.conditionalStyle=!!i.previewConditionalStyle&&r)}},d=function(e,a){e.isUnavailableData||e.modifiedValue||a.fieldData||!a.presetFilter||(e.modifiedValue=t.getRangeFilterPreview(a))},f=function(e,a){e.isUnavailableData||a.fieldData||!a.presetSorting||(e.modifiedValue=t.getSortingPreview(a))},s=function(e){function t(e,t){return!e||e.length<=t?e:e.substr(0,t-3)+"..."}return"["+(e.isWebMap?t(e.webMapFieldName,15)+"(WebMap)":e.isSiteAttribute?t(e.alias,15)+"(SiteAttribute)":e.isDataLayerAttribute?t(e.alias,15)+"(NearbyLocations)":e.isCustomDataCollection?t(e.alias,15)+"(CustomData)":function(e,t){var a;switch(t){case"p":a=i.statePercent_short;break;case"a":a=i.stateAverage_short;break;case"i":a=i.stateIndex_short;break;case"r":a=i.stateReliability_short;break;default:return e}return e+" ("+a+")"}(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()))+"]"},c=function(t){return"["+e.name.renderScriptName(t.name)+"]"},m=function(t,a){return e.richText.createRichTextFromFieldInfo(t,(function(e){var t=l.renderFieldInfoInTableCell(e,a),i=t.formattedValue;if(a&&a.isBenchmarked){var r=a.getBenchmarkInfo(t.value,e);i+=" ("+(r.isGreater?"+":"-")+r.formattedValue+")"}return i}),(function(e){return l.renderFieldInfoInTableCell(e,a).formattedValue}))};return l.renderFieldInfoInTableCell=function(t,a){a=a||{};var i={formattedValue:null,value:null,formatFunction:null,isUnavailableData:!1,conditionalStyle:null,modifiedValue:null};if(t.isRichText)return i.formattedValue=m(t,a),i;if(t.isMissing)return i.formattedValue=r,i.isUnavailableData=!0,i;if(t.isUnsupportedContent)return i.formattedValue=n,i.isUnavailableData=!0,i;if(a.previewValues?i=o(t,a):t.hasVariable?i.formattedValue=s(t):t.script?i.formattedValue=c(t.script):i.formattedValue="["+t.alias+"]",(t.hasVariable||t.script)&&(u(i,t,a),d(i,a),f(i,a),i.formattedValue=e.format.providePercentCurrencySymbols(i.formattedValue,t,{placePercentCurrencyInFront:!a.previewValues}),i.formatFunction)){var l=i.formatFunction;i.formatFunction=function(i){return e.format.providePercentCurrencySymbols(l(i),t,{placePercentCurrencyInFront:!a.previewValues})},i.conditionalStyle&&void 0===i.conditionalStyle.formattedValue&&(i.conditionalStyle.formattedValue=i.formatFunction(i.conditionalStyle.value)),i.modifiedValue&&void 0===i.modifiedValue.formattedValue&&(i.modifiedValue.formattedValue=i.formatFunction(i.modifiedValue.value))}return i},l.getConditionalStylePreview=function(e,t){var a={};return u(a,e,{rowIndex:t,previewConditionalStyle:!0}),a.conditionalStyle},l.renderRichTextFieldInfoInTableCell=m,l.getValueFromFieldData=a.getValueFromFieldData,l.getFieldDataValue=a.getFieldDataValue,l}));