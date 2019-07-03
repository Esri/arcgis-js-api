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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

//  copyright

/**
             * The copyright text as defined by the service.
             *
             * @name copyright
             * @type {string}
             * @instance
             * @ignore
             */

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../request","../core/Error","../core/Logger","../core/maybe","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","../geometry/HeightModelInfo","./Layer","./mixins/ArcGISCachedService","./mixins/OperationalLayer","./mixins/PortalLayer","./support/commonProperties","./support/LercWorker"],function(e,r,t,o,i,n,a,p,l,s,u,c,y,d,h,v,f,m,g,w,S){var b=s.getLogger("esri.layers.ElevationLayer");return function(r){function s(e){var t=r.call(this)||this;return t.copyright=null,t.heightModelInfo=null,t.path=null,t.opacity=1,t.operationalLayerType="ArcGISTiledElevationServiceLayer",t.type="elevation",t.url=null,t.version=null,t._lercWorker=S.acquireInstance(),t}return o(s,r),s.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},s.prototype.destroy=function(){S.releaseInstance(this._lercWorker),this._lercWorker=null},Object.defineProperty(s.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&b.warn(this.declaredClass+".minScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&b.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),s.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=9.3),t},s.prototype.load=function(e){var r=this,t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new l("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then(function(){return r._fetchImageService(t)},function(){return r._fetchImageService(t)})),this.when()},s.prototype.fetchTile=function(e,r,t,o){var i=this;void 0===o&&(o={}),null!=o&&"number"==typeof o&&(b.warn("Passing noDataValue directly as a parameter is deprecated, use { noDataValue } options object instead (since 4.12)"),o={noDataValue:o});var n={responseType:"array-buffer",signal:o.signal},a={noDataValue:o.noDataValue,returnFileInfo:!0};return this.load().then(function(){return i._fetchTileAvailability(e,r,t,o)}).then(function(){return p(i.getTileUrl(e,r,t),n)}).then(function(e){return i._lercWorker.decode(e.data,a,o.signal)}).then(function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}})},s.prototype.getTileUrl=function(e,r,o){var i=!this.tilemapCache&&this.supportsBlankTile,n=y.objectToQuery(t({},this.parsedUrl.query,{blankTile:!i&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+r+"/"+o+(n?"?"+n:"")},s.prototype.queryElevation=function(e,r){var t=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).query(t,e,r)})},s.prototype.createElevationSampler=function(e,r){var t=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).createSampler(t,e,r)})},s.prototype.importLayerViewModule=function(r){return a(this,void 0,void 0,function(){return n(this,function(t){switch(r.type){case"2d":return[2,c.reject(new l("elevation-layer:view-not-supported","ElevationLayer is only supported in 3D"))];case"3d":return[2,c.create(function(r){return e(["../views/3d/layers/ElevationLayerView3D"],r)})]}return[2]})})},s.prototype._fetchTileAvailability=function(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):c.resolve("unknown")},s.prototype._fetchImageService=function(e){return a(this,void 0,void 0,function(){var r,o;return n(this,function(i){switch(i.label){case 0:return this.resourceInfo?[2,this.resourceInfo]:(r={query:t({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},[4,p(this.parsedUrl.path,r)]);case 1:return o=i.sent(),o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.read(o.data,{origin:"service",url:this.parsedUrl}),[2]}})})},s.prototype._importElevationQuery=function(){return c.create(function(r){e(["./support/ElevationQuery"],r)})},i([d.property({json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),i([d.property({readOnly:!0,type:h})],s.prototype,"heightModelInfo",void 0),i([d.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],s.prototype,"path",void 0),i([d.property({type:["show","hide"]})],s.prototype,"listMode",void 0),i([d.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},portalItem:{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],s.prototype,"minScale",null),i([d.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},portalItem:{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],s.prototype,"maxScale",null),i([d.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),i([d.property({type:["ArcGISTiledElevationServiceLayer"]})],s.prototype,"operationalLayerType",void 0),i([d.property()],s.prototype,"resourceInfo",void 0),i([d.property({json:{read:!1},value:"elevation",readOnly:!0})],s.prototype,"type",void 0),i([d.property(w.url)],s.prototype,"url",void 0),i([d.property()],s.prototype,"version",void 0),i([d.reader("version",["currentVersion"])],s.prototype,"readVersion",null),s=i([d.subclass("esri.layers.ElevationLayer")],s)}(d.declared(v,f,m,g))});