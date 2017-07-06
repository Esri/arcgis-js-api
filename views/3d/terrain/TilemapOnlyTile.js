// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./TerrainConst","./TilePerLayerInfo"],function(r,e,n,a){var i=function(){function r(r){this.lij=r,this.layerInfo=new Array(n.LayerClass.LAYER_CLASS_COUNT)}return r.prototype.tileDataAvailable=function(r,e,n){var a=this.layerInfo[n][e].tilemap;return a?"unavailable"!==a.getAvailability(r.lij[1],r.lij[2]):!0},r.prototype.modifyLayers=function(r,e,n){for(var i=e.length,t=this.layerInfo[n],l=new Array(i),o=0;i>o;o++){var f=e[o];l[o]=f>-1?t[f]:new a(n)}this.layerInfo[n]=l},r}();return i});