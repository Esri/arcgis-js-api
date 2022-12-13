// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-style","dojox/charting/plot2d/Bars","dojox/charting/plot2d/Lines","../../charts/utils/plots/_TouchPlotEvents","../../charts/tooltips/ZoomSupportTooltip","esri/dijit/geoenrichment/infographicPanels/AgePyramid","./_SelectedFeatureControlMixin"],(function(e,t,i,o,r,n,l,a,s,h){return e([s,h],{tooltipClass:a,infographicStyleProvider:null,chartStyleProvider:null,_onThemeLoad:function(e){var o=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;if(o&&((e=t.mixin({},e)).male=e.male||{},e.male.fill=o.male.backgroundColor,e.female=e.female||{},e.female.fill=o.female.backgroundColor,e.tooltip=this.chartStyleProvider&&this.chartStyleProvider.tooltip),this.inherited(arguments,[e]),o){var r=function(e,t){e.style.color=t?o.male.backgroundColor:o.female.backgroundColor};this.min&&r(this.min,i.contains(this.min,"AgePyramid_TextMale")),this.max&&r(this.max,i.contains(this.max,"AgePyramid_TextMale")),this._menLabel&&r(this._menLabel,!0),this._womenLabel&&r(this._womenLabel,!1)}},resize:function(){this.inherited(arguments);var e=this.min&&this.min.parentNode;if(e&&this.parent)for(var t=o.get(this.parent,"width")<400,r=0;r<e.children.length;r++){var n=e.children[r];i[t?"add":"remove"](n,"TrimWithEllipses")}},_getLinesPlot:function(){return e([n,l])},_getBarsPlot:function(){return e([r,l])},_getTooltip:function(){var e=this.inherited(arguments);return{node:e,style:this._currentTheme.tooltip}}})}));