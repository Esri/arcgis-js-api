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

define(["./utils","./_FieldInfoPreviewRenderer","./_FieldInfoDataRenderer","./countryConfig","dojo/i18n!../../../../../../nls/jsapi"],function(e,r,a,t,i){i=i.geoenrichment.dijit.ReportPlayer.ReportPlayer;var n={},l={renderPreview:function(e,t){return t.fieldData?a.getValueFromFieldData(e,t):r.getValuePreview(e,t)},tryGetConditionalStylePreview:function(e,a,t){if("string"==typeof e&&t&&!t.previewValues){var i=r.getConditionalStylePreview(a,t);i&&(e={label:e,conditionalStyle:t.previewConditionalStyle?i:!1})}return e}},o={buildVariableLabel:function(e){function r(e,r){return!e||e.length<=r?e:e.substr(0,r-3)+"..."}function a(e,r){var a;switch(r){case"p":a=i.statePercent;break;case"a":a=i.stateAverage;break;case"i":a=i.stateIndex;break;case"r":a=i.stateReliability;break;default:return e}return e+" ("+a+")"}var t;return t=e.isWebMap?r(e.webMapFieldName,15)+"(WebMap)":e.isCustomDataCollection?r(e.alias,15)+"(CustomData)":a(e.variableID,e.statefulName&&e.statefulName.charAt(0).toLowerCase()),"["+t+"]"},buildScriptLabel:function(r){return"["+e.name.renderScriptName(r.name)+"]"}},u={renderRichTextFieldInfoInTableCell:function(r,a){return e.richText.createRichTextFromFieldInfo(r,function(e){var r=n.renderFieldInfoInTableCell(e,a);return r&&r.label||r},function(e){var r=n.renderFieldInfoInTableCell(e,a);return r&&r.label||r})}};return n.renderFieldInfoInTableCell=function(e,r){function a(){return"["+e.alias+"]"}function n(){var a=d&&d.label||d;(e.hasVariable||e.script)&&(e.showCurrency&&(a=t.getCurrencySymbol()+a),e.showPercent&&(r&&r.previewValues?a+="%":a="%"+a)),"object"==typeof d?d.label=a:d=a}if(e.isRichText)return u.renderRichTextFieldInfoInTableCell(e,r);var d;return d=e.isMissing?i.missingVariable:r&&r.previewValues?l.renderPreview(e,r):e.hasVariable?o.buildVariableLabel(e):e.script?o.buildScriptLabel(e.script):a(),d=l.tryGetConditionalStylePreview(d,e,r),n(),d},n.renderRichTextFieldInfoInTableCell=u.renderRichTextFieldInfoInTableCell,n.getValueFromFieldData=a.getValueFromFieldData,n.getFieldDataValue=a.getFieldDataValue,n});