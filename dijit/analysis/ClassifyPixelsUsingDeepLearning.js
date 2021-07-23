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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./RasterAnalysisMixin","../RasterFunctionEditor/utils","./AnalysisRegistry","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/ClassifyPixelsUsingDeepLearning","dojo/text!./templates/ClassifyPixelsUsingDeepLearning.html"],(function(e,t,s,i,n,o,r,l,a,d,u,g,c,m,p,h,f,_,y,M,j,A,L){var x=e([d,u,g,c,m,f],{declaredClass:"esri.dijit.analysis.ClassifyPixelsUsingDeepLearning",templateString:L,widgetsInTemplate:!0,browseType:[M.IS],inputLayer:null,model:null,modelArguments:null,processingMode:!0,toolName:"ClassifyPixelsUsingDeepLearning",helpFileName:"ClassifyPixelsUsingDeepLearning",toolNlsName:j.classifyPixelsUsingDeepLearningTool,rasterGPToolName:"ClassifyPixelsUsingDeepLearning",resultParameter:"outRaster",outputName:"outputClassifiedRaster",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},postMixInProperties:function(){this.inherited(arguments),t.mixin(this.i18n,A)},_getJobParameters:function(){return{inputRaster:i.toJson(_.getRasterJsonFromLayer(this.get("inputLayer"))),model:i.toJson(this.get("model")),modelArguments:i.toJson(this.get("modelArguments")),processAllRasterItems:this.get("processingMode")}},_setDefaultInputs:function(){this.processingMode&&this._loadProcessingMode()},_resetUI:function(){this.inputLayer&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName))},_handleLayerChange:function(e){this._resetUI()},_loadProcessingMode:function(){this._processingModeSelect.removeOption(this._processingModeSelect.getOptions());var e=this.processingMode;this._processingModeSelect.addOption([{value:1,label:this.i18n.processAsMosaicLabel,selected:e},{value:2,label:this.i18n.processAsItemsLabel,selected:!e}])},_getModelAttr:function(){return{itemId:this._modelSelect.get("value")}},_setModelAttr:function(e){this.model=e},_setModelsAttr:function(e){this.models=e},_getModelsAttr:function(){return this.models},_setModelArgumentsAttr:function(e){this.modelArguments=e},_getModelArgumentsAttr:function(){var e={};return this.modelArgumentRows&&this.modelArgumentRows.length>0&&s.forEach(this.modelArgumentRows,(function(t){var s=t.firstChild.innerText,i=t.lastChild.firstChild.firstChild.value;e[s]=i})),this.modelArguments=e,e},_getProcessingModeAttr:function(){return this.processingMode=2===this._processingModeSelect.get("value"),this.processingMode},_setProcessingModeAttr:function(e){this.processingMode=e}});return n("extend-esri")&&t.setObject("dijit.analysis.ClassifyPixelsUsingDeepLearning",x,p),x}));