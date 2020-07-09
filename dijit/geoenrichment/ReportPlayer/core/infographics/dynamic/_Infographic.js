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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","esri/dijit/geoenrichment/Infographic","./_AgePyramid","./_RelatedVariables","./_OneVar","./_Tapestry","./_Prizm5","../InfographicTypes"],(function(e,t,i,s,n,d,o,r,h,a){var c={};return c[a.ONE_VAR]=o,c[a.AGE_PYRAMID]=n,c[a.RELATED_VARS]=d,c[a.TAPESTRY]=r,c[a.PRIZM5]=h,e(s,{documentStyleProvider:null,infographicStyleProvider:null,widgetParams:null,_requireReport:function(){this.type&&(c[this.type]?this._createReportWidget(this.type,c[this.type]):require([this._getAbsMid("./"+this.type)],t.hitch(this,this._createReportWidget,this.type)))},_createReportWidget:function(e,s){var n=this;if(!this._destroyed&&this.type===e)if(this._ge&&this._ge.isBusy())i.once(this._ge,"end",t.hitch(this,this._createReportWidget,this.type,s));else if(this._autoTitlePromise)this._autoTitlePromise.then(t.hitch(this,this._createReportWidget,this.type,s));else if(this.type){var d=this._widget=new s(this.domNode);t.mixin(d,this.widgetParams),d.onExpandedStateChanged=function(){n.onExpandedStateChanged()},d.onSelectedFeatureChanged=function(){n.onSelectedFeatureChanged()},d.documentStyleProvider=this.documentStyleProvider,d.infographicStyleProvider=this.infographicStyleProvider,d.title="string"==typeof this.title?this.title:this._autoTitle,d.subtitle=this.subtitle,d.expanded=this.expanded,d.parentInfographic=this,d.on("resize",t.hitch(this,this._onResize)),isNaN(this._lastSelectedComparison)||d.setState({selectedComparison:this._lastSelectedComparison}),d.setDataProvider(this.dataProvider),this.onWidgetCreated()}},collapseContent:function(){this._widget&&this._widget.collapseContent&&this._widget.collapseContent()},getSelectedFeatureID:function(){return this._widget&&this._widget.getSelectedFeatureID&&this._widget.getSelectedFeatureID()},setSelectedFeatureID:function(e){this._widget&&this._widget.setSelectedFeatureID&&this._widget.setSelectedFeatureID(e)},onWidgetCreated:function(){},onExpandedStateChanged:function(){},onSelectedFeatureChanged:function(){}})}));