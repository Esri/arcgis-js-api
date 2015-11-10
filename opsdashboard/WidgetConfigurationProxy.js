define(["dojo/_base/declare","dojo/_base/lang","./core/errorMessages","./core/ExtensionConfigurationBase"],function(e,t,i,o){return e([o],{config:null,_initializeResponseReceived:function(){return this.inherited(arguments).then(t.hitch(this,function(){this.config.dataSourceConfigs||(this.config.dataSourceConfigs=[])}))},_messageReceived:function(e){switch(e.functionName.toLowerCase()){case"datasourceselected":return this._dataSourceSelectionChanged(e.args);case"mapWidgetSelected":return this._mapWidgetSelectionChanged(e.args.mapWidgetId)}},getDataSourceConfig:function(e){if(!this._isHostInitialized())throw new Error(i.hostNotReady);var t=e;"object"==typeof e&&(t=e.id);for(var o=0;o<this.config.dataSourceConfigs.length;o++)if(this.config.dataSourceConfigs[o].dataSourceId===t)return this.config.dataSourceConfigs[o];return null},_dataSourceSelectionChanged:function(e){for(var i=e.dataSourceId,o=0;o<this.config.dataSourceConfigs.length;o++)if(this.config.dataSourceConfigs[o].dataSourceId!==i){this.config.dataSourceConfigs.splice(o,1);break}var n=this.getDataSourceConfig(i);n||(n={dataSourceId:i},this.config.dataSourceConfigs.push(n)),this.getDataSourceProxy(i).then(t.hitch(this,function(e){this.dataSourceSelectionChanged(e,n),this.emit("data-source-selection-changed",{dataSourceProxy:e,dataSourceConfig:n})}))},dataSourceSelectionChanged:function(){},_mapWidgetSelectionChanged:function(e){this.getMapWidgetProxy(e).then(t.hitch(this,function(e){this.mapWidgetSelectionChanged(e),this.emit("map-widget-selection-changed",{mapWidgetProxy:e})}))},mapWidgetSelectionChanged:function(){}})});