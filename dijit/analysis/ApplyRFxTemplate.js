// COPYRIGHT © 2020 Esri
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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-style","dojo/dom-construct","dojo/string","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","../RasterFunctionEditor/utils","./RasterAnalysisMixin","../RasterFunctionEditor/RFxArgsEditor","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ApplyRFxTemplate.html"],(function(t,e,i,r,s,o,a,n,l,h,d,c,u,p,m,f,g,x){var _=t([a,n,l,h,d,m],{declaredClass:"esri.dijit.analysis.ApplyRFxTemplate",templateString:x,widgetsInTemplate:!0,showChooseExtent:!0,inputLayer:null,functionTemplate:null,rftName:"",_useRFT:!0,_convertRFTToolName:"ConvertRasterFunctionTemplate",toolName:"ApplyRFxTemplate",helpFileName:"ApplyRFxTemplate",toolNlsName:g.applyRFxTemplateTool,constructor:function(t){this.inherited(arguments),this.title=this.rftName=t.rasterFunction&&t.rasterFunction.name||t.rfxTemplateItem&&t.rfxTemplateItem.title},postCreate:function(){this.inherited(arguments),u.isDefined(this.params.rfxTemplateItem)?this.params.rfxTemplateItem.rfxTemplateData?this._createRFxArgsEditor(this.params.rfxTemplateItem.rfxTemplateData):this._fetchRFT(this.params.rfxTemplateItem):this.rasterFunction&&this._createRFxArgsEditor(this.rasterFunction)},_getInputLayerAttr:function(){return this.inputLayer},_onClose:function(){this.inherited(arguments),this._rfxArgsEditor.destroy(),this.emit("remove-preview-layer")},_setRasterFunctionAttr:function(t){this.rasterFunction=t,this._createRFxArgsEditor(t)},_getRasterFunction:function(){return this._rfxArgsEditor&&this._rfxArgsEditor.getUpdatedRFTWithValues()},_getRasterArguments:function(){return null},_getRasterObject:function(t){return null},_getOutputRasterLayerName:function(){return o.substitute(this.i18n.outputLayerName,{layername:this.rftName})},_fetchRFT:function(t){r.set(this._loadingMessage,"display","block");var i=e.hitch(this,(function(t){return t})),s=e.hitch(this,(function(t){console.log(t);var e={errorRetrievingRFTItem:this.i18n.errorRetrievingRFTItem,errorUtilitiesServiceNotAvailable:this.i18n.errorUtilitiesServiceNotAvailable,errorFetchingRFT:this.i18n.errorFetchingRFT};this._displayError(t?e[t]||t.message:e.errorFetchingRFT)})),o=e.hitch(this,this._createRFxArgsEditor);p.fetchRFT(t,i,s,o,this.rasterUtilitiesServer)},_destroyArgsEditor:function(){if(this._rfxArgsEditor)try{this._rfxArgsEditor.destroy()}catch(t){console.log("Destroying rfxArgsEditor error: ",t)}this._rFxArgsEditorDiv.innerHTML=""},_createRFxArgsEditor:function(t){this._destroyArgsEditor(),r.set(this._loadingMessage,"display","none"),r.set(this._rFxArgsEditorDiv,"display","block"),this._rfxArgsEditor=new f({map:this.map,rfxTemplate:t,inputLayers:this.inputLayers,featureLayers:this.featureLayers,portalUrl:this.portalUrl,portalSelf:this.portalSelf},s.create("div",null,this._rFxArgsEditorDiv)),this._rfxArgsEditor.on("drawtool-activate",e.hitch(this,(function(t){this.emit("drawtool-activate",t)}))),this._rfxArgsEditor.on("drawtool-deactivate",e.hitch(this,(function(t){this.emit("drawtool-deactivate",t)}))),this._rfxArgsEditor.on("add-ready-to-use-layer",e.hitch(this,(function(t){this.emit("add-ready-to-use-layer",t)}))),this._rfxArgsEditor.on("update-preview",e.hitch(this,(function(){this.updatePreview()}))),this._rfxArgsEditor.on("zoom-to-extent",e.hitch(this,(function(t){this.emit("zoom-to-extent",t)})))},_displayError:function(t){this._loadingMessage.innerText=t,this.set("disableRunAnalysis",!0)}});return i("extend-esri")&&e.setObject("dijit.analysis.ApplyRFxTemplate",_,c),_}));