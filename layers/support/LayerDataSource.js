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

define(["../../core/declare","../../core/lang","./LayerSource","./TableDataSource","./QueryDataSource","./JoinDataSource","./RasterDataSource"],function(a,e,r,t,c,o,u){var S=a(r,{declaredClass:"esri.layers.support.LayerDataSource",type:"dataLayer",constructor:function(a){if(a&&a.dataSource){var e;switch(a.dataSource.type){case"table":e=new t(a.dataSource);break;case"queryTable":e=new c(a.dataSource);break;case"joinTable":e=new o(a.dataSource);break;case"raster":e=new u(a.dataSource);break;default:e=a.dataSource}this.dataSource=e}},toJSON:function(){var a={type:"dataLayer",dataSource:this.dataSource&&this.dataSource.toJSON()};return e.fixJson(a)}});return S});