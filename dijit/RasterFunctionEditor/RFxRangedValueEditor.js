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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojox/lang/functional/object","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxRangedValueEditor.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../../kernel"],(function(t,e,n,a,i,s,r,h,l,u,o){var g=t("RFxRangedValueEditor",[h,l,u],{widgetsInTemplate:!0,templateString:r,declaredClass:"dijit.RasterFunctionEditor.RFxRangedValueEditor",minValue:null,maxValue:null,lessThan:null,greaterThan:null,constructor:function(){this.inherited(arguments),this._i18n=s.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._setLabels(),this._setConstraints(),this._attachInputChangeListener()},_getFunctionName:function(t){return t.ToolName?t.ToolName.value.replace("_sa",""):t.type.replace("Arguments","")},extractIdentifier:function(t,e){for(var n=0;n!=e.length;n++){var a=e[n];if(-1!=t.indexOf(a))return a}return"Invalid"},setInputConstraints:function(){this.greaterThan&&this._attachTriggerArgsChangeListener("greaterThan",this.greaterThan),this.lessThan&&this._attachTriggerArgsChangeListener("lessThan",this.lessThan)},_setLabels:function(){var t=this._getFunctionName(this.rfxArgs),e=this.rasterFunctions[t],a=e&&e.rasterFunctionArguments;this.inputArgs&&n.forEach(Object.keys(this.inputArgs),function(t){var e=this.inputArgs[t];this.fieldLabel.innerHTML=e.displayName;var n=e.value||e.defaultValue;this._templateInput.value=n,this._templateInput.textbox.value=n,e.input=this._templateInput,"long"===a[t].dataType&&(this._templateInput.constraints.places=0),e.input.declaredClass=this.declaredClass,e.input.setInputConstraints=this.setInputConstraints.bind(this)}.bind(this))},_setConstraints:function(){var t=this.triggerAttributes.split(";"),e=["minValue","maxValue","lessThan","greaterThan"];n.forEach(t,(function(n){switch(this.extractIdentifier(n,e)){case"minValue":this.minValue=parseInt(n.replace("minValue:",""),10);break;case"maxValue":this.maxValue=parseInt(n.replace("maxValue:",""),10);break;case"lessThan":this.lessThan=n.replace("lessThan:","");break;case"greaterThan":this.greaterThan=n.replace("greaterThan:","");break;default:console.error("Unknown Identifier",t,n)}}),this),this.minValue&&(this._templateInput.constraints.min=this.minValue),this.maxValue&&(this._templateInput.constraints.max=this.maxValue)},_attachInputChangeListener:function(){this._templateInput.on("change",this._handleInputChange.bind(this))},_handleInputChange:function(t){this.emit("change",{value:t})},_attachTriggerArgsChangeListener:function(t,e){this.triggerArgs[e]||console.error("Invalid Schema: Trigger Arg Not passed"),this.triggerArgs[e].input.on("change",this._handleTriggerArgChange.bind(this,t))},_handleTriggerArgChange:function(t,e){switch(t){case"lessThan":this._templateInput.constraints.max=e-1;break;case"greaterThan":this._templateInput.constraints.min=e+1}}});return a("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxRangedValueEditor",g,o),g}));