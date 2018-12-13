// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../../geometry/Extent","../../../SpatialReference","../tile/RasterTileInfo"],function(t,e,i,l,n){return t(null,{declaredClass:"esri.layers.rasterLib.raster.RasterInfo",bandCount:null,pixelType:null,extent:null,spatialReference:null,width:null,height:null,colormap:null,attributeTable:null,multiDimensionalInfo:null,statistics:null,histograms:null,catalogInfo:null,keyProperties:null,cellSize:null,format:null,compression:null,compressionQuality:null,packetSize:null,geodataXform:null,constructor:function(t){e.mixin(this,t),this.extent=this.extent?this.extent.toJson?this.extent:new i(this.extent):null,this.spatialReference=this.spatialReference?this.spatialReference.toJson?this.spatialReference:new l(this.spatialReference):null,this.tileInfo=this.tileInfo?this.tileInfo.toJson?this.tileInfo:new n(this.tileInfo):null},toJson:function(){return{bandCount:this.bandCount,pixelType:this.pixelType,extent:this.extent&&this.extent.toJson?this.extent.toJson():this.extent,spatialReference:this.spatialReference&&this.spatialReference.toJson?this.spatialReference.toJson():this.spatialReference,width:this.width,height:this.height,colormap:this.colormap?e.clone(this.colormap):null,attributeTable:this.attributeTable?e.clone(this.attributeTable):null,multiDimensionalInfo:this.multiDimensionalInfo?e.clone(this.multiDimensionalInfo):null,statistics:this.statistics?e.clone(this.statistics):null,histograms:this.histograms?e.clone(this.histograms):null,catalogInfo:this.catalogInfo?e.clone(this.catalogInfo):null,keyProperties:this.keyProperties?e.clone(this.keyProperties):null,cellSize:this.cellSize&&this.cellSize.toJson?this.cellSize.toJson():this.cellSize,tileInfo:this.tileInfo&&this.tileInfo.toJson?this.tileInfo.toJson():this.tileInfo,format:this.format,compression:this.compression,compressionQuality:this.compressionQuality,packetSize:this.packetSize,geodataXform:this.geodataXform?e.clone(this.geodataXform):null}},clone:function(){return new this.constructor(this.toJson())}})});