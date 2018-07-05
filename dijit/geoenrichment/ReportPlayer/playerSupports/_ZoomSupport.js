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

define(["dojo/_base/declare","dojo/aspect","dojo/when","../PlayerResizeModes","../PlayerViewModes","../PlayerZoomBehaviors"],function(o,t,e,n,i,r){return o(null,{_initZoomControls:function(){var o=this;this.playerToolbar.onZoomToFitPage=function(){o.getCurrentReportContainer().zoomToFitPage({showAnimation:!0})},this.playerToolbar.onZoomToFitPageWidth=function(){o.getCurrentReportContainer().zoomToFitPageWidth({showAnimation:!0})},this.playerToolbar.onSetZoomPercent=function(t){o.getCurrentReportContainer().setZoomPercent(t,{showAnimation:!0})},this.playerToolbar.setZoomSupportsInfo(this._getZoomSupportsInfo())},setBestZoom:function(){this._callZoomMethod("setBestZoom")},zoomToFitPage:function(){this._callZoomMethod("zoomToFitPage")},zoomToFitPageWidth:function(){this._callZoomMethod("zoomToFitPageWidth")},resetZoom:function(){this._callZoomMethod("resetZoom")},_callZoomMethod:function(o){if(this._getZoomSupportsInfo().supported){var t=this.getCurrentReportContainer();t&&t[o]&&t[o]()}},_getZoomSupportsInfo:function(){var o={supported:!1,canFitPage:!1,canFitPageWidth:!1};return this.viewMode!==i.PANELS_IN_SLIDES&&(o.supported=!0,this.resizeMode!==n.AUTO&&(o.canFitPage=this.viewMode!==i.PANELS_IN_STACK,o.canFitPageWidth=!0)),o},_updateZoomControls:function(){this._connectZoomToCurrentContainer(),this._applyDefaultZoomBehavior()},_reportContainerZoomChangedHandle:null,_connectZoomToCurrentContainer:function(){var o=this.getCurrentReportContainer();this._reportContainerZoomChangedHandle&&this._reportContainerZoomChangedHandle.remove(),this._reportContainerZoomChangedHandle=o&&t.after(o,"onZoomChanged",function(){var o=this.getCurrentReportContainer();o&&o.getZoomInfo&&this.playerToolbar.setZoomInfo(this.getCurrentReportContainer().getZoomInfo()),this._updatePageNavigator(),this.playerToolbar.update()}.bind(this)),o&&o.own(this._reportContainerZoomChangedHandle)},_applyDefaultZoomBehavior:function(){var o=this._getZoomSupportsInfo();o.supported&&o.canFitPage&&this.defaultZoomBehavior===r.FIT_PAGE?this.zoomToFitPage():o.supported&&o.canFitPageWidth&&this.defaultZoomBehavior===r.FIT_PAGE_WIDTH?this.zoomToFitPageWidth():this.resetZoom()}})});