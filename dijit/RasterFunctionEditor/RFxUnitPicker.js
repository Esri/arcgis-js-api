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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","dojo/store/Memory","dojo/data/ObjectStore","dijit/form/Select","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../../kernel","dojo/text!./templates/RFxUnitPicker.html","dojo/i18n!../../nls/jsapi"],(function(t,i,e,n,s,r,o,a,u,h,U,l,m){var c=t("RFxUnitPicker",[a,u,h],{baseClass:"esriRFxUnitPicker",templateString:l,schemaArgDefinitions:{},inputArgs:{},rasterArgs:{},rasterFunctionSchema:null,rasterFunctionEnums:null,distanceUnits:[],speedUnits:[],temperatureUnits:[],unitTypes:{speed:[100,101,102,103,104],temperature:[200,201,202],distance:[1,3,4,5,6,7,8,9,10,12]},constructor:function(t){this.inherited(arguments),i.mixin(this,t),this._readArgs()},postCreate:function(){this.inherited(arguments),this._setLabels(),this._setupFromUnitSelect(),this._setupValues()},onFromUnitChange:function(t){t=+t,this._setupToUnitSelect(t),this.fromUnitArg&&(this.fromUnitArg.value=t)},onToUnitChange:function(t){t=+t,this.toUnitArg&&(this.toUnitArg.value=t)},_setupFromUnitSelect:function(){if(this.rasterFunctionEnums&&this.rasterFunctionEnums.esriUnitConversionFxUnitTypes){var t=this.rasterFunctionEnums.esriUnitConversionFxUnitTypes;this.unitsEnum=t.map((function(t){return{key:String(t.key),label:t.label}})),this.fromUnitSelect.set("store",new r(new s({data:this.unitsEnum,idProperty:"key"})))}},_setupToUnitSelect:function(t){var i,e;t&&(n.some(Object.keys(this.unitTypes),(function(e){var s=this.unitTypes[e];if(n.indexOf(s,t)>=0)return i=e,!0}),this),i&&(e=n.filter(this.unitsEnum,(function(t){if(n.indexOf(this.unitTypes[i],+t.key)>=0)return!0}),this),this.toUnitSelect.set("store",new r(new s({data:e,idProperty:"key"}))),this.toUnitArg&&this.toUnitArg.value&&this.toUnitSelect.set("value",String(this.toUnitArg.value))))},_readArgs:function(){if(this.inputArgs){var t=this.inputArgs;this.fromUnitArg=t&&t.FromUnit,this.toUnitArg=t&&t.ToUnit,this._fromUnitName=this.fromUnitArg&&this.fromUnitArg.name,this._toUnitName=this.toUnitArg&&this.toUnitArg.name}},_setupValues:function(){this.fromUnitArg&&this.fromUnitArg.value&&this.fromUnitSelect.set("value",String(this.fromUnitArg.value))},_setLabels:function(){this.inputArgs&&(this.fromUnitLabel.innerHTML=this.inputArgs.FromUnit.displayName,this.toUnitLabel.innerHTML=this.inputArgs.ToUnit.displayName)}});return e("extend-esri")&&i.setObject("dijit.RasterFunctionEditor.RFxUnitPicker",c,U),c}));