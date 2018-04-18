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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","../request","../core/promiseUtils","./Layer","./support/TileInfo"],function(e,t,r,i,n){return i.createSubclass({properties:{attributionDataUrl:null,tileInfo:n},getTileUrl:function(e,t,r){},fetchTile:function(e,r,i,n){var a=this.getTileUrl(e,r,i),s={responseType:"image",allowImageDataAccess:n&&n.allowImageDataAccess||!1};return n&&n.timestamp&&(s.query={_ts:n.timestamp}),"string"==typeof a?t(a,s).then(function(e){return e.data}):a.then(function(e){return t(e,{responseType:"image"})}).then(function(e){return e.data})},importLayerViewModule:function(t){switch(t.type){case"2d":return r.create(function(t){e(["../views/2d/layers/TiledLayerView2D"],t)});case"3d":return r.create(function(t){e(["../views/3d/layers/TileLayerView3D"],t)})}}})});