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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../lang"],function(e,n,t,i,l,o){var a=e(null,{declaredClass:"esri.layers.ImageServiceParameters",extent:null,width:null,height:null,imageSpatialReference:null,format:null,interpolation:null,compressionQuality:null,bandIds:null,timeExtent:null,mosaicRule:null,renderingRule:null,noData:null,compressionTolerance:null,adjustAspectRatio:null,lercVersion:null,toJson:function(e){var n=this.bbox||this.extent;n=n&&e&&n._normalize(!0);var i=n?n.spatialReference.wkid||t.toJson(n.spatialReference.toJson()):null,l=this.imageSpatialReference,a={bbox:n?n.xmin+","+n.ymin+","+n.xmax+","+n.ymax:null,bboxSR:i,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,imageSR:l?l.wkid||t.toJson(l.toJson()):i,format:this.format,interpolation:this.interpolation,compressionQuality:this.compressionQuality,bandIds:this.bandIds?this.bandIds.join(","):null,mosaicRule:this.mosaicRule?t.toJson(this.mosaicRule.toJson()):null,renderingRule:this.renderingRule?t.toJson(this.renderingRule.toJson()):null,noData:this.noData,noDataInterpretation:this.noDataInterpretation,compressionTolerance:this.compressionTolerance,adjustAspectRatio:this.adjustAspectRatio,lercVersion:this.lercVersion},s=this.timeExtent;return a.time=s?s.toJson().join(","):null,o.filter(a,function(e){return null!==e&&void 0!==e?!0:void 0})}});return n.mixin(a,{INTERPOLATION_BILINEAR:"RSP_BilinearInterpolation",INTERPOLATION_CUBICCONVOLUTION:"RSP_CubicConvolution",INTERPOLATION_MAJORITY:"RSP_Majority",INTERPOLATION_NEARESTNEIGHBOR:"RSP_NearestNeighbor",NODATA_MATCH_ALL:"esriNoDataMatchAll",NODATA_MATCH_ANY:"esriNoDataMatchAny"}),i("extend-esri")&&n.setObject("layers.ImageServiceParameters",a,l),a});