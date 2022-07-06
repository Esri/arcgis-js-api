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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/fx/easing","dojox/lang/functional/object","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","../../kernel","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./AnalysisToggleButton","./GroupToggleButton","./utils","./AnalysisRegistry","dojo/i18n!../../nls/jsapi","dojo/text!./templates/OverlayLayers.html"],(function(e,t,s,i,a,r,n,o,l,h,y,u,p,c,d,_,L,v,m,g,T,f,b,S,O,I,P,C,B,A,w,F,k,x,j,G,N,E,M,U,D){var R=t([v,m,g,T,f,x,k],{declaredClass:"esri.dijit.analysis.OverlayLayers",templateString:D,widgetsInTemplate:!0,inputLayer:null,overlayLayer:null,overlayType:"intersect",tolerance:0,snapToInput:!1,outputLayerName:null,outputType:"Input",i18n:null,toolName:"OverlayLayers",helpFileName:"OverlayLayers",resultParameter:"Outputlayer",removeJobParamKeys:["overlayExpressionObject"],operators:{Intersect:"Intersect",Erase:"Erase",Union:"Union",Identity:"Identity",Symmetrical:"SymmetricalDifference"},constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,U.overlayLayersTool)},postCreate:function(){this.inherited(arguments),d.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"},{layer:"overlayLayer",select:this._overlayFeaturesSelect,expressionObj:"overlayExpressionObject"}],this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_buildJobParams:function(){var e,t={};if(t.inputLayer=r.toJson(this.constructAnalysisInputLyrObj(this.inputLayer,this.showGeoAnalyticsParams)),"0"!==this._overlayFeaturesSelect.get("value")){var s=this.overlayLayers[this._overlayFeaturesSelect.get("value")-1];t.overlayLayer=r.toJson(this.constructAnalysisInputLyrObj(s,this.showGeoAnalyticsParams))}return t.overlayType=this.get("overlayType"),this.returnFeatureCollection||(t.OutputName=r.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showGeoAnalyticsParams||("intersect"===this.overlayType&&(t.outputType=this._outputTypeSelect.get("value")),0!==this.tolerance&&(t.tolerance=this.tolerance),t.snapToInput=this.snapToInput),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),t.context=r.toJson(e)),this._updateJobFilterAndSelection(t)},_handleSaveBtnClick:function(e){if(this._form.validate()){var t={};this._saveBtn.set("disabled",!0),t.jobParams=this._buildJobParams(),t.itemParams={description:this.i18n.itemDescription,tags:h.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(t.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(this.resultParameter="output",t.isSpatioTemporalDataStore=!0),this.execute(t)}},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(s.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_save:function(){},_sortbyGeometryType:function(e,t){return this.isPolygon(e.geometryType)?-1:this.isPolygon(t.geometryType)?1:this.isLine(e.geometryType)?-1:this.isLine(t.geometryType)?1:this.isPoint(e.geometryType)?-1:this.isPoint(t.geometryType)?1:void 0},filterOverlayLayers:function(e,t){var s=[];return i.forEach(e,(function(e){e.geometryType===t&&s.push(e)})),s},_buildUI:function(){var e=!0;this.signInPromise.then(s.hitch(this,E.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.showGeoAnalyticsParams&&(u.set(this._analysisFieldHelpLink,"esriHelpTopic","overlayLayer"),u.set(this._outputLayerHelpNode,"esriHelpTopic","outputLayer")),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!E.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),E.populateAnalysisLayers(this,"inputLayer","inputLayers")),this.overlayLayers&&this.overlayLayer&&!E.isLayerInLayers(this.overlayLayer,this.overlayLayers)&&this.overlayLayers.push(this.overlayLayer),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),(this.overlayLayer||this.rerun)&&(e=!1),this.inputLayer&&this._updateAnalysisLayerUI(e),E.addReadyToUseLayerOption(this,[this._analysisSelect,this._overlayFeaturesSelect]),y.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(e){this.folderStore=e,E.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),this.updateUIForGeoAnalytics(),this.showGeoAnalyticsParams&&(this.inputLayer&&this.overlayLayer?(this._filterOutOperators(this.overlayLayer),this._operatorsSelect.set("value",this.overlayType)):this._updateOperatorOptions()),y.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),y.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.showGeoAnalyticsParams||E.updateDisplay([this._eraseBtnCell],this.isServerAdvanceLicensed,"table-cell"),this._operatorsSelect.set("required",this.showGeoAnalyticsParams),this._createFilterAndSelections(),this._loadConnections()},_updateAnalysisLayerUI:function(e){if(this.inputLayer&&u.set(this._overlaylayersToolDescription,"innerHTML",h.substitute(this.i18n.overlayDefine,{layername:this.inputLayer.name})),this.overlayLayers){this.overlayLayers.sort(s.hitch(this,this._sortbyGeometryType));var t=i.some(this._overlayFeaturesSelect.getOptions(),(function(e){return"browse"===e.value}),this),a=i.some(this._overlayFeaturesSelect.getOptions(),(function(e){return"browselayers"===e.value}),this),r=[],n=this._overlayFeaturesSelect.get("value");this._overlayFeaturesSelect.removeOption(this._overlayFeaturesSelect.getOptions()),this.rerun&&!this.overlayLayers&&E.addBlankOption(this._overlayFeaturesSelect,r);var o=this.overlayLayers.concat([]);i.forEach(o,(function(t,s){var i=!0;t.url&&this.inputLayer.url&&t.url!==this.inputLayer.url?i=!1:this.inputLayer===t||t.analysisReady&&this.inputLayer.analysisReady||(i=!1),!i&&(this.isPolygon(t.geometryType)||this.isPoint(t.geometryType)||this.isLine(t.geometryType))&&r.push({value:s+1,label:t.name,selected:this.overlayLayer&&!e&&(this.overlayLayer.url&&t.url&&t.url===this.overlayLayer.url||this.overlayLayer.name===t.name)})}),this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||t||a)&&r.push({type:"separator",value:""}),this._overlayFeaturesSelect.addOption(r),E.addBrowseOptionForTool({select:this._overlayFeaturesSelect,disableLAAL:!1},this),e&&this._overlayFeaturesSelect.set("value",n),this._handleLayerChange(this._overlayFeaturesSelect.get("value"))}this.overlayType&&("intersect"===this.overlayType?(this._intersectBtn.set("checked",!0),this._handleIntersectBtnClick()):"union"===this.overlayType?(this._unionBtn.set("checked",!0),this._handleUnionBtnClick()):"erase"===this.overlayType&&(this._eraseBtn.set("checked",!0),this._handleEraseBtnClick())),this.outputType&&this._outputTypeSelect.set("value",this.outputType),!e&&this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName),this.updateUIForGeoAnalytics()},_handleAnalysisLayerChange:function(e){this._checkBrowseLayer(e,!0)||(this.inputLayer=this.inputLayers[e],this._updateAnalysisLayerUI(!0))},updateUIForGeoAnalytics:function(){this.showGeoAnalyticsParams&&(y.set(this._operatorsGrid,"display","none"),y.set(this._outputTypeTable,"display","none"),d.add(this._intersectBtnCell,"gaxOverlayTypeCell"),d.add(this._eraseBtnCell,"gaxOverlayTypeCell"),d.remove(this._operatorsDropdown,"hide"))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&E.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.overlayLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._overlayFeaturesSelect,browseDialog:e.dialog||this._browsedlg,posIncrement:this._isAnalysisSelect?0:1,widget:this},t).always(s.hitch(this,(function(e){this._isAnalysisSelect&&(this.inputLayer=this.inputLayers[this._analysisSelect.get("value")],this.inputLayer&&(i.some(this.overlayLayers,(function(e){return e&&e.analysisReady&&this.inputLayer.analysisReady&&e.itemId===this.inputLayer.itemId}),this)||this.overlayLayers.push(this.inputLayer)));this._isAnalysisSelect&&this._handleAnalysisLayerChange(this._analysisSelect.get("value"))})))},_checkBrowseLayer:function(e,t){return this._isAnalysisSelect=t,("browse"===e||"browselayers"===e)&&(this._filterLayersForGeometryType(t,e),!0)},_filterLayersForGeometryType:function(e,t){e?this._createBrowseItems({browseValue:t,disabledSubResources:[this.inputLayer]},{tags:["point","polygon","line"],geometryTypes:[M.GeometryTypes.Point,M.GeometryTypes.Polygon,M.GeometryTypes.Line]},this._analysisSelect):this._createBrowseItems({browseValue:t,disabledSubResources:[this.inputLayer,this.overlayLayers]},{tags:["point","polygon","line"],geometryTypes:[M.GeometryTypes.Point,M.GeometryTypes.Polygon,M.GeometryTypes.Line]},this._overlayFeaturesSelect)},_getInputLivingAtlasType:function(){if(this.inputLayer){if(this.isPoint(this._getGeometryType()))return["point"];if(this.isPolygon(this._getGeometryType()))return["polygon"];if(this.isLine(this._getGeometryType()))return["line"]}return["point","polygon","line"]},_getGeometryType:function(){return this.inputLayer?[this.inputLayer.geometryType]:[M.GeometryTypes.Point,M.GeometryTypes.Polygon,M.GeometryTypes.Line]},isPolygon:function(e){return M.GeometryTypes.Polygon===e},isPoint:function(e){return M.GeometryTypes.Point===e},isLine:function(e){return M.GeometryTypes.Line===e},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1))},_handleLayerChange:function(e){var t,s,i,a;this._checkBrowseLayer(e,!1)||(t=this.overlayLayers[e-1],this.overlayLayer=t,s=!1,a=this.get("overlayType"),t&&this.inputLayer&&(i=!this.isPolygon(this.inputLayer.geometryType)||!this.isPolygon(t.geometryType),this._unionBtn.set("disabled",i),this._unionBtn.set("iconClass",i?"unionLayersDisabledIcon":"unionLayersIcon"),this.isPolygon(this.inputLayer.geometryType)?s=this.isPolygon(this.inputLayer.geometryType)&&!this.isPolygon(t.geometryType):this.isLine(this.inputLayer.geometryType)?s=this.isLine(this.inputLayer.geometryType)&&this.isPoint(t.geometryType):this.isLine(this.inputLayer.geometryType)&&(s=!0),this._eraseBtn.set("disabled",s),this._eraseBtn.set("iconClass",s?"eraseLayersDisabledIcon":"eraseLayersIcon"),"union"!==a||this.isPolygon(this.inputLayer.geometryType)&&this.isPolygon(t.geometryType)?"erase"===a&&this.isLine(this.inputLayer.geometryType)&&this.isPoint(t.geometryType)?(this._showMessages(this.i18n.notSupportedEraseOverlayMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick()):"erase"===a&&this.isPolygon(this.inputLayer.geometryType)&&!this.isPolygon(t.geometryType)?(this._showMessages(this.i18n.notSupportedEraseOverlayMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick()):"intersect"===a?this._handleIntersectBtnCtrClick():"union"===a?this._handleUnionBtnCtrClick():"erase"===a&&this._handleEraseBtnCtrClick():(this._showMessages(this.i18n.overlayLayerPolyMsg),this._intersectBtn.set("checked",!0),this._handleIntersectBtnCtrClick()),this.showGeoAnalyticsParams&&this._filterOutOperators(t))),this.updateUIForGeoAnalytics()},_handleOperatorChange:function(e){var t="";switch(this.set("overlayType",e),e){case this.operators.Intersect:t=this.i18n.intersectOutputLyrName;break;case this.operators.Erase:t=this.i18n.eraseOutputLyrName;break;case this.operators.Union:t=this.i18n.unionOutputLyrName;break;case this.operators.Identity:t=this.i18n.identityOutputLyrName;break;case this.operators.Symmetrical:t=this.i18n.symmetricalOutputLyrName}this._outputLayerInput.set("value",this._getOutputLayerName(t))},_filterOutOperators:function(e){E.isPolygon(this.inputLayer)?E.isPolygon(e)?this._updateOperatorOptions():E.isLine(e)?this._updateOperatorOptions([this.operators.Intersect]):E.isPoint(e)&&this._updateOperatorOptions([this.operators.Intersect]):E.isLine(this.inputLayer)?E.isPolygon(e)?this._updateOperatorOptions([this.operators.Intersect,this.operators.Identity]):E.isLine(e)?this._updateOperatorOptions([this.operators.Intersect,this.operators.Erase,this.operators.Identity,this.operators.Symmetrical]):E.isPoint(e)&&this._updateOperatorOptions([this.operators.Intersect]):E.isPoint(this.inputLayer)&&(E.isPolygon(e)?this._updateOperatorOptions([this.operators.Intersect,this.operators.Identity]):E.isLine(e)?this._updateOperatorOptions([this.operators.Intersect]):E.isPoint(e)&&this._updateOperatorOptions([this.operators.Intersect,this.operators.Erase,this.operators.Identity,this.operators.Symmetrical]))},_updateOperatorOptions:function(e){var t={Intersect:{value:this.operators.Intersect,label:"<div class='esriFloatLeading intersectLayersIcon'></div><div class='esriLeadingMargin4' style='height:20px;margin-top:10px;'>"+this.i18n.intersect+"</div>",selected:!0},Erase:{value:this.operators.Erase,label:"<div class='esriFloatLeading eraseLayersIcon'></div><div class='esriLeadingMargin4' style='height:20px;margin-top:10px;'>"+this.i18n.erase+"</div>"},Union:{value:this.operators.Union,label:"<div class='esriFloatLeading unionLayersIcon'></div><div class='esriLeadingMargin4' style='height:20px;margin-top:10px;'>"+this.i18n.union+"</div>"},Identity:{value:this.operators.Identity,label:"<div class='esriFloatLeading identityLayersIcon'></div><div class='esriLeadingMargin4' style='height:20px;margin-top:10px;'>"+this.i18n.identity+"</div>"},SymmetricalDifference:{value:this.operators.Symmetrical,label:"<div class='esriFloatLeading symmetricalDifferenceLayersIcon'></div><div class='esriLeadingMargin4' style='height:20px;margin-top:10px;'>"+this.i18n.symmetrical+"</div>"}},s=[];e&&0!==e.length&&e.length?e.length>0&&e.forEach((function(e){var i=t[e];i&&s.push(i)})):s=L.values(t),E.updateOptions(this._operatorsSelect,s)},_showMessages:function(e){u.set(this._bodyNode,"innerHTML",e),n.fadeIn({node:this._errorMessagePane,easing:_.quadIn,onEnd:s.hitch(this,(function(){y.set(this._errorMessagePane,{display:""})}))}).play(),window.setTimeout(s.hitch(this,this._handleCloseMsg),3e3)},_handleCloseMsg:function(e){e&&e.preventDefault(),n.fadeOut({node:this._errorMessagePane,easing:_.quadOut,onEnd:s.hitch(this,(function(){y.set(this._errorMessagePane,{display:"none"})}))}).play()},_updateOutputType:function(){var e,t;"0"!==this._overlayFeaturesSelect.get("value")&&(e=this.overlayLayers[this._overlayFeaturesSelect.get("value")-1]),t=this.isPoint(this.inputLayer.geometryType)||this.inputLayer.geometryType===M.GeometryTypes.MultiPoint||this.isPoint(e.geometryType)||e.geometryType===M.GeometryTypes.MultiPoint,y.set(this._outputTypeTable,"display","table"),this._outputTypeSelect.removeOption(this._outputTypeSelect.getOptions()),this._outputTypeSelect.set("disabled",t),t?d.add(this._outputTypeLabel,"esriAnalysisTextDisabled"):d.remove(this._outputTypeLabel,"esriAnalysisTextDisabled"),t?this._outputTypeSelect.addOption({value:"Input",label:this.i18n.points}):this.isLine(this.inputLayer.geometryType)&&this.isLine(e.geometryType)?this._outputTypeSelect.addOption([{value:"Point",label:this.i18n.points,selected:!0},{value:"Input",label:this.i18n.lines}]):this.isPolygon(this.inputLayer.geometryType)&&this.isPolygon(e.geometryType)?this._outputTypeSelect.addOption([{value:"Point",label:this.i18n.points},{value:"Line",label:this.i18n.lines},{value:"Input",label:this.i18n.areas,selected:!0}]):this.isLine(this.inputLayer.geometryType)&&this.isPolygon(e.geometryType)?this._outputTypeSelect.addOption([{value:"Point",label:this.i18n.points,selected:!0},{value:"Input",label:this.i18n.lines}]):this.isPolygon(this.inputLayer.geometryType)&&this.isLine(e.geometryType)&&this._outputTypeSelect.addOption([{value:"Point",label:this.i18n.points,selected:!0},{value:"Input",label:this.i18n.lines}])},_handleUnionBtnCtrClick:function(){this._unionBtnCtr.set("checked",!0),this._unionBtn.set("checked",!0),y.set(this._outputTypeTable,"display","none"),this._outputTypeSelect.set("disabled",!0),d.add(this._outputTypeLabel,"esriAnalysisTextDisabled"),this._handleUnionBtnClick()},_handleIntersectBtnCtrClick:function(){this._intersectBtnCtr.set("checked",!0),this._intersectBtn.set("checked",!0),this.overlayLayers[this._overlayFeaturesSelect.get("value")-1],this._handleIntersectBtnClick(),this.showGeoAnalyticsParams||this._updateOutputType(),this.updateUIForGeoAnalytics()},_handleEraseBtnCtrClick:function(){this._eraseBtnCtr.set("checked",!0),this._eraseBtn.set("checked",!0),y.set(this._outputTypeTable,"display","none"),this._outputTypeSelect.set("disabled",!0),d.add(this._outputTypeLabel,"esriAnalysisTextDisabled"),this._handleEraseBtnClick()},_handleUnionBtnClick:function(e){this._canSelectOverlayType()||(this._outputLayerInput.set("value",this._getOutputLayerName(this.i18n.unionOutputLyrName)),this._unionBtn.focus(),this.set("OverlayType","union"))},_handleEraseBtnClick:function(e){this._canSelectOverlayType()||(this._outputLayerInput.set("value",this._getOutputLayerName(this.i18n.eraseOutputLyrName)),this._eraseBtn.focus(),this.set("OverlayType","erase"))},_handleIntersectBtnClick:function(e){this._canSelectOverlayType()||(this._outputLayerInput.set("value",this._getOutputLayerName(this.i18n.intersectOutputLyrName)),this._intersectBtn.focus(),this.set("OverlayType","intersect"))},_getOutputLayerName:function(e){var t=this.overlayLayers[this._overlayFeaturesSelect.get("value")-1].name;return h.substitute(e,{layername:this.inputLayer.name,overlayname:t})},_canSelectOverlayType:function(){return"browse"===this._overlayFeaturesSelect.get("value")||"browselayers"===this._overlayFeaturesSelect.get("value")||""===this._overlayFeaturesSelect.get("value")||!this.inputLayer},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){this.inputLayer=e},_setInputLayersAttr:function(e){this.inputLayers=e||[]},_setOverlayLayersAttr:function(e){this.overlayLayers=e},_setOverlayLayerAttr:function(e){this.overlayLayer=e},_setOverlayTypeAttr:function(e){this.overlayType=e},_getOverlayTypeAttr:function(){return this.overlayType},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_setOutputTypeAttr:function(e){this.outputType=e},_getOutputTypeAttr:function(){return this.outputType},validateServiceName:function(e){return E.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(e,t,s){this._pbConnects.push(a.connect(e,t,s))}});return o("extend-esri")&&s.setObject("dijit.analysis.OverlayLayers",R,F),R}));