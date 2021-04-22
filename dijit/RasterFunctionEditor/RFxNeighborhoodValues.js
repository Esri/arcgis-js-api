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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","dojo/text!./templates/RFxNeighborhoodValues.html","dojo/i18n!../../nls/jsapi","../../kernel","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./SimpleMatrixCreator"],(function(i,t,e,s,o,n,h,r,a,g){var u=i("RFxNeighborhoodValues",[h,r,a,g],{templateString:e,declaredClass:"esri.dijit.RasterFunctionEditor.RFxNeighborhoodValues",constructor:function(){this.inherited(arguments),this._i18n=s.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._setLabels(),this._getInfo(),this._info&&this._initializeGrid(),this._setupTriggerArgs()},_setupTriggerArgs:function(){this.triggerArgs.Width.input.on("change",this._onWidthValueChange.bind(this)),this.triggerArgs.Height.input.on("change",this._onHeightValueChange.bind(this))},_getInfo:function(){var i,t,e;this._info={},this.inputArgs&&this.inputArgs.NeighborhoodValues&&this.inputArgs.NeighborhoodValues.value.length?(i=this.inputArgs.NeighborhoodValues.value,t=this.triggerArgs.Width.value,e=this.triggerArgs.Height.value):t=e=3,this._info.columns=t,this._info.rows=e,this._info.value=i},_updateValue:function(i){this.inputArgs.NeighborhoodValues.value=this._getValueFromGridData(i)},_onWidthValueChange:function(i){this._info&&(!i||i<=0?this.triggerArgs.Width.input.set("displayedValue",this._info.columns):(this._info.columns=i,this._onGridSizeChange(),this.inputArgs.NeighborhoodValues.value=this._info.value))},_onHeightValueChange:function(i){this._info&&(!i||i<=0?this.triggerArgs.Height.input.set("displayedValue",this._info.rows):(this._info.rows=i,this._onGridSizeChange(),this.inputArgs.NeighborhoodValues.value=this._info.value))},_setLabels:function(){this.inputArgs&&this.inputArgs.NeighborhoodValues&&(this.neighborhoodLabel.innerHTML=this.inputArgs.NeighborhoodValues.displayName)}});return t("extend-esri")&&n.setObject("dijit.RasterFunctionEditor.RFxNeighborhoodValues",u,o),u}));