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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","./SimpleInfographic","./_DataDrillingSupport","./SimpleInfographicViewModes","./dataDrillingAnimators/InsidePanelSlideAnimator","./dataDrillingAnimators/FullScreenZoomAnimator"],(function(i,e,n,t,a,o,l,r){return i([t,a],{_animator:null,postCreate:function(){var i=this;this.inherited(arguments),this.viewModel.showDataDrillingInsidePanel?this._animator=new l({dataDrillingViewDiv:this.dataDrillingViewDiv,drilledDataViewDiv:this.drilledDataViewDiv,drilledDataViewDivScaler:this.drilledDataViewDivScaler,mainViewDiv:this.mainViewDiv,domNode:this.domNode,getDataDrillingPanelDimensions:function(){return i._getDataDrillingPanelDimensions()},getSection:function(){return i._drillingSections[0]}}):this._animator=new r(e.mixin(this._getAnimatorParameters(),{isMouseOver:function(){return i._drillingSections[0].isMouseOver()},getDataDrillingPanelDimensions:function(e){return i._getDataDrillingPanelDimensions(e)},onExitDataDrilling:function(){i._setViewMode(o.VIEW_MAIN,!0)}})),this._animator.destroy&&this.own(this._animator),this._setViewMode(o.VIEW_MAIN)},_getAnimatorParameters:function(){return{dataDrillingViewDiv:this.dataDrillingViewDiv,domNode:this.domNode,ddZoomScreenClass:null,closeZoomedDDWhenClickedOutside:!0,closeZoomedDDOnEsc:!0,zIndex:null}},_destroySections:function(){this._destroyDrillingSections(),this._destroyDrillingSectionsButtons(),this.inherited(arguments)},_createSection:function(i,e,n,t,a,o,l){var r=this.inherited(arguments);return this.viewModel.dynamicReportInfo&&this.viewModel.enableDataDrilling&&l&&this._addDataDrillingHandlers(r,r.getTables()[l.variableIndex]),r},_mode:null,_isAnimationRunning:!1,_setViewMode:function(i,e,t,a){if(this._mode!==i&&!this._isAnimationRunning){e&&this.viewModel.setBenchmarkDisabled&&this.viewModel.setBenchmarkDisabled(i===o.VIEW_DATA_DRILLING),this._isAnimationRunning=!0;var l=i===o.VIEW_DATA_DRILLING;return n(this._animator.play(l,e,t,a),function(){this._isAnimationRunning=!1,this._mode=i,this.onViewModeChanged(i)}.bind(this))}},getVisualState:function(){return this._mode===o.VIEW_DATA_DRILLING?{type:this._currentInfographicJson.type,dataDrilling:this._getDataDrillingState()}:null},setVisualState:function(i){if(i)return i.dataDrilling?this._setDataDrillingState(i.dataDrilling):void 0},onViewModeChanged:function(i){}})}));