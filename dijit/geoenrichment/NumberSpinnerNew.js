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

define(["dojo/_base/declare","dojo/aspect","dojo/on","dojo/dom-construct","dijit/form/NumberSpinner","./utils/DomUtil","./utils/InvokeUtil","./utils/ObjectUtil"],(function(t,i,e,a,s,l,n,o){return t(s,{accumulateTimeout:300,displayValueFormatter:null,displayValueLabel:null,postCreate:function(){this.inherited(arguments);var t=this;if(e(this.upArrowNode,"click",(function(){t.onChangeUser()})),e(this.downArrowNode,"click",(function(){t.onChangeUser()})),e(this.textbox,"keyup",(function(){n.invoke(t,"onChangeUser",t.accumulateTimeout)})),this.displayValueFormatter){this.displayValueLabel=a.create("div",null,this.domNode),this.domNode.style.position="relative",this.displayValueLabel.style.position="absolute",l.addClass(this.displayValueLabel,"TrimWithEllipses"),this.textbox.style.opacity="0.001",this.displayValueLabel.style.display="",i.after(this,"onChange",this._updateDisplayValueLabel.bind(this)),setTimeout(this._updateDisplayValueLabel.bind(this));t=this;e(this,"focus",(function(){t.textbox.style.opacity="",t.displayValueLabel.style.display="none"})),e(this,"blur",(function(){t.textbox.style.opacity="0.001",t.displayValueLabel.style.display=""}))}},_updateDisplayValueLabel:function(){if(this.displayValueLabel){var t=this.displayValueLabel.style.display;this.displayValueLabel.style.display="",this.displayValueLabel.innerHTML=this.displayValueFormatter(this.textbox.value),this.displayValueLabel.style.top=Math.max(2,(this.domNode.clientHeight-this.displayValueLabel.clientHeight)/2)+"px",this.displayValueLabel.style.right=Math.max(24,this.downArrowNode.clientWidth+5)+"px",this.displayValueLabel.style.maxWidth=this.textbox.clientWidth?this.textbox.clientWidth+"px":"initial",this.displayValueLabel.style.display=t}},validator:function(t,i){var e=o.parseNumber(t);return!isNaN(e)&&""!==t&&(i&&e>=i.min&&e<=i.max)},_getValueAttr:function(){if(""!==this.textbox.value){var t=o.parseNumber(this.textbox.value);if(!isNaN(t))return t}return this.inherited(arguments)},_lastSetValue:null,_setValueAttr:function(t){"number"!=typeof t||isNaN(t)||(this._lastSetValue=t),this.inherited(arguments),this._updateDisplayValueLabel()},_setBlurValue:function(){var t=this;function i(i){var e=t._lastSetValue!==i;t.set("value",i),e&&t.onChangeUser()}if(this.inherited(arguments),this.textbox.value){var e=this.getConstrainedValue();isNaN(e)?i(this._lastSetValue):i(e)}else i(this._lastSetValue)},getConstrainedValue:function(){if(""!==this.textbox.value){var t=o.parseNumber(this.textbox.value);if(!isNaN(t)){if(this.constraints){if(void 0!==this.constraints.min&&t<this.constraints.min)return this.constraints.min;if(void 0!==this.constraints.max&&t>this.constraints.max)return this.constraints.max}return t}}return NaN},onChangeUser:function(){}})}));