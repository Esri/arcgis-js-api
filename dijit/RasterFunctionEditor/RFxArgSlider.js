// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","dijit/form/HorizontalSlider","dijit/form/HorizontalRuleLabels","dijit/form/HorizontalRule","dijit/form/NumberSpinner","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!./templates/RFxArgSlider.html"],(function(e,i,t,s,l,a,n,r,d,u,h,o){var m=e("RFxArgSlider",[d,u,h],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxArgSlider",templateString:o,baseClass:"esriRFxArgSlider",label:"",min:0,max:100,value:0,postCreate:function(){this.labelNode.innerHTML=this.label,this.slider.set("minimum",this.min),this.slider.set("maximum",this.max),this.spinner.attr("constraints",{min:this.min,max:this.max}),this.slider.set("value",this.value),this.spinner.set("value",this.value)},_onNumberSpinnerChange:function(){this.slider.set("value",this.spinner.value,!1),this.set("value",this.slider.value),this.emit("change",{value:this.spinner.value})},_onSliderChange:function(){this.spinner.set("value",this.slider.value,!1),this.set("value",this.slider.value),this.emit("change",{value:this.slider.value})},_setValueAttr:function(e){this._set("value",e),this.slider.set("value",e,!1),this.spinner.set("value",e,!1)}});return t("extend-esri")&&i.setObject("dijit.RasterFunctionEditor.RFxArgSlider",m,s),m}));