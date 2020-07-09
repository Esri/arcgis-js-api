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

define(["dojo/_base/declare","dojo/aspect","dojo/dom-construct","dojo/dnd/Moveable","esri/dijit/Legend","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil"],(function(e,n,t,r,o,i,d){var a={},s=e(o,{_isSupportedLayerType:function(e){return!!(e&&"esri.layers.GraphicsLayer"===e.declaredClass&&e.renderer&&e.name&&e.graphics.length)||(!e||!e.isLabelsLayer)&&this.inherited(arguments)},_isLayerDrawingEnabled:function(e){return!(!e||"esri.layers.FeatureLayer"!==e.declaredClass||!e.renderer||"heatmap"!==e.renderer.type)||this.inherited(arguments)},_getServiceTitle:function(e){return e._titleForLegend=e._titleForLegend||e.name,this.inherited(arguments)}});return a.createLegend=function(o,a,l,c){var u;function h(){u&&u.destroy(),u=null,c&&c.onDestroyed()}function f(){if(h(),i.isNodeInLayout(a)){(u=new s({map:o,layerInfos:null},t.create("div",{class:"esriGEReportPlayer_mapLegend"},a))).startup(),u.own(o.on("before-unload",h));var l=new(e(r,{onMouseDown:function(){for(var e,n=0,t=u.domNode.childNodes.length;n<t;n++)if(d.isMouseOver(u.domNode.childNodes[n])){e=!0;break}e&&this.inherited(arguments)}}))(u.domNode);u.own(l),f(),u.own(n.after(u,"_createLegendForLayer",(function(e){return setTimeout(f),e}))),c&&c.onCreated(u)}function f(){if(u.domNode){u.domNode.style.left="10px";var e=a.clientHeight-20;u.domNode.style.maxHeight=e+"px",u.domNode.style.top=a.clientHeight-Math.min(e,u.domNode.clientHeight)-10+"px"}}}l&&(l.showLegend&&f(),l.addCallback((function(){l.showLegend?f():h()}),"legendBuilder"))},a}));