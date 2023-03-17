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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/kernel","dojo/has","dojo/on","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Tooltip","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./utils","./AnalysisRegistry","./TrafficTime","./components/AddBarrierLayers/AddBarrierLayers","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CreateDriveTimeAreas.html"],(function(e,t,i,s,a,n,r,l,h,o,c,u,d,p,m,y,_,g,f,v,b,L,S,k,D,U,O,T,C,M,A,w,B,I,W,j,x,N,F,V,P,R,E){var J=t([g,f,v,b,L,W,j],{declaredClass:"esri.dijit.analysis.CreateDriveTimeAreas",templateString:E,widgetsInTemplate:!0,inputLayer:null,inputType:null,outputLayerName:null,breakValues:null,overlapPolicy:"Overlap",distanceDefaultUnits:"Miles",i18n:null,pointBarriers:null,pointBarrierLayer:null,lineBarriers:null,lineBarrierLayer:null,polygonBarriers:null,polygonBarrierLayer:null,forbiddenLayers:[],_unreachableAreasWarningMsg:"",_reachableStreetsWarningMsg:"",toolName:"CreateDriveTimeAreas",helpFileName:"CreateDriveTimeAreas",resultParameter:"DriveTimeAreasLayer",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,R.bufferTool),i.mixin(this.i18n,R.driveTimes);var e=R.widgets.directions.units,t={};t.kilometers=e.esriKilometers.abbr,t.meters=e.esriMeters.abbr,t.miles=e.esriMiles.abbr,t.feet=e.esriFeet.abbr,t.yards=e.esriYards.abbr,t.hours=R.common.hoursSmall,t.minutes=R.common.minutesSmall,t.seconds=R.common.secondsSmall,this.i18n.abbreviatedUnits=t},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),this._breakValuesInput.set("validator",i.hitch(this,(function(){return this.validateDistance()}))),N.getNetworkAnalysisLimits(this).then(i.hitch(this,(function(e){this.limits=e}))),this.outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this.breakValues||(this.breakValues=[],this.breakValues.push(this._breakValuesInput.get("value"))),this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_toUpperFirstLetter:function(e){return e.slice(0,1).toUpperCase()+e.slice(1)},_handleShowCreditsClick:function(e){e.preventDefault();var t={};if(this._form.validate()&&this._warningIconsValidated()){t.inputLayer=n.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),t.breakValues=n.toJson(this.get("breakValues")),t.breakUnits=this.get("breakUnits"),t.overlapPolicy=this.get("overlapPolicy"),this._trafficTimeWidget.get("checked")&&(t.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(t.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay")));var s=this._trafficTimeWidget.get("startDateAndTime");s&&(t.timeOfDay=s),this.returnFeatureCollection||(t.OutputName=n.toJson({serviceProperties:{name:this.outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=n.toJson({extent:this.map.extent._normalize(!0)})),y.contains(this._facilitytodemand,"selected")?t.travelDirection="AwayFromFacility":t.travelDirection="TowardsFacility",t.showHoles=!!this._unreachableAreas.get("value"),t.includeReachableStreets=!!this._reachableStreets.get("value"),t=this._addBarrierstoJobParams(t,this._addBarrierLayersComponent.get("barrierLayers")),this.getCreditsEstimate(this.toolName,t).then(i.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))}},_handleSaveBtnClick:function(e){var t,i,s={},a={};if(this._form.validate()&&this._warningIconsValidated()){this._saveBtn.set("disabled",!0),s.inputLayer=n.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),s.breakValues=this.get("breakValues"),s.breakUnits=this.get("breakUnits"),s.overlapPolicy=this.get("overlapPolicy"),i=this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value")),s.travelMode=i&&n.toJson(i.travelMode),this._trafficTimeWidget.get("checked")&&(s.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(s.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay"),s.liveOffset=this._trafficTimeWidget.get("liveOffset")));var r=this._trafficTimeWidget.get("startDateAndTime");r&&(s.timeOfDay=r),this.returnFeatureCollection||(s.OutputName=n.toJson({serviceProperties:{name:this.outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(s.context=n.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(t={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),s.context=n.toJson(t)),y.contains(this._facilitytodemand,"selected")?s.travelDirection="AwayFromFacility":s.travelDirection="TowardsFacility",s.showHoles=!!this._unreachableAreas.get("value"),s.includeReachableStreets=!!this._reachableStreets.get("value"),s=this._addBarrierstoJobParams(s,this._addBarrierLayersComponent.get("barrierLayers")),a.jobParams=s,a.itemParams={description:c.substitute(this.i18n.itemDescription,{layername:this.inputLayer.name,distance_field:s.Distances||s.Field,units:s.Units}),tags:c.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(a.itemParams.folder=this.get("folderId")),this.execute(a)}},_handleResultLyrInputChange:function(e){this.set("outputLayerName",e)},_handleDistValueChange:function(){this.set("outputLayerName"),this._handleUnreachableAreasClick(),this._handleReachableStreetsClick()},_handleDistUnitsChange:function(e){this.set("breakUnits",e),this.set("outputLayerName"),this.validateDistance(),this._handleUnreachableAreasClick(),this._handleReachableStreetsClick()},_handleDistanceTypeChange:function(e,t){var s,a,n;if(a=this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value")),e&&t)this._initTravelMode=e;else if(e===this._initTravelMode&&!t)return void(this._initTravelMode=null);I.isDefined(a)&&(a.modei18nKey,s=a.units.toLowerCase(),n="Time"===a.units&&("driving"===a.modei18nKey||"trucking"===a.modei18nKey)),s&&("time"===s&&N.getRoutingUtilities(this).then(i.hitch(this,(function(e){this._trafficTimeWidget.set("trafficSupport",n&&e.networkDataset&&e.networkDataset.trafficSupport)}))),u.set(this._useTrafficLabelRow,"display","time"===s?"":"none"),this._trafficTimeWidget.set("disabled","time"!==s),this._trafficTimeWidget.set("reset","time"!==s)),"time"===s?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}]),t||this.set("breakUnits",this._distanceUnitsSelect.get("value"))):"other"===s?(this.set("breakUnits","Other"),this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Other",label:this.i18n.otherLabel,selected:!0}])):(!t&&this.get("distanceDefaultUnits")&&this.set("breakUnits",this.get("distanceDefaultUnits")),this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this._distanceUnitsSelect.set("value",this.breakUnits)),t&&(this.breakUnits?this._distanceUnitsSelect.set("value",this.breakUnits):this.distanceDefaultUnits&&this._distanceUnitsSelect.set("value",this.distanceDefaultUnits)),this.set("outputLayerName"),this.validateDistance(),this._handleUnreachableAreasClick(),this._handleReachableStreetsClick()},_handleUnreachableAreasClick:function(e){var t=this._drivingModeSelect.get("value").replace("-",""),i=this._distanceUnitsSelect.get("value"),s=N.getMaxInputByMode({type:t,units:i,limits:this.limits,travelMode:this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value")),alternateLimits:"unreachableAreas"});this._unreachableAreas.get("value")&&!this.validateDistance(s)?(y.remove(this._unreachableAreasWarning,"hide"),this._unreachableAreasWarningMsg=c.substitute(this.i18n.unreachableValidationMsg,{x:_.format(s,{locale:r.locale}),units:this._localizeMeasurementUnit(i)})):y.add(this._unreachableAreasWarning,"hide")},_localizeMeasurementUnit:function(e){return this.i18n.abbreviatedUnits[e.toLowerCase()]||""},_handleReachableStreetsClick:function(e){var t=this._drivingModeSelect.get("value").replace("-",""),i=this._distanceUnitsSelect.get("value"),s=N.getMaxInputByMode({type:t,units:i,limits:this.limits,travelMode:this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value")),alternateLimits:"reachableStreets"});this._reachableStreets.get("value")&&!this.validateDistance(s)?(y.remove(this._reachableStreetsWarning,"hide"),this._reachableStreetsWarningMsg=c.substitute(this.i18n.reachableValidationMsg,{x:_.format(s,{locale:r.locale}),units:this._localizeMeasurementUnit(i)})):y.add(this._reachableStreetsWarning,"hide")},_displayWarningMessage:function(e){e.display?w.show(e.message,e.label):w.hide(e.label)},_warningIconsValidated:function(){return y.contains(this._unreachableAreasWarning,"hide")&&y.contains(this._reachableStreetsWarning,"hide")},_handleOverlapPolicyChange:function(e,t){this.set("overlapPolicy",t),y.remove(this._Overlap,"selected"),y.remove(this._Dissolve,"selected"),y.remove(this._Split,"selected"),y.add(e,"selected"),this._unreachableAreas.set("disabled","Split"===t),"Split"===t&&this._unreachableAreas.set("value",!1)},_save:function(){},_buildUI:function(){var e=!0;if(u.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),N.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!N.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),N.populateAnalysisLayers(this,"inputLayer","inputLayers")),N.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this.outputLayerInput.set("value",this.outputLayerName),e=!1),u.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,(function(e){this.folderStore=e,N.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),this.breakunits&&(this.breakUnits=this.breakunits),this.breakUnits?this._distanceUnitsSelect.set("value",this.breakUnits):this.distanceDefaultUnits&&this._distanceUnitsSelect.set("value",this.distanceDefaultUnits),this.breakValues&&(this.breakValues=s.map(this.breakValues,(function(e){return _.format(e)})),this._breakValuesInput.set("value",this.breakValues.join(" "))),u.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this._loadConnections(),N.populateTravelModes({selectWidget:this._drivingModeSelect,widget:this,separator:"-",selectDefaultMode:!0,value:this.travelMode}),this.timeOfDay){var t=this.travelMode&&N.isTrafficBasedTravelMode(this.travelMode);this._trafficTimeWidget.set("checked",t),t?(this._trafficTimeWidget.set("timeZoneForTimeOfDay",this.timeZoneForTimeOfDay),this._trafficTimeWidget.set("timeOfDay",this.timeOfDay),this.liveOffset&&this._trafficTimeWidget.set("liveOffset",this.liveOffset)):this._trafficTimeWidget.set("startDateAndTime",this.timeOfDay)}this.inputLayer&&this._updateAnalysisLayerUI(e),"Overlap"===this.overlapPolicy?i.hitch(this,"_handleOverlapPolicyChange",this._Overlap,"Overlap")():"Dissolve"===this.overlapPolicy?i.hitch(this,"_handleOverlapPolicyChange",this._Dissolve,"Dissolve")():"Split"===this.overlapPolicy&&i.hitch(this,"_handleOverlapPolicyChange",this._Split,"Split")(),a.connect(this._Overlap,"onclick",i.hitch(this,"_handleOverlapPolicyChange",this._Overlap,"Overlap")),a.connect(this._Dissolve,"onclick",i.hitch(this,"_handleOverlapPolicyChange",this._Dissolve,"Dissolve")),a.connect(this._Split,"onclick",i.hitch(this,"_handleOverlapPolicyChange",this._Split,"Split")),this._addBarrierLayersComponent.buildUI({pointBarrierLayer:this.pointBarrierLayer,pointBarriers:this.pointBarriers,lineBarrierLayer:this.lineBarrierLayer,lineBarriers:this.lineBarriers,polygonBarrierLayer:this.polygonBarrierLayer,polygonBarriers:this.polygonBarriers,forbiddenLayers:this.forbiddenLayers,showBrowseLayers:this.showBrowseLayers,map:this.get("map"),portalSelf:this.get("portalSelf"),portalUrl:this.get("portalUrl"),useArcGISComponents:this.useArcGISComponents,isSingleTenant:this.isSingleTenant}),"AwayFromFacility"===this.travelDirection?this._handleFacilityToDemandClick():"TowardsFacility"===this.travelDirection&&this._handleDemandToFacilityClick(),this._unreachableAreas.set("value",this.showHoles),this._reachableStreets.set("value",this.includeReachableStreets)},_updateAnalysisLayerUI:function(e){this.inputLayer&&(d.set(this._driveTimeDescription,"innerHTML",c.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),e&&this.set("outputLayerName"))},_handleAnalysisLayerChange:function(e){"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e,disabledSubResources:[this.inputLayer]},{tags:["point"],geometryTypes:[F.GeometryTypes.Point]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[e]),this.outputLayerName=null,this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&N.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).then(i.hitch(this,(function(e){e&&this._addBarrierLayersComponent.addNewBarrier(this.inputLayers[this.inputLayers.length-1])})))},validateTime:function(){},validateDistance:function(e){if(!this.limits)return!0;var t,a,n,r,l=this,h=[];return this.set("breakValues"),r=e||N.getMaxInputByMode({type:this._drivingModeSelect.get("value").replace("-",""),units:this._distanceUnitsSelect.get("value"),limits:this.limits,travelMode:this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value"))}),0!==(t=i.trim(this._breakValuesInput.get("value")).split(" ")).length&&(s.forEach(t,(function(e){return e=_.parse(e),isNaN(e)?(h.push(0),!1):r&&e>r?(h.push(0),!1):(a=_.format(e,{locale:"root"}),I.isDefined(a)?I.isDefined(a)||(a=_.format(e,{locale:"en-us"})):a=_.format(e,{locale:"en"}),I.isDefined(a)&&(n=i.trim(a).match(/\D/g)),void(n&&s.forEach(n,(function(e){"."===e||","===e?h.push(1):"-"===e&&"polygon"===l.inputType?h.push(1):h.push(0)}))))})),-1===s.indexOf(h,0)||(this._breakValuesInput.focus(),!1))},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1)),this.own(this.on("travelmodes-added",i.hitch(this,(function(){a.connect(this._drivingModeSelect,"onChange",i.hitch(this,this._handleDistanceTypeChange)),i.hitch(this,this._handleDistanceTypeChange,this._drivingModeSelect.get("value"),I.isDefined(this.breakUnits))()})))),a.connect(this._Overlap,"onclick",i.hitch(this,"_handleOverlapPolicyChange",this._Overlap,"Overlap")),a.connect(this._Dissolve,"onclick",i.hitch(this,"_handleOverlapPolicyChange",this._Dissolve,"Dissolve")),a.connect(this._Split,"onclick",i.hitch(this,"_handleOverlapPolicyChange",this._Split,"Split")),this.own(this._addBarrierLayersComponent.on("add-ready-to-use-layer",i.hitch(this,(function(e){this.emit("add-ready-to-use-layer",e)})))),this.own(h(this._unreachableAreasWarning,"click",i.hitch(this,(function(e){this._displayWarningMessage({display:!0,message:this._unreachableAreasWarningMsg,label:this._unreachableAreasWarning})}))),h(this._unreachableAreasWarning,"blur",i.hitch(this,(function(e){this._displayWarningMessage({display:!1,label:this._unreachableAreasWarning})}))),h(this._reachableStreetsWarning,"click",i.hitch(this,(function(e){this._displayWarningMessage({display:!0,message:this._reachableStreetsWarningMsg,label:this._reachableStreetsWarning})}))),h(this._reachableStreetsWarning,"blur",i.hitch(this,(function(e){this._displayWarningMessage({display:!1,label:this._reachableStreetsWarning})}))))},_handleFacilityToDemandClick:function(){y.add(this._facilitytodemand,"selected"),y.remove(this._demandtofacility,"selected")},_handleDemandToFacilityClick:function(){y.remove(this._facilitytodemand,"selected"),y.add(this._demandtofacility,"selected")},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){I.isDefined(e)&&e.geometryType===F.GeometryTypes.Point&&(this.inputLayer=e,this.forbiddenLayers=[this.inputLayer],this._addBarrierLayersComponent&&this._addBarrierLayersComponent.updateOptions(this.forbiddenLayers))},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(e){this.inputLayers=e||[]},_setOverlapPolicyAttr:function(e){this.overlapPolicy=e},_getOverlapPolicyAttr:function(){return this.overlapPolicy},_setBreakValuesAttr:function(e){if(e)this.breakValues=e;else{var t=i.trim(this._breakValuesInput.get("value")).split(" "),a=[];s.forEach(t,(function(e){a.push(_.parse(e))})),this.breakValues=a}},_getBreakValuesAttr:function(){return this.breakValues},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_getTravelModeAttr:function(){return this.travelMode},_setTravelModeAttr:function(e){this._set("travelMode",e)},validateServiceName:function(e){return N.validateServiceName(e,{textInput:this.outputLayerInput})},_setBreakUnitsAttr:function(e){this.breakUnits=e},_getBreakUnitsAttr:function(){return this.breakUnits},_setDistanceDefaultUnitsAttr:function(e){this.distanceDefaultUnits=e},_getDistanceDefaultUnitsAttr:function(){return this.distanceDefaultUnits},_setOutputLayerNameAttr:function(e){var t,i,a,n,r,l;n=[this.i18n.seconds,this.i18n.minutes,this.i18n.hours,this.i18n.miles,this.i18n.meters,this.i18n.kilometers,this.i18n.feet,this.i18n.yards],0!==this._distanceUnitsSelect.getOptions().length&&(r=this._distanceUnitsSelect.getOptions(this._distanceUnitsSelect.get("value"))&&this._distanceUnitsSelect.getOptions(this._distanceUnitsSelect.get("value")).label,this._drivingModeSelect.getOptions(this._drivingModeSelect.get("value")),l=this.i18n.other,e?(this.outputLayerName=e,this.outputLayerInput.set("value",e)):this._breakValuesInput&&(!this.outputLayerName&&this.inputLayer&&r?this.outputLayerName=c.substitute(this.i18n.outputModeLayerName,{mode:l,layername:this.inputLayer.name,breakValues:this._breakValuesInput.get("value"),breakUnits:r}):(this.outputLayerName=this.outputLayerInput.get("value"),-1!==this.outputLayerName.lastIndexOf("(")&&(t=this.outputLayerName.substring(0,this.outputLayerName.lastIndexOf("(")),a=c.trim(this.outputLayerName.substring(this.outputLayerName.lastIndexOf(" "),this.outputLayerName.lastIndexOf(")"))),-1!==s.indexOf(n,a)&&r&&(i=t+"(${breakValues} ${breakUnits})",this.outputLayerName=c.substitute(i,{breakValues:this._breakValuesInput.get("value"),breakUnits:r})))),this.outputLayerInput.set("value",this.outputLayerName)))},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))}});return l("extend-esri")&&i.setObject("dijit.analysis.CreateDriveTimeAreas",J,B),J}));