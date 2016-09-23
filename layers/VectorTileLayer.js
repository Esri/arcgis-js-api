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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/lang","../core/urlUtils","../core/MultiOriginJSONSupport","../geometry/SpatialReference","./support/VectorTileLayerLoader","./TiledLayer","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer","./support/TileInfo"],function(e,t,r,i,l,a,n,s,o,u){for(var c=512,f=40075016.68557849,d=39.37007874015748,p=f/c,h=[],v=0;20>v;v++){var y=p/Math.pow(2,v),m=Math.floor(96*y*d);h.push({level:v,scale:m,resolution:y})}var b={wkid:102100},g={xmin:-20037508.34,ymin:-20037508.34,xmax:20037508.34,ymax:20037508.34,spatialReference:b},S={spatialReference:b,tileInfo:{rows:c,cols:c,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787,spatialReference:b},spatialReference:b,lods:h},fullExtent:g,version:null},x=a.createSubclass([r,n,s,o],{declaredClass:"esri.layers.VectorTileLayer",viewModulePaths:{"2d":"../views/2d/layers/VectorTileLayerView2D"},_mapsWithAttribution:["World_Basemap"],constructor:function(){this._serviceOverrides={}},normalizeCtorArgs:function(t,r){return"string"==typeof t||t.version?e.mixin({url:t},r):t},getDefaults:function(r){var i=r.url,l=null;if(i&&"string"==typeof i){var a=t.urlToObject(r.url);l=this._getDefaultAttribution(a.path)}return e.mixin(this.inherited(arguments),{styles:[],attributionDataUrl:l})},load:function(){this.style||this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Vector Tile Service"]}).always(this._loadStyle.bind(this)))},properties:{legendEnabled:{value:!0,json:{readFrom:["showLegend"],read:function(e,t){return!!t.showLegend}}},operationalLayerType:"VectorTileLayer",popupEnabled:{value:!0,json:{readFrom:["disablePopup"],read:function(e,t){return!t.disablePopup}}},style:{readOnly:!0},spatialReference:{json:{readFrom:["fullExtent.spatialReference"],read:function(e,t){return e=t.fullExtent.spatialReference,e&&i.fromJSON(e)}}},tileInfo:{value:null,json:{read:function(e,t){if(e){var r=t.minScale?t.minScale:+(1/0),i=t.maxScale?t.maxScale:-(1/0);return e.lods=e.lods.filter(function(e){return e.scale<=r&&e.scale>=i}),u.fromJSON(e)}return null}}},styles:{cast:function(e){return e?"string"==typeof e?[e]:Array.isArray(e)?e:void 0:[]}},url:{}},loadStyle:function(e){return this._loadStyle(e)},addStyle:function(e){var t=this.styles;-1===t.indexOf(e)&&(this.styles=t.concat([e]))},removeStyle:function(e){var t=this.styles,r=t.indexOf(e);-1!==r&&(t.splice(r,1),this.styles=t.concat())},hasStyle:function(e){return-1!==this.styles.indexOf(e)},_getDefaultAttribution:function(e){var t=e.match(/^https?:\/\/(basemaps|basemapsbeta)\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i);if(t){var r=t[3];if(r){var i,l=t[2]||"";r=r.toLowerCase();for(var a=0,n=this._mapsWithAttribution.length;n>a;a++)if(i=this._mapsWithAttribution[a],i.toLowerCase().indexOf(r)>-1)return this._getProtocol()+"//static.arcgis.com/attribution/Vector"+l+"/"+i}}},_getProtocol:function(){var e=window.location.protocol;return"file:"===e?"http:":e},_loadStyle:function(r){if(!r){r=this.url,"string"!=typeof r||l.isMapboxUrl(r)||(r=t.makeAbsolute(r),this.url=r);var i=this.tileServers;i&&i.length&&(this._serviceOverrides.tileServers=i.map(function(e){return l.isMapboxUrl(e)?e:t.makeAbsolute(e)},this))}var a=new l,n=l.getCredentialFromUrl(r);return this._serviceOverrides.credential=n,a.loadMetadata(r,x.ACCESS_TOKEN,this._serviceOverrides).then(function(r){r=r||{};var i=r.layerDefinition,l={style:r.style};this.layerDefinition=i||null,this.serviceUrl=r.serviceUrl||null,this.styleUrl=r.styleUrl||null;var a=r.serviceUrl?t.urlToObject(r.serviceUrl):null;if(i){var n=this._getDefaultAttribution(a.path);l=e.mixin(l,{attributionDataUrl:n},i)}else l=e.mixin(l,S);this.read(l,{origin:"service",url:a})}.bind(this),function(e){this.emit("error",e)}.bind(this))}});return x.ACCESS_TOKEN=null,x});