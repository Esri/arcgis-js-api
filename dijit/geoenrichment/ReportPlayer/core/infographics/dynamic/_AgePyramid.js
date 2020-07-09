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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-style","dojox/charting/plot2d/Bars","dojox/charting/plot2d/Lines","../../charts/utils/plots/_TouchPlotEvents","../../charts/tooltips/ZoomSupportTooltip","esri/dijit/geoenrichment/infographicPanels/AgePyramid","./_SelectedFeatureControlMixin"],(function(e,i,t,o,n,a,r,l,s,h){return e([s,h],{tooltipClass:l,infographicStyleProvider:null,_onThemeLoad:function(e){var o=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;if(o&&((e=i.mixin({},e)).male=e.male||{},e.male.fill=o.male.backgroundColor,e.female=e.female||{},e.female.fill=o.female.backgroundColor),this.inherited(arguments,[e]),o){function n(e,i){e.style.color=i?o.male.backgroundColor:o.female.backgroundColor}this.min&&n(this.min,t.contains(this.min,"AgePyramid_TextMale")),this.max&&n(this.max,t.contains(this.max,"AgePyramid_TextMale")),this._menLabel&&n(this._menLabel,!0),this._womenLabel&&n(this._womenLabel,!1)}},resize:function(){this.inherited(arguments);var e=this.min&&this.min.parentNode;if(e&&this.parent)for(var i=o.get(this.parent,"width")<400,n=0;n<e.children.length;n++){var a=e.children[n];t[i?"add":"remove"](a,"TrimWithEllipses")}},_getLinesPlot:function(){return e([a,r])},_getBarsPlot:function(){return e([n,r])}})}));