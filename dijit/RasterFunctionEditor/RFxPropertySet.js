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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/Evented","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxPropertySet.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./EditableGridMixin","./RFxGridBase"],function(t,e,i,a,r,s,n,o,d,h,c,l){var u=t("RFxPropertySet ",[o,d,h,r,c],{templateString:n,baseClass:"esriRFxPropertySet",colNames:["name","value"],dataType:l.DATA_TYPES.string,_store:null,_grid:null,constructor:function(){this.inherited(arguments),this._i18n=s.widgets.rasterFunctionEditor.rfxPropertySet},postCreate:function(){this.inherited(arguments),this._initializeGrid(),this._grid.on("grid-data-change",a.hitch(this,this._updateValue))},_initializeGrid:function(){var t=this._getGridSchema(),e=this._createDataObject(this.value);this._grid=new l({schema:t,data:e,hasIdColumn:!0},this.propertySet),this._grid.startup()},_getGridSchema:function(){return this.colNames.map(function(t){return{label:this._i18n[t.toLowerCase()],name:t,dataType:this.dataType}},this)},_createDataObject:function(){var t=[];return this.value&&Object.keys(this.value).forEach(function(e){if("type"!==e&&"_object_id"!==e){var i={};i[this.colNames[0]]=e,i[this.colNames[1]]=this.value[e],t.push(i)}},this),t},_updateValue:function(t){var e={};t.forEach(function(t){"*"!==t.idNum&&(e[t[this.colNames[0]]]=t[this.colNames[1]])},this),e.type="PropertySet",this.value=e}});return e("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.RFxBandMatrix",u,i),u});