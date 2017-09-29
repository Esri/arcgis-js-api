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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./TerrainConst","./TilePerLayerInfo"],function(r,e,n,t){var a=function(){function r(r){this.parent=null,this.lij=r,this.layerInfo=new Array(n.LayerClass.LAYER_CLASS_COUNT)}return r.prototype.tileDataAvailable=function(r,e,n){var t=this.layerInfo[n][e].tilemap;return t?"unavailable"!==t.getAvailability(r.lij[1],r.lij[2]):!0},r.prototype.modifyLayers=function(r,e,n){for(var a=e.length,i=this.layerInfo[n],l=new Array(a),o=0;a>o;o++){var f=e[o];l[o]=f>-1?i[f]:new t(n)}this.layerInfo[n]=l},r}();return a});