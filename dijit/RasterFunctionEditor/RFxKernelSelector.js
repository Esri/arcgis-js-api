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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","dojo/text!./templates/RFxKernelSelector.html","dojo/text!../../layers/support/rasterFunctionResources.json","../../kernel","dojo/_base/lang","dojo/store/Memory","dojo/data/ObjectStore","dojo/query","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./SimpleMatrixCreator","./utils"],function(e,t,i,s,n,o,r,l,u,h,a,d,p,c,_){var m=e("RFxKernelSelector",[a,d,p,c],{templateString:i,declaredClass:"esri.dijit.RasterFunctionEditor.RFxKernelSelector",KERNEL_TYPE_INFO:h.parse(s).kernelTypesInfo,isEditable:!1,postCreate:function(){this.inherited(arguments),this._setLabels(),this._setupTypeSelect(),this._info&&this._initializeGrid()},_setLabels:function(){this.inputArgs&&(this.typeLabel.innerHTML=this.inputArgs.ConvolutionType.displayName||this.inputArgs.ConvolutionType.name,this.rowsLabel.innerHTML=this.inputArgs.Rows.displayName||this.inputArgs.Rows.name,this.columnsLabel.innerHTML=this.inputArgs.Columns.displayName||this.inputArgs.Columns.name,this.kernelLabel.innerHTML=this.inputArgs.Kernel.displayName||this.inputArgs.Kernel.name)},_setupTypeSelect:function(){if(this.rasterFunctionEnums&&this.rasterFunctionEnums.esriRasterFilterTypes){var e=_.getEnumData(this.rasterFunctionEnums.esriRasterFilterTypes);if(this.typeSelect.set("store",new l(new r({data:e,idProperty:"key"}))),this.type=this.inputArgs.ConvolutionType&&this.inputArgs.ConvolutionType.value,-1===this.type){var t={};t.rows=this.inputArgs.Rows&&this.inputArgs.Rows.value,t.columns=this.inputArgs.Columns&&this.inputArgs.Columns.value,t.value=this.inputArgs.Kernel&&this.inputArgs.Kernel.value,this._info=t,this._setRowColumnControl()}this.typeSelect.set("value",this.type)}},_updateValue:function(e){this.inputArgs.Kernel.value=this._getValueFromGridData(e)},_onTypeChange:function(e){e=parseInt(e,10),-1===e?(this.isEditable=!0,255===this.type&&(this._info=o.clone(this.KERNEL_TYPE_INFO[19])),this._hideRowsAndColumns(!1),this._hideKernelSelector(!1),this._initializeGrid(),this._updateValue(this._grid.getStoreValue())):255===e?(this._info=o.clone(this.KERNEL_TYPE_INFO[e]),this._info.value=[],this._hideRowsAndColumns(!0),this._hideKernelSelector(!0),this._resetKernelValue()):(this._info=o.clone(this.KERNEL_TYPE_INFO[e]),this.isEditable=!1,this._hideRowsAndColumns(!0),this._hideKernelSelector(!1),this._initializeGrid(),this._resetKernelValue()),this.type=e,this._setRowColumnControl(),this.inputArgs.ConvolutionType.value=e},_hideRowsAndColumns:function(e){u(".esri-kernel-selector-user-defined").forEach(function(t){e?t.classList.add("hide"):t.classList.remove("hide")})},_hideKernelSelector:function(e){u(".esri-kernel-selector-none").forEach(function(t){e?t.classList.add("hide"):t.classList.remove("hide")})},_resetKernelValue:function(){this.inputArgs.Kernel.value=void 0},_setRowColumnControl:function(){this.rowsSelect.set("value",this._info.rows),this.columnsSelect.set("value",this._info.columns)},_onRowChange:function(e){this.type&&-1===this.type&&(this._info.rows=e,this._onGridSizeChange(),this.inputArgs.Rows.value=e,this.inputArgs.Kernel.value=this._info.value)},_onColumnChange:function(e){this.type&&-1===this.type&&(this._info.columns=e,this._onGridSizeChange(),this.inputArgs.Columns.value=e,this.inputArgs.Kernel.value=this._info.value)}});return t("extend-esri")&&o.setObject("dijit.RasterFunctionEditor.RFxKernelSelector",m,n),m});