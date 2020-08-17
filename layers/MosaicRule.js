// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../geometry/Point","./RasterFunction"],(function(e,i,t,n,s,o,r){var a=e(null,{declaredClass:"esri.layers.MosaicRule",method:null,where:null,sortField:null,sortValue:null,ascending:!1,lockRasterIds:null,viewpoint:null,objectIds:null,operation:null,multidimensionalDefinition:[],itemRenderingRule:null,constructor:function(e){i.isObject(e)&&(i.mixin(this,e),e.mosaicMethod&&(this.method=e.mosaicMethod),this.method&&"esri"!==this.method.toLowerCase().substring(0,4)&&(this.method=this._getMethodEnum(this.method)),e.mosaicOperation&&(this.operation=e.mosaicOperation),this.operation&&"MT_"!==this.operation.toUpperCase().substring(0,3)&&(this.operation=this._getOperatorEnum(this.operation)),e.fids&&(this.objectIds=e.fids),e.viewpoint&&(this.viewpoint=new o(e.viewpoint)),e.itemRenderingRule&&(this.itemRenderingRule=new r(e.itemRenderingRule)),this.multidimensionalDefinition=e.multidimensionalDefinition||[])},toJson:function(){var e=null,t=this.multidimensionalDefinition?this.multidimensionalDefinition.length:0;if(t){e=[];for(var n=0;n<t;n++)e.push("esri.layers.DimensionalDefinition"===this.multidimensionalDefinition[n].declaredClass?this.multidimensionalDefinition[n].toJson():this.multidimensionalDefinition[n])}var o={mosaicMethod:this.method,where:this.where,sortField:this.sortField,sortValue:this.sortValue,ascending:this.ascending,lockRasterIds:i.clone(this.lockRasterIds),viewpoint:this.viewpoint?this.viewpoint.toJson():null,fids:i.clone(this.objectIds),mosaicOperation:this.operation,multidimensionalDefinition:e,itemRenderingRule:this.itemRenderingRule?this.itemRenderingRule.toJson():null};return s.filter(o,(function(e){if(null!==e)return!0}))},_getMethodEnum:function(e){if(e){var i=a.METHOD_NONE;switch(e.toLowerCase()){case"byattribute":i=a.METHOD_ATTRIBUTE;break;case"center":i=a.METHOD_CENTER;break;case"lockraster":i=a.METHOD_LOCKRASTER;break;case"nadir":i=a.METHOD_NADIR;break;case"northwest":i=a.METHOD_NORTHWEST;break;case"seamline":i=a.METHOD_SEAMLINE;break;case"viewpoint":i=a.METHOD_VIEWPOINT}return i}},_getOperatorEnum:function(e){if(e)switch(e.toLowerCase()){case"first":return a.OPERATION_FIRST;case"last":return a.OPERATION_LAST;case"max":return a.OPERATION_MAX;case"min":return a.OPERATION_MIN;case"blend":return a.OPERATION_BLEND;case"mean":return a.OPERATION_MEAN;case"sum":return a.OPERATION_SUM}}});return i.mixin(a,{METHOD_NONE:"esriMosaicNone",METHOD_CENTER:"esriMosaicCenter",METHOD_NADIR:"esriMosaicNadir",METHOD_VIEWPOINT:"esriMosaicViewpoint",METHOD_ATTRIBUTE:"esriMosaicAttribute",METHOD_LOCKRASTER:"esriMosaicLockRaster",METHOD_NORTHWEST:"esriMosaicNorthwest",METHOD_SEAMLINE:"esriMosaicSeamline",OPERATION_FIRST:"MT_FIRST",OPERATION_LAST:"MT_LAST",OPERATION_MIN:"MT_MIN",OPERATION_MAX:"MT_MAX",OPERATION_MEAN:"MT_MEAN",OPERATION_BLEND:"MT_BLEND",OPERATION_SUM:"MT_SUM"}),t("extend-esri")&&i.setObject("layers.MosaicRule",a,n),a}));
