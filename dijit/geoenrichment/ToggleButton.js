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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Stateful","dojo/on","dojo/dom-construct","dojo/dom-class"],(function(e,t,d,o,s){return e(t,{domNode:null,checked:!1,disabled:!1,mode:"toggle",constructor:function(e,t,s){var c=(t=t||{}).class;c=(c?c+" ":"")+"esriGEToggleButton",this.checked=!!t.checked,this.mode=t.mode||"toggle",this.domNode=o.create("div",{class:c},e,s),this._updateClass(),d(this.domNode,"click",function(e){this.disabled||(e.checked=this.toggle(),this.onClick(e))}.bind(this))},postscript:function(){},_checkedSetter:function(e){this.checked=!!e,this._updateClass()},_modeSetter:function(e){this.mode=e,this._updateClass()},_disabledSetter:function(e){this.disabled=e,this._updateClass()},_updateClass:function(){s.remove(this.domNode,"checked unchecked switch toggle"),s.add(this.domNode,"toggle"===this.mode?"toggle":"switch"),s.add(this.domNode,this.checked?"checked":"unchecked"),s[this.disabled?"add":"remove"](this.domNode,"disabled")},onClick:function(e){},toggle:function(){return this.set("checked",!this.checked),this.checked}})}));