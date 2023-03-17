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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/Deferred","dojo/store/Memory","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../../lang","../../kernel","dojo/text!./templates/RFxBandIndexPicker.html"],(function(t,e,n,o,i,a,s,r,d,h,u){var c=t([a,s,r],{templateString:u,postCreate:function(){this.inherited(arguments),this._setOptionsFromNBandsArg(this.nBandsArg),this._attachNBandsArgChangeEvent()},_attachNBandsArgChangeEvent:function(){if(this.nBandsArg&&this.nBandsArg.input){var t=this.nBandsArg.input;this.own(t.on("change",e.hitch(this,this._setOptionsFromNBandsArg,this.nBandsArg)))}},_setOptionsFromNBandsArg:function(t){if(t&&t.input&&"function"==typeof t.input.getSelectedLayer){var n=t.input.getSelectedLayer();n?d.isDefined(n.bandCount)?this._onLayerLoad(n):n.on("load",e.hitch(this,(function(){this._onLayerLoad(n)}))):(this._makeSelectReadOnly(!1),this._createFallbackOptions(this.value))}else this.set("options",this._createFallbackOptions(this.value))},_onLayerLoad:function(t){this._getBandCount(t).then(e.hitch(this,(function(t){this._populateComboBox(t)})),e.hitch(this,(function(){this._populateComboBox(t.bandCount)})))},_getBandCount:function(t){var e,n=new o;return t||n.reject(),t.renderingRule&&t.currentVersion>=10.3?t.getRenderingRuleServiceInfo(t.renderingRule).then((function(e){return e?e.bandCount:t.bandCount})):(void 0===(e=t.bandCount)&&null===e||n.resolve(e),n.promise)},_populateComboBox:function(t){for(var e=0,n=[];e<t;)n.push({id:e,name:String(e+1)}),e++;this._setComboBoxStore(n)},_createFallbackOptions:function(t){if(null!=t&&""!==t){var e=[{id:0,name:t=+t+1}];this._setComboBoxStore(e)}},_setComboBoxStore:function(t){var e=new i({data:t,idProperty:"id"});this._comboBox.set("store",e),this._comboBox.set("value",+this.value+1)},_makeSelectReadOnly:function(t){this._comboBox.textbox.readOnly=t},_handleComboBoxChange:function(t){this.value=+t-1}});return n("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxBandIndexPicker",c,h),c}));