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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

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
 * An instance of this class is also a [Promise](../guide/working-with-promises/index.html#classes-as-promises).
 * This allows you to execute code once the promise resolves, or when the layer finishes loading its resources. 
 * See [then()](#then) for additional details.
 * 
 * @module esri/layers/WebTileLayer
 * @since 4.0
 * @see [Sample - WebTileLayer (2D)](../sample-code/layers-webtile-2d/index.html)
 * @see [Sample - WebTileLayer (3D)](../sample-code/layers-webtile-3d/index.html)
 * @see module:esri/layers/TileLayer
 */

//  copyright

define(["dojo/_base/lang","dojo/_base/url","dojo/string","../core/urlUtils","../core/JSONSupport","../geometry/SpatialReference","../geometry/Extent","../geometry/Point","./TiledLayer","./support/TileInfo","./support/LOD"],function(e,l,n,t,r,o,s,i,a,u,c){var p=a.createSubclass([r],{declaredClass:"esri.layers.WebTileLayer",normalizeCtorArgs:function(l,n){return"string"==typeof l?e.mixin({urlTemplate:l},n||{}):l},getDefaults:function(){var l=new s(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,o.WebMercator);return e.mixin(this.inherited(arguments),{fullExtent:l,tileInfo:new u({rows:256,cols:256,dpi:96,format:"PNG8",compressionQuality:0,origin:new i({x:-20037508.342787,y:20037508.342787,spatialReference:o.WebMercator}),spatialReference:o.WebMercator,lods:[new c({level:0,scale:591657527.591555,resolution:156543.033928}),new c({level:1,scale:295828763.795777,resolution:78271.5169639999}),new c({level:2,scale:147914381.897889,resolution:39135.7584820001}),new c({level:3,scale:73957190.948944,resolution:19567.8792409999}),new c({level:4,scale:36978595.474472,resolution:9783.93962049996}),new c({level:5,scale:18489297.737236,resolution:4891.96981024998}),new c({level:6,scale:9244648.868618,resolution:2445.98490512499}),new c({level:7,scale:4622324.434309,resolution:1222.99245256249}),new c({level:8,scale:2311162.217155,resolution:611.49622628138}),new c({level:9,scale:1155581.108577,resolution:305.748113140558}),new c({level:10,scale:577790.554289,resolution:152.874056570411}),new c({level:11,scale:288895.277144,resolution:76.4370282850732}),new c({level:12,scale:144447.638572,resolution:38.2185141425366}),new c({level:13,scale:72223.819286,resolution:19.1092570712683}),new c({level:14,scale:36111.909643,resolution:9.55462853563415}),new c({level:15,scale:18055.954822,resolution:4.77731426794937}),new c({level:16,scale:9027.977411,resolution:2.38865713397468}),new c({level:17,scale:4513.988705,resolution:1.19432856685505}),new c({level:18,scale:2256.994353,resolution:.597164283559817}),new c({level:19,scale:1128.497176,resolution:.298582141647617})]})})},properties:{copyright:"",legendEnabled:{json:{readFrom:["showLegend"],read:function(e,l){return null!=l.showLegend?l.showLegend:!0}}},levelValues:{dependsOn:["tileInfo"],get:function(){var e=this.tileInfo,l=[];return e?(this.tileInfo.lods.forEach(function(e){l[e.level]=e.levelValue||e.level},this),l):null}},popupEnabled:{json:{readFrom:["disablePopup"],read:function(e,l){return null!=l.disablePopup?!l.disablePopup:!0}}},spatialReference:o.WebMercator,subDomains:null,tileServers:{value:null,dependsOn:["urlTemplate","subDomains","urlPath"],get:function(){var e,n=this.urlTemplate,t=new l(n),r=t.scheme?t.scheme+"://":"//",o=r+t.authority+"/",s=this.subDomains,i=[];return-1===t.authority.indexOf("{subDomain}")&&i.push(o),s&&s.length>0&&t.authority.split(".").length>1&&s.forEach(function(l){t.authority.indexOf("{subDomain}")>-1&&(e=r+t.authority.replace(/\{subDomain\}/gi,l)+"/"),i.push(e)},this),i=i.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})}},urlPath:{dependsOn:["urlTemplate"],get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,n=new l(e),t=(n.scheme?n.scheme+"://":"//")+n.authority+"/";return e.substring(t.length)}},urlTemplate:null},getTileUrl:function(e,l,r){e=this.levelValues[e];var o=this.tileServers[l%this.tileServers.length]+n.substitute(this.urlPath,{level:e,col:r,row:l});return o=o.replace(/\{level\}/gi,e).replace(/\{row\}/gi,l).replace(/\{col\}/gi,r),t.addProxy(o)}});return p});