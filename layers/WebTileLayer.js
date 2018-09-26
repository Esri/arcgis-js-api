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
 * If the service is requested from a different domain, a [CORS enabled server](https://enable-cors.org/server.html) or a proxy is
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

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/string","dojo/_base/url","../geometry","../request","../core/Error","../core/lang","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../core/accessorSupport/decorators","./Layer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/RefreshableLayer","./mixins/ScaleRangeLayer","./support/commonProperties","./support/LOD","./support/TileInfo"],function(e,t,r,l,o,n,i,p,a,s,u,c,y,f,d,m,v,h,w,g,b,T,S){return function(t){function r(e,r){var l=t.call(this)||this;return l.copyright="",l.fullExtent=new p.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,p.SpatialReference.WebMercator),l.legendEnabled=!0,l.operationalLayerType="WebTiledLayer",l.popupEnabled=!0,l.spatialReference=p.SpatialReference.WebMercator,l.subDomains=null,l.tileInfo=new S({size:256,dpi:96,format:"PNG8",compressionQuality:0,origin:new p.Point({x:-20037508.342787,y:20037508.342787,spatialReference:p.SpatialReference.WebMercator}),spatialReference:p.SpatialReference.WebMercator,lods:[new T({level:0,scale:591657527.591555,resolution:156543.033928}),new T({level:1,scale:295828763.795777,resolution:78271.5169639999}),new T({level:2,scale:147914381.897889,resolution:39135.7584820001}),new T({level:3,scale:73957190.948944,resolution:19567.8792409999}),new T({level:4,scale:36978595.474472,resolution:9783.93962049996}),new T({level:5,scale:18489297.737236,resolution:4891.96981024998}),new T({level:6,scale:9244648.868618,resolution:2445.98490512499}),new T({level:7,scale:4622324.434309,resolution:1222.99245256249}),new T({level:8,scale:2311162.217155,resolution:611.49622628138}),new T({level:9,scale:1155581.108577,resolution:305.748113140558}),new T({level:10,scale:577790.554289,resolution:152.874056570411}),new T({level:11,scale:288895.277144,resolution:76.4370282850732}),new T({level:12,scale:144447.638572,resolution:38.2185141425366}),new T({level:13,scale:72223.819286,resolution:19.1092570712683}),new T({level:14,scale:36111.909643,resolution:9.55462853563415}),new T({level:15,scale:18055.954822,resolution:4.77731426794937}),new T({level:16,scale:9027.977411,resolution:2.38865713397468}),new T({level:17,scale:4513.988705,resolution:1.19432856685505}),new T({level:18,scale:2256.994353,resolution:.597164283559817}),new T({level:19,scale:1128.497176,resolution:.298582141647617})]}),l.type="web-tile",l.urlTemplate=null,l}return l(r,t),r.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?u.mixin({urlTemplate:e},t||{}):e},r.prototype.load=function(){var e=this,t=this.loadFromPortal({supportedTypes:["WMTS"]}).then(function(){if(!e.urlTemplate)throw new s("layer:load","WebTileLayer (title: '"+e.title+"', id: '"+e.id+"') is missing the required 'urlTemplate' property value")});return this.addResolvingPromise(t),this.when()},Object.defineProperty(r.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var t=0,r=this.tileInfo.lods;t<r.length;t++){var l=r[t];e[l.level]=l.levelValue||l.level}return e},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&p.SpatialReference.fromJSON(t.fullExtent.spatialReference)},Object.defineProperty(r.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],t=this,r=t.urlTemplate,l=t.subDomains,o=new i(r),n=o.scheme?o.scheme+"://":"//",p=n+o.authority+"/";if(-1===o.authority.indexOf("{subDomain}"))e.push(p);else if(l&&l.length>0&&o.authority.split(".").length>1)for(var a=0,s=l;a<s.length;a++){var u=s[a];e.push(n+o.authority.replace(/\{subDomain\}/gi,u)+"/")}return e.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new i(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)},enumerable:!0,configurable:!0}),r.prototype.readUrlTemplate=function(e,t){return e||t.templateUrl},r.prototype.writeUrlTemplate=function(e,t,r){e&&f.isProtocolRelative(e)&&(e="https:"+e),t.templateUrl=e?f.normalize(e):e},r.prototype.fetchTile=function(e,t,r,l){var o=this.getTileUrl(e,t,r),n={responseType:"image"};return l&&l.timestamp&&(n.query={_ts:l.timestamp}),a(o,n).then(function(e){return e.data})},r.prototype.getTileUrl=function(e,t,r){var l=this.levelValues[e],o=this.tileServers[t%this.tileServers.length]+n.substitute(this.urlPath,{level:l,col:r,row:t});return o=o.replace(/\{level\}/gi,""+l).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)},r.prototype.importLayerViewModule=function(t){switch(t.type){case"2d":return y.create(function(t){return e(["../views/2d/layers/TileLayerView2D"],t)});case"3d":return y.create(function(t){return e(["../views/3d/layers/TileLayerView3D"],t)})}},o([d.property({type:String,value:"",json:{write:!0}})],r.prototype,"copyright",void 0),o([d.property({type:p.Extent,json:{write:!0}})],r.prototype,"fullExtent",void 0),o([d.property({json:{read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),o([d.property({dependsOn:["tileInfo"]})],r.prototype,"levelValues",null),o([d.property(b.popupEnabled)],r.prototype,"popupEnabled",void 0),o([d.property({type:p.SpatialReference})],r.prototype,"spatialReference",void 0),o([d.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],r.prototype,"readSpatialReference",null),o([d.property({type:[String],json:{write:!0}})],r.prototype,"subDomains",void 0),o([d.property({type:S,json:{write:!0}})],r.prototype,"tileInfo",void 0),o([d.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],r.prototype,"tileServers",null),o([d.property({json:{read:!1}})],r.prototype,"type",void 0),o([d.property({dependsOn:["urlTemplate"]})],r.prototype,"urlPath",null),o([d.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],r.prototype,"urlTemplate",void 0),o([d.reader("urlTemplate",["urlTemplate","templateUrl"])],r.prototype,"readUrlTemplate",null),o([d.writer("urlTemplate",{templateUrl:{type:String}})],r.prototype,"writeUrlTemplate",null),o([d.property({json:{write:!1}})],r.prototype,"url",void 0),o([d.property({json:{write:!0}})],r.prototype,"wmtsInfo",void 0),r=o([d.subclass("esri.layers.WebTileLayer")],r)}(d.declared(m,v,c,g,h,w))});