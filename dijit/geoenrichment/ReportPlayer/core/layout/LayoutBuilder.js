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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","dojo/dom-construct"],(function(e,r,t,i){return e(null,{_moduleMap:null,_getModulePaths:function(){return{core:{section:"esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionRenderer",grid:"esri/dijit/geoenrichment/ReportPlayer/core/grid/AdjustableGrid",image:"esri/dijit/geoenrichment/ReportPlayer/core/annotations/image/ImageRenderer",chart:"esri/dijit/geoenrichment/ReportPlayer/core/charts/ChartRenderer",map:"esri/dijit/geoenrichment/ReportPlayer/core/map/MapRenderer"},classic:{reportContainer:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainer/ReportContainer"},graphicCore:{shape:"esri/dijit/geoenrichment/ReportPlayer/core/annotations/shape/ShapeRenderer",infographic:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicRenderer"},graphic_fullPages:{reportContainerGrid:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/ReportContainerGrid"},graphic_panelsInSlides:{reportContainerPagination:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerPagination/ReportContainerPagination",infographicPage:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPage"},graphic_panelsInStack:{reportContainerStack:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",infographicPageStack:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack"},graphic_panelsInStackAll:{reportContainerStack:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",reportContainerStackAll:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStackAll",infographicPageStack:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack"},graphic_panelsInRow:{reportContainerStack:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",infographicPageStack:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack"}}},initCoreComponents:function(){var e=this._getModulePaths();return this._initPaths(r.mixin({},e.core,e.graphicCore))},initClassicComponents:function(){var e=this._getModulePaths();return this._initPaths(r.mixin({},e.core,e.classic))},initGraphicComponents:function(e){var t=this._getModulePaths();return this._initPaths(r.mixin({},t.core,t.graphicCore,t["graphic_"+e]||t.graphic_fullPages))},_initPaths:function(e){var r=this;this._moduleMap=this._moduleMap||{};var i=[];for(var a in e)i.push({id:a,path:e[a]});var n=new t;return require(i.map((function(e){return e.path})),(function(){for(var e=0;e<arguments.length;e++)r._moduleMap[i[e].id]=arguments[e];n.resolve()})),n.promise},createElement:function(e,r,t,a){switch(e){case"grid":case"reportContainer":case"reportContainerGrid":case"reportContainerPagination":case"reportContainerStack":case"reportContainerStackAll":case"infographicPage":case"infographicPageStack":return new this._moduleMap[e](r,t?i.create("div",null,t,a):void 0);case"section":return this._moduleMap.section.createSection(r,t,a);case"emptySection":return this._moduleMap.section.createEmptySection(r,t,a);case"image":return this._moduleMap.image.createImageContainer(r);case"shape":return this._moduleMap.shape.createShapeContainer(r);case"chart":return this._moduleMap.chart.createChartPage(r);case"infographic":return this._moduleMap.infographic.createInfographicPage(r);case"map":return this._moduleMap.map.createMapContainer(r)}return!1},getClass:function(e){return this._moduleMap[e]}})}));