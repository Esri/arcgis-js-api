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

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./EditableGridMixin","./RFxGridBase"],(function(i,t,e,a,s,n,d,r,h,l){var u=i("RFxBandMatrix",[n,d,r,s,h],{templateString:"<div><div data-dojo-attach-point='bandMatrix'></div></div>",baseClass:"esriRFxBandMatrix",nCols:0,displayNames:[],dataType:l.DATA_TYPES.double,_store:null,_grid:null,refreshGrid:null,updateValue:null,hasIdColumn:!0,isExtensible:!0,postCreate:function(){this.inherited(arguments),this._initializeGrid(),this._grid.on("grid-data-change",a.hitch(this,(function(i){this._updateValue(i)}))),this.refreshGrid=this._refreshGrid.bind(this),this.updateValue=this._updateValue.bind(this)},_initializeGrid:function(){var i=this._getGridSchema(),t=this._createDataObject(this.value);this._grid=new l({schema:i,data:t,hasIdColumn:this.hasIdColumn,isExtensible:this.isExtensible},this.bandMatrix),this._grid.startup()},_getGridSchema:function(){return this.displayNames.map((function(i,t){return{label:i,name:t+1,dataType:this.dataType}}),this)},_createDataObject:function(){var i=[],t=a.clone(this._getProcessedValue?this._getProcessedValue():this.value);if(t)for(;t.length;){var e=t.splice(0,this.nCols),s={};e.forEach((function(i,t){s[t+1]=i})),i.push(s)}return i},_updateValue:function(i){var t=[];i.forEach((function(i){"*"!==i.idNum&&Object.keys(i).forEach((function(e){e&&!isNaN(i[e])&&"id"!==e&&"idNum"!==e&&t.push(i[e])}))})),this.value=this._createComplexValue?this._createComplexValue(t):t,this.emit("change")},_refreshGrid:function(){var i=this._createDataObject(this.value);this._grid.updateStoreValue(i)}});return t("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.RFxBandMatrix",u,e),u}));