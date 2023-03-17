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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","../DeferredList2","../../../geometry/Extent","../../../SpatialReference","../../../geometry/Point","../../PixelBlock","./RasterTileInfo","../raster/rasterProjectionHelper"],(function(t,e,i,s,r,l,a,n,o,h,f){var c=t(null,{declaredClass:"esri.layers.rasterLib.tile.RasterTileManager",count:null,fullBoundary:null,tileBoundary:null,tiles:null,resolution:null,virtual:!0,prefetchBufferSize:0,_progressiveGlobal:!1,_MAX_TILES:128,_defaultMatrixResolution:20,constructor:function(t){this.tiles=[],this.xformSetting={},this.mapSpatialReference=t&&t.mapSR,this.layer=t&&t.layer,this.identifiers=this.layer.raster.rasterFunction?this.layer.raster.getMemberRasters().map((function(t){return t._rasterId})):[this.layer.raster._rasterId];var e=t&&t.tileInfo;e&&this.setTileInfo(e)},setTileInfo:function(t){this.tileInfo=t,this.virtual=t.virtual,this.mapResolution=null,this.tiles.length=0,this.xformSetting.requireProjection=!this.virtual&&!this.mapSpatialReference.equals(this.tileInfo.spatialReference),this.xformSetting.requirePE=f.requirePE(this.mapSpatialReference,this.tileInfo.spatialReference),this.xformSetting.meshSize=this.xformSetting.requireProjection?[this._defaultMatrixResolution,this._defaultMatrixResolution]:[1,1],this.halfWorldWidth=f.getHalfWorldWidth(t.spatialReference)},updateResolution:function(t,e){if(!(this.mapResolution&&t&&this._resolutionEqual(this.mapResolution.x,t.x)&&this._resolutionEqual(this.mapResolution.y,t.y))){this.resetTiles();var i,s,r,l=this.xformSetting.requireProjection;this.mapResolution=this.resolution=t,l&&(this.resolution=f.projectResolution(t,this.tileInfo.spatialReference,this.layer.projectedFullExtent||e)),this._resolution=this.resolution;var a=this.resolution;if(!this.tileInfo.virtual){var o=.75*Math.min(a.x,a.y)+.25*Math.max(a.x,a.y);if(o>=this.tileInfo.lods[0].resolution)s=this.tileInfo.lods[0],this.ooe=!0;else if(o<=this.tileInfo.lods[this.tileInfo.lods.length-1].resolution)s=this.tileInfo.lods[this.tileInfo.lods.length-1],this.ooe=!1;else{for(i=0;i<this.tileInfo.lods.length-1;i++)if(s=this.tileInfo.lods[i],r=this.tileInfo.lods[i+1],s.resolution>=o&&r.resolution<=o){s.resolution-o>o-r.resolution&&(s=r);break}this.ooe=!1}this.level=s&&s.level,this.resolution=new n({x:s.resolution,y:s.resolution,spatialReference:this.tileInfo.spatialReference}),a=this.resolution}var h=this.layer.raster.rasterInfo.extent,c=this.tileInfo.origin,x=this.tileInfo.cols,u=this.tileInfo.rows,d=Math.floor((h.xmin-c.x)/a.x/x),m=Math.floor((h.xmax-c.x-a.x)/a.x/x),p=Math.floor((c.y-h.ymax)/a.y/u),y=Math.floor((c.y-h.ymin-a.y)/a.y/u);this.fullBoundary={rowStart:p,rowEnd:y,colStart:d,colEnd:m};var g=this.halfWorldWidth;if(g){var _=Math.ceil(g/a.x/(x/2)),w=this.tileInfo.applyGCS360Transform?360:g,B=Math.round(x-(w-c.x)/a.x%x);B===x&&(B=0),this.fullBoundary.colRange=_,this.fullBoundary.paddingRight=B;var v=_*x*a.x+c.x-w,T=this.tileInfo.applyGCS360Transform?0:c.x+g,S=Math.round((v-T)/a.x);this.fullBoundary.paddingLeft=S}this.hasNewData=!0}},getXformGrid:function(){var t,e=this.mapExtent,i=this.layer._hasTilingEffects?this.extent:this.fullExtent,s=this.layer.getCurrentResolution(),r=JSON.stringify(e.toJson())+JSON.stringify(i.toJson());return this._datumTransformationInitialized||(this._datumTransformationInitialized=!0,this._datumTransformation=f.getDefaultDatumTransformationForDataset(this.layer.raster.rasterInfo.extent,e.spatialReference,!0)),this._cachedExtentString&&this._cachedExtentString===r||(this._cachedExtentString=r,t=f.getProjectionOffsetGrid(e,i,s,this.tileInfo.applyGCS360Transform,this.halfWorldWidth,this._datumTransformation),this._xformGrid=t),t=this._xformGrid,this.xformSetting.meshSize=t&&t.size,t},getWrapTimes:function(t){var e=f.getHalfWorldWidth(t.spatialReference);if(!e)return 0;var i=t.xmin,s=t.xmax,r=2*e,l=this.tileInfo.applyGCS360Transform?0:-e;return Math.floor((s-l)/r)-Math.floor((i-l)/r)},normalizeCoordinate:function(t,e){if(!e)return 0;var i=2*e;if(t>0){for(;t>e;)t-=i;return t}for(;t<-e;)t+=i;return t},resetTiles:function(){this.tiles.forEach(e.hitch(this,(function(t){t.fetch&&!t.fetch.isCanceled()&&t.fetch.cancel(),t.update&&!t.update.isCanceled()&&t.update.cancel()}))),this.tiles.length=0},updateExtent:function(t,e){this.mapExtent=this.extent=t;var i=this.xformSetting.requireProjection;if(i){if(this.extent=f.project(t,this.tileInfo.spatialReference,this.tileInfo.applyGCS360Transform),!this.extent)return;this.extent.spatialReference=new a(this.extent.spatialReference.toJson())}else if(t.spatialReference.isWebMercator()||4326===t.spatialReference.wkid){var s=4326===t.spatialReference.wkid?180:this.halfWorldWidth,r=t.xmin;if(r<-s||r>s){for(var n=t.xmax,o=2*s;r<-s;)r+=o,n+=o;for(;r>s;)r-=o,n-=o;this.mapExtent=this.extent=t=new l(r,t.ymin,n,t.ymax,t.spatialReference)}}this.updateResolution(e,t);var h=this.extent,c=this.tileInfo,u=c.cols,d=c.rows;e=this.resolution;var m=h,p=i?this.layer.raster.rasterInfo.extent:this.layer.raster.projectedFullExtent;this.ooe&&(m=this._getIntersect(h,p));var y=m.xmin,g=m.xmax,_=Math.floor((y-c.origin.x)/e.x/u)-this.prefetchBufferSize,w=Math.floor((g-c.origin.x)/e.x/u)+this.prefetchBufferSize,B=null,v=this.getWrapTimes(t),T=this.fullBoundary&&this.fullBoundary.colRange;v&&this.halfWorldWidth&&(w===_&&(B=_),w+=v*T);var S=this.halfWorldWidth&&this.tiles.length&&(v!==this.wrapTimes||B!==this._circlularColId);S&&(this._wrapSwitchCount=this._wrapSwitchCount?this._wrapSwitchCount+1:1),this.wrapTimes=v,this._circlularColId=B;var E,k,R,C,I=Math.floor((c.origin.y-m.ymax)/e.y/d)-this.prefetchBufferSize,P=Math.floor((c.origin.y-m.ymin)/e.y/d)+this.prefetchBufferSize;this.tileBoundary={rowStart:I,rowEnd:P,colStart:_,colEnd:w};var M=(P-I+1)*(w-_+1)>this._MAX_TILES||!this.virtual&&this._resolution.x>8*this.tileInfo.lods[0].resolution;if((M||v>2||S)&&this.resetTiles(),!(M||v>2)){var W,D,b,z,G=this.tiles,L=!1;for(E=G.length-1;E>=0;E--)W=G[E].row,G[E].col,D=G[E].wrapCol,(W<I||W>P||D<_||D>w)&&(G[E].fetch&&!G[E].fetch.isCanceled()&&G[E].fetch.cancel(),G[E].update&&!G[E].update.isCanceled()&&G[E].update.cancel(),G.splice(E,1),L=!0);for(E=I;E<=P;E++)for(k=_;k<=w;k++)R=new l(c.origin.x+e.x*u*k,c.origin.y-e.y*d*(E+1),c.origin.x+e.x*u*(k+1),c.origin.y-e.y*d*E,h.spatialReference),b=v&&T?k>=0?k%T:T- -k%T:k,C=x(G,(function(t){return t.row===E&&t.col===b&&t.wrapCol===k})),z=p.xmax>=R.xmax?u:Math.round((p.xmax-R.xmin)/e.x),-1===C&&(G.push({row:E,col:b,wrapCol:k,cellsizeX:e.x,cellsizeY:e.y,width:u,height:d,actualWidth:z,extent:R,normalizedExtent:this._wrapExtent(R,b),pixelBlock:null,virtual:this.virtual,level:this.level,tileType:this.tileInfo.tileType||"Raster"}),L=!0);L&&this._sortTiles();var j=this.tileInfo.cols*(this.tileBoundary.colEnd-this.tileBoundary.colStart+1),F=this.tileInfo.rows*(this.tileBoundary.rowEnd-this.tileBoundary.rowStart+1);this.width=j,this.height=F,this.count=G.length;var q=Math.min.apply(null,G.map((function(t){return t.extent.xmin}))),V=Math.max.apply(null,G.map((function(t){return t.extent.xmax}))),N=Math.min.apply(null,G.map((function(t){return t.extent.ymin}))),H=Math.max.apply(null,G.map((function(t){return t.extent.ymax})));this.fullExtent=new l(q,N,V,H,h.spatialReference);var A=this.fullExtent;(this.layer.roaming||this.layer.useWebGL)&&(this.layer._hasTilingEffects?(this.xformSetting.offset=[0,0],this.xformSetting.scale=[1,1]):(L&&(this._tilesChanged=!0),this.ooe,this.xformSetting.offset=[(h.xmin-A.xmin)/(A.xmax-A.xmin),-(A.ymin-h.ymin)/(A.ymax-A.ymin)],this.xformSetting.scale=[(h.xmax-h.xmin)/(A.xmax-A.xmin),(h.ymax-h.ymin)/(A.ymax-A.ymin)]))}},fetchTiles:function(t){(this._tilesChanged||t)&&this._fetchTiles(t)},_fetchTiles:function(t){this._fetchCounter=0;var s=this.extent;this.fetchAllCompleted=t?new i:null,(this._tilesChanged||t&&this.layer._hasTilingEffects)&&this.tiles.forEach(e.hitch(this,(function(t){t.updateCompleted=!1})));var r={};!this.layer.roaming&&this.layer._hasTilingEffects&&t?(this.identifiers.forEach(function(t,e){r[t]={extent:this.extent,pixelBlock:new o({width:this.layer._map.width,height:this.layer._map.height,pixels:[],pixelType:"",mask:null,statistics:[]})}}.bind(this)),this.originalPixelData={extent:this.extent,src:r,isEmpty:!0}):this._tilesChanged&&(this.identifiers.forEach(function(t,e){r[t]={extent:this.fullExtent,pixelBlock:new o({width:128,height:128,pixels:[],pixelType:"",mask:null,statistics:[]})}}.bind(this)),this.originalPixelData={extent:this.fullExtent,src:r,isEmpty:!0}),this.tiles.forEach(e.hitch(this,(function(e){if(e.fetch)e.update||(e.update=this.updateTile(e));else{if(this._isTileOutSide(e,s))return void(e.updateCompleted=!0);this._requestTile(e)}this.layer.roaming&&this.layer.useWebGL?this._fillPixelData(e):e.src&&t&&(this.layer._hasTilingEffects||this.layer.useWebGL)&&(this._fillPixelData(e),this.layer._hasTilingEffects&&(e.updateCompleted=!0),e.processedPixelBlock=null,e.renderedPixelBlock=null)}))),0===this._fetchCounter&&(this._fetched=!0),this._tilesChanged=!1,t&&this._updateFetchStatus()},updateTile:function(t,r){var l=new i;return t.src||t.fetch?(s(t.src||t._fetched||t.fetch,e.hitch(this,(function(){var i=this.layer.tileMode&&this.layer._rasterHandler&&!(this.layer._hasTilingEffects||this.layer.useWebGL),s=this.layer._drawTile,a=this._validateRawPixelBlocks(t);if(this.layer._hasTilingEffects&&!this.layer.useWebGL&&(s=s&&(this._progressiveGlobal||r)),(r||!r&&a)&&(i||s||this.layer.roaming)){if(this.xformSetting.requireProjection&&this.layer.useWebGL&&(this.xformSetting.gridConfig=this.getXformGrid(),null==this.xformSetting.gridConfig))return l.cancel(),l.promise;this._processTile(t,r).then(e.hitch(this,(function(t){l.isCanceled()||this._renderTile(t,r).then(e.hitch(this,(function(t){this.hasNewData=!1,l.isCanceled()||l.resolve(t)})))})))}else r||a||(t.updateCompleted=!0),this.layer.useWebGL||this.layer._hasTilingEffects?l.resolve(this.originalPixelData):l.resolve()}))),l.promise):(l.resolve(t),l.promise)},setLayer:function(t){this.layer=t},fillupTiles:function(){this.tiles.forEach(e.hitch(this,(function(t){t.update&&t.updateCompleted&&!t.filled&&(t.updateCompleted=!1,this._fillPixelData(t),t.updateCompleted=!0)})))},_validateRawPixelBlocks:function(t){return t&&t.src&&!this.identifiers.some((function(e){return!(t.src[e].pixelBlock&&0!==t.src[e].pixelBlock.validPixelCount&&t.src[e].pixelBlock.pixels&&t.src[e].pixelBlock.pixels.length>0)}))},_wrapExtent:function(t,e){if(t){if(this.tileInfo.applyGCS360Transform){var i=this.normalizeCoordinate(t.xmin,180);return i<0&&(i+=360),new l({xmin:i,ymin:t.ymin,xmax:t.xmax-t.xmin+i,ymax:t.ymax,spatialReference:t.spatialReference})}var s;if(this.halfWorldWidth){s=new l(null!=e?{xmin:this.tileInfo.origin.x+this.tileInfo.cols*e*this.resolution.x,ymin:t.ymin,xmax:this.tileInfo.origin.x+this.tileInfo.cols*(e+1)*this.resolution.x,ymax:t.ymax,spatialReference:t.spatialReference}:{xmin:t.xmin,ymin:t.ymin,xmax:t.xmax,ymax:t.ymax,spatialReference:t.spatialReference});var r=this.normalizeCoordinate(s.xmin,this.halfWorldWidth),a=r-s.xmin;Math.abs(a)>.01&&(s.xmin=r,s.xmax+=a)}return s||t}},_getIntersect:function(t,e){var i=Math.max(t.xmin,e.xmin),s=Math.max(t.ymin,e.ymin),r=Math.min(t.xmax,e.xmax),a=Math.min(t.ymax,e.ymax);return new l(i,s,r,a,t.spatialReference)},_isTileOutSide:function(t,e){var i,s,r,l,a=!1;if(t.virtual){var n=t.normalizedExtent;(e=e||(this.xformSetting.requireProjection?this.layer.raster.rasterInfo.extent:this.layer.raster.projectedFullExtent))?(i=n.xmin-this.prefetchBufferSize*this.tileInfo.cols*this.resolution.x,s=n.ymin-this.prefetchBufferSize*this.tileInfo.rows*this.resolution.y,r=n.xmax+this.prefetchBufferSize*this.tileInfo.cols*this.resolution.x,l=n.ymax+this.prefetchBufferSize*this.tileInfo.rows*this.resolution.y,a=r<=e.xmin||i>=e.xmax||l<=e.ymin||s>=e.ymax):a=!1}else a=t.level<0||t.row<this.fullBoundary.rowStart||t.row>this.fullBoundary.rowEnd||t.col<this.fullBoundary.colStart||t.col>this.fullBoundary.colEnd;return a},_resolutionEqual:function(t,e){return t===e||!!(t&&e&&Math.abs(t-e)<Math.abs(e/1e4))},_requestTile:function(t){var l,a=this.identifiers;if(this._isTileOutSide(t)){var n=new i;t.updateCompleted=!0,n.resolve(null),l=n.promise}else l=this.layer.raster.rasterFunction?new r(this.layer.raster.getMemberRasters().map((function(e){return e.read(t)}))):new r([this.layer.raster.read(t)]);t.fetch=l,this._fetchCounter++,s(t.src||t._fetched||l,e.hitch(this,(function(e){if(e&&e.some((function(t){return t[0]}))){var i={};e.forEach((function(t,e){i[a[e]]=t[0]&&t[1]?{extent:t[1].extent,pixelBlock:t[1].pixelBlock,width:t[1].width,height:t[1].height}:null})),t.src=i}else t.src=null;this._fetchCounter--,0===this._fetchCounter&&(this._fetched=!0),t._fetched=!0,this._updateFetchStatus()})),e.hitch(this,(function(){this._fetchCounter--,0===this._fetchCounter&&(this._fetched=!0),t._fetched=!0,this._updateFetchStatus()}))),t.update=this.updateTile(t)},_updateFetchStatus:function(){this.layer._drawTile&&this.fetchAllCompleted&&!this.fetchAllCompleted.isResolved()&&(this.tiles.some((function(t){return!t._fetched}))||(this.tiles.forEach(e.hitch(this,(function(t){this._fillPixelData(t)}))),this.fetchAllCompleted.resolve()))},_fillPixelData:function(t,i){if(t&&!t.updateCompleted)if(Math.abs(t.cellsizeX-this.resolution.x)>t.cellsizeX/10)t.updateCompleted=!0;else if(!1!==this._validateRawPixelBlocks(t)){var s,r,l,a=t.extent;if(this.layer.roaming||this.layer.useWebGL&&!this.layer._hasTilingEffects?(s=this.fullExtent,r=this.tileInfo.cols*(this.tileBoundary.colEnd-this.tileBoundary.colStart+1),l=this.tileInfo.rows*(this.tileBoundary.rowEnd-this.tileBoundary.rowStart+1),i?this.originalPixelData.renderedPixelBlock||(this.originalPixelData.renderedPixelBlock=new o({width:r,height:l,pixels:[],pixelType:"",mask:null,statistics:[]})):this.identifiers.forEach(e.hitch(this,(function(t){this.originalPixelData.src[t].pixelBlock.width=r,this.originalPixelData.src[t].pixelBlock.height=l})))):(s=this.extent,r=this.layer._map.width,l=this.layer._map.height,i?this.originalPixelData.renderedPixelBlock||(this.originalPixelData.renderedPixelBlock=new o({width:r,height:l,pixels:[],pixelType:"",mask:null,statistics:[]})):this.identifiers.forEach(e.hitch(this,(function(t){this.originalPixelData.src[t].pixelBlock.width=r,this.originalPixelData.src[t].pixelBlock.height=l})))),s.xmax<=a.xmin||s.xmin>=a.xmax||s.ymax<=a.ymin||s.ymin>=a.ymax)return null;this.originalPixelData.isEmpty=!1;var n=!1;this.identifiers.forEach(e.hitch(this,(function(e){t.src&&(this._fillPixelBlock(t.src[e],this.originalPixelData.src[e],{extent:s,width:r,height:l,normalizedExtent:t.normalizedExtent},!1),n=!0)}))),t.filled=n,this.hasNewData=!0}else t.updateCompleted=!0},_fillPixelBlock:function(t,e,i,s){var r=t.extent,l=i.extent,a=i.width,n=i.height;if(t.pixelBlock&&t.pixelBlock.pixels&&t.pixelBlock.pixels[0]){var o,h,f=(r.xmax-r.xmin)/t.width,c=Math.max(r.xmin,l.xmin),x=Math.min(r.xmax,l.xmax),u=Math.max(r.ymin,l.ymin),d=Math.min(r.ymax,l.ymax),m=Math.round((c-r.xmin)/f),p=t.width-Math.round(Math.abs(r.xmax-x)/f),y=Math.round(Math.abs(r.ymax-d)/f),g=t.height-Math.round((u-r.ymin)/f),_=this.halfWorldWidth,w=Math.round((c-l.xmin)/f),B=i.normalizedExtent;if(!(this.wrapTimes&&_&&r.xmin<-_)){this.wrapTimes&&_&&(this.tileInfo.applyGCS360Transform?r.xmin>360&&(w-=this.fullBoundary.paddingLeft):r.xmin>_?(w-=this.fullBoundary.paddingLeft,o=this.normalizeCoordinate(r.xmin,_),h=this.normalizeCoordinate(r.xmax,_)):(o=r.xmin,h=r.xmax),this.tileInfo.applyGCS360Transform?B&&B.xmin<360&&B.xmax>360&&(p-=this.fullBoundary.paddingRight):B&&B.xmin<_&&B.xmax>_?p-=this.fullBoundary.paddingRight:o<_&&h>_&&(p-=this.fullBoundary.paddingRight));var v,T,S,E,k,R=Math.round(Math.abs(l.ymax-d)/f),C=t.pixelBlock.pixels.length,I=e.pixelBlock,P=t.width,M=I.mask||new Uint8Array(a*n),W=t.pixelBlock,D=W.mask,b=0;for(S=0;S<C;S++){for(E=W.pixels[S],k=I.pixels[S]||new E.constructor(a*n),v=y;v<g;v++)for(b=(R+v-y)*a+w,T=m;T<p;T++)k[b+T-m]=E[v*P+T];I.pixels[S]=k}if(D)for(v=y;v<g;v++)for(b=(R+v-y)*a+w,T=m;T<p;T++)M[b+T-m]=D[v*P+T];else for(v=y;v<g;v++)for(b=(R+v-y)*a+w,T=m;T<p;T++)M[b+T-m]=1;if(I.pixelType=I.pixelType||W.pixelType,I.mask=M,I.statistics&&I.statistics.length>0){if(W.statistics&&I.statistics)for(v=0;v<I.statistics.length;v++)I.statistics[v].minValue=Math.min(W.statistics[v].minValue,I.statistics[v].minValue),I.statistics[v].maxValue=Math.max(W.statistics[v].maxValue,I.statistics[v].maxValue)}else for(I.statistics=[],v=0;v<W.statistics.length;v++)I.statistics[v]={minValue:W.statistics[v].minValue,maxValue:W.statistics[v].maxValue}}}},_processTile:function(t,e){var s,r,l=new i,a=this.layer._hasTilingEffects,n=this.layer.useWebGL,o=a||n,h=this.layer.raster.rasterFunction&&t&&(a||n||!t.processedPixelBlock);if(e?s=t:(this._fillPixelData(t),s=o?this.originalPixelData:t),this.xformSetting.hasNewTexture=this.hasNewData,h)if(this.identifiers.forEach((function(t){0!==s.src[t].pixelBlock.pixels.length&&0!==s.src[t].pixelBlock.pixels[0].length||(r=!0)})),r)l.resolve({extent:s.extent,processedPixelBlock:s.src[this.identifiers[0]],pixelBlock:s.src[this.identifiers[0]]});else if(n)this.processedPixelData=this.layer.raster.rasterFunction.read(s),l.resolve(this.processedPixelData);else if(this.layer._rasterHandler)this.layer._rasterHandler.process({extent:s.extent,src:s.src}).then((function(e){a?(this.processedPixelData=e,l.resolve(this.processedPixelData)):(t.processedPixelBlock=e.pixelBlock,l.resolve(t))}));else{var f=this.layer.raster.rasterFunction.read(t);t.processedPixelBlock=f.pixelBlock,l.resolve(t)}else o?l.resolve(s.src[this.identifiers[0]]):(t.pixelBlock=s.src[this.identifiers[0]]&&s.src[this.identifiers[0]].pixelBlock,l.resolve(t));return l.promise},_renderTile:function(t){var e,s=new i,r=this.layer._hasTilingEffects,l=this.layer.useWebGL,a=Math.abs((t.extent.xmax-t.extent.xmin)/t.width-this.layer.getCurrentResolution().x)>this.resolution.x/10,n=this.layer.useWebGL&&(a||this._isTileOutSide(t,this.layer._map.extent));return this.xformSetting.hasNewTexture=this.hasNewData,this.layer._rasterRenderer&&t&&(t.texture||t.src||t.pixelBlock||t.processedPixelBlock)?(e=t,this.layer._rasterRenderer.interpolation=this.layer.interpolation,l&&!n?(this.layer.raster.rasterFunction&&this.layer.raster.rasterFunction.renderTexture||this.layer._rasterRenderer.draw(e),s.resolve(t)):this.layer._rasterHandler?this.layer._rasterHandler.render({extent:e.extent,pixelBlock:e.processedPixelBlock||e.pixelBlock}).then(function(e){r?(e.renderedPixelBlock=e.pixelBlock,s.resolve(e)):(t.renderedPixelBlock=e.pixelBlock,s.resolve(t))}.bind(this)):(t.renderedPixelBlock=this.layer._rasterRenderer.draw(t).pixelBlock,s.resolve(t))):(t.renderedPixelBlock=t.processedPixelBlock||t.pixelBlock,s.resolve(t)),s.promise},_sortTiles:function(){this.tiles.sort((function(t,e){return t.row<e.row||t.row==e.row&&t.col<e.col?-1:1}))}}),x=function(t,e){var i;for(i=0;i<t.length;i++)if(e(t[i]))return i;return-1};return c}));