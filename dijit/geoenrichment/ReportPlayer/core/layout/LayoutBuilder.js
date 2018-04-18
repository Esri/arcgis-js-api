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

define(["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/dom-construct"],function(e,r,i,t){return e(null,{_moduleMap:null,_getModulePaths:function(){var e={};return e.section="esri/dijit/geoenrichment/ReportPlayer/core/sections/Section",e.emptySection="esri/dijit/geoenrichment/ReportPlayer/core/sections/Empty",e.grid="esri/dijit/geoenrichment/ReportPlayer/core/grid/AdjustableGrid",e.reportContainer="esri/dijit/geoenrichment/ReportPlayer/core/reportContainers/ReportContainer",e.reportContainerGrid="esri/dijit/geoenrichment/ReportPlayer/core/reportContainers/ReportContainerGrid",e.reportContainerPagination="esri/dijit/geoenrichment/ReportPlayer/core/reportContainers/ReportContainerPagination",e.infographicPage="esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPage",e.image="esri/dijit/geoenrichment/ReportPlayer/core/annotations/image/ImageRenderer",e.shape="esri/dijit/geoenrichment/ReportPlayer/core/annotations/shape/ShapeRenderer",e.chart="esri/dijit/geoenrichment/ReportPlayer/core/charts/chartUtils/ChartRenderer",e.infographic="esri/dijit/geoenrichment/ReportPlayer/core/infographics/infographicUtils/InfographicRenderer",e},initialize:function(){var e=this;this._moduleMap={};var i=this._getModulePaths(),t=[];for(var n in i)t.push({id:n,path:i[n]});var o=new r;return require(t.map(function(e){return e.path}),function(){for(var r=0;r<arguments.length;r++)e._moduleMap[t[r].id]=arguments[r];o.resolve()}),o.promise},createElement:function(e,r,i,n){switch(e){case"section":case"emptySection":case"grid":case"reportContainer":case"reportContainerGrid":case"reportContainerPagination":case"infographicPage":return new this._moduleMap[e](r,i?t.create("div",null,i,n):void 0);case"image":return this._moduleMap[e].createImageContainer(r);case"shape":return this._moduleMap[e].createShapeContainer(r);case"chart":return this._moduleMap[e].createChartPage(r);case"infographic":return this._moduleMap[e].createInfographicPage(r)}return!1},getClass:function(e){return this._moduleMap[e]}})});