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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/html","dojo/on","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","./ViewStack"],(function(t,e,i,s,a,o,n,c,d){return t([n,c,o],{baseClass:"jimu-tab",declaredClass:"esri.dijit.analysis.customgp.common.dijit.TabContainer",templateString:'<div><div class="control" data-dojo-attach-point="controlNode"></div><div class="jimu-container" data-dojo-attach-point="containerNode"></div></div>',postCreate:function(){if(this.inherited(arguments),0!==this.tabs.length){this.controlNodes=[],this.viewStack=new d(null,this.containerNode);var t=1/this.tabs.length*100;this.isNested&&s.addClass(this.domNode,"nested"),i.forEach(this.tabs,(function(e){this._createTab(e,t)}),this)}},startup:function(){this.selected?this.selectTab(this.selected):this.tabs.length>0&&this.selectTab(this.tabs[0].title)},_createTab:function(t,i){var o;o=s.create("div",{innerHTML:t.title,class:"tab jimu-vcenter-text",style:{width:this.isNested?"auto":i+"%"},label:t.title},this.controlNode),t.content.domNode?this.viewStack.viewType="dijit":this.viewStack.viewType="dom",t.content.label=t.title,this.viewStack.addView(t.content),this.own(a(o,"click",e.hitch(this,this.onSelect,t.title))),o.label=t.title,this.controlNodes.push(o)},onSelect:function(t){this.selectTab(t)},selectTab:function(t){this._selectControl(t),this.viewStack.switchView(t),this.emit("tabChanged",t)},_selectControl:function(t){i.forEach(this.controlNodes,(function(e){s.removeClass(e,"jimu-state-selected"),e.label===t&&s.addClass(e,"jimu-state-selected")}))}})}));