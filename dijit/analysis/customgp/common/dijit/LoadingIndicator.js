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

define(["dojo/_base/declare","dijit/_WidgetBase","dojo/dom-style","dojo/dom-construct"],(function(d,i,o,e){return d(i,{baseClass:"jimu-loading-indicator",declaredClass:"esri.dijit.analysis.customgp.common.dijit.LoadingIndicator",hidden:!1,postCreate:function(){this.inherited(arguments),this.hidden=!0===this.hidden,this.hidden&&o.set(this.domNode,{display:"none"}),o.set(this.domNode,{width:"100%",height:"100%"});var d='<div class"jimu-loading"></div>';e.place(d,this.domNode)},show:function(){this.domNode&&o.set(this.domNode,"display","block")},hide:function(){this.domNode&&o.set(this.domNode,"display","none")}})}));