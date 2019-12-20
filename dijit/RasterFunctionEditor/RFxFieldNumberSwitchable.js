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

define(["dojo/_base/declare","./RFxFieldSelect","./RFxLinearUnit","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/NumberTextBox","dijit/form/Select","dojo/dom-style","dojo/text!./templates/RFxFieldNumberSwitchable.html","dojo/i18n!../../nls/jsapi","esri/lang"],function(t,e,i,s,l,h,n,a,c,u,r,d){return t([s,l,h],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxFieldNumberSwitchable",templateString:u,defaultEnumValue:"default",types:{list:"list",unit:"linearUnit",number:"number",field:"field"},constructor:function(){this.inherited(arguments),this._i18n=r.widgets.rasterFunctionEditor.rfxFieldNumberSwitchable},postCreate:function(){this.inherited(arguments),this._createUIComponents(),c.set(this._switchFieldSelect.domNode,"display","none"),this.switchableSelect.on("change",this._switchSelectChange.bind(this)),this._readValues()},_createUIComponents:function(){this.attributes.forEach(function(t,s){var l=t.type,h="option"+(s+1)+"Div";l===this.types.number?(this.switchableSelect.addOption({label:this._i18n.number,value:this.types.number}),this._switchNumberInput=new n({name:"switchNumberInput",class:"esri-rfx-switch-selector__switch-number-input"},this[h]),this.selectorType=this.types.number):l===this.types.field?(this.switchableSelect.addOption({label:this._i18n.field,value:this.types.field}),this.layerArg=t.argumentName,this._switchFieldSelect=new e({layerArg:this.layerArg},this[h]),this._switchFieldSelect.startup()):l===this.types.list?(this.switchableSelect.addOption({label:this._i18n.string,value:this.types.list}),this._addDefaultEnumOption(t.enumStore),this._switchEnumSelect=new a({store:t.enumStore,value:this.defaultEnumValue,labelAttr:"label",maxHeight:200},this[h]),this.selectorType=this.types.list):l===this.types.unit&&(this.switchableSelect.addOption({label:this._i18n.linearUnit,value:this.types.unit}),this._switchUnitSelect=new i({enumStore:t.enumStore},this[h]),this.selectorType=this.types.unit)},this)},_readValues:function(){var t=this.value;if(d.isDefined(t)&&""!==t)if(isNaN(t))if(this._switchFieldSelect.store&&this._switchFieldSelect.store.data&&this._switchFieldSelect.store.query({name:t})[0])this.switchableSelect.set("value",this.types.field),this._switchFieldSelect.set("value",t);else switch(this.selectorType){case this.types.list:this.switchableSelect.set("value",this.types.list),this._switchEnumSelect.set("value",t.toString(),!1);break;case this.types.unit:this.switchableSelect.set("value",this.types.unit),this._switchUnitSelect._setValues(t)}else this._switchNumberInput.set("value",parseFloat(t))},_switchSelectChange:function(t){var e;switch(t===this.types.field?(c.set(this._switchFieldSelect.domNode,"display","table"),e="none"):(e="block",c.set(this._switchFieldSelect.domNode,"display","none")),this.selectorType){case this.types.list:c.set(this._switchEnumSelect.domNode,"display","block"===e?"table":e);break;case this.types.unit:c.set(this._switchUnitSelect.domNode,"display",e);break;case this.types.number:c.set(this._switchNumberInput.domNode,"display",e)}},_getValueAttr:function(){if(this.switchableSelect){var t=this.switchableSelect.value;if(t===this.types.field)return this._switchFieldSelect.value;if(t===this.types.list){if(this._switchEnumSelect.value===this.defaultEnumValue)return;return this._switchEnumSelect.value}if(t===this.types.unit)return this._switchUnitSelect.get("value");var e=this._switchNumberInput.value;return null==e||isNaN(e)?void 0:e.toString()}},_addDefaultEnumOption:function(t){var e=t&&t.data;e&&e.push({key:this.defaultEnumValue,label:""})},setFieldOptions:function(){this._switchFieldSelect.setFieldOptions()}})});