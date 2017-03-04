// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","dojo/_base/json","dojo/string","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./RasterAnalysisMixin","./utils","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ConvertFeatureToRaster.html"],function(e,t,i,l,s,a,n,u,r,o,d,c,h,v,F,p,_,S){var g=e([u,r,o,d,c,F],{declaredClass:"esri.dijit.analysis.ConvertFeatureToRaster",templateString:S,widgetsInTemplate:!0,inputLayer:null,valueField:null,cellsize:null,cellUnit:null,dx:null,dy:null,toolName:"ConvertFeatureToRaster",helpFileName:"ConvertFeatureToRaster",toolNlsName:_.convertFeatureToRasterTool,rasterGPToolName:"ConvertFeatureToRaster",resultParameter:"outputRaster",_getJobParameters:function(){var e=this.get("valueField"),t=s.toJson(p.constructAnalysisInputLyrObj(this.get("inputLayer"))),i={distance:this.get("cellsize"),units:this.get("cellSizeUnit")};return{valueField:e,inputFeature:t,outputCellSize:n.stringify(i)}},_setDefaultInputs:function(){this.set("valueFieldSelect",this.valueField),this._cellSizeUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this.cellsize&&this._cellsizeInput.set("value",this.cellsize),this.cellUnit&&this._cellSizeUnitsSelect.set("value",this.cellUnit)},_resetUI:function(){this.set("valueFieldSelect",this.valueField)},_setValueFieldSelectAttr:function(e){if(this.inputLayer){var t=this.inputLayer.fields;this._valueFieldSelect.removeOption(this._valueFieldSelect.getOptions()),l.forEach(t,function(e){-1!==l.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"],e.type)&&e.name!==this.inputLayer.objectIdField&&this._valueFieldSelect.addOption({value:e.name,label:v.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})},this),e&&this._valueFieldSelect.set("value",e)}},_setValueFieldAttr:function(e){this.valueField=e},_getValueFieldAttr:function(){return this._valueFieldSelect&&this._valueFieldSelect.get("value")&&(this.valueField=this._valueFieldSelect.get("value")),this.valueField},_getCellsizeAttr:function(){return this._outputCellSizeInput&&this._outputCellSizeInput.get("value")&&(this.cellsize=this._outputCellSizeInput.get("value")),this.cellsize},_setCellsizeAttr:function(e){this.cellsize=e},_getCellSizeUnitAttr:function(){return this._cellSizeUnitsSelect&&this._cellSizeUnitsSelect.get("value")&&(this.cellUnit=this._cellSizeUnitsSelect.get("value")),this.cellUnit},_setCellSizeUnitAttr:function(e){this.cellUnit=e}});return i("extend-esri")&&t.setObject("dijit.analysis.ConvertFeatureToRaster",g,h),g});