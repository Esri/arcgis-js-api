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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","dojo/_base/json","dojo/_base/connect","dojo/dom-class","dojo/dom-style","dojo/string","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./utils","./RasterAnalysisMixin","dojo/i18n!../../nls/jsapi","dojo/text!./templates/CalculateDensityRaster.html"],function(e,t,i,s,l,n,a,c,u,r,h,o,d,_,S,p,U,g,F,v,D,f){var m=t([o,d,_,S,p,v],{declaredClass:"esri.dijit.analysis.CalculateDensityRaster",templateString:f,widgetsInTemplate:!0,inputLayer:null,countField:null,searchDistance:null,searchDistUnit:null,cellSize:null,areaUnit:null,cellUnit:null,_NOVALUE_:"NOVALUE",toolName:"CalculateDensityRaster",helpFileName:"CalculateDensityRaster",toolNlsName:D.calculateDensityRasterTool,rasterGPToolName:"CalculateDensity",resultParameter:"outputRaster",_getJobParameters:function(){var e=n.toJson(F.constructAnalysisInputLyrObj(this.get("inputLayer"))),t=this.get("countField"),i=this.get("searchDistance"),s={distance:i,units:this.get("searchUnit")},l=this.get("areaUnit"),a=this.get("cellSize"),c={distance:a,units:this.get("cellSizeUnit")};return{inputPointOrLineFeatures:e,countField:t,searchDistance:i?h.stringify(s):null,outputAreaUnits:l,outputCellSize:a?h.stringify(c):null}},_setDefaultInputs:function(){this.set("countFields",this.countField),this._searchDistanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this._areaUnitsSelect.addOption([{value:"SquareMiles",label:this.i18n.sqMiles},{value:"SquareFeet",label:this.i18n.sqFeet},{type:"separator"},{value:"SquareMeters",label:this.i18n.sqMeters},{value:"SquareKilometers",label:this.i18n.sqKm}]),this._cellSizeUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),this.countField&&this._countFieldSelect.set("value",this.countField),this.searchDistance&&this._searchDistanceInput.set("value",this.searchDistance),this.searchDistUnit&&this._searchDistanceUnitsSelect.set("value",this.searchDistUnit),this.cellSize&&this._cellSizeInput.set("value",this.cellSize),this.areaUnit&&this._areaUnitsSelect.set("value",this.areaUnit),this.cellUnit&&this._cellSizeUnitsSelect.set("value",this.cellUnit)},_resetUI:function(){this.set("countFields",this.countField)},_setSearchDistanceAttr:function(e){this.searchDistance=e},_getSearchDistanceAttr:function(){return this._searchDistanceInput&&this._searchDistanceInput.get("value")&&(this.searchDistance=this._searchDistanceInput.get("value")),this.searchDistance},_setCountFieldsAttr:function(e){if(this.inputLayer){var t=this.inputLayer.fields;this._countFieldSelect&&this._countFieldSelect.removeOption(this._countFieldSelect.getOptions()),this._countFieldSelect.addOption({value:this._NOVALUE_,label:this.i18n.chooseCountField}),l.forEach(t,function(e){-1!==l.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],e.type)&&e.name!==this.inputLayer.objectIdField&&this._countFieldSelect.addOption({value:e.name,label:g.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})},this),e&&this._countFieldSelect.set("value",e)}},_setCountFieldAttr:function(e){this.countField=e},_getCountFieldAttr:function(){return this._countFieldSelect&&this._countFieldSelect.get("value")&&(this.countField=this._countFieldSelect.get("value")!==this._NOVALUE_?this._countFieldSelect.get("value"):null),this.countField},_getCellSizeAttr:function(){return this._outputCellSizeInput&&this._outputCellSizeInput.get("value")&&(this.cellSize=this._outputCellSizeInput.get("value")),this.cellSize},_setCellSizeAttr:function(e){this.cellSize=e},_getAreaUnitAttr:function(){return this._areaUnitsSelect&&this._areaUnitsSelect.get("value")&&(this.areaUnit=this._areaUnitsSelect.get("value")),this.areaUnit},_setAreaUnitAttr:function(e){this.areaUnit=e},_getCellSizeUnitAttr:function(){return this._cellSizeUnitsSelect&&this._cellSizeUnitsSelect.get("value")&&(this.cellUnit=this._cellSizeUnitsSelect.get("value")),this.cellUnit},_setCellSizeUnitAttr:function(e){this.cellUnit=e},_getSearchUnitAttr:function(){return this._searchDistanceUnitsSelect&&this._searchDistanceUnitsSelect.get("value")&&(this.searchUnit=this._searchDistanceUnitsSelect.get("value")),this.searchUnit},_setSearchSizeUnitAttr:function(e){this.searchUnit=e},_setMapAttr:function(e){this.map=e},_getMapAttr:function(){return this.map}});return s("extend-esri")&&i.setObject("dijit.analysis.CalculateDensityRaster",m,U),m});