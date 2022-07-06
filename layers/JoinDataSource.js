// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang","./DataSource","./LayerMapSource","./TableDataSource","./QueryDataSource","./RasterDataSource"],(function(e,a,r,t,o,c,i,n,u,s){var l=e(c,{declaredClass:"esri.layers.JoinDataSource",constructor:function(e){e&&(e.leftTableSource&&(this.leftTableSource=this._createLayerSource(e.leftTableSource)),e.rightTableSource&&(this.rightTableSource=this._createLayerSource(e.rightTableSource)))},_createLayerSource:function(e){var a;if("mapLayer"===e.type)a=new i(e);else{var r;switch(a={type:"dataLayer"},e.dataSource.type){case"table":r=new n(e.dataSource);break;case"queryTable":r=new u(e.dataSource);break;case"joinTable":r=new l(e.dataSource);break;case"raster":r=new s(e.dataSource);break;default:r=e.dataSource}a.dataSource=r,a.toJson=function(){var e={type:"dataLayer",dataSource:r.toJson()};return o.fixJson(e)}}return a},toJson:function(){var e,a={type:"joinTable",leftTableSource:this.leftTableSource&&this.leftTableSource.toJson(),rightTableSource:this.rightTableSource&&this.rightTableSource.toJson(),leftTableKey:this.leftTableKey,rightTableKey:this.rightTableKey};return e="left-outer-join"===this.joinType.toLowerCase()?"esriLeftOuterJoin":"left-inner-join"===this.joinType.toLowerCase()?"esriLeftInnerJoin":this.joinType,a.joinType=e,o.fixJson(a)}});return r("extend-esri")&&a.setObject("layers.JoinDataSource",l,t),l}));