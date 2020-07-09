// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../definitions"],(function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(t,i){void 0===i&&(i=2),this._bucketSize=t,this._rowsLength=e.TILE_SIZE/t,this._colsLength=e.TILE_SIZE/t,this._elementsPerBucket=i,this._grid=this._initGrid()}return t.prototype.checkOverlap=function(t,i){var e=Math.floor(t/this._bucketSize),r=Math.floor(i/this._bucketSize);return e<0||e>=this._rowsLength||r<0||r>=this._colsLength||this._grid[r*this._colsLength+e]>=this._elementsPerBucket},t.prototype.markUsed=function(t,i){var e=Math.floor(t/this._bucketSize),r=Math.floor(i/this._bucketSize);this._grid[r*this._colsLength+e]+=1},t.prototype.reset=function(){this._grid=this._initGrid()},t.prototype._initGrid=function(){return new Uint8Array(this._rowsLength*this._colsLength)},t}();i.CollisionGrid=r}));