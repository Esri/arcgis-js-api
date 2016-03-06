// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/on","dijit/_WidgetBase","dojo/dom-construct","dijit/layout/ContentPane","./AnimationHelper"],function(t,e,i,n,a,r,s){var o=t("esri.dijit.geoenrichment._Wizard",[n],{_currentPage:null,_anim:null,pages:null,stacking:"stretch",constructor:function(){this.pages={},this._anim=new s},buildRendering:function(){this.domNode=a.create("div",{"class":"_Wizard_Root"})},loadPage:function(t){var i=this.pages[t],n=this._currentPage;i!==n&&(this._anim.finish(),n&&this._animPage("Anim_FadeOut").then(e.hitch(this.domNode,"removeChild",n.domNode)),this._currentPage=i,this.domNode.appendChild(this._currentPage.domNode),n&&this._animPage("Anim_FadeIn"),i._started?i.resize():(i.set("stacking",this.stacking),i.startup()))},_animPage:function(t){return this._anim.start([{node:this._currentPage.domNode,classes:[t,"Wizard_FadeAnim"]}])},resize:function(){this._currentPage&&this._currentPage.resize()},addButtons:function(t,e){var n,s=this.pages[t];if(!s.buttonsNode){var o,d=s.layoutGrid.getChildren();for(n=0;n<d.length;n++)2==d[n].row&&(o=d[n]);o||(o=new r({row:2,"class":"Wizard_BottomPane"}),s.layoutGrid.addChild(o)),s.buttonsNode=a.create("div",{"class":"Wizard_Buttons"},o.domNode)}var c={};for(n=0;n<e.length;n++){var u=a.create("button",{"class":"Wizard_Button",innerHTML:e[n].label},s.buttonsNode);e[n].id&&(c[e[n].id]=u),i(u,"click",e[n].onClick)}return c},destroy:function(){for(var t in this.pages)this.hasOwnProperty(t)&&this.pages[t].destroyRecursive();this.pages={},this.inherited(arguments)}});return o});