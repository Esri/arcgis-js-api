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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../core/declare","../../core/lang","./DataSource","./LayerMapSource","./TableDataSource","./QueryDataSource","./RasterDataSource"],function(e,a,r,t,o,c,i){var u=e(r,{declaredClass:"esri.layers.support.JoinDataSource",constructor:function(e){e&&(e.leftTableSource&&(this.leftTableSource=this._createLayerSource(e.leftTableSource)),e.rightTableSource&&(this.rightTableSource=this._createLayerSource(e.rightTableSource)))},_createLayerSource:function(e){var r;if("mapLayer"===e.type)r=new t(e);else{r={type:"dataLayer"};var n;switch(e.dataSource.type){case"table":n=new o(e.dataSource);break;case"queryTable":n=new c(e.dataSource);break;case"joinTable":n=new u(e.dataSource);break;case"raster":n=new i(e.dataSource);break;default:n=e.dataSource}r.dataSource=n,r.toJSON=function(){var e={type:"dataLayer",dataSource:n.toJSON()};return a.fixJson(e)}}return r},toJSON:function(){var e,r={type:"joinTable",leftTableSource:this.leftTableSource&&this.leftTableSource.toJSON(),rightTableSource:this.rightTableSource&&this.rightTableSource.toJSON(),leftTableKey:this.leftTableKey,rightTableKey:this.rightTableKey};return e="left-outer-join"===this.joinType.toLowerCase()?"esriLeftOuterJoin":"left-inner-join"===this.joinType.toLowerCase()?"esriLeftInnerJoin":this.joinType,r.joinType=e,a.fixJson(r)}});return u});