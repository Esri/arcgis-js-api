// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

//  copyright

/**
             * The copyright text as defined by the service.
             *
             * @name copyright
             * @type {string}
             * @instance
             * @ignore
             */

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../request","../core/deprecate","../core/Error","../core/Logger","../core/maybe","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","../geometry/HeightModelInfo","./Layer","./mixins/ArcGISCachedService","./mixins/ArcGISService","./mixins/OperationalLayer","./mixins/PortalLayer","./support/commonProperties","./support/LercWorker"],function(e,r,t,o,i,n,a,p,l,s,c,u,y,d,h,v,f,m,g,S,w,b,I,x){var T=c.getLogger("esri.layers.ElevationLayer");return function(r){function c(e){var t=r.call(this,e)||this;return t.copyright=null,t.heightModelInfo=null,t.path=null,t.opacity=1,t.operationalLayerType="ArcGISTiledElevationServiceLayer",t.sourceJSON=null,t.type="elevation",t.url=null,t.version=null,t._lercWorker=x.acquireInstance(),t}return o(c,r),c.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},c.prototype.destroy=function(){x.releaseInstance(this._lercWorker),this._lercWorker=null},Object.defineProperty(c.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&T.warn(this.declaredClass+".minScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&T.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),c.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=9.3),t},c.prototype.load=function(e){var r=this,t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new s("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then(function(){return r._fetchImageService(t)},function(){return r._fetchImageService(t)})),this.when()},c.prototype.fetchTile=function(e,r,t,o){var i=this;void 0===o&&(o={}),null!=o&&"number"==typeof o&&(l.deprecated(T,"Passing 'noDataValue' directly as a parameter",{replacement:"use { noDataValue } options object instead",version:"4.12"}),o={noDataValue:o});var n={responseType:"array-buffer",signal:o.signal},a={noDataValue:o.noDataValue,returnFileInfo:!0};return this.load().then(function(){return i._fetchTileAvailability(e,r,t,o)}).then(function(){return p(i.getTileUrl(e,r,t),n)}).then(function(e){return i._lercWorker.decode(e.data,a,o.signal)}).then(function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}})},c.prototype.getTileUrl=function(e,r,o){var i=!this.tilemapCache&&this.supportsBlankTile,n=h.objectToQuery(t({},this.parsedUrl.query,{blankTile:!i&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+r+"/"+o+(n?"?"+n:"")},c.prototype.queryElevation=function(e,r){var t=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).query(t,e,r)})},c.prototype.createElevationSampler=function(e,r){var t=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).createSampler(t,e,r)})},c.prototype._fetchTileAvailability=function(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):d.resolve("unknown")},c.prototype._fetchImageService=function(e){return a(this,void 0,void 0,function(){var r,o;return n(this,function(i){switch(i.label){case 0:return this.sourceJSON?[2,this.sourceJSON]:(r={query:t({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},[4,p(this.parsedUrl.path,r)]);case 1:return o=i.sent(),o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl}),[2]}})})},c.prototype._importElevationQuery=function(){return d.create(function(r){e(["./support/ElevationQuery"],r)})},i([v.property({json:{read:{source:"copyrightText"}}})],c.prototype,"copyright",void 0),i([v.property({readOnly:!0,type:f})],c.prototype,"heightModelInfo",void 0),i([v.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),i([v.property({type:["show","hide"]})],c.prototype,"listMode",void 0),i([v.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],c.prototype,"minScale",null),i([v.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],c.prototype,"maxScale",null),i([v.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"opacity",void 0),i([v.property({type:["ArcGISTiledElevationServiceLayer"]})],c.prototype,"operationalLayerType",void 0),i([v.property()],c.prototype,"sourceJSON",void 0),i([v.property({json:{read:!1},value:"elevation",readOnly:!0})],c.prototype,"type",void 0),i([v.property(I.url)],c.prototype,"url",void 0),i([v.property()],c.prototype,"version",void 0),i([v.reader("version",["currentVersion"])],c.prototype,"readVersion",null),c=i([v.subclass("esri.layers.ElevationLayer")],c)}(v.declared(g.ArcGISCachedService(S.ArcGISService(w.OperationalLayer(b.PortalLayer(y.MultiOriginJSONMixin(m)))))))});