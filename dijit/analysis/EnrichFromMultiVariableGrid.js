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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dojo/Deferred","dojo/promise/all","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/form/NumberSpinner","dijit/form/NumberTextBox","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./AnalysisRegistry","./CreditEstimator","./ItemTypes","./utils","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/EnrichFromMultiVariableGrid","dojo/text!./templates/EnrichFromMultiVariableGrid.html"],(function(e,t,i,s,r,n,a,o,h,l,u,d,y,c,p,L,m,_,g,f,b,S,v,w,j,A,I,F,G,x,C,T,E,N,P,O,U,M,k,D,B,R,V){var J=t([m,_,g,f,b,O,P],{declaredClass:"esri.dijit.analysis.EnrichFromMultiVariableGrid",templateString:V,widgetsInTemplate:!0,analysisLayer:null,gridLayer:null,enrichAttributes:null,outputLayerName:null,returnFeatureCollection:!1,i18n:null,toolName:"EnrichFromMultiVariableGrid",helpFileName:"EnrichFromMultiVariableGrid",resultParameter:"output",removeJobParamKeys:["gridExpressionObject"],constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.showGeoAnalyticsParams&&e.rerun&&(e.inputLayer=e.inputFeatures)},destroy:function(){this.inherited(arguments),this._pbConnects.forEach(s.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,B.EnrichFromMultiVariableGridTool),i.mixin(this.i18n,R)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),h.set(this._enrichFieldsSelect.selectNode,"width","80%"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this.filterObjects=[{layer:"inputFeatures",layers:this.inputLayers,select:this._analysisSelect,expressionObj:"attributeExprObj"},{layer:"gridLayer",layers:this.gridLayers,select:this._gridLayerSelect,expressionObj:"gridExpressionObject"}],this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_buildJobParams:function(){var e,t={};return t.inputFeatures=r.toJson(this.constructAnalysisInputLyrObj(this.inputLayer,this.showGeoAnalyticsParams)),t.gridLayer=r.toJson(this.constructAnalysisInputLyrObj(this.gridLayer,this.showGeoAnalyticsParams)),t.enrichAttributes=this.get("enrichAttributes"),this.returnFeatureCollection||(t.OutputName=r.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),t.context=r.toJson(e)),this._updateJobFilterAndSelection(t)},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(i.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e={};e.itemParams={description:o.substitute(this.i18n.itemDescription,{inputFeatures:this.inputLayer.name,gridLayer:this.gridLayer.name}),tags:o.substitute(this.i18n.itemTags,{inputFeatures:this.inputLayer.name,gridLayer:this.gridLayer.name}),snippet:this.i18n.itemSnippet},e.jobParams=this._buildJobParams(),this.showGeoAnalyticsParams&&(e.isSpatioTemporalDataStore=!0),this.showSelectFolder&&(e.itemParams.folder=this.get("folderId")),this.execute(e)}},_handleAnalysisLayerChange:function(e){this._isAnalysisSelect=!0,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:["point"],geometryTypes:[U.GeometryTypes.Point]},this._analysisSelect):(this.inputLayer=this.inputLayers[e],this._updateAnalysisLayerUI(!0))},_handleGridLayerChange:function(e){var t;this._isAnalysisSelect=!1,"browselayers"===e?(this.set("showReadyToUseLayers",!1),this.showGeoAnalyticsParams&&((t=this._browseLyrsdlg.browseItems.get("query")).types.push('type:"'+k.BIGDATA+'"'),t.custom=['typekeywords:"'+k.MVGRID+'"'],this._browseLyrsdlg.browseItems.set("query",t)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=[U.GeometryTypes.Polygon],this._browseLyrsdlg.show()):(this.gridLayer=this.gridLayers[this._gridLayerSelect.get("value")],this.gridLayer&&this._updateEnrichFields())},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&D.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.gridLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._gridLayerSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).always(i.hitch(this,(function(e){this._handleAnalysisLayerChange(this._analysisSelect.get("value"))})))},_save:function(){},_buildUI:function(){h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.signInPromise.then(i.hitch(this,D.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this._loadConnections(),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!D.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),D.populateAnalysisLayers(this,"inputLayer","inputLayers")),this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName),D.addReadyToUseLayerOption(this,[this._analysisSelect]),this._curShowReadyToUseLayers=this.get("showReadyToUseLayers"),this.set("showReadyToUseLayers",!1),D.addReadyToUseLayerOption(this,[this._gridLayerSelect]),this.set("showReadyToUseLayers",this._curShowReadyToUseLayers),h.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,(function(e){this.folderStore=e,D.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this._createFilterAndSelections()},_updateAnalysisLayerUI:function(e){this.inputLayer&&this.gridLayer&&(!e&&this.outputLayerName||(this.outputLayerName=o.substitute(this.i18n.outputLayerName,{inputFeatures:this.inputLayer.name,gridLayer:this.gridLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)))},_buildGridLayersUI:function(){var e=this.gridLayers.map(i.hitch(this,(function(e,t){return{value:t+"",label:e.name,selected:this.gridLayer&&this.gridLayer.url===e.url&&this.gridLayer.name===e.name}})));this.get("showBrowseLayers")&&(e.push({type:"separator",value:""}),e.push({value:"browselayers",label:this.i18n.browseLayers})),this._gridLayerSelect.removeOption(this._gridLayerSelect.getOptions()),this._gridLayerSelect.addOption(e),!this.gridLayer&&this.gridLayers.length>0&&this._gridLayerSelect.set("value","0"),this._handleGridLayerChange(this._gridLayerSelect.get("value")),this.inputLayer&&this._updateAnalysisLayerUI(!this.outputLayerName)},_updateGridLayer:function(){this.gridLayer&&(this.gridLayers&&this.gridLayer&&!D.isLayerInLayers(this.gridLayer,this.gridLayers)&&this.gridLayers.push(this.gridLayer),this.gridLayers&&this.gridLayers.length>0&&this._buildGridLayersUI())},_updateEnrichFields:function(){if(this._enrichFieldsSelect){this._enrichFieldsSelect.removeOption(this._enrichFieldsSelect.get("options"));var e=this.gridLayers[this._gridLayerSelect.get("value")].fields;e=(e=e.filter((function(e){return-1===["esriFieldTypeGlobalID","esriFieldTypeOID"].indexOf(e.type)}))).map(i.hitch(this,(function(e){return{value:e.name,label:N.isDefined(e.alias)&&""!==e.alias?e.alias:e.name,selected:this.enrichAttributes&&-1!==this.enrichAttributes.indexOf(e.name)}}))),this._enrichFieldsSelect.addOption(e),this.enrichAttributes&&(this.enrichAttributes="")}},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1))},_isGridLayer:function(e){var t=new p;return e.geometryType!==U.GeometryTypes.Polygon?t.resolve(!1):N.isDefined(e.__supportsMVGEnrich)?t.resolve(e.__supportsMVGEnrich):this.signInPromise.then(i.hitch(this,(function(){this._getAdminLayerInfo(e.url).then(i.hitch(this,(function(i){e.__supportsMVGEnrich=N.isDefined(i.adminLayerInfo.mvgProperties),t.resolve(e.__supportsMVGEnrich)})),i.hitch(this,(function(e){t.resolve(!1)})))}))),t.promise},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){e&&e.geometryType===U.GeometryTypes.Point?this.inputLayer=e:this.inputLayer=null},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(e){this.inputLayers=e.filter((function(e){return e.geometryType===U.GeometryTypes.Point}))},_setGridLayerAttr:function(e){this._isGridLayer(e).then(i.hitch(this,(function(t){t&&(this.gridLayer=e),this._updateGridLayer()})))},_getGridLayerAttr:function(){return this.gridLayer},_setGridLayersAttr:function(e){var t=e.map(i.hitch(this,(function(e){return this._isGridLayer(e)})));L(t).then(i.hitch(this,(function(t){this.gridLayers=e.filter(i.hitch(this,(function(e,i){return!0===t[i]}))),this.gridLayers&&this.gridLayers.length>0&&this._buildGridLayersUI()})))},_getEnrichAttributesAttr:function(){return this._enrichFieldsSelect?this._enrichFieldsSelect.get("value").toString():""},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_connect:function(e,t,i){this._pbConnects.push(s.connect(e,t,i))},validateServiceName:function(e){return D.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})}});return n("extend-esri")&&i.setObject("dijit.analysis.EnrichFromMultiVariableGrid",J,E),J}));