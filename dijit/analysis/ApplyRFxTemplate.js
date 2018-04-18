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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-style","dojo/Deferred","dojo/string","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","../../request","../RasterFunctionEditor/utils","./RasterAnalysisMixin","../RasterFunctionEditor/RFxArgsEditor","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ApplyRFxTemplate.html"],function(t,e,i,r,s,n,a,o,l,h,d,u,c,m,p,f,_,g,x){var F=t([a,o,l,h,d,f],{declaredClass:"esri.dijit.analysis.ApplyRFxTemplate",templateString:x,widgetsInTemplate:!0,showChooseExtent:!0,inputLayer:null,functionTemplate:null,rftName:"",_useRFT:!0,_convertRFTToolName:"ConvertRasterFunctionTemplate",toolName:"ApplyRFxTemplate",helpFileName:"ApplyRFxTemplate",toolNlsName:g.applyRFxTemplateTool,constructor:function(t){this.inherited(arguments),this.title=this.rftName=t.rasterFunction&&t.rasterFunction.name||t.rfxTemplateItem&&t.rfxTemplateItem.title},postCreate:function(){this.inherited(arguments),c.isDefined(this.params.rfxTemplateItem)?this._fetchRFT(this.params.rfxTemplateItem):this.rerun&&this.rasterFunction&&this._createRFxArgsEditor(this.rasterFunction)},_getInputLayerAttr:function(){return this.inputLayer},_onClose:function(){this.inherited(arguments),this._rfxArgsEditor.destroy()},_getRasterFunction:function(){return this._rfxArgsEditor&&this._rfxArgsEditor.getRFT()},_getRasterArguments:function(){return null},_getRasterObject:function(t){return null},_getOutputRasterLayerName:function(){return n.substitute(this.i18n.outputLayerName,{layername:this.rftName})},_fetchRFT:function(t){var i,r,n=e.hitch(this,function(t){return t}),a=e.hitch(this,function(t){console.log(t),this._displayError(this.i18n.errorFetchingRFT)}),o=e.hitch(this,this._createRFxArgsEditor),l=new s,h=t.name;if(r=h&&h.slice(-8),i=r&&".rft.xml"===r.toLowerCase(),!t||!t.itemDataUrl)return this._displayError(this.i18n.errorRetrievingRFTItem),l.reject(new Error("this.i18n.errorRetrievingRFTItem")),l.promise;if(i){if(!this.rasterUtilitiesServer)return this._displayError(this.i18n.errorUtilitiesServiceNotAvailable),l.reject(new Error(this.i18n.errorUtilitiesServiceNotAvailable)),l.promise;var d={url:this.rasterUtilitiesServer+"/"+this._convertRFTToolName,rft:{itemId:t.id},format:"json"};return p.convertRFT(d,n,o,a)}return m({url:t.itemDataUrl,callbackParamName:"callback",content:{f:"json"},handleAs:i?"text":"json",load:n,error:a}).then(o)},_createRFxArgsEditor:function(t){r.set(this._loadingMessage,"display","none"),r.set(this._rFxArgsEditorDiv,"display","block"),this._rfxArgsEditor=new _({map:this.map,rfxTemplate:t,inputLayers:this.inputLayers,featureLayers:this.featureLayers,portalUrl:this.portalUrl,portalSelf:this.portalSelf},this._rFxArgsEditorDiv),this._rfxArgsEditor.on("drawtool-activate",e.hitch(this,function(t){this.emit("drawtool-activate",t)})),this._rfxArgsEditor.on("drawtool-deactivate",e.hitch(this,function(t){this.emit("drawtool-deactivate",t)})),this._rfxArgsEditor.on("add-ready-to-use-layer",e.hitch(this,function(t){this.emit("add-ready-to-use-layer",t)}))},_displayError:function(t){this._loadingMessage.innerText=t,this.set("disableRunAnalysis",!0)}});return i("extend-esri")&&e.setObject("dijit.analysis.ApplyRFxTemplate",F,u),F});