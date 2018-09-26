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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect","dojo/promise/all","./core/layout/LayoutBuilder","./core/themes/ThemeLibrary","./core/themes/ReportThemes","./core/supportClasses/map/layers/locator/LocatorPointsController","./core/supportClasses/map/layers/std/StdPolygonsController","./core/supportClasses/map/layers/thisAreas/ThisAreasHighlightController","../utils/ColorUtil"],function(t,e,o,r,n,l,i,s,a,h){return t(null,{isGraphicStyle:!1,layoutBuilder:null,dynamicReportInfo:null,animationAllowed:!0,enableDataDrilling:!0,preInitialize:function(){return this.layoutBuilder=this.layoutBuilder||new r,this.layoutBuilder.initCoreComponents()},initialize:function(t,e){return this.preInitialize(),this.layoutBuilder[t?"initClassicComponents":"initGraphicComponents"](e)},_theme:null,getCurrentTheme:function(t){return t||this._theme},setTheme:function(t){this._theme=t||n.getReportThemeById(l.GRAPHIC)},getTableDefaultStyles:function(t,e){var o=this.getCurrentTheme(t).table.overrideStyles;return e?o[e]:o},getChartDefaultStyles:function(t){return this.getCurrentTheme(t).chart},getDocumentDefaultStyles:function(t){return this.getCurrentTheme(t).document},getInfographicDefaultStyles:function(t){return this.getCurrentTheme(t).infographic},getStaticInfographicDefaultStyles:function(t){var e=this.getInfographicDefaultStyles(t);return e&&e.staticInfographic},isLightDocumentTheme:function(t){return h.isLightColor(this.getCurrentTheme(t).document.backgroundColor)},setDynamicReportInfo:function(t){this.dynamicReportInfo=t,this.isGraphicStyle=!t.isClassic},getDynamicImageFunc:function(t,e){},enrichFieldData:function(t){},_locatorPointsControllers:null,getLocatorPointsController:function(t,o){var r=t.calculatorName+"_"+o;this._locatorPointsControllers=this._locatorPointsControllers||{};var n=this._locatorPointsControllers[r];return n||(n=this._locatorPointsControllers[r]=new i(t,this.dynamicReportInfo.fieldData,this.dynamicReportInfo.isMultiFeature,o),e.after(n,"destroy",function(){delete this._locatorPointsControllers[r]}.bind(this))),n},_stdPolygonsControllers:null,getStdPolygonsController:function(t){this._stdPolygonsControllers=this._stdPolygonsControllers||{};var o=this._stdPolygonsControllers[t];return o||(o=this._stdPolygonsControllers[t]=new s(t),e.after(o,"destroy",function(){delete this._stdPolygonsControllers[t]}.bind(this))),o},loadAllStdFeatures:function(){var t=[];for(var e in this._stdPolygonsControllers)t.push(this._stdPolygonsControllers[e].loadAllFeatures());return o(t)},_thisAreasHighlightController:null,getThisAreasHighlightController:function(){return this._thisAreasHighlightController||(this._thisAreasHighlightController=new a,e.after(this._thisAreasHighlightController,"destroy",function(){this._thisAreasHighlightController=null}.bind(this))),this._thisAreasHighlightController},canExportToExcel:function(){return!1},exportToExcel:function(t){},pepareExportToExcelParameters:function(t){}})});