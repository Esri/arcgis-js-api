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
             * Copyright information.
             *
             * @type {string}
             * @instance
             * @memberof module:esri/layers/BingMapsLayer
             * @name copyright
             * @readOnly
             */

// This method will access Bing's metadata url to obtain information such as copyright text, template url and

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../request","../core/Error","../core/jsonMap","../core/maybe","../core/promiseUtils","../core/accessorSupport/decorators","../geometry/SpatialReference","./BaseTileLayer","./mixins/OperationalLayer","./support/TileInfo"],function(e,t,r,o,a,n,i,s,l,p,u,d,y,c){var g=new i.default({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});return function(e){function t(t){var r=e.call(this)||this;return r.type="bing-maps",r.tileInfo=new c({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:u.WebMercator},spatialReference:u.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),r.key=null,r.style="road",r.culture="en-US",r.region=null,r.portalUrl=null,r.hasAttributionData=!0,r}return r(t,e),Object.defineProperty(t.prototype,"bingMetadata",{get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"copyright",{get:function(){return s.isSome(this.bingMetadata)?this.bingMetadata.copyright:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bingLogo",{get:function(){return s.isSome(this.bingMetadata)?this.bingMetadata.brandLogoUri:null},enumerable:!0,configurable:!0}),t.prototype.load=function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(function(){return t._getMetadata()})):this.addResolvingPromise(l.reject(new n("bingmapslayer:load","Bing layer must have bing key."))),this.when()},t.prototype.getTileUrl=function(e,t,r){if(!this.loaded||s.isNone(this.bingMetadata))return null;var o=this.bingMetadata.resourceSets[0].resources[0],a=o.imageUrlSubdomains[t%o.imageUrlSubdomains.length],n=this._getQuadKey(e,t,r);return o.imageUrl.replace("{subdomain}",a).replace("{quadkey}",n)},t.prototype.fetchAttributionData=function(){var e=this;return this.load().then(function(){return s.isNone(e.bingMetadata)?null:{contributors:e.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map(function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}})}})}})},t.prototype._getMetadata=function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"},r=t[this.style];return a("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+r,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(function(t){var r=t.data;return 200!==r.statusCode?l.reject(new n("bingmapslayer:getmetadata",r.statusDescription)):(e.bingMetadata=r,0===e.bingMetadata.resourceSets.length?l.reject(new n("bingmapslayer:getmetadata","no bing resourcesets")):0===e.bingMetadata.resourceSets[0].resources.length?l.reject(new n("bingmapslayer:getmetadata","no bing resources")):void 0)}).catch(function(e){throw new n("bingmapslayer:getmetadata",e.message)})},t.prototype._getPortalBingKey=function(){var e=this;return a(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(function(t){if(!t.data.bingKey)throw new n("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=t.data.bingKey}).catch(function(e){throw new n("bingmapslayer:getportalbingkey",e.message)})},t.prototype._getQuadKey=function(e,t,r){for(var o="",a=e;a>0;a--){var n=0,i=1<<a-1;0!=(r&i)&&(n+=1),0!=(t&i)&&(n+=2),o+=n.toString()}return o},o([p.property({json:{read:!1,write:!1},value:null})],t.prototype,"bingMetadata",null),o([p.property({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],t.prototype,"type",void 0),o([p.property({type:c})],t.prototype,"tileInfo",void 0),o([p.property({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],t.prototype,"copyright",null),o([p.property({type:String,json:{write:!1,read:!1}})],t.prototype,"key",void 0),o([p.property({type:String,json:{write:{target:"layerType",writer:g.write},read:{source:"layerType",reader:g.read}}})],t.prototype,"style",void 0),o([p.property({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],readOnly:!0,json:{read:{source:"layerType"}}})],t.prototype,"operationalLayerType",void 0),o([p.property({type:String,json:{write:!1,read:!1}})],t.prototype,"culture",void 0),o([p.property({type:String,json:{write:!1,read:!1}})],t.prototype,"region",void 0),o([p.property({type:String,json:{write:!0,read:!0}})],t.prototype,"portalUrl",void 0),o([p.property({type:Boolean,json:{write:!1,read:!1}})],t.prototype,"hasAttributionData",void 0),o([p.property({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],t.prototype,"bingLogo",null),t=o([p.subclass("esri.layers.BingMapsLayer")],t)}(p.declared(d,y))});