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

define([],function(){var e={};return e.isEmptyCell=function(i){return!i.get("value")&&!i.gridData[i.column.field]&&!e.getFieldInfo(i)},e.hasSpans=function(i){return e.getColumnSpan(i)||e.getRowSpan(i)},e.getColumnSpan=function(e){return e.gridData&&e.gridData.columnSpans&&e.gridData.columnSpans[e.column.field]},e.getRowSpan=function(e){return e.gridData&&e.gridData.rowSpans&&e.gridData.rowSpans[e.column.field]},e.getDataColumnSpan=function(e,i){return e&&e.columnSpans&&e.columnSpans[i]},e.getDataRowSpan=function(e,i){return e&&e.rowSpans&&e.rowSpans[i]},e.getFieldInfo=function(e){return e&&e.gridData&&e.gridData.fieldInfos&&e.gridData.fieldInfos[e.column.field]},e.setFieldInfo=function(e,i){e.gridData&&(e.gridData.fieldInfos[e.column.field]=i,i||e.setInfoTooltip&&e.setInfoTooltip(null))},e.provideFieldInfo=function(i){return e.setFieldInfo(i,e.getFieldInfo(i)||{}),e.getFieldInfo(i)},e.getCellStyle=function(i,n){if(!i||!i.gridData)return null;var t=i.gridData.style&&i.gridData.style.fields&&i.gridData.style.fields[i.column.field];return!t&&n&&(t={},e.setCellStyle(i,t)),t},e.setCellStyle=function(e,i){var n=e.gridData.style=e.gridData.style||{};n.fields=n.fields||{},n.fields[e.column.field]=i},e.copyFieldStyle=function(i,n,t){var l=e.getCellStyle(i),r=e.getCellStyle(n,!0);for(var a in t)void 0!==l[a]&&(r[a]=l[a])},e.getFieldCellText=function(e){return e.gridData&&e.gridData[e.column.field]},e.setFieldCellContent=function(e,i){e.set("value",i||""),e.gridData[e.column.field]=e.get("value")},e.clearFieldInfo=function(e,i){e.fieldInfos&&delete e.fieldInfos[i.field],e[i.field]=""},e.getFieldCellUrl=function(e){return e.gridData&&e.gridData.urls&&e.column?e.gridData.urls[e.column.field]:void 0},e.setFieldCellUrl=function(e,i){e.gridData&&e.column&&(e.gridData.urls=e.gridData.urls||{},void 0===i?delete e.gridData.urls[e.column.field]:e.gridData.urls[e.column.field]=i)},e.getConditionalFormatting=function(i){var n=e.getFieldInfo(i);return n&&n.triggerJson},e.setConditionalFormatting=function(i,n){var t=e.provideFieldInfo(i);t.triggerJson=n},e.isRichTextCell=function(i){var n=e.getFieldInfo(i);return n&&n.isRichText},e.isVariableFieldCell=function(i){var n=e.getFieldInfo(i);return n&&(n.hasVariable||n.script)},e.isOnlyVariableFieldCell=function(i){var n=e.getFieldInfo(i);return n&&n.hasVariable},e.isScriptFieldCell=function(i){var n=e.getFieldInfo(i);return n&&n.script},e.isUneditableScript=function(i){var n=e.getFieldInfo(i);return n&&n.script&&n.script.isUneditableScript},e.isNumericVariableFieldCell=function(i){var n=e.getFieldInfo(i);return n&&(n.hasVariable||n.script&&(!n.script.isUneditableScript||"String"!=n.script.type))},e.isChartCell=function(i){var n=e.getFieldInfo(i);return n&&n.isChart},e.isImageCell=function(i){var n=e.getFieldInfo(i);return n&&n.isImage},e.isMapImageCell=function(i){var n=e.getFieldInfo(i);return n&&n.isImage&&n.imageJson.isMapImage},e.isImageTriggerCell=function(i){var n=e.getFieldInfo(i);return n&&n.isImage&&n.triggerJson},e.isShapeCell=function(i){var n=e.getFieldInfo(i);return n&&n.isShape},e.isEmptyShapeCell=function(i){var n=e.getFieldInfo(i),t=n&&n.shapeJson;return t&&!t.g||!t.g.length},e.isReportSectionCell=function(i){var n=e.getFieldInfo(i);return n&&n.isReportSection},e.isInfographicCell=function(i){var n=e.getFieldInfo(i);return n&&n.isInfographic},e});