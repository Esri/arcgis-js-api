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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","dojo/_base/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","../../kernel","../../lang","./RasterAnalysisMixin","./ItemTypes","./utils","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ConvertRasterToFeature.html"],function(e,t,i,s,l,a,n,u,o,r,p,d,h,y,c,_,f){var F=e([a,n,u,o,r,h],{declaredClass:"esri.dijit.analysis.ConvertRasterToFeature",templateString:f,widgetsInTemplate:!0,browseType:[y.IS],inputLayer:null,valueField:null,simplify:!0,outputType:"Point",resultParameter:"outputFeatures",analysisType:"feature",toolName:"ConvertRasterToFeature",helpFileName:"ConvertRasterToFeature",toolNlsName:_.convertRasterToFeatureTool,rasterGPToolName:"ConvertRasterToFeature",constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.rerun&&(e.inputLayer=e.inputRaster,e.simplify=e.simplifyLinesOrPolygons)},_getJobParameters:function(){return{valueField:this.inputLayer.hasRasterAttributeTable?this.get("valueField"):null,inputRaster:l.toJson(this._getRasterObject(this.get("inputLayer"))),simplifyLinesOrPolygons:this.get("simplify"),outputType:this.get("outputType")}},_setDefaultInputs:function(){this.set("valueFieldSelect",this.valueField),this._simplifyCheck.set("checked",this.simplify),this._simplifyCheck.set("disabled","Point"===this.outputType),this._point.set("checked","Point"===this.outputType),this._line.set("checked","Line"===this.outputType),this._polygon.set("checked","Polygon"===this.outputType)},_handleOutputTypePointChange:function(e){e&&(this.outputType="Point",this._simplifyCheck.set("disabled",!0))},_handleOutputTypeLineChange:function(e){e&&(this.outputType="Line",this._simplifyCheck.set("disabled",!1))},_handleOutputTypePolygonChange:function(e){e&&(this.outputType="Polygon",this._simplifyCheck.set("disabled",!e))},_resetUI:function(){this.set("valueFieldSelect",this.valueField)},_setValueFieldSelectAttr:function(e){if(this._valueFieldSelect.removeOption(this._valueFieldSelect.getOptions()),this.inputLayer){if(!this.inputLayer.hasRasterAttributeTable)return void this._valueFieldSelect.addOption({value:"VALUE",label:"VALUE"});var t=this.inputLayer._rasterAttributeTableFields;s.forEach(t,function(e){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"],e.type)&&e.name!==this.inputLayer.objectIdField&&this._valueFieldSelect.addOption({value:e.name,label:d.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})},this),e&&this._valueFieldSelect.set("value",e)}},_setValueFieldAttr:function(e){this.valueField=e},_getValueFieldAttr:function(){return this._valueFieldSelect&&this._valueFieldSelect.get("value")&&(this.valueField=this._valueFieldSelect.get("value")),this.valueField},_getSimplifyAttr:function(){return this._simplifyCheck&&(this.simplify=this._simplifyCheck.get("checked")),this.simplify},_setSimplifyAttr:function(e){this.simplify=e}});return i("extend-esri")&&t.setObject("dijit.analysis.ConvertRasterToFeature",F,p),F});