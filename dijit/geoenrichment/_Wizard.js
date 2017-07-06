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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dijit/_WidgetBase","dojo/dom-construct","./AnimationHelper"],function(e,t,i,n,s){var r=e("esri.dijit.geoenrichment._Wizard",i,{currentPage:null,currentPageId:null,_anim:null,pages:null,stacking:"stretch",constructor:function(){this.pages={},this._anim=new s},buildRendering:function(){this.domNode=n.create("div",{"class":"_Wizard_Root"})},loadPage:function(e){var i=this.pages[e],s=this.currentPage;i!==s&&(this._anim.finish(),s&&this._animPage("Anim_FadeOut").then(t.hitch(this.domNode,"removeChild",s.domNode)),this.currentPage=i,this.currentPageId=e,n.place(this.currentPage.domNode,this.domNode,"first"),s&&this._animPage("Anim_FadeIn"),i._started||(i.set("stacking",this.stacking),i.startup()),i.resize())},_animPage:function(e){return this._anim.start([{node:this.currentPage.domNode,classes:[e,"Wizard_FadeAnim"]}])},resize:function(){this.currentPage&&this.currentPage.resize()},destroy:function(){for(var e in this.pages)this.hasOwnProperty(e)&&this.pages[e].destroyRecursive();this.pages={},this.inherited(arguments)}});return r});