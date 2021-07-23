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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/keys","dojo/on","./Popup","dojo/i18n!../nls/main"],(function(e,t,s,i,o,n,l){return e(n,{baseClass:"jimu-popup jimu-message",declaredClass:"esri.dijit.analysis.customgp.common.dijit.Message",type:"message",message:"",autoHeight:!0,maxWidth:350,maxHeight:180,postMixInProperties:function(){this.content=this.message},_createTitleNode:function(){this.titleLabel&&(this.titleNode=s.create("div",{class:"title"},this.domNode),this.titleLabeNode=s.create("span",{class:"title-label jimu-float-leading",innerHTML:this.titleLabel||"&nbsp"},this.titleNode),this.closeBtnNode=s.create("div",{class:"close-btn jimu-float-trailing"},this.titleNode),this.own(o(this.closeBtnNode,"click",t.hitch(this,this.close))))},_preProcessing:function(){0===this.buttons.length&&this.buttons.push({label:l.common.ok,key:i.ENTER,onClick:t.hitch(this,this.close)})},_increaseZIndex:function(){s.setStyle(this.domNode,"zIndex",501),s.setStyle(this.overlayNode,"zIndex",500)}})}));