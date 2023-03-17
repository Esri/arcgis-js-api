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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/layout/ContentPane","dijit/form/Form","dijit/form/Select","esri/dijit/analysis/components/AddPointFeatures/AddPointFeatures","dijit/form/ValidationTextBox","dijit/form/FilteringSelect","dijit/form/CheckBox","dijit/form/Button","dijit/form/NumberTextBox","dijit/Dialog","esri/dijit/analysis/CreditEstimator","../../kernel","../../lang","./RasterAnalysisMixin","./utils","./AnalysisRegistry","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/ZonalStatisticsAsTable","dojo/text!./templates/ZonalStatisticsAsTable.html"],(function(e,t,i,s,a,l,n,r,u,o,h,c,p,d,y,T,A,I,m,_,g,M,N,L,S,E,R,b,v,f,V,D,F){var j=e([u,o,h,c,p,R],{declaredClass:"esri.dijit.analysis.ZonalStatisticsAsTable",templateString:F,widgetsInTemplate:!0,inputLayer:null,inputValueRaster:null,inputValueRasters:null,zoneField:null,ignoreNoData:!0,statisticType:null,percentileValues:["90"],percentileInterpolationType:"AUTO_DETECT",processAsMultidimensional:!1,analysisType:"feature",toolName:"ZonalStatisticsAsTable",helpFileName:"ZonalStatisticsAsTable",toolNlsName:D,rasterGPToolName:"ZonalStatisticsAsTable",resultParameter:"outputTable",outputName:"outputTableName",browseType:[f.IS,f.FS],hasCustomCheck:!0,customCheckFailureMessage:V.customCheckFailureMessage.integerService,constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},_getJobParameters:function(){var e=s.toJson(b.constructAnalysisInputLyrObj(this.get("inputLayer"))),t=s.toJson(b.constructAnalysisInputLyrObj(this.get("inputValueRaster"))),i=this.get("zoneField"),a=this.get("ignoreNoData"),l=this.get("statisticType"),n=this.get("percentileValues"),r=this.get("percentileInterpolationType"),u={zoneField:i,ignoreNoData:a,statisticType:l,inputZoneRasterOrFeatures:e,inputValueRaster:t,processAsMultidimensional:this._multidimensionalCheck.get("checked")};return"PERCENTILE"!==l&&"ALL"!==l||(u.percentileValues=[n],u.percentileInterpolationType=r),"MEDIAN"===l&&(u.percentileInterpolationType=r),u},_setDefaultInputs:function(){this.inputValueRaster&&this.inputValueRasters&&!b.isLayerInLayers(this.inputValueRaster,this.inputValueRasters)&&this.inputValueRasters.push(this.inputValueRaster);var e=[];this._layersSelect.removeOption(this._layersSelect.getOptions()),i.forEach(this.inputValueRasters,t.hitch(this,(function(t,i){e.push({label:t.name,value:i.toString(),selected:this._isSelected(t,this.inputValueRaster)})}))),this._layersSelect.addOption(e),b.addReadyToUseLayerOption(this,[{select:this._layersSelect}]),this._handleLayerChange(this._layersSelect.get("value")),this.set("zoneField",this.zoneField),this._loadStatisticType(),this.percentileValues&&this._percentileValuesInput.set("value",this.percentileValues[0]),this.percentileInterpolationType&&this._loadPercentileInterpolationType(),this._multidimensionalCheck.set("checked",this.processAsMultidimensional),this._ignoreNoDataCheck.set("checked",this.ignoreNoData)},_resetUI:function(){this.set("zoneField",this.zoneField),this.inputLayer&&this.inputValueRaster&&(this.outputLayerName=r.substitute(this.i18n.outputZonalStatsName,{layername:this.inputLayer.name,valuelayername:this.inputValueRaster.name}),this._outputLayerInput.set("value",this.outputLayerName))},_loadStatisticType:function(){this._statisticTypeSelect.removeOption(this._statisticTypeSelect.getOptions());var e=!1,t=this.inputValueRaster?this.inputValueRaster.pixelType:void 0;this.isFloat(this.inputValueRaster)?!t&&this.rerun&&this.statisticType&&["MAJORITY","MEDIAN","MINORITY","VARIETY"].indexOf(this.statisticType)>0&&(e=!0):e=!0;var i=void 0===this.statisticType?"ALL":this.statisticType;e?this._statisticTypeSelect.addOption([{value:"ALL",label:this.i18n.all,selected:"ALL"===i},{value:"MEAN",label:this.i18n.mean,selected:"MEAN"===i},{value:"MAJORITY",label:this.i18n.majority,selected:"MAJORITY"===i},{value:"MAXIMUM",label:this.i18n.maximum,selected:"MAXIMUM"===i},{value:"MEDIAN",label:this.i18n.median,selected:"MEDIAN"===i},{value:"MINIMUM",label:this.i18n.minimum,selected:"MINIMUM"===i},{value:"MINORITY",label:this.i18n.minority,selected:"MINORITY"===i},{value:"PERCENTILE",label:this.i18n.percentile,selected:"PERCENTILE"===i},{value:"RANGE",label:this.i18n.range,selected:"RANGE"===i},{value:"STD",label:this.i18n.standardDeviation,selected:"STD"===i},{value:"SUM",label:this.i18n.sum,selected:"SUM"===i},{value:"VARIETY",label:this.i18n.variety,selected:"VARIETY"===i},{value:"MINMAX",label:this.i18n.minMax,selected:"MINMAX"===i},{value:"MEANSTD",label:this.i18n.meanSTD,selected:"MEANSTD"===i},{value:"MINMAXMEAN",label:this.i18n.minMaxMean,selected:"MINMAXMEAN"===i}]):this._statisticTypeSelect.addOption([{value:"ALL",label:this.i18n.all,selected:"ALL"===i},{value:"MEAN",label:this.i18n.mean,selected:"MEAN"===i},{value:"MAXIMUM",label:this.i18n.maximum,selected:"MAXIMUM"===i},{value:"MEDIAN",label:this.i18n.median,selected:"MEDIAN"===i},{value:"MINIMUM",label:this.i18n.minimum,selected:"MINIMUM"===i},{value:"PERCENTILE",label:this.i18n.percentile,selected:"PERCENTILE"===i},{value:"RANGE",label:this.i18n.range,selected:"RANGE"===i},{value:"STD",label:this.i18n.standardDeviation,selected:"STD"===i},{value:"SUM",label:this.i18n.sum,selected:"SUM"===i},{value:"MINMAX",label:this.i18n.minMax,selected:"MINMAX"===i},{value:"MEANSTD",label:this.i18n.meanSTD,selected:"MEANSTD"===i},{value:"MINMAXMEAN",label:this.i18n.minMaxMean,selected:"MINMAXMEAN"===i}]),this._handleStatsChange(this._statisticTypeSelect.get("value"))},_isSelected:function(e,t){return t&&e&&t.url===e.url&&e.name===t.name},_handleLayerChange:function(e){"browselayers"===e||"browse"===e?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this.set("allowedItemTypes",[f.IS]),this._createBrowseItems({browseValue:e,disableLAAL:!0,disableBoundary:!0},{},this._layersSelect)):(this.set("inputValueRaster",this.inputValueRasters[e]),this._loadStatisticType(),this.inputLayer&&this.inputValueRaster&&(this.outputLayerName=r.substitute(this.i18n.outputZonalStatsName,{layername:this.inputLayer.name,valuelayername:this.inputValueRaster.name}),this._outputLayerInput.set("value",this.outputLayerName)))},_handleStatsChange:function(e){l.toggle(this._percentileRow1,"hide","PERCENTILE"!==e&&"ALL"!==e),l.toggle(this._percentileRow2,"hide","PERCENTILE"!==e&&"ALL"!==e),l.toggle(this._percentileRow3,"hide","MEDIAN"!==e&&"PERCENTILE"!==e&&"ALL"!==e),l.toggle(this._percentileRow4,"hide","MEDIAN"!==e&&"PERCENTILE"!==e&&"ALL"!==e)},_handleBrowseItemsSelect:function(e,i){e&&e.selection&&b.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.inputValueRasters,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:this._browseLyrsdlg||this._browsedlg,widget:this},i).always(t.hitch(this,(function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleLayerChange(this._layersSelect.get("value"))})))},isFloat:function(e){return e&&e.pixelType&&["F32","F64"].indexOf(e.pixelType)>=0},isPixelTypeDefined:function(e){return e.pixelType&&"UNKNOWN"!==e.pixelType},isIntegerRaster:function(e){return this.isPixelTypeDefined(e)&&!1===this.isFloat(e)},isFeatureLayer:function(e){return e.type===f.FLAYER},_loadPercentileInterpolationType:function(){this.percentileInterpolationType=void 0===this.percentileInterpolationType?"AUTO_DETECT":this.percentileInterpolationType,this._percentileInterpolationTypesSelect.addOption([{value:"AUTO_DETECT",label:this.i18n.autoDetect,selected:"AUTO_DETECT"===this.percentileInterpolationType},{value:"NEAREST",label:this.i18n.nearest,selected:"NEAREST"===this.percentileInterpolationType},{value:"LINEAR",label:this.i18n.linear,selected:"LINEAR"===this.percentileInterpolationType}])},isValidInputLayer:function(e){return this.isFeatureLayer(e)||!this.isFloat(e)&&this.isPixelTypeDefined(e)},addBrowseOption:function(){b.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._layersSelect}])},_setInputLayersAttr:function(e){this.inputLayers=i.filter(e,t.hitch(this,(function(e){return this.isFeatureLayer(e)||this.isIntegerRaster(e)}))),this.set("inputValueRasters",e)},isValidinputZoneRasterOrFeatures:function(e){return this.isFeatureLayer(e)||this.isIntegerRaster(e)},_getInputLayersAttr:function(){return this.inputLayers},_getInputValueRasterAttr:function(){return this.inputValueRaster},_setInputValueRasterAttr:function(e){this.inputValueRaster=e},_setInputValueRastersAttr:function(e){this.inputValueRasters=i.filter(e,t.hitch(this,(function(e){return this.isImageServiceLayer(e)})))},_getInputValueRastersAttr:function(){return this.inputValueRasters},_setZoneFieldAttr:function(e){if(this._zoneFieldSelect.removeOption(this._zoneFieldSelect.getOptions()),this.inputLayer){var t,s=e?[{value:e,label:e}]:[];if(this._isInputLayerImageServiceLayer())this.inputLayer.hasRasterAttributeTable?(t=this.inputLayer._rasterAttributeTableFields)&&0!==t.length||(t=[{alias:"VALUE",name:"VALUE",type:v.FieldTypes.Integer}]):e&&"VALUE"===e||s.push({value:"VALUE",label:"VALUE",selected:!0});else if(!(t=this.inputLayer.fields))return;i.forEach(t,(function(t){t.type!==v.FieldTypes.Integer&&t.type!==v.FieldTypes.String||s.push({value:t.name,label:E.isDefined(t.alias)&&""!==t.alias?t.alias:t.name,selected:t.name===e})}),this),this._zoneFieldSelect.addOption(s)}},_getZoneFieldAttr:function(){return this._zoneFieldSelect&&this._zoneFieldSelect.get("value")&&(this.zoneField=this._zoneFieldSelect.get("value")),this.zoneField},_getPercentileInterpolationTypeAttr:function(){return this._percentileInterpolationTypesSelect.get("value")},_getPercentileValuesAttr:function(){return this._percentileValuesInput.get("value")},_setIgnoreNoDataAttr:function(e){this.ignoreNoData=e},_getIgnoreNoDataAttr:function(){return this._ignoreNoDataCheck&&(this.ignoreNoData=this._ignoreNoDataCheck.get("checked")),this.ignoreNoData},_setStatisticTypeAttr:function(e){this.statisticType=e,this._handleStatsChange(e)},_getStatisticTypeAttr:function(){return this._statisticTypeSelect&&this._statisticTypeSelect.get("value")&&(this.statisticType=this._statisticTypeSelect.get("value")),this.statisticType}});return a("extend-esri")&&t.setObject("dijit.analysis.ZonalStatisticsAsTable",j,S),j}));