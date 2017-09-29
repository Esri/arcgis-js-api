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

define([],function(){function e(e,l){var r={};for(var a in t)e&&void 0!==e[a]&&(r[a]=e[a]),l&&void 0!==l[a]&&(r[a]=l[a]);return r}var l={},t={backgroundColor:1,color:1,fontFamily:1,fontSize:1};return l.applyThemeSettingsToJson=function(t,r){if(t.header){var a=t.header.data.data[0];if(r&&r.titleStyle){var o=a.style.fields.field0;a.themeStyle={fields:{field0:e(r.titleStyle,o)}}}else a&&delete a.themeStyle;var i=t.header.data.data[1],n=i.fieldInfos.field0.shapeJson;n&&r&&r.titleLine&&r.titleLine.color?n.style.borderColor||(n.themeStyle={borderColor:r.titleLine.color}):n&&delete n.themeStyle}return t.variableTables&&t.variableTables.forEach(function(t){if(t.shape){var a=t.shape.shapeJson;l.applyThemeSettingsToShapeJson(a,r,t.shape.isHighlighted)}if(t.variable)if(r&&r.variableLabelStyle){var o;t.variable.isHighlighted?o=e(r.variableLabelStyleHighlighted,t.variable.style):t.variable.isContrastColor&&(o=e(r.variableLabelStyleContrast,t.variable.style)),t.variable.themeStyle=e(r.variableLabelStyle,o)}else delete t.variable.themeStyle;t.description&&(r&&r.variableDescriptionStyle?t.description.themeStyle=e(r.variableDescriptionStyle,t.description.style):delete t.description.themeStyle)}),t},l.applyThemeSettingsToShapeJson=function(e,l,t){var r=t?"highlightedIcon":"icon";e&&l&&l[r]&&l[r].backgroundColor?(e.themeStyle={},e.style.borderColor||(e.themeStyle.borderColor=l[r].backgroundColor),e.style.fillColor||(e.themeStyle.fillColor=l[r].backgroundColor)):e&&delete e.themeStyle,e&&l&&l.iconBarBackground&&l.iconBarBackground.backgroundColor?(e.barBackgroundThemeStyle={},e.barBackgroundStyle&&e.barBackgroundStyle.fillColor||(e.barBackgroundThemeStyle.fillColor=l.iconBarBackground.backgroundColor)):e&&delete e.barBackgroundThemeStyle},l.undoThemeFromJson=function(e){return l.applyThemeSettingsToJson(e,null)},l});