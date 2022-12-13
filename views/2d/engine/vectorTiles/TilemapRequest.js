/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../request","../../../../core/promiseUtils","../../tiling/TileKey"],(function(e,t,i,r){"use strict";let n=function(){function n(e,t){this._tilemap=e,this._tileIndexUrl=t}var l=n.prototype;return l.fetchTileIndex=function(){var i=e._asyncToGenerator((function*(e){return this._tileIndexPromise||(this._tileIndexPromise=t(this._tileIndexUrl,{query:{...e?.query}}).then((e=>e.data.index))),this._tileIndexPromise}));function r(e){return i.apply(this,arguments)}return r}(),l.dataKey=function(e,t){const{level:n,row:l,col:o}=e,s=new r(e);return this._tilemap.fetchAvailabilityUpsample(n,l,o,s,t).then((()=>(s.world=e.world,s))).catch((e=>{if(i.isAbortError(e))throw e;return null}))},n}();return n}));
