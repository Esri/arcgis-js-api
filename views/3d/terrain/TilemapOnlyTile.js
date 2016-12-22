// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./TerrainConst","./TileBase"],function(e,t){var a=function(t){this.lij=t,this.layerInfo=new Array(e.LayerClass.LAYER_CLASS_COUNT)};a.prototype.tileDataAvailable=t.prototype.tileDataAvailable,a.prototype.modifyLayers=function(e,t,a){for(var r=t.length,i=this.layerInfo[a],l=new Array(r),o=0;r>o;o++){var s=t[o];l[o]=s>-1?i[s]:n(a)}this.layerInfo[a]=l};var n=function(){return{tilemap:null,tilemapRequest:null,pendingUpdates:0}};return a});