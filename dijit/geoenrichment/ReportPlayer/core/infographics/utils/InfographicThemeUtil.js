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

define([],function(){function e(e,t){var o={};for(var i in l)e&&void 0!==e[i]&&(o[i]=e[i]),t&&void 0!==t[i]&&(o[i]=t[i]);return o}var t={},l={backgroundColor:1,color:1,fontFamily:1,fontSize:1,fontStyle:1,fontWeight:1,textDecoration:1};return t.applyThemeSettingsToJson=function(l,o){if(l.header){var i=l.header.data.data[0];if(o&&o.titleStyle){i.style.fields.field0;i.themeStyle={fields:{field0:e(o.titleStyle)}}}else i&&delete i.themeStyle;var a=l.header.data.data[1];if(a){var r=a.fieldInfos.field0.shapeJson;r&&o&&o.titleLine&&o.titleLine.color?r.style.borderColor||(r.themeStyle={borderColor:o.titleLine.color}):r&&delete r.themeStyle}}return l.variableTables&&l.variableTables.forEach(function(l){if(l.shape){var i=l.shape.shapeJson;t.applyThemeSettingsToShapeJson(i,o,l.shape.isHighlighted)}if(l.variable)if(o&&o.variableLabelStyle){var a;l.variable.isHighlighted?a=e(o.variableLabelStyleHighlighted):l.variable.isContrastColor&&(a=e(o.variableLabelStyleContrast)),l.variable.themeStyle=e(o.variableLabelStyle,a),l.variable.themeStyle.isHighlighted=l.variable.isHighlighted,l.variable.themeStyle.isContrastColor=l.variable.isContrastColor}else delete l.variable.themeStyle;l.description&&(o&&o.variableDescriptionStyle?l.description.themeStyle=e(o.variableDescriptionStyle):delete l.description.themeStyle)}),l},t.applyThemeSettingsToShapeJson=function(e,t,l){var o=l?"highlightedIcon":"icon";e&&t&&t[o]&&t[o].backgroundColor?(e.themeStyle={isHighlighted:l},e.style.borderColor||(e.themeStyle.borderColor=t[o].backgroundColor),e.style.fillColor||(e.themeStyle.fillColor=t[o].backgroundColor)):e&&delete e.themeStyle,e&&t&&t.iconBarBackground&&t.iconBarBackground.backgroundColor?(e.barBackgroundThemeStyle={},e.barBackgroundStyle&&e.barBackgroundStyle.fillColor||(e.barBackgroundThemeStyle.fillColor=t.iconBarBackground.backgroundColor)):e&&delete e.barBackgroundThemeStyle},t.undoThemeFromJson=function(e){return t.applyThemeSettingsToJson(e,null)},t.applyThemeSettingsPaginatableInfographicJson=function(e,l){return t._applyThemeSettingsToTitleSectionJson(e,l)},t.applyThemeSettingsComparisonInfographicJson=function(e,l){return t._applyThemeSettingsToTitleSectionJson(e,l)},t.applyThemeSettingsAreaDetailsInfographicJson=function(e,l){return t._applyThemeSettingsToTitleSectionJson(e,l)},t._applyThemeSettingsToTitleSectionJson=function(t,l){if(t.titleSectionJson){var o=t.titleSectionJson.stack[0].data.data[0];if(l&&l.titleStyle){o.style.fields.field0;o.themeStyle={fields:{field0:e(l.titleStyle)}}}else o&&delete o.themeStyle;var i=t.titleSectionJson.stack[0].data.data[1];if(i){var a=i.fieldInfos.field0.shapeJson;a&&l&&l.titleLine&&l.titleLine.color?a.style.borderColor||(a.themeStyle={borderColor:l.titleLine.color}):a&&delete a.themeStyle}}return t},t});