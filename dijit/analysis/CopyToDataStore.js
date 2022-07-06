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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","../../kernel","../../lang","../../layers/FeatureLayer","./AnalysisBase","./utils","./CreditEstimator","../../geometry/Extent","../../geometry/ScreenPoint","../../symbols/CartographicLineSymbol","../../symbols/SimpleMarkerSymbol","../../symbols/SimpleLineSymbol","../../symbols/SimpleFillSymbol","../../tasks/query","./_AnalysisOptions","./AnalysisRegistry","./components/DataStoreSelect","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CopyToDataStore.html"],(function(t,e,i,s,a,o,n,r,l,h,u,d,c,p,y,m,_,S,L,b,f,j,g,C,v,x,I,w,A,D,N,F,B,T,k,U,P,R,E,O,J,M,G,q,z,H,V,W,K,Q){var X=i([_,S,L,b,f,H,U],{declaredClass:"esri.dijit.analysis.CopyToDataStore",templateString:Q,widgetsInTemplate:!0,inputLayer:null,outputLayerName:null,i18n:null,toolName:"CopyToDataStore",helpFileName:"CopyToDataStore",resultParameter:"output",primaryActionButttonClass:"esriAnalysisSubmitButton",constructor:function(t){this._pbConnects=[],this._statsRows=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),a.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,K.copytoDatastoreTool)},postCreate:function(){this.inherited(arguments),m.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"}],this._buildUI()},startup:function(){},_onClose:function(t){t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:t})},_buildJobParams:function(){var t={},e={},i=this.constructAnalysisInputLyrObj(this.inputLayer,!0);return this.inputLayer.type&&(this.doRefreshItem="table"!==this.inputLayer.type.toLowerCase()),t.inputLayer=i,this.returnFeatureCollection||(t.OutputName=r.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),e.dataStore=this._datastoreSelect.get("value"),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0),t.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0))),t.context=r.toJson(e),this._updateJobFilterAndSelection(t)},_handleSaveBtnClick:function(){var t={};this._form.validate()&&(this._saveBtn.set("disabled",!0),t.jobParams=this._buildJobParams(),this.showGeoAnalyticsParams&&this._datastoreSelect&&(t.isSpatioTemporalDataStore="BDS"===this._datastoreSelect.get("value")),t.itemParams={description:u.substitute(this.i18n.itemDescription,{inputLayerName:this.inputLayer.name}),tags:u.substitute(this.i18n.itemTags,{inputLayerName:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(t.itemParams.folder=this.get("folderId")),this.execute(t))},_handleShowCreditsClick:function(t){t.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(s.hitch(this,(function(t){this._usageForm.set("content",t),this._usageDialog.show()})))},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&P.addAnalysisReadyLayer({item:t.selection,layers:this._isAnalysisSelect?this.inputLayers:this.polygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:t.dialog||this._browsedlg,widget:this},e).always(s.hitch(this,this._updateAnalysisLayerUI,!0))},_save:function(){},_buildUI:function(){var t=!0;P.initHelpLinks(this.domNode,this.showHelp),this._buildDataStoreUI(),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!P.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),!this.get("inputLayer")&&this.get("inputLayers")&&this.set("inputLayer",this.inputLayers[0]),P.populateAnalysisLayers(this,"inputLayer","inputLayers")),P.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),d.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(t){this.folderStore=t,P.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),d.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._updateAnalysisLayerUI(t),this._loadConnections(),this._createFilterAndSelections()},_buildDataStoreUI:function(){var t=T.isDefined(this.isSpatioTemporalDataStore)?"BDS":"GDB";this.context&&this.context.dataStore&&(t=this.context.dataStore),this._datastoreSelect||(this._datastoreSelect=new W({geoAnalyticsServer:this.analysisGpServer,value:t},p.create("div",null,this._dataStoreTd)),this._datastoreSelect.startup())},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1))},_handleAnalysisLayerChange:function(t){this._isAnalysisSelect=!0,"browse"===t||"browselayers"===t?this._createBrowseItems({browseValue:t,disabledSubResources:[this.inputLayer]},{layerTypes:[]},this._analysisSelect):(this.inputLayer=this.inputLayers[t],this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(t){this.inputLayer&&t&&(this.outputLayerName=u.substitute(this.i18n.outputLayerName,{inputLayerName:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName))},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(t){this.inputLayer=t},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},validateServiceName:function(t){return P.validateServiceName(t,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setInputLayersAttr:function(t){T.isDefined(t)&&(this.inputLayers=t)},_connect:function(t,e,i){this._pbConnects.push(n.connect(t,e,i))}});return l("extend-esri")&&s.setObject("dijit.analysis.CopyToDataStore",X,B),X}));