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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["../../../grid/coreUtils/GridDataUtil","./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","dojo/i18n!esri/nls/jsapi"],(function(e,a,t,i,r){var l=r.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable,n=r.geoenrichment.dijit.ReportPlayer.ReportPlayer.unsupportedContent;r=r.geoenrichment.dijit.ReportPlayer.VariableStates;var o={},u=function(e,a){return a.fieldData?i.getValueFromFieldData(e,a):t.getValuePreview(e,a)},d=function(e,a,i){if(!e.isUnavailableData&&!e.conditionalStyle&&!i.fieldData){var r=t.getConditionalStylePreview(a,i);r&&(e.conditionalStyle=!!i.previewConditionalStyle&&r)}},f=function(e,a){e.isUnavailableData||e.modifiedValue||a.fieldData||!a.presetFilter||(e.modifiedValue=t.getRangeFilterPreview(a))},s=function(e,a){e.isUnavailableData||a.fieldData||!a.presetSorting||(e.modifiedValue=t.getSortingPreview(a))};function c(e,a){return a=a||15,!e||e.length<=a?e:e.substr(0,a-3)+"..."}var m={buildVariableLabel:function(e){return"["+(e.isWebMap?c(e.webMapFieldName)+"(WebMap)":e.isSiteAttribute?c(e.alias)+"(SiteAttribute)":e.isDataLayerAttribute?c(e.alias)+"(NearbyLocations)":e.isCustomDataCollection?c(e.alias)+"(CustomData)":function(e,a){var t;switch(a){case"p":t=r.statePercent_short;break;case"a":t=r.stateAverage_short;break;case"i":t=r.stateIndex_short;break;case"r":t=r.stateReliability_short;break;default:return e}return e+" ("+t+")"}(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()))+"]"},_SCRIPT_ALIAS_RE:/\s/g,buildScriptLabel:function(e){return"["+c(e.alias?e.alias.replace(m._SCRIPT_ALIAS_RE,""):a.name.renderScriptName(e.name),40)+"]"}},b=function(e,t){return a.richText.createRichTextFromFieldInfo(e,(function(e){var a=o.renderFieldInfoInTableCell(e,t),i=a.formattedValue;if(t&&t.isBenchmarked){var r=t.getBenchmarkInfo(a.value,e);r&&r.formattedValue&&(i+=" ("+(r.isGreater?"+":"-")+r.formattedValue+")")}return i}))};return o.renderFieldInfoInTableCell=function(t,i){i=i||{};var r={formattedValue:null,value:null,formatFunction:null,isUnavailableData:!1,conditionalStyle:null,modifiedValue:null};if(t.isRichText)return r.formattedValue=b(t,i),r;if(t.isMissing)return r.formattedValue=l,r.isUnavailableData=!0,r;if(t.isUnsupportedContent)return r.formattedValue=n,r.isUnavailableData=!0,r;if(i.previewValues){if((r=u(t,i)).isUnavailableData)return r}else t.hasVariable?r.formattedValue=m.buildVariableLabel(t):t.script?r.formattedValue=m.buildScriptLabel(t.script):r.formattedValue="["+t.alias+"]";if(e.isVariableLikeFieldCell(t)&&(d(r,t,i),f(r,i),s(r,i),r.formattedValue=a.format.providePercentCurrencySymbols(r.formattedValue,t,{placePercentCurrencyInFront:!i.previewValues}),r.formatFunction)){var o=r.formatFunction;r.formatFunction=function(e){return a.format.providePercentCurrencySymbols(o(e),t,{placePercentCurrencyInFront:!i.previewValues})},r.conditionalStyle&&void 0===r.conditionalStyle.formattedValue&&(r.conditionalStyle.formattedValue=r.formatFunction(r.conditionalStyle.value)),r.modifiedValue&&void 0===r.modifiedValue.formattedValue&&(r.modifiedValue.formattedValue=r.formatFunction(r.modifiedValue.value))}return r},o.getConditionalStylePreview=function(e,a){var t={};return d(t,e,{rowIndex:a,previewConditionalStyle:!0}),t.conditionalStyle},o.renderRichTextFieldInfoInTableCell=b,o.getValueFromFieldData=i.getValueFromFieldData,o.getFieldDataValue=i.getFieldDataValue,o}));