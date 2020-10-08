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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","dojo/dom-class","dojo/dom-style","dojo/string","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./RasterAnalysisMixin","../RasterFunctionEditor/utils","./AnalysisRegistry","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/DetectObjectsUsingDeepLearning","dojo/text!./templates/DetectObjectsUsingDeepLearning.html"],(function(e,t,i,n,s,o,a,l,r,u,d,p,c,h,m,g,_,v,f,j,D,x){var O=e([r,u,d,p,c,g],{declaredClass:"esri.dijit.analysis.DetectObjectsUsingDeepLearning",templateString:x,widgetsInTemplate:!0,browseType:[f.IS,f.FS],inputLayer:null,model:null,modelArguments:null,nonMaximumSuppression:!1,confidenceField:"Confidence",classField:"Class",maxOverlapRatio:0,toolName:"DetectObjectsUsingDeepLearning",helpFileName:"DetectObjectsUsingDeepLearning",toolNlsName:j.detectObjectsUsingDeepLearningTool,rasterGPToolName:"DetectObjectsUsingDeepLearning",resultParameter:"outObjects",analysisType:"feature",outputName:"outputObjects",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},postMixInProperties:function(){this.inherited(arguments),t.mixin(this.i18n,D)},_getJobParameters:function(){return{inputRaster:n.toJson(_.getRasterJsonFromLayer(this.get("inputLayer"))),model:n.toJson(this.get("model")),modelArguments:n.toJson(this.get("modelArguments")),runNMS:this.nonMaximumSuppression,confidenceScoreField:this.get("confidenceScoreField"),classValueField:this.get("classValueField"),maxOverlapRatio:this.get("maxOverlapRatio")}},_setDefaultInputs:function(){this._nonMaximumSuppression.set("checked",this.nonMaximumSuppression),this.confidenceField&&this._confidenceInput.set("value",this.confidenceField),this.classField&&this._classValueInput.set("value",this.classField),this._maxOverlapInput.set("value",this.maxOverlapRatio)},_resetUI:function(){this.inputLayer&&(this.outputLayerName=l.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName))},_handleLayerChange:function(e){this._resetUI()},_handleOptionsBtnClick:function(){o.contains(this._optionsDiv,"disabled")||(o.contains(this._optionsDiv,"optionsClose")?(o.remove(this._optionsDiv,"optionsClose"),o.add(this._optionsDiv,"optionsOpen")):o.contains(this._optionsDiv,"optionsOpen")&&(o.remove(this._optionsDiv,"optionsOpen"),o.add(this._optionsDiv,"optionsClose")))},_handleNonMaxSuppressionChanged:function(){this.nonMaximumSuppression=this._nonMaximumSuppression.get("checked"),this.nonMaximumSuppression?o.remove(this._optionsDiv,"disabled"):(o.contains(this._optionsDiv,"optionsOpen")&&(o.remove(this._optionsDiv,"optionsOpen"),o.add(this._optionsDiv,"optionsClose")),o.add(this._optionsDiv,"disabled"))},_getModelAttr:function(){return{itemId:this._modelSelect.get("value")}},_setModelAttr:function(e){this.model=e},_setModelsAttr:function(e){this.models=e},_getModelsAttr:function(){return this.models},_getConfidenceScoreFieldAttr:function(){return this._confidenceInput.get("value")},_getClassValueFieldAttr:function(){return this._classValueInput.get("value")},_getMaxOverlapRatioAttr:function(){return this._maxOverlapInput.get("value")},_getModelArgumentsAttr:function(){var e={};return this.modelArgumentRows&&this.modelArgumentRows.length>0&&i.forEach(this.modelArgumentRows,(function(t){var i=t.firstChild.innerText,n=t.lastChild.firstChild.firstChild.value;e[i]=n})),this.modelArguments=e,e}});return s("extend-esri")&&t.setObject("dijit.analysis.DetectObjectsUsingDeepLearning",O,h),O}));