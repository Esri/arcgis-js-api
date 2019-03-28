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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","./SimpleInfographic","./_DataDrillingSupport","./SimpleInfographicViewModes","./dataDrillingAnimators/InsidePanelSlideAnimator","./dataDrillingAnimators/FullScreenZoomAnimator"],function(i,n,t,e,a,o,l,r){return i([e,a],{_animator:null,postCreate:function(){var i=this;this.inherited(arguments),this.viewModel.showDataDrillingInsidePanel?this._animator=new l({dataDrillingViewDiv:this.dataDrillingViewDiv,drilledDataViewDiv:this.drilledDataViewDiv,drilledDataViewDivScaler:this.drilledDataViewDivScaler,mainViewDiv:this.mainViewDiv,domNode:this.domNode,getDataDrillingPanelDimensions:function(){return i._getDataDrillingPanelDimensions()},getSection:function(){return i._drillingSections[0]}}):this._animator=new r(n.mixin(this._getAnimatorParameters(),{isMouseOver:function(){return i._drillingSections[0].isMouseOver()},getDataDrillingPanelDimensions:function(){return i._getDataDrillingPanelDimensions()},onExitDataDrilling:function(){i._setViewMode(o.VIEW_MAIN,!0)}})),this._animator.destroy&&this.own(this._animator),this._setViewMode(o.VIEW_MAIN)},_getAnimatorParameters:function(){return{dataDrillingViewDiv:this.dataDrillingViewDiv,domNode:this.domNode,ddZoomScreenClass:null,closeZoomedDDWhenClickedOutside:!0,closeZoomedDDOnEsc:!0,zIndex:null}},_destroySections:function(){this._destroyDrillingSections(),this._destroyDrillingSectionsButtons(),this.inherited(arguments)},_createSection:function(i,n,t,e,a,o,l){var r=this.inherited(arguments);return this.viewModel.dynamicReportInfo&&this.viewModel.enableDataDrilling&&l&&this._addDataDrillingHandlers(r,r.getTables()[l.variableIndex]),r},_mode:null,_isAnimationRunning:!1,_setViewMode:function(i,n,e){if(this._mode!==i&&!this._isAnimationRunning){this._isAnimationRunning=!0;var a=i===o.VIEW_DATA_DRILLING;return t(this._animator.play(a,n,e),function(){this._isAnimationRunning=!1,this._mode,this.onViewModeChanged(i)}.bind(this))}},getVisualState:function(){return{dataDrilling:this._mode===o.VIEW_DATA_DRILLING?this._getDataDrillingState():null}},setVisualState:function(i){i&&i.dataDrilling&&this._setDataDrillingState(i.dataDrilling)},onViewModeChanged:function(i){}})});