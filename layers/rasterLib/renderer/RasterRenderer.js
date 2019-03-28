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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../../geometry/Extent","../../PixelBlock"],function(e,t,i,n){return e(null,{declaredClass:"esri.layers.rasterLib.renderer.RasterRenderer",raster:null,constructor:function(e){this.raster=e.raster||e.Raster||this.raster,this.draw=t.hitch(this,this.draw),this.bind=t.hitch(this,this.bind),t.mixin(this,e)},bind:function(e){if(!e)throw"failed to bind without options";var i=e;if(e.layer){var n=e.layer,r=n.tileMode&&n.tileManager&&n.tileManager.xformSetting.requireProjection&&!n._hasTilingEffects&&"Thematic"!==n.raster.dataType;i={id:n.id,rawRasterInfo:n.raster.rasterInfo,glSetting:n._glSetting,xformSetting:n.tileManager&&n.tileManager.xformSetting,useWebGL:n.useWebGL,resampling:r?1:0,tileMode:n.tileMode}}this._rawRasterInfo=i.rawRasterInfo,this.useWebGL=i.useWebGL,this._function&&this._function.setProcessingContext(t.mixin({useProcessedData:!0},i)),this._processingContext=i},hasTilingEffects:function(){},draw:function(e){return this.useWebGL?this.drawGL(e):this.draw2D(e)},toJson:function(){},_clonePixelData:function(e){if(null==e)return e;var t={};e.extent&&(t.extent=new i(e.extent.xmin,e.extent.ymin,e.extent.xmax,e.extent.ymax,e.extent.spatialReference));var r=e.processedPixelBlock||e.pixelBlock;return null==r?t:(t.pixelBlock=r.clone?r.clone():n.prototype.clone(r),t)}})});