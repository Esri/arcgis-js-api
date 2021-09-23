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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","../utils/InfographicLayoutResizer","../utils/InfographicJsonConversionUtil","../utils/InfographicThemeUtil","../../supportClasses/tableJson/TableJsonUtil","../../sections/supportClasses/InfographicBenchmarkController","../../sections/supportClasses/InfographicValueController","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/text!../../templates/SimpleInfographic.html"],(function(e,t,i,n,r,s,o,a,h,l,c,u,d,p,g,f,_,m,I){return e([r,s],{isSimpleInfographic:!0,templateString:I,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,currentFeatureAttributes:null,getPreviewValueFunction:null,isEditMode:!1,adjustElementsWhenResized:!1,_sections:null,_currentInfographicJson:null,_updatePromise:null,getRenderPromise:function(){return this._updatePromise},updateInfographic:function(e){if(this.domNode){if(this._currentInfographicJson=this._applyThemeToJson(e),!this.isEditMode&&!m.isPlayerOnServer)return this._updatePromise=f.invoke(this,"_doUpdateInfographic",50),this.onShowWaiting(this._updatePromise),this._updatePromise;this._doUpdateInfographic()}},refresh:function(){this.updateInfographic(this._currentInfographicJson)},_doUpdateInfographic:function(){if(this.domNode){this._destroySections();var e=this._currentInfographicJson;this._syncJsonDimensions();var t=this.viewModel.getStaticInfographicDefaultStyles(this.theme);n.set(this.domNode,"backgroundColor",e.style.backgroundColor||t&&t.backgroundColor),n.set(this.domNode,{width:e.style.width+"px",height:e.style.height+"px"}),this._preRender(),this._renderHeader(),this._renderVariableTables(),this._postRender()}},_infographicValueController:null,_preRender:function(){this._infographicValueController=new u,this._infographicValueController.setVariableTables(this._currentInfographicJson.variableTables)},_renderHeader:function(){if(this._currentInfographicJson.header){var e=this._currentInfographicJson.header;this._createSection(l.getTableWidth(e),l.getTableHeight(e),[e],e.style,null,-1,null)}},_renderVariableTables:function(){this._currentInfographicJson.variableTables.forEach((function(e){this._renderVariableTable(e)}),this)},_renderVariableTable:function(e){var t=a.variableTableToNormalTables(e);return this._createSection(e.style.width,e.style.height,t.tableJsons,e.style,e,this._currentInfographicJson.variableTables.indexOf(e),t)},_createSection:function(e,i,r,s,o,a,h){var l=-1===a,u={};if(u.initialWidth=e,u.initialHeight=i,u.json={type:d.DETAILS,stack:r},u.viewModel=this.viewModel,u.theme=this.theme,u.parentWidget=this,u.currentFeatureIndex=this.currentFeatureIndex,u.currentFeatureAttributes=this.currentFeatureAttributes,u.initialViewMode=this.isEditMode&&!this.getPreviewValueFunction?g.EDIT:g.PREVIEW_VALUES,u.elementUsageType=l?p.INFOGRAPHIC_HEADER_SECTION:p.INFOGRAPHIC_SECTION,u.getPreviewValueFunction=this.getPreviewValueFunction,u.infographicValueController=!l&&this._infographicValueController,h&&this.viewModel.isBenchmarkedArea&&this.viewModel.isBenchmarkedArea(this.currentFeatureIndex)){var f=new c;f.isVariableInShape=h.isVariableInShape,f.iconTableIndex=h.iconIndex,f.descTableIndex=h.descriptionIndex,f.backgroundColor=this.domNode.style.backgroundColor,u.infographicBenchmarkController=f}this.viewModel.dynamicReportInfo&&(u.tableParams={enableNumberAnimation:!0,allowSorting:!1}),t.mixin(u,this._prepareSectionCreationParams(o,l));var _=this.viewModel.layoutBuilder.createElement("section",u,this.mainViewDiv);return n.set(_.domNode,{position:"absolute",left:(l?0:s.left||0)+"px",top:(l?0:s.top||0)+"px"}),_._variableTableParams={variableTable:o,variableTableIndex:a,elementsIndexHash:h},this._sections.push(_),_},_prepareSectionCreationParams:function(e,t){return null},_postRender:function(){},getHeaderTable:function(){var e=this.getHeaderSection();return e&&e.getTrueTables()[0]},getHeaderSection:function(){return this._sections.filter((function(e){return e.elementUsageType===p.INFOGRAPHIC_HEADER_SECTION}))[0]},getSectionIconTable:function(e){return e.getTrueTables()[e._variableTableParams.elementsIndexHash.iconIndex]},getSectionVariableTable:function(e){return e.getTrueTables()[e._variableTableParams.elementsIndexHash.variableIndex]},getSectionDescriptionTable:function(e){return e.getTrueTables()[e._variableTableParams.elementsIndexHash.descriptionIndex]},getVariableSections:function(){return this._sections.filter((function(e){return e.elementUsageType===p.INFOGRAPHIC_SECTION}))},getVisualState:function(){return null},setVisualState:function(e){},_applyThemeToJson:function(e){var t=this.viewModel.getStaticInfographicDefaultStyles(this.theme);return h.applyThemeSettingsToJson(e,t)},notifyShown:function(){i(this._updatePromise,function(){this._sections&&this._sections.forEach((function(e){e.notifyShown()}))}.bind(this))},width:null,height:null,resize:function(e,t){if(void 0!==e&&(this.width=e,this.height=t),!this.isEditMode&&!m.isPlayerOnServer)return this._checkNeedResize()&&f.invoke(this,"_doUpdateInfographic",50);this._checkNeedResize()&&this._doUpdateInfographic()},_checkNeedResize:function(){return this._currentInfographicJson&&this.width&&this.height&&(!_.compareEqual(this._currentInfographicJson.style.width,this.width,1)||!_.compareEqual(this._currentInfographicJson.style.height,this.height,1))},_syncJsonDimensions:function(){this._checkNeedResize()&&o.resizeLayout(this._currentInfographicJson,this.width,this.height,{preserveHeaderPosition:!0,allowResizeInnerElements:!0,ignoreMinMaxConstraints:this.adjustElementsWhenResized,updateFontSize:this.adjustElementsWhenResized&&!this._currentInfographicJson.preserveTextSize})},toJson:function(){return t.clone(this._currentInfographicJson)},onShowWaiting:function(e){},_destroySections:function(){this._sections=this._sections||[],this._sections.forEach((function(e){e.destroy()})),this._sections.length=0,this.domNode&&(this.mainViewDiv.innerHTML="")},destroy:function(){this._destroySections(),this.inherited(arguments)}})}));