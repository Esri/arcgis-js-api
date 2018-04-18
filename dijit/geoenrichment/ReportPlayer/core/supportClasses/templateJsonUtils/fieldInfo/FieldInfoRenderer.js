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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","../countryConfig","dojo/i18n!../../../../../../../nls/jsapi"],function(e,t,r,a,i){var n=i.geoenrichment.dijit.ReportPlayer.ReportPlayer.missingVariable;i=i.geoenrichment.dijit.ReportPlayer.VariableStates;var l={},o={renderPreview:function(e,a){return a.fieldData?r.getValueFromFieldData(e,a):t.getValuePreview(e,a)},tryGetConditionalStylePreview:function(e,r,a){if("string"==typeof e&&a&&!a.previewValues){var i=t.getConditionalStylePreview(r,a);i&&(e={label:e,conditionalStyle:!!a.previewConditionalStyle&&i})}return e}},u={buildVariableLabel:function(e){function t(e,t){return!e||e.length<=t?e:e.substr(0,t-3)+"..."}return"["+(e.isWebMap?t(e.webMapFieldName,15)+"(WebMap)":e.isSiteAttribute?t(e.alias,15)+"(SiteAttribute)":e.isDataLayerAttribute?t(e.alias,15)+"(PointProximityData)":e.isCustomDataCollection?t(e.alias,15)+"(CustomData)":function(e,t){var r;switch(t){case"p":r=i.statePercent_short;break;case"a":r=i.stateAverage_short;break;case"i":r=i.stateIndex_short;break;case"r":r=i.stateReliability_short;break;default:return e}return e+" ("+r+")"}(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()))+"]"},buildScriptLabel:function(t){return"["+e.name.renderScriptName(t.name)+"]"}},s={renderRichTextFieldInfoInTableCell:function(t,r){return e.richText.createRichTextFromFieldInfo(t,function(e){var t=l.renderFieldInfoInTableCell(e,r);return t&&t.label||t},function(e){var t=l.renderFieldInfoInTableCell(e,r);return t&&t.label||t})}};return l.renderFieldInfoInTableCell=function(e,t){if(e.isRichText)return s.renderRichTextFieldInfoInTableCell(e,t);var r;return r=e.isMissing?n:t&&t.previewValues?o.renderPreview(e,t):e.hasVariable?u.buildVariableLabel(e):e.script?u.buildScriptLabel(e.script):function(){return"["+e.alias+"]"}(),r=o.tryGetConditionalStylePreview(r,e,t),function(){var i=String(r&&r.label||r);(e.hasVariable||e.script)&&(e.showCurrency?i="-"===i.charAt(0)?"-"+a.getCurrencySymbol()+i.substr(1):a.getCurrencySymbol()+i:e.showPercent&&(t&&t.previewValues?i+="%":i="%"+i)),r&&"object"==typeof r?r.label=i:r=i}(),r},l.renderRichTextFieldInfoInTableCell=s.renderRichTextFieldInfoInTableCell,l.getValueFromFieldData=r.getValueFromFieldData,l.getFieldDataValue=r.getFieldDataValue,l});