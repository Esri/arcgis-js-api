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

define([],(function(){var e={},t={backgroundColor:1,color:1,fontFamily:1,fontSize:1,fontStyle:1,fontWeight:1,textDecoration:1};function l(e,l){var o={};for(var i in t)e&&void 0!==e[i]&&(o[i]=e[i]),l&&void 0!==l[i]&&(o[i]=l[i]);return o}return e.applyThemeSettingsToJson=function(t,o){if(t.header){var i=t.header.data.data[0];if(o&&o.titleStyle){i.style.fields.field0;i.themeStyle={fields:{field0:l(o.titleStyle)}}}else i&&delete i.themeStyle;var a=t.header.data.data[1];if(a){var r=a.fieldInfos.field0.shapeJson;r&&o&&o.titleLine&&o.titleLine.color?r.style.borderColor||(r.themeStyle={borderColor:o.titleLine.color}):r&&delete r.themeStyle}}return t.variableTables&&t.variableTables.forEach((function(t){if(t.shape){var i=t.shape.shapeJson;e.applyThemeSettingsToShapeJson(i,o,t.shape.isHighlighted)}var a;t.variable&&(o&&o.variableLabelStyle?(t.variable.isHighlighted?a=l(o.variableLabelStyleHighlighted):t.variable.isContrastColor&&(a=l(o.variableLabelStyleContrast)),t.variable.themeStyle=l(o.variableLabelStyle,a),t.variable.themeStyle.isHighlighted=t.variable.isHighlighted,t.variable.themeStyle.isContrastColor=t.variable.isContrastColor):delete t.variable.themeStyle);t.description&&(o&&o.variableDescriptionStyle?t.description.themeStyle=l(o.variableDescriptionStyle):delete t.description.themeStyle)})),t},e.applyThemeSettingsToShapeJson=function(e,t,l){var o=l?"highlightedIcon":"icon";e&&t&&t[o]&&t[o].backgroundColor?(e.themeStyle={isHighlighted:l},e.style.borderColor||(e.themeStyle.borderColor=t[o].backgroundColor),e.style.fillColor||(e.themeStyle.fillColor=t[o].backgroundColor)):e&&delete e.themeStyle,e&&t&&t.iconBarBackground&&t.iconBarBackground.backgroundColor?(e.barBackgroundThemeStyle={},e.barBackgroundStyle&&e.barBackgroundStyle.fillColor||(e.barBackgroundThemeStyle.fillColor=t.iconBarBackground.backgroundColor)):e&&delete e.barBackgroundThemeStyle},e.undoThemeFromJson=function(t){return e.applyThemeSettingsToJson(t,null)},e.applyThemeSettingsPaginatableInfographicJson=function(t,l){return e._applyThemeSettingsToTitleSectionJson(t,l)},e.applyThemeSettingsComparisonInfographicJson=function(t,l){return e._applyThemeSettingsToTitleSectionJson(t,l)},e.applyThemeSettingsAreaDetailsInfographicJson=function(t,l){return e._applyThemeSettingsToTitleSectionJson(t,l)},e._applyThemeSettingsToTitleSectionJson=function(e,t){if(e.titleSectionJson){var o=e.titleSectionJson.stack[0].data.data[0];if(t&&t.titleStyle){o.style.fields.field0;o.themeStyle={fields:{field0:l(t.titleStyle)}}}else o&&delete o.themeStyle;var i=e.titleSectionJson.stack[0].data.data[1];if(i){var a=i.fieldInfos.field0.shapeJson;a&&t&&t.titleLine&&t.titleLine.color?a.style.borderColor||(a.themeStyle={borderColor:t.titleLine.color}):a&&delete a.themeStyle}}return e},e}));