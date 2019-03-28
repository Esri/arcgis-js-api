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

define(["require","exports","./TerrainConst","./TilePerLayerInfo"],function(e,r,a,n){return function(){function e(e,r){this.lij=e,this._pool=r,this.layerInfo=new Array(a.LayerClass.COUNT),this.parent=null}return e.prototype.hasDataAvailable=function(e,r,a){var n=this.layerInfo[a][r].tilemap;return!n||"unavailable"!==n.getAvailability(e.lij[1],e.lij[2])},e.prototype.modifyLayers=function(e,r,a){for(var t=this.layerInfo[a],i=r.length,o=new Array(i),l=0;l<i;l++){var y=r[l];o[l]=y>-1?t[y]:n.TilePerLayerInfo.makeEmptyLayerInfo(a,this._pool)}this.layerInfo[a]=o},e}()});