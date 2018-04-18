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

define([],function(){function e(e,l){var o={};for(var r in t)e&&void 0!==e[r]&&(o[r]=e[r]),l&&void 0!==l[r]&&(o[r]=l[r]);return o}var l={},t={backgroundColor:1,color:1,fontFamily:1,fontSize:1,fontStyle:1,fontWeight:1,textDecoration:1};return l.applyThemeSettingsToJson=function(t,o){if(t.header){var r=t.header.data.data[0];if(o&&o.titleStyle){r.style.fields.field0;r.themeStyle={fields:{field0:e(o.titleStyle)}}}else r&&delete r.themeStyle;var a=t.header.data.data[1],i=a.fieldInfos.field0.shapeJson;i&&o&&o.titleLine&&o.titleLine.color?i.style.borderColor||(i.themeStyle={borderColor:o.titleLine.color}):i&&delete i.themeStyle}return t.variableTables&&t.variableTables.forEach(function(t){if(t.shape){var r=t.shape.shapeJson;l.applyThemeSettingsToShapeJson(r,o,t.shape.isHighlighted)}if(t.variable)if(o&&o.variableLabelStyle){var a;t.variable.isHighlighted?a=e(o.variableLabelStyleHighlighted):t.variable.isContrastColor&&(a=e(o.variableLabelStyleContrast)),t.variable.themeStyle=e(o.variableLabelStyle,a)}else delete t.variable.themeStyle;t.description&&(o&&o.variableDescriptionStyle?t.description.themeStyle=e(o.variableDescriptionStyle):delete t.description.themeStyle)}),t},l.applyThemeSettingsToShapeJson=function(e,l,t){var o=t?"highlightedIcon":"icon";e&&l&&l[o]&&l[o].backgroundColor?(e.themeStyle={},e.style.borderColor||(e.themeStyle.borderColor=l[o].backgroundColor),e.style.fillColor||(e.themeStyle.fillColor=l[o].backgroundColor)):e&&delete e.themeStyle,e&&l&&l.iconBarBackground&&l.iconBarBackground.backgroundColor?(e.barBackgroundThemeStyle={},e.barBackgroundStyle&&e.barBackgroundStyle.fillColor||(e.barBackgroundThemeStyle.fillColor=l.iconBarBackground.backgroundColor)):e&&delete e.barBackgroundThemeStyle},l.undoThemeFromJson=function(e){return l.applyThemeSettingsToJson(e,null)},l});