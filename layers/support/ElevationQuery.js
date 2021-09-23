/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/asyncUtils","../../core/Error","../../core/maybe","../../core/promiseUtils","../../core/unitUtils","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polyline","../../geometry/projection","../../geometry/support/aaBoundingRect","./ElevationSampler","./ElevationTile"],(function(e,t,n,i,o,l,r,s,a,c,u,f,p,h){"use strict";let y=function(){function e(){}var s=e.prototype;return s.queryAll=function(){var e=t._asyncToGenerator((function*(e,t,n){if(!(e=n&&n.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new i("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const o=d.fromGeometry(t);let l=!1;n&&n.returnSampleInfo||(l=!0);const r={...g,...n,returnSampleInfo:!0},s=yield this.query(e[e.length-1],o,r),a=yield this._queryAllContinue(e,s,r);return a.geometry=a.geometry.export(),l&&delete a.sampleInfo,a}));function n(t,n,i){return e.apply(this,arguments)}return n}(),s.query=function(){var e=t._asyncToGenerator((function*(e,t,n){if(!e)throw new i("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof d)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new i("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const o={...g,...n},l=new T(e,t.spatialReference,o),r=o.signal;return yield e.load({signal:r}),yield this._createGeometryDescriptor(l,t,r),yield this._selectTiles(l,r),yield this._populateElevationTiles(l,r),this._sampleGeometryWithElevation(l),this._createQueryResult(l,r)}));function n(t,n,i){return e.apply(this,arguments)}return n}(),s.createSampler=function(){var e=t._asyncToGenerator((function*(e,t,n){if(!e)throw new i("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new i("elevation-query:invalid-extent","Invalid or undefined extent");const o={...g,...n};return this._createSampler(e,t,o)}));function n(t,n,i){return e.apply(this,arguments)}return n}(),s.createSamplerAll=function(){var e=t._asyncToGenerator((function*(e,t,n){if(!(e=n&&n.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new i("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new i("elevation-query:invalid-extent","Invalid or undefined extent");const o={...g,...n,returnSampleInfo:!0},l=yield this._createSampler(e[e.length-1],t,o);return this._createSamplerAllContinue(e,t,l,o)}));function n(t,n,i){return e.apply(this,arguments)}return n}(),s._createSampler=function(){var e=t._asyncToGenerator((function*(e,t,n,i){const o=n.signal;yield e.load({signal:o});const l=t.spatialReference,r=e.tileInfo.spatialReference;l.equals(r)||(yield u.initializeProjection([{source:l,dest:r}],{signal:o}),t=u.project(t,r));const s=new v(e,t,n,i);return yield this._selectTiles(s,o),yield this._populateElevationTiles(s,o),new p.MultiTileElevationSampler(s.elevationTiles,s.layer.tileInfo,s.options.noDataValue)}));function n(t,n,i,o){return e.apply(this,arguments)}return n}(),s._createSamplerAllContinue=function(){var e=t._asyncToGenerator((function*(e,t,n,i){if(e.pop(),!e.length)return n;const o=n.samplers.map((e=>f.fromExtent(e.extent))),l=yield this._createSampler(e[e.length-1],t,i,o);if(0===l.samplers.length)return n;const r=n.samplers.concat(l.samplers),s=new p.MultiTileElevationSampler(r,i.noDataValue);return this._createSamplerAllContinue(e,t,s,i)}));function n(t,n,i,o){return e.apply(this,arguments)}return n}(),s._queryAllContinue=function(){var e=t._asyncToGenerator((function*(e,t,n){const i=e.pop(),o=t.geometry.coordinates,l=[],r=[];for(let c=0;c<o.length;c++){const n=t.sampleInfo[c];n.demResolution>=0?n.source||(n.source=i):e.length&&(l.push(o[c]),r.push(c))}if(!e.length||0===l.length)return t;const s=t.geometry.clone(l),a=yield this.query(e[e.length-1],s,n);return r.forEach(((e,n)=>{o[e].z=a.geometry.coordinates[n].z,t.sampleInfo[e].demResolution=a.sampleInfo[n].demResolution})),this._queryAllContinue(e,t,n)}));function n(t,n,i){return e.apply(this,arguments)}return n}(),s._createQueryResult=function(){var e=t._asyncToGenerator((function*(e,t){const n={geometry:(yield e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),n}));function n(t,n){return e.apply(this,arguments)}return n}(),s._createGeometryDescriptor=function(){var e=t._asyncToGenerator((function*(e,t,n){let o;const l=e.layer.tileInfo.spatialReference;if(t instanceof d?o=yield t.project(l,n):(yield u.initializeProjection([{source:t.spatialReference,dest:l}],{signal:n}),o=u.project(t,l)),!o)throw new i("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=d.fromGeometry(o)}));function n(t,n,i){return e.apply(this,arguments)}return n}(),s._selectTiles=function(){var e=t._asyncToGenerator((function*(e,t){const n=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof n)this._selectTilesClosestResolution(e);else if("finest-contiguous"===n)yield this._selectTilesFinestContiguous(e,t);else{if("auto"!==n)throw new i("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${n}', expected a number, "finest-contiguous" or "auto"`);yield this._selectTilesAuto(e,t)}}));function n(t,n){return e.apply(this,arguments)}return n}(),s._preselectOutsideLayerExtent=function(e){const t=new h.ElevationTile(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const n=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const i=e.x,o=e.y;(i<n.xmin||i>n.xmax||o<n.ymin||o>n.ymax)&&(e.elevationTile=t)}))},s._selectTilesClosestResolution=function(e){const t=e.layer.tileInfo,n=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(n)},s._findNearestDemResolutionLODIndex=function(e,t){const n=t/r.getMetersPerUnitForSR(e.spatialReference);let i=e.lods[0],o=0;for(let l=1;l<e.lods.length;l++){const t=e.lods[l];Math.abs(t.resolution-n)<Math.abs(i.resolution-n)&&(i=t,o=l)}return o},s._selectTilesFinestContiguous=function(){var e=t._asyncToGenerator((function*(e,t){const n=x(e.layer.tileInfo,e.options.minDemResolution);yield this._selectTilesFinestContiguousAt(e,n,t)}));function n(t,n){return e.apply(this,arguments)}return n}(),s._selectTilesFinestContiguousAt=function(){var e=t._asyncToGenerator((function*(e,t,n){const o=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const r=o.tilemapCache,s=e.getTilesToFetch();try{if(r)yield l.whenOrAbort(Promise.all(s.map((e=>r.fetchAvailability(e.level,e.row,e.col,{signal:n})))),n);else if(yield this._populateElevationTiles(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new i("elevation-query:has-unavailable-tiles")}catch(a){l.throwIfAbortError(a),yield this._selectTilesFinestContiguousAt(e,t-1,n)}}));function n(t,n,i){return e.apply(this,arguments)}return n}(),s._populateElevationTiles=function(){var e=t._asyncToGenerator((function*(e,n){const i=e.getTilesToFetch(),r={},s=e.options.cache,a=e.options.noDataValue,c=i.map(function(){var i=t._asyncToGenerator((function*(t){const i=`${e.layer.uid}:${t.id}:${a}`,l=o.isSome(s)?s.get(i):null,c=o.isSome(l)?l:yield e.layer.fetchTile(t.level,t.row,t.col,{noDataValue:a,signal:n});o.isSome(s)&&s.put(i,c),r[t.id]=new h.ElevationTile(t,c)}));return function(e){return i.apply(this,arguments)}}());yield l.whenOrAbort(l.eachAlways(c),n),e.populateElevationTiles(r)}));function n(t,n){return e.apply(this,arguments)}return n}(),s._selectTilesAuto=function(){var e=t._asyncToGenerator((function*(e,i){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const o=e.layer.tilemapCache;if(!o)return this._selectTilesAutoPrefetchUpsample(e,i);const r=e.getTilesToFetch(),s={},a=r.map(function(){var e=t._asyncToGenerator((function*(e){const t={id:null,level:0,row:0,col:0,extent:f.create()},r=yield n.result(o.fetchAvailabilityUpsample(e.level,e.row,e.col,t,{signal:i}));!1===r.ok?l.throwIfAbortError(r.error):s[e.id]=t}));return function(t){return e.apply(this,arguments)}}());yield l.whenOrAbort(Promise.all(a),i),e.remapTiles(s)}));function i(t,n){return e.apply(this,arguments)}return i}(),s._reduceTilesForMaximumRequests=function(e){const t=e.layer.tileInfo;let n=0;const i={},o=e=>{e.id in i?i[e.id]++:(i[e.id]=1,n++)},l=e=>{const t=i[e.id];1===t?(delete i[e.id],n--):i[e.id]=t-1};e.forEachTileToFetch(o,l);let r=!0;for(;r&&(r=!1,e.forEachTileToFetch((i=>{n<=e.options.maximumAutoTileRequests||(l(i),t.upsampleTile(i)&&(r=!0),o(i))}),l),r););},s._selectTilesAutoFinest=function(e){const t=x(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)},s._selectTilesAutoPrefetchUpsample=function(){var e=t._asyncToGenerator((function*(e,t){const n=e.layer.tileInfo;yield this._populateElevationTiles(e,t);let i=!1;e.forEachTileToFetch(((e,t)=>{n.upsampleTile(e)?i=!0:t()})),i&&(yield this._selectTilesAutoPrefetchUpsample(e,t))}));function n(t,n){return e.apply(this,arguments)}return n}(),s._sampleGeometryWithElevation=function(e){e.geometry.coordinates.forEach((t=>{const n=t.elevationTile;let i=e.options.noDataValue;if(n){const e=n.sample(t.x,t.y);o.isSome(e)?i=e:t.elevationTile=null}t.z=i}))},s._extractSampleInfo=function(e){const t=e.layer.tileInfo,n=r.getMetersPerUnitForSR(t.spatialReference);return e.geometry.coordinates.map((i=>{let o=-1;if(i.elevationTile&&i.elevationTile!==e.outsideExtentTile){o=t.lodAt(i.elevationTile.tile.level).resolution*n}return{demResolution:o}}))},e}(),d=function(){function e(){}var n=e.prototype;return n.export=function(){return this._exporter(this.coordinates,this.spatialReference)},n.clone=function(t){const n=new e;return n.geometry=this.geometry,n.spatialReference=this.spatialReference,n.coordinates=t||this.coordinates.map((e=>this._cloneCoordinate(e))),n._exporter=this._exporter,n},n.project=function(){var e=t._asyncToGenerator((function*(e,t){if(this.spatialReference.equals(e))return this.clone();yield u.initializeProjection([{source:this.spatialReference,dest:e}],{signal:t});const n=new s({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),i=u.project(n,e);if(!i)return null;const o=this.coordinates.map(((e,t)=>{const n=this._cloneCoordinate(e),o=i.points[t];return n.x=o[0],n.y=o[1],n})),l=this.clone(o);return l.spatialReference=e,l}));function n(t,n){return e.apply(this,arguments)}return n}(),n._cloneCoordinate=function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}},e.fromGeometry=function(t){const n=new e;if(n.geometry=t,n.spatialReference=t.spatialReference,t instanceof e)n.coordinates=t.coordinates.map((e=>n._cloneCoordinate(e))),n._exporter=(e,n)=>{const i=t.clone(e);return i.spatialReference=n,i};else switch(t.type){case"point":{const e=t,{hasZ:i,hasM:o}=e;n.coordinates=i&&o?[{x:e.x,y:e.y,z:e.z,m:e.m}]:i?[{x:e.x,y:e.y,z:e.z}]:o?[{x:e.x,y:e.y,m:e.m}]:[{x:e.x,y:e.y}],n._exporter=(e,n)=>t.hasM?new a(e[0].x,e[0].y,e[0].z,e[0].m,n):new a(e[0].x,e[0].y,e[0].z,n);break}case"multipoint":{const e=t,{hasZ:i,hasM:o}=e;n.coordinates=i&&o?e.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):i?e.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):o?e.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):e.points.map((e=>({x:e[0],y:e[1]}))),n._exporter=(e,n)=>t.hasM?new s({points:e.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:n}):new s(e.map((e=>[e.x,e.y,e.z])),n);break}case"polyline":{const e=t,i=[],o=[],{hasZ:l,hasM:r}=t;let s=0;for(const t of e.paths)if(o.push([s,s+t.length]),s+=t.length,l&&r)for(const e of t)i.push({x:e[0],y:e[1],z:e[2],m:e[3]});else if(l)for(const e of t)i.push({x:e[0],y:e[1],z:e[2]});else if(r)for(const e of t)i.push({x:e[0],y:e[1],m:e[2]});else for(const e of t)i.push({x:e[0],y:e[1]});n.coordinates=i,n._exporter=(e,n)=>{const i=t.hasM?e.map((e=>[e.x,e.y,e.z,e.m])):e.map((e=>[e.x,e.y,e.z])),l=o.map((e=>i.slice(e[0],e[1])));return new c({paths:l,hasM:t.hasM,hasZ:!0,spatialReference:n})};break}}return n},e}(),m=function(e,t){this.layer=e,this.options=t},T=function(e){function n(t,n,i){var o;return(o=e.call(this,t,i)||this).outSpatialReference=n,o.type="geometry",o}t._inheritsLoose(n,e);var i=n.prototype;return i.selectTilesAtLOD=function(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,n=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(n,e.x,e.y)}))}},i.allElevationTilesFetched=function(){return!this.geometry.coordinates.some((e=>!e.elevationTile))},i.clearElevationTiles=function(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)},i.populateElevationTiles=function(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])},i.remapTiles=function(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]},i.getTilesToFetch=function(){const e={},t=[];for(const n of this.geometry.coordinates){const i=n.tile;n.elevationTile||!n.tile||e[i.id]||(e[i.id]=i,t.push(i))}return t},i.forEachTileToFetch=function(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))},n}(m),v=function(e){function n(t,n,i,o){var l;return(l=e.call(this,t,i)||this).type="extent",l.elevationTiles=[],l.candidateTiles=[],l.fetchedCandidates=new Set,l.extent=n.intersection(t.fullExtent),l.maskExtents=o,l}t._inheritsLoose(n,e);var i=n.prototype;return i.selectTilesAtLOD=function(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)},i._maximumLodForRequests=function(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const n=this.extent;if(o.isNone(n))return-1;for(let i=t.lods.length-1;i>=0;i--){const o=t.lods[i],l=o.resolution*t.size[0],r=o.resolution*t.size[1];if(Math.ceil(n.width/l)*Math.ceil(n.height/r)<=e)return i}return-1},i.allElevationTilesFetched=function(){return this.candidateTiles.length===this.elevationTiles.length},i.clearElevationTiles=function(){this.elevationTiles.length=0,this.fetchedCandidates.clear()},i.populateElevationTiles=function(e){for(const t of this.candidateTiles){const n=e[t.id];n&&(this.fetchedCandidates.add(t),this.elevationTiles.push(n))}},i.remapTiles=function(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))},i.getTilesToFetch=function(){return this.candidateTiles},i.forEachTileToFetch=function(e,t){const n=this.candidateTiles;this.candidateTiles=[],n.forEach((n=>{if(this.fetchedCandidates.has(n))return void(t&&t(n));let i=!1;e(n,(()=>i=!0)),i?t&&t(n):this.candidateTiles.push(n)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)},i._uniqueNonOverlappingTiles=function(e,t){const n={},i=[];for(const l of e)n[l.id]?t&&t(l):(n[l.id]=l,i.push(l));const o=i.sort(((e,t)=>e.level-t.level));return o.filter(((e,n)=>{for(let i=0;i<n;i++)if(f.contains(o[i].extent,e.extent))return t&&t(e),!1;return!0}))},i._selectCandidateTilesCoveringExtentAt=function(e){this.candidateTiles.length=0;const t=this.extent;if(o.isNone(t))return;const n=this.layer.tileInfo,i=n.lods[e],l=n.tileAt(i.level,t.xmin,t.ymin),r=i.resolution*n.size[0],s=i.resolution*n.size[1],a=Math.ceil((t.xmax-l.extent[0])/r),c=Math.ceil((t.ymax-l.extent[1])/s);for(let o=0;o<c;o++)for(let e=0;e<a;e++){const t={id:null,level:l.level,row:l.row-o,col:l.col+e};n.updateTileInfo(t),this._tileIsMasked(t)||this.candidateTiles.push(t)}},i._tileIsMasked=function(e){return!!this.maskExtents&&this.maskExtents.some((t=>f.contains(t,e.extent)))},n}(m);function x(e,t){let n=e.lods.length-1;if(t>0){const i=e.lods.findIndex((e=>e.resolution<t));0===i?n=0:i>0&&(n=i-1)}return n}const g={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};e.ElevationQuery=y,e.GeometryDescriptor=d,e.default=y,e.getFinestLodIndex=x,Object.defineProperty(e,"__esModule",{value:!0})}));
