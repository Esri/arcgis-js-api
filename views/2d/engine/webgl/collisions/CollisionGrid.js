/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../definitions"],(function(t,i){"use strict";let e=function(){function t(t,e=2){this._bucketSize=t,this._rowsLength=i.TILE_SIZE/t,this._colsLength=i.TILE_SIZE/t,this._elementsPerBucket=e,this._grid=this._initGrid()}var e=t.prototype;return e.checkOverlap=function(t,i){const e=Math.floor(t/this._bucketSize),s=Math.floor(i/this._bucketSize);return e<0||e>=this._rowsLength||s<0||s>=this._colsLength||this._grid[s*this._colsLength+e]>=this._elementsPerBucket},e.markUsed=function(t,i){const e=Math.floor(t/this._bucketSize),s=Math.floor(i/this._bucketSize);this._grid[s*this._colsLength+e]+=1},e.reset=function(){this._grid=this._initGrid()},e._initGrid=function(){return new Uint8Array(this._rowsLength*this._colsLength)},t}();t.CollisionGrid=e,Object.defineProperty(t,"__esModule",{value:!0})}));
