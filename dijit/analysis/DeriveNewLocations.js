define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./utils","./CreditEstimator","./ExpressionGrid","dojo/i18n!../../nls/jsapi","dojo/text!./templates/DeriveNewLocations.html"],function(t,s,e,i,n,o,a,r,h,l,d,u,c,y,p,m,_,L,f,g,x,w,v,C,j,A,S,b,I,N,k,B,U,D,F,G,E,T){var P=s([p,m,_,L,f,U,B],{declaredClass:"esri.dijit.analysis.DeriveNewLocations",templateString:T,widgetsInTemplate:!0,i18n:null,toolName:"DeriveNewLocations",helpFileName:"DeriveNewLocations",resultParameter:"resultLayer",primaryActionButttonClass:"esriAnalysisSubmitButton",analysisLayer:null,inputLayers:[],constructor:function(t){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),e.mixin(this.i18n,E.deriveNewLocations),e.mixin(this.i18n,E.expressionGrid)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",e.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){},_onClose:function(t){t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:t})},_handleSaveBtnClick:function(){if(this._form.validate()&&this.expressionGrid.validate()){this._saveBtn.set("disabled",!0);var t,s,e,n,a={},r={};s=this.expressionGrid.get("expressionMap"),a.expressions=o.toJson(s.expressions),e=[],e=i.map(s.inputLayers,function(t){return o.toJson(D.constructAnalysisInputLyrObj(t))},this),a.inputLayers=e,this.returnFeatureCollection||(a.OutputName=o.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=o.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(t={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),a.context=o.toJson(t)),r.jobParams=a,n=this.i18n.itemDescription,n+="<div><i><u>"+this.i18n.expression+"</u> "+s.expressionString+"</i></div>",r.itemParams={description:n,tags:h.substitute(this.i18n.itemTags,{analysisLayerName:this.analysisLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(r.itemParams.folder=this.get("folderId")),this.execute(r)}},_handleShowCreditsClick:function(t){t.preventDefault();var s,n,a={};return this._form.validate()&&this.expressionGrid.validate()?(l.set(this._showCreditsLink,"color",""),l.set(this._showCreditsLink,"cursor",""),s=this.expressionGrid.get("expressionMap"),a.expressions=o.toJson(s.expressions),n=[],n=i.map(s.inputLayers,function(t){return D.constructAnalysisInputLyrObj(t)},this),a.inputLayers=o.toJson(n),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.Context=o.toJson({extent:this.map.extent._normalize(!0)})),void this.getCreditsEstimate(this.toolName,a).then(e.hitch(this,function(t){this._usageForm.set("content",t),this._usageDialog.show()}))):(l.set(this._showCreditsLink,"color","grey"),void l.set(this._showCreditsLink,"cursor","default"))},_save:function(){},_buildUI:function(){var t=!0;this.signInPromise.then(e.hitch(this,D.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.get("showSelectAnalysisLayer")&&(!this.get("analysisLayer")&&this.get("analysisLayers")&&this.set("analysisLayer",this.analysisLayers[0]),D.populateAnalysisLayers(this,"analysisLayer","analysisLayers")),D.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),this._updateAnalysisLayerUI(t),l.set(this._chooseFolderRow,"display",this.showSelectFolder===!0?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(t){this.folderStore=t,D.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),l.set(this._chooseExtentDiv,"display",this.showChooseExtent===!0?"inline-block":"none"),l.set(this._showCreditsLink,"display",this.showCredits===!0?"block":"none"),this._loadConnections()},_updateAnalysisLayerUI:function(t){this.analysisLayer&&(t&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{analysisLayerName:this.analysisLayer.name})),this._outputLayerInput.set("value",this.outputLayerName)),this.expressionGrid||(this.expressionGrid=new G({analysisLayer:this.analysisLayer,inputLayers:this.inputLayers,allowAllInputOperands:!0,primaryActionButttonClass:this.get("primaryActionButttonClass"),showReadyToUseLayers:this.get("showReadyToUseLayers"),owningWidget:this},u.create("div",{style:"width:100%;"},this._expressionGridTd)),this._updateHandle=this.expressionGrid.on("update-expressions",e.hitch(this,this._handleUpdateExpressions)))},_handleUpdateExpressions:function(t){t.length>1?(l.set(this._showCreditsLink,"color",""),l.set(this._showCreditsLink,"cursor","")):(l.set(this._showCreditsLink,"color","grey"),l.set(this._showCreditsLink,"cursor","default"))},_handleAnalysisLayerChange:function(t){"browse"===t?this.showReadyToUseLayersDialog(!0):(this.analysisLayer=this.analysisLayers[t],this._updateAnalysisLayerUI(!0))},showReadyToUseLayersDialog:function(t){this.signInPromise.then(e.hitch(this,function(){this._browsedlg&&(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery),this._isAnalysisSelect=t,this._browsedlg.show())}))},_handleBrowseItemsSelect:function(t){t&&t.selection&&D.addAnalysisReadyLayer({item:t.selection,layers:this.inputLayers,layersSelect:this.layersSelect,browseDialog:this._browsedlg,widget:this}).always(e.hitch(this,function(){this._isAnalysisSelect&&(this.analysisLayer=this.inputLayers[this.layersSelect.get("value")],this.showSelectAnalysisLayer&&this._updateAnalysisLayerUI(!0))}))},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",e.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},_setInputLayersAttr:function(t){this.inputLayers=t},_getInputLayersAttr:function(){return this.inputLayers},_setAnalysisLayerAttr:function(t){this.analysisLayer=t},_getAnalysisLayerAttr:function(){return this.analysisLayer},_setAnalysisLayersAttr:function(t){this.analysisLayers=t},validateServiceName:function(t){return D.validateServiceName(t,{textInput:this._outputLayerInput})},_setPrimaryActionButttonClassAttr:function(t){this.primaryActionButttonClass=t},_getPrimaryActionButttonClassAttr:function(){return this.primaryActionButttonClass},_connect:function(t,s,e){this._pbConnects.push(n.connect(t,s,e))}});return a("extend-esri")&&e.setObject("dijit.analysis.DeriveNewLocations",P,N),P});