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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","esri/dijit/geoenrichment/Infographic","./_AgePyramid","./_RelatedVariables","./_OneVar","./_Tapestry","../InfographicTypes"],function(t,e,i,s,h,r,a,n,o){var d={};return d[o.ONE_VAR]=a,d[o.AGE_PYRAMID]=h,d[o.RELATED_VARS]=r,d[o.TAPESTRY]=n,t(s,{infographicStyleProvider:null,widgetParams:null,_requireReport:function(){this.type&&(d[this.type]?this._createReportWidget(this.type,d[this.type]):require([this._getAbsMid("./"+this.type)],e.hitch(this,this._createReportWidget,this.type)))},_createReportWidget:function(t,s){var h=this;if(!this._destroyed&&this.type===t){if(this._ge&&this._ge.isBusy())return void i.once(this._ge,"end",e.hitch(this,this._createReportWidget,this.type,s));if(this._autoTitlePromise)return void this._autoTitlePromise.then(e.hitch(this,this._createReportWidget,this.type,s));if(this.type){var r=this._widget=new s(this.domNode);e.mixin(r,this.widgetParams),r.onExpandedStateChanged=function(){h.onExpandedStateChanged()},r.infographicStyleProvider=this.infographicStyleProvider,r.title="string"==typeof this.title?this.title:this._autoTitle,r.subtitle=this.subtitle,r.expanded=this.expanded,r.parentInfographic=this,r.on("resize",e.hitch(this,this._onResize)),isNaN(this._lastSelectedComparison)||r.setState({selectedComparison:this._lastSelectedComparison}),r.setDataProvider(this.dataProvider)}}},collapseContent:function(){this._widget&&this._widget.collapseContent&&this._widget.collapseContent()},getSelectedFeatureID:function(){return this._widget&&this._widget.getSelectedFeatureID&&this._widget.getSelectedFeatureID()},setSelectedFeatureID:function(t){this._widget&&this._widget.setSelectedFeatureID&&this._widget.setSelectedFeatureID(t)},onExpandedStateChanged:function(){}})});