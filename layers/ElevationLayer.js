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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

//  copyright

/**
             * The copyright text as defined by the service.
             *
             * @name copyright
             * @type {string}
             * @instance
             */

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/io-query","dojo/_base/kernel","../request","../core/Error","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/HeightModelInfo","./Layer","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","./support/commonProperties","./support/LercWorker"],function(e,r,t,o,n,i,a,p,l,u,s,c,y,d,h,v,f,m){return function(r){function y(e){var t=r.call(this)||this;return t.copyright=null,t.heightModelInfo=null,t.path=null,t.opacity=1,t.operationalLayerType="ArcGISTiledElevationServiceLayer",t.type="elevation",t.url=null,t.version=null,t._lercWorker=m.acquireInstance(),t}return o(y,r),y.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},y.prototype.destroy=function(){m.releaseInstance(this._lercWorker),this._lercWorker=null},Object.defineProperty(y.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&a.deprecated(this.declaredClass+".minScale support has been removed.","","4.5")},enumerable:!0,configurable:!0}),Object.defineProperty(y.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&a.deprecated(this.declaredClass+".maxScale support has been removed.","","4.5")},enumerable:!0,configurable:!0}),y.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=9.3),t},y.prototype.load=function(){var e=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new l("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}}).then(function(){return e._fetchImageService()},function(){return e._fetchImageService()})),this.when()},y.prototype.fetchTile=function(e,r,t,o){var n=this;return void 0===o&&(o=0),this.load().then(function(){return n._fetchTileAvailability(e,r,t)}).then(function(){return p(n.getTileUrl(e,r,t),{responseType:"array-buffer"})}).then(function(e){return n._lercWorker.decode(e.data,{noDataValue:o,returnFileInfo:!0})}).then(function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}})},y.prototype.getTileUrl=function(e,r,o){var n=!this.tilemapCache&&this.supportsBlankTile,a=i.objectToQuery(t({},this.parsedUrl.query,{blankTile:!n&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+r+"/"+o+(a?"?"+a:"")},y.prototype.queryElevation=function(e,r){var t=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).query(t,e,r)})},y.prototype.createElevationSampler=function(e,r){var t=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).createSampler(t,e,r)})},y.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return u.reject(new l("elevation-layer:view-not-supported","ElevationLayer is only supported in 3D"));case"3d":return u.create(function(r){return e(["../views/3d/layers/ElevationLayerView3D"],r)})}},y.prototype._fetchTileAvailability=function(e,r,t){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t):u.resolve("unknown")},y.prototype._fetchImageService=function(){var e=this;return u.resolve().then(function(){if(e.resourceInfo)return e.resourceInfo;var r={query:t({f:"json"},e.parsedUrl.query),responseType:"json"};return p(e.parsedUrl.path,r)}).then(function(r){r.ssl&&(e.url=e.url.replace(/^http:/i,"https:")),e.read(r.data,{origin:"service",url:e.parsedUrl})})},y.prototype._importElevationQuery=function(){return u.create(function(r){e(["./support/ElevationQuery"],r)})},n([s.property({json:{read:{source:"copyrightText"}}})],y.prototype,"copyright",void 0),n([s.property({readOnly:!0,type:c})],y.prototype,"heightModelInfo",void 0),n([s.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],y.prototype,"path",void 0),n([s.property({type:["show","hide"]})],y.prototype,"listMode",void 0),n([s.property({json:{read:!1,write:!1}})],y.prototype,"minScale",null),n([s.property({json:{read:!1,write:!1}})],y.prototype,"maxScale",null),n([s.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],y.prototype,"opacity",void 0),n([s.property({type:["ArcGISTiledElevationServiceLayer"]})],y.prototype,"operationalLayerType",void 0),n([s.property()],y.prototype,"resourceInfo",void 0),n([s.property({json:{read:!1},value:"elevation",readOnly:!0})],y.prototype,"type",void 0),n([s.property(f.url)],y.prototype,"url",void 0),n([s.property()],y.prototype,"version",void 0),n([s.reader("version",["currentVersion"])],y.prototype,"readVersion",null),y=n([s.subclass("esri.layers.ElevationLayer")],y)}(s.declared(y,d,h,v))});