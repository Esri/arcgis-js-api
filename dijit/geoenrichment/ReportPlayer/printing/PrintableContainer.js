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

define(["dojo/_base/declare","dojo/when","dojo/dom-class","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","./_PrintSettingsSupport"],function(e,t,n,i,o,r,l,a){return e(a,{domNode:null,_player:null,_viewModel:null,_visualState:null,_initRollBackFunc:null,_pageSettingsRollBackFunc:null,_pageSettings:null,_pageFitParams:null,_headerFooterParams:null,_allowDataDrilling:!1,_exportAllAreas:!1,_commandId:null,constructor:function(e,t){this._player=e,this._viewModel=t,this.domNode=e.printableDiv},initialize:function(e){var n=this;return this._commandId=e.commandId,t(function(){function o(){u=i.create("div",{innerHTML:n._player.normalViewDiv.innerHTML,class:"esriGEAbsoluteStretched esriGEReportPlayerPrintViewCopy"},n._player.printBackgroundView)}function a(){return l.executeFunctions([function(){o()},function(){return n._setPrintMode(!0),l.executeFunctions(n.getAllReportContainers().map(function(e,t){return function(){e.resetZoom&&e.resetZoom(),c[t]=e.getCurrentPageIndex&&e.getCurrentPageIndex(),e.showAllPages&&e.showAllPages(),e.collapseContent&&e.collapseContent()}}),0)},function(){r.hideNodeInBackground(n.domNode,"reportPlayerBeingPrinted")}],0)}function s(){var t=l.executeFunctions([function(){i.destroy(u),r.showNodeFromBackground(n.domNode)},function(){n.getAllReportContainers().forEach(function(e,t){e.showPageAt&&e.showPageAt(c[t])})},function(){return n._setPrintMode(!1),n._setAnimationSuspended(!1),n._player.resize()}],0);return e.onShowWaiting(t),t}var u,c=[];n._setAnimationSuspended(!0);var d;return n._player.isSlidesView?(n._player.isSlidesView=!1,n._initRollBackFunc=function(){return t(s(),function(){return n._player.isSlidesView=!0,n._player.refresh({waitUntilAllContentIsReady:!1})})},d=t(n._player.refresh({waitUntilAllContentIsReady:!0}),a)):d=t(a(),function(){return n._initRollBackFunc=s,n._player.isContentLoading()}),e.onShowWaiting(d),d}(),function(){return t(n._checkPrintSettings(e),function(e){return"cancel"===e?null:n})})},_setPrintMode:function(e){n[e?"add":"remove"](this.domNode,"esriGEReportPlayerPrintNode esriGEReportPlayer"),this._player.setPrintMode(e)},_chartAnimationAllowedMemo:void 0,_setAnimationSuspended:function(e){e?(this._chartAnimationAllowedMemo=this._viewModel.chartAnimationAllowed,this._viewModel.chartAnimationAllowed=!1):this._viewModel.chartAnimationAllowed=this._chartAnimationAllowedMemo},getCurrentReportContainer:function(){return this._player.getCurrentReportContainer()},getAllReportContainers:function(){return this._player.getAllReportContainers()},getFitParams:function(){return this._pageFitParams},getHeaderFooterParams:function(){return this._headerFooterParams},getDocumentOptions:function(){return this._pageSettings||this.getCurrentReportContainer().documentOptions},getSelectedCommandId:function(){return this._commandId},allowDataDrilling:function(){return this._allowDataDrilling},needExportAllAreas:function(){return this._exportAllAreas},getNumberOfPages:function(){return this._player.getNumberOfPages()},stop:function(){return this._rollBackPrintSettings()},_rollBackPrintSettings:function(){var e=this;return t(this._pageSettingsRollBackFunc&&this._pageSettingsRollBackFunc(),function(){return t(e._initRollBackFunc&&e._initRollBackFunc())})}})});