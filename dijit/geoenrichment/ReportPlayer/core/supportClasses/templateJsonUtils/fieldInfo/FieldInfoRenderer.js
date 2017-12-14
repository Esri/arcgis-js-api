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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","../countryConfig","dojo/i18n!../../../../../../../nls/jsapi"],function(e,r,t,a,i){i=i.geoenrichment.dijit.ReportPlayer.ReportPlayer;var n={},l={renderPreview:function(e,a){return a.fieldData?t.getValueFromFieldData(e,a):r.getValuePreview(e,a)},tryGetConditionalStylePreview:function(e,t,a){if("string"==typeof e&&a&&!a.previewValues){var i=r.getConditionalStylePreview(t,a);i&&(e={label:e,conditionalStyle:a.previewConditionalStyle?i:!1})}return e}},o={buildVariableLabel:function(e){function r(e,r){return!e||e.length<=r?e:e.substr(0,r-3)+"..."}function t(e,r){var t;switch(r){case"p":t=i.statePercent_short;break;case"a":t=i.stateAverage_short;break;case"i":t=i.stateIndex_short;break;case"r":t=i.stateReliability_short;break;default:return e}return e+" ("+t+")"}var a;return a=e.isWebMap?r(e.webMapFieldName,15)+"(WebMap)":e.isSiteAttribute?r(e.alias,15)+"(SiteAttribute)":e.isCustomDataCollection?r(e.alias,15)+"(CustomData)":t(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()),"["+a+"]"},buildScriptLabel:function(r){return"["+e.name.renderScriptName(r.name)+"]"}},u={renderRichTextFieldInfoInTableCell:function(r,t){return e.richText.createRichTextFromFieldInfo(r,function(e){var r=n.renderFieldInfoInTableCell(e,t);return r&&r.label||r},function(e){var r=n.renderFieldInfoInTableCell(e,t);return r&&r.label||r})}};return n.renderFieldInfoInTableCell=function(e,r){function t(){return"["+e.alias+"]"}function n(){var t=String(s&&s.label||s);(e.hasVariable||e.script)&&(e.showCurrency&&(t="-"===t.charAt(0)?"-"+a.getCurrencySymbol()+t.substr(1):a.getCurrencySymbol()+t),e.showPercent&&(r&&r.previewValues?t+="%":t="%"+t)),"object"==typeof s?s.label=t:s=t}if(e.isRichText)return u.renderRichTextFieldInfoInTableCell(e,r);var s;return s=e.isMissing?i.missingVariable:r&&r.previewValues?l.renderPreview(e,r):e.hasVariable?o.buildVariableLabel(e):e.script?o.buildScriptLabel(e.script):t(),s=l.tryGetConditionalStylePreview(s,e,r),n(),s},n.renderRichTextFieldInfoInTableCell=u.renderRichTextFieldInfoInTableCell,n.getValueFromFieldData=t.getValueFromFieldData,n.getFieldDataValue=t.getFieldDataValue,n});