// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/NodeList","dojo/NodeList-dom","dojo/_base/fx","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/form/NumberTextBox","dijit/form/TimeTextBox","dijit/form/DateTextBox","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../PopupTemplate","../../layers/FeatureLayer","../../graphic","./utils","./CreditEstimator","dojo/i18n!../../nls/jsapi","dojo/text!./templates/FindHotSpots.html"],function(e,t,i,s,a,n,o,l,r,h,d,y,u,g,c,_,p,m,b,L,f,w,v,S,A,F,I,P,D,R,T,C,x,N,B,O,G,j,M,U,E,z,k,q,H,J,Z,X,V,W,Y,K){var Q=t([L,f,w,v,S,z,E],{declaredClass:"esri.dijit.analysis.FindHotSpots",templateString:K,widgetsInTemplate:!0,analysisLayer:null,analysisField:null,aggregationPolygonLayer:null,boundingPolygonLayer:null,outputLayerName:null,returnProcessInfo:!0,i18n:null,map:null,toolName:"FindHotSpots",helpFileName:"FindHotSpots",resultParameter:"HotSpotsResultLayer",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,Y.calculateDensityTool),i.mixin(this.i18n,Y.findHotSpotsTool),this.set("drawLayerName",this.i18n.blayerName)},postCreate:function(){this.inherited(arguments),c.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._bigdataUX=[this._timeAlignRow,this._timeAlignLabelRow,this._timeStepsLabelRow,this._intervalLabelRow,this._intervalRow,this._repeatLabelRow,this._repeatRow,this._timeRefRow,this._timeRefLabelRow,this._neighborHoodLblRow,this._neighborHoodRow,this._timeStepLabelNo,this._selectDataStore,this._datastoreLabelRow,this._chooseBinSizeLblRow,this._binsTypeRow],this._standardUX=[this._divideByLabelRow,this._divideByRow,this._fieldsLabelRow,this._fieldsSelectRow,this._overideOptionsRow],this.showGeoAnalyticsParams&&(this._timeIntervalInput.set("isInRange",i.hitch(this._timeIntervalInput,V.isGreaterThanZero)),this._timeRepeatInput.set("isInRange",i.hitch(this._timeRepeatInput,V.isGreaterThanZero)),this._binsInput.set("isInRange",i.hitch(this._binsInput,V.isGreaterThanZero)),this._timeIntervalInput.set("rangeMessage",this.i18n.greaterThanZeroMsg),this._timeRepeatInput.set("rangeMessage",this.i18n.greaterThanZeroMsg),this._neigSizeInput.set("rangeMessage",this.i18n.greaterThanZeroMsg)),this._binsInput.set("required",this.showGeoAnalyticsParams),this._neigSizeInput.set("required",this.showGeoAnalyticsParams),this._buildUI()},startup:function(){},_handleModeCrumbClick:function(e){e.preventDefault(),this._onClose(!0)},_onClose:function(e){e&&this._featureLayer&&(this.map.removeLayer(this._featureLayer),s.forEach(this.boundingPolygonLayers,function(e,t){return e===this._featureLayer?(this._boundingAreaSelect.removeOption({value:t+1,label:this._featureLayer.name}),void this.boundingPolygonLayers.splice(t,1)):void 0},this)),this._handleBoundingBtnClick(!1),this.emit("close",{save:!e})},clear:function(){this._featureLayer&&(this.map.removeLayer(this._featureLayer),s.forEach(this.boundingPolygonLayers,function(e,t){return e===this._featureLayer?(this._boundingAreaSelect.removeOption({value:t+1,label:this._featureLayer.name}),void this.boundingPolygonLayers.splice(t,1)):void 0},this),this._featureLayer=null),this._boundingDrawBtn.reset(),this._handleBoundingBtnClick(!1)},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(i.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()}))},_handleSaveBtnClick:function(e){var t,i,s,a={};if(t=this._buildJobParams(),this._form.validate()){if(i=V.unitConversion(this._binsInput.get("value"),V.UNITSMAP[this._binUnits.get("value")],V.UNITSMAP[this._neigSizeInputUnits.get("value")]),this.showGeoAnalyticsParams&&i>=this._neigSizeInput.get("value"))return void this._showMessages(this.i18n.smallBinErrorMsg);if(!this.showGeoAnalyticsParams&&t.cellSize&&(s=V.unitConversion(t.cellSize,V.UNITSMAP[t.cellSizeUnits],V.UNITSMAP[t.distanceBandUnits]),s>=t.distanceBand))return void this._showMessages(this.i18n.AO_192);this._saveBtn.set("disabled",!0),a.jobParams=t,a.itemParams={description:this.i18n.itemDescription,tags:h.substitute(this.i18n.itemTags,{layername:this.analysisLayer.name,fieldname:U.isDefined(t.analysisField)?t.analysisField:""}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(a.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(this.resultParameter="output"),this.showGeoAnalyticsParams&&(a.isSpatioTemporalDataStore=!0),this.execute(a)}},_buildJobParams:function(){var e,t,i,s={};return this.showGeoAnalyticsParams?(s.pointLayer=o.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer,this.showGeoAnalyticsParams)),s.binSize=this._binsInput.get("value"),s.binSizeUnit=this._binUnits.get("value"),s.neighborhoodDistance=this._neigSizeInput.get("value"),s.neighborhoodDistanceUnit=this._neigSizeInputUnits.get("value"),this._isTimeInstantLayer&&(s.timeStepAlignment=this._timeAlignmentSelect.get("value"),"ReferenceTime"===s.timeStepAlignment&&(s.timeStepReference=this.get("timeReference")),this._timeIntervalInput.get("value")&&(s.timeStepInterval=this._timeIntervalInput.get("value"),s.timeStepIntervalUnit=this._timeIntervalUnits.get("value")))):(s.analysisLayer=o.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer)),"0"!==this.get("analysisField")&&(s.analysisField=this.get("analysisField")),this._isPoint&&"0"===this._analysFieldSelect.get("value")&&("-1"!==this._boundingAreaSelect.get("value")&&(e=this.boundingPolygonLayers[this._boundingAreaSelect.get("value")-1],s.boundingPolygonLayer=o.toJson(this.constructAnalysisInputLyrObj(e))),"fishnet"!==this._aggAreaSelect.get("value")&&"hexagon"!==this._aggAreaSelect.get("value")?(t=this.aggregationPolygonLayers[this._aggAreaSelect.get("value")-1],s.aggregationPolygonLayer=o.toJson(this.constructAnalysisInputLyrObj(t))):("fishnet"===this._aggAreaSelect.get("value")||"hexagon"===this._aggAreaSelect.get("value"))&&(s.shapeType=this._aggAreaSelect.get("value"))),"0"!==this.get("dividedByField")&&(s.dividedByField=this.get("dividedByField")),s.returnProcessInfo=this.returnProcessInfo,"none"===d.get(this._cellSizeRow,"display")||isNaN(this._cellSizeInput.get("value"))||(s.cellSize=this._cellSizeInput.get("value"),s.cellSizeUnits=this._cellSizeUnits.get("value")),isNaN(this._dbandInput.get("value"))||(s.distanceBand=this._dbandInput.get("value"),s.distanceBandUnits=this._dbandUnits.get("value"))),this.returnFeatureCollection||(s.OutputName=o.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&!this.get("DisableExtent")&&this._useExtentCheck.get("checked")&&(s.context=o.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(i={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.extent=this.map.extent._normalize(!0)),s.context=o.toJson(i)),this.showGeoAnalyticsParams&&(i={},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.extent=this.map.extent._normalize(!0)),s.context=o.toJson(i)),s},_save:function(){},_buildUI:function(){var e=!0;V.updateDisplay(this._standardUX,!this.get("showGeoAnalyticsParams"),"table-row"),V.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row"),V.updateDisplay([this._repeatLabelRow,this._repeatRow],!1,"table-row"),V.updateDisplay([this._datastoreLabelRow,this._selectDataStore],!1,"table-row"),this._loadConnections(),this.signInPromise.then(i.hitch(this,V.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.get("showSelectAnalysisLayer")&&(this.get("allowChooseLabel")||this.get("analysisLayer")||!this.get("analysisLayers")||this.set("analysisLayer",this.analysisLayers[0]),V.populateAnalysisLayers(this,"analysisLayer","analysisLayers",{chooseLabel:this.get("allowChooseLabel")})),this.showGeoAnalyticsParams?(y.set(this._binLblNum,"innerHTML",this.i18n.twoLabel),y.set(this._neLblNum,"innerHTML",this.i18n.threeLabel),y.set(this._timeStepLabelNo,"innerHTML",this.i18n.fourLabel),y.set(this._outputNumLabel,"innerHTML",this.i18n.fiveLabel),y.set(this._outputHelpNode,"esriHelpTopic","outputName"),this.distanceDefaultUnits&&(this._binUnits.set("value",this.distanceDefaultUnits),this._neigSizeInputUnits.set("value",this.distanceDefaultUnits)),this._handleTimeAlignmentChange(this._timeAlignmentSelect.get("value"))):y.set(this._outputNumLabel,"innerHTML",this.i18n.fourLabel),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this._boundingAreaSelect.addOption({value:"-1",label:this.i18n.defaultBoundingOption,selected:!0}),this.boundingPolygonLayers&&s.forEach(this.boundingPolygonLayers,function(e,t){"esriGeometryPolygon"===e.geometryType&&this._boundingAreaSelect.addOption({value:t+1,label:e.name,selected:!1})},this),this._aggAreaSelect.addOption([{value:"fishnet",label:this.i18n.defaultAggregationOption,selected:!0},{value:"hexagon",label:this.i18n.hexagonGrid}]),this.aggregationPolygonLayers&&s.forEach(this.aggregationPolygonLayers,function(e,t){"esriGeometryPolygon"===e.geometryType&&this._aggAreaSelect.addOption({value:t+1,label:e.name,selected:!1})},this),V.addReadyToUseLayerOption(this,[this._analysisSelect]),this._updateAnalysisLayerUI(e),d.set(this._chooseFolderRow,"display",this.showSelectFolder===!0?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,function(e){this.folderStore=e,V.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),d.set(this._chooseExtentDiv,"display",this.showChooseExtent===!0?"inline-block":"none"),d.set(this._showCreditsLink,"display",this.showCredits===!0?"block":"none")},_updateAnalysisLayerUI:function(e){if(this.analysisLayer){if("esriGeometryPolygon"===this.analysisLayer.geometryType?(this._isPoint=!1,y.set(this._hotspotsToolDescription,"innerHTML",h.substitute(this.i18n.hotspotsPolyDefine,{layername:this.analysisLayer.name})),d.set(this._optionsRow,"display","none")):("esriGeometryPoint"===this.analysisLayer.geometryType||"esriGeometryMultipoint"===this.analysisLayer.geometryType)&&(this._isPoint=!0,y.set(this._hotspotsToolDescription,"innerHTML",h.substitute(this.i18n.hotspotsPointDefine,{layername:this.analysisLayer.name})),c.add(this._analysFieldSelect.domNode,"esriLeadingMargin1"),d.set(this._optionsRow,"display",this.showGeoAnalyticsParams?"none":""),e&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{layername:this.analysisLayer.name}))),this.showGeoAnalyticsParams){this._isTimeInstantLayer=V.isTimeInstantLayer(this.analysisLayer);var t=new _([this._timeAlignRow,this._timeAlignLabelRow,this._timeStepsLabelRow,this._intervalLabelRow,this._intervalRow,this._repeatLabelRow,this._repeatRow,this._timeRefRow,this._timeRefLabelRow,this._timeStepLabelNo]),i=[this._timeAlignmentSelect,this._timeIntervalInput,this._timeIntervalUnits,this._timeRepeatInput,this._timeRepeatUnits,this._timeRefDay,this._timeRefTime];s.forEach(i,function(e){e.set("disabled",!this._isTimeInstantLayer)},this),t.toggleClass("esriAnalysisTextDisabled",!this._isTimeInstantLayer)}V.updateDisplay([this._cellSizeLabelRow,this._cellSizeRow],this.analysisLayer&&"esriGeometryPolygon"!==this.analysisLayer.geometryType,"table-row")}else d.set(this._optionsRow,"display","none"),d.set(this._optionsRow,"display","none"),e&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{layername:""})),this._isPoint=!1;this.set("analysisFields",this.analysisLayer),this._isPoint?this._aggAreaSelect.set("value","fishnet"):this.set("dividedByFields",this.analysisLayer),this.analysisLayer&&"esriGeometryPolygon"===this.analysisLayer.geometryType&&e&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{layername:U.isDefined(this._analysFieldSelect.getOptions(0))?this._analysFieldSelect.getOptions(0).label:""})),this._outputLayerInput.set("value",this.outputLayerName)},_handleTimeAlignmentChange:function(e){V.updateDisplay([this._timeRefLabelRow,this._timeRefRow],"ReferenceTime"===e,"table-row")},_handleAnalysisLayerChange:function(e){if("browse"===e){var t=this._browsedlg.browseItems.get("query");t.custom=this.showGeoAnalyticsParams?['tags:"point"']:['tags:"point"','tags:"polygon"'],this._browsedlg.browseItems.set("query",t),this._selectedwidget=0,this._browsedlg.show()}else"browselayers"===e?(this.showGeoAnalyticsParams&&(t=this._browseLyrsdlg.browseItems.get("query"),t.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",t)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=this.showGeoAnalyticsParams?["esriGeometryPoint"]:["esriGeometryPoint","esriGeometryMultiPoint","esriGeometryPolygon"],this._selectedwidget=0,this._browseLyrsdlg.show()):(-1!==e?(this.get("allowChooseLabel")&&(e-=1),this.analysisLayer=this.analysisLayers[e]):this.analysisLayer=null,this._updateAnalysisLayerUI(!0))},_handleFieldChange:function(e){"0"===this._analysFieldSelect.get("value")?(this._outputLayerInput.set("value",h.substitute(this.i18n.outputLayerName,{layername:this.analysisLayer.name})),this._isPoint&&(d.set(this._optionsRow,"display",this.showGeoAnalyticsParams?"none":""),c.remove(this._optionsDiv,"disabled"),c.remove(this._optionsDiv,"optionsClose"),c.add(this._optionsDiv,"optionsOpen"))):(this._outputLayerInput.set("value",h.substitute(this.i18n.outputLayerName,{layername:this._analysFieldSelect.getOptions(e).label})),this._isPoint&&(c.add(this._optionsDiv,"disabled"),d.set(this._optionsRow,"display","none"),this._boundingAreaSelect.set("value","-1"),this.clear(),c.contains(this._optionsDiv,"optionsOpen")&&(c.remove(this._optionsDiv,"optionsOpen"),c.add(this._optionsDiv,"optionsClose")))),this.set("analysisField",this._analysFieldSelect.get("value"));var t="fishnet"!==this._aggAreaSelect.get("value")&&"hexagon"!==this._aggAreaSelect.get("value"),i=null;"0"!==this._analysFieldSelect.get("value")?i=this.analysisLayer:t&&this._isPoint&&this._aggAreaSelect.set("value","fishnet"),this.set("dividedByFields",i),V.updateDisplay([this._cellSizeLabelRow,this._cellSizeRow],this._isPoint&&"0"===e,"table-row")},_handleDividedByFieldChange:function(e){},_handleBoundingSelectChange:function(e){var t;if("browse"===e){var i=this._browsedlg.browseItems.get("query");i.custom=['tags:"polygon"'],this._browsedlg.browseItems.set("query",i),this._selectedwidget=2,this._browsedlg.show()}else"browselayers"===e?(this.showGeoAnalyticsParams&&(i=this._browseLyrsdlg.browseItems.get("query"),i.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",i)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPolygon"],this._selectedwidget=2,this._browseLyrsdlg.show()):"-1"!==e?(t=this.boundingPolygonLayers[this._boundingAreaSelect.get("value")-1],t.id!==this.drawLayerName&&this.clear()):this.clear();this._boundingDrawBtn.reset()},_handleAggAreaSelectChange:function(e){var t="fishnet"!==e&&"hexagon"!==e;V.updateDisplay([this._cellSizeLabelRow,this._cellSizeRow],!t,"table-row"),"browse"===e?(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery+' AND tags:"polygon"'),this._selectedwidget=1,this._browsedlg.show()):"browselayers"===e?(this.showGeoAnalyticsParams&&(g=this._browseLyrsdlg.browseItems.get("query"),g.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",g)),this._browseLyrsdlg.browseItems.plugIn.geometryTypes=["esriGeometryPolygon"],this._selectedwidget=1,this._browseLyrsdlg.show()):(this._boundingAreaSelect.set("disabled",t),c.toggle(this._boundingAreaSelect.domNode,"esriAnalysisTextDisabled",t),this._boundingDrawBtn.set("disabled",t),t?(this.clear(),d.set(this._boundingAreaLabelRow,"display","none"),d.set(this._boundingAreaSelectRow,"display","none"),this._boundingAreaSelect.set("value","-1")):(d.set(this._boundingAreaLabelRow,"display",""),d.set(this._boundingAreaSelectRow,"display","")),c.toggle(this._boundingDrawBtn.domNode,"esriAnalysisTextDisabled",t),this.set("dividedByFields",t?this.aggregationPolygonLayers[this._aggAreaSelect.get("value")-1]:null))},_handleBoundingBtnClick:function(e){e?(this.emit("drawtool-activate",{}),this._featureLayer||this._createBoundingPolyFeatColl(),this._toolbar.activate(H.POLYGON)):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_handleBrowseItemsSelect:function(e){var t={};e&&e.selection&&U.isDefined(this._selectedwidget)&&(0===this._selectedwidget?(t.layers=this.analysisLayers,t.layersSelect=this._analysisSelect):1===this._selectedwidget?(t.layers=this.aggregationPolygonLayers,t.layersSelect=this._aggAreaSelect,t.posIncrement=2):2===this._selectedwidget&&(t.layers=this.boundingPolygonLayers,t.layersSelect=this._boundingAreaSelect),t.item=e.selection,t.browseDialog=e.dialog||this._browsedlg,t.widget=this,V.addAnalysisReadyLayer(t).always(i.hitch(this,this._updateAnalysisLayerUI,!0)))},_handleRefTimeChange:function(e){this._timeRefDay.set("required",e&&!this._timeRefDay.get("value"))},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!1)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!0))},_createBoundingPolyFeatColl:function(){var e=V.createPolygonFeatureCollection(this.drawLayerName);this._featureLayer=new Z(e,{id:this.drawLayerName}),this.map.addLayer(this._featureLayer),a.connect(this._featureLayer,"onClick",i.hitch(this,function(e){this.map.infoWindow.setFeatures([e.graphic])}))},_addFeatures:function(e){var t=[],i={},a=new k(k.STYLE_NULL,new q(q.STYLE_SOLID,new n([0,0,0]),4)),o=new X(e,a);if(this.map.graphics.add(o),i.description="blayer desc",i.title="blayer",o.setAttributes(i),t.push(o),this._featureLayer.applyEdits(t,null,null),0===this.boundingPolygonLayers.length||this.boundingPolygonLayers[this.boundingPolygonLayers.length-1]!==this._featureLayer){var l=this.boundingPolygonLayers.push(this._featureLayer),r=this._boundingAreaSelect.getOptions();this._boundingAreaSelect.removeOption(r),r=s.map(r,function(e){return e.selected=!1,e}),r.push({value:l,label:this._featureLayer.name,selected:!0}),this._boundingAreaSelect.addOption(r),this._handleBoundingSelectChange(l)}},_handleOptionsBtnClick:function(){c.contains(this._overideOptionsDiv,"disabled")||(c.contains(this._overideOptionsDiv,"optionsClose")?c.replace(this._overideOptionsDiv,"optionsOpen","optionsClose"):c.contains(this._overideOptionsDiv,"optionsOpen")&&c.replace(this._overideOptionsDiv,"optionsClose","optionsOpen"))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setAnalysisLayerAttr:function(e){this.analysisLayer=e},_getAnalysisLayerAttr:function(e){return this.analysisLayer},_getAnalysisFieldAttr:function(){return this._analysFieldSelect&&(this.analysisField=this._analysFieldSelect.get("value")),this.analysisField},_setAnalysisFieldAttr:function(e){this.analysisField=e},_setDividedByFieldAttr:function(e){this.dividedByField=e},_getDividedByFieldAttr:function(){return this._divideFieldSelect&&(this.dividedByField=this._divideFieldSelect.get("value")),this.dividedByField},_setAnalysisFieldsAttr:function(e){var t,i,a=U.isDefined(e)&&U.isDefined(e.fields)?e.fields:[];this._analysFieldSelect&&(this._analysFieldSelect.removeOption(this._analysFieldSelect.getOptions()),this._isPoint?this._analysFieldSelect.addOption({value:"0",label:this.i18n.pointCounts}):!this._isPoint&&this.get("allowChooseLabel")&&this._analysFieldSelect.addOption({value:"0",label:this.i18n.chooseLabel}),s.forEach(a,function(a,n){-1===s.indexOf(["GiZScore","GiPValue","Gi_Bin",e.objectIdField],a.name)&&-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&(t={value:a.name,label:U.isDefined(a.alias)&&""!==a.alias?a.alias:a.name},this.analysisField&&t.label===this.analysisField&&(t.selected="selected",i=a.name),this._analysFieldSelect.addOption(t))},this),i?this._analysFieldSelect.set("value",i):this.set("analysisField",this._analysFieldSelect.get("value")))},_setAnalysisLayersAttr:function(e){var t=this.showGeoAnalyticsParams?["esriGeometryPoint","esriGeometryMultipoint"]:["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolygon"];this.analysisLayers=s.filter(e,function(e){return-1!==s.indexOf(t,e.geometryType)})},_setDividedByFieldsAttr:function(e){var t,i,a=U.isDefined(e)&&U.isDefined(e.fields)?e.fields:[];this._divideFieldSelect&&(this._divideFieldSelect.removeOption(this._divideFieldSelect.getOptions()),this._divideFieldSelect.addOption({value:"0",label:this.i18n.noneLabel}),this._isPoint&&(!this._isPoint||U.isDefined(this.analysisField)&&"0"!==this.analysisField)||this._divideFieldSelect.addOption({value:"esriPopulation",label:this.i18n.enrichLabel,disabled:!this.get("enableEnrichmentFields")}),s.forEach(a,function(a,n){-1===s.indexOf(["GiZScore","GiPValue","Gi_Bin",e.objectIdField,U.isDefined(this.analysisField)&&this.analysisField],a.name)&&-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&(t={value:a.name,label:U.isDefined(a.alias)&&""!==a.alias?a.alias:a.name},this.dividedByField&&t.label===this.dividedByField&&(t.selected="selected",i=a.name),this._divideFieldSelect.addOption(t))},this),i&&this._divideFieldSelect.set("value",i))},_setEnableEnrichmentFieldsAttr:function(e){this.enableEnrichmentFields=e},_getEnableEnrichmentFieldsAttr:function(){return this.enableEnrichmentFields},_setMapAttr:function(e){this.map=e,this._toolbar=new H(this.map),a.connect(this._toolbar,"onDrawEnd",i.hitch(this,this._addFeatures))},_getMapAttr:function(){return this.map},_setDrawLayerNameAttr:function(e){this.drawLayerName=e},_getDrawLayerNameAttr:function(){return this._featureLayer.name},_getDrawLayerAttr:function(){return this._featureLayer},_getDrawToolbarAttr:function(){return this._toolbar},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return V.validateServiceName(e,{textInput:this._outputLayerInput})},_setDisableExtentAttr:function(e){this._useExtentCheck.set("checked",!e),this._useExtentCheck.set("disabled",e)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))},_showMessages:function(e){y.set(this._bodyNode,"innerHTML",e),m.fadeIn({node:this._errorMessagePane,easing:b.quadIn,onEnd:i.hitch(this,function(){d.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),m.fadeOut({node:this._errorMessagePane,easing:b.quadOut,onEnd:i.hitch(this,function(){d.set(this._errorMessagePane,{display:"none"})})}).play()}});return l("extend-esri")&&i.setObject("dijit.analysis.FindHotSpots",Q,M),Q});