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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

/**
 * WebTileLayer provides a simple way to add non-ArcGIS Server map tiles as a layer to a map.
 * The constructor takes a URL template that usually follows a pattern of
 * `http://some.domain.com/{level}/{col}/{row}/` where `level` corresponds to a zoom level, and
 * `column` and `row` represent tile column and row, respectively. This pattern is not required, but
 * is the most common one currently on the web.
 *
 * The [subDomains](#subDomains) property can be used to specify subDomains where tiles are served to
 * speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent
 * requests to a domain). If subDomains are specified, the [urlTemplate](#urlTemplate) should include a `{subDomain}` place
 * holder. The [copyright](#copyright) property can be used to define attribution information that will be displayed
 * in the map's Attribution widget.
 *
 * If the service is requested from a different domain, a [CORS enabled server](../guide/cors/index.html) or a [proxy](../guide/proxies/index.html) is
 * required.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/layers/WebTileLayer
 * @since 4.0
 * @see [Sample - WebTileLayer (3D)](../sample-code/layers-webtile-3d/index.html)
 * @see module:esri/layers/TileLayer
 */

//  copyright

/**
             * The attribution information for the layer.
             *
             * @name copyright
             * @type {string}
             *
             * @instance
             */

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../geometry","../request","../core/Error","../core/lang","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/string","../core/urlUtils","../core/urlUtils","../core/accessorSupport/decorators","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/LOD","./support/TileInfo","./support/WMTSLayerInfo"],function(e,r,t,l,o,n,i,a,p,s,u,c,y,f,d,v,m,h,w,g,b,T,S,R,x){return function(r){function t(e,t){var l=r.call(this)||this;return l.copyright="",l.fullExtent=new a.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.SpatialReference.WebMercator),l.legendEnabled=!1,l.isReference=null,l.popupEnabled=!1,l.spatialReference=a.SpatialReference.WebMercator,l.subDomains=null,l.tileInfo=new R({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new a.Point({x:-20037508.342787,y:20037508.342787,spatialReference:a.SpatialReference.WebMercator}),spatialReference:a.SpatialReference.WebMercator,lods:[new S({level:0,scale:591657527.591555,resolution:156543.033928}),new S({level:1,scale:295828763.795777,resolution:78271.5169639999}),new S({level:2,scale:147914381.897889,resolution:39135.7584820001}),new S({level:3,scale:73957190.948944,resolution:19567.8792409999}),new S({level:4,scale:36978595.474472,resolution:9783.93962049996}),new S({level:5,scale:18489297.737236,resolution:4891.96981024998}),new S({level:6,scale:9244648.868618,resolution:2445.98490512499}),new S({level:7,scale:4622324.434309,resolution:1222.99245256249}),new S({level:8,scale:2311162.217155,resolution:611.49622628138}),new S({level:9,scale:1155581.108577,resolution:305.748113140558}),new S({level:10,scale:577790.554289,resolution:152.874056570411}),new S({level:11,scale:288895.277144,resolution:76.4370282850732}),new S({level:12,scale:144447.638572,resolution:38.2185141425366}),new S({level:13,scale:72223.819286,resolution:19.1092570712683}),new S({level:14,scale:36111.909643,resolution:9.55462853563415}),new S({level:15,scale:18055.954822,resolution:4.77731426794937}),new S({level:16,scale:9027.977411,resolution:2.38865713397468}),new S({level:17,scale:4513.988705,resolution:1.19432856685505}),new S({level:18,scale:2256.994353,resolution:.597164283559817}),new S({level:19,scale:1128.497176,resolution:.298582141647617})]}),l.type="web-tile",l.urlTemplate=null,l.wmtsInfo=null,l}return l(t,r),t.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?u.mixin({urlTemplate:e},r||{}):e},t.prototype.load=function(e){var r=this,t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(function(){var e="";if(r.urlTemplate)if(r.spatialReference.equals(r.tileInfo.spatialReference)){var t=new d.Url(r.urlTemplate),l=!!r.subDomains&&r.subDomains.length>0;l||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s("web-tile-layer:load","WebTileLayer (title: '"+r.title+"', id: '"+r.id+"') "+e)});return this.addResolvingPromise(t),this.when()},Object.defineProperty(t.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var r=0,t=this.tileInfo.lods;r<t.length;r++){var l=t[r];e[l.level]=l.levelValue||l.level}return e},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,r){return e||r.fullExtent&&r.fullExtent.spatialReference&&a.SpatialReference.fromJSON(r.fullExtent.spatialReference)},Object.defineProperty(t.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],r=this,t=r.urlTemplate,l=r.subDomains,o=new d.Url(t),n=o.scheme?o.scheme+"://":"//",i=n+o.authority+"/";if(-1===o.authority.indexOf("{subDomain}"))e.push(i);else if(l&&l.length>0&&o.authority.split(".").length>1)for(var a=0,p=l;a<p.length;a++){var s=p[a];e.push(n+o.authority.replace(/\{subDomain\}/gi,s)+"/")}return e.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,r=new d.Url(e),t=(r.scheme?r.scheme+"://":"//")+r.authority+"/";return e.substring(t.length)},enumerable:!0,configurable:!0}),t.prototype.readUrlTemplate=function(e,r){return e||r.templateUrl},t.prototype.writeUrlTemplate=function(e,r,t){e&&v.isProtocolRelative(e)&&(e="https:"+e),r.templateUrl=e?v.normalize(e):e},t.prototype.fetchTile=function(e,r,t,l){void 0===l&&(l={});var o=l.signal,n=l.timestamp,i=this.getTileUrl(e,r,t),a={responseType:"image",signal:o};return null!=n&&(a.query={_ts:l.timestamp}),p(i,a).then(function(e){return e.data})},t.prototype.getTileUrl=function(e,r,t){var l=this.levelValues[e],o=this.tileServers[r%this.tileServers.length]+f.replace(this.urlPath,{level:l,col:t,row:r});return o=o.replace(/\{level\}/gi,""+l).replace(/\{row\}/gi,""+r).replace(/\{col\}/gi,""+t)},t.prototype.importLayerViewModule=function(r){return i(this,void 0,void 0,function(){return n(this,function(t){switch(r.type){case"2d":return[2,y.create(function(r){return e(["../views/2d/layers/TileLayerView2D"],r)})];case"3d":return[2,y.create(function(r){return e(["../views/3d/layers/TileLayerView3D"],r)})]}return[2]})})},o([m.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),o([m.property({type:a.Extent,json:{write:!0}})],t.prototype,"fullExtent",void 0),o([m.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"legendEnabled",void 0),o([m.property({type:["show","hide"]})],t.prototype,"listMode",void 0),o([m.property({dependsOn:["tileInfo"]})],t.prototype,"levelValues",null),o([m.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],t.prototype,"isReference",void 0),o([m.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],t.prototype,"operationalLayerType",void 0),o([m.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),o([m.property({type:a.SpatialReference})],t.prototype,"spatialReference",void 0),o([m.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],t.prototype,"readSpatialReference",null),o([m.property({type:[String],json:{write:!0}})],t.prototype,"subDomains",void 0),o([m.property({type:R,json:{write:!0}})],t.prototype,"tileInfo",void 0),o([m.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],t.prototype,"tileServers",null),o([m.property({json:{read:!1}})],t.prototype,"type",void 0),o([m.property({dependsOn:["urlTemplate"]})],t.prototype,"urlPath",null),o([m.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],t.prototype,"urlTemplate",void 0),o([m.reader("urlTemplate",["urlTemplate","templateUrl"])],t.prototype,"readUrlTemplate",null),o([m.writer("urlTemplate",{templateUrl:{type:String}})],t.prototype,"writeUrlTemplate",null),o([m.property({type:x.default,json:{write:!0}})],t.prototype,"wmtsInfo",void 0),t=o([m.subclass("esri.layers.WebTileLayer")],t)}(m.declared(b.RefreshableLayer(T.ScaleRangeLayer(w.OperationalLayer(g.PortalLayer(c.MultiOriginJSONMixin(h)))))))});