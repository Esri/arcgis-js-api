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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","../geometry/Point"],function(i,e,t,s,n,o){var r=i(null,{declaredClass:"esri.layers.MosaicRule",method:null,where:null,sortField:null,sortValue:null,ascending:!1,lockRasterIds:null,viewpoint:null,objectIds:null,operation:null,multidimensionalDefinition:[],constructor:function(i){e.isObject(i)&&(e.mixin(this,i),i.mosaicMethod&&(this.method=i.mosaicMethod),this.method&&"esri"!==this.method.toLowerCase().substring(0,4)&&(this.method=this._getMethodEnum(this.method)),i.mosaicOperation&&(this.operation=i.mosaicOperation),this.operation&&"MT_"!==this.operation.toUpperCase().substring(0,3)&&(this.operation=this._getOperatorEnum(this.operation)),i.fids&&(this.objectIds=i.fids),i.viewpoint&&(this.viewpoint=new o(i.viewpoint)),this.multidimensionalDefinition=i.multidimensionalDefinition||[])},toJson:function(){var i=null,e=this.multidimensionalDefinition?this.multidimensionalDefinition.length:0;if(e){i=[];for(var t=0;e>t;t++)i.push("esri.layers.DimensionalDefinition"===this.multidimensionalDefinition[t].declaredClass?this.multidimensionalDefinition[t].toJson():this.multidimensionalDefinition[t])}var s={mosaicMethod:this.method,where:this.where,sortField:this.sortField,sortValue:this.sortValue,ascending:this.ascending,lockRasterIds:this.lockRasterIds,viewpoint:this.viewpoint?this.viewpoint.toJson():null,fids:this.objectIds,mosaicOperation:this.operation,multidimensionalDefinition:i};return n.filter(s,function(i){return null!==i?!0:void 0})},_getMethodEnum:function(i){if(i){var e=r.METHOD_NONE;switch(i.toLowerCase()){case"byattribute":e=r.METHOD_ATTRIBUTE;break;case"center":e=r.METHOD_CENTER;break;case"lockraster":e=r.METHOD_LOCKRASTER;break;case"nadir":e=r.METHOD_NADIR;break;case"northwest":e=r.METHOD_NORTHWEST;break;case"seamline":e=r.METHOD_SEAMLINE;break;case"viewpoint":e=r.METHOD_VIEWPOINT}return e}},_getOperatorEnum:function(i){if(i)switch(i.toLowerCase()){case"first":return r.OPERATION_FIRST;case"last":return r.OPERATION_LAST;case"max":return r.OPERATION_MAX;case"min":return r.OPERATION_MIN;case"blend":return r.OPERATION_BLEND;case"mean":return r.OPERATION_MEAN;case"sum":return r.OPERATION_SUM}}});return e.mixin(r,{METHOD_NONE:"esriMosaicNone",METHOD_CENTER:"esriMosaicCenter",METHOD_NADIR:"esriMosaicNadir",METHOD_VIEWPOINT:"esriMosaicViewpoint",METHOD_ATTRIBUTE:"esriMosaicAttribute",METHOD_LOCKRASTER:"esriMosaicLockRaster",METHOD_NORTHWEST:"esriMosaicNorthwest",METHOD_SEAMLINE:"esriMosaicSeamline",OPERATION_FIRST:"MT_FIRST",OPERATION_LAST:"MT_LAST",OPERATION_MIN:"MT_MIN",OPERATION_MAX:"MT_MAX",OPERATION_MEAN:"MT_MEAN",OPERATION_BLEND:"MT_BLEND",OPERATION_SUM:"MT_SUM"}),t("extend-esri")&&e.setObject("layers.MosaicRule",r,s),r});