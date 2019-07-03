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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/declare","dojo/_base/lang","dojo/dom-construct","dijit/_WidgetBase","./utils/animation/AnimationHelper"],function(e,i,t,n,s){return e("esri.dijit.geoenrichment._Wizard",n,{currentPage:null,currentPageId:null,_anim:null,pages:null,stacking:"stretch",constructor:function(){this.pages={},this._anim=new s},buildRendering:function(){this.domNode=t.create("div",{class:"_Wizard_Root"})},loadPage:function(e){var n=this.pages[e],s=this.currentPage;n!==s&&(this._anim.finish(),s&&this._animPage("Anim_FadeOut").then(i.hitch(this.domNode,"removeChild",s.domNode)),this.currentPage=n,this.currentPageId=e,t.place(this.currentPage.domNode,this.domNode,"first"),s&&this._animPage("Anim_FadeIn"),n._started||(n.set("stacking",this.stacking),n.startup()),n.resize())},_animPage:function(e){return this._anim.start([{node:this.currentPage.domNode,classes:[e,"Wizard_FadeAnim"]}])},resize:function(){this.currentPage&&this.currentPage.resize()},destroy:function(){for(var e in this.pages)this.hasOwnProperty(e)&&this.pages[e].destroyRecursive();this.pages={},this.inherited(arguments)}})});