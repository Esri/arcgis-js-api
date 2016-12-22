// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/typescript","./core/errorMessages","./core/ExtensionConfigurationBase"],function(e,t,o,i,a,n,r){var c=function(e){function t(){e.apply(this,arguments),this.config=null}return o(t,e),t.prototype._initializeResponseReceived=function(e){var t=this;return this.inherited(arguments).then(function(){t.config.dataSourceConfigs||(t.config.dataSourceConfigs=[])})},t.prototype._messageReceived=function(e){switch(e.functionName.toLowerCase()){case"datasourceselected":return this._dataSourceSelectionChanged(e.args);case"mapWidgetSelected":return this._mapWidgetSelectionChanged(e.args.mapWidgetId)}},t.prototype.getDataSourceConfig=function(e){if(!this._isHostInitialized())throw new Error(n.hostNotReady);var t=e;"object"==typeof e&&(t=e.id);for(var o=0;o<this.config.dataSourceConfigs.length;o++)if(this.config.dataSourceConfigs[o].dataSourceId===t)return this.config.dataSourceConfigs[o];return null},t.prototype._dataSourceSelectionChanged=function(e){for(var t=this,o=e.dataSourceId,i=0;i<this.config.dataSourceConfigs.length;i++)if(this.config.dataSourceConfigs[i].dataSourceId!==o){this.config.dataSourceConfigs.splice(i,1);break}var a=this.getDataSourceConfig(o);a||(a={dataSourceId:o},this.config.dataSourceConfigs.push(a)),this.getDataSourceProxy(o).then(function(e){t.dataSourceSelectionChanged(e,a),t.emit("data-source-selection-changed",{dataSourceProxy:e,dataSourceConfig:a})})},t.prototype.dataSourceSelectionChanged=function(e,t){},t.prototype._mapWidgetSelectionChanged=function(e){var t=this;this.getMapWidgetProxy(e).then(function(e){t.mapWidgetSelectionChanged(e),t.emit("map-widget-selection-changed",{mapWidgetProxy:e})})},t.prototype.mapWidgetSelectionChanged=function(e){},i([a.shared("esri.opsdashboard.WidgetConfigurationProxy")],t.prototype,"declaredClass",void 0),t=i([a.subclass()],t)}(r);return c});