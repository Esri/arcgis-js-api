// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","esri/dijit/geoenrichment/Infographic","./_AgePyramid","./_RelatedVariables","./_OneVar","./_Tapestry","./_Prizm5","../InfographicTypes"],(function(e,t,i,s,r,d,n,o,a,h){var l={};return l[h.ONE_VAR]=n,l[h.AGE_PYRAMID]=r,l[h.RELATED_VARS]=d,l[h.TAPESTRY]=o,l[h.PRIZM5]=a,e(s,{documentStyleProvider:null,infographicStyleProvider:null,chartStyleProvider:null,widgetParams:null,_requireReport:function(){this.type&&l[this.type]&&this._createReportWidget(this.type,l[this.type])},_createReportWidget:function(e,s){var r=this;if(!this._destroyed&&this.type===e)if(this._ge&&this._ge.isBusy())i.once(this._ge,"end",t.hitch(this,this._createReportWidget,this.type,s));else if(this._autoTitlePromise)this._autoTitlePromise.then(t.hitch(this,this._createReportWidget,this.type,s));else if(this.type){var d=this._widget=new s(this.domNode);t.mixin(d,this.widgetParams),d.onExpandedStateChanged=function(){r.onExpandedStateChanged()},d.onSelectedFeatureChanged=function(){r.onSelectedFeatureChanged()},d.documentStyleProvider=this.documentStyleProvider,d.infographicStyleProvider=this.infographicStyleProvider,d.chartStyleProvider=this.chartStyleProvider,d.title="string"==typeof this.title?this.title:this._autoTitle,d.subtitle=this.subtitle,d.expanded=this.expanded,d.parentInfographic=this,d.on("resize",t.hitch(this,this._onResize)),isNaN(this._lastSelectedComparison)||d.setState({selectedComparison:this._lastSelectedComparison}),d.setDataProvider(this.dataProvider),this._createWidgetDfd&&this._createWidgetDfd.resolve(),this._createWidgetDfd=null,this.onWidgetCreated()}},collapseContent:function(){this._widget&&this._widget.collapseContent&&this._widget.collapseContent()},getSelectedFeatureID:function(){return this._widget&&this._widget.getSelectedFeatureID&&this._widget.getSelectedFeatureID()},setSelectedFeatureID:function(e){this._widget&&this._widget.setSelectedFeatureID&&this._widget.setSelectedFeatureID(e)},onWidgetCreated:function(){},onExpandedStateChanged:function(){},onSelectedFeatureChanged:function(){}})}));