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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-style","dojox/charting/plot2d/Bars","dojox/charting/plot2d/Lines","../../charts/utils/plots/_TouchPlotEvents","../../charts/tooltips/ZoomSupportTooltip","esri/dijit/geoenrichment/infographicPanels/AgePyramid","./_SelectedFeatureControlMixin"],function(e,o,i,t,r,n,a,l,s,d){return e([s,d],{tooltipClass:l,infographicStyleProvider:null,_onThemeLoad:function(e){function r(e){t.set(e,"color",i.contains(e,"AgePyramid_TextMale")?n.male.backgroundColor:n.female.backgroundColor)}var n=this.infographicStyleProvider&&this.infographicStyleProvider.agePyramid;n&&(e=o.mixin({},e),e.male=e.male||{},e.male.fill=n.male.backgroundColor,e.female=e.female||{},e.female.fill=n.female.backgroundColor),this.inherited(arguments,[e]),n&&(r(this.min),r(this.max))},resize:function(){this.inherited(arguments);var e=this.min&&this.min.parentNode;if(e&&this.parent)for(var o=t.get(this.parent,"width")<400,r=0;r<e.children.length;r++){var n=e.children[r];i[o?"add":"remove"](n,"TrimWithEllipses")}},_getLinesPlot:function(){return e([n,a])},_getBarsPlot:function(){return e([r,a])}})});