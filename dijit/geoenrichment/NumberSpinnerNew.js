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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect","dojo/on","dojo/dom-construct","dijit/form/NumberSpinner","./utils/InvokeUtil","./utils/ObjectUtil"],function(t,e,i,a,s,l,n){return t(s,{accumulateTimeout:300,displayValueFormatter:null,displayValueLabel:null,postCreate:function(){this.inherited(arguments);var t=this;if(i(this.upArrowNode,"click",function(){t.onChangeUser()}),i(this.downArrowNode,"click",function(){t.onChangeUser()}),i(this.textbox,"keyup",function(){l.invoke(t,"onChangeUser",t.accumulateTimeout)}),this.displayValueFormatter){this.displayValueLabel=a.create("div",null,this.domNode),this.domNode.style.position="relative",this.displayValueLabel.style.position="absolute",this.textbox.style.opacity="0.001",this.displayValueLabel.style.display="",e.after(this,"onChange",this._updateDisplayValueLabel.bind(this)),setTimeout(this._updateDisplayValueLabel.bind(this));var t=this;i(this,"focus",function(){t.textbox.style.opacity="",t.displayValueLabel.style.display="none"}),i(this,"blur",function(){t.textbox.style.opacity="0.001",t.displayValueLabel.style.display=""})}},_updateDisplayValueLabel:function(){if(this.displayValueLabel){var t=this.displayValueLabel.style.display;this.displayValueLabel.style.display="",this.displayValueLabel.innerHTML=this.displayValueFormatter(this.textbox.value),this.displayValueLabel.style.top=Math.max(2,(this.domNode.clientHeight-this.displayValueLabel.clientHeight)/2)+"px",this.displayValueLabel.style.right=Math.max(24,this.downArrowNode.clientWidth+5)+"px",this.displayValueLabel.style.display=t}},validator:function(t,e){var i=n.parseNumber(t);return!isNaN(i)&&""!==t&&(e&&i>=e.min&&i<=e.max)},_getValueAttr:function(){if(""!==this.textbox.value){var t=n.parseNumber(this.textbox.value);if(!isNaN(t))return t}return this.inherited(arguments)},_lastSetValue:null,_setValueAttr:function(t){"number"!=typeof t||isNaN(t)||(this._lastSetValue=t),this.inherited(arguments),this._updateDisplayValueLabel()},_setBlurValue:function(){function t(t){var i=e._lastSetValue!==t;e.set("value",t),i&&e.onChangeUser()}var e=this;if(this.inherited(arguments),this.textbox.value){var i=this.getConstrainedValue();t(isNaN(i)?this._lastSetValue:i)}else t(this._lastSetValue)},getConstrainedValue:function(){if(""!==this.textbox.value){var t=n.parseNumber(this.textbox.value);if(!isNaN(t)){if(this.constraints){if(void 0!==this.constraints.min&&t<this.constraints.min)return this.constraints.min;if(void 0!==this.constraints.max&&t>this.constraints.max)return this.constraints.max}return t}}return NaN},onChangeUser:function(){}})});