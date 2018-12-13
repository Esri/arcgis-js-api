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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","esri/dijit/geoenrichment/Infographic","./_AgePyramid","./_RelatedVariables","./_OneVar","./_Tapestry","../InfographicTypes"],function(e,t,i,s,n,h,a,r,d){var o={};return o[d.ONE_VAR]=a,o[d.AGE_PYRAMID]=n,o[d.RELATED_VARS]=h,o[d.TAPESTRY]=r,e(s,{infographicStyleProvider:null,widgetParams:null,_requireReport:function(){this.type&&(o[this.type]?this._createReportWidget(this.type,o[this.type]):require([this._getAbsMid("./"+this.type)],t.hitch(this,this._createReportWidget,this.type)))},_createReportWidget:function(e,s){var n=this;if(!this._destroyed&&this.type===e){if(this._ge&&this._ge.isBusy())return void i.once(this._ge,"end",t.hitch(this,this._createReportWidget,this.type,s));if(this._autoTitlePromise)return void this._autoTitlePromise.then(t.hitch(this,this._createReportWidget,this.type,s));if(this.type){var h=this._widget=new s(this.domNode);t.mixin(h,this.widgetParams),h.onExpandedStateChanged=function(){n.onExpandedStateChanged()},h.onSelectedFeatureChanged=function(){n.onSelectedFeatureChanged()},h.infographicStyleProvider=this.infographicStyleProvider,h.title="string"==typeof this.title?this.title:this._autoTitle,h.subtitle=this.subtitle,h.expanded=this.expanded,h.parentInfographic=this,h.on("resize",t.hitch(this,this._onResize)),isNaN(this._lastSelectedComparison)||h.setState({selectedComparison:this._lastSelectedComparison}),h.setDataProvider(this.dataProvider)}}},collapseContent:function(){this._widget&&this._widget.collapseContent&&this._widget.collapseContent()},getSelectedFeatureID:function(){return this._widget&&this._widget.getSelectedFeatureID&&this._widget.getSelectedFeatureID()},setSelectedFeatureID:function(e){this._widget&&this._widget.setSelectedFeatureID&&this._widget.setSelectedFeatureID(e)},onExpandedStateChanged:function(){},onSelectedFeatureChanged:function(){}})});