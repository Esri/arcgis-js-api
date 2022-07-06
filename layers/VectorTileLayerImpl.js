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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","dojo/dom-construct","dojo/dom-style","dojo/io-query","../geometry/Extent","../geometry/screenUtils","../geometry/scaleUtils","../SpatialReference","../config","../lang","../domUtils","../urlUtils","../kernel","./layer","./TileInfo","./unitBezier","./vectorTiles/request","./vectorTiles/core/promiseUtils","./vectorTiles/core/urlUtils","./vectorTiles/geometry/support/spatialReferenceUtils","./vectorTiles/layers/support/vectorTileLayerLoader","./vectorTiles/layers/support/TilemapCache","./vectorTiles/views/vectorTiles/style/StyleRepository","./vectorTiles/views/vectorTiles/VectorTileContainer","./vectorTiles/views/vectorTiles/VectorTileDisplayObject","./vectorTiles/views/vectorTiles/TileHandler","./vectorTiles/views/2d/engine/StageGL","./vectorTiles/views/2d/tiling/TileInfoView","./vectorTiles/views/2d/tiling/TileStrategy","./vectorTiles/views/2d/tiling/TileKey","./vectorTiles/views/2d/tiling/TileQueue","./vectorTiles/views/webgl/webgl-utils"],(function(e,t,i,s,n,a,r,l,h,o,c,d,_,u,p,f,g,v,m,y,w,S,T,x,R,b,C,H,U,I,P,D,V){var E=g.ease,M=p.createSubclass({declaredClass:"esri.layers.VectorTileLayer",_mapsWithAttribution:["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"],_eventMap:{"style-change":["style"]},constructor:function(e,t){this._frame=this._frame.bind(this),this._params=t||{},t&&t.tileServers&&t.tileServers.length&&(this.tileServers=t.tileServers=t.tileServers.map((function(e){return _.getAbsoluteUrl(e)}),this)),t&&t.copyright&&(this.copyright=t.copyright),this._viewState={scale:0,width:0,height:0,size:[0,0],rotation:0,resolution:1,center:[0,0],worldScreenWidth:0,spatialReference:null,toScreen:function(e,t){var i=this.center[0]-this.resolution*this.width*.5,s=this.center[1]+this.resolution*this.height*.5;return e[0]=(t[0]-i)/this.resolution,e[1]=(s-t[1])/this.resolution,e},toMap:function(e,t){var i=this.center[0]-this.resolution*this.width*.5,s=this.center[1]+this.resolution*this.height*.5;return e[0]=i+t[0]*this.resolution,e[1]=s-t[1]*this.resolution,e}},this._renderParameters={state:this._viewState,pixelRatio:window.devicePixelRatio,stationary:!0},this._updateParameters={state:this._viewState,pixelRatio:window.devicePixelRatio,stationary:!0},this.type="vector-tile",t&&t.resourceInfo?(this._stopDisplay(),this._applyMetadata(t.resourceInfo)):this.setStyle(e),this.registerConnectEvents()},setStyle:function(e){return this.loadStyle(e)},getStyle:function(){return this.currentStyleInfo&&this.currentStyleInfo.style||null},opacity:1,setOpacity:function(e){this.opacity!=e&&this.onOpacityChange(this.opacity=e)},onOpacityChange:function(){},_pinching:!1,getTileUrl:function(e,t,i){var s=this._url&&this._url.query,a=this.tileServers[t%this.tileServers.length];return a=a.replace(/\{z\}/gi,e.toString()).replace(/\{level\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{row\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()).replace(/\{col\}/gi,i.toString()),s&&(a+="?"+n.objectToQuery(s)),a=this.addTimestampToURL(a),_.addProxy(a)},loadStyle:function(e){if(this._loadingPromise&&"string"==typeof e&&this.url===e)return this._loadingPromise;this._stopDisplay();var t=this._loadingPromise;return this._loadingPromise=S.loadMetadata(e).then(function(e){this._applyMetadata(e)}.bind(this)).otherwise(function(e){throw this._errorHandler(e),e}.bind(this)),t&&!t.isFulfilled()&&t.cancel(),this._loadingPromise},_applyMetadata:function(e){this.url=e.url,this._url=e.parsedUrl,!this._url&&e.styleUrl&&(this._url=y.urlToObject(e.styleUrl)),this.currentStyleInfo={glyphsUrl:e.glyphsUrl,serviceUrl:e.serviceUrl,spriteUrl:e.spriteUrl,styleUrl:e.styleUrl,style:e.style,layerDefinition:e.layerDefinition},this.styleRepository=new x(e.style,e),this._read(e.layerDefinition),this.onStyleChange(this.getStyle()),this.loaded||(this._findCredential(),this.loaded=!0,this.onLoad(this)),this.suspended||this._tileHandler||this._startDisplay()},refresh:function(){this.suspended||(this._refreshTS=Date.now(),this._onExtentChangeHandler(this._map.extent,null,!0,this._map.__LOD))},takeScreenshot:function(e){return this._stageGL?this._stageGL.takeScreenshot(e):m.reject("No valid GL context!")},_setMap:function(t,n,a){this.inherited(arguments),this._map=t;var r=this._div=i.create("div",null,n),l={position:"absolute",width:t.width+"px",height:t.height+"px",overflow:"visible",opacity:this.opacity};if(s.set(r,l),this.attr("data-vectortiles",!0),this._onResizeHandle=t.on("resize",e.hitch(this,this._onResizeHandler)),this._onOpacityHandle=this.on("opacity-change",e.hitch(this,this._opacityChangeHandler)),this._onScaleVisHandle=this.on("scale-visibility-change",e.hitch(this,(function(){}))),this._onVisibilityHandle=this.on("visibility-change",e.hitch(this,(function(){}))),t.acquireWebGLContext(this),this._stageGL=new H,this._stageGL.setElement(this._stageGL.createElement()),this._div.appendChild(this._stageGL.element),this._stageGL.parent={requestChildRender:this._scheduleRender.bind(this)},this._stageGL.attach(this._renderParameters),this._startDisplay(),this.evaluateSuspension(),this.suspended&&!t.loaded)var h=t.on("load",e.hitch(this,(function(){h.remove(),this.evaluateSuspension()})));return r},_unsetMap:function(e,t){e.releaseWebGLContext(this),this._map=null,this.suspended||this._stopDisplay(),this._stageGL.detach(this._renderParameters),this._stageGL=null,i.destroy(this._div),this._div=null,this._handles&&this._handles.forEach((function(e){e.remove()})),this._handles=null,this._onResizeHandle=this._onResizeHandle&&this._onResizeHandle.remove()&&null,this._onOpacityHandle=this._onOpacityHandle&&this._onOpacityHandle.remove()&&null,this._onScaleVisHandle=this._onScaleVisHandle&&this._onScaleVisHandle.remove()&&null,this._onVisibilityHandle=this._onVisibilityHandle&&this._onVisibilityHandle.remove()&&null,this.inherited(arguments)},_read:function(e){if(this.version=e.currentVersion||e.version,this.copyright=this.copyright||e.copyrightText,this.fullExtent=new a(e.fullExtent),this.initialExtent=new a(e.initialExtent),this.spatialReference=this.fullExtent.spatialReference,this.tileInfo=new f(e.tileInfo),this.tileInfo.size=[this.tileInfo.cols,this.tileInfo.height],this.tileInfo.spatialReference.isWrappable=this.tileInfo.spatialReference._isWrappable(),this.tileInfo.scales=this.tileInfo.lods.map((function(e){return e.scale})),this.tileInfo.scaleToZoom=function(e){for(var t=this.scales,i=t.length-1,s=0;s<i;s++){var n=t[s],a=t[s+1];if(n<=e)return s;if(a===e)return s+1;if(n>e&&a<e)return s+1-(e-a)/(n-a)}return s},this._hasMin||this.setMinScale(e.minScale),this._hasMax||this.setMaxScale(e.maxScale),e.tileMap&&(this.tileIndexUrl=y.join(this.currentStyleInfo.serviceUrl,e.tileMap)),!this._params.tileServers){var t=e.tiles;this.currentStyleInfo&&this.currentStyleInfo.serviceUrl&&t.forEach(function(e,t,i){y.isAbsolute(e)?i[t]=e:i[t]=y.join(this.currentStyleInfo.serviceUrl,e)}.bind(this)),this.tileServers=t}var i=null;this.currentStyleInfo.serviceUrl&&(this.parsedUrl=y.urlToObject(this.currentStyleInfo.serviceUrl),i=this._getDefaultAttribution(this.parsedUrl.path)),i?(this.attributionDataUrl=i,this.hasAttributionData=!0):(this.attributionDataUrl=null,this.hasAttributionData=!1),this.capabilities=this._getCapabilities(e),this.tilemapCache=this.capabilities.supportsTileMapIndexing?new T({layer:this}):null},_getCapabilities:function(e){return{exportTilesAllowed:!!e.hasOwnProperty("exportTilesAllowed")&&e.exportTilesAllowed,supportsTileMapIndexing:!!e.capabilities&&-1!==e.capabilities.toLowerCase().indexOf("tilemap")}},_getDefaultAttribution:function(e){var t=e.match(/^https?:\/\/(basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i);if(t){var i=t[3];if(i){var s,n=t[2]||"";i=i.toLowerCase();for(var a=0,r=this._mapsWithAttribution.length;a<r;a++)if((s=this._mapsWithAttribution[a]).toLowerCase().indexOf(i)>-1){var l=window.location.protocol;return("http:"===l||"https:"===l?l:"https:")+"//static.arcgis.com/attribution/Vector"+n+"/"+s}}}},_startDisplay:function(){var e={capabilities:{operations:{supportsTileMap:this.capabilities.supportsTileMapIndexing}},styleRepository:this.styleRepository,tileIndexUrl:this.tileIndexUrl,tileInfo:this.tileInfo,tilemapCache:this.tilemapCache,fullExtent:{width:this.fullExtent.getWidth()},getTileUrl:this.getTileUrl.bind(this)};this._renderParameters.pixelRatio=this._updateParameters.pixelRatio=window.devicePixelRatio,this._vectorTileContainer=new R,this._stageGL.addChild(this._vectorTileContainer),this._viewState.spatialReference=this.tileInfo.spatialReference,this._tileInfoView=new U(this.tileInfo,this.fullExtent),this._tileRequests=new Map,this._tileHandler=new C(e,this._scheduleUpdate.bind(this),window.devicePixelRatio||1,!1,this._tileInfoView),this._viewState.spatialReference=this.spatialReference,this._allTilesAreHandled=!1,this._tileHandlerPromise=this._tileHandler.start().then(function(){this._fetchQueue=new D({tileInfoView:this._tileInfoView,process:this._getTileData.bind(this)}),this._tileStrategy=new I({cachePolicy:"keep",coveragePolicy:"smallest",acquireTile:this._acquireTile.bind(this),releaseTile:this._releaseTile.bind(this),tileInfoView:this._tileInfoView}),this._vectorTileContainer.initialize(this._tileHandler.spriteMosaic,this._tileHandler.glyphMosaic,this.tileInfo,this._tileInfoView),this._scheduleUpdate()}.bind(this))},_stopDisplay:function(){this._tileHandlerPromise&&!this._tileHandlerPromise.isFulfilled()&&this._tileHandlerPromise.cancel(),this._tileStrategy&&(this._renderRequested=!1,this._updateRequested=!1,this._frameRequested=!1,this._animation&&(this._animation.stop(),this._animation=null),this._tileRequests.forEach((function(e){e.cancel("cancel")})),this._tileHandler.stop(),this._tileHandler.destroy(),this._tileStrategy.destroy(),this._tileInfoView=this._tileHandler=this._tileStrategy=null,this._vectorTileContainer.removeAllChildren(),this._stageGL.removeChild(this._vectorTileContainer),this._vectorTileContainer=null)},_scheduleRender:function(){this._renderRequested=!0,this._map&&this._tileStrategy&&this._scheduleFrame()},_scheduleUpdate:function(){this._updateRequested=!0,this._map&&this._tileStrategy&&this._scheduleFrame()},_scheduleFrame:function(){this._map&&(this._frameRequested||(this._frameRequested=!0,F(this._frame)))},_frame:function(){if(this._frameRequested){this._frameRequested=!1,this._renderParameters.pixelRatio!==window.devicePixelRatio&&(this._renderParameters.pixelRatio=this._updateParameters.pixelRatio=window.devicePixelRatio,this._stopDisplay(),this._startDisplay()),this._animation&&(this._animation.step(),this._animation.running||(this._animation=null));var e=!this._animation&&!this._pinching&&!this._panning;this._updateParameters.stationary=this._renderParameters.stationary=e,this._viewState.resolution=this._viewState.scale/(39.37*l.getUnitValueForSR(this.spatialReference)*96);var t=0;if(this._viewState.spatialReference&&this._viewState.spatialReference._isWrappable()){var i=w.getInfo(this._viewState.spatialReference);t=i.valid[1]-i.valid[0]}this._viewState.worldScreenWidth=Math.round(t/this._viewState.resolution),this._renderRequested&&(this._renderRequested=!1,this._stageGL.doRender(this._renderParameters)),this._updateRequested&&(this._updateRequested=!1,this._fetchQueue.pause(),this._fetchQueue.state=this._updateParameters.state,this._allTilesAreHandled=this._tileStrategy.update(this._updateParameters),this._fetchQueue.resume()),this._animation&&(this._scheduleRender(),this._scheduleUpdate()),this._checkUpdating()}},_setViewState:function(t){(t=e.mixin(this._viewState,t)).center.type&&(t.center=[t.center.x,t.center.y]),this._scheduleRender(),this._scheduleUpdate()},_animateViewState:function(e,t){var i=t.immediate||0===o.defaults.map.zoomDuration;if(this._animation=null,i)this._setViewState(e);else{var s=this._viewState,n=o.defaults.map.zoomDuration,a=z()+16,r=s.center[0],l=s.center[1],h=s.scale,c=Array.isArray(e.center)?e.center[0]:e.center.x,d=Array.isArray(e.center)?e.center[1]:e.center.y,_=e.scale||s.scale,u=this;this._animation={running:!0,stop:function(){this.running=!1},step:function(){if(this.running){var e=(z()+16-a)/n;e>=1&&(e=1,this.running=!1);var t=E(e),i=h+(_-h)*t,s=r+(c-r)*t,o=l+(d-l)*t;u._setViewState({center:[s,o],scale:i})}}},this._scheduleRender(),this._scheduleUpdate()}},_checkUpdating:function(){var e=!0;this._tileRequests.forEach((function(t){e|=t.isFulfilled()})),e&&this._tileStrategy&&(e=this._allTilesAreHandled),e?this._fireUpdateEnd():this._fireUpdateStart()},_acquireTile:function(e){var t=P.pool.acquire();t.set(e.level,e.row,e.col,e.world);var i=this._tileHandler.getStyleRepository(),s=this._tileHandler.glyphMosaic,n=b.pool.acquire(t,t,this.tileInfo,i,s,0);return this._tileHandlerPromise.then(function(){var e=this._tileHandler.getRefKey(t).then(function(e){return n.refKey=e,this._fetchQueue.push(t).then(function(e){n.setData(e.tileData,e.workerId,e.connection),n.once("attach",this._scheduleUpdate.bind(this)),this._vectorTileContainer.addChild(n)}.bind(this))}.bind(this));this._tileRequests.set(t.id,e)}.bind(this)),n},_releaseTile:function(e){var t=e.key.id,i=this._tileRequests.get(t);i.isFulfilled()||i.cancel(),this._tileRequests.delete(t),this._vectorTileContainer.removeChild(e),this._scheduleUpdate(),e.once("detach",(function(){b.pool.release(e)}))},_getTileData:function(e){return this._tileHandler.getTileData(e,0)},onStyleChange:function(e){},_opacityChangeHandler:function(e){this._div&&(this._div.style.opacity=e.opacity)},_onResizeHandler:function(e){var t=this._div&&this._div.style;if(t){t.width=e.width+"px",t.height=e.height+"px";this._map;this._setViewState({center:e.extent.getCenter(),width:e.width,height:e.height,size:[e.width,e.height]})}},onResume:function(){var t=this._map;this.inherited(arguments),d.show(this._div),this._setViewState({center:t.extent.getCenter(),scale:t.getScale(),width:t.width,height:t.height,size:[t.width,t.height],spatialReference:t.spatialReference}),this._handles=[t.on("pan-end",e.hitch(this,this._onPanEndHandler)),t.on("pan",e.hitch(this,this._onPanExtentChangeHandler)),t.on("extent-change",e.hitch(this,this._onExtentChangeHandler)),t.on("scale",e.hitch(this,this._onScaleHandler))]},onSuspend:function(){this.inherited(arguments),d.hide(this._div),this._handles.forEach((function(e){e.remove()})),this._handles=null},_onPanEndHandler:function(e){this._panning=!1,this._setViewState({center:e.extent.getCenter(),scale:this._map.getScale()})},_onPanExtentChangeHandler:function(e){this._panning=!0,this._animation&&(this._animation.stop(),this._animation=null),this._setViewState({center:e.extent.getCenter(),scale:this._map.getScale()})},_onExtentChangeHandler:function(e){var t=this._pinching||e.immediate;this._animateViewState({center:e.extent.getCenter(),scale:e.lod.scale},{immediate:t}),this._pinching=!1},_onScaleHandler:function(e){this._animation&&(this._animation.stop(),this._animation=null);var t=this._map;if(t._zoomAnimDiv.extent)return this._panning=!1,this._pinching=!1,void this._animateViewState({center:t._zoomAnimDiv.extent.getCenter(),scale:t._zoomAnimDiv.newLod.scale},{immediate:e.immediate});var i,s,n,a,r,l=t.navigationManager,h=l._dragOrigin,o=t.extent.getCenter(),c=h.x-.5*t.width,d=h.y-.5*t.height,_=t.extent.getWidth()/t.width;l._pinchScale?(this._pinching=!0,n=c*((s=_/(i=l._pinchScale))-_),a=d*(s-_),o.x-=n,o.y+=a,r=t.__LOD.scale/i,this._setViewState({center:o,scale:r})):l._zoomEndExtent&&(this._pinching=!1,n=c*((s=_/(i=t.getScale()/t.navigationManager._zoomEndLod.scale))-_),a=d*(s-_),o.x-=n,o.y+=a,r=t.navigationManager._zoomEndLod.scale,this._animateViewState({center:o,scale:r},{immediate:!1}))}});M.ACCESS_TOKEN=null,M.supported=function(){return V.detectWebGL()[0]};var q,L,A,z=(L=window.performance||{},void 0!==(A=L.now||L.webkitNow||L.msNow||L.oNow||L.mozNow)?function(){return A.call(L)}:(q=window.performance&&window.performance.timing&&window.performance.timing.navigationStart?window.performance.timing.navigationStart:(new Date).getTime(),function(){return(new Date).getTime()-q})),O=t("ff"),G=t("ie"),W=t("webkit"),j=t("opera"),k=(new Date).getTime(),F=window.requestAnimationFrame;return F||(F=window[((W?"webkit":O&&"moz")||j&&"o"||G&&"ms")+"RequestAnimationFrame"])||(F=function(e){var t=z(),i=Math.max(0,16-(t-k)),s=window.setTimeout((function(){e(z())}),i);return k=t+i,s}),M}));