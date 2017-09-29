// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dijit/layout/BorderContainer","dijit/layout/ContentPane"],function(e,t,i){var n,o=function(){var e=document.createElement("detect").style;return""===e.flex||""===e.msFlex}();return n=o?e(null,{buildRendering:function(){this.templateString="<div class='esriHeadlineLayout esriHeadlineLayoutFlex'>"+this.templateString+"</div>",this.inherited(arguments)},_beforeFillContent:function(){for(var e=this.domNode.children,t=["esriHeadlineLayoutTop","esriHeadlineLayoutCenter","esriHeadlineLayoutBottom"],n=Math.min(3,e.length),o=0;n>o;o++)i.add(e[o],t[o]);this.inherited(arguments)},resize:function(){this.inherited(arguments)}}):e(null,{buildRendering:function(){this.templateString="<div><div class='esriHeadlineLayout'>"+this.templateString+"</div></div>",this.inherited(arguments)},_beforeFillContent:function(){var e=this.domNode.firstChild,n=e.children,o=["esriHeadlineLayoutTop","esriHeadlineLayoutCenter","esriHeadlineLayoutBottom"],a=Math.min(3,n.length);t.set(e,"data-dojo-type","dijit/layout/BorderContainer"),t.set(e,"data-dojo-attach-point","_bc"),t.set(e,"data-dojo-props","gutters:false");for(var r=["top","center","bottom"],d=0;a>d;d++)i.add(n[d],o[d]),t.set(n[d],"data-dojo-type","dijit/layout/ContentPane"),t.set(n[d],"data-dojo-props","region:'"+r[d]+"'");this.inherited(arguments)},resize:function(){this.inherited(arguments),this._bc.resize()}}),n.flexSupported=o,n});