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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/_base/connect","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dojo/dom-construct","dojo/query","dojo/dom-attr","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/CheckBox","dijit/form/Select","../../kernel","../../lang","./RasterAnalysisMixin","./utils","./AnalysisRegistry","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/FindArgumentStatistics","dojo/text!./templates/FindArgumentStatistics.html"],(function(i,e,t,n,s,a,l,o,r,u,h,c,d,m,_,v,p,g,y,L,f,A,D,b,R,T,N,M,V){var E=i([d,m,_,v,p,D],{declaredClass:"esri.dijit.analysis.FindArgumentStatistics",templateString:V,widgetsInTemplate:!0,inputLayers:null,inputLayer:null,dimension:null,dimensions:null,variables:null,variableList:null,statisticsType:"ARGUMENT_MIN",multipleOccurrenceValue:null,minValue:null,maxValue:null,intervalRanges:null,ignoreNoData:!0,intervalKeyword:null,dimensionDefinition:"ALL",_inputType:"MB",toolName:"FindArgumentStatistics",helpFileName:"FindArgumentStatistics",toolNlsName:N.findArgumentStatisticsTool,rasterGPToolName:"FindArgumentStatistics",resultParameter:"outputRaster",browseType:[T.IS],hasCustomCheck:!0,customCheckFailureMessage:N.customCheckFailureMessage.multiDimService,constructor:function(i,e){this._pbConnects=[],i.containerNode&&(this.container=i.containerNode)},postMixInProperties:function(){this.inherited(arguments),e.mixin(this.i18n,M)},_getJobParameters:function(){var i=n.toJson(b.constructAnalysisInputLyrObj(this.get("inputLayer"))),t=this.get("dimension"),s=this.get("variables"),a=this.get("statisticsType"),l=this.get("statisticsValue"),o=this.get("dimensionDefinition"),r=this.get("ignoreNoData");return e.mixin({inputRaster:i,dimension:t,variables:s,statisticsType:a,ignoreNoData:r},e.mixin(o,l))},_setDefaultInputs:function(){this.dimension&&this.dimensions&&this._dimensionSelect.set("value",this.dimension),this.statisticsType&&this._loadStatisticsType(!0),this.multipleOccurrenceValue&&this._multipleOccurenceValue.set("value",this.multipleOccurrenceValue),this.minValue&&this._minValue.set("value",this.minValue),this.maxValue&&this._maxValue.set("value",this.maxValue),this.dimensionDefinition&&this._loadDimensionDefinition(this.dimensionDefinition),this.intervalKeyword&&this._loadIntervalKeyword(this.intervalKeyword),this._ignoreNoDataCheck.set("checked",this.ignoreNoData)},_resetUI:function(){var i;this.inputLayer&&(this._getLayerType(this.inputLayer),i="MD"===this._inputType,h(".multidim:not(.intervalKeyword)",this.domNode).forEach(e.hitch(this,(function(e){this._showDiv(e,i)}))),i&&this.inputLayer.getMultidimensionalInfo().then(e.hitch(this,(function(i){this.variableList=i.variables,this.set("variableList",this.variableList)}))),c.set(this._statsNumberLabel,"innerHTML",i?this.i18n.fourLabel:this.i18n.twoLabel),c.set(this._dimensionDefinitionNumberLabel,"innerHTML",i?this.i18n.fiveLabel:this.i18n.threeLabel),c.set(this._ignoreNumberLabel,"innerHTML",i?this.i18n.sixLabel:this.i18n.fourLabel),c.set(this._outputNumberLabel,"innerHTML",i?this.i18n.sevenLabel:this.i18n.fiveLabel))},_loadStatisticsType:function(i){this._statisticsTypeSelect.removeOption(this._statisticsTypeSelect.getOptions());var e=i&&this.statisticsType;this._statisticsTypeSelect.addOption([{value:"ARGUMENT_MIN",label:this.i18n.argumentMinLabel,selected:"ARGUMENT_MIN"===e},{value:"ARGUMENT_MAX",label:this.i18n.argumentMaxLabel,selected:"ARGUMENT_MAX"===e},{value:"ARGUMENT_MEDIAN",label:this.i18n.argumentMedianLabel,selected:"ARGUMENT_MEDIAN"===e},{value:"DURATION",label:this.i18n.durationLabel,selected:"DURATION"===e}])},_loadIntervalKeyword:function(i){this._intervalKeywordSelect.removeOption(this._intervalKeywordSelect.getOptions());var e=i&&this.intervalKeyword;this._intervalKeywordSelect.addOption([{value:"HOURLY",label:this.i18n.hourly,selected:"HOURLY"===e},{value:"DAILY",label:this.i18n.daily,selected:"DAILY"===e},{value:"WEEKLY",label:this.i18n.weekly,selected:"WEEKLY"===e},{value:"MONTHLY",label:this.i18n.monthly,selected:"MONTHLY"===e},{value:"QUARTERLY",label:this.i18n.quarterly,selected:"QUARTERLY"===e},{value:"YEARLY",label:this.i18n.yearly,selected:"YEARLY"===e},{value:"RECURRING_DAILY",label:this.i18n.recurringDaily,selected:"RECURRING_DAILY"===e},{value:"RECURRING_WEEKLY",label:this.i18n.recurringWeekly,selected:"RECURRING_WEEKLY"===e},{value:"RECURRING_MONTHLY",label:this.i18n.recurringMonthly,selected:"RECURRING_MONTHLY"===e},{value:"RECURRING_QUARTERLY",label:this.i18n.recurringQuarterly,selected:"RECURRING_QUARTERLY"===e}])},_loadDimensionDefinition:function(i){this._dimensionDefinitionSelect.removeOption(this._dimensionDefinitionSelect.getOptions()),"StdTime"===this.dimension?this._dimensionDefinitionSelect.addOption([{value:"ALL",label:this.i18n.all,selected:"ALL"===this.dimensionDefinition},{value:"INTERVAL_KEYWORD",label:this.i18n.intervalKeyword,selected:"INTERVAL_KEYWORD"===this.dimensionDefinition}]):this._dimensionDefinitionSelect.addOption([{value:"ALL",label:this.i18n.all,selected:!0}]),h(".intervalKeyword",this.domNode).forEach(e.hitch(this,(function(i){this._showDiv(i,"INTERVAL_KEYWORD"===this.dimensionDefinition)}))),this._loadIntervalKeyword()},_handleDimensionChange:function(i){if(this.dimension!==i){if(this.dimension=i,this.variableList){var e=this.variableList.filter((function(e){return e.dimensions.some((function(e){return e.name===i}))}));this.set("variableList",e)}this._loadDimensionDefinition()}},_handleStatisticsTypeChange:function(i){this._showDiv(this._multipleOccurrenceValueRow,"ARGUMENT_MAX"==i||"ARGUMENT_MIN"==i),this._showDiv(this._multipleOccurrenceValueLabelRow,"ARGUMENT_MAX"==i||"ARGUMENT_MIN"==i),this._showDiv(this._minValueLabelRow,"DURATION"==i),this._showDiv(this._minValueRow,"DURATION"==i),this._showDiv(this._maxValueLabelRow,"DURATION"==i),this._showDiv(this._maxValueRow,"DURATION"==i),this._minValue.set("required","DURATION"==i),this._maxValue.set("required","DURATION"==i)},_handleDimensionDefinitionChange:function(i){h(".intervalKeyword",this.domNode).forEach(e.hitch(this,(function(e){this._showDiv(e,"INTERVAL_KEYWORD"===i)})))},_getLayerType:function(i){this._inputType=i.hasMultidimensions||this.rerun&&this.variables&&this.variables.length>0?"MD":"MB"},_showDiv:function(i,e){o.set(i,"display",e?"block":"none")},_setInputLayersAttr:function(i){this.inputLayers=t.filter(i,e.hitch(this,(function(i){return this.isValidInputLayer(i)})))},isValidInputLayer:function(i){return i&&(i.bandCount>1||i.hasMultidimensions)},_getInputLayersAttr:function(){return this.inputLayers},_setDimensionAttr:function(i){this.dimension=i},_getDimensionAttr:function(){return this._dimensionSelect&&this._dimensionSelect.get("value")&&(this.dimension=this._dimensionSelect.get("value")),this.dimension},_setDimensionsAttr:function(i){this.dimensions!==i&&this.inputLayer&&(this._dimensionSelect.removeOption(this._dimensionSelect.getOptions()),t.forEach(i,(function(i){this._dimensionSelect.addOption({value:i.name,label:i.name})}),this),this.dimension?this._dimensionSelect.set("value",this.dimension):this._handleDimensionChange(this._dimensionSelect.get("value")))},_getDimensionsAttr:function(){return"MD"===this._inputType?this.dimensions:""},_setVariableListAttr:function(i){var e=!1,n=" checked";this._variablesList.innerHTML="",t.forEach(i,(function(i){var s,a,l,o="",r=i.dimensions;r&&r.length>0&&(s=null,t.forEach(r,(function(i){s=i.name+"="+i.values.length+",",o+=s})),o=o.slice(0,-1),a=i.name+" ["+o+"] ("+i.description+")",l=u.toDom("<tr><td colspan='3'><label class='esriLeadingMargin1 esriSelectLabel'><input type='checkbox' data-dojo-type='dijit/form/CheckBox' value='"+i.name+"'"+n+">"+a+"</label></td></tr>"),u.place(l,this._variablesList),n="",e||this.dimensions===r||(this.set("dimensions",r),e=!0))}),this),this._showDiv(this._variablesListLabel,this.variableList.length>0)},_getVariablesAttr:function(){if("MB"===this._inputType)return"";var i=this._variablesList.querySelectorAll("input:checked");if(i&&i.length>0){var e=[];return i.forEach((function(i){e.push(i.value)})),e.join(",")}return""},_setStatisticsTypeAttr:function(i){this.statisticsType=i,this._handleStatisticsTypeChange(i)},_getStatisticsTypeAttr:function(){return this._statisticsTypeSelect&&this._statisticsTypeSelect.get("value")&&(this.statisticsType=this._statisticsTypeSelect.get("value")),this.statisticsType},_setMultipleOccurrenceValueAttr:function(i){this.multipleOccurrenceValue=i},_getMultipleOccurrenceValueAttr:function(){return this._multipleOccurrenceValueSelect&&this._multipleOccurrenceValueSelect.get("value")&&(this.multipleOccurrenceValue=this._multipleOccurrenceValueSelect.get("value")),this.multipleOccurrenceValue},_setMinValueAttr:function(i){this.minValue=i},_getMinValueAttr:function(){return this._minValue&&this._minValue.get("value")&&(this.minValue=this._minValue.get("value")),this.minValue},_setMaxValueAttr:function(i){this.maxValue=i},_getMaxValueAttr:function(){return this._maxValue&&this._maxValue.get("value")&&(this.maxValue=this._maxValue.get("value")),this.maxValue},_setIgnoreNoDataAttr:function(i){this.ignoreNoData=i},_getIgnoreNoDataAttr:function(){return this._ignoreNoDataCheck&&(this.ignoreNoData=this._ignoreNoDataCheck.get("checked")),this.ignoreNoData},_setIntervalKeywordAttr:function(i){this.intervalKeyword=i},_getIntervalKeywordAttr:function(){return this.intervalKeyword=this._intervalKeywordSelect.get("value"),this.intervalKeyword},_getStatisticsValueAttr:function(){var i=this._statisticsTypeSelect.get("value");return"ARGUMENT_MEDIAN"===i?"":"DURATION"===i?{minValue:this.get("minValue"),maxValue:this.get("maxValue")}:{multipleOccurrenceValue:this.get("multipleOccurrenceValue")}},_getDimensionDefinitionAttr:function(){return"ALL"===this._dimensionDefinitionSelect.get("value")?{dimensionDefinition:"ALL"}:{dimensionDefinition:"INTERVAL_KEYWORD",intervalKeyword:this.get("intervalKeyword")}}});return a("extend-esri")&&e.setObject("dijit.analysis.FindArgumentStatistics",E,f),E}));