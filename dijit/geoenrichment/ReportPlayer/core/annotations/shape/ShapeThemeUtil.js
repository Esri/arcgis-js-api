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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicThemeUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes"],function(e,t){return{getThemeStylesFromShapeJson:function(r,i){if(r.themeStyle)return r.themeStyle;if(i){var n;n=i.parentWidget.elementUsageType===t.INFOGRAPHIC_SECTION?i.viewModel.getStaticInfographicDefaultStyles(i.theme):i.viewModel.getCurrentTheme(i.theme),e.applyThemeSettingsToShapeJson(r,n);var l=r.themeStyle;return delete r.themeStyle,l}return null}}});