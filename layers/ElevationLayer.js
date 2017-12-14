// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","dojo/_base/lang","dojo/_base/kernel","../request","../core/Error","../core/promiseUtils","../core/requireUtils","../core/urlUtils","../geometry/HeightModelInfo","./TiledLayer","./mixins/ArcGISMapService","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","./support/rasterFormats/LercCodec"],function(e,r,t,o,a,i,n,p,l,s,c,u,y,d,v,h,f,m,g){var w=function(r){function d(e){var t=r.call(this)||this;return t.heightModelInfo=null,t.type="elevation",t.url=null,t.opacity=1,t.operationalLayerType="ArcGISTiledElevationServiceLayer",t}return t(d,r),d.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?i.mixin({},{url:e},r):e},Object.defineProperty(d.prototype,"minScale",{get:function(){},set:function(e){n.deprecated(this.declaredClass+".minScale support has been removed.","","4.5")},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"maxScale",{get:function(){},set:function(e){n.deprecated(this.declaredClass+".maxScale support has been removed.","","4.5")},enumerable:!0,configurable:!0}),d.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new l("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}}).always(function(){return e._fetchImageService()})),this.when()},d.prototype.fetchTile=function(e,r,t,o){var a=this;return void 0===o&&(o=0),this.load().then(function(){return a._fetchTileAvailability(e,r,t)}).then(function(){var o=a.getTileUrl(e,r,t),i={responseType:"array-buffer",failOk:!0};return p(o,i)}).then(function(e){var r=g.decode(e.data,{noDataValue:o,returnFileInfo:!0});return{values:r.pixelData,width:r.width,height:r.height,maxZError:r.fileInfo.maxZError,noDataValue:r.noDataValue}})},d.prototype.queryElevation=function(r,t){var o=this;return c.when(e,"./support/ElevationQuery").then(function(e){var a=new e.ElevationQuery;return a.query(o,r,t)})},d.prototype._fetchTileAvailability=function(e,r,t){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t):s.resolve("unknown")},d.prototype._fetchImageService=function(){var e=this;return s.resolve().then(function(){if(e.resourceInfo)return e.resourceInfo;var r={query:i.mixin({f:"json"},e.parsedUrl.query),responseType:"json",callbackParamName:"callback"};return p(e.parsedUrl.path,r)}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl})})},o([a.shared({"3d":"../views/3d/layers/ElevationLayerView3D"})],d.prototype,"viewModulePaths",void 0),o([a.property({readOnly:!0,type:y})],d.prototype,"heightModelInfo",void 0),o([a.property({json:{read:!1,write:!1}})],d.prototype,"minScale",null),o([a.property({json:{read:!1,write:!1}})],d.prototype,"maxScale",null),o([a.property()],d.prototype,"resourceInfo",void 0),o([a.property({json:{read:!1},value:"elevation",readOnly:!0})],d.prototype,"type",void 0),o([a.property({json:{origins:{"web-scene":{write:{isRequired:!0,writer:u.writeOperationalLayerUrl}}}}})],d.prototype,"url",void 0),o([a.property({json:{read:!1,write:!1}})],d.prototype,"opacity",void 0),o([a.property()],d.prototype,"operationalLayerType",void 0),d=o([a.subclass("esri.layers.ElevationLayer")],d)}(a.declared(d,v,h,f,m));return w});