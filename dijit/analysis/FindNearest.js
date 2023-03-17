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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/form/NumberSpinner","dijit/form/NumberTextBox","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./utils","./AnalysisRegistry","./TrafficTime","./components/AddBarrierLayers/AddBarrierLayers","dojo/i18n!../../nls/jsapi","dojo/text!./templates/FindNearest.html"],(function(e,t,s,i,a,r,n,h,o,l,u,d,c,y,m,f,p,_,L,g,v,C,T,b,S,O,j,M,N,x,w,k,A,I,B,D,U,F,R,W,P,E){var H=t([f,p,_,L,g,B,I],{declaredClass:"esri.dijit.analysis.FindNearest",templateString:E,widgetsInTemplate:!0,analysisLayer:null,nearLayers:[],summaryFields:null,outputLayerName:null,nearLayer:null,searchCutoffUnits:"Miles",measurementType:"StraightLine",returnFeatureCollection:!1,pointBarriers:null,pointBarrierLayer:null,lineBarriers:null,lineBarrierLayer:null,polygonBarriers:null,polygonBarrierLayer:null,forbiddenLayers:[],enableTravelModes:!0,i18n:null,toolName:"FindNearest",helpFileName:"FindNearest",resultParameter:["nearestLayer","connectingLinesLayer"],_timeObj:null,constructor:function(e){this._pbConnects=[],this._statsRows=[],e.rerun||(e.maxCount||(e.maxCount=1),e.searchCutoff||(e.searchCutoff=100)),e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,a.disconnect),delete this._pbConnects,this._driveTimeClickHandles&&this._driveTimeClickHandles.length>0&&(i.forEach(this._driveTimeClickHandles,a.disconnect),this._driveTimeClickHandles=null)},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,P.bufferTool),s.mixin(this.i18n,P.driveTimes),s.mixin(this.i18n,P.FindNearestTool)},postCreate:function(){this.inherited(arguments),this._timeObj||(this._timeObj={hours:1,minutes:0,seconds:0}),y.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this._hoursInput.set("validator",s.hitch(this,this.validateTime,"hours")),this._minutesInput.set("validator",s.hitch(this,this.validateTime,"minutes")),this._secondsInput.set("validator",s.hitch(this,this.validateTime,"seconds")),this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(s.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e,t={};e={description:o.substitute(this.i18n.itemDescription,{sumNearbyLayerName:this.analysisLayer.name,summaryLayerName:this.nearLayer.name}),tags:o.substitute(this.i18n.itemTags,{sumNearbyLayerName:this.analysisLayer.name,summaryLayerName:this.nearLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(e.folder=this.get("folderId")),t.itemParams=e,t.jobParams=this._buildJobParams(),this.execute(t)}},_buildJobParams:function(){var e,t,s,i={};i.nearLayer=r.toJson(this.constructAnalysisInputLyrObj(this.nearLayer)),t=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value")),s=A.isDefined(t)&&A.isDefined(t.units)&&t.units.toLowerCase(),i.measurementType=t.travelMode?r.toJson(t.travelMode):this._measureMethodSelect.get("value"),i.analysisLayer=r.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer)),this._limitSearchRangeCheck.get("checked")&&(i.searchCutoff=this.get("searchCutoff"),"time"===s||(i.searchCutoffUnits=this.get("searchCutoffUnits"))),this._findNearestCheck.get("checked")&&(i.maxCount=this.get("maxCount")),this._trafficTimeWidget.get("checked")&&(i.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(i.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay"),i.liveOffset=this._trafficTimeWidget.get("liveOffset")));var a=this._trafficTimeWidget.get("startDateAndTime");return a&&(i.timeOfDay=a),this.returnFeatureCollection||(i.OutputName=r.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),i.context=r.toJson(e)),"StraightLine"!==(i=this._addBarrierstoJobParams(i,this._addBarrierLayersComponent.get("barrierLayers"))).measurementType&&this.showOutputType&&(i.includeRouteLayers=this._incldRouteLayersChk.get("checked")),i},_handleLayerChange:function(e,t){var s;this._isAnalysisSelect=!1,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e,disabledSubResources:[this.nearLayer,this.analysisLayer]},{},this._layersSelect):(s=this.nearLayers[e],A.isDefined(s)&&this.analysisLayer&&(this.set("nearLayer",this.nearLayers[e]),A.isDefined(t)&&!t||(this.outputLayerName=o.substitute(this.i18n.outputLayerName,{layer:this.nearLayer.name,sumNearbyLayerName:this.analysisLayer.name}))),this._outputLayerInput.set("value",this.outputLayerName),this._travelModesCheck())},_handleLimitSearchCheckChange:function(e){"object"==typeof this.measurementType&&this.measurementType.name&&-1!==this.measurementType.name.indexOf("Time")||"string"==typeof this.measurementType&&-1!==this.measurementType.indexOf("Time")?(this._hoursInput.set("disabled",!e),this._minutesInput.set("disabled",!e),this._secondsInput.set("disabled",!e)):(this._distanceUnitsSelect.set("disabled",!e),this._searchCutoffInput.set("disabled",!e))},_handleFindNearestCheckChange:function(e){this._maxCountInput.set("disabled",!e)},_handleTimeUnitsChange:function(e){},_handleDistValueChange:function(e){},_handleDistUnitsChange:function(e){this.set("searchCutoffUnits",e)},_handleDistanceTypeChange:function(e){var t,i,a;a=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value")),A.isDefined(a)&&A.isDefined(a.units)?(t="Time"===a.units,i="Time"===a.units&&("driving"===a.modei18nKey||"trucking"===a.modei18nKey)):(t=-1!==e.indexOf("Time"),i="DrivingTime"===e),this.set("measurementType",e),l.set(this._useTrafficRow,"display",t?"":"none"),l.set(this._distanceLimitRow,"display",t?"none":""),l.set(this._timeLimitRow,"display",t?"":"none"),this._trafficTimeWidget.set("disabled",!t),this._trafficTimeWidget.set("reset",!t),t&&U.getRoutingUtilities(this).then(s.hitch(this,(function(e){this._trafficTimeWidget.set("trafficSupport",i&&e.networkDataset&&e.networkDataset.trafficSupport)}))),t?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}])):(this.get("searchCutoffUnits")&&this.set("searchCutoffUnits",this.get("searchCutoffUnits")),this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),"StraightLine"===e&&this._distanceUnitsSelect.addOption([{type:"separator"},{value:"NauticalMiles",label:this.i18n.nautMiles}]),this._distanceUnitsSelect.set("value",this.searchCutoffUnits)),this.showOutputType&&("StraightLine"===e&&this._incldRouteLayersChk.set("checked",!1),this._incldRouteLayersChk.set("disabled","StraightLine"===e)),"StraightLine"===e?this._addBarrierLayersComponent.disable():this._addBarrierLayersComponent.enable()},_save:function(){},_canPerformNearestNAAnalysis:function(e){return esri.isDefined(e.helperServices.routingUtilities)&&esri.isDefined(e.helperServices.asyncClosestFacility)},_buildUI:function(){var e=!0;if(l.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.signInPromise.then(s.hitch(this,U.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this._hasTravelModesSupport=this.get("enableTravelModes"),A.isDefined(this.portalSelf)&&(this._hasTravelModesSupport=this._canPerformNearestNAAnalysis(this.portalSelf)),this._loadConnections(),U.populateTravelModes({selectWidget:this._measureMethodSelect,addStraightLine:this.isServerAdvanceLicensed,widget:this,enableTravelModes:this.get("enableTravelModes"),value:this.measurementType}),this.timeOfDay){var t=this.travelMode&&U.isTrafficBasedTravelMode(this.travelMode);this._trafficTimeWidget.set("checked",t),t?(this._trafficTimeWidget.set("timeZoneForTimeOfDay",this.timeZoneForTimeOfDay),this._trafficTimeWidget.set("timeOfDay",this.timeOfDay),this.liveOffset&&this._trafficTimeWidget.set("liveOffset",this.liveOffset)):this._trafficTimeWidget.set("startDateAndTime",this.timeOfDay)}this._hasTravelModesSupport&&(U.getNetworkAnalysisLimits(this).then(s.hitch(this,(function(e){e.maximumFacilitiesToFind?this._maxCountInput.set("constraints",{min:1,max:e.maximumFacilitiesToFind,places:0}):this._maxCountInput.set("constraints",{min:1,places:0})}))),this._addBarrierLayersComponent.buildUI({pointBarrierLayer:this.pointBarrierLayer,pointBarriers:this.pointBarriers,lineBarrierLayer:this.lineBarrierLayer,lineBarriers:this.lineBarriers,polygonBarrierLayer:this.polygonBarrierLayer,polygonBarriers:this.polygonBarriers,forbiddenLayers:this.forbiddenLayers,showBrowseLayers:this.showBrowseLayers,map:this.get("map"),portalSelf:this.get("portalSelf"),portalUrl:this.get("portalUrl"),useArcGISComponents:this.useArcGISComponents,isSingleTenant:this.isSingleTenant})),U.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&(this.analysisLayers&&this.analysisLayer&&!U.isLayerInLayers(this.analysisLayer,this.analysisLayers)&&this.analysisLayers.push(this.analysisLayer),this.get("analysisLayer")||!this.get("analysisLayers")||this.rerun||this.set("analysisLayer",this.analysisLayers[0]),U.populateAnalysisLayers(this,"analysisLayer","analysisLayers")),this.nearLayers&&this.nearLayer&&!U.isLayerInLayers(this.nearLayer,this.nearLayers)&&this.nearLayers.push(this.nearLayer),U.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this.nearLayer&&(e=!1),this._updateAnalysisLayerUI(e),l.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(e){this.folderStore=e,U.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),l.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this.maxCount?(this._maxCountInput.set("value",this.maxCount),this._findNearestCheck.set("checked",!0)):(this._maxCountInput.set("value",1),this._findNearestCheck.set("checked",!1)),U.updateDisplay([this._outputTypeRow],this.get("showOutputType"),"table-row")},_updateAnalysisLayerUI:function(e){if(this.analysisLayer&&u.set(this._aggregateToolDescription,"innerHTML",o.substitute(this.i18n.summarizeDefine,{sumNearbyLayerName:this.analysisLayer.name})),this.nearLayers){this.nearLayer&&!U.isLayerInLayers(this.nearLayer,this.nearLayers)&&this.nearLayers.push(this.nearLayer),this._layersSelect.removeOption(this._layersSelect.getOptions());var t=[];this.rerun&&!this.nearLayer&&U.addBlankOption(this._layersSelect,t),i.forEach(this.nearLayers,(function(e,s){e!==this.analysisLayer&&t.push({value:s,label:e.name,selected:this.nearLayer&&(e.name===this.nearLayer.name||this.nearLayer.url&&e.url&&this.nearLayer.url===e.url)})}),this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers"))&&t.push({type:"separator",value:""}),this._layersSelect.addOption(t),U.addBrowseOptionForTool({select:this._layersSelect,disableLAAL:!1},this),this._handleLayerChange(this._layersSelect.get("value"),e)}!e&&this.outputLayerName||""!==this._layersSelect.get("value")&&"browse"!==this._layersSelect.get("value")&&"browselayers"!==this._layersSelect.get("value")&&(this.outputLayerName=o.substitute(this.i18n.outputLayerName,{layer:this.nearLayers[this._layersSelect.get("value")]&&this.nearLayers[this._layersSelect.get("value")].name,sumNearbyLayerName:this.analysisLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)),this._travelModesCheck()},_travelModesCheck:function(){var e=this.analysisLayer&&this.analysisLayer.geometryType===F.GeometryTypes.Point&&this.nearLayer&&this.nearLayer.geometryType===F.GeometryTypes.Point;this.set("enableTravelModes",this._hasTravelModesSupport&&e),this._updateTravelModes(this._hasTravelModesSupport&&e)},_handleAnalysisLayerChange:function(e){this._isAnalysisSelect=!0,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e,disabledSubResources:[this.analysisLayer]},{},this._analysisSelect):(this.set("analysisLayer",this.analysisLayers[e]),this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(e,t){var i=this._isAnalysisSelect;e&&e.selection&&U.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.analysisLayers:this.nearLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).then(s.hitch(this,(function(e){e&&this._addBarrierLayersComponent.addNewBarrier(i?this.analysisLayers[this.analysisLayers.length-1]:this.nearLayers[this.nearLayers.length-1])})))},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1)),this.own(this.on("travelmodes-added",s.hitch(this,(function(){a.connect(this._measureMethodSelect,"onChange",s.hitch(this,this._handleDistanceTypeChange)),this.analysisLayer?this._updateAnalysisLayerUI(!this.outputLayerName):this._travelModesCheck(),this._handleDistanceTypeChange(this.measurementType);var e,t=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value"));e=A.isDefined(t)&&A.isDefined(t.units)?"Time"===t.units:"object"==typeof this.measurementType&&this.measurementType.name&&-1!==this.measurementType.name.indexOf("Time")||"string"==typeof this.measurementType&&-1!==this.measurementType.indexOf("Time"),!this.measurementType||this.measurementType&&!e?(this.searchCutoffUnits&&this._distanceUnitsSelect.set("value",this.searchCutoffUnits),this.searchCutoff?(this._searchCutoffInput.set("value",this.searchCutoff),this._limitSearchRangeCheck.set("checked",!0)):this._limitSearchRangeCheck.set("checked",!1)):this.measurementType&&e&&this.searchCutoff&&this._timeObj?(this._hoursInput.set("value",parseInt(this._timeObj.hours,10)),this._minutesInput.set("value",parseInt(this._timeObj.minutes,10)),this._secondsInput.set("value",parseInt(this._timeObj.seconds,10)),this._limitSearchRangeCheck.set("checked",!0)):this._limitSearchRangeCheck.set("checked",!1)})))),this.watch("enableTravelModes",s.hitch(this,(function(e,t,s){this._updateTravelModes(s)}))),this.own(this._addBarrierLayersComponent.on("add-ready-to-use-layer",s.hitch(this,(function(e){this.emit("add-ready-to-use-layer",e)}))))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setAnalysisLayerAttr:function(e){this.analysisLayer=e,this.forbiddenLayers=[this.analysisLayer,this.nearLayer],this._addBarrierLayersComponent&&this._addBarrierLayersComponent.updateOptions(this.forbiddenLayers)},_getAnalysisLayerAttr:function(e){return this.analysisLayer},_setAnalysisLayersAttr:function(e){this.analysisLayers=e},_setNearLayerAttr:function(e){this.nearLayer=e,this.forbiddenLayers=[this.analysisLayer,this.nearLayer],this._addBarrierLayersComponent&&this._addBarrierLayersComponent.updateOptions(this.forbiddenLayers)},_setNearLayersAttr:function(e){this.nearLayers=e},_setLayersAttr:function(e){this.nearLayers=[]},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_setSearchCutoffUnitsAttr:function(e){this.searchCutoffUnits=e},_getSearchCutoffUnitsAttr:function(){return this.searchCutoffUnits},_setMeasurementTypeAttr:function(e){this.measurementType=e},_getMeasurementTypeAttr:function(){return this.measurementType},_getSearchCutoffAttr:function(){var e=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value"));return(A.isDefined(e)&&A.isDefined(e.units)?"time"===e.units.toLowerCase():this.measurementType&&("object"==typeof this.measurementType&&this.measurementType.name&&-1!==this.measurementType.name.indexOf("Time")||"string"==typeof this.measurementType&&-1!==this.measurementType.indexOf("Time")))?this._timeObj&&(this.searchCutoff=60*this._timeObj.hours+this._timeObj.minutes+this._timeObj.seconds/60):this.searchCutoff=this._searchCutoffInput.get("value"),this.searchCutoff},_setSearchCutoffAttr:function(e){e&&(this.searchCutoff=e,this._timeObj={},this._timeObj.hours=Math.floor(e/60),this._timeObj.minutes=Math.floor(e%60),this._timeObj.seconds=e%60%1*60)},_getMaxCountAttr:function(){return this.maxCount=this._maxCountInput.get("value"),this.maxCount},_setMaxCountAttr:function(e){this.maxCount=e},_setEnableTravelModesAttr:function(e){this._set("enableTravelModes",e)},validateTime:function(e,t){var s,i=!0;return s=parseFloat(t,10),"hours"===e?this._timeObj.hours=s:"minutes"===e?this._timeObj.minutes=s:"seconds"===e&&(this._timeObj.seconds=s),0===this._timeObj.hours&&0===this._timeObj.minutes&&0===this._timeObj.seconds&&(i=!1),i},_connect:function(e,t,s){this._pbConnects.push(a.connect(e,t,s))},_updateTravelModes:function(e){var t=this._measureMethodSelect.getOptions();i.forEach(t,(function(t){"StraightLine"!==t.value&&(t.disabled=!e,t.selected=t.selected&&!t.disabled)})),this._measureMethodSelect.updateOption(t),this._handleDistanceTypeChange(this._measureMethodSelect.get("value"))},validateServiceName:function(e){return U.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})}});return n("extend-esri")&&s.setObject("dijit.analysis.FindNearest",H,k),H}));