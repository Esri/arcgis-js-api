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

define(["../request","./Layer","./support/TileInfo"],function(e,t,r){var n=t.createSubclass({properties:{attributionDataUrl:null,tileInfo:r},viewModulePaths:{"2d":"../views/2d/layers/TiledLayerView2D","3d":"../views/3d/layers/TileLayerView3D"},getTileUrl:function(e,t,r){},fetchTile:function(t,r,n,a){var i=this.getTileUrl(t,r,n),l={responseType:"image",allowImageDataAccess:a&&a.allowImageDataAccess||!1};return"string"==typeof i?e(i,l).then(function(e){return e.data}):i.then(function(t){return e(t,{responseType:"image"})}).then(function(e){return e.data})}});return n});