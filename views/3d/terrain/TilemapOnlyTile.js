// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./TilePerLayerInfo"],function(r,e,a){return function(){function r(r,e,i){this.lij=r,this._pool=e,this.layerInfo=new Array(2),this.parent=null;for(var n=0;n<2;n++){var t=i[n];if(t>0){this.layerInfo[n]=new Array;for(var o=0;o<t;++o)this.layerInfo[n][o]=a.TilePerLayerInfo.makeEmptyLayerInfo(n,this._pool)}}}return r.prototype.hasDataAvailable=function(r,e,a){var i=this.layerInfo[a][e].tilemap;return!i||"unavailable"!==i.getAvailability(r.lij[1],r.lij[2])},r.prototype.modifyLayers=function(r,e,i){for(var n=this.layerInfo[i],t=e.length,o=new Array(t),l=0;l<t;l++){var f=e[l];o[l]=f>-1?n[f]:a.TilePerLayerInfo.makeEmptyLayerInfo(i,this._pool)}this.layerInfo[i]=o},r}()});