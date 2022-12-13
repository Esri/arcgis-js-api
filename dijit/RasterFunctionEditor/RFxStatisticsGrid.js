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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","dojo/_base/lang","dojo/_base/array","dojo/i18n!../../nls/jsapi","../../kernel","./RFxBandMatrix"],(function(e,t,i,s,a,r,n){var l=e("esriRFxStatisticsGrid",[n],{declaredClass:"esri.widgets.ToolModeler.RasterFunctionEditor.ArgumentEditors.RFxStatisticsGrid",persistedLayer:{},constructor:function(){var e=a.common;e=i.mixin(e,a.widgets.rasterFunctionEditor),this.displayNames=[e.min,e.max,e.mean,e.rfxStatisticsGrid.stdDev],this.nCols=4,this.inherited(arguments)},postCreate:function(){if(this.inherited(arguments),this.layerArg&&this.layerArg.input){var e,t=this.layerArg.input;if(t.declaredClass.indexOf("RFxRasterInput")>0&&t.value){if(!(e=t.getSelectedLayer(t.get("value").name)))return;if(this.persistedLayer.url===e.url&&this.value)return;e.loaded?this.value=this._getRasterInfoStatistics(e):e.on("load",function(e){this.value=this._getRasterInfoStatistics(e)}.bind(this))}}},onRasterChange:function(){var e,t=this.layerArg.input;e=t.getSelectedLayer(t.get("value").name),this.persistedLayer.url=e.url,this.value=this._getRasterInfoStatistics(e),this._refreshGrid()},_getRasterInfoStatistics:function(e){var t=e.bands;return t&&s.map(t,(function(e){return[e.min,e.max,e.mean.toFixed(3),e.stddev.toFixed(3)]}),this)},_createComplexValue:function(e){var t;return 0===e.length&&(this.value=[]),(t=this.value&&this.value.elements?{elements:[]}:[]).elements?t.elements=e:t=e,t},_getProcessedValue:function(){if(this.value)return this.value.elements&&(this.value=this.value.elements.map((function(e){return[e.min,e.max,e.mean,e.standardDeviation]}))),Array.isArray(this.value)?this.value.join(",").split(",").map(Number):this.value}});return t("extend-esri")&&i.setObject("dijit.RasterFunctionEditor.RFxStatisticsGrid",l,r),l}));