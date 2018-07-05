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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["../../kernel","./AnalysisRegistry","./RasterAnalysisMixin","./utils","dijit/_FocusMixin","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","esri/layers/ArcGISImageServiceLayer","dojo/_base/array","dojo/_base/declare","dojo/_base/json","dojo/_base/lang","dojo/has","dojo/i18n!./nls/DetermineOptimumTravelCostNetwork","dojo/text!./templates/DetermineOptimumTravelCostNetwork.html"],function(t,e,i,r,s,n,o,u,a,p,m,l,c,h,N,y,d){var _=l([u,o,a,n,s,i],{declaredClass:"esri.dijit.analysis.DetermineOptimumTravelCostNetwork",templateString:d,widgetsInTemplate:!0,inputFlowDirectionRaster:null,inputLayer:null,allocationField:null,maximumDistance:{},outputCellSize:{},analysisType:"feature",toolName:"DetermineOptimumTravelCostNetwork",helpFileName:"DetermineOptimumTravelCostNetwork",toolNlsName:y,rasterGPToolName:"DetermineOptimumTravelCostNetwork",outputName:"outputOptimumNetworkName",resultParameter:["outputOptimumNetworkFeatures","outputNeighborNetworkFeatures"],secondaryOutputs:["outputNeighborNetworkFeatures"],secondaryOutputNames:["outputNeighborNetworkName"],constructor:function(t,e){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},_getJobParameters:function(){var t=r.constructAnalysisInputLyrObj(this.get("inputLayer")),e=r.constructAnalysisInputLyrObj(this.get("inputCostRaster"));return this.get("inputLayer").drawnLayer&&(t.drawnLayer=this.get("inputLayer").drawnLayer),{inputRegionsRasterOrFeatures:c.toJson(t),inputCostRaster:c.toJson(e),outputOptimumNetworkName:this.get("outputOptimumNetworkName")}},_setDefaultInputs:function(){this._addInputCostRasterLayerOptions(),this._outputLayerInput.set("value",this.outputOptimumNetworkName&&this.outputOptimumNetworkName.serviceProperties.name),this._outputNeighborNetworkNameInput.set("value",this.outputDirectionName&&this.outputDirectionName.serviceProperties.name),this.addPointAnalysisLayer()},_addInputCostRasterLayerOptions:function(){var t=[];this._inputCostRasterSelect.removeOption(this._inputCostRasterSelect.getOptions());var e=!1;m.forEach(this.inputCostRasters,h.hitch(this,function(i,r){var s=this._isSelected(i,this.inputCostRaster);e=e||s,t.push({label:i.name,value:r,selected:s})})),this._inputCostRasterSelect.addOption(t),e||this._handleInputCostRasterChange(0)},_handleInputCostRasterChange:function(t){t>=0&&this.set("inputCostRaster",this.inputCostRasters[t])},_isSelected:function(t,e){return e&&t&&e.url===t.url},_setInputLayerAttr:function(t){this.inputLayer=t},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(t){this.inputLayers=m.filter(t,function(t){return t.geometryType===e.GeometryTypes.Point||t.geometryType===e.GeometryTypes.Line||t.geometryType===e.GeometryTypes.MultiPoint||t instanceof p}),this.set("inputCostRasters",t)},_getInputLayersAttr:function(t){return this.inputLayers},_getInputCostRasterAttr:function(){return this.inputCostRaster},_setInputFlowDirectionRasterAttr:function(t){t instanceof p&&(this.inputCostRaster=t)},_getInputCostRastersAttr:function(){return this.inputCostRasters},_setInputCostRastersAttr:function(t){this.inputCostRasters=m.filter(t,function(t){return t instanceof p})},_setOutputOptimumNetworkNameAttr:function(t){this.outputOptimumNetworkName=t},_getOutputOptimumNetworkNameAttr:function(){return this._outputLayerInput.get("value")},_setOutputNeighborNetworkNameAttr:function(t){this.outputNeighborNetworkName=t},_getOutputNeighborNetworkNameAttr:function(){return this._outputNeighborNetworkNameInput.get("value")}});return N("extend-esri")&&h.setObject("dijit.analysis.DetermineOptimumTravelCostNetwork",_,t),_});