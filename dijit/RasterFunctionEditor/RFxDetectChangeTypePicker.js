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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojox/lang/functional/object","dojo/dom-style","dojo/store/Memory","dojo/data/ObjectStore","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxDetectChangeTypePicker.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../../kernel"],(function(e,t,i,s,r,n,a,h,g,o,c,y,l,u){var p=e("RFxDetectChangeTypePicker",[c,y,l],{widgetsInTemplate:!0,templateString:o,declaredClass:"dijit.RasterFunctionEditor.RFxDetectChangeTypePicker",initialChangeTypeStore:[],alteredChangeTypeStore:[],triggerArgsUIState:{},isChangeAnalysisTypeCCDC:!1,changeTypeSelect:null,constructor:function(){this.inherited(arguments),this._i18n=g.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this.changeTypeSelect=this._templateChangeTypeNode,this._setLabels(),this._attachRasterChangeListener(),this._attachChangeTypeChangeListener()},onEditorStateTriggerExecuted:function(){this._saveTriggerArgsState(),this._setInitialchangeTypeState()},_getPersistedValue:function(){var e;return Object.keys(this.inputArgs).forEach(function(t){e=this.inputArgs[t].value}.bind(this)),e},_setInputArgValue:function(e){Object.keys(this.inputArgs).forEach(function(t){this.inputArgs[t].value=e}.bind(this)),this.emit("change",{value:e})},_getFunctionName:function(e){return e.ToolName?e.ToolName.value.replace("_sa",""):e.type.replace("Arguments","")},_modifyRfxArgDisplay:function(e,t){var i,s=e.uxBlocks;switch(t){case"hide":i="none";break;case"show":i=s&&s[0]&&"TR"===s[0].tagName?"table-row":"block";break;default:i=t}s&&s.forEach((function(e){e&&i&&n.set(e,"display",i)}),this)},_isDatatypeRaster:function(e){return e.input&&e.input.declaredClass.indexOf("RFxRasterInput")>=0},_isChangeAnalysisTypeCCDC:function(e){return e.getKeyProperties().then(t.hitch(this,(function(e){var t=e.ChangeAnalysisParameters;return"CCDC"===(t&&t.AnalysisType)})))},_createObjectStore:function(e,t){return new h(new a({data:e,idProperty:t}))},_setLabels:function(){this.inputArgs&&i.forEach(Object.keys(this.inputArgs),function(e){var t=this.inputArgs[e];this.fieldLabel.innerHTML=t.displayName,t.input=this.changeTypeSelect,t.input.declaredClass=this.declaredClass,t.input.onEditorStateTriggerExecuted=this.onEditorStateTriggerExecuted.bind(this)}.bind(this))},_setInitialchangeTypeState:function(){var e=this._getFunctionName(this.rfxArgs),s=this.rasterFunctions[e],n=s&&s.rasterFunctionArguments;i.forEach(r.keys(this.inputArgs),(function(e){var i=n[e].domain;i&&"list"===i.type&&(this.initialChangeTypeStore=t.clone(this.rasterFunctionEnums[i.enum]))}),this),i.forEach(this.initialChangeTypeStore,(function(e){e.key=e.key.toString()})),this.initialChangeTypeStore||console.error("Domain list Enum not set! Check Schema");var a=["0","1","2","3"],h=i.filter(this.initialChangeTypeStore,(function(e){return i.some(a,(function(t){return e.key===t}))}));this.alteredChangeTypeStore=h;var g=!0;i.forEach(Object.keys(this.triggerArgs),(function(e){if(this._isDatatypeRaster(this.triggerArgs[e])){g=!1;var i=this.triggerArgs[e].input.value;if(i){var s=i.name,r=this.triggerArgs[e].input.getSelectedLayer(s);r&&r.loaded?this._isChangeAnalysisTypeCCDC(r).then(t.hitch(this,(function(e){this.isChangeAnalysisTypeCCDC=e,this.isChangeAnalysisTypeCCDC?(this._setChangetypeStore(this.alteredChangeTypeStore),this._saveTriggerArgsState(),this._hideTriggerArgs()):(this._setChangetypeStore(this.initialChangeTypeStore),this._showTriggerArgs())}))):r&&r.on("load",function(e){r=e.layer?e.layer:e,this._isChangeAnalysisTypeCCDC(r).then(t.hitch(this,(function(e){this.isChangeAnalysisTypeCCDC=e,this.isChangeAnalysisTypeCCDC?(this._setChangetypeStore(this.alteredChangeTypeStore),this._saveTriggerArgsState(),this._hideTriggerArgs()):(this._setChangetypeStore(this.initialChangeTypeStore),this._showTriggerArgs())})))}.bind(this))}else this._setChangetypeStore(this.initialChangeTypeStore),this._showTriggerArgs()}}),this),g&&(this._setChangetypeStore(this.initialChangeTypeStore),this._showTriggerArgs())},_attachChangeTypeChangeListener:function(){this.changeTypeSelect.on("change",this._handleChangeTypeChange.bind(this))},_handleStateTriggers:function(e){var t=this.triggerArgs.MaxNumberChanges,i=this.triggerArgs.SegmentDate;"3"===e?(this._modifyRfxArgDisplay(t,"hide"),!this.isChangeAnalysisTypeCCDC&&this._modifyRfxArgDisplay(i,"hide")):(this._modifyRfxArgDisplay(t,"show"),!this.isChangeAnalysisTypeCCDC&&this._modifyRfxArgDisplay(i,"show"))},_handleChangeTypeChange:function(e){this._setInputArgValue(e),this._handleStateTriggers(e)},_attachRasterChangeListener:function(){i.forEach(Object.keys(this.triggerArgs),(function(e){var t=this.triggerArgs[e];this._isDatatypeRaster(t)&&this.triggerArgs[e].input.on("change",this._handleRasterChange.bind(this))}),this)},_handleRasterChange:function(e){var i=e.name,s=e.detail.widget.getSelectedLayer(i);this._isChangeAnalysisTypeCCDC(s).then(t.hitch(this,(function(e){this.isChangeAnalysisTypeCCDC=e,this.isChangeAnalysisTypeCCDC?(this._setChangetypeStore(this.alteredChangeTypeStore),this._saveTriggerArgsState(),this._hideTriggerArgs()):(this._setChangetypeStore(this.initialChangeTypeStore),this._showTriggerArgs())})))},_hideTriggerArgs:function(){i.forEach(Object.keys(this.triggerArgs),(function(e){var t=this.triggerArgs[e];this._isDatatypeRaster(t)||"MaxNumberChanges"===e||this._modifyRfxArgDisplay(t,"hide")}),this)},_saveTriggerArgsState:function(){i.forEach(Object.keys(this.triggerArgs),(function(e){var t=this.triggerArgs[e],i=t.uxBlocks&&t.uxBlocks[0];!this._isDatatypeRaster(t)&&i&&(this.triggerArgsUIState[t.name]=""===n.get(i,"display")?this.triggerArgsUIState[t.name]:n.get(i,"display"))}),this)},_showTriggerArgs:function(){i.forEach(Object.keys(this.triggerArgs),(function(e){var t=this.triggerArgs[e];this._isDatatypeRaster(t)||"MaxNumberChanges"===e||this._modifyRfxArgDisplay(t,this.triggerArgsUIState[t.name])}),this)},_setChangetypeStore:function(e){var t=this._createObjectStore(e,"key");this.changeTypeSelect.set("store",t);var s=e[0]&&e[0].key,r=this._getPersistedValue().toString();r&&(i.some(e,(function(e){return e.key===r}))&&(s=r));this.changeTypeSelect.set("value",s),this._setInputArgValue(s)}});return s("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxDetectChangeTypePicker",p,u),p}));