/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/promiseUtils","../../tiling/TileKey"],(function(e,t,i,n){"use strict";let r=function(){function r(e,t){this._tilemap=e,this._tileIndexUrl=t}var l=r.prototype;return l.fetchTileIndex=function(){var i=e._asyncToGenerator((function*(e){return this._tileIndexPromise||(this._tileIndexPromise=t(this._tileIndexUrl,{query:{...null==e?void 0:e.query}}).then((e=>e.data.index))),this._tileIndexPromise}));function n(e){return i.apply(this,arguments)}return n}(),l.dataKey=function(e,t){const{level:r,row:l,col:o}=e,u=new n(e);return this._tilemap.fetchAvailabilityUpsample(r,l,o,u,t).then((()=>(u.world=e.world,u))).catch((e=>{if(i.isAbortError(e))throw e;return null}))},r}();return r}));
