// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang","../../supportClasses/templateJsonUtils/fieldInfo/FieldLibrary","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],(function(e,n,t,i,l){var r={getFieldCellValue:function(e){return e.row&&e.row[e.column.field]},setFieldCellContent:function(e,n){e.set("value",n),e.row[e.column.field]=n},clearFieldInfo:function(e,n){e.fieldInfos&&delete e.fieldInfos[n],e[n]="",r.setNumericDataValue(void 0,e,n)}};return r.getNumericCellValue=function(e){return r.getNumericDataValue(e.row,e.column.field)},r.setNumericCellValue=function(e,n){return r.setNumericDataValue(n,e.row,e.column.field)},r.getNumericDataValue=function(e,n){return e&&n&&e[n+"_numeric"]},r.setNumericDataValue=function(e,n,t){n[t+"_numeric"]=e},r.getCellGroupStyleStats=function(e){return e.row&&e.column.field&&e.row[e.column.field+"_groupStyle"]},r.setCellGroupStyleStats=function(e,n){e.row[e.column.field+"_groupStyle"]=n},r.getRenderedValue=function(e,n,t){var o={parentGrid:e,row:n,column:t},a=e._getCellRenderer().getRenderedContent(o);if(a.isUnavailableData)return{};var u=r.getNumericDataValue(n,t.field);if("number"!=typeof u)if("number"!=typeof a.value||isNaN(a.value)){if("string"==typeof a.formattedValue){var f=i.parsePercentOrCurrency(a.formattedValue,l.getCurrencyFormat());isNaN(f)||(u=f)}}else u=a.value;return{numericValue:u,formattedValue:a.formattedValue}},r.isEmptyCell=function(e){return!e.get("value")&&!e.row[e.column.field]&&!r.getFieldInfo(e)},r.hasSpans=function(e){return r.getColumnSpan(e)||r.getRowSpan(e)},r.getColumnSpan=function(e){return e&&e.row&&e.row.columnSpans&&e.row.columnSpans[e.column.field]},r.getRowSpan=function(e){return e&&e.row&&e.row.rowSpans&&e.row.rowSpans[e.column.field]},r.getDataColumnSpan=function(e,n){return e&&e.columnSpans&&e.columnSpans[n]},r.getDataRowSpan=function(e,n){return e&&e.rowSpans&&e.rowSpans[n]},r.getFieldInfo=function(e){return e&&e.row&&e.column&&e.row.fieldInfos&&e.row.fieldInfos[e.column.field]},r.getGridFirstFieldInfo=function(e){return r.getFieldInfo(e.getFirstCell())},r.setFieldInfo=function(e,n){e.row&&(e.row.fieldInfos[e.column.field]=n)},r.provideFieldInfo=function(e){return r.setFieldInfo(e,r.getFieldInfo(e)||{}),r.getFieldInfo(e)},r.getPreservableSettings=function(e){return{triggerJson:r.getConditionalFormatting(e),dataDrilling:r.getDataDrilling(e),tooltipInfo:r.getTooltipInfo(e)}},r.setPreservableSettings=function(e,n){r.setConditionalFormatting(e,n&&n.triggerJson),r.setDataDrilling(e,n&&n.dataDrilling),r.setTooltipInfo(e,n&&n.tooltipInfo)},r.getCellStyle=function(e,n){if(!e||!e.row||!e.column)return null;var t=e.row.style&&e.row.style.fields&&e.row.style.fields[e.column.field];return!t&&n&&(t={},r.setCellStyle(e,t)),t},r.getCellThemeStyle=function(e){return e&&e.row&&e.column?e.row.themeStyle&&e.row.themeStyle.fields[e.column.field]:null},r.setCellStyle=function(e,n){var t=e.row.style=e.row.style||{};t.fields=t.fields||{},t.fields[e.column.field]=n},r.updateCellStyle=function(n,t){var i=r.getCellStyle(n,!0);e.mixin(i,t)},r.copyFieldStyle=function(e,n,t){var i=r.getCellStyle(e),l=r.getCellStyle(n,!0);for(var o in t)void 0!==i[o]&&(l[o]=i[o])},r.getFieldCellUrl=function(e){if(e.row&&e.row.urls&&e.column)return e.row.urls[e.column.field]},r.setFieldCellUrl=function(e,n){e.row&&e.column&&(e.row.urls=e.row.urls||{},void 0===n?delete e.row.urls[e.column.field]:e.row.urls[e.column.field]=n)},r.getConditionalFormatting=function(e){var n=r._toFieldInfo(e);return n&&n.triggerJson},r.setConditionalFormatting=function(n,t){var i=r.getFieldInfo(n);if(i){if(i.triggerJson=null,t){var l=r.isVariableLikeFieldCell(n);l&&(t.fieldInfo=i),t.fieldInfo===i&&(t.fieldInfo=e.clone(t.fieldInfo),delete t.fieldInfo.triggerJson,l&&(delete t.fieldInfo.tooltipInfo,delete t.fieldInfo.dataDrillingPanelInfo))}i.triggerJson=t}},r.getDataDrilling=function(e){var n=r.getSourceFieldInfo(e);return n&&n.dataDrillingPanelInfo},r.setDataDrilling=function(e,n){var t=r.getSourceFieldInfo(e);t&&(t.dataDrillingPanelInfo=n)},r.getTooltipInfo=function(e){var n=r.getSourceFieldInfo(e);return n&&n.tooltipInfo},r.setTooltipInfo=function(e,n){var t=r.getSourceFieldInfo(e);t&&(t.tooltipInfo=n)},r.getSourceFieldInfo=function(e){var n=r._toFieldInfo(e),t=r.getConditionalFormatting(e);return n&&n.isImage?t&&t.fieldInfo:n},r._toFieldInfo=function(e){return e?e.row?r.getFieldInfo(e):"object"==typeof e&&e:null},r.isReportSectionCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.isReportSection)},r.isInfographicCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.isInfographic)},r.isChartCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.isChart)},r.isMapCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.isMap)},r.isImageCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.isImage)},r.isImageTriggerCell=function(e){var n=r._toFieldInfo(e);return!!(n&&n.isImage&&n.triggerJson)},r.getImageTriggerFieldInfo=function(e){var n=r._toFieldInfo(e);return n&&n.isImage&&n.triggerJson?n.triggerJson.fieldInfo:null},r.isShapeCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.isShape)},r.isEmptyShapeCell=function(e){var n=r._toFieldInfo(e),t=n&&n.shapeJson;return!(!t||t.g&&t.g.length)},r.isPlaceholderShapeCell=function(e){var n=r._toFieldInfo(e),t=n&&n.shapeJson;return!(!t||!t.isPlaceholder)},r.isTextLikeCell=function(e){return!r._toFieldInfo(e)||r.isRichTextCell(e)||r.isVariableLikeFieldCell(e)||r.isSpecialFieldCell(e)},r.isRichTextCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.isRichText)},r.isVariableLikeFieldCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.hasVariable&&!n.script&&"headers.CHART_POINT_VALUE"!==n.name&&"LocatorSummary"!==n.name)},r.isVariableFieldCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.hasVariable)},r.isScriptFieldCell=function(e){var n=r._toFieldInfo(e);return!(!n||!n.script)},r.isUneditableScript=function(e){var n=r._toFieldInfo(e);return!!(n&&n.script&&n.script.isUneditableScript)},r.isNumericVariableFieldCell=function(e){var n=r._toFieldInfo(e);return!!n&&(!(!n.hasVariable||!t.isNumericField(n))||(!(!n.script||"Double"!==n.script.type&&(n.script.isUneditableScript||"String"===n.script.type))||("headers.CHART_POINT_VALUE"===n.name||"LocatorSummary"===n.name)))},r.isCalculatableNumericVariableFieldCell=function(e){return r.isNumericVariableFieldCell(e)},r.isStringVariableFieldCell=function(e){var n=r._toFieldInfo(e);return!(!n||!(n.hasVariable&&"esriFieldTypeString"===n.type||n.script&&"String"===n.script.type))},r.isSpecialFieldCell=function(e){var t=r._toFieldInfo(e);return t&&("headers.CHART_POINT_VALUE"===t.name||"LocatorSummary"===t.name||!r.isVariableLikeFieldCell(e)&&n.hasField(t.name))},r}));