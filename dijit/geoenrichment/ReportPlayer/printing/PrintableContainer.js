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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","./_PrintSettingsSupport","../PlayerResizeModes","../PlayerViewModes","./VisualStateConverter"],function(e,t,n,o,i,r,a,l,s,u,c,d){return e(s,{domNode:null,_player:null,_viewModel:null,_initRollBackFunc:null,_pageSettingsRollBackFunc:null,_pageSettings:null,_pageFitParams:null,_headerFooterParams:null,_allowDataDrilling:!1,_allowFallbackMaps:!1,_commandId:null,constructor:function(e,t){this._player=e,this._viewModel=t,this.domNode=e.printableDiv},initialize:function(e){var t=this;return this._commandId=e.commandId,o(function(){function i(){t._player.resizeMode===u.FIT_WINDOW?p=r.create("div",{innerHTML:t._player.domNode.innerHTML,class:"esriGEAbsoluteStretched esriGEReportPlayerPrintViewCopy"},t._player.printBackgroundView):(m=new n,e.onShowWaiting(m.promise))}function s(){var n=l.executeFunctions([function(){p&&r.destroy(p),m&&m.resolve(),a.showNodeFromBackground(t.domNode)},function(){t.getAllReportContainers().forEach(function(e,t){e.showPageAt&&e.showPageAt(g[t])})},function(){return t._setPrintMode(!1),t._setAnimationSuspended(!1),t._player.resize()},function(){if(_)return t._player.viewMode=_,t._player.refresh({waitUntilAllContentIsReady:!1})}],0);return e.onShowWaiting(n),n}var p,_,g=[];t._player.playerToolbar.closePopup(),t._setAnimationSuspended(!0);var m,h=o(function(){return l.executeFunctions([function(){i()},function(){if(t._player.viewMode!==c.FULL_PAGES){_=t._player.viewMode;var e=t._player.getVisualState();return t._player.viewMode=c.FULL_PAGES,o(t._player.refresh({waitUntilAllContentIsReady:!0}),function(){return t._player.setVisualState(d.convertToFullPages(e,t._player.getReportData().templateJson))})}},function(){return t._setPrintMode(!0),l.executeFunctions(t.getAllReportContainers().map(function(e,t){return function(){e.resetZoom&&e.resetZoom(),g[t]=e.getCurrentPageIndex&&e.getCurrentPageIndex(),e.showAllPages&&e.showAllPages(),e.collapseContent&&e.collapseContent()}}),0)},function(){a.hideNodeInBackground(t.domNode,"reportPlayerBeingPrinted")}],0)}(),function(){return t._initRollBackFunc=s,t._player.getRenderPromise()});return e.onShowWaiting(h),h}(),function(){return o(t._checkPrintSettings(e),function(e){return"cancel"===e?null:t})})},_setPrintMode:function(e){i[e?"add":"remove"](this.domNode,"esriGEReportPlayerPrintNode esriGEReportPlayer"),this._player.setPrintMode(e)},_animationAllowedMemo:void 0,_setAnimationSuspended:function(e){e?(this._animationAllowedMemo=this._viewModel.animationAllowed,this._viewModel.animationAllowed=!1):this._viewModel.animationAllowed=this._animationAllowedMemo},getCurrentReportContainer:function(){return this._player.getCurrentReportContainer()},getAllReportContainers:function(){return this._player.getAllReportContainers()},getFitParams:function(){return this._pageFitParams},getHeaderFooterParams:function(){return this._headerFooterParams},getDocumentOptions:function(){return t.mixin({},this.getCurrentReportContainer().documentOptions,this._pageSettings)},getSelectedCommandId:function(){return this._commandId},allowDataDrilling:function(){return this._allowDataDrilling},allowFallbackMaps:function(){return this._allowFallbackMaps},getNumberOfPages:function(){return this._player.getNumberOfPages()},stop:function(){var e=this;return o(this._pageSettingsRollBackFunc&&this._pageSettingsRollBackFunc(),function(){return o(e._initRollBackFunc&&e._initRollBackFunc())})}})});