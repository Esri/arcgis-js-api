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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./TerrainConst","./TilePerLayerInfo"],function(r,e,a,n){return function(){function r(r){this.parent=null,this.lij=r,this.layerInfo=new Array(a.LayerClass.COUNT)}return r.prototype.hasDataAvailable=function(r,e,a){var n=this.layerInfo[a][e].tilemap;return!n||"unavailable"!==n.getAvailability(r.lij[1],r.lij[2])},r.prototype.modifyLayers=function(r,e,a){for(var t=this.layerInfo[a],i=e.length,l=new Array(i),o=0;o<i;o++){var y=e[o];l[o]=y>-1?t[y]:n.makeEmptyLayerInfo(a)}this.layerInfo[a]=l},r}()});