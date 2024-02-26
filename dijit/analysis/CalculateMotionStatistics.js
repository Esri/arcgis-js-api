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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/on","dojo/_base/fx","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/form/NumberSpinner","dijit/Dialog","dojox/form/CheckedMultiSelect","../../kernel","../../lang","./AnalysisBase","./utils","./AnalysisRegistry","./CreditEstimator","./_AnalysisOptions","./components/TimeBoundarySelect/TimeBoundarySelect","dojo/i18n!./nls/CalculateMotionStatistics","dojo/text!./templates/CalculateMotionStatistics.html"],(function(e,t,i,s,a,n,l,o,r,h,d,c,u,p,_,y,m,S,v,f,g,b,T,L,C,w,M,U,B,k,j,D,P,F,I,O,A,x,N,R,H,E,W,V,q){var G=i([v,f,g,b,T,E,x],{declaredClass:"esri.dijit.analysis.CalculateMotionStatistics",templateString:q,widgetsInTemplate:!0,inputLayer:null,outputLayerName:null,i18n:null,toolName:"CalculateMotionStatistics",helpFileName:"CalculateMotionStatistics",resultParameter:"output",constructor:function(e){this._pbConnects=[],this._statsRows=[],e.containerNode&&(this.container=e.containerNode),e.trackFields&&"string"==typeof e.trackFields&&(e.trackFields=e.trackFields.split(","))},destroy:function(){this.inherited(arguments),a.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,V)},postCreate:function(){this.inherited(arguments),_.add(this._form.domNode,"esriSimpleForm"),d.set(this._trackFieldSelect.selectNode,"width","90%"),d.set(this._statsFieldSelect.selectNode,"width","90%"),this._statsFieldSelect.addOption([{value:"Distance",label:this.i18n.distance},{value:"Speed",label:this.i18n.speed},{value:"Acceleration",label:this.i18n.acceleration},{value:"Duration",label:this.i18n.duration},{value:"Elevation",label:this.i18n.elevation},{value:"Slope",label:this.i18n.slope},{value:"Idle",label:this.i18n.idle},{value:"Bearing",label:this.i18n.bearing}]),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"}],this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.showGeoAnalyticsParams&&(this._hasPCSWarnShown=!1),this.emit("close",{save:e})},_buildJobParams:function(){var e={},t=this.constructAnalysisInputLyrObj(this.inputLayer,!0);e.inputLayer=t,e.trackFields=this._trackFieldSelect.get("value").toString(),!1===isNaN(this._trackHistoryWindowInput.get("value"))&&(e.trackHistoryWindow=this._trackHistoryWindowInput.get("value")),e.motionStatistics=this._statsFieldSelect.get("value").toString(),e.motionStatistics.indexOf("Idle")>-1&&(e.idleDistanceTolerance=this._distToleranceValue.get("value"),e.idleDistanceToleranceUnit=this._distToleranceUnit.get("value"),e.idleTimeTolerance=this._timeToleranceValue.get("value"),e.idleTimeToleranceUnit=this._timeToleranceUnit.get("value")),e.distanceMethod=this.get("distanceMethod"),this._timeBoundarySelect.get("timeBoundarySplit")&&(e.timeBoundarySplit=this._timeBoundarySelect.get("timeBoundarySplit"),e.timeBoundarySplitUnit=this._timeBoundarySelect.get("timeBoundarySplitUnit"),this._timeBoundarySelect.get("timeBoundaryReference")&&(e.timeBoundaryReference=this._timeBoundarySelect.get("timeBoundaryReference"),this.timeBoundaryReferenceType=this._timeBoundarySelect.get("timeBoundaryReferenceType")));var i=this._getStatUnits();return i&&i.length>0&&a.forEach(i,(function(t){var i=t.split("_");e[i[0].toLowerCase()+"Unit"]=i[1]})),this.returnFeatureCollection||(e.OutputName=l.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.context=l.toJson({extent:this.map.extent._normalize(!0)})),this._updateJobFilterAndSelection(e)},_handleSaveBtnClick:function(e){if(this._form.validate()||this._timeBoundarySelect.validate()){var t={};this._saveBtn.set("disabled",!0),t.jobParams=this._buildJobParams(),t.itemParams={description:h.substitute(this.i18n.itemDescription,{inputLayername:this.inputLayer.name}),tags:h.substitute(this.i18n.itemTags,{inputLayername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(t.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(t.isSpatioTemporalDataStore=!0),N.checkPCSforAnalysis({widget:this,jobParams:t.jobParams,hasPCSWarnShown:this._hasPCSWarnShown})||this._hasPCSWarnShown?this.execute(t):this._hasPCSWarnShown=!0}},_handleShowCreditsClick:function(e){e.preventDefault(),(this._form.validate()||this._timeBoundarySelect.validate())&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(s.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&N.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).always(s.hitch(this,this._updateAnalysisLayerUI,!0))},_renderCurrentStatUnits:function(e,t){var i=[],s=[];a.forEach(e,(function(e){var t=e.split("_");i.push(t[0]),s.push(t[1])})),this._removeStatsRows(),a.forEach(t,(function(e){if(-1!==["Acceleration","Duration","Distance","Elevation","Speed"].indexOf(e)){var t,a=i.indexOf(e);-1!==a&&(t=s[a]),this._buildStatUnitsUX(e,t)}}),this),N.initHelpLinks(this.domNode,this.showHelp)},_handleStatsValueChange:function(e){var t=e.join(",").indexOf("Idle")>-1;N.updateDisplay([this._distanceToleranceRow,this._timeToleranceRow],t,"table-row"),this._distToleranceValue.set("required",t),this._timeToleranceValue.set("required",t),this._renderCurrentStatUnits(this._getStatUnits(),e);var i=e.length===this._statsFieldSelect.getOptions().length;this._selectAllBtn.set("disabled",i),this._deselectAllBtn.set("disabled",!i)},_updateStatsSelection:function(e){var t=this._statsFieldSelect.getOptions(),i=t.map((function(e){return e.value}));!0===e?this._statsFieldSelect.set("value",i):(t=t.map((function(e){return{label:e.label,value:e.value}})),this._statsFieldSelect.removeOption(this._statsFieldSelect.getOptions()),this._statsFieldSelect.addOption(t)),this._selectAllBtn.set("disabled",e),this._deselectAllBtn.set("disabled",!e)},_handleSelectAllClick:function(){this._updateStatsSelection(!0)},_handleDeselectAllClick:function(){this._updateStatsSelection(!1)},_handleDistUnitsChange:function(e){},_handleDurSplitValue:function(e){},_handleRefTimeChange:function(e){this._timeRefDay.set("required",e&&!this._timeRefDay.get("value"))},_handleDistSplitCheckChange:function(e){this._updateOptionalParams(this._distSplitValue,e),this._updateOptionalParams(this._distSplitUnitsSelect,e)},_handleTimeSplitCheckChange:function(e){this._updateOptionalParams(this._durSplitValue,e),this._updateOptionalParams(this._durSplitUnitsSelect,e)},_handleTimeIntervalCheckChange:function(e){this._timeBoundarySelect.set("disabled",!e)},_updateOptionalParams:function(e,t){e.set("disabled",!t),e.set("required",t)},_save:function(){},_buildUI:function(){var e=!0;N.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!N.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),N.populateAnalysisLayers(this,"inputLayer","inputLayers")),N.addReadyToUseLayerOption(this,[this._analysisSelect]),this.motionStatistics?this.motionStatistics&&this._statsFieldSelect.set("value",this.motionStatistics.split(",")):this._handleSelectAllClick(),!1===isNaN(this.trackHistoryWindow)&&this._trackHistoryWindowInput.set("value",this.trackHistoryWindow),this.idleDistanceTolerance&&(this._distToleranceValue.set("value",this.idleDistanceTolerance),this._distToleranceUnit.set("value",this.idleDistanceToleranceUnit)),this.idleTimeTolerance&&(this._timeToleranceValue.set("value",this.idleTimeTolerance),this._timeToleranceUnit.set("value",this.idleTimeToleranceUnit)),this.set("distanceMethod",this.distanceMethod||R.DistanceMethods.geodesic),(this.timeBoundarySplit||this.distanceUnit||this.durationUnit||this.accelerationUnit||this.elevationUnit||this.speedUnit)&&this._handleOptionsBtnClick();var t=[];this.distanceUnit&&t.push("Distance_"+this.distanceUnit),this.durationUnit&&t.push("Duration_"+this.durationUnit),this.speedUnit&&t.push("Speed_"+this.speedUnit),this.accelerationUnit&&t.push("Acceleration_"+this.accelerationUnit),this.elevationUnit&&t.push("Elevation_"+this.elevationUnit),t.length>0&&this._renderCurrentStatUnits(t,this._statsFieldSelect.get("value")),this.timeBoundarySplit&&(this._timeBoundarySelect.set("timeBoundarySplit",this.timeBoundarySplit),this._timeBoundarySelect.set("timeBoundarySplitUnit",this.timeBoundarySplitUnit)),this.timeBoundaryReference&&(this._timeBoundarySelect.set("timeBoundaryReferenceType",this.timeBoundaryReferenceType),this._timeBoundarySelect.set("timeBoundaryReference",this.timeBoundaryReference)),d.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(e){this.folderStore=e,N.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),d.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),d.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this._updateAnalysisLayerUI(e),this._loadConnections(),this._createFilterAndSelections()},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1)),this._connect(this._geodesicType,"onclick",s.hitch(this,this._handleDistanceMethodChange,R.DistanceMethods.geodesic)),this._connect(this._planarType,"onclick",s.hitch(this,this._handleDistanceMethodChange,R.DistanceMethods.planar))},_handleDistanceMethodChange:function(e){this.set("distanceMethod",e)},_handleAnalysisLayerChange:function(e){"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:["point"],geometryTypes:[R.GeometryTypes.Point,R.GeometryTypes.MultiPoint],timeTypes:[R.TimeTypes.Instant]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[e]),this._updateAnalysisLayerUI(!0))},_showMessages:function(e){c.set(this._bodyNode,"innerHTML",e),m.fadeIn({node:this._errorMessagePane,easing:S.quadIn,onEnd:s.hitch(this,(function(){d.set(this._errorMessagePane,{display:""})}))}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),m.fadeOut({node:this._errorMessagePane,easing:S.quadOut,onEnd:s.hitch(this,(function(){d.set(this._errorMessagePane,{display:"none"})}))}).play()},_updateAnalysisLayerUI:function(e){this.inputLayer&&(N.addAttributeOptions({selectWidget:this._trackFieldSelect,layer:this.inputLayer,allowStringType:!0,allowSelectLabel:!1}),!e&&this.trackFields&&this.trackFields.length>0&&this._trackFieldSelect.set("value",this.trackFields),e&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{inputLayername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)))},_handleOptionsBtnClick:function(){_.contains(this._optionsDiv,"disabled")||(_.contains(this._optionsDiv,"optionsClose")?_.replace(this._optionsDiv,"optionsOpen","optionsClose"):_.contains(this._optionsDiv,"optionsOpen")&&_.replace(this._optionsDiv,"optionsClose","optionsOpen"))},_removeStatsRow:function(e){a.forEach(L.findWidgets(e),(function(e){e.destroyRecursive()})),u.destroy(e)},_getStatSelectValue:function(e){var t,i=L.findWidgets(e);return i&&i.length>0&&(t=i[0].statistic+"_"+i[0].get("value")),t},_removeStatsRows:function(){a.forEach(this._statsRows,this._removeStatsRow,this),this._statsRows=[]},_getStatUnits:function(){var e;return this._statsRows.length>0&&(e=a.map(this._statsRows,this._getStatSelectValue,this)),e},_buildStatUnitsUX:function(e,t){var i,s,a,n,l,o;switch(i=u.create("tr",null,this._afterStatsRow,"before"),s=u.create("td",null,i),a=u.create("td",{colspan:"2"},i),l=u.create("label",{class:"esriLeadingMargin2"},s),n=new U({maxHeight:200,class:"esriLeadingMargin05 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},u.create("select",null,a)),o=u.create("a",{class:"esriFloatTrailing helpIcon"},a),n.statistic=e,e){case"Acceleration":l.innerHTML=this.i18n.acceleration,c.set(o,"esriHelpTopic","accelerationUnit"),n.addOption([{value:"MetersPerSecondSquared",label:this.i18n.metersPerSecondSquared,selected:!t},{value:"FeetPerSecondSquared",label:this.i18n.feetPerSecondSquared}]);break;case"Speed":l.innerHTML=this.i18n.speed,c.set(o,"esriHelpTopic","speedUnit"),n.addOption([{value:"MetersPerSecond",label:this.i18n.metersPerSecond,selected:!t},{value:"KilometersPerHour",label:this.i18n.kilometersPerHour},{value:"FeetPerSecond",label:this.i18n.feetPerSecond},{value:"MilesPerHour",label:this.i18n.milesPerHour},{value:"NauticalMilesPerHour",label:this.i18n.nauticalMilesPerHour}]);break;case"Duration":l.innerHTML=this.i18n.duration,c.set(o,"esriHelpTopic","durationUnit"),n.addOption([{value:"Milliseconds",label:this.i18n.milliseconds},{value:"Seconds",label:this.i18n.seconds,selected:!t},{value:"Minutes",label:this.i18n.minutes},{value:"Hours",label:this.i18n.hours},{value:"Days",label:this.i18n.days},{value:"Weeks",label:this.i18n.weeks},{value:"Months",label:this.i18n.months},{value:"Years",label:this.i18n.years}]);break;case"Elevation":l.innerHTML=this.i18n.elevation,c.set(o,"esriHelpTopic","elevationUnit"),n.addOption([{value:"NauticalMiles",label:this.i18n.nautMiles},{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters,selected:!t}]);break;case"Distance":l.innerHTML=this.i18n.distance,c.set(o,"esriHelpTopic","distanceUnit"),n.addOption([{value:"NauticalMiles",label:this.i18n.nautMiles},{value:"Miles",label:this.i18n.miles,selected:!t},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters,selected:!t}])}n.set("value",t),this._statsRows.push(i)},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){A.isDefined(e)&&e.geometryType===R.GeometryTypes.Point&&N.isTimeInstantLayer(e)?this.inputLayer=e:this.inputLayer=null},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return N.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setInputLayersAttr:function(e){A.isDefined(e)&&(e=a.filter(e,(function(e,t){return-1!==a.indexOf([R.GeometryTypes.Point],e.geometryType)&&N.isTimeInstantLayer(e)})),this.inputLayers=e)},_setDistanceMethodAttr:function(e){this.distanceMethod=e,_.toggle(this._geodesicType,"selected",e===R.DistanceMethods.geodesic),_.toggle(this._planarType,"selected",e===R.DistanceMethods.planar)},_connect:function(e,t,i){this._pbConnects.push(n.connect(e,t,i))}});return o("extend-esri")&&s.setObject("dijit.analysis.CalculateMotionStatistics",G,O),G}));