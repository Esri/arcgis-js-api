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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","./_PrintSettingsSupport","../PlayerResizeModes","../PlayerViewModes"],function(e,n,t,i,o,r,a,l,s,u,d){return e(s,{domNode:null,_player:null,_viewModel:null,_visualState:null,_initRollBackFunc:null,_pageSettingsRollBackFunc:null,_pageSettings:null,_pageFitParams:null,_headerFooterParams:null,_allowDataDrilling:!1,_commandId:null,constructor:function(e,n){this._player=e,this._viewModel=n,this.domNode=e.printableDiv},initialize:function(e){var n=this;return this._commandId=e.commandId,i(function(){function o(){n._player.resizeMode===u.FIT_WINDOW?c=r.create("div",{innerHTML:n._player.domNode.innerHTML,class:"esriGEAbsoluteStretched esriGEReportPlayerPrintViewCopy"},n._player.printBackgroundView):(g=new t,e.onShowWaiting(g.promise))}function s(){var t=l.executeFunctions([function(){c&&r.destroy(c),g&&g.resolve(),a.showNodeFromBackground(n.domNode)},function(){n.getAllReportContainers().forEach(function(e,n){e.showPageAt&&e.showPageAt(p[n])})},function(){return n._setPrintMode(!1),n._setAnimationSuspended(!1),n._player.resize()},function(){if(_)return n._player.viewMode=_,n._player.refresh({rerenderContent:!0,waitUntilAllContentIsReady:!1})}],0);return e.onShowWaiting(t),t}var c,_,p=[];n._player.playerToolbar.closePopup(),n._setAnimationSuspended(!0);var g,m=i(function(){return l.executeFunctions([function(){o()},function(){if(n._player.viewMode!==d.FULL_PAGES)return _=n._player.viewMode,n._player.viewMode=d.FULL_PAGES,n._player.refresh({rerenderContent:!0,waitUntilAllContentIsReady:!0})},function(){return n._setPrintMode(!0),l.executeFunctions(n.getAllReportContainers().map(function(e,n){return function(){e.resetZoom&&e.resetZoom(),p[n]=e.getCurrentPageIndex&&e.getCurrentPageIndex(),e.showAllPages&&e.showAllPages(),e.collapseContent&&e.collapseContent()}}),0)},function(){a.hideNodeInBackground(n.domNode,"reportPlayerBeingPrinted")}],0)}(),function(){return n._initRollBackFunc=s,n._player.isContentLoading()});return e.onShowWaiting(m),m}(),function(){return i(n._checkPrintSettings(e),function(e){return"cancel"===e?null:n})})},_setPrintMode:function(e){o[e?"add":"remove"](this.domNode,"esriGEReportPlayerPrintNode esriGEReportPlayer"),this._player.setPrintMode(e)},_animationAllowedMemo:void 0,_setAnimationSuspended:function(e){e?(this._animationAllowedMemo=this._viewModel.animationAllowed,this._viewModel.animationAllowed=!1):this._viewModel.animationAllowed=this._animationAllowedMemo},getCurrentReportContainer:function(){return this._player.getCurrentReportContainer()},getAllReportContainers:function(){return this._player.getAllReportContainers()},getFitParams:function(){return this._pageFitParams},getHeaderFooterParams:function(){return this._headerFooterParams},getDocumentOptions:function(){return n.mixin({},this.getCurrentReportContainer().documentOptions,this._pageSettings)},getSelectedCommandId:function(){return this._commandId},allowDataDrilling:function(){return this._allowDataDrilling},getNumberOfPages:function(){return this._player.getNumberOfPages()},stop:function(){var e=this;return i(this._pageSettingsRollBackFunc&&this._pageSettingsRollBackFunc(),function(){return i(e._initRollBackFunc&&e._initRollBackFunc())})}})});