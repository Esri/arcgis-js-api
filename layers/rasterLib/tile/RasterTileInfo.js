// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../../geometry/Extent","../../../SpatialReference","../../../geometry/Point","../../../lang","../../TileInfo"],(function(e,t,i,r,s,o,n){return e([n],{declaredClass:"esri.layers.rasterLib.tile.RasterTileInfo",rows:512,cols:512,compressionQuality:95,lercError:.01,spatialReference:null,origin:null,virtual:!0,tileType:"Raster",constructor:function(e,i){if(e||i){var r=i&&i.refTileInfo;e?this.virtual=!1:(this.virtual=!0,t.mixin(this,{rows:i.rows||this.rows,cols:i.cols||this.cols,compressionQuality:i.compressionQuality||95,lercError:i.compressionTolerance||.01,spatialReference:i.spatialReference,origin:i.origin}),this.width=this.cols,this.height=this.rows,this.origin||(r?this.origin=r.origin:i.spatialReference.isWebMercator()||i.extent&&Math.max(Math.abs(i.extent.xmin),Math.abs(i.extent.xmax))>=360?this.origin={x:-20037508.342787,y:20037508.342787}:[4326,4269].indexOf(i.spatialReference.wkid)>-1||Math.max(Math.abs(i.extent.xmin),Math.abs(i.extent.xmax))<360?this.origin={x:-180,y:90}:this.origin={x:i.extent.xmin,y:i.extent.ymax}))}},toJson:function(){var e=n.prototype.toJson.apply(this);return e.tileType=this.tileType,e.virtual=this.virtual,e.lercError=this.lercError,e},clone:function(){return new this.prototype(this.toJson())}})}));