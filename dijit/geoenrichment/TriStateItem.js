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

define(["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/Stateful","dojo/on","dojo/sniff","dojo/dom-construct","dojo/dom-class"],function(e,t,s,c,i,o,h,l){return e(c,{domNode:null,checkboxNode:null,checked:!1,disabled:!1,autoToggle:!0,_currentClass:null,_lastChecked:!1,constructor:function(e,t,c){this.isIPAD=o("touch")&&o("ios");var a=this.isIPAD?"touchstart":"click";t=t||{};var d=t["class"];t["class"]=(d?d+" ":"")+"esriTriStateCheckBoxIcon";var n=t.label;if(n){if(e instanceof HTMLLabelElement)e.innerHTML="&nbsp;"+n;else{var r=t.labelAttrs||{};r.innerHTML="&nbsp;"+n;var u=h.create("label",r);e&&h.place(u,e),e=u}t=s.mixin({},t),delete t.label,delete t.labelAttrs}this.checkboxNode=h.create("div",t,e,e instanceof HTMLLabelElement?"first":c),this._currentClass=this._composeClass(),l.add(this.checkboxNode,this._currentClass),e instanceof HTMLLabelElement?(i(e,a,s.hitch(this,this._onClick)),l.add(e,"esriTriStateCheckBoxLabel")):i(this.checkboxNode,a,s.hitch(this,this._onClick)),this.domNode=n?e:this.checkboxNode},postscript:function(){},_onClick:function(e){this.disabled||(this.autoToggle&&this.toggle(),e.checked=this.checked,this.onClick(t.fix(e)))},onClick:function(e){},toggle:function(){return this.set("checked",!this._lastChecked),this.checked},_checkedSetter:function(e){e!==this.checked&&("mixed"==e?this.checked=e:this.checked=this._lastChecked=!!e,this._updateClass())},_disabledSetter:function(e){this.disabled=!!e,this._updateClass()},_updateClass:function(){var e=this._composeClass();e!=this._currentClass&&(l.replace(this.checkboxNode,e,this._currentClass),this._currentClass=e)},_composeClass:function(){var e="esriTriStateCheckBox"+("mixed"==this.checked?"Mixed":this.checked?"Checked":"");return this.disabled?e+"Disabled":e}})});