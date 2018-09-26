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

define(["dojo/_base/declare","dojo/Deferred","dojo/when","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","./_PrintSettingsSupport","../PlayerResizeModes","../PlayerViewModes"],function(e,n,t,o,i,r,a,l,u,s){return e(l,{domNode:null,_player:null,_viewModel:null,_visualState:null,_initRollBackFunc:null,_pageSettingsRollBackFunc:null,_pageSettings:null,_pageFitParams:null,_headerFooterParams:null,_allowDataDrilling:!1,_commandId:null,constructor:function(e,n){this._player=e,this._viewModel=n,this.domNode=e.printableDiv},initialize:function(e){var o=this;return this._commandId=e.commandId,t(function(){function l(){o._player.resizeMode===u.FIT_WINDOW?c=i.create("div",{innerHTML:o._player.domNode.innerHTML,class:"esriGEAbsoluteStretched esriGEReportPlayerPrintViewCopy"},o._player.printBackgroundView):(g=new n,e.onShowWaiting(g.promise))}function d(){var n=a.executeFunctions([function(){c&&i.destroy(c),g&&g.resolve(),r.showNodeFromBackground(o.domNode)},function(){o.getAllReportContainers().forEach(function(e,n){e.showPageAt&&e.showPageAt(p[n])})},function(){return o._setPrintMode(!1),o._setAnimationSuspended(!1),o._player.resize()},function(){if(_)return o._player.viewMode=_,o._player.refresh({rerenderContent:!0,waitUntilAllContentIsReady:!1})}],0);return e.onShowWaiting(n),n}var c,_,p=[];o._player.playerToolbar.closePopup(),o._setAnimationSuspended(!0);var g,m=t(function(){return a.executeFunctions([function(){l()},function(){if(o._player.viewMode!==s.FULL_PAGES)return _=o._player.viewMode,o._player.viewMode=s.FULL_PAGES,o._player.refresh({rerenderContent:!0,waitUntilAllContentIsReady:!0})},function(){return o._setPrintMode(!0),a.executeFunctions(o.getAllReportContainers().map(function(e,n){return function(){e.resetZoom&&e.resetZoom(),p[n]=e.getCurrentPageIndex&&e.getCurrentPageIndex(),e.showAllPages&&e.showAllPages(),e.collapseContent&&e.collapseContent()}}),0)},function(){r.hideNodeInBackground(o.domNode,"reportPlayerBeingPrinted")}],0)}(),function(){return o._initRollBackFunc=d,o._player.isContentLoading()});return e.onShowWaiting(m),m}(),function(){return t(o._checkPrintSettings(e),function(e){return"cancel"===e?null:o})})},_setPrintMode:function(e){o[e?"add":"remove"](this.domNode,"esriGEReportPlayerPrintNode esriGEReportPlayer"),this._player.setPrintMode(e)},_animationAllowedMemo:void 0,_setAnimationSuspended:function(e){e?(this._animationAllowedMemo=this._viewModel.animationAllowed,this._viewModel.animationAllowed=!1):this._viewModel.animationAllowed=this._animationAllowedMemo},getCurrentReportContainer:function(){return this._player.getCurrentReportContainer()},getAllReportContainers:function(){return this._player.getAllReportContainers()},getFitParams:function(){return this._pageFitParams},getHeaderFooterParams:function(){return this._headerFooterParams},getDocumentOptions:function(){return this._pageSettings||this.getCurrentReportContainer().documentOptions},getSelectedCommandId:function(){return this._commandId},allowDataDrilling:function(){return this._allowDataDrilling},getNumberOfPages:function(){return this._player.getNumberOfPages()},stop:function(){var e=this;return t(this._pageSettingsRollBackFunc&&this._pageSettingsRollBackFunc(),function(){return t(e._initRollBackFunc&&e._initRollBackFunc())})}})});