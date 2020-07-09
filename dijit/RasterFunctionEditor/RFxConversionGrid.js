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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","dojo/text!./templates/RFxConversionGrid.html","dojo/i18n!../../nls/jsapi","../../kernel","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./SimpleMatrixCreator"],(function(i,t,n,e,s,r,o,a,h,u){var d=i("RFxConversionGrid",[o,a,h,u],{templateString:n,declaredClass:"esri.dijit.RasterFunctionEditor.RFxConversionGrid",constructor:function(){this.inherited(arguments),this._i18n=e.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._setLabels(),this._getInfo(),this._info&&this._initializeGrid()},_getInfo:function(){var i,t;this._info={},this.inputArgs&&this.inputArgs.ConversionMatrix&&this.inputArgs.ConversionMatrix.value&&this.inputArgs.ConversionMatrix.value.length?(i=this.inputArgs.ConversionMatrix.value,t=Math.sqrt(i.length)):t=3,this.gridSize.set("value",t),this._info.columns=t,this._info.rows=t,this._info.value=i},_updateValue:function(i){this.inputArgs.ConversionMatrix.value=this._getValueFromGridData(i)},_onSizeValueChange:function(i){i&&(this._info.columns=i,this._info.rows=i,this._onGridSizeChange(),this.inputArgs.ConversionMatrix.value=this._info.value)},_setLabels:function(){this.inputArgs&&this.inputArgs.ConversionMatrix&&(this.gridLabel.innerHTML=this.inputArgs.ConversionMatrix.displayName)}});return t("extend-esri")&&r.setObject("dijit.RasterFunctionEditor.RFxConversionGrid",d,s),d}));