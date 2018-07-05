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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect","./core/layout/LayoutBuilder","./core/themes/ThemeLibrary","./core/themes/ReportThemes","./core/supportClasses/map/layers/LocatorPointsController","../utils/ColorUtil"],function(t,e,n,o,r,i,l){return t(null,{isGraphicStyle:!1,layoutBuilder:null,dynamicReportInfo:null,animationAllowed:!0,enableDataDrilling:!0,initialize:function(){return this.layoutBuilder=new n,this.layoutBuilder.initialize()},_theme:null,getCurrentTheme:function(t){return this._theme},setTheme:function(t){this._theme=t||o.getReportThemeById(r.GRAPHIC)},getTableDefaultStyles:function(t,e){var n=this.getCurrentTheme(t).table.overrideStyles;return e?n[e]:n},getChartDefaultStyles:function(t){return this.getCurrentTheme(t).chart},getDocumentDefaultStyles:function(t){return this.getCurrentTheme(t).document},getInfographicDefaultStyles:function(t){return this.getCurrentTheme(t).infographic},getStaticInfographicDefaultStyles:function(t){var e=this.getInfographicDefaultStyles(t);return e&&e.staticInfographic},isLightDocumentTheme:function(t){return l.isLightColor(this.getCurrentTheme(t).document.backgroundColor)},setDynamicReportInfo:function(t){this.dynamicReportInfo=t,this.isGraphicStyle=!t.isClassic},getDynamicImageFunc:function(t,e){},enrichFieldData:function(t){},_locatorPointsControllers:null,getLocatorPointsController:function(t){var n=t.calculatorName+"_"+this.dynamicReportInfo.actualAnalysisAreaIndex;this._locatorPointsControllers=this._locatorPointsControllers||{};var o=this._locatorPointsControllers[n];return o||(o=this._locatorPointsControllers[n]=new i(t),e.after(o,"destroy",function(){delete this._locatorPointsControllers[n]}.bind(this))),o},canExportToExcel:function(){return!1},exportToExcel:function(t){},pepareExportToExcelParameters:function(t){},isMobileDevice:function(){return navigator.userAgent&&-1!==navigator.userAgent.indexOf(" Mobile")}})});