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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/io-query","../request","../core/urlUtils","../core/promiseUtils","../geometry/SpatialReference","./TiledLayer","./mixins/ArcGISMapService","./mixins/ArcGISCachedService","./mixins/PortalLayer"],function(e,r,t,i,a,s,n,o,l,c){var u=n.createSubclass([o,l,c],{declaredClass:"esri.layers.TileLayer",portalLoaderModule:"portal/loaders/TileLayerLoader",_mapsWithAttribution:["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_attributionServices:["services.arcgisonline.com/arcgis/rest/services","servicesdev.arcgisonline.com/arcgis/rest/services","servicesqa.arcgisonline.com/arcgis/rest/services"],normalizeCtorArgs:function(r,t){return"string"==typeof r?e.mixin({},{url:r},t):r},getDefaults:function(r){var t=r.url,a=null,s=[];if(t){var n=i.urlToObject(r.url),o=n.path.toLowerCase();a=this._getDefaultAttribution(this._getMapName(o)),s=this._getDefaultTileServers(o)}return e.mixin(this.inherited(arguments),{tileServers:s,attributionDataUrl:a,hasAttributionData:!!a})},load:function(){this.addResolvingPromise(this.loadFromPortal(this._fetchService.bind(this)))},properties:{popupTemplates:null,tileServers:{value:null,cast:function(e){return Array.isArray(e)?e.map(function(e){return i.urlToObject(e).path}):null}},spatialReference:{json:{readFrom:["spatialReference","tileInfo"],read:function(e,r){return e=e||r.tileInfo&&r.tileInfo.spatialReference,e&&s.fromJSON(e)}}}},getTileUrl:function(t,a,s){var n=this.tileServers,o=e.mixin({},this.parsedUrl.query,{token:this.token,blankTile:this.resampling&&!this.tileMap&&this.supportsBlankTile?!1:null,_ts:this.refreshTimestamp}),l=(n&&n.length?n[a%n.length]:this.parsedUrl.path)+"/tile/"+t+"/"+a+"/"+s;return o=r.objectToQuery(o),l+=o?"?"+o:"",i.addProxy(l)},_fetchService:function(){return a.resolve().then(function(){return this.resourceInfo||t(this.parsedUrl.path,{query:e.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}.bind(this)).then(function(e){e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(e.data)}.bind(this))},_getMapName:function(e){var r=e.match(/^https?\:\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},_getDefaultAttribution:function(e){if(e){var r;e=e.toLowerCase();for(var t=0,i=this._mapsWithAttribution.length;i>t;t++)if(r=this._mapsWithAttribution[t],r.toLowerCase().indexOf(e)>-1)return this._getProtocol()+"//static.arcgis.com/attribution/"+r}},_getProtocol:function(){var e=window.location.protocol;return"file:"===e?"http:":e},_getDefaultTileServers:function(e){var r=-1!==e.search(/^https?\:\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^https?\:\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}});return u});