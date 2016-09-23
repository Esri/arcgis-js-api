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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/io-query","../request","../core/urlUtils","../core/promiseUtils","../geometry/SpatialReference","./TiledLayer","./mixins/ArcGISMapService","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","./support/arcgisLayers","./support/arcgisLayerUrl"],function(e,r,i,t,s,a,n,o,l,c,p,u,h){var d=n.createSubclass([o,l,c,p],{declaredClass:"esri.layers.TileLayer",_mapsWithAttribution:["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_attributionServices:["services.arcgisonline.com/arcgis/rest/services","servicesdev.arcgisonline.com/arcgis/rest/services","servicesqa.arcgisonline.com/arcgis/rest/services"],normalizeCtorArgs:function(r,i){return"string"==typeof r?e.mixin({},{url:r},i):r},load:function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]}).always(this._fetchService.bind(this)))},properties:{operationalLayerType:{get:function(){if(this.capabilities)return-1!==this.capabilities.indexOf("Map")?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"}},attributionDataUrl:{dependsOn:["parsedUrl"],get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))}},popupTemplates:null,tileServers:{dependsOn:["parsedUrl"],value:null,cast:function(e){return Array.isArray(e)?e.map(function(e){return t.urlToObject(e).path}):null},get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},spatialReference:{json:{readFrom:["spatialReference","tileInfo"],read:function(e,r){return e=e||r.tileInfo&&r.tileInfo.spatialReference,e&&a.fromJSON(e)}}}},getTileUrl:function(e,i,s){var a=this.tileServers,n=this.parsedUrl.query?r.objectToQuery(this.parsedUrl.query):"";this.token&&(n=n+(n?"&":"?")+"token="+encodeURIComponent(this.token)),this.resampling&&!this.tileMap&&this.supportsBlankTile&&(n=n+(n?"&":"?")+"blankTile=false"),this.refreshTimestamp&&(n=n+(n?"&":"?")+"_ts="+this.refreshTimestamp);var o=(a&&a.length?a[i%a.length]:this.parsedUrl.path)+"/tile/"+e+"/"+i+"/"+s;return o+=n?"?"+n:"",t.addProxy(o)},_fetchService:function(){return s.resolve().then(function(){return this.resourceInfo||i(this.parsedUrl.path,{query:e.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"})}.bind(this)).then(function(e){return e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(e.data,{origin:"service",url:this.parsedUrl}),10.1!==this.version||h.isHostedAgolService(this.url)?void 0:u.fetchServerVersion(this.url).then(function(e){this.read({currentVersion:e})}.bind(this)).otherwise(function(){})}.bind(this))},_getMapName:function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},_getDefaultAttribution:function(e){if(e){var r;e=e.toLowerCase();for(var i=0,s=this._mapsWithAttribution.length;s>i;i++)if(r=this._mapsWithAttribution[i],r.toLowerCase().indexOf(e)>-1)return t.makeAbsolute("//static.arcgis.com/attribution/"+r)}},_getDefaultTileServers:function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),i=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||i?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}});return d});