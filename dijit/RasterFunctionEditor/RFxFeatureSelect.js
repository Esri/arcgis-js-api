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

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/_base/lang","dojo/_base/array","dojo/store/Memory","dojo/store/Observable","dojo/data/ObjectStore","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./utils","../analysis/utils","../analysis/mixins/browselayers/BrowseLayerMixin","dojo/i18n!../../nls/jsapi"],function(e,t,i,a,s,r,o,l,n,h,y,d,c,u,p){var m=e("esri.dijit.RasterFunctionEditor.RFxFeatureSelect",[n,h,y,u],{templateString:"<div><div data-dojo-type='dijit/form/Select' data-dojo-attach-point= '_layerSelect'></div></div>",geometryTypes:{point:"esriGeometryPoint"},value:null,showBrowseLayers:!0,useArcGISComponents:!0,constructor:function(e){this.inherited(arguments),this._i18n=p.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this._populateLayerSelect()},_setInputLayersAttr:function(e){this.inputLayers=e&&e.map(function(e){return e})},_populateLayerSelect:function(){var e=[],t=this.geometryType?this._i18n.rfxFeatureSelect.addPointLayer:this._i18n.rfxFeatureSelect.addFeatureLayer;this.inputLayers&&s.forEach(this.inputLayers,function(t,i){this.geometryType?t.geometryType===this.geometryTypes[this.geometryType]&&e.push({value:i+1,label:t.name}):e.push({value:i+1,label:t.name})},this),this._layerSelect.addOption(e),this._layerChange(),c.addReadyToUseLayerOption(this,[this._layerSelect]),this.own(this._layerSelect.on("change",a.hitch(this,this._handleFeatureLayerChange))),setTimeout(a.hitch(this,function(){this._layerSelect&&this._layerSelect.updateOption({value:"browselayers",label:t,selected:!1})}),1e3),this.on("add-ready-to-use-layer",a.hitch(this,function(e){this.emit("add-layer",e)}))},_handleFeatureLayerChange:function(e){"browselayers"===e||"browse"===e?(this.geometryType&&this._createBrowseItems({browseValue:e},{geometryTypes:this.geometryType},this._layerSelect),this._createBrowseItems({browseValue:e},{},this._layerSelect)):this._layerChange()},_handleBrowseItemsSelect:function(e){e&&e.selection&&c.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._layerSelect,posIncrement:1,browseDialog:e.dialog||this._browsedlg,widget:this})},_layerChange:function(){var e=this._layerSelect.value;e&&(this.value={url:this.inputLayers[e-1].url},this.emit("change"))},_setBrowsePropertiesAttr:function(e){this.isSingleTenant=!0,this.map=e.map?e.map:this.map,this.portalUrl=e.portalUrl?e.portalUrl:this.portalUrl,this.portalSelf=e.portalSelf?e.portalSelf:this.portalSelf}});return t("extend-esri")&&a.setObject("dijit.RasterFunctionEditor.RFxFeatureSelect",m,i),m});