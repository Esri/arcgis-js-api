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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/_base/array","dojo/store/Memory","dojo/data/ObjectStore","dojo/dom-construct","dojo/dom-style","dijit/form/Select","dijit/form/TextBox","dijit/form/CheckBox","dijit/form/Button","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./utils","dojo/i18n!../../nls/jsapi"],function(t,e,a,s,r,i,n,o,d,l,u,h,c,m,p,_,R,f){var v=t("RFxNamedRasterEditor",[m,p,_],{templateString:"<div class='esriRFxNamedRasterEditor'><table data-dojo-attach-point='rasterInputsTable' class='esriRFxArgsEditor__table--auto'><tr><td colspan=4>${_i18n.rfxNamedRasterEditor.rasterVariables}</div></td></tr></table></div>",schemaArgDefinitions:{},inputArgs:{},rasterArgs:{},rasterFunctionSchema:null,rasterFunctionEnums:null,inputLayers:null,constructor:function(t){this.inherited(arguments),this._i18n=f.widgets.rasterFunctionEditor,this.namedRasterControls=[]},postCreate:function(){this.inherited(arguments),this._readValues()},_readValues:function(){var t=this.inputArgs,e=t&&t.InputNames;e&&e.value?r.forEach(e.value,s.hitch(this,this._addRow)):this._addRow(this._i18n.rfxArgsEditor.raster)},_getInputLayersStore:function(){var t={name:"<div style='display: none;'></div>",id:"empty_item"};return new n(new i({data:this.inputLayers.concat([t])}))},_addRow:function(t){this._layerSelectHandle&&this._layerSelectHandle.remove();var e,a,r,i,n,d,h;e=o.create("tr",null,this.rasterInputsTable),a=o.create("td",{class:"esriRFxNamedRasterEditor__td--input"},e),o.create("td",{innerHTML:"=",class:"esriRFxNamedRasterEditor__td--assignment"},e),r=o.create("td",null,e),o.create("td",{class:"esriRFxNamedRaster__td--delete",onclick:s.hitch(this,this._cleanupVariables,e)},e),i=o.create("div",null,a,"first"),n=o.create("div",null,r),d=new u({value:t||"",onChange:s.hitch(this,this._updateNamedRasters)},i),h=new l({store:this._getInputLayersStore(),labelAttr:"name",labelType:"html",value:"empty_item",onChange:s.hitch(this,this._updateNamedRasters)},n),h.getOptions("empty_item").disabled=!0,this.namedRasterControls.push({inputNameControl:d,layerControl:h,parent:e}),d.startup(),h.startup(),this._updateVariablesUI(),this._layerSelectHandle=h.on("change",s.hitch(this,this._addRow,"")),this.own(this._layerSelectHandle),this._updateNamedRasters()},_updateVariablesUI:function(){var t=this.namedRasterControls.length-1;r.forEach(this.namedRasterControls,function(e,a){e&&e.deleteCheckbox&&e.deleteCheckbox.domNode&&(a===t?d.set(e.deleteCheckbox.domNode,"visibility","hidden"):d.set(e.deleteCheckbox.domNode,"visibility","visible"))})},_cleanupVariables:function(t){if(t){var e=this.namedRasterControls.length-1;r.some(this.namedRasterControls,function(a,s){s!==e&&a&&a.parent===t&&(a.inputNameControl.destroy(),a.layerControl.destroy(),o.destroy(t),this.namedRasterControls[s]=null)},this),this.namedRasterControls=r.filter(this.namedRasterControls,function(t){return t}),this._updateNamedRasters()}},_updateNamedRasters:function(){var t=[],e=[],a=this.inputArgs;r.forEach(this.namedRasterControls,function(a){if(a){var s=R.getRasterJsonFromLayer(a.layerControl.store.get(a.layerControl.value));s&&""!==a.inputNameControl.value&&(t.push(s),e.push(a.inputNameControl.value))}}),a&&(a.Rasters&&(a.Rasters.value=t),a.InputNames&&(a.InputNames.value=e))}});return e("extend-esri")&&s.setObject("dijit.RasterFunctionEditor.RFxNamedRasterEditor",v,a),v});