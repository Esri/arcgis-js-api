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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","dojo/on","dojo/query","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","./_ScrollSupport","./_ZoomSupport","./_HiddenContentSupport","./utils/MobileGesturesUtil","./utils/ComparisonSectionProcessor","../supportClasses/DocumentOptions","./supportClasses/BenchmarkController","./supportClasses/AreaToolbarBuilder","../../dataProvider/supportClasses/areas/AnalysisAreaUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/WaitingUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","dojo/text!../templates/ReportContainerStackAll.html","dojo/i18n!esri/nls/jsapi"],(function(e,t,n,i,o,s,r,a,h,l,d,c,u,p,g,m,_,f,C,b,y,S,I,A,x,v){v=v.geoenrichment.dijit.ReportPlayer.ReportContainerStackAll;var w={_reportID:null,_settings:null,_globalSettings:{},getSettings:function(e){var n=e.dynamicReportInfo.reportObject,i=e.dynamicReportInfo.templateJson.documentOptions;return this._reportID===n.reportID&&this._settings||(this._settings=t.mixin({},this._globalSettings),this._settings.scale=i.defaultComparisonZoom||void 0),this._reportID=n.reportID,t.clone(this._settings)},saveSettings:function(e,t){this._reportID=e.dynamicReportInfo.reportObject.reportID,this._settings=t,this._globalSettings.splitPanels=!!t.splitPanels,this._globalSettings.hideBackgroundImage=!!t.hideBackgroundImage},_benchmarkIndex:0,getBenchmarkIndex:function(){return this._benchmarkIndex},saveBenchmarkIndex:function(e){this._benchmarkIndex=e}};return e([h,l,d,c,u],{templateString:x,nls:v,isReportContainerStackAll:!0,viewModel:null,theme:null,parentWidget:null,renderOptions:null,documentOptions:null,comparisonSettings:null,_reportContainers:null,_pendingJsons:null,_benchmarkController:null,_hiddenAreas:null,postCreate:function(){var e=this;this.inherited(arguments),this.renderOptions=t.mixin({center:!1,minTop:0,minRight:0,minBottom:0,minLeft:0},this.renderOptions),this.documentOptions={},this._reportContainers={},this._pendingJsons=[],this._hiddenAreas={},this.comparisonSettings&&w.saveSettings(this.viewModel,this.comparisonSettings),this._benchmarkController=new _({areaIndex:w.getBenchmarkIndex(),onChanged:function(){w.saveBenchmarkIndex(e._benchmarkController.getAreaIndex()),e._updateInnerContainers({keepZoom:!0})}}),this.own(this._benchmarkController),this.viewModel.registerBenchmarkController(this._benchmarkController),y.hide(this.waitingNode),this._updateEmptyState(),b.isMobileDevice()&&p.enableMobileGestures(this),o(this.domNode,"scroll",(function(){e._updateLabelsPosition()}))},resize:function(e,t){this.domNode.style.width=e?e+"px":"auto",this.domNode.style.height=t?t+"px":"auto"},setMaxWidth:function(e){this.domNode.style.maxWidth=e+"px"},setMaxHeight:function(e){this.domNode.style.maxHeight=e+"px"},_maxPanelWidth:null,getCurrentPageDim:function(){return{w:this._maxPanelWidth,h:1e6}},_calcMaxPanelSize:function(){this._maxPanelWidth=0;var e=this.getInnerContainers({noHidden:!0});e.length&&(e.forEach((function(e){this._maxPanelWidth+=e.getCurrentPageDim().w}),this),this._maxPanelWidth+=30*(e.length-1))},notifyShown:function(){if(!this._isFromJSONBeingCollectedFlag&&!this._isFromJSONBeingAppliedFlag)if(this._pendingJsons.length){if(!this._canApplyJson())return;this._fromJSONFinal(),this.onPendingDataApplied()}else this.getInnerContainers().forEach((function(e){e.notifyShown()}))},_isFromJSONBeingCollectedFlag:!1,_isFromJSONBeingAppliedFlag:!1,fromJson:function(e,t){return this._isFromJSONBeingCollectedFlag=!t.isFinalArea,e._index=t.analysisAreaIndex,this._pendingJsons.push(e),t.isFinalArea&&this._canApplyJson()&&this._fromJSONFinal()},_canApplyJson:function(){return y.isNodeInLayout(this.domNode)},_fromJSONFinal:function(){var e=this;return this._isFromJSONBeingAppliedFlag=!0,this._pendingJsons.sort((function(e,t){return e._index-t._index})),A.executeFunctions(this._pendingJsons.map((function(t){return function(){e._createInnerContainer(t,t._index)}})),100).then((function(){return e._pendingJsons.length=0,e._refresh().then((function(){e._isFromJSONBeingAppliedFlag=!1}))}))},_createInnerContainer:function(e,t){var n=a.create("div",{class:"innerContainerRoot"},this.innerContainersDiv),i=this.viewModel.layoutBuilder.createElement("reportContainerStack",{viewModel:this.viewModel,theme:this.theme,parentWidget:this,currentFeatureIndex:t,isVertical:!0,isScalable:!1,canShowEmptyState:!1,sectionJsonsProcessor:g.getProcessor(this),hideBackgroundImage:this.getComparisonSettings().hideBackgroundImage},n);i.__root=n,this._reportContainers[t]=i;var o=i.fromJson(e);return this._refresh(),o},_isBeingUpdatedPromise:!1,_pendingUpdateParams:null,_updateInnerContainers:function(e){e=e||{};var t=this;return this._isBeingUpdatedPromise?(this._pendingUpdateParams=e,this._isBeingUpdatedPromise):(this._pendingUpdateParams=null,this._isBeingUpdatedPromise=this._showWaiting(n(this.getInnerContainers().map((function(t){return t.refresh(e)}))).then((function(){t._doRefresh({keepZoom:e.keepZoom})})).then((function(){if(e.rebuildStack&&y.isNodeInLayout(t.domNode)&&t.notifyShown(),t._isBeingUpdatedPromise=null,t._pendingUpdateParams)return t._updateInnerContainers(t._pendingUpdateParams);t.emitZoomChangedEvent()}))))},_refresh:function(){return this.domNode.style.opacity="0.001",S.invoke(this,"_doRefresh").then(function(){this.domNode.style.opacity=""}.bind(this))},_doRefresh:function(e){e=e||{};this.getInnerContainers().forEach((function(e){e.__root.parentNode===this.innerContainersDiv&&this.innerContainersDiv.removeChild(e.__root)}),this),this.getInnerContainers({noHidden:!0}).forEach((function(e,t){this.innerContainersDiv.appendChild(e.__root)}),this),this._calcMaxPanelSize(),this._updateEmptyState(),this._updateGroupLabels(),!e.keepZoom&&this.setBestZoom(),this._syncFillerContainer(),this._syncBenchmarkForVisibleAreas()},_updateGroupLabels:function(){var e=this;this.groupLabelsContainer.innerHTML="";var t=C.groupAreas({analysisAreas:this.viewModel.dynamicReportInfo.analysisAreas,combinedAreasInfo:this.viewModel.dynamicReportInfo.combinedAreasInfo,filter:function(t){return!e._hiddenAreas[t.index]}});f.sanitize(e),t.groupInfos.forEach((function(n){f.buildGroupToolbar(n,{reportContainer:e,elementSize:e.getInnerContainers()[0].getCurrentPageDim().w,groupLabelsContainer:e.groupLabelsContainer,gap:30,showGroupLabels:!t.isOnlyAreasInOnlyGroup,numVisibleAreas:e.getVisibleAreas().length,benchmarkController:e._benchmarkController,onRemoveArea:function(t){e._benchmarkController.getAreaIndex()===t.index&&e._benchmarkController.setAreaIndex(-1);var n={};n[t.index]=!1,e.setAreasVisibilityState(n,{append:!0,canSwitchToSingleView:!0})}})})),this._updateLabelsPosition()},_updateEmptyState:function(){var e=this.getInnerContainers({noHidden:!0}),t=!e.length||e.some((function(e){return e.isEmpty()}));y[t?"show":"hide"](this.emptyPlaceholder),y[t?"hide":"show"](this.groupLabelsContainer),this.fillerContainer.style.opacity=t?"0.001":""},_syncFillerContainer:function(){this.inherited(arguments),this._updateLabelsPosition();var e=10;this.documentOptions={pagesize:m.combineCustomSizeString(this.scalableContainer.clientWidth,this.scalableContainer.clientHeight,"px"),orientation:"landscape",left:e,right:e,top:0,bottom:0}},_updateLabelsPosition:function(){this.groupLabelsContainer.style.top=this.domNode.scrollTop+"px",this.groupLabelsContainer.style.display="none",this.groupLabelsContainer.style.width=this.domNode.scrollWidth-26+"px",this.groupLabelsContainer.style.display="",s(".innerContainerRoot_groupLabelContainer",this.groupLabelsContainer).forEach((function(e){e.clientWidth;e._unscaledWidth=e._unscaledWidth||e.clientWidth,e.style.width=e._unscaledWidth*this.getZoomInfo().scale+"px"}),this),s(".innerContainerRoot_areaLabelContainer",this.groupLabelsContainer).forEach((function(e){e.clientWidth;e._unscaledWidth=e._unscaledWidth||e.clientWidth,e.style.width=e._unscaledWidth*this.getZoomInfo().scale+"px",r[e.clientWidth<e.children[0].children[0].clientWidth+150?"add":"remove"](e,"isCompactView")}),this),this.groupLabelsContainerFiller.style.height=this.groupLabelsContainer.clientHeight/this.getZoomInfo().scale+"px"},getAreasVisibilityState:function(){var e={};return this.viewModel.dynamicReportInfo.analysisAreas.forEach((function(t){e[t.index]=!t.hidden&&!this._hiddenAreas[t.index]}),this),e},setAreasVisibilityState:function(e,n){n=n||{};var i=this;function o(){return i.viewModel.dynamicReportInfo.analysisAreas.map((function(e){return!e.hidden&&!i._hiddenAreas[e.index]}))}var s=o();e=e||{};var r={};for(var a in e)r[a]=!e[a];n.append?t.mixin(this._hiddenAreas,r):this._hiddenAreas=r,this._doRefresh(),o().forEach((function(e,t){e&&e!==s[t]&&i._reportContainers[t].refresh()})),n.canSwitchToSingleView&&this.getInnerContainers({noHidden:!0}).length<=1?this.onSwitchToSingleAreaView():this._syncBenchmarkForVisibleAreas()},_syncBenchmarkForVisibleAreas:function(){var e=this.getVisibleAreas().length>1;!(this._benchmarkController.getAreaIndex()>=0)||this.getAreasVisibilityState()[this._benchmarkController.getAreaIndex()]&&e||this._benchmarkController.setAreaIndex(-1)},getComparisonSettings:function(){return w.getSettings(this.viewModel)},setComparisonSettings:function(e){var n=t.mixin({splitPanels:!1},this.getComparisonSettings());return w.saveSettings(this.viewModel,e),this._benchmarkController.setNoTextLimit(e.splitPanels),this._updateInnerContainers({rebuildStack:!0,hideBackgroundImage:this.getComparisonSettings().hideBackgroundImage,keepZoom:n.splitPanels===e.splitPanels})},getInnerContainers:function(e){var t=e&&e.noHidden,n=Object.keys(this._reportContainers);n.sort();var i=[];return n.forEach((function(e){t&&this._hiddenAreas[e]||i.push(this._reportContainers[e])}),this),i},getSections:function(){var e=[];return this.getInnerContainers().forEach((function(t){e=e.concat(t.infographicPage.getSections())})),e},_sectionToInfographicPage:function(e){var t;return this.getInnerContainers().some((function(n){if(-1!==n.infographicPage.getSections().indexOf(e))return t=n.infographicPage,!0})),t},getNumberOfPages:function(){return 1},getVisibleAreas:function(){return this.viewModel.dynamicReportInfo.analysisAreas.filter((function(e){return!e.hidden&&!this._hiddenAreas[e.index]}),this)},getVisualState:function(){return{type:"reportContainerStackAll",comparisonSettings:this.getComparisonSettings(),hiddenAreas:t.clone(this._hiddenAreas),innerContainers:this.getInnerContainers().map((function(e){return e.getVisualState()})),benchmarkAreaIndex:this._benchmarkController.getAreaIndex()}},setVisualState:function(e){var t=this;if(e&&e.innerContainers)return this._hiddenAreas=e.hiddenAreas||{},this._benchmarkController.setAreaIndex(e.benchmarkAreaIndex),i(this.setComparisonSettings(e.comparisonSettings),(function(){var n=t.getInnerContainers();e.innerContainers.forEach((function(e,t){n[t]&&n[t].setVisualState(e)}))}))},_isPrinted:!1,setPrinted:function(e){this._isPrinted=e;var t=e?this.viewModel.getDocumentDefaultStyles().color:"";this.groupLabelsContainer.style.color=t;for(var n=s(".innerContainerRoot_groupLabelUnderline",this.domNode),i=0;i<n.length;i++)n[i].style.borderLeftColor=t,n[i].style.borderTopColor=t,n[i].style.borderRightColor=t},_showWaiting:function(e){var t=this;return this.fillerContainer.style.opacity="0.001",this.groupLabelsContainer.style.opacity="0.001",this.waitingNode.style.position="absolute",this.waitingNode.style.height=this.domNode.clientHeight+"px",this.waitingNode.style.width=this.domNode.clientWidth+"px",this.waitingNode.style.left=this.domNode.scrollLeft+"px",this.waitingNode.style.top=this.domNode.scrollTop+"px",y.show(this.waitingNode),I.showProgressPromise(this.waitingNode,e,{progressClass:"esriGEReportPlayerProgress"}).then((function(){y.hide(t.waitingNode),t.fillerContainer.style.opacity="",t.groupLabelsContainer.style.opacity=""}))},onPendingDataApplied:function(){},onSwitchToSingleAreaView:function(){},destroy:function(){f.sanitize(this),this.getInnerContainers().forEach((function(e){e.destroy()})),this._reportContainers=null,this.inherited(arguments)}})}));