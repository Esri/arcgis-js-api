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

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/Evented","dojo/i18n!../../nls/jsapi","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./EditableGridMixin","./RFxGridBase"],(function(t,e,i,a,s,r,n,d,l,h,u){var o=t("RFxBandMatrix",[n,d,l,s,h],{templateString:"<div><div data-dojo-attach-point='bandMatrix'></div></div>",baseClass:"esriRFxBandMatrix",declaredClass:"esri.widgets.ToolModeler.RasterFunctionEditor.ArgumentEditors.RFxBandMatrix",nCols:0,displayNames:[],dataType:u.DATA_TYPES.double,_store:null,_grid:null,refreshGrid:null,updateValue:null,hasIdColumn:!0,isExtensible:!0,constructor:function(){this._i18n=r.rasterFunctions.rfxArgs},postCreate:function(){this.inherited(arguments),this._initializeGrid(),this._grid.on("grid-data-change",a.hitch(this,(function(t){this._updateValue(t)}))),this.refreshGrid=this._refreshGrid.bind(this),this.updateValue=this._updateValue.bind(this)},onRasterChange:function(){this.setGridData()},_initializeGrid:function(){var t=this._getGridSchema(),e=this._createDataObject(this.value);this._grid=new u({schema:t,data:e,hasIdColumn:this.hasIdColumn,isExtensible:this.isExtensible},this.bandMatrix),this._grid.startup()},_getGridSchema:function(){return this.displayNames.map((function(t,e){return{label:t,name:e+1,dataType:this.dataType}}),this)},_createDataObject:function(){var t=[],e=a.clone(this._getProcessedValue?this._getProcessedValue():this.value);if(e)for(;e.length;){var i=e.splice(0,this.nCols),s={};i.forEach((function(t,e){s[e+1]=t})),t.push(s)}return t},_updateValue:function(t){var e=[];t.forEach((function(t){"*"!==t.idNum&&Object.keys(t).forEach((function(i){i&&!isNaN(t[i])&&"id"!==i&&"idNum"!==i&&e.push(t[i])}))})),this.schemaDataType===u.DATA_TYPES.stringArray&&e.forEach((function(t,i){e[i]=null===t?"":t.toString()})),this.value=this._createComplexValue?this._createComplexValue(e):e,this.emit("change")},setGridData:function(){if(this.layerArg&&this.layerArg.input){var t,e=this.layerArg.input;if(e.declaredClass.indexOf("RFxRasterInput")>0&&e.value){if(!(t=e.getSelectedLayer(e.get("value").name)))return;var i=this._getGridSchema(),a=i[0].label===this._i18n.noDataValuesName?null:0,s=new Array(t.bandCount*i.length).fill(a);this.value=s,s=this._createDataObject(),this._grid&&this._grid.updateStoreValue(s)}}},_refreshGrid:function(){var t=this._createDataObject(this.value);this._grid.updateStoreValue(t)}});return e("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.RFxBandMatrix",o,i),o}));