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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./templates/LoadingShelter.html","dojo/i18n!../nls/main","dojo/_base/html"],(function(e,i,t,d,o,s){return e([i,t],{baseClass:"jimu-loading-shelter",declaredClass:"esri.dijit.analysis.customgp.common.dijit.LoadingShelter",templateString:d,loadingText:null,hidden:!1,showLoading:!0,postMixInProperties:function(){this.nls=o.loadingShelter},postCreate:function(){this.inherited(arguments),this.hidden&&s.setStyle(this.domNode,"display","none"),s.setStyle(this.domNode,{width:"100%",height:"100%"}),this.showLoading||s.setStyle(this.loadingNode,"display","none"),"string"==typeof this.loadingText&&(this.textNode.innerHTML=this.loadingText)},show:function(e){this.domNode&&this.hidden&&("string"==typeof e&&(this.textNode.innerHTML=e),s.setStyle(this.domNode,"display","block"),this.hidden=!1)},hide:function(){this.domNode&&(this.hidden||(s.setStyle(this.domNode,"display","none"),this.hidden=!0))}})}));