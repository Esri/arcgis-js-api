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

define(["../../core/kebabDictionary","../../core/JSONSupport","../../core/lang","../../geometry/Point"],function(e,i,t,o){var s=e({MT_FIRST:"first",MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend"}),n=e({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"}),r=i.createSubclass({declaredClass:"esri.layers.support.MosaicRule",properties:{ascending:{value:!0},lockRasterIds:{value:null},method:{value:null,json:{readFrom:["mosaicMethod","defaultMosaicMethod"],read:function(e,i){var t=i.mosaicMethod||i.defaultMosaicMethod;return"byattribute"===t.toLowerCase()?t="attribute":"lockraster"===t.toLowerCase()&&(t="lock-raster"),n.fromJSON(t)}}},multidimensionalDefinition:{value:[]},objectIds:{value:null,json:{readFrom:["fids"],read:function(e,i){return i.fids}}},operation:{value:null,json:{readFrom:["mosaicOperation","mosaicOperator"],read:function(e,i){return s.fromJSON(i.mosaicOperation||i.mosaicOperator.toLowerCase())}}},sortField:{value:null},sortValue:{value:null},viewpoint:{value:null,type:o},where:{value:null}},toJSON:function(){var e=null,i=this.multidimensionalDefinition?this.multidimensionalDefinition.length:0;if(i){e=[];for(var o=0;i>o;o++)e.push("esri.layers.support.DimensionalDefinition"===this.multidimensionalDefinition[o].declaredClass?this.multidimensionalDefinition[o].toJSON():this.multidimensionalDefinition[o])}var r={mosaicMethod:this.method?n.toJSON(this.method.toLowerCase()):null,where:this.where,sortField:this.sortField,sortValue:this.sortValue,ascending:this.ascending,lockRasterIds:this.lockRasterIds,viewpoint:this.viewpoint?this.viewpoint.toJSON():null,fids:this.objectIds,mosaicOperation:this.operation?s.toJSON(this.operation.toLowerCase()):null,multidimensionalDefinition:e};return t.filter(r,function(e){return null!==e?!0:void 0})}});return r});