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

define(["dojo/_base/declare","./SimpleInfographic","./_DataDrillingSupport","./_DDSlideAnimationSupport","./_DDZoomAnimationSupport","./SimpleInfographicViewModes","../dataDrilling/DataDrillingAnimationTypes"],function(i,t,e,n,a,o,l){return i([t,e,n,a],{dataDrillingAnimationType:l.ZOOM,postCreate:function(){this.inherited(arguments),this._setViewMode(o.VIEW_MAIN)},_destroySections:function(){this._destroyDrillingSections(),this._destroyDrillingSectionsButtons(),this.inherited(arguments)},_createSection:function(i,t,e,n,a,o,l){var r=this.inherited(arguments);return this.viewModel.dynamicReportInfo&&this.viewModel.enableDataDrilling&&l&&this._addDataDrillingHandlers(r,r.getTables()[l.variableIndex]),r},_mode:null,_setViewMode:function(i,t,e){switch(this.dataDrillingAnimationType){case l.SLIDE:return this._showSlideTransition(i,t);case l.ZOOM:return this._showZoomTransition(i,t,e)}},getVisualState:function(){return{dataDrilling:this._mode===o.VIEW_DATA_DRILLING?this._getDataDrillingState():null}},setVisualState:function(i){i&&i.dataDrilling&&this._setDataDrillingState(i.dataDrilling)},onViewModeChanged:function(i){}})});