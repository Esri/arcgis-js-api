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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/dom-construct"],function(e,r,t,i){return e(null,{_moduleMap:null,_getModulePaths:function(){var e={};return e.section="esri/dijit/geoenrichment/ReportPlayer/core/sections/Section",e.emptySection="esri/dijit/geoenrichment/ReportPlayer/core/sections/Empty",e.grid="esri/dijit/geoenrichment/ReportPlayer/core/grid/AdjustableGrid",e.reportContainer="esri/dijit/geoenrichment/ReportPlayer/core/reportContainer/ReportContainer",e.reportContainerGrid="esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/ReportContainerGrid",e.reportContainerPagination="esri/dijit/geoenrichment/ReportPlayer/core/reportContainerPagination/ReportContainerPagination",e.reportContainerStack="esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",e.infographicPage="esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPage",e.infographicPageStack="esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack",e.image="esri/dijit/geoenrichment/ReportPlayer/core/annotations/image/ImageRenderer",e.shape="esri/dijit/geoenrichment/ReportPlayer/core/annotations/shape/ShapeRenderer",e.chart="esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartRenderer",e.infographic="esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicRenderer",e},initialize:function(){var e=this;this._moduleMap={};var t=this._getModulePaths(),i=[];for(var n in t)i.push({id:n,path:t[n]});var o=new r;return require(i.map(function(e){return e.path}),function(){for(var r=0;r<arguments.length;r++)e._moduleMap[i[r].id]=arguments[r];o.resolve()}),o.promise},createElement:function(e,r,t,n){switch(e){case"section":case"emptySection":case"grid":case"reportContainer":case"reportContainerGrid":case"reportContainerPagination":case"reportContainerStack":case"infographicPage":case"infographicPageStack":return new this._moduleMap[e](r,t?i.create("div",null,t,n):void 0);case"image":return this._moduleMap[e].createImageContainer(r);case"shape":return this._moduleMap[e].createShapeContainer(r);case"chart":return this._moduleMap[e].createChartPage(r);case"infographic":return this._moduleMap[e].createInfographicPage(r)}return!1},getClass:function(e){return this._moduleMap[e]}})});