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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define([],(function(){var e={},t={backgroundColor:1,color:1,fontFamily:1,fontSize:1,fontStyle:1,fontWeight:1,textDecoration:1};function l(e,l){var o={};for(var i in t)e&&void 0!==e[i]&&(o[i]=e[i]),l&&void 0!==l[i]&&(o[i]=l[i]);return o}return e.applyThemeSettingsToJson=function(t,o){if(t.header){var i=t.header.rows[0];if(o&&o.titleStyle){i.style.fields.field0;i.themeStyle={fields:{field0:l(o.titleStyle)}}}else i&&delete i.themeStyle;var r=t.header.rows[1];if(r){var n=r.fieldInfos.field0.shapeJson;n&&o&&o.titleLine&&o.titleLine.color?n.style.borderColor||(n.themeStyle={borderColor:o.titleLine.color}):n&&delete n.themeStyle}}return t.variableTables&&t.variableTables.forEach((function(t){if(t.shape){var i=t.shape.shapeJson;e.applyThemeSettingsToShapeJson(i,o,t.shape.isHighlighted)}var r;t.variable&&(o&&o.variableLabelStyle?(t.variable.isHighlighted?r=l(o.variableLabelStyleHighlighted):t.variable.isContrastColor&&(r=l(o.variableLabelStyleContrast)),t.variable.themeStyle=l(o.variableLabelStyle,r),t.variable.themeStyle.isHighlighted=t.variable.isHighlighted,t.variable.themeStyle.isContrastColor=t.variable.isContrastColor):delete t.variable.themeStyle);t.description&&(o&&o.variableDescriptionStyle?t.description.themeStyle=l(o.variableDescriptionStyle):delete t.description.themeStyle)})),t},e.applyThemeSettingsToShapeJson=function(e,t,l){if(e){var o=t&&t[l?"highlightedIcon":"icon"];o&&o.backgroundColor?(e.themeStyle={isHighlighted:l},e.style.borderColor||(e.themeStyle.borderColor=o.backgroundColor),e.style.fillColor||(e.themeStyle.fillColor=o.backgroundColor)):delete e.themeStyle;var i=t&&t.iconBarBackground,r=!1;if(i){var n=i.backgroundColor,a=i.borderColor||i.backgroundColor;(n||a)&&(e.backgroundThemeStyle={},e.backgroundStyle&&e.backgroundStyle.fillColor||(e.backgroundThemeStyle.fillColor=n,r=!0),e.backgroundStyle&&e.backgroundStyle.borderColor||(e.backgroundThemeStyle.borderColor=a,r=!0))}r||delete e.backgroundThemeStyle}},e.undoThemeFromJson=function(t){return e.applyThemeSettingsToJson(t,null)},e.applyThemeSettingsPaginatableInfographicJson=function(t,l){return e._applyThemeSettingsToTitleSectionJson(t,l)},e.applyThemeSettingsComparisonInfographicJson=function(t,l){return e._applyThemeSettingsToTitleSectionJson(t,l)},e.applyThemeSettingsAreaDetailsInfographicJson=function(t,l){return e._applyThemeSettingsToTitleSectionJson(t,l)},e._applyThemeSettingsToTitleSectionJson=function(e,t){if(e.titleSectionJson){var o=e.titleSectionJson.stack[0].rows[0];if(t&&t.titleStyle){o.style.fields.field0;o.themeStyle={fields:{field0:l(t.titleStyle)}}}else o&&delete o.themeStyle;var i=e.titleSectionJson.stack[0].rows[1];if(i){var r=i.fieldInfos.field0.shapeJson;r&&t&&t.titleLine&&t.titleLine.color?r.style.borderColor||(r.themeStyle={borderColor:t.titleLine.color}):r&&delete r.themeStyle}}return e},e}));