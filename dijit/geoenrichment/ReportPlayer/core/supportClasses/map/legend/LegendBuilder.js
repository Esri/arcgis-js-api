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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect","dojo/dom-construct","dojo/dnd/Moveable","esri/dijit/Legend"],function(e,n,r,t,o){var d={},i=10,a=e(o,{_isSupportedLayerType:function(e){return!!(e&&"esri.layers.GraphicsLayer"===e.declaredClass&&e.renderer&&e.name&&e.graphics.length)||this.inherited(arguments)},_isLayerDrawingEnabled:function(e){return!(!e||"esri.layers.FeatureLayer"!==e.declaredClass||!e.renderer||"heatmap"!==e.renderer.type)||this.inherited(arguments)},_getServiceTitle:function(e){return e._titleForLegend=e._titleForLegend||e.name,this.inherited(arguments)}});return d.createLegend=function(e,o,d,s){function l(){u&&u.destroy(),u=null,s&&s.onDestroyed()}function c(){function d(){u.domNode&&(u.domNode.style.left=i+"px",u.domNode.style.top=o.clientHeight-u.domNode.clientHeight-i+"px",u.domNode.style.maxHeight=o.clientHeight-2*i+"px")}l(),u=new a({map:e,layerInfos:null},r.create("div",{class:"esriGEReportPlayer_mapLegend"},o)),u.startup(),u.own(e.on("before-unload",l));var c=new t(u.domNode);u.own(c),d(),u.own(n.after(u,"_createLegendForLayer",function(e){return setTimeout(d),e})),s&&s.onCreated(u)}var u;d&&(d.showLegend&&c(),d.onVisibilityChanged=function(){d.showLegend?c():l()})},d});