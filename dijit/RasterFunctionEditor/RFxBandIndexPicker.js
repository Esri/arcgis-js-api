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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/Deferred","dijit/form/Select","../../kernel"],function(t,n,e,i,s,r){var a=t([s],{postCreate:function(){this.inherited(arguments),this.value=String(this.value),this._setOptionsFromNBandsArg(this.nBandsArg),this._attachNBandsArgChangeEvent()},_attachNBandsArgChangeEvent:function(){if(this.nBandsArg&&this.nBandsArg.input){var t=this.nBandsArg.input;this.own(t.on("change",n.hitch(this,this._setOptionsFromNBandsArg,this.nBandsArg)))}},_setOptionsFromNBandsArg:function(t){if(t&&t.input){var e=t.input.getSelectedLayer();e&&this._getBandCount(e).then(n.hitch(this,function(t){this.set("options",this._createOptions(t))}),n.hitch(this,function(){this.set("options",this._createOptions(e.bandCount))}))}else this.set("options",this._createFallbackOptions(this.value));this.reset()},_getBandCount:function(t){var n,e=new i;return t||e.reject(),t.renderingRule&&t.currentVersion>=10.3?t.getRenderingRuleServiceInfo(t.renderingRule).then(function(n){return n?n.bandCount:t.bandCount}):(n=t.bandCount,void 0===n&&null===n||e.resolve(n),e.promise)},_createOptions:function(t){for(var n=0,e=[];n<t;)e.push({value:String(n),label:String(n+1),selected:this.value===String(n)}),n++;return e},_createFallbackOptions:function(t){return[{value:t,label:String(+t+1)}]}});return e("extend-esri")&&n.setObject("dijit.RasterFunctionEditor.RFxBandIndexPicker",a,r),a});