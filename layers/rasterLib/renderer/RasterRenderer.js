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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","../../../geometry/Extent","../../PixelBlock"],(function(e,t,n,i){return e(null,{declaredClass:"esri.layers.rasterLib.renderer.RasterRenderer",raster:null,constructor:function(e){e=e||{},this.raster=e.raster||e.Raster||this.raster,this.draw=t.hitch(this,this.draw),this.bind=t.hitch(this,this.bind),e=t.clone(e),Object.keys(e).forEach((function(t){null==e[t]&&delete e[t]})),t.mixin(this,e)},bind:function(e){if(!e)throw"failed to bind without options";var n=e;if(e.layer){var i=e.layer,r=i.tileMode&&i.tileManager&&i.tileManager.xformSetting.requireProjection&&!i._hasTilingEffects&&"Thematic"!==i.raster.dataType;n={id:i.id,rawRasterInfo:i.raster.rasterInfo,glSetting:i._glSetting,xformSetting:i.tileManager&&i.tileManager.xformSetting,useWebGL:i.useWebGL,resampling:r?1:0,tileMode:i.tileMode}}this._rawRasterInfo=n.rawRasterInfo,this.useWebGL=n.useWebGL,this._function&&this._function.setProcessingContext(t.mixin({useProcessedData:!0},n)),this._processingContext=n},hasTilingEffects:function(){},draw:function(e){return this.useWebGL?this.drawGL(e):this.draw2D(e)},toJson:function(){},_clonePixelData:function(e){if(null==e)return e;var t={};e.extent&&(t.extent=new n(e.extent.xmin,e.extent.ymin,e.extent.xmax,e.extent.ymax,e.extent.spatialReference));var r=e.processedPixelBlock||e.pixelBlock;return null==r?t:(t.pixelBlock=r.clone?r.clone():i.prototype.clone(r),t)}})}));