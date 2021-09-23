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

define(["../kernel","../lang","./FeatureTable/Grid","./FeatureTable/storeUtils","./FeatureTable/dataUtils","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/aspect","dojo/debounce","dojo/has","dojo/on","dojo/string","dojo/promise/all","dojo/Deferred","dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/fx","dojo/text!../dijit/FeatureTable/templates/FeatureTable.html","dojo/i18n!../nls/jsapi","dijit/_WidgetBase","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/a11yclick","dijit/Menu","dijit/MenuItem","dgrid/util/misc","dijit/layout/BorderContainer","dijit/layout/TabContainer","dijit/layout/ContentPane","dojo/query!css2","dojo/domReady!"],(function(e,t,i,s,r,n,o,a,d,l,h,u,c,f,m,g,p,y,_,w,I,F,b,C,R,S,v,M,D,P,G,H,T){var E=p([b,C,R,S,g],{declaredClass:"esri.dijit.FeatureTable.Grid",baseClass:"esri-feature-table",templateString:I,featureLayer:null,map:null,fieldInfos:null,gridOptions:null,dateOptions:null,editable:!1,editOn:null,hiddenFields:null,outFields:null,menuFunctions:null,columnMenuFunctions:null,batchCount:50,syncSelection:!1,zoomToSelection:!1,showDataTypes:!1,showGridHeader:!0,showGridMenu:!0,showFeatureCount:!0,showColumnHeaderTooltips:!1,showColumnHeaderTooltipsWithDescription:!1,showAttachments:!1,showStatistics:!0,showRelatedRecords:!1,showCyclicalRelationships:!1,filterIds:null,showFieldDetails:!1,showColumnHiderButton:!1,showDefaultSortMenuItem:!0,showExpressionFields:!1,loaded:!1,grid:null,layerInfo:null,dataStore:null,columns:null,featureCount:0,idProperty:"id",gridMenu:null,gridMenuAnchor:null,selectedRows:null,selectedRowIds:null,css:{button:"esri-feature-table-button",hidden:"esri-feature-table-hidden",select:"esri-feature-table-select",borderContainer:"esri-feature-table-border-container",contentPane:"esri-feature-table-content-pane",grid:"esri-feature-table-grid",title:"esri-feature-table-title",loadingIndicator:"esri-feature-table-loading-indicator",cellLoadingIndicator:"esri-feature-table-cell-loading-indicator",menu:"esri-feature-table-menu",menuItem:"esri-feature-table-menu-item",menuOptions:"esri-feature-table-menu-options",columnHeader:"esri-feature-table-column-header",columnHeaderTitle:"esri-feature-table-column-header-title",columnHeaderType:"esri-feature-table-column-header-type",columnHeaderClear:"esri-feature-table-column-header-clear",columnMenu:"esri-feature-table-column-menu",sortAscendingIcon:"esri-icon-ascending icon-ui-ascending",sortDescendingIcon:"esri-icon-descending icon-ui-descending",filterIcon:"esri-icon-filter icon-ui-filter",propertiesIcon:"esri-icon-properties icon-ui-properties",statisticsIcon:"esri-icon-statistics icon-ui-statistics",settingsIcon:"esri-icon-settings icon-ui-settings",columnHeaderTooltip:"esri-feature-table-column-header-tooltip",lockedIcon:"esri-icon-locked icon-ui-locked",lockedIconContainer:"esri-locked-icon-container",downIcon:"esri-icon-down icon-ui-down",menuIcon:"esri-icon-menu icon-ui-menu",closeIcon:"esri-icon-close icon-ui-close",optionsMenu:"esri-feature-table-options-menu-container",relatedRecordsCell:"esri-feature-table-related-records-cell",relatedRecordsTitle:"esri-feature-table-related-records-title",relatedRecordsLink:"esri-related-records-link",attachmentsCell:"esri-feature-table-attachments-cell",attachmentsTitle:"esri-feature-table-attachments-title",attachmentsLink:"esri-attachments-link",expressionsCell:"esri-feature-table-expressions-cell",expressionsTitle:"esri-feature-table-expressions-title",expressionsLink:"esri-expressions-link",dialog:"esri-feature-table-dialog",closeButton:"esri-dialog-close-button dijitButton",statisticsTableContainer:"esri-feature-table-statistics",statisticsHeader:"esri-statistics-header",statisticsBreak:"esri-break",statisticsHorizontalBreak:"esri-horizontal-break",statisticsAttrTable:"esri-attribute-table",statisticsAttrName:"esri-attribute-name",statisticsAttrValue:"esri-attribute-value",leftMargin:"esri-feature-table-left-margin",dateValue:"esri-date-value"},_i18nStrings:F.widgets.FeatureTable,_layerInfos:null,_fieldInfos:null,_cachedIds:null,_defaultBatchCount:50,_defaultFeatureCount:2e3,_defaultDateOptions:{timeEnabled:!0,dateEnabled:!0,timePattern:null,datePattern:null},_defaultGridOptions:{allowSelectAll:!1,cellNavigation:!0,selectionMode:"extended",pagination:!1,allowTextSelection:!1,pageSizeOptions:[10,25,50],columnHider:!0,columnResizer:!0,pagingDelay:300,keepScrollPosition:!0,queryRowsOverlap:0,sort:{field:"id",descending:!1}},_defaultSort:null,_defaultEditOn:"dblclick, keypress",_orderByFields:null,_showRelatedRecords:!1,_showAttachments:!1,_rollbackInfos:null,_statisticsDialog:null,_attachmentsDialog:null,_columnRules:null,_relatedGridInfos:null,_popupDateFormats:{shortDate:{datePattern:"M/d/y"},shortDateLE:{datePattern:"d/M/y"},longMonthDayYear:{datePattern:"MMMM d, y"},dayShortMonthYear:{datePattern:"d MMM y"},longDate:{datePattern:"EEEE, MMMM d, y",selector:"date"},shortDateShortTime:{datePattern:"M/d/y",timePattern:"h:mm a",timeEnabled:!0},shortDateLEShortTime:{datePattern:"d/M/y",timePattern:"h:mm a",timeEnabled:!0},shortDateShortTime24:{datePattern:"M/d/y",timePattern:"H:mm",timeEnabled:!0},shortDateLEShortTime24:{datePattern:"d/M/y",timePattern:"H:mm",timeEnabled:!0},shortDateLongTime:{datePattern:"M/d/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLELongTime:{datePattern:"d/M/y",timePattern:"h:mm:ss a",timeEnabled:!0},shortDateLongTime24:{datePattern:"M/d/y",timePattern:"H:mm:ss",timeEnabled:!0},shortDateLELongTime24:{datePattern:"d/M/y",timePattern:"H:mm:ss",timeEnabled:!0},longMonthYear:{datePattern:"MMMM y"},shortMonthYear:{datePattern:"MMM y"},year:{datePattern:"y"}},constructor:function(e,t){t&&(this._rowSelectHandler=l(this._rowSelectHandler,0),this._rowDeselectHandler=l(this._rowDeselectHandler,0),this._refreshHandler=l(this._refreshHandler,0))},postMixInProperties:function(){this.inherited(arguments),this.set({columns:[],layerInfo:{},selectedRows:[],selectedRowIds:[],hiddenFields:this.hiddenFields||[],outFields:this.outFields||["*"],fieldInfos:this.fieldInfos||[],menuFunctions:this.menuFunctions||[],columnMenuFunctions:this.columnMenuFunctions||[],gridOptions:y.mixin({},this._defaultGridOptions,this.gridOptions),dateOptions:y.mixin({},this._defaultDateOptions,this.dateOptions),_fieldInfos:[],_cachedIds:[],_columnRules:{},_relatedGridInfos:[]}),h("touch")&&!this.editOn?this.set("editOn",v):this.editOn||this.set("editOn",this._defaultEditOn),this.filterIds&&0===this.filterIds.length&&(this.filterIds=null),this._noDataMessage=this.gridOptions.noDataMessage||this._i18nStrings.noData},startup:function(){this.inherited(arguments);var e=this.featureLayer;e&&e.loadError?this._showLoadError():this.domNode&&e.loaded?this._setUpDataForMainGrid():this.own(u(e,"load",y.hitch(this,(function(){this._setUpDataForMainGrid()}))),u(e,"error",y.hitch(this,(function(){e.loaded||this._showLoadError()}))))},destroy:function(){this.inherited(arguments),this._statisticsDialog&&this._statisticsDialog.destroy(),this._attachmentsDialog&&this._attachmentsDialog.destroy(),this._grid&&this._grid._destroyColumns()},refresh:function(e){var t,i=e||this._grid,s=this._relatedGridInfos,r=s.length;return i===this._grid&&r>0&&_.forEach(s,(function(e,i){(t=s[r-1-i])&&t.grid&&this._removeGrid(t.grid)}),this),this._refreshStore({grid:i}).then((function(){i.refresh()}))},resize:function(e){this._gridBorderContainerNode&&this._gridBorderContainerNode.resize();var t=e&&e.resize?e:this._grid;t&&t.resize()},clearSelection:function(e){var t=e||this._grid;t&&t.clearSelection()},getRowDataById:function(e,t){var i=t||this._grid;if(i)return i.getRowDataById(e)},filterSelectedRecords:function(e,t){var i=t||this._grid,s=i?i.selectedRowIds:[];i&&s&&s.length&&this.filterRecordsByIds(i.selectedRowIds)},filterRecordsByIds:function(e,t){var i,s=t||this._grid;s&&(this.filterIds=e,s.filterIds=e,e&&0!==e.length||(this.selectedRows=[],this.selectedRowIds=[],s.selectedFeatureCount=0,s.selectedRowIds=[],s.selectedRows=[]),this._refreshStore({grid:s}),i=e||[],this.emit("filter",{ids:i}))},clearFilter:function(e){var t=e||this._grid;t&&this.filterRecordsByIds(null,t)},getFeatureDataById:function(e){return e instanceof Array?r.queryLayerForFeature({layer:this.featureLayer,id:e}):r.queryLayerForFeatures({layer:this.featureLayer,ids:e})},selectRows:function(e,t,i){var s=i||this._grid;s&&s.selectRows(e,t)},sort:function(e,t,i){var s,n,o=i||this._grid;o&&e&&(s=r.getOrderByString(e,t),n=r.getColumnFromFieldName({fieldName:e,grid:o}),this._sortField(o,{field:e,descending:t,column:n,orderByFields:[s]}))},centerOnSelection:function(e){return(e||this._grid).centerOnSelection()},_setUpMainGrid:function(e,t){var s=new i({map:this.map,layer:e,layerInfo:t,idProperty:t.idProperty,customFieldInfos:this._getCustomFieldInfos(e)||this.fieldInfos,expressionInfos:this._getExpressionInfos(e),defaultSort:this._defaultSort,outFields:this.outFields,hiddenFields:this.hiddenFields,filterIds:this.filterIds,gridOptions:this.gridOptions,dateOptions:this.dateOptions,batchCount:this.batchCount,editable:this.editable,editOn:this.editOn,css:this.css,showAttachments:this._showAttachments,showRelatedRecords:this._showRelatedRecords,showCyclicalRelationships:this.showCyclicalRelationships,showStatistics:this.showStatistics,showFieldDetails:this.showFieldDetails,showGridHeader:this.showGridHeader,showGridMenu:this.showGridMenu,showFeatureCount:this.showFeatureCount,showDataTypes:this.showDataTypes,showColumnHeaderTooltips:this.showColumnHeaderTooltips,showColumnHeaderTooltipsWithDescription:this.showColumnHeaderTooltipsWithDescription,showColumnHider:this.showColumnHiderButton,syncSelection:this.syncSelection,menuFunctions:this.menuFunctions,showDefaultSortMenuItem:this.showDefaultSortMenuItem,columnMenuFunctions:this.columnMenuFunctions,showFilterMenuItems:this.showFilterMenuItems,showExpressionFields:this.showExpressionFields},this._gridNode);s.startup(),this.set({_grid:s,grid:s.dGrid,gridMenu:s.optionsMenu,gridMenuAnchor:s.optionsMenuAnchor}),this._wireUpGridEvents(s),s.showLoadingIndicator(),s.updateNoDataMessage(""),s.setHeaderTitle(this._i18nStrings.loadingData),s.resize(),this._setUpColumns({grid:s,layer:e}),r.queryLayerForCount({layer:e,layerInfo:t}).then(y.hitch(this,(function(i){s.set("featureCount",i),s.updateHeaderText(),this._generateStore({grid:s,layer:e,layerInfo:t,count:i,filterIds:this.filterIds}).then(y.hitch(this,(function(e){i||s.updateNoDataMessage(this._noDataMessage),this.set("dataStore",e),s.updateStore(e),s.hideLoadingIndicator(),setTimeout(y.hitch(this,(function(){this.resize()}),200))}))).otherwise(y.hitch(this,(function(){this._showLoadError(),s.updateNoDataMessage(this._noDataMessage)})))}))).otherwise(y.hitch(this,(function(){this._showLoadError(),s.updateNoDataMessage(this._noDataMessage)})))},_setUpDataForMainGrid:function(){var e=this.featureLayer,t=this.gridOptions,i=this.outFields;this._generateLayerInfo(e).then(y.hitch(this,(function(s){var n=s.idProperty;s.hasRelatedRecords&&(this._showRelatedRecords=!!this.showRelatedRecords),s.hasAttachments&&(this._showAttachments=!!this.showAttachments);var o=t.sort&&t.sort.field?r.findFirst(e.fields,"name",t.sort.field):null,a=o&&o.name?o.name:n,d=!(!t.sort||!t.sort.descending),l=r.getOrderByString(a,d);0===(i=_.filter(i,(function(t){return!!r.findFirst(e.fields,"name",t)}),this)).length&&i.push("*"),this.layerInfo=s,this.idProperty=n,this._orderByFields=[l],this._defaultSort={attribute:a,descending:d},this._setUpMainGrid(e,s)})))},_getCustomFieldInfos:function(e){var t=this._getPopupInfo(e);return t&&t.fieldInfos?this._updatePopupInfosDateFormat(t.fieldInfos):null},_getExpressionInfos:function(e){var t=this._getPopupInfo(e);return t&&t.expressionInfos?t.expressionInfos:null},_getPopupInfo:function(e){var t=e.id||e.layerId||0,i=this._layerInfos?this._layerInfos[t]:null;return i?i.popupInfo:null},_generateLayerInfo:function(e){var t=new m,i=e.id||e.layerId||0,s=e.objectIdField;if(!s){var r=JSON.parse(e._json);r.uniqueIdField&&r.uniqueIdField.name&&(s=r.uniqueIdField.name)}var n={idProperty:s,layerId:i,userIds:{}};return e.credential&&(n.userIds[i]=e.credential.userId),n.userId&&(n.userIds[i]=n.userId),n.isFeatureCollection=e._collection&&!0===e._collection||null===e.url&&null===e._url,n.typeIdField=e.typeIdField,n.types=e.types,n.subtypeField=e.subtypeField,n.subtypes=e.subtypes,n.editable=e.isEditable?e.isEditable():!!e.userIsAdmin||!1,n.editCapabilities=e.getEditCapabilities?e.getEditCapabilities():{},n.hasRelatedRecords=e.relationships&&e.relationships.length>0,n.supportsAdvancedQueryRelated=!(!e.advancedQueryCapabilities||!e.advancedQueryCapabilities.supportsAdvancedQueryRelated),n.hasAttachments=e.hasAttachments,n.queryAttachmentsSupported=!0,n=y.clone(n),t.resolve(n),t},_setUpColumns:function(e){var i,s,n,o=e.grid,a=e.layer,d=a.fields;if(i=a.getOutFields?a.getOutFields():["*"],s=i&&i[0]&&"*"===i[0]?d:_.filter(d,(function(e){return-1!==_.indexOf(i,e.name)})),o===this._grid&&"*"!==this.outFields[0]&&(s=_.filter(s,y.hitch(this,(function(e){return-1!==_.indexOf(this.outFields,e.name)})))),t.isDefined(a.objectIdField)&&!r.findFirst(s,"name",a.objectIdField)){var l=r.findFirst(d,"name",a.objectIdField);l&&s.unshift(l)}if(this.showExpressionFields){var h=this._getPopupInfo(a);if(h&&h.expressionInfos){var u=this._getCustomFieldInfos(a);_.forEach(u,(function(e){var t=r.getExpressionInfo(h.expressionInfos,e.fieldName);t&&s.push({name:e.fieldName,alias:t.title,editable:!1,nullable:!1,type:t.returnType})}))}}n=o._setUpColumns(s),o===this._grid&&this.set({columns:n.columns,_fieldInfos:n.fieldInfos})},_showLoadError:function(e){var t=e&&e.grid?e.grid:this._grid,i=e&&e.error?e.error:this._i18nStrings.dataError;t&&(t.hideLoadingIndicator(),t.setHeaderTitle(i)),this.emit("error",{message:i})},_wireUpGridEvents:function(e){e&&(e.on("load",y.hitch(this,(function(t){e===this._grid&&this.set("loaded",t.loaded),this.emit("load",t.loaded)}))),e.on("error",y.hitch(this,(function(e){this._showLoadError(),this.emit("error",e)}))),e.on("row-select",y.hitch(this,this._rowSelectHandler,e)),e.on("row-deselect",y.hitch(this,this._rowDeselectHandler,e)),e.on("refresh",y.hitch(this,this._refreshHandler,e)),e.on("sort",y.hitch(this,this._sortField,e)),e.on("filter",y.hitch(this,(function(e){this.emit("filter",e)}))),e.on("column-resize",y.hitch(this,(function(e){this.emit("column-resize",e)}))),e.on("column-state-change",y.hitch(this,(function(e){this.emit("column-state-change",e)}))),e.on("editor-show",y.hitch(this,(function(e){this.emit("editor-show",e)}))),e.on("editor-hide",y.hitch(this,(function(e){this.emit("editor-hide",e)}))),e.on("data-change",y.hitch(this,(function(e){this.emit("data-change",e)}))),e.on("edits-complete",y.hitch(this,(function(e){this.emit("edits-complete",e)}))),e.on("layer-click",y.hitch(this,(function(e){this.emit("layer-click",e)}))),e.on("layer-selection-complete",y.hitch(this,(function(t){e===this._grid&&this.syncSelection&&this._syncSelectionFromLayer({grid:e,features:t.features}),this.emit("layer-selection-complete",t)}))),e.on("layer-selection-clear",y.hitch(this,(function(t){e===this._grid&&this.syncSelection&&this.clearSelection(),this.emit("layer-selection-clear",t)}))),e.on("layer-update-end",y.hitch(this,(function(e){this.emit("layer-update-end",e)}))),e.on("layer-refresh-tick",y.hitch(this,(function(e){this.refresh()}))),e.on("show-selected-records",y.hitch(this,(function(t){this.emit("show-selected-records",{grid:e,ids:t.ids}),this.filterRecordsByIds(t.ids,e)}))),e.on("clear-selection",y.hitch(this,(function(){this.emit("clear-selection")}))),e.on("clear-filter",y.hitch(this,this.clearFilter,e)),e.on("show-statistics",y.hitch(this,(function(e){this._statisticsDialog=e.dialog,this.emit("show-statistics",{dialog:e.dialog,statistics:e.statistics})}))),e.on("show-attachments",y.hitch(this,(function(e){this._attachmentsDialog=e.dialog,this.emit("show-attachments",{featureId:e.featureId,dialog:e.dialog,attachments:e.attachments})}))),e.on("show-related-records",y.hitch(this,this._showRelatedRecordsCallback,e)),e.on("show-detailed-field-view",y.hitch(this,this._showDetailedFieldViewCallback,e)),e.on("add-attachment-complete",y.hitch(this,(function(e){this.emit("add-attachment-complete",e)}))),e.on("delete-attachment-complete",y.hitch(this,(function(e){this.emit("delete-attachment-complete",e)}))))},_wireUpRelatedGridEvents:function(e){var t=e.grid,i=e.parentGrid;t.own(u(i,"row-select",this._updateRelatedGridsHandler.bind(this,e)))},_updateRelatedGridsHandler:function(e,t){if(t.rows&&t.rows.length&&t.rows[0].data){var i=e.grid,s=e.parentGrid,n=e.relationship,o=this._relatedGridInfos,a=t.rows[0],d=o[o.length-1],l=d?d.grid:null;if(l){var h=i===l,u=parseInt(a.id,10),c=r.findFirst(i.layer.relationships,"id",n.id),f=r.findFirst(o,"grid",i),m=_.indexOf(o,f),g=s._getRelatedRecordsCount({featureId:u,relationshipId:n.id});if(g>0){h||_.forEach(o,(function(e,t){e.grid&&t>=m&&(e.grid.emptyStore(),e.grid.set("featureCount",0),e.grid.updateHeaderText())}));var p=n.keyField;void 0===a.data[p]&&(p=s.layer.getField(p).name);var w=a.data[p];r.getRelationshipWhereClause({layer:i.layer,originRelationship:n,destinationRelationship:c,keyValue:w}).then(y.hitch(this,(function(e){i.set({where:e,featureCount:g}),i.updateHeaderText(),this._refreshStore({grid:i}).then((function(e){h||setTimeout((function(){if(i.store){var e,t,s=i.store.data;(e=s?s[Object.keys(s)[0]]:null)&&(t=e.attributes[i.idProperty],i.selectRows(t,!1))}}),600)}))})))}else h?(i.emptyStore(),i.set("featureCount",0),i.updateHeaderText(),i.refresh()):(i.set("featureCount",0),i.updateHeaderText(),_.forEach(o,(function(e,t){var i=e.grid;t<m||(i.emptyStore(),i.set("featureCount",0),i.updateHeaderText(),i.refresh())})))}}},_generateStore:function(e){var t=e.grid,i=e.layer,s=e.layerInfo,r=e.store||t.store||null,n=e.where||null,o=e.orderByFields||null,a=e.count||null,d=e.filterIds||null;return r&&t.emptyStore(),s.isFeatureCollection?this._generateStoreForFeatureCollection({grid:t,layer:i,layerInfo:s}):i.advancedQueryCapabilities&&!i.advancedQueryCapabilities.supportsPagination?this._generateStoreForNonPaginatedLayer({grid:t,layer:i,layerInfo:s,where:n,orderByFields:o,count:a,filterIds:d}):this._generateCacheStore({grid:t,where:n,orderByFields:o,count:a,ids:d})},_generateCacheStore:function(e){var t,i=new m,n=e.grid;t=e.orderByFields?e.orderByFields:n===this._grid?this._orderByFields&&this._orderByFields.length?this._orderByFields:[r.getOrderByString(this._defaultSort.attribute,this._defaultSort.descending)]:null;var o=this.showAttachments&&n.layerInfo.hasAttachments,a=this.showRelatedRecords&&n.layerInfo.hasRelatedRecords,l=s.generateCacheStore({grid:n,layer:n.layer,ids:e.ids,where:e.where,orderByFields:t,count:e.count,getAttachments:o,getRelatedRecords:a});return d.before(l,"query",(function(e,t){n.showLoadingIndicator()})),d.after(l,"query",(function(e){return e.then((function(e){e.attachmentInfos?n._updateAttachmentInfos(e.attachmentInfos):n.layerInfo.queryAttachmentsSupported=!1,e.relatedRecordInfos&&(n.layerInfo.supportsAdvancedQueryRelated?n._updateRelatedRecordCounts(e.relatedRecordInfos):n._updateRelatedRecordInfos(e.relatedRecordInfos)),n.hideLoadingIndicator()})).otherwise((function(){n.hideLoadingIndicator()})),e})),i.resolve(l),i},_generateMemoryStore:function(e){var t=e.grid,i=e.features,r=new m,n=s.generateMemoryStore({features:i,idProperty:this.idProperty});return n.query=y.hitch(this,s.generateSort,t.dGrid,n),r.resolve(n),r},_generateStoreForFeatureCollection:function(e){var t=e.grid,i=e.layer;return this._generateMemoryStore({grid:t,features:i.graphics})},_generateStoreForNonPaginatedLayer:function(e){var t=e.grid,i=e.layer,s=e.layerInfo,n=e.where||null,o=e.orderByFields||null,a=e.filterIds||null;return a&&a.length?this._generateCacheStore({grid:t,ids:a,where:n,orderByFields:o}):r.queryLayerForIds({layer:i,idProperty:s.idProperty,where:n}).then(y.hitch(this,(function(e){return s._cachedIds=e,t.layerInfo.cachedIds=e,this._generateCacheStore({grid:t,ids:e,where:n,orderByFields:o})}))).otherwise(y.hitch(this,(function(){this._showLoadError()})))},_refreshStore:function(e){var t=e.grid,i=t.filterIds,s=e.where||t.where||null,n=e.orderByFields,o=t.layer,a=t.layerInfo;return t.showLoadingIndicator(),t.updateNoDataMessage(""),t.setHeaderTitle(this._i18nStrings.loadingData),r.queryLayerForCount({layer:o,layerInfo:a,where:s}).then(y.hitch(this,(function(e){return t.set("featureCount",e),t.updateHeaderText(),this._generateStore({grid:t,layer:o,layerInfo:a,orderByFields:n,where:s,count:e,filterIds:i}).then(y.hitch(this,(function(i){return t===this._grid&&this.set("dataStore",i),e||t.updateNoDataMessage(this._noDataMessage),t.updateStore(i),t.hideLoadingIndicator(),i})))}))).otherwise(y.hitch(this,(function(){return this._showLoadError(),t.updateNoDataMessage(this._noDataMessage),null})))},_setEditableAttr:function(e){this._grid&&this._grid.set("editable",!!e),_.forEach(this._relatedGridInfos,(function(t){t.grid.set("editable",!!e)}))},_sortField:function(e,t){var i=t.column,s=parseInt(t.id,10),r=t.field,n=t.descending,o=t.orderByFields;e===this._grid&&(this._orderByFields=o),e.emptyStore(),i?e.updateSort([{attribute:r,columnId:s,fieldType:i.type,descending:n}]):e.updateSort([{attribute:r,descending:n}]),this._refreshStore({grid:e,orderByFields:o}).then(y.hitch(this,(function(){this.emit("sort",{field:r,descending:n})})))},_rowSelectHandler:function(e,t){this.syncSelection&&this._syncSelectionFromGrid({grid:e,ids:e.selectedRowIds}),e===this._grid&&(this.set({selectedRows:e.selectedRows,selectedRowIds:e.selectedRowIds}),this.emit("row-select",t))},_rowDeselectHandler:function(e,t){var i=e.selectedRows;this.syncSelection&&(i.length>0?this._syncSelectionFromGrid({grid:e,ids:e.selectedRowIds}):e.layer.clearSelection(!0)),e===this._grid&&(this.set({selectedRows:i,selectedRowIds:e.selectedRowIds}),this.emit("row-deselect",t))},_refreshHandler:function(e,t){e===this._grid&&this.emit("refresh",t)},_syncSelectionFromLayer:function(e){var t,i,s=e.grid||this._grid,n=e.features||[],o=s.idProperty;0!==n.length?(t=_.map(n,(function(e){return e.attributes[o]})),r.compareIntArrays(t,this.selectedRowIds)||(this.map&&this.zoomToSelection&&n.length>0&&(i=r.calculateExtentFromFeatures(n),this.map.setExtent(i)),this.selectRows(t,!0))):this.clearSelection()},_syncSelectionFromGrid:function(e){var t,i,s=e.grid||this._grid,n=s.layer,o=e.ids,a=n.getSelectedFeatures(),d=s.idProperty;t=_.map(a,(function(e){return e.attributes[d]})),r.compareIntArrays(o,t)||r.queryLayerForFeatures({grid:s,layer:n,ids:o}).then(y.hitch(this,(function(e){if(e&&e.features){var t=e.features;t.length&&(this.map&&this.zoomToSelection&&(i=r.calculateExtentFromFeatures(t),this.map.setExtent(i)),r.selectFeaturesById({grid:s,ids:o}))}})))},_showRelatedRecordsCallback:function(e,t){var i,s,n,o,a,d=t.columnId,l=t.relationship,h=t.keyFieldValue,u=t.row,c=t.count;e===this._grid?(o=this._centerPaneNode,a=this._leadingPaneNode):(n=this._relatedGridInfos.length-1,s=this._relatedGridInfos[n],o=s.layout.centerContentPane,a=s.layout.leadingContentPane,this._removeButtonNode(s.closeButton),s.closeButton=null),this._addSmallRelatedRecordsColumn({grid:e,relationship:l}),e.showFieldDetails=!1,e.showFeatureCount=!1,e.updateSelectionMode("single"),e.updateHeaderText(),e.hideOptionsMenu(),i=[this._shrinkGrid({grid:e,centerPane:o,leadingPane:a,columnId:d}),this._setUpDataForRelatedGrid({parentGrid:e,relationship:l})],f(i).then(y.hitch(this,(function(t){var i,s,n=t[1].layer,a=o;this._addHiddenColumnRules({grid:e,columnId:d}),e.refresh(),e.selectRows(u[e.idProperty],!0,!0),this._showPane(a),s=this._generateSubLayout(a.domNode),this.resize(),this._generateLayerInfo(n).then(y.hitch(this,(function(t){this.emit("show-related-records",{grid:e,relationship:l,row:u}),i=r.findFirst(n.relationships,"id",l.id),r.getRelationshipWhereClause({layer:n,originRelationship:l,destinationRelationship:i,keyValue:h}).then(y.hitch(this,(function(i){this._setUpRelatedGrid({parentGrid:e,layer:n,layerInfo:t,relationship:l,where:i,layout:s,count:c})})))})))})))},_setUpDataForRelatedGrid:function(e){var t=e.parentGrid.layer,i=e.relationship.relatedTableId;return this._setUpRelatedLayer({baseLayer:t,layerId:i}).then((function(e){return{layer:e,layerId:i}}))},_generateSubLayout:function(e){var t,i,s,r,n=this.css,a=n.borderContainer+" "+n.leftMargin,d=n.contentPane+" "+n.hidden;return t=new G({className:a,gutters:!1,design:"headline"}),i=new T({className:n.contentPane,region:"leading"}),s=new T({className:d,region:"center"}),r=o.create("div",null,i.domNode),t.addChild(i),t.addChild(s),t.placeAt(e),t.startup(),{borderContainer:t,leadingContentPane:i,centerContentPane:s,containerNode:r}},_setUpRelatedGrid:function(e){var t=this,s=e.layer,n=e.layerInfo,o=n.idProperty,a=e.parentGrid,d=e.relationship,l=e.layout,h=e.where||null,u=e.count||null,c=_.map(this._relatedGridInfos,(function(e){return e.grid.layer.layerId}));c.unshift(this._grid.layer.layerId);var f=[{label:this._i18nStrings.close,callback:function(){t._removeGrid(this)}}],m=new i({map:this.map,layer:s,layerInfo:n,idProperty:o,customFieldInfos:this._getCustomFieldInfos(s),expressionInfos:this._getExpressionInfos(s),defaultSort:{attribute:o,descending:!1},outFields:["*"],where:h,gridOptions:this.gridOptions,dateOptions:this.dateOptions,batchCount:this.batchCount,editable:this.editable,editOn:this.editOn,css:this.css,showAttachments:!(!this.showAttachments||!n.hasAttachments),showRelatedRecords:!0,showCyclicalRelationships:this.showCyclicalRelationships,showStatistics:this.showStatistics,showFieldDetails:!1,showGridHeader:this.showGridHeader,showGridMenu:this.showGridMenu,showFeatureCount:this.showFeatureCount,showDataTypes:this.showDataTypes,showColumnHeaderTooltips:this.showColumnHeaderTooltips,showColumnHeaderTooltipsWithDescription:this.showColumnHeaderTooltipsWithDescription,showColumnHider:this.showColumnHiderButton,menuFunctions:f,showFilterMenuItems:!1,showDefaultSortMenuItem:this.showDefaultSortMenuItem,syncSelection:!1,showExpressionFields:this.showExpressionFields,visibleLayerIds:c},l.containerNode);m.startup(),this._wireUpGridEvents(m),this._wireUpRelatedGridEvents({grid:m,parentGrid:a,relationship:d}),m.showLoadingIndicator(),m.updateNoDataMessage(""),m.setHeaderTitle(this._i18nStrings.loadingData),m.resize();var g=this._generateColumnSwitcherButton(a),p=this._generateGridCloseButton(m);if(this._relatedGridInfos.push({grid:m,parentGrid:a,layout:l,relationship:d,pickerButton:g,closeButton:p}),this._setUpColumns({grid:m,layer:s}),r.isValueEmpty(u))return r.queryLayerForCount({layer:s,layerInfo:n}).then(y.hitch(this,(function(e){m.set("featureCount",e),m.updateHeaderText(),this._generateStore({grid:m,layer:s,layout:l,layerInfo:n,where:h,count:e,filterIds:null}).then(y.hitch(this,(function(t){e||m.updateNoDataMessage(this._noDataMessage),m.updateStore(t),m.hideLoadingIndicator()})))}))).otherwise(y.hitch(this,(function(){this._showLoadError(),m.updateNoDataMessage(this._noDataMessage)})));m.set("featureCount",u),m.updateHeaderText(),this._generateStore({grid:m,layer:s,layout:l,layerInfo:n,where:h,count:u,filterIds:null}).then(y.hitch(this,(function(e){u||m.updateNoDataMessage(this._noDataMessage),m.updateStore(e),m.hideLoadingIndicator()}))).otherwise(y.hitch(this,(function(){this._showLoadError(),m.updateNoDataMessage(this._noDataMessage)})))},_setUpRelatedLayer:function(e){var t=new m,i=e.baseLayer,s=e.layerId,n=r.initFeatureLayer(i,s);return n.loaded?t.resolve(n):u(n,"load",(function(){t.resolve(n)})),t},_showPane:function(e){e&&e.domNode&&n.remove(e.domNode,this.css.hidden)},_hidePane:function(e){e&&e.domNode&&n.add(e.domNode,this.css.hidden)},_shrinkGrid:function(e){var t,i=new m,s=e.grid,r=e.leadingPane,n=e.finalWidth||220;return t=w.animateProperty({node:r.id,properties:{width:{start:function(){return r.domNode.getBoundingClientRect().width},end:function(){return n}}}}).play(),u(t,"End",(function(){i.resolve(s)})),i},_growGrid:function(e){var t,i,s,r,n=e.grid;this._removeSmallRelatedRecordsColumn(n),this._removeHiddenColumnRules(n),n.showColumnHider&&n.showColumnHiderButton(),n===this._grid?(s=this._centerPaneNode,r=this._leadingPaneNode,n.showFieldDetails=this.showFieldDetails,this.emit("hide-related-records")):(t=this._relatedGridInfos.length-1,s=(i=this._relatedGridInfos[t]).layout.centerContentPane,r=i.layout.leadingContentPane,i.closeButton=this._generateGridCloseButton(n)),this._hidePane(s),r.domNode&&a.set(r.domNode,"width","100%"),n.updateSelectionMode(this.gridOptions.selectionMode),n.showFeatureCount=this.showFeatureCount,n.updateHeaderText(),this.showGridMenu&&n.showOptionsMenu(),n.resize(),this.resize()},_removeGrid:function(e){if(e!==this._grid){var t=r.findFirst(this._relatedGridInfos,"grid",e),i=t.parentGrid,s=t.layout.borderContainer,n=t.layout.leadingContentPane,o=t.layout.centerContentPane;this._hidePane(o),n.domNode&&a.set(n.domNode,"width","100%"),this._removeButtonNode(t.pickerButton),this._relatedGridInfos.pop(),e.destroy(),s.destroy(),this._growGrid({grid:i})}},_addHiddenColumnRules:function(e){var t,i,s=e.grid,r=e.columnId,n=s.getColumns(),o=Object.keys(n);t=_.map(o,(function(e,t){return i=t===r?"display: table-cell;":"display: none;",s.styleColumn(e,i)})),this._columnRules[s.id]=t},_removeHiddenColumnRules:function(e){var t=this._columnRules[e.id];_.forEach(t,(function(e){e.remove()})),this._columnRules[e.id]=[]},_addSmallRelatedRecordsColumn:function(e){var t=e.grid,i=e.relationship.id,s=t.columns,r=t.idProperty;s.push({unhidable:!0,label:"esriRelatedRecordsSmall",field:"esriRelatedRecordsSmall",get:function(e){var s=t._getRelatedRecordsCount({featureId:e[r],relationshipId:i});return c.substitute(t._i18nStrings.parenValue,{value:s})}})},_removeSmallRelatedRecordsColumn:function(e){var t=e.columns;"esriRelatedRecordsSmall"===(t&&t[t.length-1]?t[t.length-1].field:null)&&(t.pop(),e.refresh())},_generateGridCloseButton:function(e){var t,i=this.css,s=i.menuItem+" "+i.button+" "+i.closeIcon;return t=o.create("div",{className:s,tabIndex:0}),o.place(t,e._menuNode,"before"),u(t,v,y.hitch(this,(function(){this._removeGrid(e)}))),t},_generateColumnSwitcherButton:function(e){var t,i=e._gridHeaderNode.domNode,s=this._generateColumnSwitcherMenu(e),r=this.css,n=this._i18nStrings,a=r.menuItem+" "+r.button+" "+r.menuIcon;return t=o.create("div",{title:n.columnSelectionMenu,"aria-label":n.columnSelectionMenu,className:a,tabIndex:0},i),u(t,[v,"keydown"],y.hitch(this,(function(e){var i=t.getBoundingClientRect(),r=i.top+i.height,n=this.isLeftToRight()?i.right-i.width:i.right;s._openMyself({target:e.target,delegatedTarget:t,iframe:null,coords:{x:n,y:r}})}))),t},_generateColumnSwitcherMenu:function(e){var t,i,s=e.fieldInfos,n=this.css;return t=new M({className:n.optionsMenu}),_.forEach(e.columns,(function(o){var a=parseInt(o.id,10),d=r.findFirst(s,"name",o.field);"esriRelatedRecords"===o.type||"esriRelatedRecordsSmall"===o.field||"esriAttachments"===o.type||"esriFieldTypeGUID"===d.type||"esriFieldTypeGlobalID"===d.type||-1!==_.indexOf(e._unsupportedFieldTypes,d.type)||!!o.hidden||(i=new D({label:o.label||o.field,baseClass:n.menuItem,tabIndex:1}),u(i,v,y.hitch(this,(function(){this._removeHiddenColumnRules(e),this._addHiddenColumnRules({grid:e,columnId:a}),this.emit("column-focus-change",{fieldInfo:d,column:o})}))),t.addChild(i))}),this),t.startup(),t},_removeButtonNode:function(e){e&&e&&e.parentNode&&e.parentNode.removeChild(e)},_showDetailedFieldViewCallback:function(e,t){var i,s=t.columnId,r=t.fieldInfo,n=this._centerPaneNode,o=this._leadingPaneNode,a=o.domNode.getBoundingClientRect().width/6;e.showFeatureCount=!1,e.showFieldDetails=!1,e.updateHeaderText(),e.hideOptionsMenu(),this._shrinkGrid({grid:e,centerPane:n,leadingPane:o,columnId:s,finalWidth:a}).then(y.hitch(this,(function(){i=this._generateColumnSwitcherButton(e),this._addHiddenColumnRules({grid:e,columnId:s}),e.updateSelectionMode("single"),e.refresh(),this.resize(),this.emit("show-detailed-field-view",{columnId:s,grid:e,fieldInfo:r,pickerButton:i})})))},_updatePopupInfosDateFormat:function(e){return _.forEach(e,(function(e){e.format&&e.format.dateFormat&&(e.format.dateFormat=this._popupDateFormats[e.format.dateFormat])}),this),e}});return h("extend-esri")&&y.setObject("dijit.FeatureTable",E,e),E}));