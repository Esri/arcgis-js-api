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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxPansharpenSensorPicker.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../../kernel"],(function(e,t,n,s,i,a,r,h,o,p,c,u){var g=e("RFxPansharpenSensorPicker",[o,p,c],{widgetsInTemplate:!0,templateString:h,declaredClass:"esri.widgets.ToolModeler.RasterFunctionEditor.ArgumentEditors.RFxPansharpenSensorPicker",sensorPickerStore:[],sensorList:[{name:"DubaiSat-2",pansharpenWeights:[.166,.167,.167,.5]},{name:"GeoEye-1",pansharpenWeights:[.41,.16,.13,.3]},{name:"GF-1 PMS",pansharpenWeights:[.2501,.3646,0,.3853]},{name:"GF-2 PMS",pansharpenWeights:[.2501,.3646,0,.3853]},{name:"IKONOS",pansharpenWeights:[.378,.211,0,.411]},{name:"Jilin-1",pansharpenWeights:[.2501,.3646,0,.5]},{name:"KOMPSAT-2",pansharpenWeights:[.166,.167,.167,.5]},{name:"KOMPSAT-3",pansharpenWeights:[.166,.167,.167,.5]},{name:"Landsat 1-5  MSS",pansharpenWeights:[0,0,0,0]},{name:"Landsat 7  ETM+",pansharpenWeights:[.11,.14,.14,.61]},{name:"Landsat 8",pansharpenWeights:[.42,.51,.07,0]},{name:"Pleiades-1",pansharpenWeights:[.9,.75,.5,.5]},{name:"QuickBird",pansharpenWeights:[.85,.7,.35,1]},{name:"SkySat",pansharpenWeights:[.41,.16,.13,.3]},{name:"SPOT 5",pansharpenWeights:[.166,.167,.167,.5]},{name:"SPOT 6",pansharpenWeights:[.45,.55,0,0]},{name:"SPOT 7",pansharpenWeights:[.45,.55,0,0]},{name:"TH-01",pansharpenWeights:[.329,.509,0,.162]},{name:"UltraCam",pansharpenWeights:[.326,.645,.029,0]},{name:"WorldView-2",pansharpenWeights:[.39,.23,.21,.17]},{name:"WorldView-3",pansharpenWeights:[.38,.25,.2,.16]},{name:"WorldView-4",pansharpenWeights:[.39,.23,.21,.17]},{name:"ZY1-02C PMS",pansharpenWeights:[0,0,0,0]},{name:"ZY3-CRESDA",pansharpenWeights:[0,0,0,0]},{name:"ZY3-SASMAC",pansharpenWeights:[.329,.509,0,.162]}],constructor:function(){this.inherited(arguments),this._i18n=r.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._setLabels(),this._setPickerList(),this._attachSensorChangeListener()},_getPersistedValue:function(){var e;return Object.keys(this.inputArgs).forEach(function(t){e=this.inputArgs[t].value}.bind(this)),e},_setInputArgValue:function(e){Object.keys(this.inputArgs).forEach(function(t){this.inputArgs[t].value=e}.bind(this)),this.emit("change",{value:e})},_getFunctionName:function(e){return e.ToolName?e.ToolName.value.replace("_sa",""):e.type.replace("Arguments","")},_setSensorPickerStore:function(e){var t=this._createObjectStore(e,"key");this._templateNode.set("store",t);var n=e[0]&&e[0].key,i=this._getPersistedValue();i&&(s.some(e,(function(e){return e.key===i}))&&(n=i));this._templateNode.set("value",n),this._setInputArgValue(n)},_createObjectStore:function(e,t){return new a(new i({data:e,idProperty:t}))},_normaliseWeights:function(e){return[e.reduce((function(e,t,n){return e[n]=t,e}),{})]},_setLabels:function(){this.inputArgs&&s.forEach(Object.keys(this.inputArgs),function(e){var t=this.inputArgs[e];this.fieldLabel.innerHTML=t.displayName,t.input=this._templateNode}.bind(this))},_setPickerList:function(){var e=this._getFunctionName(this.rfxArgs),n=this.rasterFunctions[e],i=n&&n.rasterFunctionArguments;s.forEach(Object.keys(this.inputArgs),(function(e){var n=i[e].domain;n&&"list"===n.type&&(this.sensorPickerStore=t.clone(this.rasterFunctionEnums[n.enum]))}),this),s.forEach(this.sensorPickerStore,(function(e){e.key=e.key.toString()})),this.sensorPickerStore||console.error("Domain list Enum not set! Check Schema"),this.sensorPickerStore=this.sensorPickerStore.concat(this.sensorList.map((function(e){return{key:e.name,label:e.name}}))),this._setSensorPickerStore(this.sensorPickerStore)},_attachSensorChangeListener:function(){this._templateNode.on("change",this._handleSensorChange.bind(this))},_handleSensorChange:function(e){this._setInputArgValue(e);var t=this.sensorList.filter(function(t){return t.name===e}.bind(this))[0],n=t?t.pansharpenWeights:[.166,.167,.167,.5],s=this._normaliseWeights(n);this.triggerArgs.Weights.input.updateValue(s),this.triggerArgs.Weights.input.refreshGrid()}});return n("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxPansharpenSensorPicker",g,u),g}));