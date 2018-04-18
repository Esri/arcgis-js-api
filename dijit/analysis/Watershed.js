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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/_base/array","dojo/_base/json","dojo/_base/connect","dojo/dom-class","dojo/dom-style","dojo/string","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","esri/layers/ArcGISImageServiceLayer","../../kernel","../../lang","./utils","./RasterAnalysisMixin","./AnalysisRegistry","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/Watershed","dojo/text!./templates/Watershed.html"],function(t,e,i,n,r,o,s,a,u,l,p,c,d,h,y,F,_,f,L,R,P,m,D,j,w){var g=e([c,d,h,y,F,P],{declaredClass:"esri.dijit.analysis.Watershed",templateString:w,widgetsInTemplate:!0,inputFlowDirectionRaster:null,inputLayer:null,pourPointField:null,_NOVALUE_:"NOVALUE",toolName:"Watershed",helpFileName:"Watershed",toolNlsName:j,rasterGPToolName:"Watershed",resultParameter:"outputRaster",constructor:function(t,e){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode),this.inputLayer=t.inPourPointRasterOrFeatures},_getJobParameters:function(){var t=o.toJson(R.constructAnalysisInputLyrObj(this.get("inputLayer"))),e=this.get("pourPointField");return{inputFlowDirectionRaster:o.toJson(R.constructAnalysisInputLyrObj(this.get("inputFlowDirectionRaster"))),inPourPointRasterOrFeatures:t,pourPointField:e}},_handleInputFlowDirectionRasterChange:function(t){t>=0&&this.set("inputFlowDirectionRaster",this.inputFlowDirectionRasterLayers[t])},_handlePourPointFieldChange:function(t){this.set("pourPointField",t)},_resetUI:function(){this.inputLayer&&this._addPourPointFieldOptions(),this.inputFlowDirectionRaster||(this.inputFlowDirectionRaster=this.inputFlowDirectionRasterLayers[0])},_addPourPointFieldOptions:function(){var t=[];this._pourPointField.removeOption(this._pourPointField.getOptions());var e;e=this.inputLayer instanceof _?this.inputLayer.hasRasterAttributeTable?this.inputLayer._rasterAttributeTableFields:[{value:"VALUE",label:"VALUE"}]:this.inputLayer.fields,r.forEach(e,i.hitch(this,function(e){this._isNumberType(e.type)&&t.push({value:e.name,label:e.alias,selected:e.name===this.pourPointField})})),!this.pourPointField&&t&&t[0]&&this.set("pourPointField",t[0].value),this._pourPointField.addOption(t)},_isNumberType:function(t){return t===m.FieldTypes.Integer||t===m.FieldTypes.Double||t===m.FieldTypes.Short||t===m.FieldTypes.Float},_addInputFlowDirectionRasterLayerOptions:function(){var t=[];this._inputFlowDirectionRasterSelect.removeOption(this._inputFlowDirectionRasterSelect.getOptions()),r.forEach(this.inputFlowDirectionRasterLayers,i.hitch(this,function(e,i){t.push({label:e.name,value:i,selected:this._isSelected(e)})})),this._inputFlowDirectionRasterSelect.addOption(t)},_isSelected:function(t){return this.inputFlowDirectionRaster&&t&&this.inputFlowDirectionRaster.url===t.url},_setInputLayerAttr:function(t){this.inputLayer=t},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(t){this.inputLayers=r.filter(t,function(t){return t.geometryType===m.GeometryTypes.Point||t.geometryType===m.GeometryTypes.Line||t.geometryType===m.GeometryTypes.MultiPoint||t instanceof _}),this.set("inputFlowDirectionRasterLayers",t)},_getInputLayersAttr:function(t){return this.inputLayers},_getInputFlowDirectionRasterAttr:function(){return this.inputFlowDirectionRaster},_setInputFlowDirectionRasterAttr:function(t){t instanceof _&&(this.inputFlowDirectionRaster=t)},_setInputFlowDirectionRasterLayersAttr:function(t){this.inputFlowDirectionRasterLayers=r.filter(t,function(t){return t instanceof _}),this._addInputFlowDirectionRasterLayerOptions()},_getInputFlowDirectionRasterLayersAttr:function(){return this.inputFlowDirectionRasterLayers},_setPourPointFieldAttr:function(t){this.pourPointField=t},_getPourPointFieldAttr:function(){return this.pourPointField}});return n("extend-esri")&&i.setObject("dijit.analysis.Watershed",g,f),g});