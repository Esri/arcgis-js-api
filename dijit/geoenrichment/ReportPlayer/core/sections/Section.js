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

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/dom-class","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","./_SectionQueryElementsMixin","esri/dijit/geoenrichment/ReportPlayer/config","../supportClasses/tableJson/TableJsonUtil","../supportClasses/ViewModes","../supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","./supportClasses/SectionLayoutManager","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","dojo/text!../templates/Section.html","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,n,a,s,o,r,l,c,h,u,d,g,p,y,m,f,_,S,b){return t([l,c,h],{templateString:S,nls:b=b.geoenrichment.dijit.ReportPlayer.Sections,isSection:!0,json:null,viewModel:null,theme:null,currentFeatureIndex:null,currentFeatureAttributes:null,getPreviewValueFunction:null,elementUsageType:null,initialWidth:null,initialHeight:null,hasFixedLayout:!1,disableContentCrop:!1,parentWidget:null,parentElementInPageInfo:null,viewPortContainer:null,parentGridCell:null,infographicValueController:null,infographicBenchmarkController:null,calculationStatesGroup:null,noContentOffset:!1,tableClass:null,tableParams:null,initialViewMode:null,initialSpecificViewMode:null,isDataDrillingView:!1,dynamicSettingsToolbarRoot:null,_stackElements:null,_layoutManager:null,_dynamicSettingsBuilder:null,_dynamicSettingsBuilderBeingLoadedFlag:!1,_backgroundColor:void 0,_cropContent:!1,_opacity:1,_topSpacer:null,_bottomSpacer:null,postCreate:function(){this.inherited(arguments),this._showError(!1),this._layoutManager=new y(this),this._stackElements=[],this.infographicValueController&&this.infographicValueController.addSection(this),this.infographicBenchmarkController&&this.infographicBenchmarkController.setSection(this),(this.initialViewMode||this.initialSpecificViewMode)&&this._tryApplyNewViewMode(this.initialViewMode,this.initialSpecificViewMode),this.fromJson(this.json),this.json=null},_createStack:function(e){if(this._destroyStack(),e){this._topSpacer=!this.viewModel.isGraphicStyle()&&s.create("div",{class:"stackNodeSpacer"},this.stackNode);var t=this;e.stack.forEach((function(e,i){switch(e.id){case"table":t._createGrid(e);break;case"img":t._createImage(e);break;case"map":t._createElementInTable(e,"map");break;case"hr":t._createHorizontalLine(e,i);break;case"pageBreak":t._createPageBreak(e)}})),this._bottomSpacer=!this.viewModel.isGraphicStyle()&&s.create("div",{class:"stackNodeSpacer"},this.stackNode),this._updateSpacersForHorizontalLines()}},_addEmptyLine:function(){this.hasFixedLayout&&s.create("div",{class:"stackNodeEmptyLine"},this.stackNode)},_createGrid:function(e,t,n,a){var r=this;e.style=e.style||{},e.attributes=e.attributes||{},e.columns=e.columns||[],e.rows=e.rows||[];var l=t&&(t.domNode||t);n=l?n||"after":void 0;var c=l||this.stackNode,h="function"==typeof this.tableClass?this.tableClass(e):this.tableClass,u=this.viewModel.layoutBuilder.createElement("grid",i.mixin({class:h||"",viewModel:this.viewModel,theme:this.theme,columns:e.columns,rows:e.rows,parentWidget:this,viewPortContainer:this.viewPortContainer,fixedViewMode:e.attributes.viewMode,currentFeatureIndex:this.currentFeatureIndex,currentFeatureAttributes:this.currentFeatureAttributes,getPreviewValueFunction:this.infographicValueController?function(e){return(e=e||{}).sectionPreviewValueFunction=r.getPreviewValueFunction,r.infographicValueController.getValueInfo(r,e)}:this.getPreviewValueFunction,infographicBenchmarkController:this.infographicBenchmarkController,presetFilter:e.presetFilter,presetSorting:e.presetSorting,__isImageTable:e.__isImageTable,__isMapTable:e.__isMapTable,allowSorting:d.isMultiDataTable(e)},this._getGridCreateParams(e,a),this.tableParams),c);if(s.place(u.domNode,c,n),u.setMaxWidth(this.hasFixedLayout?this.getWidth():1e5),u.setSettings(i.mixin({style:{width:e.style.width,left:e.style.left,top:e.style.top,spaceAfter:e.style.spaceAfter,alternatingStyle:e.style.alternatingStyle,opacity:e.style.opacity,fixedCellsOpacity:e.style.fixedCellsOpacity},attributes:i.mixin({fixedColumns:e.attributes.fixedColumns,dynamicColumns:e.attributes.dynamicColumns,fixedRows:e.attributes.fixedRows,dynamicRows:e.attributes.dynamicRows},this._getAdditionalTableAttributes(e)),scaleToFitWidth:e.scaleToFitWidth,scaleToFitHeight:e.scaleToFitHeight,noChartView:e.noChartView,viewMode:this._viewMode,specificViewMode:this._specificViewMode},this._getAdditionalTableSettings(e))),u.stackId="table",t){var g=this._stackElements.indexOf(t)+("after"===n?1:0);-1!==g&&this._stackElements.splice(g,0,t)}else this._stackElements.push(u);return e.isContextFloatingElement&&(o.add(u.domNode,"esriGENonInteractable"),u.__isContextFloatingElement=!0),u},_getGridCreateParams:function(e,t){return null},_getAdditionalTableAttributes:function(e){},_getAdditionalTableSettings:function(e){},_createImage:function(e){return this._createElementInTable(e,"image")},_createElementInTable:function(e,t,n){e.style=e.style||{};var a,s=function(){if("chart"===t)return{x:0,y:0,w:e.visualProperties.width,h:e.visualProperties.height};if("infographic"===t)return{x:0,y:0,w:e.style.width,h:e.style.height};(e=i.mixin({},e)).style=i.clone(e.style);var a=n&&n.defaultSize||100;e.style.width=e.style.width||a,e.style.height=e.style.height||a;var s={x:e.style.left||0,y:e.style.top||0,w:e.style.width,h:e.style.height};return e.style.left=0,e.style.top=0,s}();switch(t){case"image":a=p.createFieldInfoFromImage(e);break;case"map":a=p.createFieldInfoFromMap(e);break;case"shape":a=p.createFieldInfoFromShape(e);break;case"chart":a=p.createFieldInfoFromChart(e);break;case"infographic":a=p.createFieldInfoFromInfographic(e)}var r=d.createSingleCellTable({left:s.x,top:s.y,width:s.w,height:s.h,fieldInfo:a,cellStyle:{horizontalAlign:this.viewModel.isGraphicStyle()?e.style.horizontalAlign||"center":"left",verticalAlign:this.viewModel.isGraphicStyle()?e.style.verticalAlign||"middle":"top",backgroundColor:"transparent"}});0===e.style.opacity&&(r.style.opacity=0),"image"===t?r.__isImageTable=!0:"map"===t&&(r.__isMapTable=!0);var l=this._createElementInTable_createGrid(e,r);return"image"===t?m.addClass(l.domNode,"isImageTable"):"map"===t&&m.addClass(l.domNode,"isMapTable"),e.isContextFloatingElement&&(o.add(l.domNode,"esriGENonInteractable"),l.__isContextFloatingElement=!0),l},_createElementInTable_createGrid:function(e,t){return this._createGrid(t)},isImageTable:function(e){return e&&e.__isImageTable},isMapTable:function(e){return e&&e.__isMapTable},_createHorizontalLine:function(e,t){e.style=e.style||{};var i=s.create("div",{class:"templateHorizontalLine"},this.stackNode);0===t?(o.add(i,"templateHorizontalLineTop"),this._stackElements.unshift(i),i._isTopLine=!0):(o.add(i,"templateHorizontalLineBottom"),this._stackElements.push(i),i._isTopLine=!1),i.stackId="hr",e.style.backgroundColor&&(i.style.backgroundColor=e.style.backgroundColor),"number"==typeof e.style.height&&(i.style.height=Math.round(Math.max(1,e.style.height))+"px")},_updateSpacersForHorizontalLines:function(){if(!this.viewModel.isGraphicStyle()){var e=this._queryElementsById("hr");this._topSpacer.style.height="0px",this._bottomSpacer.style.height="0px";var t=this;e.forEach((function(e){(e._isTopLine?t._topSpacer:t._bottomSpacer).style.height=r.get(e,"height")+"px"}))}},_createPageBreak:function(e){var t=s.create("div",{class:"esriGEReportPlayer_pageBreak"},this.stackNode);t.stackId="pageBreak",s.create("div",{class:"pageBreakLine dijitInline"},t),s.create("div",{class:"pageBreakLabel dijitInline",innerHTML:b.pageBreak},t),s.create("div",{class:"pageBreakLine dijitInline"},t),this._stackElements.push(t)},_destroyStack:function(){for(;this._stackElements.length;)this._removeElement(this._stackElements[0]);this.stackNode&&(this.stackNode.innerHTML=""),this._addEmptyLine()},removeElement:function(e){e&&this._removeElement(e)},_removeElement:function(e){if(e){e.destroy?e.destroy():s.destroy(e);var t=this._stackElements.indexOf(e);-1!==t&&this._stackElements.splice(t,1),"hr"===e.stackId&&this._updateSpacersForHorizontalLines()}},getWidth:function(){return this._layoutManager.getWidth()},setWidth:function(e,t){this._layoutManager.setWidth(e,t)},getHeight:function(e){return this._layoutManager.getHeight(e)},getResizedHeight:function(){return this._layoutManager.getResizedHeight()},setHeight:function(e,t){this._layoutManager.setHeight(e,t)},getPreferredHeight:function(){return this._layoutManager.getPreferredHeight()},collapseContent:function(){var e=this.getInfographicWithTable();e&&e.infographic.collapseContent()},calculateFloatingContentBox:function(){return this._layoutManager.getFloatingContentBox()},scaleFloatingContentProportionally:function(e){this._layoutManager.scaleFloatingContentProportionally(e)},fitContentNicely:function(e,t){this._layoutManager.fitContentNicely(e,t)},setChartCalculationState:function(e){this.onCalculationStateChanged(e)},onCalculationStateChanged:function(e){},getStyle:function(){return{backgroundColor:this._backgroundColor,cropContent:this._cropContent,opacity:this._opacity}},setStyle:function(e){e=i.mixin(this.getStyle(),e),this._backgroundColor=e.backgroundColor,this._cropContent=e.cropContent,this.domNode.style.backgroundColor=this._backgroundColor||"",this.domNode.style.overflow=this._cropContent&&!this.disableContentCrop?"hidden":"","number"==typeof e.opacity&&(this._opacity=Math.max(0,Math.min(1,e.opacity)),this.domNode.style.opacity=1===this._opacity?"":this._opacity,o[0===this._opacity?"add":"remove"](this.domNode,"esriGENonInteractable"))},getSettings:function(){var e=this._queryElementsById("hr"),t=e[0]&&e[0]._isTopLine?e[0]:null,i=e.filter((function(e){return!e._isTopLine}))[0],n={type:this._sectionType,hasTopLine:!!t,hasBottomLine:!!i};return t&&(n.topLineHeight=r.get(t,"height"),n.topLineColor=r.get(t,"backgroundColor")),i&&(n.bottomLineHeight=r.get(i,"height"),n.bottomLineColor=r.get(i,"backgroundColor")),n},setSettings:function(e){var t=this;this._queryElementsById("hr").map((function(e){t._removeElement(e)})),e.hasTopLine&&this._createHorizontalLine({style:{height:e.topLineHeight,backgroundColor:e.topLineColor}},0),e.hasBottomLine&&this._createHorizontalLine({style:{height:e.bottomLineHeight,backgroundColor:e.bottomLineColor}})},_notifyContentChanged:function(){this._layoutManager.updateHeightAfterContentChange()},_viewMode:null,_specificViewMode:null,_viewModeKey:null,getViewMode:function(){return this._viewMode},setViewMode:function(e,t){this._tryApplyNewViewMode(e,t)&&this._stackElements.forEach((function(e){this._syncElementViewMode(e)}),this)},_tryApplyNewViewMode:function(e,t){var i=(e=e||this._viewMode)+((t=t||this._specificViewMode)?JSON.stringify(t):"");return this._viewModeKey!==i&&(this._viewModeKey=i,this._viewMode=e,this._specificViewMode=t,o[this._viewMode===g.EDIT?"add":"remove"](this.domNode,"esriGEReportPlayer_sectionEditMode"),o[this._viewMode===g.EDIT?"remove":"add"](this.domNode,"esriGEReportPlayer_sectionPreviewMode"),!0)},_syncElementViewMode:function(e){e.setViewMode&&e.setViewMode(this._viewMode,this._specificViewMode)},notifyShown:function(){var t=this;this._stackElements.forEach((function(e){e.notifyShown&&e.notifyShown()})),this._panelScale&&this.notifyPanelScaleChanged(this._panelScale),this.viewModel.dynamicReportInfo&&!u.isPlayerOnServer&&(this._dynamicSettingsBuilder?this._dynamicSettingsBuilder.notifyShown():this._dynamicSettingsBuilderBeingLoadedFlag||(this._dynamicSettingsBuilderBeingLoadedFlag=!0,e(["./dynamicSettings/SectionDynamicSettingsBuilder"],(function(e){t._dynamicSettingsBuilder=new e(t,{onButtonsCreated:function(){t.onDynamicSettingsButtonsCreated()}}),t.own(t._dynamicSettingsBuilder),t._panelScale&&t._dynamicSettingsBuilder.setPanelScale(t._panelScale),t._dynamicSettingsBuilderBeingLoadedFlag=!1}))))},_panelScale:null,getPanelScale:function(){return this._panelScale||1},notifyPanelScaleChanged:function(e){this._panelScale=e,this._dynamicSettingsBuilder&&this._dynamicSettingsBuilder.setPanelScale(e);var t=this.getMapImages()[0];t&&t.notifyPanelScaleChanged&&t.notifyPanelScaleChanged(e);var i=this.getInfographic();i&&i.notifyPanelScaleChanged&&i.notifyPanelScaleChanged(e)},_sectionType:null,getSectionType:function(){return this._sectionType},isEmpty:function(){return!1},isDataSection:function(){var e=this.getSectionType();return!this.hasPageBreak()&&this.hasNonEmptyTables()&&(e===_.DETAILS||e===_.DETAILS_HEADER||e===_.GROUP)},isSingleElementSection:function(){return 1===this._stackElements.length},isMultiDataSection:function(){return this.isSingleElementSection()&&this.getTrueTables()[0]&&this.getTrueTables()[0].isMultiDataTable()},isPageHeader:function(){return this.getSectionType()===_.PAGE_HEADER},isPageFooter:function(){return this.getSectionType()===_.PAGE_FOOTER},getSectionName:function(){if(this.hasPageBreak())return"";switch(this._sectionType){case _.PAGE_HEADER:return b.pageHeader;case _.DETAILS_HEADER:return this.hasLocatorHeaderTables()?b.locatorHeaderTable:b.detailsHeader;case _.DETAILS:return this.hasLocatorTables()?b.locatorTable:this.hasSummarizeTables()?b.summarizeTable:b.details;case _.GROUP:return this.hasLocatorFooterTables()?b.locatorFooterTable:b.group;case _.REPORT_FOOTER:return b.reportFooter;case _.PAGE_FOOTER:return b.pageFooter}return""},getRenderPromise:function(){return n(this.getTables().map((function(e){return e.getRenderPromise()})))},getVisualState:function(){return{type:"section",currentFeatureIndex:this.currentFeatureIndex,stackElements:this._getVisualStateElements().map((function(e){return e.getVisualState&&e.getVisualState()}))}},setVisualState:function(e){var t=this;if(e){if("number"==typeof e.currentFeatureIndex&&e.currentFeatureIndex!==(this.currentFeatureIndex||0)){var i=this.toJson();i.currentFeatureIndex=e.currentFeatureIndex,this.fromJson(i)}return a(this.getRenderPromise(),(function(){if(e.stackElements){var i=[];return t._getVisualStateElements().forEach((function(t,n){t.setVisualState&&i.push(t.setVisualState(e.stackElements[n]))})),n(i).then((function(){t._dynamicSettingsBuilder&&t._dynamicSettingsBuilder.setVisualState(e)}))}}))}},_getVisualStateElements:function(){return this._stackElements.filter((function(e){return!e.__isContextFloatingElement}))},refresh:function(){return this.updateContentFromJson(this.toJson()),this.getRenderPromise()},updateContentFromJson:function(e){this.fromJson(e),this._notifyContentChanged()},fromJson:function(e){var t=this.initialWidth||e.style&&e.style.width,i=this.initialHeight||e.style&&e.style.height;t&&this.setWidth(t),i&&this.setHeight(i),this.initialWidth=null,this.initialHeight=null,this._showError(!1),this._sectionType=e.type,"number"==typeof e.currentFeatureIndex&&(this.currentFeatureIndex=e.currentFeatureIndex,this.viewModel.dynamicReportInfo&&(this.currentFeatureIndex=Math.min(this.viewModel.dynamicReportInfo.analysisAreas.length-1,this.currentFeatureIndex))),this.setStyle(e.style),this._createStack(e)},toJson:function(e){var t=this,i={type:this._sectionType,style:this.getStyle(),stack:[]};return"number"==typeof this.currentFeatureIndex&&(i.currentFeatureIndex=this.currentFeatureIndex),e&&e.saveSize&&(i.style.width=this.getWidth(),i.style.height=this.getHeight()),this._stackElements.forEach((function(e){var n;switch(e.stackId){case"table":n=t._tableToJson(e);break;case"hr":n={id:"hr",style:{height:r.get(e,"height"),backgroundColor:r.get(e,"backgroundColor")}};break;case"pageBreak":n={id:"pageBreak"}}n&&i.stack.push(n)})),i},_tableToJson:function(e){var t;if(this.isImageTable(e)||this.isMapTable(e)){var i=e.toJson(),n=d.getTableJsonFirstFieldInfo(i),a=n.imageJson||n.mapJson;a?(a.style.left=i.style.left,a.style.top=i.style.top,"number"==typeof i.style.opacity&&("number"!=typeof a.style.opacity&&(a.style.opacity=1),a.style.opacity*=i.style.opacity),t=a):t=i}else t=e.toJson();return t},isMouseOver:function(e,t){return f.isMouseOver(this.domNode,{event:e})||(!t||!t.noDynamic)&&this._dynamicSettingsBuilder&&this._dynamicSettingsBuilder.isMouseOver(e)||this._checkTableCellsMouseOver(e)},_checkTableCellsMouseOver:function(e){return this.getTables().some((function(t){return t.getCells().some((function(t){return t.content&&t.content.isMouseOver&&t.content.isMouseOver(e)}))}))},_showError:function(e){this.errorDiv&&s.destroy(this.errorDiv),this.errorDiv=null,m[e?"hide":"show"](this.stackNode),e&&(this.errorDiv=s.create("div",{class:"esriGEAbsoluteStretched section_errorDiv",innerHTML:b.mapLoadError},this.domNode))},onDynamicSettingsButtonsCreated:function(){},destroy:function(){this._destroyStack(),this.inherited(arguments)}})}));