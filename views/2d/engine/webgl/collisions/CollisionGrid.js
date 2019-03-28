// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../definitions"],function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var r=function(){function t(t){this._bucketSize=t,this._rowsLength=e.TILE_SIZE/t,this._colsLength=e.TILE_SIZE/t,this._grid=this._initGrid()}return t.prototype.checkOverlap=function(t,i){var e=Math.floor(t/this._bucketSize),r=Math.floor(i/this._bucketSize);return e<0||e>=this._rowsLength||r<0||r>=this._colsLength||(!!this._grid[r][e]||!(this._grid[r][e]=!0))},t.prototype.reset=function(){this._grid=this._initGrid()},t.prototype._initGrid=function(){for(var t=[],i=0;i<this._rowsLength;i++)t.push(new Array(this._colsLength));return t},t}();i.default=r});