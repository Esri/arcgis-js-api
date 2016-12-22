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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","../request","../core/Error","../core/promiseUtils","../core/requireUtils","./TiledLayer","./mixins/ArcGISMapService","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","./support/rasterFormats/LercCodec"],function(e,r,t,o,i,a,n,p,l,s,u,c,y,d,v,h){function f(){return u}var m=function(r){function u(e){r.call(this),this.type="elevation",this.url=null,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer"}return t(u,r),u.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?a.mixin({},{url:e},r):e},u.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new p("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}}).always(function(){return e._fetchImageService()})),this},u.prototype.fetchTile=function(e,r,t,o){var i=this;return void 0===o&&(o=0),this.load().then(function(){return i._fetchTileAvailability(e,r,t)}).then(function(){var o=i.getTileUrl(e,r,t),a={responseType:"array-buffer",failOk:!0};return n(o,a)}).then(function(e){var r=h.decode(e.data,{noDataValue:o,returnFileInfo:!0});return{values:r.pixelData,width:r.width,height:r.height,maxZError:r.fileInfo.maxZError,noDataValue:r.noDataValue}})},u.prototype.queryElevation=function(r,t){var o=this;return s.when(e,"./support/ElevationQuery").then(function(e){var i=new e.ElevationQuery;return i.query(o,r,t)})},u.prototype._fetchTileAvailability=function(e,r,t){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t):l.resolve("unknown")},u.prototype._fetchImageService=function(){var e=this;return l.resolve().then(function(){if(e.resourceInfo)return e.resourceInfo;var r={query:a.mixin({f:"json"},e.parsedUrl.query),responseType:"json",callbackParamName:"callback"};return n(e.parsedUrl.path,r)}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl})})},o([i.shared({"3d":"../views/3d/layers/ElevationLayerView3D"})],u.prototype,"viewModulePaths",void 0),o([i.property()],u.prototype,"resourceInfo",void 0),o([i.property()],u.prototype,"type",void 0),o([i.property()],u.prototype,"url",void 0),o([i.property({json:{readable:!1,writable:!1}})],u.prototype,"opacity",void 0),o([i.property()],u.prototype,"operationalLayerType",void 0),u=o([i.subclass("esri.layers.ElevationLayer")],u)}(i.declared(f(),c,y,d,v));return m});