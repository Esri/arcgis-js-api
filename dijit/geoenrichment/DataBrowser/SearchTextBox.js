// COPYRIGHT © 2020 Esri
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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/on","dojo/keys","dijit/Tooltip","dijit/form/TextBox","dijit/_WidgetBase","dijit/_TemplatedMixin"],(function(t,e,o,i,h,s,n,x,a){return t([x,a],{templateString:"<div class='searchTextBox' data-dojo-attach-point='mainContainer'></div>",prompt:"",textBox:null,searchButton:null,postCreate:function(){this.inherited(arguments),this.searchButton=o.create("div",{class:"searchTextBoxButton"},this.mainContainer),this.textBox=new n({class:"searchTextBoxInput",placeHolder:this.prompt}),this.textBox.placeAt(this.mainContainer),this.own(i(this.searchButton,"click",e.hitch(this,this._onSearch))),this.own(i(this.textBox.textbox,"keyup",e.hitch(this,(function(t){s.hide(this.textBox.textbox),t.keyCode==h.ENTER&&this._onSearch()})))),this.own(i(this.textBox,"blur",e.hitch(this,(function(t){s.hide(this.textBox.textbox)}))))},_setPromptAttr:function(t){this.prompt=t,this.textBox&&this.textBox.set("placeHolder",t)},_getValueAttr:function(){return this.textBox&&this.textBox.get("value")},_setValueAttr:function(t){this.textBox&&this.textBox.set("value",t)},showTooltip:function(t){s.show(t,this.textBox.textbox,["above","below"])},hideTooltip:function(){s.hide(this.textBox.textbox)},_onSearch:function(){this.get("value")?this.emit("Search"):this.textBox&&this.textBox.focus()},onSearch:function(){}})}));
