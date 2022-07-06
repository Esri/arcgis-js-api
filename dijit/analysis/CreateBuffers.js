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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dojox/form/CheckedMultiSelect","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./utils","./AnalysisRegistry","./CreditEstimator","../CalculateField","./components/AddSummaryFields","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CreateBuffers.html"],(function(e,t,i,s,n,a,l,h,o,d,r,p,u,c,y,_,f,b,g,m,T,v,L,D,w,C,F,S,A,x,k,O,R,E,j,N,P,M,I,U,B,G,H,W){var J=i([b,g,m,T,v,N,P],{declaredClass:"esri.dijit.analysis.CreateBuffers",templateString:W,widgetsInTemplate:!0,inputLayer:null,inputType:null,outputLayerName:null,bufferDistance:null,units:null,i18n:null,toolName:"CreateBuffers",helpFileName:"CreateBuffers",resultParameter:"BufferLayer",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),n.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,H.bufferTool)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),this.outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this._bigdataUX=[this._methodLabelRow,this._methodValueRow,this._dissolveLabelRow,this._dissolveValueRow,this._selectDisFieldsLabelRow,this._selectDisFieldsRow,this._allowMultiPartRow,this._selectDataStore,this._datastoreLabelRow],this._standardUX=[this._optionsRow,this._sizeHelp],this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"}],this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_toUpperFirstLetter:function(e){return e.slice(0,1).toUpperCase()+e.slice(1)},_buildJobParams:function(){var e,t={};return this.showGeoAnalyticsParams?(t.inputLayer=l.toJson(this.constructAnalysisInputLyrObj(this.inputLayer,this.showGeoAnalyticsParams)),"attribute"===this.bufferDistType?t.field=this._bufferDistAttribute.get("value"):"attributexp"===this.bufferDistType?t.field="= "+this._bufFieldOutput.get("value"):(t.distance=this.showGeoAnalyticsParams?this.bufferDistance[0]:this.bufferDistance,t.distanceUnit=this._bufferUnits.get("value")),t.method=this.get("method"),t.dissolveOption=this._dissolveSelect.get("value"),"All"!==t.dissolveOption&&"List"!==t.dissolveOption||(t.multipart=this._allowMultiPartCheck.get("checked"),t.summaryFields=l.toJson(this._summaryWidget.get("summaryFields")),"List"===t.dissolveOption&&(t.dissolveFields=this._dissolveFieldsSelect.get("value").toString()))):(t.inputLayer=l.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),t.dissolveType=this._DissolveType&&"dissolve"===this._DissolveType?"Dissolve":"None","attribute"===this.bufferDistType?t.field=this._bufferDistAttribute.get("value"):t.distances=l.toJson(this.bufferDistance),t.units=this._bufferUnits.get("value"),this.bufferDistance.length&&(this._RingType||(this._RingType="rings"),t.ringType="rings"===this._RingType?"Rings":"Disks"),this.inputLayer.geometryType!==I.GeometryTypes.Line&&this.inputLayer.geometryType!==I.GeometryTypes.Polygon||(this.inputLayer.geometryType===I.GeometryTypes.Line?t.sideType=this._SideType&&"left"===this._SideType?"Left":this._SideType&&"right"===this._SideType?"Right":"Full":t.sideType=this._SideType&&"outside"===this._SideType?"Outside":"Full",t.endType=this._EndType&&"flat"===this._EndType?"Flat":"Round")),this.returnFeatureCollection||(t.OutputName=l.toJson({serviceProperties:{name:this.outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=l.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),t.context=l.toJson(e)),this._updateJobFilterAndSelection(t)},_handleSaveBtnClick:function(e){var t,i,s,n={};this._form.validate()&&(this._saveBtn.set("disabled",!0),t=this._buildJobParams(),n.jobParams=t,this.showGeoAnalyticsParams?j.isDefined(t.distance)?i=t.distance:j.isDefined(t.field)&&(i=t.field):j.isDefined(t.distances)?i=t.distances:j.isDefined(t.field)&&(i=t.field),s=t.units?t.units:t.distanceUnit?t.distanceUnit:"",n.itemParams={description:d.substitute(this.i18n.itemDescription,{layername:this.inputLayer.name,distance_field:i,units:s}),tags:d.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(n.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(this.resultParameter="output"),this.showGeoAnalyticsParams&&(n.isSpatioTemporalDataStore=!0),this.execute(n))},_handleLayerChange:function(e){},_handleRadiusTypeChange:function(e){this.bufferDistType=e,y.remove(this._Distance,"selected"),y.remove(this._Attribute,"selected"),y.remove(this._AttributeExp,"selected");var t=this._bufferDist.get("value").split(" ");"attribute"===e?(r.set(this._bufDistRow,"display","table-row"),r.set(this._bufFielExpRow,"display","none"),r.set(this._bufferDistAttribute.domNode,"display","block"),r.set(this._bufferDist.domNode,"display","none"),r.set(this._sizeHelpRow,"display","none"),r.set(this.ringTypes,"display","none"),p.set(this._bufLabel,"innerHTML",this.i18n.selectBufField),"polygon"===this.inputType?(r.set(this.polygonTypes,"display","block"),r.set(this.sideTypes,"display","none"),r.set(this.endTypes,"display","none")):"line"===this.inputType&&(r.set(this.sideTypes,"display","block"),r.set(this.endTypes,"display","block"),r.set(this.polygonTypes,"display","none")),this.showGeoAnalyticsParams&&(r.set(this._unitsTd,"display","none"),r.set(this._unitsTd,"width","0"),r.set(this._attrTd,"width","100%")),y.add(this._Attribute,"selected")):"distance"===e?(r.set(this._bufFielExpRow,"display","none"),r.set(this._bufDistRow,"display","table-row"),r.set(this._bufferDistAttribute.domNode,"display","none"),r.set(this._bufferDist.domNode,"display","block"),r.set(this._sizeHelpRow,"display","table-row"),p.set(this._bufLabel,"innerHTML",this.i18n.enterBufDist),y.add(this._Distance,"selected"),t.length>1?(r.set(this.ringTypes,"display","block"),r.set(this.sideTypes,"display","none"),r.set(this.endTypes,"display","none"),r.set(this.polygonTypes,"display","none")):"polygon"===this.inputType?(r.set(this.ringTypes,"display","none"),r.set(this.sideTypes,"display","none"),r.set(this.endTypes,"display","none"),r.set(this.polygonTypes,"display","block")):"line"===this.inputType&&(r.set(this.ringTypes,"display","none"),r.set(this.sideTypes,"display","block"),r.set(this.endTypes,"display","block"),r.set(this.polygonTypes,"display","none")),this.showGeoAnalyticsParams&&(r.set(this._unitsTd,"display","table-cell"),r.set(this._unitsTd,"width","55%"),r.set(this._attrTd,"width","45%"))):"attributexp"===e&&this.showGeoAnalyticsParams&&(r.set(this._bufDistRow,"display","none"),r.set(this._bufFielExpRow,"display","table-row"),y.add(this._AttributeExp,"selected"),p.set(this._bufLabel,"innerHTML",this.i18n.createBufExp)),this._bufFieldOutput.set("required",this.showGeoAnalyticsParams&&"attributexp"===e)},_handleDissolveTypeChange:function(e){this._DissolveType=e,y.remove(this._Overlap,"selected"),y.remove(this._Dissolve,"selected"),y.add("none"===e?this._Overlap:this._Dissolve,"selected")},_handleRingTypeChange:function(e){this._RingType=e,y.remove(this._Rings,"selected"),y.remove(this._Disks,"selected"),y.add("rings"===e?this._Rings:this._Disks,"selected")},_handlePolygonTypeChange:function(e){this._SideType=e,y.remove(this._Include,"selected"),y.remove(this._Exclude,"selected"),y.add("full"===e?this._Include:this._Exclude,"selected")},_handleSideTypeChange:function(e,t){this._SideType=t,e||("left"===t?e=this._Left:"right"===t?e=this._Right:"full"===t&&(e=this._Around)),y.remove(this._Around,"selected"),y.remove(this._Left,"selected"),y.remove(this._Right,"selected"),e&&y.add(e,"selected")},_handleEndTypeChange:function(e){this._EndType=e,y.remove(this._Round,"selected"),y.remove(this._Flat,"selected"),y.add("round"===e?this._Round:this._Flat,"selected")},_handleOptionsBtnClick:function(){y.contains(this._optionsDiv,"disabled")||(y.contains(this._optionsDiv,"optionsClose")?(y.remove(this._optionsDiv,"optionsClose"),y.add(this._optionsDiv,"optionsOpen")):y.contains(this._optionsDiv,"optionsOpen")&&(y.remove(this._optionsDiv,"optionsOpen"),y.add(this._optionsDiv,"optionsClose")))},_handleDistanceChange:function(){var e=s.trim(this._bufferDist.get("value")).split(" "),t=[];e.length>1?(r.set(this.ringTypes,"display","block"),r.set(this.sideTypes,"display","none"),r.set(this.endTypes,"display","none"),r.set(this.polygonTypes,"display","none")):("line"===this.inputType?(r.set(this.sideTypes,"display","block"),r.set(this.endTypes,"display","block")):"polygon"===this.inputType&&r.set(this.polygonTypes,"display","block"),r.set(this.ringTypes,"display","none")),n.forEach(e,(function(e){t.push(_.parse(e))})),this.bufferDistance=t},_handleDistanceMethodChange:function(e){this.set("method",e)},_handleShowCreditsClick:function(e){e.preventDefault();var t;this._form.validate()&&(t=this._buildJobParams(),this.getCreditsEstimate(this.toolName,t).then(s.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()}))))},_save:function(){},_buildUI:function(){var e=!0;this._toggleSummaryWidgetDisplay("None"),this.signInPromise.then(s.hitch(this,M.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!M.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),M.populateAnalysisLayers(this,"inputLayer","inputLayers")),M.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this.outputLayerInput.set("value",this.outputLayerName),e=!1),this.showGeoAnalyticsParams&&(this.distance&&(this.bufferDistance=[],this.bufferDistance.push(this.distance),e=!1),this.distanceUnit&&(this.units=this.distanceUnit,e=!1),this.set("method",this.method||I.DistanceMethods.geodesic),this.dissolveOption&&(e=!1,this._dissolveSelect.set("value",this.dissolveOption)),this.multipart&&(e=!1,this._allowMultiPartCheck.set("checked",this.multipart))),this.inputLayer?(this._summaryWidget.set("layer",this.inputLayer),this._updateAnalysisLayerUI(e)):this.showGeoAnalyticsParams&&(this._expBtn.set("disabled",!0),this._bufFieldOutput.set("disabled",!0)),this._bufferDist.set("validator",s.hitch(this,this.validateDistance)),r.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(e){this.folderStore=e,M.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),r.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),r.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),M.updateDisplay(this._standardUX,!this.get("showGeoAnalyticsParams"),"table-row"),M.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row"),M.updateDisplay([this._datastoreLabelRow,this._selectDataStore],!1,"table-row"),this.showGeoAnalyticsParams?(p.set(this._bufDefLabel,"innerHTML",this.i18n.bufferDefineBd),p.set(this._bufTypeLabel,"innerHTML",this.i18n.bufferTypeBd),p.set(this._analysisFieldHelpLink,"esriHelpTopic","bufferType"),r.set(this._AttributeExp,"display","block"),p.set(this.bufTypeTd,"colspan","3"),r.set(this._dissolveFieldsSelect.selectNode,"width","90%"),this._handleDissolveSelectChange(this._dissolveSelect.get("value")),p.set(this._nauticalMilesOption,"value","NauticalMiles"),p.set(this._outputHelpNode,"esriHelpTopic","outputName"),p.set(this._resultNumLabel,"innerHTML",this.i18n.fiveLabel),this.field&&(-1!==this.field.indexOf("=")?(this._bufFieldOutput.set("value",this.field.substring(this.field.indexOf("=")+1)),this._handleRadiusTypeChange("attributexp")):(this._bufferDistAttribute.set("value",this.field),this._handleRadiusTypeChange("attribute"))),this.summaryFields&&(e=!1,this._summaryWidget.set("summaryFields",this.summaryFields))):(p.set(this.bufTypeTd,"colspan","2"),r.set(this._AttributeExp,"display","none"),p.set(this._resultNumLabel,"innerHTML",this.i18n.threeLabel),this.dissolveType&&this._handleDissolveTypeChange(this.dissolveType.toLowerCase()),this.field&&(this._bufferDistAttribute.set("value",this.field),this._handleRadiusTypeChange("attribute")),this.ringType&&this._handleRingTypeChange(this.ringType.toLowerCase()),this.sideType&&(this.inputLayer&&this.inputLayer.geometryType===I.GeometryTypes.Line?this._handleSideTypeChange(null,this.sideType.toLowerCase()):this.inputLayer&&this.inputLayer.geometryType===I.GeometryTypes.Polygon&&this._handlePolygonTypeChange(this.sideType.toLowerCase())),this.endType&&this._handleEndTypeChange(this.endType.toLowerCase()),this.distances&&(this.distances=n.map(this.distances,(function(e){return _.format(e)})),this._bufferDist.set("value",this.distances.join(" ")),this._handleRadiusTypeChange("distance")),(this.ringType&&"Rings"!==this.ringType||this.sideType&&"Around"!==this.sideType||this.endType&&"Round"!==this.endType)&&this._handleOptionsBtnClick()),this._loadConnections(),this.units?this._bufferUnits.set("value",this.units):this._bufferUnits.set("value",this.distanceDefaultUnits),this._createFilterAndSelections()},_updateAnalysisLayerUI:function(e){if(this.inputLayer){this.inputLayer.geometryType===I.GeometryTypes.Polygon?this.inputType="polygon":this.inputLayer.geometryType===I.GeometryTypes.Line?this.inputType="line":this.inputLayer.geometryType===I.GeometryTypes.Point&&(this.inputType="point"),p.set(this._bufferToolDescription,"innerHTML",d.substitute(this.i18n.bufferDefine,{layername:this.inputLayer.name})),e&&(this.outputLayerName=d.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),r.set(this._bufferDistAttribute.domNode,"height","auto"),this._bufferDistAttribute.removeOption(this._bufferDistAttribute.getOptions());var i=[];if(n.forEach(this.inputLayer.fields,(function(e){"esriFieldTypeDouble"!==e.type&&"esriFieldTypeInteger"!==e.type&&"esriFieldTypeSmallInteger"!==e.type&&"esriFieldTypeSingle"!==e.type||i.push({value:e.name,label:j.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})}),this),this._bufferDistAttribute.addOption(i),p.set(this._bufferOptionsHelpLink,"esriHelpTopic","polygon"===this.inputType?"OptionPoly":"line"===this.inputType?"OptionLine":"OptionPoint"),this.bufferDistType?this._handleRadiusTypeChange(this.bufferDistType):"polygon"===this.inputType?(r.set(this.polygonTypes,"display","block"),r.set(this.sideTypes,"display","none"),r.set(this.endTypes,"display","none")):"line"===this.inputType?(r.set(this.sideTypes,"display","block"),r.set(this.endTypes,"display","block"),r.set(this.polygonTypes,"display","none")):"point"===this.inputType&&(r.set(this.polygonTypes,"display","none"),r.set(this.sideTypes,"display","none"),r.set(this.endTypes,"display","none")),this.showGeoAnalyticsParams){if(this._handleDissolveSelectChange(this._dissolveSelect.get("value")),this._expBtn.set("disabled",!1),this._bufFieldOutput.set("disabled",!1),this._calcField)this._calcField&&this._calcField.layer!==this.inputLayer&&(this._bufFieldOutput.set("value",""),this._calcField.reset(),this._calcField.set("layer",this.inputLayer));else{var a=M.getExprFunctions();this._calcField=new B({expressionMode:B.MODE_ARCADE,arcadeEditor:this.arcadeEditor,map:this.map,layer:this.inputLayer,field:this.i18n.bufField,baseClass:"esriBufFieldExp",helperMethods:a,showHelp:!0,helpUrl:M.getHelpUrl({widget:this,topic:"BufferExpression"}),css:{base:"esriBufFieldExp",addButton:"btn calcite primary",closeButton:"btn calcite cancel"},helperType:"numeric",showHeader:!1,calculateLabel:this.i18n.add,expression:!e&&this.field&&-1!==this.field.indexOf("=")?this._bufFieldOutput.get("value"):null},this._expressionCtr),this._calcField.startup(),this._calcField.expressionMode===B.MODE_SQL?(r.set(this._calcField._validateBtn.domNode,"display","none"),this._calcField._handleHelperTypeChange("value",null,{functionType:"NumType"}),this._aspectHandle=t.around(this._calcField,"_handleAddButtonClick",s.hitch(this,(function(e){return s.hitch(this,(function(e,t){var i=this._calcField.get("expression")[0];this._bufFieldOutput.set("value",i.sqlExpression),this._exprDialog.hide()}))})))):this._calcField.expressionMode===B.MODE_ARCADE&&this._calcField.on("expression-add",s.hitch(this,(function(e){this._bufFieldOutput.set("value",e.expression)}))),this._calcField.on("close",s.hitch(this,(function(){this._exprDialog.hide()})))}this._dissolveFieldsSelect.removeOption(),M.addAttributeOptions({selectWidget:this._dissolveFieldsSelect,layer:this.inputLayer,allowStringType:!0,allowSelectLabel:!1}),!e&&this.dissolveFields&&this._dissolveFieldsSelect.set("value",this.dissolveFields.split(","))}else this._toggleSummaryWidgetDisplay("None")}this.outputLayerName&&this.outputLayerInput.set("value",this.outputLayerName),!this.bufferDistance||e?(this.bufferDistance=[],this.bufferDistance.push(this._bufferDist.get("value"))):this._bufferDist.set("value",this.bufferDistance.toString().replace(/,/g," ")),this.units?this._bufferUnits.set("value",this.units):this._bufferUnits.set("value",this.distanceDefaultUnits)},_handleAnalysisLayerChange:function(e){"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e,disabledSubResources:[this.inputLayer]},{},this._analysisSelect):(this.set("inputLayer",this.inputLayers[e]),this._updateAnalysisLayerUI(!0))},validateDistance:function(){var e,t,i,a=this,l=[];return this._handleDistanceChange(),0!==(e=s.trim(this._bufferDist.get("value")).split(" ")).length&&(!(this.showGeoAnalyticsParams&&e.length>1)&&(n.forEach(e,(function(e){return 0===(e=_.parse(e))?(l.push(0),!1):isNaN(e)?(l.push(0),!1):(t=_.format(e,{locale:"root"}),j.isDefined(t)?j.isDefined(t)||(t=_.format(e,{locale:"en-us"})):t=_.format(e,{locale:"en"}),j.isDefined(t)&&(i=s.trim(t).match(/\D/g)),void(i&&n.forEach(i,(function(e){"."===e||","===e?l.push(1):"-"===e&&"polygon"===a.inputType?l.push(1):l.push(0)}))))})),-1===n.indexOf(l,0)))},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1)),a.connect(this._Distance,"onclick",s.hitch(this,"_handleRadiusTypeChange","distance")),a.connect(this._Attribute,"onclick",s.hitch(this,"_handleRadiusTypeChange","attribute")),a.connect(this._AttributeExp,"onclick",s.hitch(this,"_handleRadiusTypeChange","attributexp")),a.connect(this._Overlap,"onclick",s.hitch(this,"_handleDissolveTypeChange","none")),a.connect(this._Dissolve,"onclick",s.hitch(this,"_handleDissolveTypeChange","dissolve")),a.connect(this._Include,"onclick",s.hitch(this,"_handlePolygonTypeChange","full")),a.connect(this._Exclude,"onclick",s.hitch(this,"_handlePolygonTypeChange","outside")),a.connect(this._Rings,"onclick",s.hitch(this,"_handleRingTypeChange","rings")),a.connect(this._Disks,"onclick",s.hitch(this,"_handleRingTypeChange","disks")),a.connect(this._Around,"onclick",s.hitch(this,"_handleSideTypeChange",this._Around,"full")),a.connect(this._Left,"onclick",s.hitch(this,"_handleSideTypeChange",this._Left,"left")),a.connect(this._Right,"onclick",s.hitch(this,"_handleSideTypeChange",this._Right,"right")),a.connect(this._Round,"onclick",s.hitch(this,"_handleEndTypeChange","round")),a.connect(this._Flat,"onclick",s.hitch(this,"_handleEndTypeChange","flat")),this._connect(this._geodesicType,"onclick",s.hitch(this,this._handleDistanceMethodChange,I.DistanceMethods.geodesic)),this._connect(this._planarType,"onclick",s.hitch(this,this._handleDistanceMethodChange,I.DistanceMethods.planar))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&M.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).always(s.hitch(this,this._updateAnalysisLayerUI,!0))},_handleExpBtnClick:function(){this._calcField.set("expression",this._bufFieldOutput.get("value")),this._calcField.reset(),this._exprDialog.show()},_handleDissolveSelectChange:function(e){this._allowMultiPartCheck.set("disabled","None"===e),y.toggle(this._allowMultiPartLabel,"esriSelectLabel","None"!==e),y.toggle(this._allowMultiPartLabel,"esriAnalysisTextDisabled","None"===e),r.set(this._selectDisFieldsLabelRow,"display","List"===e?"table-row":"none"),r.set(this._selectDisFieldsRow,"display","List"===e?"table-row":"none"),this._toggleSummaryWidgetDisplay(e)},_toggleSummaryWidgetDisplay:function(e){var t;t="None"!==e&&"none"!==e,M.updateDisplay([this._statsRowLabel],t,"table-row"),!0===t?this._summaryWidget.show():this._summaryWidget.hide()},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){j.isDefined(e)&&(e.geometryType===I.GeometryTypes.Polygon?(this.inputLayer=e,this.inputType="polygon"):e.geometryType===I.GeometryTypes.Line?(this.inputLayer=e,this.inputType="line"):e.geometryType===I.GeometryTypes.Point&&(this.inputLayer=e,this.inputType="point"),this._summaryWidget.set("layer",this.inputLayer))},_setInputLayersAttr:function(e){this.inputLayers=e},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return M.validateServiceName(e,{textInput:this.outputLayerInput})},_setUnitsAttr:function(e){this.units=e},_getUnitsAttr:function(){return this.units=this._bufferUnits.get("value"),this.units},_setAttributesAttr:function(e){if(e.inputLayer){j.isDefined(e.allowSelectLabel)||(e.allowSelectLabel=!0);var t,i,s,a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];t=e.inputLayer,i=e.selectWidget,s=t.fields,e.allowSelectLabel&&i.addOption({value:"",label:this.i18n.attribute}),e.allowStringType&&a.push("esriFieldTypeString"),n.forEach(s,(function(e){-1!==n.indexOf(a,e.type)&&e.name!==t.objectIdField&&i.addOption({value:e.name,label:j.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})}),this)}},_setStatisticsAttr:function(e){var t=e.selectWidget;t.addOption({value:"0",label:this.i18n.statistic}),t.addOption({value:"COUNT",label:this.i18n.count}),t.addOption({value:"SUM",label:this.i18n.sum}),t.addOption({value:"MIN",label:this.i18n.minimum}),t.addOption({value:"MAX",label:this.i18n.maximum}),t.addOption({value:"MEAN",label:this.i18n.average}),t.addOption({value:"RANGE",label:this.i18n.range}),t.addOption({value:"STDDEV",label:this.i18n.standardDev}),t.addOption({value:"VARIANCE",label:this.i18n.variance})},_setMethodAttr:function(e){this.method=e,y.toggle(this._geodesicType,"selected",e===I.DistanceMethods.geodesic),y.toggle(this._planarType,"selected",e===I.DistanceMethods.planar)},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))}});return h("extend-esri")&&s.setObject("dijit.analysis.CreateBuffers",J,E),J}));