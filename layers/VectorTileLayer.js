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

define(["dojo/_base/lang","../core/urlUtils","../core/MultiOriginJSONSupport","../geometry/SpatialReference","./support/VectorTileLayerLoader","./TiledLayer","./mixins/PortalLayer","./support/TileInfo"],function(e,t,r,i,a,l,s,n){for(var o=512,u=40075016.68557849,c=39.37007874015748,f=u/o,d=[],h=0;20>h;h++){var p=f/Math.pow(2,h),v=Math.floor(96*p*c);d.push({level:h,scale:v,resolution:p})}var y={wkid:102100},m={xmin:-20037508.34,ymin:-20037508.34,xmax:20037508.34,ymax:20037508.34,spatialReference:y},g={spatialReference:y,tileInfo:{rows:o,cols:o,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787,spatialReference:y},spatialReference:y,lods:d},fullExtent:m,version:null},b=l.createSubclass([r,s],{declaredClass:"esri.layers.VectorTileLayer",portalLoaderModule:"portal/loaders/VectorTileLayerLoader",viewModulePaths:{"2d":"../views/2d/layers/VectorTileLayerView2D"},_mapsWithAttribution:["World_Basemap"],constructor:function(){this._serviceOverrides={}},normalizeCtorArgs:function(t,r){return"string"==typeof t||t.version?e.mixin({url:t},r):t},getDefaults:function(r){var i=r.url,a=null;if(i&&"string"==typeof i){var l=t.urlToObject(r.url),s=l.path.toLowerCase();a=this._getDefaultAttribution(this._getMapName(s))}return e.mixin(this.inherited(arguments),{styles:[],attributionDataUrl:a})},load:function(){this.style||this.addResolvingPromise(this.loadFromPortal(this._loadStyle.bind(this)))},properties:{legendEnabled:{value:!0,json:{readFrom:["showLegend"],read:function(e,t){return!!t.showLegend}}},popupEnabled:{value:!0,json:{readFrom:["disablePopup"],read:function(e,t){return!t.disablePopup}}},style:{readOnly:!0},spatialReference:{json:{readFrom:["fullExtent.spatialReference"],read:function(e,t){return e=t.fullExtent.spatialReference,e&&i.fromJSON(e)}}},tileInfo:{value:null,json:{read:function(e,t){if(e){var r=t.minScale?t.minScale:+1/0,i=t.maxScale?t.maxScale:-1/0;return e.lods=e.lods.filter(function(e){return e.scale<=r&&e.scale>=i}),n.fromJSON(e)}return null}}},styles:{cast:function(e){return e?"string"==typeof e?[e]:Array.isArray(e)?e:void 0:[]}},url:{}},loadStyle:function(e){return this._loadStyle(e)},addStyle:function(e){var t=this.styles;-1===t.indexOf(e)&&(this.styles=t.concat([e]))},removeStyle:function(e){var t=this.styles,r=t.indexOf(e);-1!==r&&(t.splice(r,1),this.styles=t.concat())},hasStyle:function(e){return-1!==this.styles.indexOf(e)},_getMapName:function(e){var t=e.match(/^https?\:\/\/(basemaps|basemapsbeta)\.arcgis\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i);return t&&t[2]},_getDefaultAttribution:function(e){if(e){var t;e=e.toLowerCase();for(var r=0,i=this._mapsWithAttribution.length;i>r;r++)if(t=this._mapsWithAttribution[r],t.toLowerCase().indexOf(e)>-1)return this._getProtocol()+"//static.arcgis.com/attribution/Vector/"+t}},_getProtocol:function(){var e=window.location.protocol;return"file:"===e?"http:":e},_loadStyle:function(r){if(!r){r=this.url,"string"!=typeof r||a.isMapboxUrl(r)||(r=t.getAbsoluteUrl(r),this.url=r);var i=this.tileServers;i&&i.length&&(this._serviceOverrides.tileServers=i.map(function(e){return a.isMapboxUrl(e)?e:t.getAbsoluteUrl(e)},this))}var l=new a,s=a.getCredentialFromUrl(r);return this._serviceOverrides.credential=s,l.loadMetadata(r,b.ACCESS_TOKEN,this._serviceOverrides).then(function(r){r=r||{};var i=r.layerDefinition,a={style:r.style};if(this.layerDefinition=i||null,this.serviceUrl=r.serviceUrl||null,this.styleUrl=r.styleUrl||null,i){var l=t.urlToObject(r.serviceUrl),s=l.path.toLowerCase(),n=this._getDefaultAttribution(this._getMapName(s));a=e.mixin(a,{attributionDataUrl:n},i)}else a=e.mixin(a,g);this.read(a)}.bind(this),function(e){this.emit("error",e)}.bind(this))}});return b.ACCESS_TOKEN=null,b});