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

define(["../../core/declare","dojo/_base/lang","../../core/lang"],function(t,i,e){var n=t(null,{declaredClass:"esri.layers.support.ImageServiceParameters",extent:null,width:null,height:null,imageSpatialReference:null,format:null,interpolation:null,compressionQuality:null,bandIds:null,timeExtent:null,mosaicRule:null,renderingRule:null,noData:null,compressionTolerance:null,adjustAspectRatio:null,toJSON:function(t){var i=this.bbox||this.extent;i=i&&t&&i.clone()._normalize(!0);var n=i?i.spatialReference.wkid||JSON.stringify(i.spatialReference.toJSON()):null,l=this.imageSpatialReference,a={bbox:i?i.xmin+","+i.ymin+","+i.xmax+","+i.ymax:null,bboxSR:n,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,imageSR:l?l.wkid||JSON.stringify(l.toJSON()):n,format:this.format,interpolation:this.interpolation,compressionQuality:this.compressionQuality,bandIds:this.bandIds?this.bandIds.join(","):null,mosaicRule:this.mosaicRule?JSON.stringify(this.mosaicRule.toJSON()):null,renderingRule:this.renderingRule?JSON.stringify(this.renderingRule.toJSON()):null,noData:this.noData,noDataInterpretation:this.noDataInterpretation,compressionTolerance:this.compressionTolerance,adjustAspectRatio:this.adjustAspectRatio},o=this.timeExtent;return a.time=o?o.toJSON().join(","):null,e.filter(a,function(t){return null!==t&&void 0!==t?!0:void 0})}});return i.mixin(n,{INTERPOLATION_BILINEAR:"RSP_BilinearInterpolation",INTERPOLATION_CUBICCONVOLUTION:"RSP_CubicConvolution",INTERPOLATION_MAJORITY:"RSP_Majority",INTERPOLATION_NEARESTNEIGHBOR:"RSP_NearestNeighbor",NODATA_MATCH_ALL:"esriNoDataMatchAll",NODATA_MATCH_ANY:"esriNoDataMatchAny"}),n});