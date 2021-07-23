// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicThemeUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","esri/dijit/geoenrichment/utils/ObjectUtil"],(function(e,t,r){function n(e){return[e.themeStyle,e.backgroundThemeStyle]}function o(e,t){e.themeStyle=t[0],e.backgroundThemeStyle=t[1]}return{getThemeStylesFromShapeJson:function(i,a){var s={};if(a){var l;l=a.parentWidget.elementUsageType===t.INFOGRAPHIC_SECTION?a.viewModel.getStaticInfographicDefaultStyles(a.theme):a.viewModel.getTheme(a.theme);var p=n(i);e.applyThemeSettingsToShapeJson(i,l);var h=i.themeStyle;o(i,p),r.copyOwnJsonProperties(h,s)}return r.copyOwnJsonProperties(i.themeStyle,s),s},getBackgroundThemeStylesFromShapeJson:function(i,a){var s={};if(a){var l;a.parentWidget.elementUsageType===t.INFOGRAPHIC_SECTION&&(l=a.viewModel.getStaticInfographicDefaultStyles(a.theme));var p=n(i);e.applyThemeSettingsToShapeJson(i,l);var h=i.backgroundThemeStyle;o(i,p),r.copyOwnJsonProperties(h,s)}return r.copyOwnJsonProperties(i.backgroundThemeStyle,s),s}}}));