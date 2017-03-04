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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

// Need to localize this copyright text (see arcgisonline.js)

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/_base/array","dojo/_base/config","dojo/has","dojo/string","dojo/_base/Deferred","../kernel","../urlUtils","../SpatialReference","../layers/TileInfo","../layers/TiledMapServiceLayer","../geometry/Extent","../request"],function(e,t,i,s,r,o,l,a,n,u,h,c,d,v,g){var f=e(d,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(e){try{if(e=t.mixin({bingMapsKey:null,culture:"en-US"},e||{}),this.url=u.getProtocolForWebResource()+"//dev.virtualearth.net/REST/v1",this._url=u.urlToObject(this.url),this.spatialReference=new h({wkid:102100}),this.tileInfo=new c({rows:256,cols:256,dpi:96,origin:{x:-20037508.342787,y:20037508.342787},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.initialExtent=this.fullExtent=new v(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,new h({wkid:102100})),t.mixin(this,e),this.hasAttributionData=this.showAttribution,this._initLayer=t.hitch(this,this._initLayer),this._errorHandler=t.hitch(this,this._errorHandler),this._getTileInfo=t.hitch(this,this._getTileInfo),!this.bingMapsKey)throw new Error("BingMapsKey must be provided.");this._getTileInfo()}catch(i){throw this.onError(i),i}},_unsetMap:function(e,t){this.inherited("_unsetMap",arguments)},_getTileInfo:function(){if(this.mapStyle){var e=this._url.path+"/Imagery/Metadata/"+this.mapStyle,i=window.location.protocol;if(this.bingMapsKey){var s=this.resourceInfo;!this.loaded&&s?this._initLayer(s):g({url:e,content:t.mixin({},{uriScheme:"https:"===i?"https":"http",key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,error:this._errorHandler})}}},_initLayer:function(e,t){if(200!==e.statusCode){var r=new Error;return r.code=e.statusCode,r.message=e.statusDescription,r.details=e.errorDetails,r.authenticationResultCode=e.authenticationResultCode,void this.onError(r)}try{this.resourceInfo=i.toJson(e);var o=e.resourceSets[0].resources[0],a=o.imageUrl.replace("{","${");if(this.tileServers=s.map(o.imageUrlSubdomains,function(e){var t=u.getProtocolForWebResource();return l.substitute(a,{subdomain:e}).replace("http:",t)}),this._tsLength=this.tileServers.length,this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=this.copyright||"&copy; 2017 Microsoft Corporation and its data suppliers",this.loaded=!0,this.onLoad(this);var n=this.loadCallback;n&&(delete this.loadCallback,n(this))}}catch(h){this.onError(h)}},getAttributionData:function(){var e,s=new a,o=i.fromJson(this.resourceInfo);if(this.hasAttributionData&&o&&(e=t.getObject("resourceSets.0.resources.0.imageryProviders",!1,o)),e)s.callback({contributors:e});else{var l=new Error("Layer does not have attribution data");l.log=r.isDebug,s.errback(l)}return s},getTileUrl:function(e,t,i){return l.substitute(this.tileServers[t%this._tsLength].replace(/\{/g,"${"),{quadkey:this._getQuadKey(e,t,i),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(e,t,i){var s,r,o,l="";for(o=e;o>0;o--)s="0",r=1<<o-1,0!=(i&r)&&s++,0!=(t&r)&&(s++,s++),l+=s;return l},setMapStyle:function(e){this.mapStyle=e,this._getTileInfo()},setCulture:function(e){this.culture=e,this._getTileInfo()},setBingMapsKey:function(e){this.bingMapsKey=e},onMapStyleChange:function(){}});return t.mixin(f,{MAP_STYLE_AERIAL:"aerial",MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabels",MAP_STYLE_ROAD:"roadOnDemand"}),o("extend-esri")&&t.setObject("virtualearth.VETiledLayer",f,n),f});