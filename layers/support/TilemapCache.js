/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../request","../../core/Accessor","../../core/Error","../../core/Handles","../../core/Logger","../../core/LRUCache","../../core/PooledArray","../../core/promiseUtils","../../core/scheduling","../../core/urlUtils","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/decorators/cast","../../core/accessorSupport/decorators/subclass","./Tilemap"],(function(e,t,i,l,a,r,s,n,o,c,h,p,u,f,m,v,_,y,d){"use strict";var b;const T=n.getLogger("esri.layers.support.TilemapCache");e.TilemapCache=b=function(e){function i(t){var i;return(i=e.call(this,t)||this)._handles=new s,i._pendingTilemapRequests={},i._availableLevels={},i.levels=5,i.cacheByteSize=2097152,i.request=l,i._prefetchingEnabled=!0,i}t._inheritsLoose(i,e);var a=i.prototype;return a.initialize=function(){this._tilemapCache=new o(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(()=>this._initializeTilemapDefinition())),f.init(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()},a.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},a.castLevels=function(e){return e<=2?(T.error("Minimum levels for Tilemap is 3, but got ",e),3):e},a.fetchTilemap=function(e,t,i,l){if(!this._availableLevels[e])return Promise.reject(new r("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const a=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,a);if(s)return Promise.resolve(s);const n=l&&l.signal;return l={...l,signal:null},new Promise(((e,t)=>{h.onAbort(n,(()=>t(h.createAbortError())));const i=d.tilemapDefinitionId(a);let r=this._pendingTilemapRequests[i];if(!r){r=d.Tilemap.fromDefinition(a,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=r,r.then(e,e)}r.then(e,t)}))},a.getAvailability=function(e,t,i){if(!this._availableLevels[e])return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"},a.getAvailabilityUpsample=function(e,t,i,l){l.level=e,l.row=t,l.col=i;const a=this.layer.tileInfo;for(a.updateTileInfo(l);;){const e=this.getAvailability(l.level,l.row,l.col);if("unavailable"!==e)return e;if(!a.upsampleTile(l))return"unavailable"}},a.fetchAvailability=function(e,t,i,l){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof d.Tilemap){const a=l.getAvailability(t,i);return"unavailable"===a?Promise.reject(new r("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):a}if(h.isAbortError(l))throw l;return"unknown"})):Promise.reject(new r("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))},a.fetchAvailabilityUpsample=function(e,t,i,l,a){l.level=e,l.row=t,l.col=i;const r=this.layer.tileInfo;r.updateTileInfo(l);const s=this.fetchAvailability(e,t,i,a).catch((e=>{if(h.isAbortError(e))throw e;if(r.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,a,s),s},a._fetchAvailabilityUpsamplePrefetch=function(){var e=t._asyncToGenerator((function*(e,t,i,l,a,r){if(!this._prefetchingEnabled)return;const s=`prefetch-${e}`;if(this._handles.has(s))return;const n=h.createAbortController();r.then((()=>n.abort()),(()=>n.abort()));let o=!1;const c={remove(){o||(o=!0,n.abort())}};if(this._handles.add(c,s),yield p.waitTicks(10,n.signal).catch((()=>{})),o||(o=!0,this._handles.remove(s)),h.isAborted(n))return;const u={id:e,level:t,row:i,col:l},f={...a,signal:n.signal},m=this.layer.tileInfo;for(let h=0;b._prefetches.length<b._maxPrefetch&&m.upsampleTile(u);++h){const e=this.fetchAvailability(u.level,u.row,u.col,f);b._prefetches.push(e);const t=()=>{b._prefetches.removeUnordered(e)};e.then(t,t)}}));function i(t,i,l,a,r,s){return e.apply(this,arguments)}return i}(),a._initializeTilemapDefinition=function(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?u.objectToQuery(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}},a._tilemapFromCache=function(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const a=d.tilemapDefinitionId(l);return this._tilemapCache.get(a)},a._initializeAvailableLevels=function(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))},t._createClass(i,[{key:"size",get:function(){return 1<<this.levels}},{key:"test",get:function(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}}]),i}(a),e.TilemapCache._maxPrefetch=4,e.TilemapCache._prefetches=new c({initialSize:b._maxPrefetch}),i.__decorate([m.property({constructOnly:!0,type:Number})],e.TilemapCache.prototype,"levels",void 0),i.__decorate([_.cast("levels")],e.TilemapCache.prototype,"castLevels",null),i.__decorate([m.property({readOnly:!0,type:Number})],e.TilemapCache.prototype,"size",null),i.__decorate([m.property({constructOnly:!0,type:Number})],e.TilemapCache.prototype,"cacheByteSize",void 0),i.__decorate([m.property({constructOnly:!0})],e.TilemapCache.prototype,"layer",void 0),i.__decorate([m.property({constructOnly:!0})],e.TilemapCache.prototype,"request",void 0),e.TilemapCache=b=i.__decorate([y.subclass("esri.layers.support.TilemapCache")],e.TilemapCache),Object.defineProperty(e,"__esModule",{value:!0})}));
