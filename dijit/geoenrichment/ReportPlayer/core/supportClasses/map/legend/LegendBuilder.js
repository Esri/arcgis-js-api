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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect","dojo/dom-construct","dojo/dnd/Moveable","esri/dijit/Legend","esri/dijit/geoenrichment/utils/MouseUtil"],function(e,n,r,t,o,i){var d={},a=10,s=e(o,{_isSupportedLayerType:function(e){return!!(e&&"esri.layers.GraphicsLayer"===e.declaredClass&&e.renderer&&e.name&&e.graphics.length)||(!e||!e.isLabelsLayer)&&this.inherited(arguments)},_isLayerDrawingEnabled:function(e){return!(!e||"esri.layers.FeatureLayer"!==e.declaredClass||!e.renderer||"heatmap"!==e.renderer.type)||this.inherited(arguments)},_getServiceTitle:function(e){return e._titleForLegend=e._titleForLegend||e.name,this.inherited(arguments)}});return d.createLegend=function(o,d,l,c){function u(){f&&f.destroy(),f=null,c&&c.onDestroyed()}function h(){function l(){if(f.domNode){f.domNode.style.left=a+"px";var e=d.clientHeight-2*a;f.domNode.style.maxHeight=e+"px",f.domNode.style.top=d.clientHeight-Math.min(e,f.domNode.clientHeight)-a+"px"}}u(),f=new s({map:o,layerInfos:null},r.create("div",{class:"esriGEReportPlayer_mapLegend"},d)),f.startup(),f.own(o.on("before-unload",u));var h=e(t,{onMouseDown:function(){for(var e,n=0,r=f.domNode.childNodes.length;n<r;n++)if(i.isMouseOver(f.domNode.childNodes[n])){e=!0;break}e&&this.inherited(arguments)}}),g=new h(f.domNode);f.own(g),l(),f.own(n.after(f,"_createLegendForLayer",function(e){return setTimeout(l),e})),c&&c.onCreated(f)}var f;l&&(l.showLegend&&h(),l.onVisibilityChanged=function(){l.showLegend?h():u()})},d});