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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["../../../sections/dynamicSettings/supportClasses/FilterUtil"],(function(t){return{getFilter:function(e){if(!t.isSupported(e.attributes.method))return null;var n={method:e.attributes.method,columnIndex:void 0!==e.attributes.columnIndex?Number(e.attributes.columnIndex):void 0};return t.isNumElementsType(e.attributes.method)&&(n.numElements=e.attributes.numElements),t.isRangeType(e.attributes.method)&&(n.ranges=e.tags.map((function(t){return{conditions:t.tags.map((function(t){return{operator:t.attributes.operator,value:t.attributes.value}}))}}))),n}}}));