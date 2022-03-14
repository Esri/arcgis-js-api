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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlTypedConverter","esri/dijit/geoenrichment/utils/JsonXmlConverter"],(function(e,n,r){var o={convertRendererJson:function(o){switch(o.type){case"simple":"esriPMS"===o.symbol.type&&delete(o=e.clone(o)).symbol.url}return r.parseXml(n.parseJson(o,{rootName:"Renderer"}))},convertLabelRendererJson:function(e){var n=e.uniqueValueInfos.map((function(e){return{labelExpressionInfo:{expression:"$feature.StdGeographyName"},where:"StdGeographyLevel='"+e.value+"'",labelPlacement:"esriServerPolygonPlacementAlwaysHorizontal",symbol:e.symbol}}));return o.convertLabelingInfo(n)},convertLabelingInfo:function(e){return r.parseXml(n.parseJson(e,{rootName:"LabelingInfo"}))}};return o}));