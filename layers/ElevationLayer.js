// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

//  copyright

/**
             * The copyright text as defined by the service.
             *
             * @name copyright
             * @type {string}
             * @instance
             */

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/io-query","dojo/_base/kernel","../request","../core/Error","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","../geometry/HeightModelInfo","./Layer","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","./support/rasterFormats/LercCodec"],function(e,r,t,o,n,i,a,p,l,s,u,c,y,d,h,v,f,m){return function(r){function d(e){var t=r.call(this)||this;return t.copyright=null,t.heightModelInfo=null,t.opacity=1,t.operationalLayerType="ArcGISTiledElevationServiceLayer",t.type="elevation",t.url=null,t}return o(d,r),d.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},Object.defineProperty(d.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&a.deprecated(this.declaredClass+".minScale support has been removed.","","4.5")},enumerable:!0,configurable:!0}),Object.defineProperty(d.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&a.deprecated(this.declaredClass+".maxScale support has been removed.","","4.5")},enumerable:!0,configurable:!0}),d.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new l("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}}).always(function(){return e._fetchImageService()})),this.when()},d.prototype.fetchTile=function(e,r,t,o){var n=this;return void 0===o&&(o=0),this.load().then(function(){return n._fetchTileAvailability(e,r,t)}).then(function(){return p(n.getTileUrl(e,r,t),{responseType:"array-buffer"})}).then(function(e){var r=m.decode(e.data,{noDataValue:o,returnFileInfo:!0});return{values:r.pixelData,width:r.width,height:r.height,maxZError:r.fileInfo.maxZError,noDataValue:r.noDataValue}})},d.prototype.getTileUrl=function(e,r,o){var n=!this.tilemapCache&&this.supportsBlankTile,a=i.objectToQuery(t({},this.parsedUrl.query,{blankTile:!n&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+r+"/"+o+(a?"?"+a:"")},d.prototype.queryElevation=function(r,t){var o=this;return s.create(function(r){return e(["./support/ElevationQuery"],r)}).then(function(e){return(new e.ElevationQuery).query(o,r,t)})},d.prototype.createElevationSampler=function(r,t){var o=this;return s.create(function(r){return e(["./support/ElevationQuery"],r)}).then(function(e){return(new e.ElevationQuery).createSampler(o,r,t)})},d.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return s.reject(new l("elevation-layer:view-not-supported","ElevationLayer is only supported in 3D"));case"3d":return s.create(function(r){return e(["../views/3d/layers/ElevationLayerView3D"],r)})}},d.prototype._fetchTileAvailability=function(e,r,t){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t):s.resolve("unknown")},d.prototype._fetchImageService=function(){var e=this;return s.resolve().then(function(){if(e.resourceInfo)return e.resourceInfo;var r={query:t({f:"json"},e.parsedUrl.query),responseType:"json"};return p(e.parsedUrl.path,r)}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl})})},n([c.property({json:{read:{source:"copyrightText"}}})],d.prototype,"copyright",void 0),n([c.property({readOnly:!0,type:y})],d.prototype,"heightModelInfo",void 0),n([c.property({json:{read:!1,write:!1}})],d.prototype,"minScale",null),n([c.property({json:{read:!1,write:!1}})],d.prototype,"maxScale",null),n([c.property({json:{read:!1,write:!1}})],d.prototype,"opacity",void 0),n([c.property()],d.prototype,"operationalLayerType",void 0),n([c.property()],d.prototype,"resourceInfo",void 0),n([c.property({json:{read:!1},value:"elevation",readOnly:!0})],d.prototype,"type",void 0),n([c.property({json:{origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writer:u.writeOperationalLayerUrl}}}}})],d.prototype,"url",void 0),d=n([c.subclass("esri.layers.ElevationLayer")],d)}(c.declared(d,h,v,f))});