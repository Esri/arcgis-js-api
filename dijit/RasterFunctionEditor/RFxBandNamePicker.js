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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/store/Memory","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","../../lang","../../kernel","dojo/text!./templates/RFxBandNamePicker.html"],(function(t,e,n,a,i,o,s,r,d,h){var l=t([i,o,s],{templateString:h,postCreate:function(){this.inherited(arguments),this._setOptionsFromNBandsArg(this.nBandsArg),this._attachNBandsArgChangeEvent()},_attachNBandsArgChangeEvent:function(){if(this.nBandsArg&&this.nBandsArg.input){var t=this.nBandsArg.input;this.own(t.on("change",e.hitch(this,this._setOptionsFromNBandsArg,this.nBandsArg)))}},_setOptionsFromNBandsArg:function(t){if(t&&t.input&&"function"==typeof t.input.getSelectedLayer){var n=t.input.getSelectedLayer();n?(this._setSelectReadOnly(!0),n.loaded?this._onLayerLoad(n):n.on("load",e.hitch(this,(function(){this._onLayerLoad(n)})))):(this._setSelectReadOnly(!1),this._createFallbackOptions(this.value))}else this.set("options",this._createFallbackOptions(this.value))},_onLayerLoad:function(t){var e=t.serviceRasterInfo||t.raster&&t.raster.rasterInfo,n=this._getBandNames(e);n=n||t.bandNames,this._setCurrentValue(n),this._populateComboBox(n)},_getBandNames:function(t){if(t){for(var e=t.keyProperties&&t.keyProperties.BandProperties,n=t.bandCount||0,a=[],i=0;i<n;i++)a.push(i);return a.map((function(n){return e&&e.length===t.bandCount&&e[n]&&e[n].BandName||"Band_"+(n+1)}))}},_populateComboBox:function(t){if(t){for(var e=0,n=[];e<t.length;)n.push({id:e,name:t[e]}),e++;this._setComboBoxStore(n)}},_createFallbackOptions:function(t){if(null!=t&&""!==t){var e=[{id:0,name:t}];this._setComboBoxStore(e)}},_setCurrentValue:function(t){t&&(!this.value||t.indexOf(this.value)<0)&&(this.value=t[0])},_setComboBoxStore:function(t){var e=new a({data:t,idProperty:"id"});this._comboBox.set("store",e),this._comboBox.set("value",this.value)},_setSelectReadOnly:function(t){this._comboBox.textbox.readOnly=t},_handleComboBoxChange:function(t){this.value=t}});return n("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxBandNamePicker",l,d),l}));