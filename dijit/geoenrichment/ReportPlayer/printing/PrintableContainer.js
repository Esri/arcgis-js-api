// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","dojo/dom-class","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil","./_PrintSettingsSupport"],function(e,t,n,o,r,i,l){return e(l,{domNode:null,_player:null,_viewModel:null,_visualState:null,_rollBackFunc:null,_pageSettingsRollBackFunc:null,_pageSettings:null,_pageFitParams:null,_headerFooterParams:null,_commandId:null,constructor:function(e,t){this._player=e,this._viewModel=t,this.domNode=e.printableDiv},initialize:function(e){function n(){function e(){o._setPrintMode(!0);var e=o._getReportContainer();e.resetZoom&&e.resetZoom(),n=e.getCurrentPageIndex&&e.getCurrentPageIndex(),e.showAllPages&&e.showAllPages(),e.collapseContent&&e.collapseContent(),i.hideNodeInBackground(o.domNode)}function t(){i.showNodeFromBackground(o.domNode);var e=o._getReportContainer();return e.showPageAt&&e.showPageAt(n),o._setPrintMode(!1),o._player.resize()}var n;return o._player.isSlidesView?(o._player.isSlidesView=!1,o._rollBackFunc=function(){return t(),o._player.isSlidesView=!0,o._player.refresh({waitUntilAllContentIsReady:!1})},o._player.refresh({waitUntilAllContentIsReady:!0}).then(function(){e()})):(e(),o._rollBackFunc=t,o._player.isContentLoading())}var o=this;return this._commandId=e.commandId,t(n(),function(){return t(o._checkPrintSettings(e),function(e){return"cancel"===e?null:o})})},_setPrintMode:function(e){this._viewModel.chartAnimationAllowed=!e,n[e?"add":"remove"](this.domNode,"esriGEReportPlayerPrintNode esriGEReportPlayer"),this._player.setPrintMode(e)},_getReportContainer:function(){return this._player.getCurrentReportContainer()},getFitParams:function(){return this._pageFitParams},getHeaderFooterParams:function(){return this._headerFooterParams},getDocumentOptions:function(){return this._pageSettings||this._getReportContainer().documentOptions},getSelectedCommandId:function(){return this._commandId},stop:function(){return this._rollBackPrintSettings()},_rollBackPrintSettings:function(){var e=this;return t(this._pageSettingsRollBackFunc&&this._pageSettingsRollBackFunc(),function(){return t(e._rollBackFunc&&e._rollBackFunc())})}})});