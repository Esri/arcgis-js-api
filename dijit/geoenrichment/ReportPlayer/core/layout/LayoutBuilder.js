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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/dom-construct"],function(e,r,i,t){return e(null,{_moduleMap:null,_getModulePaths:function(){return{core:{section:"esri/dijit/geoenrichment/ReportPlayer/core/sections/Section",emptySection:"esri/dijit/geoenrichment/ReportPlayer/core/sections/Empty",grid:"esri/dijit/geoenrichment/ReportPlayer/core/grid/AdjustableGrid",image:"esri/dijit/geoenrichment/ReportPlayer/core/annotations/image/ImageRenderer",chart:"esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartRenderer"},classic:{reportContainer:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainer/ReportContainer"},graphicCore:{shape:"esri/dijit/geoenrichment/ReportPlayer/core/annotations/shape/ShapeRenderer",infographic:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicRenderer"},graphic_fullPages:{reportContainerGrid:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerGrid/ReportContainerGrid"},graphic_panelsInSlides:{reportContainerPagination:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerPagination/ReportContainerPagination",infographicPage:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPage"},graphic_panelsInStack:{reportContainerStack:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",infographicPageStack:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack"},graphic_panelsInRow:{reportContainerStack:"esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/ReportContainerStack",infographicPageStack:"esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicsPageStack"}}},initCoreComponents:function(){var e=this._getModulePaths();return this._initPaths(r.mixin({},e.core,e.graphicCore))},initClassicComponents:function(){var e=this._getModulePaths();return this._initPaths(r.mixin({},e.core,e.classic))},initGraphicComponents:function(e){var i=this._getModulePaths();return this._initPaths(r.mixin({},i.core,i.graphicCore,i["graphic_"+e]||i.graphic_fullPages))},_initPaths:function(e){var r=this;this._moduleMap=this._moduleMap||{};var t=[];for(var n in e)t.push({id:n,path:e[n]});var a=new i;return require(t.map(function(e){return e.path}),function(){for(var e=0;e<arguments.length;e++)r._moduleMap[t[e].id]=arguments[e];a.resolve()}),a.promise},createElement:function(e,r,i,n){switch(e){case"section":case"emptySection":case"grid":case"reportContainer":case"reportContainerGrid":case"reportContainerPagination":case"reportContainerStack":case"infographicPage":case"infographicPageStack":return new this._moduleMap[e](r,i?t.create("div",null,i,n):void 0);case"image":return this._moduleMap[e].createImageContainer(r);case"shape":return this._moduleMap[e].createShapeContainer(r);case"chart":return this._moduleMap[e].createChartPage(r);case"infographic":return this._moduleMap[e].createInfographicPage(r)}return!1},getClass:function(e){return this._moduleMap[e]}})});