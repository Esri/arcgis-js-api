// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/has","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","../../kernel","../../Evented","../../geometry/Point","../../geometry/Extent","../../geometry/mathUtils","../../support/expressionUtils","../../core/timerUtils","../support/attributeUtils","./geohashUtils","./statUtils"],(function(t,e,i,s,a,n,l,r,h,u,o,d,c,f){var _=e(n,{loaded:!1,started:!1,map:null,layer:null,lod:null,tolerance:null,clusterMode:null,clusterRadius:null,sortEnabled:!0,filterEnabled:!0,bufferEnabled:!0,updateEnabled:!0,clusters:null,clustersEnabled:!0,statisticInfos:null,defaults:{lod:1,tolerance:0,clusterMode:"auto",clusterRadius:80,sortEnabled:!0,filterEnabled:!0,bufferEnabled:!0,updateEnabled:!0},_eventHandles:null,_updateHandle:null,_indexHandle:null,_cellIndex:null,_globalIndex:null,_perfProfile:null,_indexUpdated:!1,_cellSizeScaleFactor:1.5,_extentScaleFactor:1.25,_maxGeohashLength:12,_minClusterRadius:15,_levelChange:!0,_clusterFieldPrefix:"cluster_",_mapLevelChange:!1,constructor:function(t){this._update=i.hitch(this,this._update),this._indexFeatures=i.hitch(this,this._indexFeatures),this._eventHandles=[],this._globalIndex={numFeatures:null,fullExtent:null,lodStats:null},this._perfProfile={lastIndex:{total:null,numFeatures:0},lastUpdate:{cells:null,clusters:null,total:null}},this.clusters=[],this.map=t.map,this.layer=t.layer,this.setLod(t.lod),this.setTolerance(t.tolerance),this.setClusterMode(t.clusterMode),this.setClusterRadius(t.clusterRadius),this.setSortEnabled(t.sortEnabled),this.setFilterEnabled(t.filterEnabled),this.setBufferEnabled(t.bufferEnabled),this.setUpdateEnabled(t.updateEnabled),this.setStatisticInfos(t.statisticInfos),this._load(),this.loaded?this._startup():this._eventHandles.push(this.on("load",i.hitch(this,this._startup)))},destroy:function(t){this._displayFeatures(!0,t),s.forEach(this._eventHandles,(function(t){t.remove()})),o.clearTimeout(this._updateHandle),o.clearTimeout(this._indexHandle),this.map=this.layer=this.clusters=null,this._eventHandles=this._updateHandle=this._indexHandle=null,this._cellIndex=this._globalIndex=null},setLod:function(t){var e=this.lod;this.lod=t||this.defaults.lod,e!==this.lod&&this.update()},setTolerance:function(t){var e=this.tolerance;this.tolerance=t||this.defaults.tolerance,e!==this.tolerance&&this.update()},setClusterMode:function(t){var e=this.clusterMode;this.clusterMode=t||this.defaults.clusterMode,this._evalClusterParams(),e!==this.clusterMode&&this.update()},setClusterRadius:function(t){var e=this.clusterRadius;this.clusterRadius=null!=t?t:this.defaults.clusterRadius,this._evalClusterParams(),e!==this.clusterRadius&&this.update()},setSortEnabled:function(t){var e=this.sortEnabled;this.sortEnabled=null!=t?!!t:this.defaults.sortEnabled,e!==this.sortEnabled&&this.update()},setFilterEnabled:function(t){var e=this.filterEnabled;this.filterEnabled=null!=t?!!t:this.defaults.filterEnabled,e!==this.filterEnabled&&this.update()},setBufferEnabled:function(t){var e=this.bufferEnabled;this.bufferEnabled=null!=t?!!t:this.defaults.bufferEnabled,e!==this.bufferEnabled&&this.update()},setUpdateEnabled:function(t){var e=this.updateEnabled;this.updateEnabled=null!=t?!!t:this.defaults.updateEnabled,this.updateEnabled&&e!==this.updateEnabled&&(this._mapLevelChange=!0,this.update())},setStatisticInfos:function(t){this.statisticInfos=t||[],this.loaded&&this._applyStatInfos(this.statisticInfos)},update:function(){this.loaded&&null==this._updateHandle&&(this._updateHandle=o.setTimeout(this._update,o.priority.HIGH))},isUpdateScheduled:function(){return null!=this._updateHandle},index:function(){this.loaded&&null==this._indexHandle&&(this._indexHandle=o.setTimeout(this._indexFeatures,o.priority.HIGH))},getCell:function(t){return this._cellIndex[t.length][t]},getCluster:function(t){var e;return s.some(this.clusters,(function(i){return s.indexOf(i.geohashes,t)>-1&&(e=i),!!e})),e},getCellsInCluster:function(t){var e=[];return s.forEach(t&&t.geohashes,(function(t){var i=this.getCell(t);i&&e.push(i)}),this),e},getFeaturesInCluster:function(t){var e=[],i=this.getCellsInCluster(t);return s.forEach(i,(function(t){Array.prototype.push.apply(e,t.features)})),e},toggleFeatureVisibility:function(t){this.index()},getCurrentLodStats:function(){var t=this._globalIndex.lodStats;return t&&t[this.lod]},getNumFeatures:function(){return this._globalIndex.numFeatures},getFullExtent:function(){var t=this._globalIndex.fullExtent;return t&&t.xmin!==1/0?new r(t):null},_load:function(){this._displayFeatures(!1),this._checkLoadStatus(),this.map.loaded||this._eventHandles.push(this.map.on("load",i.hitch(this,this._checkLoadStatus))),this.layer.loaded||this._eventHandles.push(this.layer.on("load",i.hitch(this,this._checkLoadStatus)))},_checkLoadStatus:function(){if(this.map.loaded&&this.layer.loaded){var t;if("esriGeometryPoint"!==this.layer.geometryType)t=new Error("GeohashAggregation is supported only for points");else{var e=this.map.spatialReference;e.isWebMercator()||4326===e.wkid||(t=new Error("GeohashAggregation is supported only when map spatial reference is WGS84 or WebMercator"))}t?(this.loadError=t,this.emit("load-error",{error:t})):(this.loaded=!0,this.emit("load"))}},_startup:function(){this._evalUpdateStatus(),this.index(),this._processExtentChange(),this._eventHandles.push(this.layer.on("update-end",i.hitch(this,this.index)),this.layer.on("edits-complete",i.hitch(this,this.index)),this.layer.on("graphics-clear",i.hitch(this,this.index)),this.layer.on("suspend",i.hitch(this,this._evalUpdateStatus)),this.layer.on("resume",i.hitch(this,this._evalUpdateStatus)),this.map.on("extent-change",i.hitch(this,this._processExtentChange)))},_evalUpdateStatus:function(){this.setUpdateEnabled(!this.layer.suspended)},_processExtentChange:function(t){this._mapLevelChange=!(!t||!t.levelChange),this._evalClusterParams(),this.update()},_update:function(){if(this._updateHandle=null,this.updateEnabled){if(this.emit("update-start"),this.clustersEnabled){var t=this.map.geographicExtent;if(t){var e=this._getIntersectingCells(t),i=this._getClusters(e.cells,t);this.clusters=i.clusters,this._applyStatInfosToClusters();var s=e.profile,a=i.profile,n=s.total+a.total;s.total=this._getElapsedTime(s.total),a.total=this._getElapsedTime(a.total);var l=this._perfProfile.lastUpdate={};l.cells=s,l.clusters=a,l.total=this._getElapsedTime(n)}}else this.clusters=[],this._perfProfile.lastUpdate=null;var r=this._indexUpdated;this._indexUpdated=!1;var h=this._mapLevelChange;this._mapLevelChange=!1,this.emit("update-end",{levelChange:this._levelChange,mapLevelChange:h,indexChange:r})}},_displayFeatures:function(t,e){var i=this.layer,s=!t;i.suspendGraphics(s),!1!==e&&(s?i.clearNodes():i.redraw())},_indexFeatures:function(){this._indexHandle=null;var t=this._getTime();this._initializeIndexing();var e=0,i=this._globalIndex.fullExtent;s.forEach(this.layer.graphics,(function(t){if(t.visible){var s,a=t.geometry,n=this._getLngLat(a);n&&void 0===(s=a.getCacheValue("_geohash"))&&(s=c.pointToGeohash(n),a.setCacheValue("_geohash",s||null)),s&&(this._addGeohashToIndex(s,t,n),e++,this._updateExtent(i,n))}}),this),this._applyStatInfosToIndex(),this._globalIndex.numFeatures=e;for(var a=this._globalIndex.lodStats,n=1;n<=this._maxGeohashLength;n++)a[n]=this._getLODStats(n,e);this._perfProfile.lastIndex.total=this._getElapsedTime(t,this._getTime()),this._perfProfile.lastIndex.numFeatures=e,this._indexUpdated=!0,this.emit("index-complete"),this.started||(this.started=!0,this.emit("start")),this.update()},_initializeIndexing:function(){this._globalIndex={numFeatures:0,fullExtent:{xmin:1/0,ymin:1/0,xmax:-1/0,ymax:-1/0},lodStats:{}};for(var t=this._cellIndex=[],e=1;e<=this._maxGeohashLength;e++)t[e]={}},_getLngLat:function(t){if(t){var e=t.getLongitude(),i=t.getLatitude();t=null!=e&&null!=i?{x:e,y:i}:null}return t},_addGeohashToIndex:function(t,e,i){for(var s=this._cellIndex,a="",n=0;n<this._maxGeohashLength;n++){var l=s[(a+=t[n]).length],r=l[a];r||(r=l[a]={count:0,centroid:{x:null,y:null},extent:{xmin:1/0,ymin:1/0,xmax:-1/0,ymax:-1/0},features:[],geohash:a,statistics:null}),this._updateItem(r,1,i,!0),r.features.push(e)}},_getLODStats:function(t,e){var i=this._cellIndex[t],s=0,a=1/0,n=-1/0,l=null;for(var r in i){var h=i[r];s++,h.count<a&&(a=h.count),h.count>n&&(n=h.count)}return s>0&&(l=e/s,l=Number(l.toFixed(2))),{lod:t,count:s,min:a===1/0?null:a,max:n===-1/0?null:n,avg:l}},_evalClusterParams:function(){if(this.loaded&&"auto"===this.clusterMode){var t=this._getClusterParams(this.map.getResolutionInMeters(),this.clusterRadius,this._minClusterRadius);this._levelChange=this.lod!==t.lod,this.lod=t.lod,this.tolerance=t.tolerance}},_getClusterParams:function(t,e,i){e<i&&(e=i);var s,a=Math.ceil(t*e),n=this._getClosestLODRange(a).max;do{var l=this._getCellSize(n);(s=a>=this._cellSizeScaleFactor*l||1===l)||(n+=1)}while(!s);var r=a/this._getCellSize(n);return{lod:n,tolerance:a,multiplier:Number(r.toFixed(2))}},_getClosestLODRange:function(t){for(var e,i,s=this._maxGeohashLength;s>=1;s--){if(this._getCellSize(s)>=t){e=s;break}}return null==e&&(e=1),(i=e+1)>this._maxGeohashLength&&(i=this._maxGeohashLength),{min:e,max:i}},_getCellSize:function(t){var e=c.getCellSizeInMeters(t);return Math.ceil(Math.min(e.width,e.height))},_sorter:function(t,e){var i=t.centroid,s=e.centroid;return t.count>e.count?-1:t.count<e.count?1:i.x>s.x?-1:i.x<s.x?1:0},_getIntersectingCells:function(t){var e=this._getTime();this.bufferEnabled&&(t=t.expand(this._extentScaleFactor));var i=c.getIntersecting(t,this.lod,this.bufferEnabled?this.tolerance:0),a=this._getTime(),n=[],l=this.tolerance,r=this.sortEnabled;s.forEach(i,(function(t){var e=this.getCell(t);e&&n.push(e)}),this),l&&r&&n.sort(this._sorter);var h=this._getTime();return{cells:n,profile:{findCells:this._getElapsedTime(e,a),scanAndSortCells:this._getElapsedTime(a,h),total:h-e}}},_getClusters:function(t,e){var i=this._getTime(),a=[],n={},l={findCells:0};s.forEach(t,(function(t,e){var i=this._createCluster(t,n,l);i&&a.push(i)}),this),this._markIntersecting(a,e),this.filterEnabled&&(a=this._getIntersectingClusters(a));var r=this._getTime();return{clusters:a,profile:{findCellsInCluster:this._getElapsedTime(l.findCells),total:r-i}}},_markIntersecting:function(t,e){var i=e.normalize();s.forEach(t,(function(t){var e=t.centroid.x,a=t.centroid.y;t.isIntersecting=s.some(i,(function(t){return e>=t.xmin&&e<=t.xmax&&a>=t.ymin&&a<=t.ymax}))}))},_getIntersectingClusters:function(t){return s.filter(t,(function(t){return t.isIntersecting}))},_createCluster:function(t,e,i){if(!e[t.geohash]){var a=[{cell:t,distance:0}];if(this.tolerance){var n=this._getTime(),l=c.getNeighborsWithinDistance(t.centroid,this.lod,this.tolerance);i.findCells+=this._getTime()-n,s.forEach(l,(function(e){if(e!==t.geohash){var i=this.getCell(e);if(i){var s=this._calculateDistance(t.centroid,i.centroid);s<=this.tolerance&&a.push({cell:i,distance:s})}}}),this)}return this._mergeCells(a,e)}},_calculateDistance:function(t,e){return h.getLength(c.geographicToWebMercator(t),c.geographicToWebMercator(e))},_mergeCells:function(t,e){var i=this._initializeCluster({},t[0].cell.geohash);return s.forEach(t,(function(t){var s=t.cell,a=s.geohash,n=t.distance,l=e[a];if(l){if(!(n<l.distance))return;this._removeCellFromCluster(a,e)}e[a]={cluster:i,distance:n},this._updateItem(i,s.count,s.centroid),i.geohashes.push(a)}),this),i},_removeCellFromCluster:function(t,e){var i=e[t].cluster;delete e[t];var a=s.indexOf(i.geohashes,t);a>-1&&i.geohashes.splice(a,1),this._reevaluateCluster(i)},_reevaluateCluster:function(t){var e=t.geohashes;t=this._initializeCluster(t,t.primary),s.forEach(e,(function(e){var i=this.getCell(e);i&&(this._updateItem(t,i.count,i.centroid),t.geohashes.push(e))}),this)},_initializeCluster:function(t,e){return t.count=0,t.centroid=new l(null,null),t.geohashes=[],t.primary=e,t.statistics=null,t},_applyStatInfos:function(t){t=this._getValidStatInfos(t),this._applyStatInfosToIndex(t),this._applyStatInfosToClusters(t)},_getValidStatInfos:function(t){var e=[];return s.forEach(t,(function(t){var i=t.attributeInfo,s=t.statisticType,a="angle"===i.attributeType;if(f.isSupportedStatisticType(s)&&(!a||"avg"===s)){var n="type"===s,l="arithmetic"===i.rotationType;e.push({attributeCache:d.createAttributeCache(i,n),identifier:f.getStatisticId(i,s),statFunctions:f.getStatisticFunctions(s),isAngular:a,isDate:"date"===i.attributeType,isArithmetic:l})}})),e},_applyStatInfosToIndex:function(t){t=t||this._getValidStatInfos(this.statisticInfos);var e=this._cellIndex;if(e)for(var i=1;i<=this._maxGeohashLength;i++){var s=e[i];for(var a in s)this._applyStatInfosToCell(s[a],t)}},_applyStatInfosToCell:function(t,e){var i=this._initializeStats(t,e);s.forEach(t.features,(function(t){this._calcFeatureStats(t,e,i)}),this),this._summarizeStats(t,i,e)},_calcFeatureStats:function(t,e,i){t.attributes&&s.forEach(e,(function(e){var s=i[e.identifier],a=e.attributeCache,n=a?t._getDataValue(a.attributeInfo,a,u):null;e.statFunctions.updateCellStat(s,n,e)}))},_applyStatInfosToClusters:function(t){t=t||this._getValidStatInfos(this.statisticInfos);var e=this._clusterFieldPrefix;s.forEach(this.clusters,(function(i){var a=this._initializeStats(i,t);s.forEach(this.getCellsInCluster(i),(function(e){this._calcCellStats(e,t,a)}),this),this._summarizeStats(i,a,t,e),i.attributes[e+"id"]=i.primary}),this)},_calcCellStats:function(t,e,i){var a=t.statistics;s.forEach(e,(function(t){var e=t.identifier,s=a[e],n=i[e];t.statFunctions.updateClusterStat(n,s,t)}))},_initializeStats:function(t,e){var i=t.statistics={};return s.forEach(e,(function(t){i[t.identifier]=t.statFunctions.initialize(t)})),i},_summarizeStats:function(t,e,i,a){var n=t.attributes={};n[(a=a||"")+"count"]=t.count,s.forEach(i,(function(t){var i=this._getStatFieldName(t,a),s=e[t.identifier];n[i]=t.statFunctions.summarize(s,t)}),this)},_getStatFieldName:function(t,e){return(e||"")+t.identifier},_updateItem:function(t,e,i,s){var a=i.x,n=i.y,l=t.centroid,r=t.count;l.x=(r*l.x+e*a)/(r+e),l.y=(r*l.y+e*n)/(r+e),t.count+=e,s&&this._updateExtent(t.extent,i)},_updateExtent:function(t,e){var i=e.x,s=e.y;i<t.xmin&&(t.xmin=i),i>t.xmax&&(t.xmax=i),s<t.ymin&&(t.ymin=s),s>t.ymax&&(t.ymax=s)},_getTime:function(){return window.performance?window.performance.now():(new Date).getTime()},_getElapsedTime:function(t,e){var i,s,a;return null!=(s=null!=t&&null!=e?e-t:t)&&(a="millisecond",s>=1e3&&(a="second",(s/=1e3)>=60&&(s/=60,a="minute")),i={value:Number(s.toFixed(2)),unit:a}),i}});return t("extend-esri")&&i.setObject("layers.clustering.GeohashAggregation",_,a),_}));