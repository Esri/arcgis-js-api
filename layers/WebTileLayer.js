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
 * If the service is requested from a different domain, a [CORS enabled server](http://enable-cors.org/server.html) or a proxy is
 * required. If CORS is enabled on the server add the service domain to {@link module:esri/config/request#corsEnabledServers 
 * esriConfig.request.corsEnabledServers}. Alternatively, if CORS cannot be enabled on ArcGIS Server you can set up a proxy on your web 
 * server and then add it to the proxy rules list in {@link module:esri/config esriConfig} using 
 * {@link module:esri/core/urlUtils#addProxyRule addProxyRule()}.
 * 
 * An instance of this class is also a [Promise](../guide/working-with-promises/index.html#classes-as-promises).
 * This allows you to execute code once the promise resolves, or when the layer finishes loading its resources.
 * See [then()](#then) for additional details.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/layers/WebTileLayer
 * @since 4.0
 * @see [Sample - WebTileLayer (3D)](../sample-code/layers-webtile-3d/index.html)
 * @see module:esri/layers/TileLayer
 */

//  copyright

define(["dojo/_base/lang","dojo/_base/url","dojo/string","../core/Error","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/urlUtils","../geometry/SpatialReference","../geometry/Extent","../geometry/Point","./TiledLayer","./mixins/OperationalLayer","./mixins/ScaleRangeLayer","./support/TileInfo","./support/LOD"],function(e,l,t,r,n,i,o,s,a,u,c,p,h,f,d){var v=c.createSubclass([p,n,h],{declaredClass:"esri.layers.WebTileLayer",normalizeCtorArgs:function(l,t){return"string"==typeof l?e.mixin({urlTemplate:l},t||{}):l},getDefaults:function(l){var t=new a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,s.WebMercator);return e.mixin(this.inherited(arguments),{fullExtent:t,tileInfo:new f({size:256,dpi:96,format:"PNG8",compressionQuality:0,origin:new u({x:-20037508.342787,y:20037508.342787,spatialReference:s.WebMercator}),spatialReference:s.WebMercator,lods:[new d({level:0,scale:591657527.591555,resolution:156543.033928}),new d({level:1,scale:295828763.795777,resolution:78271.5169639999}),new d({level:2,scale:147914381.897889,resolution:39135.7584820001}),new d({level:3,scale:73957190.948944,resolution:19567.8792409999}),new d({level:4,scale:36978595.474472,resolution:9783.93962049996}),new d({level:5,scale:18489297.737236,resolution:4891.96981024998}),new d({level:6,scale:9244648.868618,resolution:2445.98490512499}),new d({level:7,scale:4622324.434309,resolution:1222.99245256249}),new d({level:8,scale:2311162.217155,resolution:611.49622628138}),new d({level:9,scale:1155581.108577,resolution:305.748113140558}),new d({level:10,scale:577790.554289,resolution:152.874056570411}),new d({level:11,scale:288895.277144,resolution:76.4370282850732}),new d({level:12,scale:144447.638572,resolution:38.2185141425366}),new d({level:13,scale:72223.819286,resolution:19.1092570712683}),new d({level:14,scale:36111.909643,resolution:9.55462853563415}),new d({level:15,scale:18055.954822,resolution:4.77731426794937}),new d({level:16,scale:9027.977411,resolution:2.38865713397468}),new d({level:17,scale:4513.988705,resolution:1.19432856685505}),new d({level:18,scale:2256.994353,resolution:.597164283559817}),new d({level:19,scale:1128.497176,resolution:.298582141647617})]})})},properties:{copyright:{value:"",json:{writable:!0}},fullExtent:{json:{writable:!0}},legendEnabled:{json:{readFrom:["showLegend"],read:function(e,l){return null!=l.showLegend?l.showLegend:!0}}},levelValues:{dependsOn:["tileInfo"],get:function(){var e=this.tileInfo,l=[];return e?(this.tileInfo.lods.forEach(function(e){l[e.level]=e.levelValue||e.level},this),l):null}},operationalLayerType:"WebTiledLayer",popupEnabled:{json:{readFrom:["disablePopup"],read:function(e,l){return null!=l.disablePopup?!l.disablePopup:!0}}},refreshInterval:{json:{writable:!0}},spatialReference:{type:s,value:s.WebMercator,json:{readFrom:["spatialReference","fullExtent.spatialReference"],read:function(e,l){return e||l.fullExtent&&l.fullExtent.spatialReference&&s.fromJSON(l.fullExtent.spatialReference)}}},subDomains:{value:null,json:{writable:!0}},tileInfo:{type:f,json:{writable:!0}},tileServers:{value:null,dependsOn:["urlTemplate","subDomains"],get:function(){if(!this.urlTemplate)return null;var e,t=this.urlTemplate,r=new l(t),n=r.scheme?r.scheme+"://":"//",i=n+r.authority+"/",o=this.subDomains,s=[];return-1===r.authority.indexOf("{subDomain}")&&s.push(i),o&&o.length>0&&r.authority.split(".").length>1&&o.forEach(function(l,t){r.authority.indexOf("{subDomain}")>-1&&(e=n+r.authority.replace(/\{subDomain\}/gi,l)+"/"),s.push(e)},this),s=s.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})}},type:{value:"web-tile",json:{readable:!1}},urlPath:{dependsOn:["urlTemplate"],get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new l(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}},urlTemplate:{json:{readFrom:["urlTemplate","templateUrl"],read:function(e,l){return e||l.templateUrl},write:function(e,l){e&&o.isProtocolRelative(e)&&(e="https:"+e),l.templateUrl=e}}},url:{json:{writable:!1}}},getTileUrl:function(e,l,r){e=this.levelValues[e];var n=this.tileServers[l%this.tileServers.length]+t.substitute(this.urlPath,{level:e,col:r,row:l});return n=n.replace(/\{level\}/gi,e).replace(/\{row\}/gi,l).replace(/\{col\}/gi,r)},load:function(){return this.urlTemplate||this.addResolvingPromise(i.reject(new r("layer:load","WebTileLayer (title: '"+this.title+"', id: '"+this.id+"') is missing the required 'urlTemplate' property value"))),this}});return v});