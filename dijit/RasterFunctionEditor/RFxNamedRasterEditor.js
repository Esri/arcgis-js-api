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

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/dom-style","dijit/form/TextBox","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./RFxRasterInput","./utils","dojo/i18n!../../nls/jsapi"],(function(t,e,a,s,i,r,n,d,o,l,u,h,c,m){var R=t("RFxNamedRasterEditor",[o,l,u],{templateString:"<div class='esriRFxNamedRasterEditor'><table data-dojo-attach-point='rasterInputsTable' class='esriRFxArgsEditor__table--auto'><tr><td colspan=4>${_i18n.rfxNamedRasterEditor.rasterVariables}</div></td></tr></table></div>",schemaArgDefinitions:{},inputArgs:{},rasterArgs:{},rasterFunctionSchema:null,rasterFunctionEnums:null,inputLayers:null,constructor:function(t){this.inherited(arguments),this._i18n=m.widgets.rasterFunctionEditor,this.namedRasterControls=[]},postCreate:function(){this.inherited(arguments),this._readValues()},_readValues:function(){for(var t=this.inputArgs,e=t&&t.InputNames&&t.InputNames.value||[],a=t&&t.Rasters,s=a&&(a.value&&a.value.elements||a.value)||[],i=Math.max(s.length,e.length),r=0;r<i;){var n=s[r];this._addRow(e[r],n),r++}this._addRow()},_addRow:function(t,e){var a,s,i,n,o,l,u;(this._layerAddRowHandle||this._inputNameAddRowHandle)&&(this._layerAddRowHandle.remove(),this._inputNameAddRowHandle.remove()),a=r.create("tr",null,this.rasterInputsTable),s=r.create("td",{class:"esriRFxNamedRasterEditor__td--input"},a),r.create("td",{innerHTML:"=",class:"esriRFxNamedRasterEditor__td--assignment"},a),i=r.create("td",null,a),r.create("td",{class:"esriRFxNamedRaster__td--delete",onclick:this._cleanupVariables.bind(this,a)},a),n=r.create("div",null,s,"first"),o=r.create("div",null,i),l=new d({value:t||""},n),u=new h({inputLayers:this.inputLayers,allowScalar:!0,rfxVariable:e,browseProperties:this.browseProperties,selectDefault:!1},o),l.on("change",this._updateNamedRasters.bind(this)),u.on("change",this._updateNamedRasters.bind(this)),this.namedRasterControls.push({inputNameControl:l,layerControl:u,parent:a}),l.startup(),u.startup(),this._updateVariablesUI(),this._layerAddRowHandle=u.on("change",this._addRow.bind(this,"",void 0)),this._inputNameAddRowHandle=l.on("change",this._addRow.bind(this,"",void 0)),this.own(this._layerAddRowHandle),this.own(this._inputNameAddRowHandle),this._updateNamedRasters()},_updateVariablesUI:function(){var t=this.namedRasterControls.length-1;i.forEach(this.namedRasterControls,(function(e,a){e&&e.deleteCheckbox&&e.deleteCheckbox.domNode&&(a===t?n.set(e.deleteCheckbox.domNode,"visibility","hidden"):n.set(e.deleteCheckbox.domNode,"visibility","visible"))}))},_cleanupVariables:function(t){if(t){var e=this.namedRasterControls.length-1;i.some(this.namedRasterControls,(function(a,s){s!==e&&a&&a.parent===t&&(a.inputNameControl.destroy(),a.layerControl.destroy(),r.destroy(t),this.namedRasterControls[s]=null)}),this),this.namedRasterControls=i.filter(this.namedRasterControls,(function(t){return t})),this._updateNamedRasters()}},_updateNamedRasters:function(){var t=[],e=[],a=this.inputArgs;this.namedRasterControls&&i.forEach(this.namedRasterControls,(function(a,s){if(s!==this.namedRasterControls.length-1&&a){var i=a.layerControl,r=a.layerControl.get("value"),n=a.inputNameControl.value;if(r||""!==n){var d=i.rfxVariable,o=c.getArgRFT(d);e.push(n),o?t.push(this.getRFT(o)):t.push(r)}}}),this),a&&(a.Rasters&&(a.Rasters.value=t),a.InputNames&&(a.InputNames.value=e))}});return e("extend-esri")&&s.setObject("dijit.RasterFunctionEditor.RFxNamedRasterEditor",R,a),R}));