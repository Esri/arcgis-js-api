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

define(["dojo/_base/declare","dojo/_base/lang","./core/errorMessages","./core/ExtensionConfigurationBase"],(function(e,t,i,o){return e([o],{_initializeResponseReceived:function(e){return this.inherited(arguments).then(t.hitch(this,(function(){this.config.dataSourceConfigs||(this.config.dataSourceConfigs=[])})))},_messageReceived:function(e){switch(e.functionName.toLowerCase()){case"datasourceselected":return this._dataSourceSelectionChanged(e.args);case"mapWidgetSelected":return this._mapWidgetSelectionChanged(e.args.mapWidgetId)}},getDataSourceConfig:function(e){if(!this._isHostInitialized())throw new Error(i.hostNotReady);var t=e;"object"==typeof e&&(t=e.id);for(var o=0;o<this.config.dataSourceConfigs.length;o++)if(this.config.dataSourceConfigs[o].dataSourceId===t)return this.config.dataSourceConfigs[o];return null},_dataSourceSelectionChanged:function(e){for(var i=e.dataSourceId,o=0;o<this.config.dataSourceConfigs.length;o++)if(this.config.dataSourceConfigs[o].dataSourceId!==i){this.config.dataSourceConfigs.splice(o,1);break}var a=this.getDataSourceConfig(i);a||(a={dataSourceId:i},this.config.dataSourceConfigs.push(a)),this.getDataSourceProxy(i).then(t.hitch(this,(function(e){this.dataSourceSelectionChanged(e,a),this.emit("data-source-selection-changed",{dataSourceProxy:e,dataSourceConfig:a})})))},dataSourceSelectionChanged:function(e,t){},_mapWidgetSelectionChanged:function(e){this.getMapWidgetProxy(e).then(t.hitch(this,(function(e){this.mapWidgetSelectionChanged(e),this.emit("map-widget-selection-changed",{mapWidgetProxy:e})})))},mapWidgetSelectionChanged:function(e){}})}));