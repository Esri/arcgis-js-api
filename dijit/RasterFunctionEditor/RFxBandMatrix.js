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

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./EditableGridMixin","./RFxGridBase"],(function(i,t,e,a,n,d,s,r,o,h){var l=i("RFxBandMatrix",[d,s,r,n,o],{templateString:"<div><div data-dojo-attach-point='bandMatrix'></div></div>",baseClass:"esriRFxBandMatrix",nCols:0,displayNames:[],dataType:h.DATA_TYPES.double,_store:null,_grid:null,postCreate:function(){this.inherited(arguments),this._initializeGrid(),this._grid.on("grid-data-change",a.hitch(this,(function(i){this._updateValue(i)})))},_initializeGrid:function(){var i=this._getGridSchema(),t=this._createDataObject(this.value);this._grid=new h({schema:i,data:t,hasIdColumn:!0},this.bandMatrix),this._grid.startup()},_getGridSchema:function(){return this.displayNames.map((function(i,t){return{label:i,name:t+1,dataType:this.dataType}}),this)},_createDataObject:function(){var i=[],t=a.clone(this._getProcessedValue?this._getProcessedValue():this.value);if(t)for(;t.length;){var e=t.splice(0,this.nCols),n={};e.forEach((function(i,t){n[t+1]=i})),i.push(n)}return i},_updateValue:function(i){var t=[];i.forEach((function(i){"*"!==i.idNum&&Object.keys(i).forEach((function(e){e&&!isNaN(i[e])&&"id"!==e&&"idNum"!==e&&t.push(i[e])}))})),this.value=this._createComplexValue?this._createComplexValue(t):t}});return t("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.RFxBandMatrix",l,e),l}));