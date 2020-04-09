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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-style","dojox/charting/plot2d/Bars","dojox/charting/plot2d/Lines","../../charts/utils/plots/_TouchPlotEvents","../../charts/tooltips/ZoomSupportTooltip","esri/dijit/geoenrichment/infographicPanels/AgePyramid","./_SelectedFeatureControlMixin"],(function(e,i,o,t,r,n,a,l,s,d){return e([s,d],{tooltipClass:l,infographicStyleProvider:null,_onThemeLoad:function(e){var r=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;if(r&&((e=i.mixin({},e)).male=e.male||{},e.male.fill=r.male.backgroundColor,e.female=e.female||{},e.female.fill=r.female.backgroundColor),this.inherited(arguments,[e]),r){function n(e){t.set(e,"color",o.contains(e,"AgePyramid_TextMale")?r.male.backgroundColor:r.female.backgroundColor)}n(this.min),n(this.max)}},resize:function(){this.inherited(arguments);var e=this.min&&this.min.parentNode;if(e&&this.parent)for(var i=t.get(this.parent,"width")<400,r=0;r<e.children.length;r++){var n=e.children[r];o[i?"add":"remove"](n,"TrimWithEllipses")}},_getLinesPlot:function(){return e([n,a])},_getBarsPlot:function(){return e([r,a])}})}));