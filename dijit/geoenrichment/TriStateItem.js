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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/Stateful","dojo/on","dojo/dom-construct","dojo/dom-class","./utils/DeviceUtil"],function(e,t,s,c,i,o,l,a){return e(c,{domNode:null,checkboxNode:null,checked:!1,disabled:!1,autoToggle:!0,_currentClass:null,_lastChecked:!1,constructor:function(e,t,c){var h=a.isMobileDevice()?"touchstart":"click";t=t||{};var n=t.class;t.class=(n?n+" ":"")+"esriTriStateCheckBoxIcon";var d=t.label;if(d){if(e instanceof HTMLLabelElement)e.innerHTML="&nbsp;"+d;else{var r=t.labelAttrs||{};r.innerHTML="&nbsp;"+d;var u=o.create("label",r);e&&o.place(u,e),e=u}t=s.mixin({},t),delete t.label,delete t.labelAttrs}this.checkboxNode=o.create("div",t,e,e instanceof HTMLLabelElement?"first":c),this._currentClass=this._composeClass(),l.add(this.checkboxNode,this._currentClass),e instanceof HTMLLabelElement?(i(e,h,s.hitch(this,this._onClick)),l.add(e,"esriTriStateCheckBoxLabel")):i(this.checkboxNode,h,s.hitch(this,this._onClick)),this.domNode=d?e:this.checkboxNode},postscript:function(){},_onClick:function(e){this.disabled||(this.autoToggle&&this.toggle(),e.checked=this.checked,this.onClick(t.fix(e)))},onClick:function(e){},toggle:function(){return this.set("checked",!this._lastChecked),this.checked},_checkedSetter:function(e){e!==this.checked&&(this.checked="mixed"===e?e:this._lastChecked=!!e,this._updateClass())},_disabledSetter:function(e){this.disabled=!!e,this._updateClass()},_updateClass:function(){var e=this._composeClass();e!==this._currentClass&&(l.replace(this.checkboxNode,e,this._currentClass),this._currentClass=e)},_composeClass:function(){var e="esriTriStateCheckBox"+("mixed"==this.checked?"Mixed":this.checked?"Checked":"");return this.disabled?e+"Disabled":e}})});