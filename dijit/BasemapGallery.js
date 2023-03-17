// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/_base/kernel","dojo/_base/sniff","dojo/has","dojo/query","dojo/Deferred","dojo/DeferredList","dojo/dom","dojo/dom-construct","dojo/dom-class","dijit/_Widget","dijit/_Templated","../kernel","../lang","../urlUtils","../request","../geometry/Extent","../SpatialReference","../virtualearth/VETiledLayer","../layers/OpenStreetMapLayer","../layers/ArcGISTiledMapServiceLayer","../layers/ArcGISDynamicMapServiceLayer","../layers/WebTiledLayer","../layers/VectorTileLayer","../layers/TileInfo","../layers/ArcGISImageServiceLayer","../layers/ImageServiceParameters","../layers/ImageParameters","../layers/RasterFunction","../layers/RasterXLayer","./Basemap","./_EventedWidget","dojo/text!./templates/BasemapGallery.html"],(function(e,s,a,i,t,r,n,o,l,c,p,h,d,m,u,f,y,b,v,g,I,_,G,S,w,L,R,B,U,E,A,j,T,k,x,M,C){var N=s([M,u,f],{declaredClass:"esri.dijit.BasemapGallery",widgetsInTemplate:!0,templateString:C,loaded:!1,basemaps:[],bingMapsKey:null,flowContainer:null,_hasUI:!1,_supportsVTL:null,_selectedBasemap:null,_selectBasemapInProgress:!1,_eventMap:{load:!0,"selection-change":!0,add:["basemap"],remove:["basemap"],error:["message"]},constructor:function(e,s){(e=e||{}).map||console.error("esri.dijit.BasemapGallery: Unable to find the 'map' property in parameters"),this.map=e.map,this._hasUI=!!s,this.bingMapsKey=e.bingMapsKey&&e.bingMapsKey.length>0?e.bingMapsKey:null,this.showArcGISBasemaps=!1!==e.showArcGISBasemaps,this.basemaps=e.basemaps||[],this.basemapIds=e.basemapIds,this.referenceIds=e.referenceIds,this.basemapsGroup=e.basemapsGroup,this.arcgisUrl=y.dijit._arcgisUrl,e.portalUrl&&(this.arcgisUrl=e.portalUrl+"/sharing/rest"),this.arcgisUrl.indexOf("://")<0?this.arcgisUrl=v.getProtocolForWebResource()+"//"+this.arcgisUrl:"https:"===window.location.protocol&&(this.arcgisUrl=this.arcgisUrl.replace("http:","https:")),this.init()},init:function(){this.inherited(arguments),this._checkVTLSupport().then(t.hitch(this,(function(e){this._supportsVTL=e}))),a.forEach(this.basemaps,(function(e){e.id&&0!==e.id.length||(e.id=this._getUniqueId()),a.forEach(e.layers,(function(e){e.opacity=e.opacity>=0?e.opacity:1,e.visibility=!0}),this)}),this),this.basemapIds&&this.basemapIds.length>0&&a.forEach(this.basemapIds,(function(e){this.map.getLayer(e)._basemapGalleryLayerType="basemap"}),this),this.referenceIds&&this.referenceIds.length>0&&a.forEach(this.referenceIds,(function(e){var s=this.map.getLayer(e);s._basemapGalleryLayerType="reference",s.attr("data-reference",!0)}),this),this.basemapsGroup&&(this.basemapsGroup.owner&&this.basemapsGroup.title||this.basemapsGroup.id)?this._findCustomBasemapsGroup(t.hitch(this,"_handleArcGISBasemapsResponse")):this.showArcGISBasemaps?this._findArcGISBasemapsGroup(t.hitch(this,"_handleArcGISBasemapsResponse")):this._finishStartup()},startup:function(){this.loaded?this._refreshUI():i.connect(this,"onLoad",t.hitch(this,(function(){this._refreshUI()})))},select:function(e){this._select(e)},getSelected:function(){return this._selectedBasemap},get:function(e){var s;for(s=0;s<this.basemaps.length;s++)if(this.basemaps[s].id===e)return this.basemaps[s];return null},add:function(e){return e&&!e.id?(e.id=this._getUniqueId(),this.basemaps.push(e),this._refreshUI(),this.onAdd(e),!0):!(!e||!this._isUniqueId(e.id))&&(this.basemaps.push(e),this._refreshUI(),this.onAdd(e),!0)},remove:function(e){var s;for(s=0;s<this.basemaps.length;s++){var a=this.basemaps[s];if(a.id===e)return this._selectedBasemap&&this._selectedBasemap.id===a.id&&(this._selectedBasemap=null),this.basemaps.splice(s,1),this._refreshUI(),this.onRemove(a),a}return null},onLoad:function(){},onSelectionChange:function(){},onAdd:function(e){},onRemove:function(e){},onError:function(e){},_defaultBasemapGalleryGroupQuery:'title:"ArcGIS Online Basemaps" AND owner:esri',_basemapGalleryGroupQuery:null,_finishStartup:function(){this.loaded=!0,this.onLoad(),0===this.map.layerIds.length&&this.basemaps.length>0&&!this._selectBasemapInProgress&&this._select(this.basemaps[0].id)},_findCustomBasemapsGroup:function(e){this.basemapsGroup&&this.basemapsGroup.id?this._findArcGISBasemaps(this.basemapsGroup.id,e):(this._basemapGalleryGroupQuery='title:"'+this.basemapsGroup.title+'" AND owner:'+this.basemapsGroup.owner,this._findArcGISBasemapsGroup(e))},_findArcGISBasemapsGroup:function(e){if(this._basemapGalleryGroupQuery)this._findArcGISBasemapsGroupContent(e);else{var s=this.arcgisUrl+"/portals/self",a={f:"json"};a.culture=r.locale,g({url:s,content:a,callbackParamName:"callback",load:t.hitch(this,(function(s,a){s&&s.useVectorBasemaps&&s.vectorBasemapGalleryGroupQuery?this._checkVTLSupport().then(t.hitch(this,(function(a){a?this._basemapGalleryGroupQuery=s.vectorBasemapGalleryGroupQuery:s&&s.basemapGalleryGroupQuery?this._basemapGalleryGroupQuery=s.basemapGalleryGroupQuery:this._basemapGalleryGroupQuery=this._defaultBasemapGalleryGroupQuery,this._findArcGISBasemapsGroupContent(e)}))):s&&s.basemapGalleryGroupQuery?(this._basemapGalleryGroupQuery=s.basemapGalleryGroupQuery,this._findArcGISBasemapsGroupContent(e)):(this._basemapGalleryGroupQuery=this._defaultBasemapGalleryGroupQuery,this._findArcGISBasemapsGroupContent(e))})),error:t.hitch(this,(function(e,s){this._basemapGalleryGroupQuery=this._defaultBasemapGalleryGroupQuery}))})}},_findArcGISBasemapsGroupContent:function(e){var s=t.hitch(this,"_findArcGISBasemaps"),a=this.arcgisUrl+"/community/groups",i={};i.q=this._basemapGalleryGroupQuery,i.f="json",g({url:a,content:i,callbackParamName:"callback",load:t.hitch(this,(function(a,i){if(a.results.length>0)s(a.results[0].id,e,a.results[0].sortField,a.results[0].sortOrder);else{this.onError("esri.dijit.BasemapGallery: could not find group for basemaps.")}})),error:t.hitch(this,(function(e){this.onError("esri.dijit.BasemapGallery: could not find group for basemaps.")}))})},_findArcGISBasemaps:function(e,s,a,i){var r=t.hitch(this,(function(e,s,a,i){var r=this.arcgisUrl+"/search",n={};n.q="group:"+e+' AND type:"web map" NOT type:"web mapping application"',n.sortField=a,n.sortOrder="asc"===i?"desc":"asc",n.num=100,n.f="json",g({url:r,content:n,callbackParamName:"callback",load:t.hitch(this,(function(e,a){if(e.results.length>0)s(e.results);else{this.onError("esri.dijit.BasemapGallery: could not find group for basemaps.")}})),error:t.hitch(this,(function(e,s){this.onError("esri.dijit.BasemapGallery: could not find group for basemaps.")}))})}));a&&i?r(e,s,a,i):g({url:this.arcgisUrl+"/community/groups/"+e,content:{f:"json"},callbackParamName:"callback",load:t.hitch(this,(function(a,i){a.sortField?r(e,s,a.sortField,a.sortOrder):r(e,s,"name","desc")})),error:t.hitch(this,(function(a,i){r(e,s,"name","desc")}))})},_handleArcGISBasemapsResponse:function(e){e.length>0&&(a.forEach(e,(function(e,s){if(this.bingMapsKey||!this.bingMapsKey&&e.title&&-1===e.title.indexOf("Bing Maps")){var a={};if(a.id=this._getUniqueId(),a.title=e.title,a.thumbnailUrl="",e.thumbnail&&e.thumbnail.length&&(a.thumbnailUrl=this.arcgisUrl+"/content/items/"+e.id+"/info/"+e.thumbnail,y.id)){var i=y.id.findCredential(v.urlToObject(this.arcgisUrl).path);i&&(a.thumbnailUrl+="?token="+i.token)}a.itemId=e.id;var t=new x(a,this);this.basemaps.splice(0,0,t)}}),this),this._finishStartup())},_refreshUI:function(){this._hasUI&&(d.empty(this.flowContainer),a.forEach(this.basemaps,(function(e,s){e.id||(e.id="basemap_"+s),this.flowContainer.appendChild(this._buildNodeLayout(e))}),this),d.create("br",{style:{clear:"both"}},this.flowContainer),this._markSelected(this._selectedBasemap))},_buildNodeLayout:function(s){var a="galleryNode_"+s.id,r=d.create("div",{id:a,class:"esriBasemapGalleryNode"}),n=d.create("a",{href:"javascript:void(0);"},r);i.connect(n,"onclick",t.hitch(this,"_onNodeClick",s));var o=s.title||"";s.thumbnailUrl?d.create("img",{class:"esriBasemapGalleryThumbnail",src:s.thumbnailUrl,title:o,alt:o},n):d.create("img",{class:"esriBasemapGalleryThumbnail",src:e.toUrl("./images/transparent.gif"),title:o,alt:o},n);var l=d.create("div",{class:"esriBasemapGalleryLabelContainer"},r);return d.create("span",{innerHTML:o,alt:o,title:o},l),r},_onNodeClick:function(e,s){s.preventDefault(),this._markSelected(e),this.select(e.id)},_markSelected:function(e){if(e){a.forEach(r.query(".esriBasemapGallerySelectedNode",this.domNode),(function(e){m.remove(e,"esriBasemapGallerySelectedNode")}));var s=h.byId("galleryNode_"+e.id);s&&m.add(s,"esriBasemapGallerySelectedNode")}},_select:function(e){this._selectBasemapInProgress=!0;var s=this.get(e);if(s){if(s.layers)this._getServiceInfos(s);else{var a=s.getLayers(this.arcgisUrl);t.isArray(a)?this._getServiceInfos(s):a.addCallback(t.hitch(this,(function(e){this._getServiceInfos(s)})))}this._markSelected(s)}else this._selectBasemapInProgress=!1},_getServiceInfos:function(e){"https:"===location.protocol&&a.forEach(e.layers,(function(e){(this._isAgolService(e.url)||this._isHostedService(e.url))&&(e.url=e.url.replace("http:","https:"))}),this),this._selectedBasemap=e;var s=[];(a.forEach(e.layers,(function(e){e.url&&e.url.length>0&&!e.isReference&&!e.type&&(e.deferredsPos=s.length,s.push(this._getServiceInfo(e.url)))}),this),s.length>0)?new p(s).addCallback(t.hitch(this,(function(s){var i=null;(a.forEach(e.layers,(function(e){if(0===e.deferredsPos||e.deferredsPos){e.serviceInfoResponse=s[e.deferredsPos][1];var a=e.serviceInfoResponse.fullExtent;a||(a=e.serviceInfoResponse.extent),i=i?i.union(new I(a)):new I(a)}}),this),this.map.extent)&&(this._getIntersectionPercent(i,this.map.extent)<5&&this.map.setExtent(i,!0));this._switchBasemapLayers(e),this._updateReferenceLayer(e)}))):(this._switchBasemapLayers(e),this._updateReferenceLayer(e))},_checkVTLSupport:function(){var e=new c;return n("ie")?e.resolve(!1):e.resolve(B.supported()),e},_switchBasemapLayers:function(e){var s,r,n,o=e.layers,l=!1;if(a.forEach(o,(function(e){"VectorTileLayer"===e.type&&(l=!0)})),l&&!0!==this._supportsVTL)return s="esri.dijit.BasemapGallery: Unable to switch basemap because layer type is not supported by your current browser version.",void this.onError(s);if(this.map.layerIds.length>0&&0===this.map.getNumLevels()&&("OpenStreetMap"===o[0].type||o[0].type&&o[0].type.indexOf("BingMaps")>-1||"WebTiledLayer"===o[0].type||"VectorTileLayer"===o[0].type))return s="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.",void this.onError(s);a.forEach(o,(function(e){if(!e.isReference&&e.type&&e.type.indexOf("BingMaps")>-1&&!this.bingMapsKey){this.onError("esri.dijit.BasemapGallery: Invalid Bing Maps key.")}else;}),this);var c=0;a.forEach(o,(function(e,s){if(!e.isReference){var a,l;if("OpenStreetMap"===e.type){if(this.map.layerIds.length>0&&0===this.map.getNumLevels())return l="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.",void this.onError(l);a=new S({id:"layer_osm",opacity:e.opacity})}else if(e.type&&e.type.indexOf("BingMaps")>-1){if(this.map.layerIds.length>0&&0===this.map.getNumLevels())return l="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.",void this.onError(l);var p=G.MAP_STYLE_AERIAL_WITH_LABELS;"BingMapsAerial"===e.type?p=G.MAP_STYLE_AERIAL:"BingMapsRoad"===e.type&&(p=G.MAP_STYLE_ROAD),a=new G({id:"layer_bing",bingMapsKey:this.bingMapsKey,mapStyle:p,opacity:e.opacity})}else if("WebTiledLayer"===e.type){if(this.map.layerIds.length>0&&0===this.map.getNumLevels())return l="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.",void this.onError(l);var h=e.initialExtent||e.fullExtent;a=new R(e.templateUrl||e.url,{visible:e.visibility,opacity:e.opacity,copyright:e.copyright,fullExtent:e.fullExtent&&new I(e.fullExtent),initialExtent:h&&new I(h),subDomains:e.subDomains,tileInfo:e.tileInfo?new U(e.tileInfo):null,tileServers:e.tileServers,wmtsInfo:e.wmtsInfo})}else if("VectorTileLayer"===e.type){a=new B(e.styleUrl,{visible:e.visibility,opacity:e.opacity}),0===s&&o.length>1&&this._removeBasemapLayers();var d=this;i.connect(a,"onLoad",t.hitch(this,(function(e,s,a){var i,t;if(t=d._sameSpatialReference(a.spatialReference,d.map.spatialReference),d.map.spatialReference&&!t)return i="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different spatial reference.",void d.onError(i);if(d.map.getNumLevels()>0){if(!d._sameTilingScheme(a.tileInfo,d.map.__tileInfo))return i="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different tiling scheme.",void d.onError(i)}else if(d.map.loaded)return i="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a vector tile layer and cannot be loaded as a dynamic layer.",void d.onError(i);0===s&&1===o.length&&d._removeBasemapLayers(),a._basemapGalleryLayerType="basemap",d.map.addLayer(a,e)}),c,s))}else if(e.serviceInfoResponse&&e.serviceInfoResponse.mapName){if(r=new _(e.serviceInfoResponse.spatialReference),n=this._sameSpatialReference(r,this.map.spatialReference),this.map.spatialReference&&!n)return l="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different spatial reference.",void this.onError(l);if(!0===e.serviceInfoResponse.singleFusedMapCache&&this.map.getNumLevels()>0){if(!this._sameTilingScheme(e.serviceInfoResponse.tileInfo,this.map.__tileInfo))return l="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different tiling scheme.",void this.onError(l)}else if(!0===e.serviceInfoResponse.singleFusedMapCache&&e.serviceInfoResponse.capabilities.toLowerCase().indexOf("tilesonly")>-1&&this.map.loaded&&0===this.map.getNumLevels())return l="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.",void this.onError(l);a=(0===this.map.layerIds.length||this.map.getNumLevels()>0)&&!0===e.serviceInfoResponse.singleFusedMapCache?this._loadAsCached(e):this._loadAsDynamic(e)}else if(e.serviceInfoResponse&&e.serviceInfoResponse.pixelSizeX){if(r=new _(e.serviceInfoResponse.spatialReference),n=this._sameSpatialReference(r,this.map.spatialReference),this.map.spatialReference&&!n)return l="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different spatial reference.",void this.onError(l);if(!0===e.serviceInfoResponse.singleFusedMapCache&&this.map.getNumLevels()>0&&!this._sameTilingScheme(e.serviceInfoResponse.tileInfo,this.map.__tileInfo))return l="esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different tiling scheme.",void this.onError(l);if(e.serviceInfoResponse.singleFusedMapCache&&"ArcGISImageServiceLayer"!==e.type)a="Raster"===e.serviceInfoResponse.cacheType?new k(e.url,{serviceInfo:e.serviceInfoResponse,opacity:e.opacity,visible:e.visibility,bandIds:e.bandIds&&e.bandIds.length>0?e.bandIds:null}):new w(e.url,{resourceInfo:e.serviceInfoResponse,opacity:e.opacity,visible:e.visibility});else if(e.serviceInfoResponse.pixelSizeX){var m=new A;m.bandIds=e.bandIds,e.renderingRule?m.renderingRule=new T(e.renderingRule):!e.bandIds&&e.serviceInfoResponse.bandCount&&parseInt(e.serviceInfoResponse.bandCount,10)>3&&(m.bandIds=[0,1,2]),a=new E(e.url,{resourceInfo:e.serviceInfoResponse,opacity:e.opacity,visible:e.visibility,imageServiceParameters:m})}else{var u=new j;u.format="png24",e.serviceInfoResponse.supportedImageFormatTypes&&e.serviceInfoResponse.supportedImageFormatTypes.indexOf("PNG32")>-1&&(u.format="png32"),a=new L(e.url,{resourceInfo:e.serviceInfoResponse,opacity:e.opacity,visible:e.visibility,imageParameters:u})}}"VectorTileLayer"===e.type?c++:a&&(0===s&&this._removeBasemapLayers(),a._basemapGalleryLayerType="basemap",this.map.addLayer(a,c),c++)}}),this),this._selectBasemapInProgress=!1,this.onSelectionChange()},_removeBasemapLayers:function(){var e=this.map.layerIds,s=[];a.forEach(e,(function(e){var a=this.map.getLayer(e);"basemap"===a._basemapGalleryLayerType&&s.push(a)}),this),0===s.length&&e.length>0&&s.push(this.map.getLayer(e[0])),s.length>0&&a.forEach(s,(function(e){this.map.removeLayer(e)}),this)},_updateReferenceLayer:function(e){var s;for(this._removeReferenceLayer(),s=0;s<e.layers.length;s++)!0===e.layers[s].isReference&&this._addReferenceLayer(e.layers[s])},_removeReferenceLayer:function(){var e;for(e=this.map.layerIds.length-1;e>=0;e--){var s=this.map.layerIds[e],a=this.map.getLayer(s);"reference"===a._basemapGalleryLayerType&&this.map.removeLayer(a)}},_addReferenceLayer:function(e){"VectorTileLayer"===e.type?this._handleReferenceServiceInfoResponse(e):this._getServiceInfo(e.url,t.hitch(this,"_handleReferenceServiceInfoResponse",e))},_handleReferenceServiceInfoResponse:function(e,s,a){var i;if(e.serviceInfoResponse=s,"VectorTileLayer"===e.type)i=new B(e.styleUrl,{visible:e.visibility,opacity:e.opacity});else if(s&&s.mapName)i=!0===s.singleFusedMapCache?this._loadAsCached(e):this._loadAsDynamic(e);else if(s&&s.pixelSizeX)if(e.serviceInfoResponse.singleFusedMapCache)i=new w(e.url,{resourceInfo:e.serviceInfoResponse,opacity:e.opacity,visible:e.visibility});else if(e.serviceInfoResponse.pixelSizeX){var t=new A;t.bandIds=e.bandIds,e.renderingRule?t.renderingRule=new T(e.renderingRule):!e.bandIds&&s.bandCount&&parseInt(s.bandCount,10)>3&&(t.bandIds=[0,1,2]),i=new E(e.url,{resourceInfo:s,opacity:e.opacity,visible:e.visibility,imageServiceParameters:t})}else{var r=new j;r.format="png24",e.serviceInfoResponse.supportedImageFormatTypes&&e.serviceInfoResponse.supportedImageFormatTypes.indexOf("PNG32")>-1&&(r.format="png32"),r.transparent=!0,i=new L(e.url,{resourceInfo:e.serviceInfoResponse,opacity:e.opacity,visible:e.visibility,imageParameters:r})}i&&(i._basemapGalleryLayerType="reference",i.attr("data-reference",!0),this.map.addLayer(i))},_getServiceInfo:function(e,s){var a={f:"json"};return g({url:e,content:a,callbackParamName:"callback",load:function(e,a){s&&s(e,a)},error:t.hitch(this,(function(e,s){this.onError("esri.dijit.BasemapGallery: service not accessible.")}))})},_loadAsCached:function(e){var s=[];e.displayLevels||(s=a.map(e.serviceInfoResponse.tileInfo.lods,(function(e){return e.level})));var i=null;return e.exclusionAreas&&e.exclusionAreas.length&&(i=[],a.forEach(e.exclusionAreas,(function(e){i.push({minZoom:e.minZoom,maxZoom:e.maxZoom,minScale:e.minScale,maxScale:e.maxScale,geometry:new I(e.geometry)})}))),new w(e.url,{resourceInfo:e.serviceInfoResponse,opacity:e.opacity,visible:e.visibility,exclusionAreas:i,displayLevels:e.displayLevels||s})},_loadAsDynamic:function(e){var s=new L(e.url,{resourceInfo:e.serviceInfoResponse,opacity:e.opacity,visible:e.visibility});return e.visibleLayers&&s.setVisibleLayers(e.visibleLayers),s},_getIntersectionPercent:function(e,s){var a=s.intersects(e);return a?a.getWidth()*a.getHeight()/(s.getWidth()*s.getHeight())*100:0},_getIds:function(){var e=[];return a.forEach(this.basemaps,(function(s){e.push(s.id)}),this),e},_getUniqueId:function(){for(var e=","+this._getIds().toString()+",",s=0;;){if(!(e.indexOf(",basemap_"+s+",")>-1))return"basemap_"+s;s++}},_isUniqueId:function(e){return-1===(","+this._getIds().toString()+",").indexOf(","+e+",")},_isAgolService:function(e){return!!e&&(-1!==e.indexOf("/services.arcgisonline.com/")||-1!==e.indexOf("/server.arcgisonline.com/"))},_isHostedService:function(e){return!!e&&-1!==e.indexOf(".arcgis.com/")},_sameSpatialReference:function(e,s){return!!(e&&s&&e.wkt==s.wkt&&(e.wkid===s.wkid||b.isDefined(e.latestWkid)&&e.latestWkid===s.wkid||b.isDefined(s.latestWkid)&&e.wkid===s.latestWkid||b.isDefined(e.latestWkid)&&e.latestWkid===s.latestWkid))||!!(e&&s&&e.isWebMercator()&&s.isWebMercator())},_sameTilingScheme:function(e,s){var a,i,t=this.map,r=t.width>t.height?t.width:t.height,n=!1,o=!1;for(a=0;a<e.lods.length;a++){var l=e.lods[a].scale;for(e.dpi!==s.dpi&&(l=e.lods[a].scale/e.dpi),i=0;i<s.lods.length;i++){var c=s.lods[i].scale;if(e.dpi!==s.dpi&&(c=s.lods[i].scale/s.dpi),Math.abs(c-l)/c<1/r){if(n){o=!0;break}n=!0}if(c<l)break}if(o)break}return!!o||!(!n||1!==e.lods.length&&1!==s.lods.length)}});return o("extend-esri")&&t.setObject("dijit.BasemapGallery",N,y),N}));