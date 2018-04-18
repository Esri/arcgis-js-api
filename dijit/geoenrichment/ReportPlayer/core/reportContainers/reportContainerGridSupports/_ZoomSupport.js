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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","../containerGridUtils/ZoomUtil"],function(o,t){return o(null,{getZoomInfo:function(){return t.getZoomInfo(this)},setZoomInfo:function(o){t.setZoomInfo(this,o)},zoomIn:function(){t.zoomIn(this)},zoomOut:function(){t.zoomOut(this)},zoomToFitPage:function(){t.zoomToFitPage(this)},zoomToFitPageWidth:function(){t.zoomToFitPageWidth(this)},setZoomPercent:function(o){t.setZoomPercent(this,o)},setBestZoom:function(){t.setBestZoom(this)},resetZoom:function(){t.reset(this)},onZoomChanged:function(){}})});