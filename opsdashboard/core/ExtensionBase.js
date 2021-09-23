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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/_base/Deferred","../../IdentityManager","../../Credential","../../request","./messageHandler","./errorMessages","./MessageReceiver","../MapWidgetProxy","../DataSourceProxy"],(function(e,t,i,r,n,a,o,s,d,c,h,u){return e([c],{drawingType:{POINT:"point",LINE:"line",POLYLINE:"polyline",FREEHAND_POLYLINE:"freehandpolyline",EXTENT:"extent",CIRCLE:"circle",POLYGON:"polygon",FREEHAND_POLYGON:"freehandpolygon"},_hostInitialized:!1,isNative:null,portalUrl:null,constructor:function(){this._dataSourceProxies={},this._mapWidgetProxies=[],s._sendMessageWithReply({functionName:"initialize"}).then(t.hitch(this,this._initializeResponseReceived)).then(t.hitch(this,this._hostReady)).then((function(){s._sendMessage({functionName:"afterInitialize"})})).otherwise(t.hitch(this,this._hostInitializationError))},__messageReceived:function(e){switch(e.functionName.toLowerCase()){case"datasourceadded":return this._dataSourceAdded(e.args.dataSource);case"datasourceremoved":return this._dataSourceRemoved(e.args.dataSourceId);case"mapwidgetadded":return this._mapWidgetAdded(e.args.mapWidget);case"mapwidgetremoved":return this._mapWidgetRemoved(e.args.mapWidgetId);default:return this._messageReceived(e)}},_initializeResponseReceived:function(e){return this.isNative=s.isNative,this._hostInitialized=!0,this.portalHelperServices=e.helperServices,this.portalUrl=e.portalUrl,function(e){if(!e)return;function i(e){return s._sendMessageWithReply({functionName:"getCredential",args:{url:e}})}o.setRequestPreCallback((function(e){return e.failOk=!0,e})),n.signIn=function(e,n){var o=new r;return i(e).then(t.hitch(this,(function(e){var r=new a(e.credential);r.refreshToken=function(){return i(this.server).then(t.hitch(this,(function(e){this.token=e.credential.token,this.expires=e.credential.expires?Number(e.credential.expires):null,this.creationTime=e.credential.creationTime,this.validity=e.credential.validity,this.onTokenChange()})))},o.callback(r)})),(function(e){o.errback(e)})),o},n.setProtocolErrorHandler((function(){return!0}))}(e.usePortalServices),this._setConfig(e.configuration),(new i).resolve()},_isHostInitialized:function(){return this._hostInitialized},_hostReady:function(){this.hostReady(),this.emit("host-ready")},hostReady:function(){},_hostInitializationError:function(e){this._hostInitialized=!1,this.hostInitializationError(e),this.emit("initialization-error",{error:e})},hostInitializationError:function(e){},getMapWidgetProxies:function(){return this._isHostInitialized()?this._mapWidgetProxies&&this._mapWidgetProxies.length>0?(new i).resolve(this._mapWidgetProxies):s._sendMessageWithReply({functionName:"getMapWidgets"}).then(t.hitch(this,(function(e){return this._mapWidgetProxies=e.mapWidgets.map((function(e){return new h(e)}),this),this._mapWidgetProxies}))):(new i).reject(new Error(d.hostNotReady))},getMapWidgetProxy:function(e){return this._isHostInitialized()?e?this.getMapWidgetProxies().then((function(t){for(var i=0;i<t.length;i++)if(t[i].id===e)return t[i];return null})):(new i).reject(new Error(d.invalidArguments)):(new i).reject(new Error(d.hostNotReady))},_mapWidgetRemoved:function(e){for(var t=0;t<this._mapWidgetProxies.length;t++)if(this._mapWidgetProxies[t].id===e){this._mapWidgetProxies.splice(t,1);break}this.mapWidgetRemoved(e),this.emit("map-widget-removed",{mapWidgetId:e})},mapWidgetRemoved:function(e){},_mapWidgetAdded:function(e){var t=new h(e);this._mapWidgetProxies.push(t),this.mapWidgetAdded(t),this.emit("map-widget-added",{mapWidgetProxy:t})},mapWidgetAdded:function(e){},getDataSourceProxies:function(){return this._isHostInitialized()?s._sendMessageWithReply({functionName:"getDataSources"}).then(t.hitch(this,(function(e){return this._dataSourceProxies={},e.dataSources.map((function(e){var t=new u(e);return this._dataSourceProxies[e.id]=t,t}),this)}))):(new i).reject(new Error(d.hostNotReady))},getDataSourceProxy:function(e){if(!this._isHostInitialized())return(new i).reject(new Error(d.hostNotReady));if(!e)return(new i).reject(new Error(d.invalidArguments));var r=this._dataSourceProxies[e];if(r)return(new i).resolve(r);var n={functionName:"getDataSource",args:{dataSourceId:e}};return s._sendMessageWithReply(n).then(t.hitch(this,(function(e){var t=new u(e.dataSource);return this._dataSourceProxies[e.dataSource.id]=t,t})))},_dataSourceRemoved:function(e){for(var t=0;t<this._dataSourceProxies.length;t++)if(this._dataSourceProxies[t].id===e){this._dataSourceProxies.splice(t,1);break}this.dataSourceRemoved(e),this.emit("data-source-removed",{dataSourceId:e})},dataSourceRemoved:function(e){},_dataSourceAdded:function(e){var t=new u(e);this._dataSourceProxies[e.dataSourceId]=t,this.dataSourceAdded(t),this.emit("data-source-added",{dataSourceProxy:t})},dataSourceAdded:function(e){}})}));